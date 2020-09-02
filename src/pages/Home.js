import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase'

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

    this.state = {
      allPosts: []
    }

    this.updatePosts = this.updatePosts.bind(this);
    this.renderPosts = this.renderPosts.bind(this);
	}

  componentDidMount(){
    this.updatePosts();
  }

  updatePosts(){
    var postDB = firebase.database().ref('posts');

    postDB.on('value', (result) => {
      let posts = result.val();
      let newState = [];
      for(let post in posts){
        newState.push({
          fullName: posts[post].authorName,
          avatar: posts[post].avatar,
          body: posts[post].body
        })
      }

      this.setState({
        allPosts: newState
      })
    })
  }

  renderPosts(){
    return(
      this.state.allPosts.reverse().map((data, i) => {
        //console.log(data);
        return(
          <Post key = {i} avatar = {data.avatar} fullName =  {data.fullName} content = {data.body}/>
        );
      })
    );
  }

  render() {
    return(
        <div className = {styles.app}>
            <Navbar className = {styles.navbar} updatePage={this.props.updatePage} 
            avatar={this.props.avatar} familyName = {this.props.familyName} givenName = {this.props.givenName} uid = {this.props.uid}/>

            <div className = {styles.container}>
              <Sidebar avatar={this.props.avatar} familyName = {this.props.familyName} givenName = {this.props.givenName} uid = {this.props.uid}/>

              <div className = {styles.mainFeed}>
                <Storiesbar />
                <PostInterface avatar={this.props.avatar} familyName = {this.props.familyName} givenName = {this.props.givenName} uid = {this.props.uid}
                updatePost = {this.updatePosts}/>
                {this.renderPosts()}
              </div>

              <Contact className = {styles.contact}/>
            </div>
        </div>
    );
  }
}

export default Home;