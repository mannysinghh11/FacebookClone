import React from 'react';
import ReactDOM from 'react-dom';

import Navbar from '../components/Navbar.js'
import Sidebar from '../components/Sidebar.js'
import Storiesbar from '../components/Storiesbar.js'
import PostInterface from  '../components/PostInterface.js'
import Post from '../components/Post.js'
import Contact from '../components/Contacts.js'

import styles from '../styles/Home.css'


class Home extends React.Component {
	constructor(props){
		super(props);
	}

  render() {
    return(
        <div className = {styles.app}>
            <Navbar className = {styles.navbar}/>

            <div className = {styles.container}>
              <Sidebar />

              <div className = {styles.mainFeed}>
                <Storiesbar />
                <PostInterface />
                <Post avatar="test" fullName = "Manpreet Singh" content = "This is my post."/>
                <Post avatar="test" fullName = "Manpreet Singh" content = "This is my post."/>
                <Post avatar="test" fullName = "Manpreet Singh" content = "This is my post."/>
                <Post avatar="test" fullName = "Manpreet Singh" content = "This is my post."/>
              </div>

              <Contact className = {styles.contact}/>
            </div>
        </div>
    );
  }
}

export default Home;