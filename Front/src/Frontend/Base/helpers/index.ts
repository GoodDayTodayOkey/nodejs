export const getDimensions = async ({src, cb}) => {
  const img = new Image();
  img.src = src;
  const loadImage = new Promise((resolve, reject) => {
    img.onload = () => resolve('loaded');
  });
  await loadImage.then(() => {return cb({height: img.height, widgt: img.width})})
}