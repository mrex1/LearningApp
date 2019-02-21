import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Image,
} from 'react-native';

export default class LoginView extends Component {

    state = {
        email   : '',
        password: '',
    }

  login(user,pw){
    this.props.go('Main')
  }

  validator = () => {
      let email=this.state.email
      if(email){
        var isValid = /^.+@[^.]+\..+/.test(email)
        if(isValid)this.login()
        else{
            alert('invalid input')
        }
      }
      else{
        alert('no input')
      }
  }

  render() {
    return (
      <View style={styles.container}>
      <Image 
      style={styles.logo}
      resizeMethod='auto'
      resizeMode='contain' 
      source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Logo_TV_2015.svg/1200px-Logo_TV_2015.svg.png'}}/>
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://cdn2.iconfinder.com/data/icons/flat-ui-icons-24-px/24/mail-24-128.png'}}/>
          <TextInput style={styles.inputs}
              placeholder="Email"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(email) => this.setState({email})}/>
        </View>
        
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://cdn0.iconfinder.com/data/icons/security-double-color-red-and-black-vol-2/52/key__security__password__open-128.png'}}/>
          <TextInput style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(password) => this.setState({password})}/>
        </View>

        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.validator('login')}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.buttonContainer} onPress={() => {}}>
            <Text style={styles.otherText}>Forgot your password?</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.buttonContainer} onPress={() => {}}>
            <Text style={styles.otherText}>Register</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  logo:{
    width: '80%',
    height:'40%',
    marginBottom:'10%',
    tintColor:'white'
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: 'rgba(255,255,255,0.7)',
      borderRadius:23,
      width:250,
      height:46,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:46,
      marginLeft:16,
      flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:'3%',
    width:250,
    borderRadius:23,
  },
  loginButton: {
    height:46,
    backgroundColor: "#f46242",
  },
  loginText: {
    color: 'white',
  },
  otherText:{
    color: '#f46242'
  }
});