import React from 'react'
import classes from './Schedule.scss'
import eventInfoClasses from 'components/EventInfo/EventInfo.scss'
import ScheduleElement from 'components/ScheduleElement'
import { Col, Row } from 'react-bootstrap'

let satStartTimes = ['10:00 am - ','10:00 am - ','12:00 pm - ','1:30 pm - ','1:30 pm - ','1:30 pm - ','1:30 pm -','1:30 pm -','2:00 pm -','3:00 pm -','3:00 pm -','3:00 pm -','3:30 pm -','4:00 pm -','4:00 pm -','4:15 pm -','5:00 pm -','5:00 pm -','5:30 pm -','6:00 pm -','6:00 pm -','6:30 pm -','7:00 pm -','8:30 pm -','8:30 pm -','9:30 pm -','10:00 pm -','11:00 pm -']
let satEndTimes = ['12:00 pm ','12:00 pm ','1:00 pm ','3:00 pm ','3:00 pm ','3:00 pm ','3:00 pm ','1:30 pm ','3:00 pm ','6:00 pm ','4:00 pm ','3:30 pm ','4:00 pm ','5:00 pm ','5:00 pm ','4:45 pm ','6:00 pm ','5:30 pm ','6:00 pm ','7:00 pm ','7:00 pm ','7:00 pm ','8:30 pm ','9:15 pm ','9:30 pm ','10:30 pm ','10:30 pm ','12:00 am ']
let satTitles = ['Check-in','Brunch','Opening Ceremony','Innovation in Health Technology','Technology for Energy and Environmental Sustainability','Housing Inequality in Durham','Innovative Approaches to Educational Issues','Hacking Begins','Team Formation','Pups @ HackDuke','Intro to Git','Using the Co-Lab\'s APIs to access Duke Data','Zoho Tech Talk','HTML, CSS, Javascript','React JS','How to use ArcGIS JavaScript API with ArcGIS Online to visualize data','React Messaging App Workshop','Writing server-less apps on the Ethereum blockchain','From Duke to Industry: Getting the Tech Job','Backend Web Development','WebApp using Ruby on Rails','Esri Tech Talk','Dinner','Blockchain, ConsenSys, Ethereum, and INFURA','Facebook Chatbots in Node JS','Tech and Social Justice','MLH Cybersecurity Capture The Flag!','Frisbee Dance Party']
let satSpeakers = [null,null,null,'Jamie Daniel | Duke Institute for Health Innovation','Lauren Shum | Duke Smart Home','Trey Walk, Snehan Sharma | Community Empowerment Fund','Dr. Malone | Duke Education Department',null,null,null,'Jiawei Zhang, Dev Dabke | Duke University','Sally Hall | Duke Innovation Co-lab',null,'Kevin He | Duke University','Dev Dabke | Duke University','Nathan Wu | Esri','Michael Deng | Appian','Jim Posen | Coinbase','Yu Zhou Lee | Twitter','Jiawei Zhang | Duke University','Sng Geng',null,null,'Brent Xu, Micahel Wuehler | ConsenSys','Kameron Kales | Glance','Stanley Yuan | Duke University',null,null]
let satLocations = ['Schiciano Lobby','Penn Pavillion','Penn Pavillion','Hudson 208','Hudson 125','Hudson 207','Teer 203','Everywhere','Schiciano Auditorium','Hudson Lawn','Hudson 208','Hudson 207','Hudson 207','Hudson 208','Hudson 207','Hudson 125','Hudson 208','Hudson 208','Hudson 208','Hudson 207','Hudson 208','Hudson 125','Schiciano Lobby','Hudson 207','Hudson 207','Hudson 208','Schiciano Lobby','Hudson Lawn']
let sunStartTimes = ['12:00 am -','12:30 am -','2:00 am -','9:00 am -','10:00 am -','12:00 pm -','1:30 pm -','1:45 pm -','3:00 pm -','4:30 pm -']
let sunEndTimes = ['1:00 am ','1:30 am ','3:00 am ','10:30 am ','12:00 pm ','1:30 pm ','1:30 pm ','2:45 pm ','4:00 pm ', '5:30 pm']
let sunTitles = ['Midnight Snack','MLH Cup Stacking','Nerf Gun War','Breakfast + Coffee','Massage Stations','Lunch','Hacking Ends','Expo #1','Expo #2', 'Opening Ceremony']
let sunSpeakers = [null,null,null,null,null,null,null,null,null, null]
let sunLocations = ['Schiciano Lobby','CIEMAS Atrium 1st Floor','CIEMAS Atrium 1st Floor','Schiciano Lobby','CIEMAS Atrium 1st Floor','Schiciano Lobby','Everywhere','FCIEMAS','FCIEMAS', 'Penn Pavillion']

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

