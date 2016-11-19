import React from 'react'
import classes from './SpeakersElement.scss'
// import eventInfoClasses from 'components/EventInfo/EventInfo.scss'

class SpeakersElement extends React.Component {

  static propTypes = {
    title: React.PropTypes.string.isRequired,
    time: React.PropTypes.string.isRequired,
    location: React.PropTypes.string.isRequired,
    speaker: React.PropTypes.string.isRequired,
    text: React.PropTypes.string.isRequired
  }

  render () {
    return (
      <div>
        <div className={classes.container}>
          <div className={classes.titleContainer}>
            <div className={classes.title}> {this.props.title} </div>
            <div className={classes.time}> {this.props.time} </div>
            <div className={classes.time}> {this.props.location} </div>
          </div>
          <div className={classes.infoContainer}>
            <div className={classes.speaker}> {this.props.speaker} </div>
            <div className={classes.text}> {this.props.text} </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SpeakersElement
