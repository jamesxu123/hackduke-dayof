import React from 'react'
import classes from './Schedule.scss'
import eventInfoClasses from 'components/EventInfo/EventInfo.scss'
import ScheduleElement from 'components/ScheduleElement'
import { Col, Row } from 'react-bootstrap'

let satStartTimes = ['10:00 am -', '10:00 am -', '11:45 am -', '1:30 pm -', '1:30 pm -', '1:30 pm -', '1:30 pm -', '2:00 pm -', '2:15 pm -', '2:30 pm -', '2:30 pm -', '2:30 pm -', '3:30 pm -', '3:30 pm -', '3:30 pm -', '3:30 pm -', '4:00 pm -', '4:15 pm -', '5:00 pm -', '5:00 pm -', '5:00 pm -', '5:00 pm -', '6:15 pm -', '7:45 pm -', '7:45 pm -', '8:30 pm -', '9:00 pm -', '10:00 pm -']
let satEndTimes = ['11:45 am ', '11:45 am ', '1:15 pm ', '2:30 pm ', '2:00 pm ', '2:00 pm ', '2:00 pm ', '3:00 pm ', '5:00 pm ', '3:30 pm ', '3:30 pm ', '3:15 pm ', '5:00 pm ', '4:00 pm ', '4:00 pm ', '4:00 pm ', '5:00 pm ', '5:00 pm ', '5:45 pm', '6:15 pm ', '6:00 pm ', '6:00 pm ', '7:45 pm ', '8:30 pm ', '8:30 pm ', '9:30 pm ', '12:00 am ', '11:00 pm ']
let satTitles = ['Check-In', 'Lunch', 'Opening Ceremony', 'Inequality Track Talk', 'Education Track Talk', 'Energy/Environment Track Talk', 'Health/Wellness Track Talk', 'Team Formation/Ideation', 'Hedgehogs!', 'Duke eNable Workshop', 'Smartcar Tech Talk', 'Coinbase Tech Talk', 'Introduction to Connected Hardware (Duke Students only)', 'Appian React Workshop', 'Market Failures, Incentives, and Cryptoassets', 'Github Tech Talk #1 — Intro to Electron', 'Office Hours', 'ConsenSys Tech Talk - How to use Uport', 'Info Session with ConsenSys', 'Scavenger Hunt', 'Soft Skills That Matter Talk', 'Github Tech Talk #2 — Intro to Git', 'Dinner', 'Zoho Tech Talk', 'Microsoft Tech Talk', 'Female-Identifying/Non-binary Hackers Mixer (3D printing session followed by networking + desserts) Sponsored by ConsenSys', 'Frisbee', 'MLH Stack Cup']
let satSpeakers = [null, null, null, null, null, null, null, null, null, null, null, null, null, 'Michael Deng', 'Dhruv Luthra', 'Shelley Vohr', 'Elissa Shevinsky', null, null, null, 'Salman Azhar — Duke Fuqua School of Business', 'Shelley Vohr', null, null, null, null, null, null]
let satLocations = ['Schiciano Atrium', 'CIEMAS', 'Page Auditorium', 'Hudson 208', 'Schiciano A', 'Hudson 207', 'Schiciano B', 'Same Room as Track Talk', 'Quad', 'Innovation Colab', 'Hudson 115A', 'Hudson 232', 'Innovation Colab - TEC Classroom', 'Hudson 201', 'Hudson 216', 'Hudson 212', 'Hudson 115A', 'Hudson 222', 'Hudson 222', 'Meet in Schiciano Atrium', 'Hudson 216', 'Hudson 212', 'Schiciano Atrium', 'Hudson 212', 'Hudson 222', 'Innovation Colab - TEC Classroom', 'Equad', 'Schiciano']
let satLinks = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]
let satLinkTitles = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]

let sunStartTimes = ['9:00 am -', '10:30 am -', '12:00 pm', '12:00 pm -', '1:30 pm', '1:45 pm -', '3:00 pm -', '4:30 pm -']
let sunEndTimes = ['10:30 am ', '12:00 pm ', null, '1:30 pm ', null, '2:45 pm ', '4:00 pm ', '5:30 pm ']
let sunTitles = ['Breakfast', 'Massage Therapists', 'Submissions Due to Devpost', 'Lunch', 'Hacking Ends', 'Expo 1 - Health and Education Tracks', 'Expo 2 - Inequality and Environment Tracks', 'Closing Ceremony']
let sunSpeakers = [null, null, null, null, null, null, null, null]
let sunLocations = ['Schiciano Atrium', 'CIEMAS', null, 'Schiciano Atrium', null, 'CIEMAS', 'CIEMAS', 'Page Auditorium']

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
