import { useState, useEffect } from 'react';
import { Contract, Web3Provider, Provider } from "zksync-web3";
import { VERIFICATION_CONTRACT_ADDRESS, VERIFICATION_CONTRACT_ABI } from "../constants/consts";
import { VerificationProps } from "../types/types";
import * as ethers from "ethers";

const useVerification = () => {
  const [isVerified, setIsVerified] = useState<boolean | null>(null);
  const [verificationData, setVerificationData] = useState<VerificationProps | null>(null);

  // // Declare the getVerified function outside of useEffect
  // const getVerified = async (contract, emailHash, serverSignature, serverAddress) => {
  //   return await contract.verifyServerSignature(emailHash, serverSignature, serverAddress);
  // };


  useEffect(() => {
    const verifySignature = async () => {
      if (!verificationData) return;

      try {
        const provider = new Provider("https://testnet.era.zksync.dev");
        const signer = (new Web3Provider(window.ethereum)).getSigner();
        // Note that we still need to get the Metamask signer
        const contract = new Contract(VERIFICATION_CONTRACT_ADDRESS, 
          VERIFICATION_CONTRACT_ABI, 
          signer);
        
        const verified = await contract.verifyServerSignature(
          verificationData.emailHash,
          verificationData.serverSignature,
          verificationData.serverAddress
        );


        setIsVerified(verified);

      } catch (error) {
        console.error("Verification error:", error);
        setIsVerified(false);
      }
    };

    verifySignature();
  }, [verificationData]);

  return {
    isVerified,
    setVerificationData
  };
};

export default useVerification;
