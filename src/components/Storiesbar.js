import React from 'react';
import ReactDOM from 'react-dom';
import StoryCard from '../components/StoryCard.js'

import story1 from '../assets/images/story1.jpg'
import story2 from '../assets/images/story2.jpeg'
import profilePicture1 from '../assets/images/profilePicture1.png'
import profilePicture2 from '../assets/images/profilePicture2.jpg'

import styles from '../styles/Storiesbar.css'


class Storiesbar extends React.Component {
	constructor(props){
		super(props);
	}

  render() {
    return(
    	<div className = {styles.container}>
    		<StoryCard img = {story1} fullName = "Adam Silver" avatar = {profilePicture1} />
            <StoryCard img = {story2} fullName = "Tyrone King" avatar = {profilePicture2} />
            <StoryCard img = {story1} fullName = "Adam Silver" avatar = {profilePicture1} />
            <StoryCard img = {story2} fullName = "Tyrone King" avatar = {profilePicture2} />
            <StoryCard img = {story1} fullName = "Adam Silver" avatar = {profilePicture1} />
            <StoryCard img = {story2} fullName = "Tyrone King" avatar = {profilePicture2} />
    	</div>
    );
  }
}

export default Storiesbar;
