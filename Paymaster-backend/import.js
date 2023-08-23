const fs = require('fs');
const path = require('path');

const imageFolderPath = 'https://raw.githubusercontent.com/intrepidcanadian/nftserver/main/assets/players/';

const getImagePath = (id) => {
  const imageName = `${id}.png`;
  return path.join(imageFolderPath, imageName);
};

const imagePaths = {
  1: getImagePath(1),
  2: getImagePath(2),
  3: getImagePath(3),
  4: getImagePath(4),
  5: getImagePath(5),
  6: getImagePath(6),
  7: getImagePath(7),
  8: getImagePath(8),
  9: getImagePath(9),
  10: getImagePath(10),
  11: getImagePath(11),
  12: getImagePath(12),
  13: getImagePath(13),
  14: getImagePath(14),
  15: getImagePath(15),
  16: getImagePath(16),
  17: getImagePath(17),
  18: getImagePath(18),
  19: getImagePath(19),
  20: getImagePath(20),
};

module.exports = imagePaths;