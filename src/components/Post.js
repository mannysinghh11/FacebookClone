import React from 'react';
import ReactDOM from 'react-dom';

import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import ShareIcon from '@material-ui/icons/Share';

import profilePicture2 from '../assets/images/profilePicture2.jpg'

import styles from '../styles/Post.css'


class Post extends React.Component {
	constructor(props){
		super(props);
	}

  render() {
    return(
    	<div className = {styles.container}>
            <div className = {styles.user}>
        		<img src = {this.props.avatar} className = {styles.avatar}/>
                <p className = {styles.name}>{this.props.fullName}</p>
            </div>

            <div className = {styles.postContent}>
                <p className = {styles.post}>{this.props.content}</p>
            </div>

            <div className = {styles.footer}>
                <div className = {styles.iconHolder}>
                    <ThumbUpIcon className={styles.icon}/>
                    <p>Like</p>
                </div>

                <div className = {styles.iconHolder}>
                    <ChatBubbleIcon className={styles.icon}/>
                    <p>Comment</p>
                </div>

                <div className = {styles.iconHolder}>
                    <ShareIcon className={styles.icon}/>
                    <p>Share</p>
                </div>

            </div>
    	</div>
    );
  }
}

export default Post;