import React from 'react'
import classes from './NavMenu.scss'
import { IndexLink } from 'react-router'
import { tabletBreakpoint, navMenuWidth } from 'constants/design'

class NavMenu extends React.Component {

  constructor () {
    super()
    this.handleResize = this.handleResize.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.state = {enabled: false, menuLeft: '0px', buttonLeft: '0px'}
  }

  handleResize (e) {
    const menuLeft = window.innerWidth <= tabletBreakpoint ? `-${navMenuWidth}px` : '0px'
    const buttonLeft = window.innerWidth <= tabletBreakpoint ? '0px' : `${navMenuWidth}px`
    this.setState({menuLeft: menuLeft, buttonLeft: buttonLeft})
  }

  componentDidMount () {
    this.handleResize()
    window.addEventListener('resize', this.handleResize)
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.handleResize)
  }

  handleClick () {
    const menuLeft = !this.state.enabled || window.innerWidth > tabletBreakpoint ? '0px' : `-${navMenuWidth}px`
    const buttonLeft = !this.state.enabled || window.innerWidth > tabletBreakpoint ? `${navMenuWidth}px` : '0px'
    this.setState({menuLeft: menuLeft, buttonLeft: buttonLeft, enabled: !this.state.enabled})
  }

  static propTypes = {
    logout: React.PropTypes.func
  }

  render () {
    return (
      <div>
        <button onClick={this.handleClick}
          className={classes.menuButton}
          style={{'left': `${this.state.buttonLeft}`}}>
          <img src='hamburger-icon.png' />
        </button>
        <div className={classes.navMenu}
          style={{'left': `${this.state.menuLeft}`}}>
          <a href={'https://www.hackduke.org'}>
            <img src='hackduke-logo.png' alt='Hackduke Logo' />
          </a>
          <div className={classes.menuItem}>
            <IndexLink onClick={this.handleClick} className={classes.linkElement}
              to={'/eventinfo'}>EVENT INFO</IndexLink>
          </div>
          <div className={classes.menuItem}>
            <IndexLink onClick={this.handleClick} className={classes.linkElement}
              to={'/schedule'}>SCHEDULE</IndexLink>
          </div>
          <div className={classes.menuItem}>
            <IndexLink onClick={this.handleClick} className={classes.linkElement}
              to={'/maps'}>MAPS</IndexLink>
          </div>
          <div className={classes.menuItem}>
            <IndexLink onClick={this.handleClick} className={classes.linkElement}
              to={'/travelinfo'}>TRAVEL INFO</IndexLink>
          </div>
        </div>
      </div>
    )
  }
}

// <div className={classes.menuItem}>
//   <IndexLink onClick={this.handleClick} className={classes.linkElement}
//     to={'/speakers'}>SPEAKERS</IndexLink>
// </div>
// <div className={classes.menuItem}>
//   <IndexLink onClick={this.handleClick} className={classes.linkElement}
//     to={'/datasets'}>DATASETS</IndexLink>
// </div>

export default NavMenu

