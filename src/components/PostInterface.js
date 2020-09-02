import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase'

import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';

import styles from '../styles/PostInterface.css'
import config from '../components/Firebase.js'

import profilePicture1 from '../assets/images/profilePicture1.png'


class PostInterface extends React.Component {
	constructor(props){
		super(props);

        this.postInputRef = React.createRef();
        this.postToDatabase = this.postToDatabase.bind(this);
	}

    postToDatabase(e){
        if(e.key == "Enter" && e.target.value != ""){
            //Post to database
            var postData = {
                authorID: this.props.uid,
                authorName: this.props.givenName + " " +this.props.familyName,
                body: e.target.value,
                avatar: this.props.avatar
            }

            firebase.database().ref('posts').push(postData);

            e.target.value = "";

            this.props.updatePost();
        }
    }

  render() {
    return(
    	<div className = {styles.container}>
            <div className = {styles.post}>
                <img src = {this.props.avatar} className = {styles.avatar}/>
                <input type = "text" name = "post" className = {styles.postInput} placeholder = {`Whats on your mind, ${this.props.givenName}?`} 
                onKeyDown={event => this.postToDatabase(event)}/>
            </div>

            <div className = {styles.bottomBar}>
                <div className = {styles.iconHolder}>
                    <VideocamIcon className = {styles.videoIcon} style={{ fontSize: 35 }}/>
                    <p>Live Video</p>
                </div>

                <div className = {styles.iconHolder}>
                     <PhotoLibraryIcon className = {styles.photoIcon} style={{ fontSize: 35 }}/>
                    <p>Photo/Video</p>
                </div>

                <div className = {styles.iconHolder}>
                    <EmojiEmotionsIcon className = {styles.feelingIcon} style={{ fontSize: 35 }}/>
                    <p>Feeling/Activity</p>
                </div>
            </div>
     	</div>
    );
  }
}

export default PostInterface;