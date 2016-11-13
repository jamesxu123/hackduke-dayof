import React from 'react'
import classes from './Maps.scss'
import eventInfoClasses from 'components/EventInfo/EventInfo.scss'
import equad from 'static/maps/HackDukeSmallMap.png'
import campus from 'static/maps/HackDukeBigMap.png'
import hudson1 from 'static/maps/hudson1.png'
import hudson2 from 'static/maps/hudson2.png'
import ciemas1 from 'static/maps/CIEMAS1.png'
import ciemas2 from 'static/maps/CIEMAS2.png'
import ciemas3 from 'static/maps/CIEMAS3.png'
import teer from 'static/maps/Teer.png'
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
            <Col md={12}>
              <div className={classes.imageBoxSingle}>
                <img className={classes.imageSingle} src={campus} />
              </div>
            </Col>
          </Row>
          <Row className={classes.mapRow}>
            <Col md={12}>
              <div className={classes.imageBoxSingle}>
                <img className={classes.imageSingle} src={equad} />
              </div>
            </Col>
          </Row>
          <Row className={classes.mapRow}>
            <Col md={6}>
              <div className={classes.imageBoxLeft}>
                <figure>
                  <img className={classes.image} src={teer} />
                  <figcaption className={classes.caption}>Teer 2nd floor</figcaption>
                </figure>
              </div>
            </Col>
            <Col md={6}>
              <div className={classes.imageBoxRight}>
                <figure>
                  <img className={classes.image} src={ciemas1} />
                  <figcaption className={classes.caption}>CIEMAS 1st floor</figcaption>
                </figure>
              </div>
            </Col>
          </Row>
          <Row className={classes.mapRow}>
            <Col md={6}>
              <div className={classes.imageBoxLeft}>
                <figure>
                  <img className={classes.image} src={ciemas2} />
                  <figcaption className={classes.caption}>CIEMAS 2nd floor</figcaption>
                </figure>
              </div>
            </Col>
            <Col md={6}>
              <div className={classes.imageBoxRight}>
                <figure>
                  <img className={classes.image} src={ciemas3} />
                  <figcaption className={classes.caption}>CIEMAS 3rd floor</figcaption>
                </figure>
              </div>
            </Col>
          </Row>
          <Row className={classes.mapRow}>
            <Col md={6}>
              <div className={classes.imageBoxLeft}>
                <figure>
                  <img className={classes.image} src={hudson1} />
                  <figcaption className={classes.caption}>Hudson 1st floor</figcaption>
                </figure>
              </div>
            </Col>
            <Col md={6}>
              <div className={classes.imageBoxRight}>
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
