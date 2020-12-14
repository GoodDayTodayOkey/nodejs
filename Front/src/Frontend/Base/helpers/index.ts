export const getHeightBackgroundWithImage = ({src, cb}) => {
  const img = new Image();
  img.src = src;
  const bgImgHeight = img.height;
  return cb(bgImgHeight);
}