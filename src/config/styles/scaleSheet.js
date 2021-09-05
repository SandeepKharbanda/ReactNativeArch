import {PixelRatio} from 'react-native';
import {AppUtils} from 'magenta-utils';

const {isIOS, screenWidth, screenHeight} = AppUtils;

const baseWidth = 375;
const baseHeight = 667;

export const scaleSize = size => {
  const scaledWidth = (screenWidth / baseWidth) * size;
  return scaledWidth < 1 ? scaledWidth : Math.round(scaledWidth);
};

export const scaleSizeWidth = size =>
  Math.round((screenWidth / baseWidth) * size);

export const scaleSizeHeight = size =>
  Math.round((screenHeight / baseHeight) * size);

export const scaleFontSize = size => {
  const scale = screenWidth / baseWidth;
  const newSize = size * scale;
  if (isIOS) {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
};
