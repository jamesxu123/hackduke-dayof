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
          <div className={eventInfoClasses.title}>DATASETS</div>
          <h3 className={classes.headerH}>ENERGY & ENVIRONMENT</h3>
          <Row>
            <Col md={6}>
              <div className={classes.leftColumnContainer}>
                <div className={classes.contentContainer}>
                  <DatasetElement
                    header={'ALL DUKE ENERGY INITIATIVE DATASETS'}
                    blurb={
                      'Energy Data Analytics Lab curates a wide selection of energy-related datasets that can be found here'
                    }
                    url={
                      'https://energy.duke.edu/research/energy-data/resources'
                    }
                  />
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className={classes.rightColumnContainer}>
                <div className={classes.contentContainer}>
                  <DatasetElement
                    header={'AIR EMISSIONS FROM POWER PLANTS'}
                    blurb={
                      'EPA’s website for the Air Markets Program data with information on air emissions from power plants'
                    }
                    url={'https://ampd.epa.gov/ampd/'}
                  />
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <div className={classes.leftColumnContainer}>
                <div className={classes.contentContainer}>
                  <DatasetElement
                    header={'BUILDING HEIGHT AND ROAD DETECTION'}
                    blurb={
                      'Aerial imagery object identification dataset for building and road detection, and building height estimation: (can be used for localized estimates of energy consumption)'
                    }
                    url={'https://dx.doi.org/10.6084/m9.figshare.c.3255643.v2'}
                  />
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className={classes.rightColumnContainer}>
                <div className={classes.contentContainer}>
                  <DatasetElement
                    header={'ENERGY USE DATA FOR K-4 FORM'}
                    blurb={
                      'Shows K-4 lighting consumption in 15 minute intervals (there are multiple lighting panels serving the building)'
                    }
                    url={
                      'https://drive.google.com/file/d/0B9pIN6LxBW91VHJGa2tFVS1lYnM/view?usp=sharing'
                    }
                  />
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <div className={classes.leftColumnContainer}>
                <div className={classes.contentContainer}>
                  <DatasetElement
                    header={'AERIAL IMAGERY OBJECT IDENTIFICATION'}
                    blurb={
                      'Used for for building and road detection, and building height estimation. For 25 locations across 9 U.S. cities, this dataset provides (1) high resolution aerial imagery; (2) annotations of over 40,000 building footprints (OSM shapefiles) as well as road polylines; and (3) topographical height data (LIDAR).'
                    }
                    url={'https://doi.org/10.6084/m9.figshare.c.3290519.v1'}
                  />
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className={classes.rightColumnContainer}>
                <div className={classes.contentContainer}>
                  <DatasetElement
                    header={'ENERGY USE DATA FOR CIEMAS'}
                    blurb={
                      'Shows CIEMAS energy consumption data in 15 minute intervals'
                    }
                    url={
                      'https://drive.google.com/file/d/0B9pIN6LxBW91elZOeGFmbGVjUDg/view?usp=sharing'
                    }
                  />
                </div>
              </div>
            </Col>
          </Row>
          <h3 className={classes.headerH}>HEALTH & WELLNESS</h3>
          <Row>
            <Col md={6}>
              <div className={classes.leftColumnContainer}>
                <div className={classes.contentContainer}>
                  <DatasetElement
                    header={'OPEN DATA FOR CITY OF DURHAM'}
                    blurb={
                      'Catalog of 157 different datasets on the city of Durham'
                    }
                    url={'https://opendurham.nc.gov/page/home/'}
                  />
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className={classes.rightColumnContainer}>
                <div className={classes.contentContainer}>
                  <DatasetElement
                    header={'SMART ON FHIR API'}
                    blurb={
                      'Public demo sandbox for SMART on FHIR. Allows for connecting to electronic medical record'
                    }
                    url={'http://docs.smarthealthit.org/sandbox/'}
                  />
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <div className={classes.leftColumnContainer}>
                <div className={classes.contentContainer}>
                  <DatasetElement
                    header={'HEALTHDATA.GOV'}
                    blurb={
                      'This resource lists nearly every available public health dataset.'
                    }
                    url={
                      'https://www.healthdata.gov/search/field_topic/hospital-17821/type/dataset?sort_by=changed'
                    }
                  />
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className={classes.rightColumnContainer}>
                <div className={classes.contentContainer}>
                  <DatasetElement
                    header={'EPIC WITH SMART ON FHIR'}
                    blurb={
                      'Epic sandbox - instance of epic intergrated with SMART on FHIR'
                    }
                    url={'https://open.epic.com/AppExchange/Sandbox'}
                  />
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <div className={classes.leftColumnContainer}>
                <div className={classes.contentContainer}>
                  <DatasetElement
                    header={'1000 GENOME PROJECT WITH AWS'}
                    blurb={
                      'International collaboration that has compiled most detailed catalogue on human genetic variation. The final phase of the project sequenced more than 2500 individuals from 26 different populations around the world and produced an integrated set of phased haplotypes with more than 80 million variants for these individuals.'
                    }
                    url={'https://aws.amazon.com/1000genomes/'}
                  />
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className={classes.rightColumnContainer}>
                <div className={classes.contentContainer}>
                  <DatasetElement
                    header={'PHYSIONET'}
                    blurb={
                      'PhysioNet offers free web access to large collections of recorded physiologic signals and related open-source software.'
                    }
                    url={'https://physionet.org/'}
                  />
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <div className={classes.leftColumnContainer}>
                <div className={classes.contentContainer}>
                  <DatasetElement
                    header={'ECG DATA'}
                    blurb={
                      'The MIT-BIH Arrhythmia Database contains 48 half-hour excerpts of two-channel ambulatory ECG recordings, obtained from 47 subjects studied by the BIH Arrhythmia Laboratory between 1975 and 1979.'
                    }
                    url={'https://www.physionet.org/physiobank/database/mitdb/'}
                  />
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className={classes.rightColumnContainer}>
                <div className={classes.contentContainer}>
                  <DatasetElement
                    header={'SMART SANDBOX'}
                    blurb={
                      'A variety of de-identified electronic medical record data including patient values, physiology, outcomes, and genetics.'
                    }
                    url={'http://docs.smarthealthit.org/data/'}
                  />
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <div className={classes.leftColumnContainer}>
                <div className={classes.contentContainer}>
                  <DatasetElement
                    header={
                      'CALIFORNIA HEALTH AND HUMAN SERVICES OPEN DATA PORTAL'
                    }
                    blurb={''}
                    url={'https://data.chhs.ca.gov/'}
                  />
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className={classes.rightColumnContainer}>
                <div className={classes.contentContainer}>
                  <DatasetElement
                    header={'CMS (MEDICARE) COST/PAYMENT DATA'}
                    blurb={''}
                    url={
                      'https://www.cms.gov/Research-Statistics-Data-and-Systems/Statistics-Trends-and-Reports/Medicare-Provider-Charge-Data/Inpatient.html'
                    }
                  />
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <div className={classes.leftColumnContainer}>
                <div className={classes.contentContainer}>
                  <DatasetElement
                    header={'MEDICARE HOSPTIAL COMPARE DATASET'}
                    blurb={
                      'Compare the quality of care at over 4,000 Medicare-certified hospitals across the country.'
                    }
                    url={'https://data.medicare.gov/data/hospital-compare'}
                  />
                </div>
              </div>
            </Col>
          </Row>
          <h3 className={classes.headerI}>INEQUALITY</h3>
          <Row>
            <Col md={6}>
              <div className={classes.leftColumnContainer}>
                <div className={classes.contentContainer}>
                  <DatasetElement
                    header={'EQUALITY OF OPPORTUNITY PROJECT'}
                    blurb={
                      'Downloadable data sets related to economic inequality'
                    }
                    url={
                      'http://www.equality-of-opportunity.org/index.php/data'
                    }
                  />
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className={classes.rightColumnContainer}>
                <div className={classes.contentContainer}>
                  <DatasetElement
                    header={'THE WORLD WEALTH AND INCOME DATABASE'}
                    blurb={'Wealth/Income data from all over the world.'}
                    url={'http://www.wid.world/#Database:'}
                  />
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <div className={classes.leftColumnContainer}>
                <div className={classes.contentContainer}>
                  <DatasetElement
                    header={'STANFORD CENTER FOR POVERTY & INEQUALITY'}
                    blurb={
                      'Includes links to data on various indicators of inequality including crime, race, income wealth and debt, social safety nets, poverty, education, and more in the United States. The Stanford Center for Poverty & Inequality has a lot of other good resources on their site so explore that as well!'
                    }
                    url={'http://inequality.stanford.edu/methodological'}
                  />
                </div>
              </div>
            </Col>
          </Row>
          <h3 className={classes.headerD}>EDUCATION</h3>
          <Row>
            <Col md={6}>
              <div className={classes.leftColumnContainer}>
                <div className={classes.contentContainer}>
                  <DatasetElement
                    header={'NCES THE CONDITION OF EDUCATION REPORT 2016'}
                    blurb={
                      "The Condition of Education is an extensive report that contains indicators on the state of education in the United States and abroad. Using the table of contents, you will be able to find data on population characteristics, participation in education, elementary and secondary school education, and post-secondary education. It's hard to imagine an education-related hack would not find the data they need somewhere in this document."
                    }
                    url={'http://nces.ed.gov/pubs2016/2016144.pdf'}
                  />
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className={classes.rightColumnContainer}>
                <div className={classes.contentContainer}>
                  <DatasetElement
                    header={
                      'EDUCATIONAL TECHNOLOGY IDEAS FROM 4TH AND 5TH GRADE STUDENTS IN THE DURHAM PUBLIC SCHOOL SYSTEM'
                    }
                    blurb={
                      'A survey of 4th and 5th graders conducted with the question: "What kind of technology can you imagine that might help you learn?" Resulting data-set includes a brainstorm of educational technology ideas relevent to 4th and 5th graders. Very useful for developing ideas actually desired by the target audience.'
                    }
                    url={
                      'https://docs.google.com/spreadsheets/d/1fza6O6MFfE-JRco9UlEphXUUB1RnSUFXkeqjX_tl5pY/edit?usp=drive_web'
                    }
                  />
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <div className={classes.leftColumnContainer}>
                <div className={classes.contentContainer}>
                  <DatasetElement
                    header={
                      'POPULATION STATISTICS IN DURHAM PUBLIC SCHOOLS BY SCHOOL'
                    }
                    blurb={
                      'Population statistics including enrollment by race, % free/reduced lunch, gender distribution, and student/teacher ratio.'
                    }
                    url={
                      'https://docs.google.com/spreadsheets/d/1FT8AsvTURutJSakfZNbjE4lxT0N7JejGv8GOYT7ebFU/edit?usp=drive_web'
                    }
                  />
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className={classes.rightColumnContainer}>
                <div className={classes.contentContainer}>
                  <DatasetElement
                    header={
                      'POPULATION STATISTICS IN NORTH CAROLINA SCHOOL DISTRICTS SURROUNDING DUKE'
                    }
                    blurb={
                      'Population statistics including enrollment by race, student/teacher ratios, # of staff, and district spending per student.'
                    }
                    url={
                      'https://docs.google.com/spreadsheets/d/1Ql-R9VJQNyyFS6bCMPkgTjWkvaCDDXwhdm4DixgIg34/edit?usp=drive_web'
                    }
                  />
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
