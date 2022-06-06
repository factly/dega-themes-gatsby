const defaultSizes = [100, 400, 600, 1024, 1280];

const generateUrls = (url, sizes) => {
  const urls = sizes.map((s) => `${url}?rs:fill/w:${s}`);
  return urls;
};

const generateSrcSet = (url, width) => {
  const filteredSizes = defaultSizes.filter((s) => s <= width);
  if (filteredSizes.indexOf(width) === -1) {
    filteredSizes.push(width);
  }
  const urls = generateUrls(url, filteredSizes);
  const srcSet = urls.map((u, i) => `${u} ${filteredSizes[i]}w`).join(`,\n`);
  return srcSet;
};

const generateSizes = (width) => `(max-width: ${width}px) 100vw, ${width}px`;

const generateAspectRatio = (width, height) => {
  if (width && height) {
    return width / height;
  }
  return null;
};

const generateFluidObject = ({ url, dimensions }) => {
  const [width, height] = dimensions.split('x');
  const srcSet = generateSrcSet(url, width);
  const src = url;
  const sizes = generateSizes(width);
  const aspectRatio = generateAspectRatio(width, height);
  return { srcSet, src, sizes, aspectRatio };
};

const generateFixedObject = ({ url, dimensions }) => {
  const [width, height] = dimensions.split('x');
  const src = url;
  const srcSet = generateSrcSet(url, width);
  return { srcSet, src, width, height };
};

export default generateFluidObject;
