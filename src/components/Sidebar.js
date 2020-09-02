import React from 'react';
import ReactDOM from 'react-dom';
import SidebarLink from '../components/SidebarLink.js'

import styles from '../styles/Sidebar.css'


class Sidebar extends React.Component {
	constructor(props){
		super(props);
	}

  render() {
    return(
    	<div className = {styles.container}>
    		<SidebarLink title = "Account" fullName = {this.props.givenName + " " + this.props.familyName} icon = "AccountBoxIcon" avatar = {this.props.avatar}/>
            <SidebarLink title = "Friends" icon = "SupervisorAccountIcon"/>
            <SidebarLink title = "Groups" icon = "GroupAddIcon"/>
            <SidebarLink title = "Marketplace" icon = "StorefrontIcon"/>
            <SidebarLink title = "Watch" icon = "OndemandVideoIcon"/>
            <SidebarLink title = "Event" icon = "EventIcon"/>
            <SidebarLink title = "Memories" icon = "HistoryIcon"/>
            <SidebarLink title = "Saved" icon = "BookmarkIcon"/>
            <SidebarLink title = "Pages" icon = "FlagIcon"/>
            <SidebarLink title = "See More" icon = "ArrowDropDownIcon"/>
    	</div>
    );
  }
}

export default Sidebar;