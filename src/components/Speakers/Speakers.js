import React from 'react'
import classes from './Speakers.scss'
import eventInfoClasses from 'components/EventInfo/EventInfo.scss'
import SpeakersElement from 'components/SpeakersElement'
import { Col, Row } from 'react-bootstrap'

let mentorshipLeftTitles = ['Software Innovation in Healthcare', '', '']
let mentorshipLeftTimes = ['Saturday Oct 28, 1:30 pm', '', '']
let mentorshipLeftLocations = ['Schiciano B', '', '']
let mentorshipLeftSpeakers = ['KEVIN CAVES', 'TANMAY GOKHALE', 'THOMAS LI']
let mentorshipLeftText = [' is a clinical associate at Duke for the Departments of Surgery and Medicine, and teaches several BME courses at Duke. His research focuses on developing tools for disabled patients including brain computer interface and sensor technologies. At this workshop, he will present opportunities for innovation for improving the lives of people with disabilities.',
  ' is a MD-PhD student at Duke, pursing his graduate studies in Biomedical Engineering. He is the co-founder of The Triangle Health Innovation Challenge (THInC), which takes place at Duke every year and brings together students and young professionals (engineers, clinicians, designers, business people and others) to tackle and build innovative solutions for the biggest challenges in health and healthcare. Tanmay will present winning tech solutions developed at THInC that aim to solve the biggest pain points in healthcare.',
  ' is a senior at Duke majoring in Computer Science. As a HackDuke organizer since his freshman year, he helped bring Health and Wellness mentorship and general tech education events to HackDuke. He will take hackers through his research in building an interpretable model for predicting Neonatal Encephalopathy from electronic medical records, as well as introduce publicly available health related datasets.']

let mentorshipRightTitles = ['Energy And Environment Track Talk', '']
let mentorshipRightTimes = ['Saturday Oct 28, 1:30 pm', '']
let mentorshipRightLocations = ['Hudson 207', '']
let mentorshipRightSpeakers = ['DR. AMANDA STARLING GOULD', 'TYLER WAKEFIELD']
let mentorshipRightText = ['graduated from Duke University in May of 2017 with a Ph.D. in Literature and a certificate in Information Science & Studies. In August of 2017, she was hired as the Project Coordinator / Digital Humanities Specialist for the Franklin Humanities Institute. She also now teaches “Green Certified” Environmental Humanities courses for the Duke Literature Department and sits on the Environment and Culture Working Group for Duke’s new Healthy Duke Initiative.',
'is a senior with a public policy major, economics minor, and energy & environment certificate. In his time at Duke, he has served as Co-president of the Duke Energy Club, helping organize educational events, research projects, and service trips to install solar for low-income communities. Tyler has researched the impacts of rural electrification in Sumba Island, Indonesia and he has also researched the economic, climate, and environmental justice impacts of natural gas pipeline overcapacity in the US. Tyler studied abroad in Vietnam, Morocco, and Bolivia where he studied climate change impacts, politics, and economics in these countries. He is passionate about decarbonizing energy systems and using the energy transition to prioritize those most vulnerable to climate change.']

let sponsorshipLeftTitles = ['Announcing Soon']
let sponsorshipLeftTimes = ['Saturday Oct 28, 1:30 pm']
let sponsorshipLeftLocations = ['']
let sponsorshipLeftSpeakers = ['']
let sponsorshipLeftText = ['']

let sponsorshipRightTitles = ['Announcing Soon']
let sponsorshipRightTimes = ['Saturday Oct 28, 1:30 pm']
let sponsorshipRightLocations = ['']
let sponsorshipRightSpeakers = ['']
let sponsorshipRightText = ['']

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
