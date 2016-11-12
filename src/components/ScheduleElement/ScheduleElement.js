import React from 'react'
import classes from './ScheduleElement.scss'

class ScheduleElement extends React.Component {

  static propTypes = {
    startTime: React.PropTypes.string.isRequired,
    endTime: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired,
    location: React.PropTypes.string.isRequired,
    speaker: React.PropTypes.string
  }

  render () {
    return (
      <div>
        <div className={classes.container}>
          <div className={classes.timeContainer}>
            <div className={classes.time}> {this.props.startTime} </div>
            <div className={classes.time}> {this.props.endTime} </div>
          </div>
          <div className={classes.infoContainer}>
            <div className={classes.title}> {this.props.title} </div>
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

