import React from 'react'
import classes from './Datasets.scss'
import eventInfoClasses from 'components/EventInfo/EventInfo.scss'

class Datasets extends React.Component {

  constructor () {
    super()
  }

  render () {
    return (
      <div>
       <div className={eventInfoClasses.container}>
          <div className={eventInfoClasses.title}>
            DATASETS
          </div>
        </div>
      </div>
    )
  }
}

export default Datasets

