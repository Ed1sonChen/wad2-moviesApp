import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./VerticalNav.css"

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
export default class VerticalNav extends Component {
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
            <ListItem component={NavLink} button to="/search" onClick={this.closeSideNav} activeClassName="selected">
              <ListItemText primary="Search" />
            </ListItem>
          </List>

        </div>
      </nav>
    );
  }
}