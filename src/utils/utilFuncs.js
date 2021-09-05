import {Linking, Platform, Alert, Dimensions} from 'react-native';
import moment from 'moment';

export const validate = (regex, input) => regex.test(input);

export const matchRegex = (regex, input) => input.match(regex);

export const formatStringToDate = (str, format) => moment(str, format).toDate();

export const formatDate = (date, format) => moment(date).format(format);

export const changeDateFormat = (date, sourceFormat, targetFormat) => {
  const parsedDate = moment(date, sourceFormat);
  return formatDate(parsedDate, targetFormat);
};

export const openLinkUrl = url => {
  Linking.canOpenURL(url)
    .then(async supported => {
      if (supported) {
        await Linking.openURL(url);
      } else {
        console.log('Unable to open the url');
      }
    })
    .catch(err => {
      console.log(err);
    });
};

export const showAlert = (title, message, buttons) => {
  Alert.alert(title, message, [...buttons]);
};

export const isAndroid = Platform.OS === 'android';

export const isIOS = Platform.OS === 'ios';

export const screenWidth = Dimensions.get('screen').width;

export const screenHeight = Dimensions.get('screen').height;
