import React from 'react'
import eventInfoClasses from 'components/EventInfo/EventInfo.scss'
import { Col, Row } from 'react-bootstrap'
import classes from './Datasets.scss'
import DatasetElement from 'components/DatasetElement'

class Datasets extends React.Component {

  render () {
    return (
      <div>
        <div className={eventInfoClasses.container}>
          <div className={eventInfoClasses.title}>
            DATASETS
          </div>
          <h3 className={classes.header}>ENVIRONMENT</h3>
          <Row>
            <Col md={6}>
              <div className={classes.leftColumnContainer}>
                <div className={classes.contentContainer}>
                  <DatasetElement header={'ENERGY DATA ANALYTICS LAB DATABASE'}
                    blurb={'Energy Data Analytics Lab curates datasets that may be of use and shares those on this website that could be thought of as a database of energy databases'}
                    url={'https://energy.duke.edu/research/energy-data/resources'} />
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className={classes.rightColumnContainer}>
                <div className={classes.contentContainer}>
                  <DatasetElement header={'BUILDING HEIGHT AND ROAD DETECTION'}
                    blurb={'Aerial imagery object identification dataset for building and road detection, and building height estimation: (can be used for localized estimates of energy consumption, as we’re doing with our research)'}
                    url={'https://dx.doi.org/10.6084/m9.figshare.c.3255643.v2'} />
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <div className={classes.leftColumnContainer}>
                <div className={classes.contentContainer}>
                  <DatasetElement header={'SOLAR PV LOCATIONS'}
                    blurb={'Solar PV Location Dataset for Aerial Imagery Object Detection'}
                    url={'https://dx.doi.org/10.6084/m9.figshare.c.3255643.v2'} />
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className={classes.rightColumnContainer}>
                <div className={classes.contentContainer}>
                  <DatasetElement header={'AIR EMISSIONS FROM POWER PLANTS'}
                    blurb={'EPA’s website for the Air Markets Program data with ample information on air emissions from power plants'}
                    url={'https://ampd.epa.gov/ampd/'} />
                </div>
              </div>
            </Col>
          </Row>
          <h3 className={classes.header}>HEALTH</h3>
          <Row>
            <Col md={6}>
              <div className={classes.leftColumnContainer}>
                <div className={classes.contentContainer}>
                  <DatasetElement header={'OPEN DATA FOR CITY OF DURHAM'}
                    blurb={'Catalog of 157 different datasets on the city of Durham'}
                    url={'https://opendurham.nc.gov/page/home/'} />
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className={classes.rightColumnContainer}>
                <div className={classes.contentContainer}>
                  <DatasetElement header={'SMART ON FHIR API'}
                    blurb={'Public demo sandbox for SMART on FHIR. Allows for connecting to electronic medical record'}
                    url={'http://docs.smarthealthit.org/sandbox/'} />
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <div className={classes.leftColumnContainer}>
                <div className={classes.contentContainer}>
                  <DatasetElement header={'HEALTHDATA.GOV'}
                    blurb={'This resource lists nearly every available public health dataset.'}
                    url={'https://www.healthdata.gov/search/field_topic/hospital-17821/type/dataset?sort_by=changed'} />
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className={classes.rightColumnContainer}>
                <div className={classes.contentContainer}>
                  <DatasetElement header={'EPIC WITH SMART ON FHIR'}
                    blurb={'Epic sandbox - instance of epic intergrated with SMART on FHIR'}
                    url={'https://open.epic.com/AppExchange/Sandbox'} />
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <div className={classes.leftColumnContainer}>
                <div className={classes.contentContainer}>
                  <DatasetElement header={'1000 GENOME PROJECT WITH AWS'}
                    blurb={'International collaboration that has compiled most detailed catalogue on human genetic variation. The final phase of the project sequenced more than 2500 individuals from 26 different populations around the world and produced an integrated set of phased haplotypes with more than 80 million variants for these individuals.'}
                    url={'https://aws.amazon.com/1000genomes/'} />
                </div>
              </div>
            </Col>
          </Row>
          <h3 className={classes.header}>INEQUALITY</h3>
          <Row>
            <Col md={6}>
              <div className={classes.leftColumnContainer}>
                <div className={classes.contentContainer}>
                  <DatasetElement header={'EQUALITY OF OPPORTUNITY PROJECT'}
                    blurb={'Downloadable data sets related to economic inequality'}
                    url={'http://www.equality-of-opportunity.org/index.php/data'} />
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className={classes.rightColumnContainer}>
                <div className={classes.contentContainer}>
                  <DatasetElement header={'THE WORLD WEALTH AND INCOME DATABASE'}
                    blurb={'Wealth/Income data from all over the world.'}
                    url={'http://www.wid.world/#Database:'} />
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <div className={classes.leftColumnContainer}>
                <div className={classes.contentContainer}>
                  <DatasetElement header={'STANFORD CENTER FOR POVERTY & INEQUALITY'}
                    blurb={'Includes links to data on various indicators of inequality including crime, race, income wealth and debt, social safety nets, poverty, education, and more in the United States. The Stanford Center for Poverty & Inequality has a lot of other good resources on their site so explore that as well!'}
                    url={'http://inequality.stanford.edu/methodological'} />
                </div>
              </div>
            </Col>
          </Row>
          <h3 className={classes.header}>EDUCATION</h3>
          <Row>
            <Col md={6}>
              <div className={classes.leftColumnContainer}>
                <div className={classes.contentContainer}>
                  <DatasetElement header={'NCES THE CONDITION OF EDUCATION REPORT 2016'}
                    blurb={'The Condition of Education is an extensive report that contains indicators on the state of education in the United States and abroad. Using the table of contents, you will be able to find data on population characteristics, participation in education, elementary and secondary school education, and post-secondary education. It\'s hard to imagine an education-related hack would not find the data they need somewhere in this document.'}
                    url={'http://nces.ed.gov/pubs2016/2016144.pdf'} />
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className={classes.rightColumnContainer}>
                <div className={classes.contentContainer}>
                  <DatasetElement header={'EDUCATIONAL TECHNOLOGY IDEAS FROM 4TH AND 5TH GRADE STUDENTS IN THE DURHAM PUBLIC SCHOOL SYSTEM'}
                    blurb={'A survey of 4th and 5th graders conducted with the question: "What kind of technology can you imagine that might help you learn?" Resulting data-set includes a brainstorm of educational technology ideas relevent to 4th and 5th graders. Very useful for developing ideas actually desired by the target audience.'}
                    url={'https://docs.google.com/spreadsheets/d/1fza6O6MFfE-JRco9UlEphXUUB1RnSUFXkeqjX_tl5pY/edit?usp=drive_web'} />
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <div className={classes.leftColumnContainer}>
                <div className={classes.contentContainer}>
                  <DatasetElement header={'POPULATION STATISTICS IN DURHAM PUBLIC SCHOOLS BY SCHOOL'}
                    blurb={'Population statistics including enrollment by race, % free/reduced lunch, gender distribution, and student/teacher ratio.'}
                    url={'https://docs.google.com/spreadsheets/d/1FT8AsvTURutJSakfZNbjE4lxT0N7JejGv8GOYT7ebFU/edit?usp=drive_web'} />
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className={classes.rightColumnContainer}>
                <div className={classes.contentContainer}>
                  <DatasetElement header={'POPULATION STATISTICS IN NORTH CAROLINA SCHOOL DISTRICTS SURROUNDING DUKE'}
                    blurb={'Population statistics including enrollment by race, student/teacher ratios, # of staff, and district spending per student.'}
                    url={'https://docs.google.com/spreadsheets/d/1Ql-R9VJQNyyFS6bCMPkgTjWkvaCDDXwhdm4DixgIg34/edit?usp=drive_web'} />
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}
// <Row>
//   <Col md={6}>
//     <div className={classes.leftColumnContainer}>
//       <div className={classes.contentContainer}>
//         <DatasetElement header={'ENERGY DATA FOR DUKE CAMPUS'}
//           blurb={'Energy use data for CIEMAS and Keohane 4 (K-4) Dormitory. K-4 dataset shows 15 minutes interval data for lighting consumption (kWh) for has multiple lighting panels serving the building. CIEMAS dataset shows 15 minutes interval data for building energy consumption (kWh).'}
//           url={'https://drive.google.com/drive/folders/0B2CsdLZLe28OczJhNkVZWUlTVG8'} />
//       </div>
//     </div>
//   </Col>
// </Row>

export default Datasets

