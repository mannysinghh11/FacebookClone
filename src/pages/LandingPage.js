import React from 'react';
import ReactDOM from 'react-dom';

import Home from './Home.js'
import Login from './Login.js'

import styles from '../styles/LandingPage.css'


class LandingPage extends React.Component {
	constructor(props){
		super(props);

    this.state = {
      currentPage: "login",
      familyName: "",
      givenName: "",
      avatar: "",
      uid: ""
    }

    this.updateCurrentPage = this.updateCurrentPage.bind(this);
    this.updateUserInfo = this.updateUserInfo.bind(this);
	}

  updateUserInfo(familyName, givenName, avatar, uid){
    this.setState({
      familyName: familyName,
      givenName: givenName,
      avatar: avatar,
      uid: uid
    });
  }

  updateCurrentPage(page){
    this.setState({
      currentPage: page
    })
  }

  render() {
    if(this.state.currentPage == "login"){
      return <Login updatePage = {this.updateCurrentPage} updateUser = {this.updateUserInfo}/>
    }else if(this.state.currentPage == "feed"){
      return <Home updatePage = {this.updateCurrentPage} familyName = {this.state.familyName} givenName = {this.state.givenName} avatar = {this.state.avatar}
      uid = {this.state.uid}/>
    }
  }
}

export default LandingPage;