import React from 'react'
import classes from './Speakers.scss'
import eventInfoClasses from 'components/EventInfo/EventInfo.scss'

class Speakers extends React.Component {

  constructor () {
    super()
  }

  render () {
    return (
      <div>
       <div className={eventInfoClasses.container}>
          <div className={eventInfoClasses.title}>
          SPEAKERS
          </div>
        </div>
      </div>
    )
  }
}

export default Speakers

