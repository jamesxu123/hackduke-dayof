import React from 'react'
// import classes from './TravelInfo.scss'
import eventInfoClasses from 'components/EventInfo/EventInfo.scss'

class TravelInfo extends React.Component {

  render () {
    return (
      <div>
        <div className={eventInfoClasses.container}>
          <div className={eventInfoClasses.title}>
            TRAVEL INFO
          </div>
        </div>
      </div>
    )
  }
}

export default TravelInfo

