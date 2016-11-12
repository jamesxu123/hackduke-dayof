import React from 'react'
import classes from './EventInfoSection.scss'

class EventInfoSection extends React.Component {

  constructor () {
    super()
  }

  static propTypes = {
    header: React.PropTypes.string.isRequired,
    text: React.PropTypes.string.isRequired,
    linkText: React.PropTypes.string.isRequired,
    url: React.PropTypes.string.isRequired,
  }

  render () {
    return (
      <div>
        <div className={classes.container}>
          <div className={classes.header}>
            {this.props.header}
          </div>
          <div className={classes.text}>
            {this.props.text}
          </div>
          <a className={classes.link} href={this.props.url}>
            {this.props.linkText}
          </a>
        </div>
      </div>
    )
  }
}

export default EventInfoSection

