import React from 'react'
import classes from './Speakers.scss'
import eventInfoClasses from 'components/EventInfo/EventInfo.scss'
import SpeakersElement from 'components/SpeakersElement'
import { Col, Row } from 'react-bootstrap'

let mentorshipLeftTitles = ['Software Innovation in Healthcare', '', '']
let mentorshipLeftTimes = ['Saturday Oct 28, 1:30 pm', '', '']
let mentorshipLeftLocations = ['Schianno B', '', '']
let mentorshipLeftSpeakers = ['KEVIN CAVES', 'TANMAY GOKHALE', 'THOMAS LI']
let mentorshipLeftText = [' is a clinical associate at Duke for the Departments of Surgery and Medicine, and teaches several BME courses at Duke. His research focuses on developing tools for disabled patients including brain computer interface and sensor technologies. At this workshop, he will present opportunities for innovation for improving the lives of people with disabilities.',
  ' is a MD-PhD student at Duke, pursing his graduate studies in Biomedical Engineering. He is the co-founder of The Triangle Health Innovation Challenge (THInC), which takes place at Duke every year and brings together students and young professionals (engineers, clinicians, designers, business people and others) to tackle and build innovative solutions for the biggest challenges in health and healthcare. Tanmay will present winning tech solutions developed at THInC that aim to solve the biggest pain points in healthcare.',
  ' is a senior at Duke majoring in Computer Science. As a HackDuke organizer since his freshman year, he helped bring Health and Wellness mentorship and general tech education events to HackDuke. He will take hackers through his research in building an interpretable model for predicting Neonatal Encephalopathy from electronic medical records, as well as introduce publicly available health related datasets.']

let mentorshipRightTitles = ['Housing Inequality in Durham', 'Innovative Approaches to Educational Issues', 'Innovation in Health Technology']
let mentorshipRightTimes = ['Saturday Nov 19, 1:30 pm', 'Saturday Nov 19, 1:30 pm', 'Saturday Nov 19, 1:30 pm']
let mentorshipRightLocations = ['Hudson Hall 207', 'Schiciano A', 'Schiciano B']
let mentorshipRightSpeakers = ['TREY WALK and SNEHAN SHARMA', 'DAVID M. MALONE', 'JAMIE DANIEL']
let mentorshipRightText = ['are students who work with Community Empowerment Fund, a nonprofit that provides financial services to low income individuals in Durham and Chapel Hill, North Carolina. Trey and Snehan will speak specifically on how housing, a central feature of building wealth in America, and housing policy can create and perpetuate inequality.',
  'is the Director of Duke\'s Education Dept. and Service Learning Initiative. In a panel-style forum, he will be accompanied by Aria Chernik, Director of Open Knowledge at The Innovation and Technology Policy Lab, and guests from The Friday Institute for Educational Innovation. Hackers will learn about modern issues in education while engaging in discussion with panel members and other hackers about how these issues may be solved with technology.',
  'will take you through the process of innovation at Duke Health. From providers, to engineers, and finally to the patients, health technologies are making their impact at Duke Hospital.']

let sponsorshipLeftTitles = ['Using the Co-Lab\'s APIs to access Duke Data', 'How to use ArcGIS JavaScript API with ArcGIS Online to visualize data', 'React Messaging App Workshop']
let sponsorshipLeftTimes = ['Saturday Nov 19, 3:00 pm', 'Saturday Nov 19, 4:15pm', 'Saturday Nov 19, 5:00 pm']
let sponsorshipLeftLocations = ['Hudson Hall 207', 'Hudson 125', 'Hudson HALL 207']
let sponsorshipLeftSpeakers = ['SALLY HALL: ', 'NATHAN WU: ', 'MICHAEL DENG: ']
let sponsorshipLeftText = ['Attendees will learn what API endpoints the Co-Lab has, what data can be accessed using them, and how to integrate them into applications, including authentication requirements',
  'This workshop is providing a lighting way of converting any csv data with geocode or physical address into a featureLayer in ArcGIS Online, and how to use ArcGIS JavaScript to renderer those string data and project on the map.',
  'A project driven workshop where we use ReactJS to make a basic Messaging App.']

let sponsorshipRightTitles = ['Writing server-less apps on the Ethereum blockchain', 'Blockchain, ConsenSys, Ethereum, and INFURA']
let sponsorshipRightTimes = ['Saturday Nov 19, 5:00 pm', 'Saturday Nov 19, 8:30 pm']
let sponsorshipRightLocations = ['Hudson Hall 208', 'Hudson Hall 207']
let sponsorshipRightSpeakers = ['JIM POSEN: ', 'BRENT XU and MICHAEL WUEHLER']
let sponsorshipRightText = ['An introduction to blockchain technologies, covering what they are and the powerful paradigm shift they have enabled. We will focus on the Ethereum protocol and show how you can get started writing applications using it without any backend servers.',
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
