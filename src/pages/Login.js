import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';

import fbLogo from '../assets/images/facebook-logo.png'

import config from '../components/Firebase.js'

import styles from '../styles/Login.css'


class Login extends React.Component {
	constructor(props){
		super(props);

    firebase.initializeApp(config);

    this.login = this.login.bind(this);
	}

  login(){
    var provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider).then((result) => {
      //console.log(result);
      var user = firebase.auth().currentUser;

      this.props.updateUser(result.additionalUserInfo.profile.family_name, result.additionalUserInfo.profile.given_name, 
        result.additionalUserInfo.profile.picture, user.uid);
      this.props.updatePage("feed");

    }).catch(function(error){
      console.log(error.message);
    })
  }

  render() {
    return(
        <div className = {styles.app}>
            <img src = {fbLogo} className = {styles.fbLogo}/>
            <button className = {styles.loginButton} onClick = {this.login}><p className = {styles.loginText}>Click here to log in with Google</p></button>
        </div>
    );
  }
}

export default Login;