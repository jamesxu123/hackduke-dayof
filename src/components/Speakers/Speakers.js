import React from 'react'
import classes from './Speakers.scss'
import eventInfoClasses from 'components/EventInfo/EventInfo.scss'
import SpeakersElement from 'components/SpeakersElement'
import { Col, Row } from 'react-bootstrap'

let mentorshipLeftTitles = ['Software Innovation in Healthcare', '', '', 'Inequality Track Talk', '', 'Education Issues and Innovation']
let mentorshipLeftTimes = ['Saturday Oct 28, 1:30 pm', '', '', 'Saturday Oct 28, 1:30 pm', '', 'Saturday Oct 28, 1:30 pm']
let mentorshipLeftLocations = ['Schiciano B', '', '', 'Hudson 208', '', 'Schiciano A']
let mentorshipLeftSpeakers = ['KEVIN CAVES', 'TANMAY GOKHALE', 'THOMAS LI', 'ELISSA SHEVINSKY', 'In Prototyping Equality: Building Apps to Solve Social Issues', '4 PANELISTS']
let mentorshipLeftText = [' is a clinical associate at Duke for the Departments of Surgery and Medicine, and teaches several BME courses at Duke. His research focuses on developing tools for disabled patients including brain computer interface and sensor technologies. At this workshop, he will present opportunities for innovation for improving the lives of people with disabilities.',
  ' is a MD-PhD student at Duke, pursing his graduate studies in Biomedical Engineering. He is the co-founder of The Triangle Health Innovation Challenge (THInC), which takes place at Duke every year and brings together students and young professionals (engineers, clinicians, designers, business people and others) to tackle and build innovative solutions for the biggest challenges in health and healthcare. Tanmay will present winning tech solutions developed at THInC that aim to solve the biggest pain points in healthcare.',
  ' is a senior at Duke majoring in Computer Science. As a HackDuke organizer since his freshman year, he helped bring Health and Wellness mentorship and general tech education events to HackDuke. He will take hackers through his research in building an interpretable model for predicting Neonatal Encephalopathy from electronic medical records, as well as introduce publicly available health related datasets.',
  ' is a serial entrepreneur, best known for her work launching security startups. She got her start in tech doing social entrepreneurship, as part of the team launching Geekcorps (Acquired.) Geekcorps sent technical “geeks” to partner companies in Ghana, in an effort to address inequality issues. Shevinsky also built an encryption company (Glimpse) and was Head of Product at Brave Software. A little known fact about Shevinsky - she is also the author of several chapters in the textbook “Social Entrepreneurship: How Businesses Can Transform Society.” More recently, Shevinsky published “Lean Out: The Struggle for Gender Equality in Tech and Startup Culture.” You can find her on LinkedIn, or on Twitter under @ElissaBeth.',
  ' workshop leader Elissa Shevinsky will offer inspiration and guidance around solving social issues (specifically inequality) using technology, as well as practical basics on prototyping applications in a hackathon environment. Students will develop a more thoughtful appreciation of building applications for social change, as well as valuable experience with prototyping applications. At the end of the session, students will brainstorm ideas and have the option to join teams - so come to this session if you’d like to kickstart your weekend!',
  ' with expertise in areas ranging from education policy, educational psychology, CS education, and student-centered learning will sit on a panel that aims to discuss prominent education issues and ways technology can (or cannot) work to solve them. Come ready to ask thoughtful questions and receive thoughtful answers. After the discussion, panelists will be eager to give advice on hacker’s projects!']

let mentorshipRightTitles = ['Energy And Environment Track Talk', '', '']
let mentorshipRightTimes = ['Saturday Oct 28, 1:30 pm', '', '']
let mentorshipRightLocations = ['Hudson 207', '', '']
let mentorshipRightSpeakers = ['DR. AMANDA STARLING GOULD', 'TYLER WAKEFIELD', 'DR. CHRIS WEDDING']
let mentorshipRightText = [' graduated from Duke University in May of 2017 with a Ph.D. in Literature and a certificate in Information Science & Studies. In August of 2017, she was hired as the Project Coordinator / Digital Humanities Specialist for the Franklin Humanities Institute. She also now teaches “Green Certified” Environmental Humanities courses for the Duke Literature Department and sits on the Environment and Culture Working Group for Duke’s new Healthy Duke Initiative.',
  ' is a senior with a public policy major, economics minor, and energy & environment certificate. In his time at Duke, he has served as Co-president of the Duke Energy Club, helping organize educational events, research projects, and service trips to install solar for low-income communities. Tyler has researched the impacts of rural electrification in Sumba Island, Indonesia and he has also researched the economic, climate, and environmental justice impacts of natural gas pipeline overcapacity in the US. Tyler studied abroad in Vietnam, Morocco, and Bolivia where he studied climate change impacts, politics, and economics in these countries. He is passionate about decarbonizing energy systems and using the energy transition to prioritize those most vulnerable to climate change.',
  ' is an expert in renewable energy project finance, green building strategy, early stage cleantech ventures, the electric vehicle market, opportunities in energy storage, entrepreneurship, and market research. He has 20 years of experience in private equity, project finance, startup finance, executive education, and academia. He is an Executive in Residence with the Nicholas School of the Environment at Duke University; the Founder and Managing Partner of IronOak Energy, a financial advisory firm focused on renewable energy; a Registered Representative with Series 22, 63, and 82 financial licenses via Burch & Company; a Professor of the Practice with the University of North Carolina at Chapel Hill (UNC) Kenan-Flagler Business School; Faculty with the Institute for Defense and Business, an executive training center for U.S. military leaders; Faculty with Duke Corporate Education; Founder of The Invest for Impact Academy, an education platform for impact-driven business and finance; and one of the earliest LEED Accredited Professionals with the US Green Building Council. He was also a Director and now Senior Advisor at Cherokee Investment Partners, a private equity firm that has raised over $2 billion in private equity funds and, separately, founded or invested in 150 startups and venture funds. He brings a global perspective, with experience in 21 countries and language abilities in Spanish, Japanese, and Creole. As one of the top 10% most viewed LinkedIn profiles, he is a connector, catalyst, and frequent speaker at national and global energy and finance conferences. Dr. Wedding received a BS summa cum laude in Environmental Science from Western Kentucky University, where he was a national Goldwater Scholar in Math and Science. At UNC, he earned an MS and PhD focused on business and strategy in real estate and energy.']

let sponsorshipLeftTitles = ['ConsenSys Tech Talk - How to use Uport']
let sponsorshipLeftTimes = ['Saturday Oct 28, 4:15 pm']
let sponsorshipLeftLocations = ['Hudson 222']
let sponsorshipLeftSpeakers = ['']
let sponsorshipLeftText = ['Uport is a self-sovereign identity system that allows people to own their identity, fully control the flow of their personal information, and authenticate themselves in various contexts - both on and off blockchain. We will demo how to use Uport and talk about its potential implications.']

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
