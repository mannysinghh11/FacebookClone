import React from 'react';
import ReactDOM from 'react-dom';

import styles from '../styles/StoryCard.css'


class StoryCard extends React.Component {
	constructor(props){
		super(props);
	}

  render() {
    return(
    	<div className = {styles.container}>
    		<img src = {this.props.img} className = {styles.previewImage}/>
        <img src = {this.props.avatar} className = {styles.avatar}/>
        <p className = {styles.storyText}>{this.props.fullName}</p>
    	</div>
    );
  }
}

export default StoryCard;