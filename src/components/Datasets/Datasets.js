import React from 'react'
import eventInfoClasses from 'components/EventInfo/EventInfo.scss'
import { Col, Row } from 'react-bootstrap'
import classes from './Datasets.scss'
import DatasetElement from 'components/DatasetElement'

let energyEnvironmentBlurb = 'HackDuke is not just about building meaningful projects. It\'s also blah blah'
let healthWellnessBlurb = 'HackDuke is not just about building meaningful projects. It\'s also blah blah'
let educationBlurb = 'HackDuke is not just about building meaningful projects. It\'s also blah blah'

class Datasets extends React.Component {

  render () {
    return (
      <div>
        <div className={eventInfoClasses.container}>
          <div className={eventInfoClasses.title}>
            DATASETS
          </div>
          <Row>
            <Col md={6}>
              <div className={classes.leftColumnContainer}>
                <div className={classes.contentContainer}>
                  <DatasetElement header={'ENERGY DATA ANALYTICS LAB DATABASE'} blurb={'Energy Data Analytics Lab curates datasets that may be of use and shares those on this website that could be thought of as a database of energy databases'} />
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className={classes.rightColumnContainer}>
                <div className={classes.contentContainer}>
                  <DatasetElement header={'AIR EMISSIONS FROM POWER PLANTS'} blurb={'EPA’s website for the Air Markets Program data with ample information on air emissions from power plants'} />
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <div className={classes.leftColumnContainer}>
                <div className={classes.contentContainer}>
                  <DatasetElement header={'HEALTH & WELLNESS'} blurb={healthWellnessBlurb} />
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className={classes.rightColumnContainer}>
                <div className={classes.contentContainer}>
                  <DatasetElement header={'EDUCATION'} blurb={educationBlurb} />
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

export default Datasets
