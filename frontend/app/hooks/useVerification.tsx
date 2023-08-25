import { useState, useEffect } from 'react';
import { Contract, utils } from "zksync-web3";
import { VERIFICATION_CONTRACT_ADDRESS, VERIFICATION_CONTRACT_ABI } from "../constants/consts";
import * as ethers from "ethers";


const useVerification = () => {
  const [isVerified, setIsVerified] = useState<boolean | null>(null);
  const [verificationData, setVerificationData] = useState<VerificationProps | null>(null);

  useEffect(() => {
    const verifySignature = async () => {
      if(!verificationData) return;

      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const verificationContract = new Contract(VERIFICATION_CONTRACT_ADDRESS, VERIFICATION_CONTRACT_ABI, signer);
        const verified = await verificationContract.verifyServerSignature(verificationData.emailHash, verificationData.serverSignature, verificationData.serverAddress);
        
        setIsVerified(verified);
      } catch (error) {
        console.error("Verification error:", error);
        setIsVerified(false);
      }
    };

    verifySignature();
  }, [verificationData]); // This effect will run every time `verificationData` changes.

  return {
    isVerified,
    setVerificationData
  };
};

export default useVerification;