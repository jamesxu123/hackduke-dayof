import React from 'react';
import classes from './NavMenu.scss';
import { IndexLink } from 'react-router';
import { tabletBreakpoint, navMenuWidth } from 'constants/design';

class NavMenu extends React.Component {
  constructor() {
    super();
    this.handleResize = this.handleResize.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = { enabled: false, menuLeft: '0px', buttonLeft: '0px' };
  }

  handleResize(e) {
    const menuLeft =
      window.innerWidth <= tabletBreakpoint ? `-${navMenuWidth}px` : '0px';
    const buttonLeft =
      window.innerWidth <= tabletBreakpoint ? '0px' : `${navMenuWidth}px`;
    this.setState({ menuLeft: menuLeft, buttonLeft: buttonLeft });
  }

  componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleClick() {
    const menuLeft =
      !this.state.enabled || window.innerWidth > tabletBreakpoint
        ? '0px'
        : `-${navMenuWidth}px`;
    const buttonLeft =
      !this.state.enabled || window.innerWidth > tabletBreakpoint
        ? `${navMenuWidth}px`
        : '0px';
    this.setState({
      menuLeft: menuLeft,
      buttonLeft: buttonLeft,
      enabled: !this.state.enabled
    });
  }

  static propTypes = {
    logout: React.PropTypes.func
  };

  render() {
    return (
      <div>
        <button
          onClick={this.handleClick}
          className={classes.menuButton}
          style={{ left: `${this.state.buttonLeft}` }}
        >
          <img src="hamburger-icon.png" />
        </button>
        <div
          className={classes.navMenu}
          style={{ left: `${this.state.menuLeft}` }}
        >
          <a href={'https://hackduke.org'}>
            <img src="hackduke-logo.svg" alt="Hackduke Logo" />
          </a>
          <div className={classes.menuItem}>
            <IndexLink
              onClick={this.handleClick}
              className={classes.linkElement}
              activeClassName={classes.activeLinkElement}
              to={'/'}
            >
              Event Info
            </IndexLink>
          </div>
          <div className={classes.menuItem}>
            <IndexLink
              onClick={this.handleClick}
              className={classes.linkElement}
              activeClassName={classes.activeLinkElement}
              to={'/schedule'}
            >
              Schedule
            </IndexLink>
          </div>
          <div className={classes.menuItem}>
            <IndexLink
              onClick={this.handleClick}
              className={classes.linkElement}
              activeClassName={classes.activeLinkElement}
              to={'/maps'}
            >
              Maps
            </IndexLink>
          </div>
          <div className={classes.menuItem}>
            <IndexLink
              onClick={this.handleClick}
              className={classes.linkElement}
              activeClassName={classes.activeLinkElement}
              to={'/travelinfo'}
            >
              Travel Info
            </IndexLink>
          </div>
          <div className={classes.menuItem}>
            <IndexLink
              onClick={this.handleClick}
              className={classes.linkElement}
              activeClassName={classes.activeLinkElement}
              to={'/speakers'}
            >
              Speakers
            </IndexLink>
          </div>
          <div className={classes.menuItem}>
            <IndexLink
              onClick={this.handleClick}
              className={classes.linkElement}
              activeClassName={classes.activeLinkElement}
              to={'/datasets'}
            >
              Datasets
            </IndexLink>
          </div>
        </div>
      </div>
    );
  }
}

export default NavMenu;
