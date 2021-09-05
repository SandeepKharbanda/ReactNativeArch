import React from 'react';
import {Modal} from 'react-native';

const CustomModal = ({isVisible, children}) => (
  <Modal
    supportedOrientations={['portrait']}
    transparent
    visible={isVisible}
    onRequestClose={() => {}}>
    {children}
  </Modal>
);

export default CustomModal;
