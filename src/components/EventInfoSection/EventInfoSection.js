import React from 'react'
import classes from './EventInfoSection.scss'

class EventInfoSection extends React.Component {

  static propTypes = {
    header: React.PropTypes.string.isRequired,
    text: React.PropTypes.string.isRequired,
    linkText: React.PropTypes.string.isRequired,
    url: React.PropTypes.string.isRequired
  }
  
  render () {
    var second_url = {};

    return (
      <div>
        <div className={classes.container}>
          <div className={classes.header}>
            {this.props.header}
          </div>
          <div className={classes.text}>
            {this.props.text}
          </div>
          <div className={classes.text}>
            <a className={classes.link} href={this.props.url}>
              {this.props.linkText}
            </a>
          </div>
          {this.props.url2 && <a className={classes.link} href={this.props.url2}>
            {this.props.linkText2}
          </a>}
        </div>
      </div>
    )
  }
}

export default EventInfoSection

