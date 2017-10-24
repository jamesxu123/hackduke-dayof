import React from 'react'
import classes from './Schedule.scss'
import eventInfoClasses from 'components/EventInfo/EventInfo.scss'
import ScheduleElement from 'components/ScheduleElement'
import { Col, Row } from 'react-bootstrap'

let satStartTimes = ['10:00 am -', '10:00 am -', '11:45 am -', '1:30 pm -', '1:30 pm -', '1:30 pm -', '1:30 pm -', '2:00 pm -', '2:15 pm -', '2:15 pm -', '2:30 pm -', '2:30 pm -', '3:30 pm -', '3:30 pm -', '3:30 pm -', '3:30 pm -', '4:00 pm -', '4:15 pm -', '5:00 pm -', '5:00 pm -', '5:00 pm -', '5:00 pm -', '6:15 pm -', '7:45 pm -', '7:45 pm -', '8:30 pm -', '9:00 pm -', '10:00 pm -']
let satEndTimes = ['11:45 am ', '11:45 am ', '1:15 pm ', '2:30 pm ', '2:30 pm ', '2:30 pm ', '2:30 pm ', '3:00 pm ', '5:00 pm ', '3:00 pm ', '3:30 pm ', '3:15 pm ', '5:00 pm ', '4:00 pm ', '4:00 pm ', '4:00 pm ', '5:00 pm ', '5:00 pm ', '6:30 pm ', '6:00 pm ', '6:00 pm ', '6:00 pm ', '7:45 pm ', '8:30 pm ', '8:30 pm ', '9:30 pm ', '12:00 am ', '11:00 pm ']
let satTitles = ['Check-In', 'Lunch', 'Opening Ceremony', 'Inequality Track Talk', 'Education Track Talk', 'Energy/Environment Track Talk', 'Health/Wellness Track Talk', 'Team Formation', 'Hedgehogs!', 'Duke eNable Workshop', 'Smartcar Tech Talk', 'Coinbase Tech Talk', 'Colab IoT Workshop', 'Appian React Workshop', 'Microfinancing through Blockchain Workshop', 'Github Tech Talk', 'Office Hours', 'ConsenSys Tech Talk', 'Scavenger Hunt', 'Soft Skills That Matter Talk', 'Intro to Git', 'Zoho Tech Talk', 'Dinner', 'Capital One Tech Talk', 'Microsoft Tech Talk', 'Female-Identifying Mixer', 'Frisbee', 'MLH Stack Cup']
let satSpeakers = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, 'Dhruv Luthra', null, 'Elissa', null, null, 'Azhar', 'Shelley Vohr', null, null, null, null, null, null, null]
let satLocations = ['Schiciano Atrium', 'CIEMAS', 'Page Auditorium', 'Hudson 208', 'Schiciano A', 'Hudson 207', 'Schiciano B', null, 'Quad', 'Hudson 222', null, null, 'Colab', 'Hudson 201', 'Hudson 222', 'Hudson 212', null, null, 'Everywhere', null, null, null, null, null, null, null, null, 'Schiciano']
let satLinks = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]
let satLinkTitles = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]

let sunStartTimes = ['9:00 am -', '10:30 am -', '12:00 pm', '12:00 pm -', '1:30 pm', '1:45 pm -', '3:00 pm -', '4:30 pm -']
let sunEndTimes = ['10:30 am ', '12:00 pm ', null, '1:30 pm ', null, '2:45 pm ', '4:00 pm ', '5:30 pm ']
let sunTitles = ['Breakfast', 'Massage', 'Submissions Due', 'Lunch', 'Hacking Ends', 'Expo 1', 'Expo 2', 'Closing Ceremony']
let sunSpeakers = [null, null, null, null, null, null, null, null]
let sunLocations = ['Schiciano', null, null, 'Schiciano', null, null, null, 'Page Auditorium']

class Schedule extends React.Component {

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
                  SAT 10/28
                </div>
                <div className={classes.contentContainer}>
                  {satStartTimes.map((startTime, index) => {
                    return <ScheduleElement startTime={startTime} key={index}
                      endTime={satEndTimes[index]}
                      title={satTitles[index]}
                      location={satLocations[index]}
                      speaker={satSpeakers[index]}
                      link={satLinks[index]}
                      linkTitle={satLinkTitles[index]} />
                  }
                  )}
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className={classes.rightColumnContainer}>
                <div className={classes.dateHeader}>
                  SUN 10/29
                </div>
                <div className={classes.contentContainer}>
                  {sunStartTimes.map((startTime, index) => {
                    return <ScheduleElement startTime={startTime} key={index}
                      endTime={sunEndTimes[index]}
                      title={sunTitles[index]}
                      location={sunLocations[index]}
                      speaker={sunSpeakers[index]} />
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
