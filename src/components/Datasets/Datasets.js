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
                  <DatasetElement header={'AIR EMISSIONS FROM POWER PLANTS'}
                    blurb={'EPA’s website for the Air Markets Program data with ample information on air emissions from power plants'}
                    url={'https://ampd.epa.gov/ampd/'} />
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
                  <DatasetElement header={'ENERGY DATA FOR DUKE CAMPUS'}
                    blurb={'Energy use data for CIEMAS and Keohane 4 (K-4) Dormitory. K-4 dataset shows 15 minutes interval data for lighting consumption (kWh) for has multiple lighting panels serving the building. CIEMAS dataset shows 15 minutes interval data for building energy consumption (kWh).'}
                    url={'https://drive.google.com/drive/folders/0B2CsdLZLe28OczJhNkVZWUlTVG8'} />
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
