import React from 'react'
import classes from './Schedule.scss'
import eventInfoClasses from 'components/EventInfo/EventInfo.scss'
import ScheduleElement from 'components/ScheduleElement'
import { Col, Row } from 'react-bootstrap'

let satStartTimes = ['10:00 am - ', '12:00 pm - ', '2:00 pm - ', '4:00 pm - ', 
                     '10:00 am - ', '12:00 pm - ', '2:00 pm - ', '4:00 pm - ']
let satEndTimes = ['12:00 am', '2:00 pm', '4:00 pm', '6:00 pm', 
                   '12:00 am', '2:00 pm', '4:00 pm', '6:00 pm']
let satTitles = ['Discovering new technologies', 'Tech in Health', 'Education in Tech', 'Facbeook Tech Talk',
                 'Discovering new technologies', 'Tech in Health', 'Education in Tech', 'Facbeook Tech Talk']
let satSpeakers = ['Yu Zhou Lee | Twitter', null, null, 'Matthew Smith | Facebook',
                   'Yu Zhou Lee | Twitter', null, null, 'Matthew Smith | Facebook']
let satLocations = ['Schiciano Auditorium', 'Telcom - Innovation Co-lab Hardware Lab', 'CIEMAS', 'Teer Building',
                    'Schiciano Auditorium', 'Telcom - Innovation Co-lab Hardware Lab', 'CIEMAS', 'Teer Building']

class Schedule extends React.Component {

  constructor () {
    super()
  }

  render () {
    return (
      <div>
       <div className={eventInfoClasses.container}>
          <div className={eventInfoClasses.title}>
            SCHEDULE
          </div>
          <Row>
            <Col md={6}>
              <div className={classes.leftColumnContainer}> 
                <div className={classes.dateHeader}>
                  SAT 11/19
                </div>
                <div className={classes.contentContainer}>
                  {satStartTimes.map((startTime, index) => {
                      return <ScheduleElement startTime={startTime} key={index}
                                endTime={satEndTimes[index]}
                                title={satTitles[index]}
                                location={satLocations[index]}
                                speaker={satSpeakers[index]} />
                    }
                  )}
                </div>  
              </div>
            </Col>
            <Col md={6}>
              <div className={classes.rightColumnContainer}> 
                <div className={classes.dateHeader}>
                  SUN 11/20
                </div>
                <div className={classes.contentContainer}>
                  {satStartTimes.map((startTime, index) => {
                      return <ScheduleElement startTime={startTime} key={index}
                                endTime={satEndTimes[index]}
                                title={satTitles[index]}
                                location={satLocations[index]}
                                speaker={satSpeakers[index]} />
                    }
                  )}
                </div>  
              </div>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

export default Schedule

