import React from 'react'
import classes from './Speakers.scss'
import eventInfoClasses from 'components/EventInfo/EventInfo.scss'
import SpeakersElement from 'components/SpeakersElement'
import { Col, Row } from 'react-bootstrap'

let mentorshipLeftTitles = ['Technology for Energy and Environmental Sustainability', 'Innovation in Health Technology']
let mentorshipLeftTimes = ['Saturday Nov 19, 1:30 pm', 'Saturday Nov 19, 1:30 pm']
let mentorshipLeftLocations = ['Hudson Hall 208', 'Schiciano B']
let mentorshipLeftSpeakers = ['LAUREN SHUM', 'JAMIE DANIEL']
let mentorshipLeftText = ['is an ECE major, President of the Duke Smart Home, and organic photovoltaics research assistant. Her experience includes building heat transfer calculation tools supporting coal plant retrofits in China and designing a thermoelectric trash combustor for mitigating pollution in India. As the 2016 Delegate of the United States of America to the G(irls)20 Summit, she helped draft and deliver a communiqué to G20 leaders with recommendations for increasing female labor force participation worldwide. She was also invited to the White House to speak on solar energy and engineering education in her capacity as a NAE Grand Challenge Scholar.',
  'will take you through the process of innovation at Duke Health. From providers, to engineers, and finally to the patients, health technologies are making their impact at Duke Hospital.']

let mentorshipRightTitles = ['Housing Inequality in Durham', 'Innovative Approaches to Educational Issues']
let mentorshipRightTimes = ['Saturday Nov 19, 1:30 pm', 'Saturday Nov 19, 1:30 pm']
let mentorshipRightLocations = ['Hudson Hall 207', 'Schiciano A']
let mentorshipRightSpeakers = ['TREY WALK and SNEHAN SHARMA', 'DAVID M. MALONE']
let mentorshipRightText = ['are students who work with Community Empowerment Fund, a nonprofit that provides financial services to low income individuals in Durham and Chapel Hill, North Carolina. Trey and Snehan will speak specifically on how housing, a central feature of building wealth in America, and housing policy can create and perpetuate inequality.',
  'is the Director of Duke\'s Education Dept. and Service Learning Initiative. In a panel-style forum, he will be accompanied by Aria Chernik, Director of Open Knowledge at The Innovation and Technology Policy Lab, and guests from The Friday Institute for Educational Innovation. Hackers will learn about modern issues in education while engaging in discussion with panel members and other hackers about how these issues may be solved with technology.']

let sponsorshipLeftTitles = ['Using the Co-Lab\'s APIs to access Duke Data', 'How to use ArcGIS JavaScript API with ArcGIS Online to visualize data', 'Writing server-less apps on the Ethereum blockchain']
let sponsorshipLeftTimes = ['Saturday Nov 19, 3:00 pm', 'Saturday Nov 19, 4:15pm', 'Saturday Nov 19, 5:00 pm']
let sponsorshipLeftLocations = ['Hudson Hall 207', 'Hudson 125', 'Hudson 208']
let sponsorshipLeftSpeakers = ['SALLY HALL: ', 'NATHAN WU: ', 'JIM POSEN: ']
let sponsorshipLeftText = ['Attendees will learn what API endpoints the Co-Lab has, what data can be accessed using them, and how to integrate them into applications, including authentication requirements',
  'This workshop is providing a lighting way of converting any csv data with geocode or physical address into a featureLayer in ArcGIS Online, and how to use ArcGIS JavaScript to renderer those string data and project on the map.',
  'An introduction to blockchain technologies, covering what they are and the powerful paradigm shift they have enabled. We will focus on the Ethereum protocol and show how you can get started writing applications using it without any backend servers.']

let sponsorshipRightTitles = ['React Messaging App Workshop', 'Blockchain, ConsenSys, Ethereum, and INFURA']
let sponsorshipRightTimes = ['Saturday Nov 19, 5:00 pm', 'Saturday Nov 19, 8:30 pm']
let sponsorshipRightLocations = ['Hudson Hall 207', 'Hudson 207']
let sponsorshipRightSpeakers = ['MICHAEL DENG: ', 'BRENT XU and MICHAEL WUEHLER']
let sponsorshipRightText = ['A project driven workshop where we use ReactJS to make a basic Messaging App.',
  'will be discussing ConsenSys and the role that it plays in the BlockChain community.  Additionally we will go into details of developer tools that have been created within ConsenSys including INFURA and other various Ethereum related Dapps.  The talk will focus on innovations in the Blockchain space as well as opportunities and advancements in this fast growing industry.']

