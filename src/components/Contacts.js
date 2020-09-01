import React from 'react';
import ReactDOM from 'react-dom';

import VideoCallIcon from '@material-ui/icons/VideoCall';
import SearchIcon from '@material-ui/icons/Search';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import profilePicture1 from '../assets/images/profilePicture1.png'

import ContactCard from '../components/ContactCard.js'

import styles from '../styles/Contacts.css'


class Contacts extends React.Component {
	constructor(props){
		super(props);
	}

  render() {
    return(
    	<div className = {styles.container}>
            <div className = {styles.header}>
                <p className = {styles.headerText}>Contacts</p>
                <VideoCallIcon className = {styles.icon}/>
                <SearchIcon className = {styles.icon}/>
                <MoreHorizIcon className = {styles.icon} />
            </div>

            <div className = {styles.contactContainer}>
                <ContactCard fullName = "Adrian Rivera" avatar = {profilePicture1} />
                <ContactCard fullName = "Adrian Rivera" avatar = {profilePicture1} />
                <ContactCard fullName = "Adrian Rivera" avatar = {profilePicture1} />
                <ContactCard fullName = "Adrian Rivera" avatar = {profilePicture1} />
                <ContactCard fullName = "Adrian Rivera" avatar = {profilePicture1} />
                <ContactCard fullName = "Adrian Rivera" avatar = {profilePicture1} />
                <ContactCard fullName = "Adrian Rivera" avatar = {profilePicture1} />
                <ContactCard fullName = "Adrian Rivera" avatar = {profilePicture1} />
            </div>
    	</div>
    );
  }
}

export default Contacts;