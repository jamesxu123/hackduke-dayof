import React from 'react'
import classes from './Schedule.scss'
import eventInfoClasses from 'components/EventInfo/EventInfo.scss'
import ScheduleElement from 'components/ScheduleElement'
import { Col, Row } from 'react-bootstrap'

import data from './schedule-data'

const formatDate = date => {
  const dayOfWeek = date.toLocaleDateString('en-US', {
    weekday: 'short'
  })
  // date.getMonth()+1 to fix zero-indexing months
  return `${dayOfWeek} ${date.getMonth()+1}/${date.getDate()}`
}

class Schedule extends React.Component {
  render () {
    return (
      <div>
        <div className={eventInfoClasses.container}>
          <div className={eventInfoClasses.title}>SCHEDULE</div>
          <Row>
            {data.map(({ date, events }, dayIndex) => (
              <Col md={6} key={date}>
                <div
                  className={
                    dayIndex === 0
                      ? classes.leftColumnContainer
                      : classes.rightColumnContainer
                  }
                >
                  <div className={classes.dateHeader}>{formatDate(date)}</div>
                  <div className={classes.contentContainer}>
                    {events.map(({ time, name, locations }, index) => {
                      let [startTime, endTime] = time.split(' - ')
                      if (endTime) startTime += ' -'
                      return (
                        <ScheduleElement
                          startTime={startTime}
                          key={index}
                          endTime={endTime}
                          title={name}
                          location={locations && locations[0]}
                        />
                      )
                    })}
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    )
  }
}

export default Schedule
