import React from 'react'
import classes from './ScheduleElement.scss'

class ScheduleElement extends React.Component {

  static propTypes = {
    startTime: React.PropTypes.string.isRequired,
    endTime: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired,
    location: React.PropTypes.string.isRequired,
    type: React.PropTypes.string.isRequired,
    speaker: React.PropTypes.string,
    link: React.PropTypes.string,
    linkTitle: React.PropTypes.string
  }

  render () {
    var type;
    if (this.props.type == 'meal') {
        type = classes.meal;
    } else if (this.props.type == 'important') {
        type = classes.important;
    } else if (this.props.type == 'event') {
        type = classes.event;
    } else {
        type = classes.other;
    }

    return (
      <div>
        <div className={classes.container}>
          <div className={classes.timeContainer}>
            <div className={classes.time}> {this.props.startTime} </div>
            <div className={classes.time}> {this.props.endTime} </div>
          </div>
          <div className={classes.infoContainer}>
            <div className={type}>
                <div className={classes.title}> {this.props.title} </div>
            </div>
            {this.props.link ? (
              <div className={classes.link}>
                <a href={this.props.link}> {this.props.linkTitle} </a>
              </div>
            ) : null }
            {this.props.speaker ? (
              <div className={classes.speaker}> {this.props.speaker} </div>
            ) : null }
            <div className={classes.location}> {this.props.location} </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ScheduleElement