// let educationLeftTitles = ['Intro to Git', 'React JS', 'HTML/CSS/JS', 'Backend Web Development']
// let educationLeftTimes = ['Saturday Nov 19, 3:00 pm', 'Saturday Nov 19, 4:00 pm', 'Saturday Nov 19, 4:00 pm', 'Saturday Nov 19, 6:00 pm']
// let educationLeftLocations = ['Hudson 208', 'Hudson 207', 'Hudson 208', 'Hudson 207']
// let educationLeftSpeakers = ['JIAWEI ZHANG and DEV DABKE', 'DEV DABKE', 'KEVIN HE', 'JIAWEI ZHANG']
// let educationLeftText = ['',
//   '',
//   '',
//   '']

// let educationRightTitles = ['Web Apps in Ruby on Rails', 'Facebook Chatbots in Node JS', 'Tech and Social Justice', 'Ending the Hackathon']
// let educationRightTimes = ['Saturday Nov 19, 6:00 pm', 'Saturday Nov 19, 8:30 pm', 'Saturday Nov 19, 9:30 pm', 'Sunday Nov 20, 11:00 am']
// let educationRightLocations = ['Hudson 208', 'Hudson 208', 'Hudson 208', 'Hudson 208']
// let educationRightSpeakers = ['GENG SNG', 'KAMERON KALES', 'STANLEY YUAN', 'BERNARD MARGER']
// let educationRightText = ['',
//   '',
//   '',
//   '']

class Speakers extends React.Component {

  render () {
    return (
      <div>
        <div className={eventInfoClasses.container}>
          <div className={eventInfoClasses.title}>
            SPEAKERS
          </div>
          <h3 className={classes.header}>MENTORSHIP</h3>
          <Row>
            <Col md={6}>
              <div className={classes.leftColumnContainer}>
                <div className={classes.contentContainer}>
                  {mentorshipLeftTitles.map((title, index) => {
                    return <SpeakersElement title={title} key={index}
                      time={mentorshipLeftTimes[index]}
                      location={mentorshipLeftLocations[index]}
                      speaker={mentorshipLeftSpeakers[index]}
                      text={mentorshipLeftText[index]} />
                  }
                  )}
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className={classes.rightColumnContainer}>
                <div className={classes.contentContainer}>
                  {mentorshipRightTitles.map((title, index) => {
                    return <SpeakersElement title={title} key={index}
                      time={mentorshipRightTimes[index]}
                      location={mentorshipRightLocations[index]}
                      speaker={mentorshipRightSpeakers[index]}
                      text={mentorshipRightText[index]} />
                  }
                  )}
                </div>
              </div>
            </Col>
          </Row>
          <h3 className={classes.header}>SPONSORSHIP</h3>
          <Row>
            <Col md={6}>
              <div className={classes.leftColumnContainer}>
                <div className={classes.contentContainer}>
                  {sponsorshipLeftTitles.map((title, index) => {
                    return <SpeakersElement title={title} key={index}
                      time={sponsorshipLeftTimes[index]}
                      location={sponsorshipLeftLocations[index]}
                      speaker={sponsorshipLeftSpeakers[index]}
                      text={sponsorshipLeftText[index]} />
                  }
                  )}
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className={classes.rightColumnContainer}>
                <div className={classes.contentContainer}>
                  {sponsorshipRightTitles.map((title, index) => {
                    return <SpeakersElement title={title} key={index}
                      time={sponsorshipRightTimes[index]}
                      location={sponsorshipRightLocations[index]}
                      speaker={sponsorshipRightSpeakers[index]}
                      text={sponsorshipRightText[index]} />
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
// <h3 className={classes.header}>EDUCATION</h3>
// <Row>
//   <Col md={6}>
//     <div className={classes.leftColumnContainer}>
//       <div className={classes.contentContainer}>
//         {educationLeftTitles.map((title, index) => {
//           return <SpeakersElement title={title} key={index}
//             time={educationLeftTimes[index]}
//             location={educationLeftLocations[index]}
//             speaker={educationLeftSpeakers[index]}
//             text={educationLeftText[index]} />
//         }
//         )}
//       </div>
//     </div>
//   </Col>
//   <Col md={6}>
//     <div className={classes.rightColumnContainer}>
//       <div className={classes.contentContainer}>
//         {educationRightTitles.map((title, index) => {
//           return <SpeakersElement title={title} key={index}
//             time={educationRightTimes[index]}
//             location={educationRightLocations[index]}
//             speaker={educationRightSpeakers[index]}
//             text={educationRightText[index]} />
//         }
//         )}
//       </div>
//     </div>
//   </Col>
// </Row>

export default Speakers

