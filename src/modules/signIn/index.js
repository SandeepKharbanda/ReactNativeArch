import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import {saveUserInfo} from '../../services/auth/action';
import styles from './styles';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const user = {name: 'Sandeep Kharbanda'};
    this.props.saveUserInfo(user);
  }

  render() {
    const {user} = this.props;
    return (
      <View style={styles.container}>
        {!!user && <Text style={styles.text}> {user.name} </Text>}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  user: state.auth.user,
});

const mapDispatchToProps = {
  saveUserInfo,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
