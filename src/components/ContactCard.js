import React from 'react';
import ReactDOM from 'react-dom';

import styles from '../styles/ContactCard.css'


class ContactCard extends React.Component {
	constructor(props){
		super(props);
	}

  render() {
    return(
    	<div className = {styles.container}>
            <img src = {this.props.avatar} className = {styles.avatar}/>
            <p className = {styles.contactText}>{this.props.fullName}</p>
    	</div>
    );
  }
}

export default ContactCard;