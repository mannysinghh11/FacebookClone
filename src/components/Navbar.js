import React from 'react';
import ReactDOM from 'react-dom';
import ReactTooltip from 'react-tooltip';

import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import StorefrontIcon from '@material-ui/icons/Storefront';
import GroupIcon from '@material-ui/icons/Group';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle';

import facebookLogo from '../assets/images/facebook-logo.png'
import styles from '../styles/Navbar.css'

class Navbar extends React.Component {
	constructor(props){
		super(props);

		this.logout = this.logout.bind(this);
	}

	logout(){
		this.props.updatePage("login");
	}

  render() {
    return(
    	<div className = {styles.container}>
    		<div className = {styles.leftNavbar}>
	    		<img src = {facebookLogo} className = {styles.facebookLogo} />

	    		<div className = {styles.searchContainer}>
		    		<SearchIcon />
		        	<input type = "text" name = "search" className = {styles.search} placeholder = "Search Facebook"/>
		        </div>
	        </div>


	        <div className = {styles.middleNavbar}>
	        	<ReactTooltip id = "homeTooltip" effect = "solid" className = {styles.tooltip}>Home</ReactTooltip>
	        	<ReactTooltip id = "watchTooltip" effect = "solid" className = {styles.tooltip}>Watch</ReactTooltip>
	        	<ReactTooltip id = "marketplaceTooltip" effect = "solid" className = {styles.tooltip}>Marketplace</ReactTooltip>
	        	<ReactTooltip id = "groupTooltip" effect = "solid" className = {styles.tooltip}>Groups</ReactTooltip>
	        	<ReactTooltip id = "gamingTooltip" effect = "solid" className = {styles.tooltip}>Gaming</ReactTooltip>

	        	<HomeIcon data-tip data-for="homeTooltip" style={{ fontSize: 35 }} className = {styles.middleIcon}/>
	        	<OndemandVideoIcon data-tip data-for="watchTooltip" style={{ fontSize: 35 }} className = {styles.middleIcon}/>
	        	<StorefrontIcon data-tip data-for="marketplaceTooltip" style={{ fontSize: 35 }} className = {styles.middleIcon}/>
	        	<GroupIcon data-tip data-for="groupTooltip" style={{ fontSize: 35 }} className = {styles.middleIcon}/>
	        	<SportsEsportsIcon data-tip data-for="gamingTooltip" style={{ fontSize: 35 }} className = {styles.middleIcon}/>
	        </div>

	        <div className = {styles.rightNavbar}>
	        	<div className = {styles.userInfo}>
		        	<img src = {this.props.avatar} className = {styles.avatar}/>
		        	<p>{this.props.givenName} {this.props.familyName}</p>
		        </div>

		        <ReactTooltip id = "createTooltip" effect = "solid" className = {styles.tooltip}>Create</ReactTooltip>
	        	<ReactTooltip id = "messengerTooltip" effect = "solid" className = {styles.tooltip}>Messenger</ReactTooltip>
	        	<ReactTooltip id = "notificationsplaceTooltip" effect = "solid" className = {styles.tooltip}>Notifications</ReactTooltip>
	        	<ReactTooltip id = "accountTooltip" effect = "solid" className = {styles.tooltip}>Account</ReactTooltip>

	        	<AddCircleIcon data-tip data-for="createTooltip" style={{ fontSize: 25 }} className = {styles.rightIcon}/>
	        	<ChatIcon data-tip data-for="messengerTooltip" style={{ fontSize: 25 }} className = {styles.rightIcon}/>
	        	<NotificationsIcon data-tip data-for="notificationsplaceTooltip" style={{ fontSize: 25 }} className = {styles.rightIcon}/>
	        	<ArrowDropDownCircleIcon data-tip data-for="accountTooltip" style={{ fontSize: 25 }} className = {styles.rightIcon} onClick={this.logout}/>
	        </div>



        </div>
    );
  }
}

export default Navbar;