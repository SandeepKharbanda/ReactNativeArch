import {StyleSheet} from 'react-native';
import {ScaleSheet, Fonts, Colors} from 'magenta-styles';

const {scaleSize} = ScaleSheet;
const {ROBOTO_BOLD_FAMILY} = Fonts;
const {COLOR_000000} = Colors;

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: ROBOTO_BOLD_FAMILY,
    fontSize: scaleSize(30),
    color: COLOR_000000,
  },
});
