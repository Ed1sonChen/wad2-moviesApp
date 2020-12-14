import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./VerticalNav.css"
import {Button} from 'antd';
import {Link,withRouter} from 'react-router-dom'

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

class VerticalNav extends Component {
  state = { isOpen: false };
  toggleSideNav = () => {
    const { isOpen } = this.state;
    this.setState({
      isOpen: !isOpen
    });
  };
  closeSideNav = () => {
    this.setState({
      isOpen: false
    });
  };
  render() {
    const { isOpen } = this.state;
    const isSideNavOpen = isOpen ? "open" : "";
    const activeBtn = isOpen ? "#61dafb" : "";
    return (
      <nav>
          {!this.props.location.pathname.startsWith('/login')&&<div className="header-user">
          {window.username ? <span style={{marginTop:-10}}>Chen</span> : <Link to={'/login'}><Button>login</Button></Link>}
        </div>}
        <div className="container">
          <button
            className="nav-btn"
            onClick={this.toggleSideNav}
            style={{ color: activeBtn }}
          >
            <i className="fas fa-bars" />
          </button>

          <List component="ul" aria-label="main mailbox folders" className={isSideNavOpen}>
            <ListItem component={NavLink} button to="/movies" onClick={this.closeSideNav} activeClassName="selected">
              <ListItemText primary="Movies" />
            </ListItem>
            <ListItem component={NavLink} button to="/tvshows" onClick={this.closeSideNav} activeClassName="selected">
              <ListItemText primary="Tv Shows" />
            </ListItem>
            <ListItem component={NavLink} button to="/watchlist" onClick={this.closeSideNav} activeClassName="selected">
              <ListItemText primary="Watch List" />
            </ListItem>
            <ListItem component={NavLink} button to="/favourite" onClick={this.closeSideNav} activeClassName="selected">
              <ListItemText primary="Favourite" />
            </ListItem>
            <ListItem component={NavLink} button to="/search" onClick={this.closeSideNav} activeClassName="selected">
              <ListItemText primary="Search" />
            </ListItem>
          </List>

        </div>
      </nav>
    );
  }
}

export default withRouter(VerticalNav)