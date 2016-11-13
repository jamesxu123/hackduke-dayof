import React from 'react'
import classes from './Maps.scss'
import eventInfoClasses from 'components/EventInfo/EventInfo.scss'
import equad from 'static/maps/HackDukeSmallMap.png'
import campus from 'static/maps/HackDukeBigMap.png'
import hudson1 from 'static/maps/hudson1.png'
import hudson2 from 'static/maps/hudson2.png'
import { Col, Row } from 'react-bootstrap'

class Maps extends React.Component {

  render () {
    return (
      <div>
        <div className={eventInfoClasses.container}>
          <div className={eventInfoClasses.title}>
            MAPS
          </div>
          <div className={classes.blurb}>
            For help getting around campus, you can check out the maps below
          </div>
          <Row className={classes.mapRow}>
            <Col md={6}>
              <div className={classes.imageBox}>
                <img className={classes.image} src={campus} />
              </div>
            </Col>
            <Col md={6}>
              <div className={classes.imageBoxRight}>
                <img className={classes.image} src={equad} />
              </div>
            </Col>
          </Row>
          <Row className={classes.mapRow}>
            <Col md={6}>
              <div className={classes.imageBox}>
                <figure>
                  <img className={classes.image} src={hudson1} />
                  <figcaption className={classes.caption}>Hudson 1st floor</figcaption>
                </figure>
              </div>
            </Col>
            <Col md={6}>
              <div className={classes.imageBox}>
                <figure>
                  <img className={classes.image} src={hudson2} />
                  <figcaption className={classes.caption}>Hudson 2nd floor</figcaption>
                </figure>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

export default Maps
