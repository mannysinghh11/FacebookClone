import React from 'react';
import ReactDOM from 'react-dom';

import AccountBoxIcon from '@material-ui/icons/AccountBox';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import StorefrontIcon from '@material-ui/icons/Storefront';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import EventIcon from '@material-ui/icons/Event';
import HistoryIcon from '@material-ui/icons/History';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import FlagIcon from '@material-ui/icons/Flag';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

import styles from '../styles/SidebarLink.css'

class SidebarLink extends React.Component {
	constructor(props){
		super(props);
	}

  renderProperIcon(){
    if(this.props.icon == "AccountBoxIcon"){
      //Render User info
      return(
        <div className = {styles.container}>
          <img src = {this.props.avatar} className = {styles.avatar}/>
          <p className = {styles.text}>{this.props.fullName}</p>
        </div>
      );
    }else if(this.props.icon == "SupervisorAccountIcon"){
      return(
        <div className = {styles.container}>
          <SupervisorAccountIcon className = {styles.icon} style={{ fontSize: 35 }}/>
          <p className = {styles.text}>{this.props.title}</p>
        </div>
      );
    }else if(this.props.icon == "GroupAddIcon"){
      return(
        <div className = {styles.container}>
          <GroupAddIcon className = {styles.icon} style={{ fontSize: 35 }}/>
          <p className = {styles.text}>{this.props.title}</p>
        </div>
      );
    }else if(this.props.icon == "StorefrontIcon"){
      return(
        <div className = {styles.container}>
          <StorefrontIcon className = {styles.icon} style={{ fontSize: 35 }}/>
          <p className = {styles.text}>{this.props.title}</p>
        </div>
      );
    }else if(this.props.icon == "OndemandVideoIcon"){
      return(
        <div className = {styles.container}>
          <OndemandVideoIcon className = {styles.icon} style={{ fontSize: 35 }}/>
          <p className = {styles.text}>{this.props.title}</p>
        </div>
      );
    }else if(this.props.icon == "EventIcon"){
      return(
        <div className = {styles.container}>
          <EventIcon className = {styles.icon} style={{ fontSize: 35 }}/>
          <p className = {styles.text}>{this.props.title}</p>
        </div>
      );
    }else if(this.props.icon == "HistoryIcon"){
      return(
        <div className = {styles.container}>
          <HistoryIcon className = {styles.icon} style={{ fontSize: 35 }}/>
          <p className = {styles.text}>{this.props.title}</p>
        </div>
      );
    }else if(this.props.icon == "BookmarkIcon"){
      return(
        <div className = {styles.container}>
          <BookmarkIcon className = {styles.icon} style={{ fontSize: 35 }}/>
          <p className = {styles.text}>{this.props.title}</p>
        </div>
      );
    }else if(this.props.icon == "FlagIcon"){
      return(
        <div className = {styles.container}>
          <FlagIcon className = {styles.icon} style={{ fontSize: 35 }}/>
          <p className = {styles.text}>{this.props.title}</p>
        </div>
      );
    }else if(this.props.icon == "ArrowDropDownIcon"){
      return(
        <div className = {styles.container}>
          <ArrowDropDownIcon className = {styles.icon} style={{ fontSize: 35 }}/>
          <p className = {styles.text}>{this.props.title}</p>
        </div>
      );
    }
  }

  render() {
    return this.renderProperIcon();
  }
}

export default SidebarLink;