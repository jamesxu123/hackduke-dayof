import React from 'react'
import classes from './EventInfo.scss'
import { Col, Row } from 'react-bootstrap'
import EventInfoSection from 'components/EventInfoSection'
import AlertBubble from 'components/AlertBubble'
import DelimitedStackedInfo from 'components/DelimitedStackedInfo'
import { lighterGrey, acceptedBlue, shirtPurple, shirtMaroon, shirtBlue } from 'extensions/colorUtils'

class EventInfo extends React.Component {

  render () {
    return (
      <div>
        <div className={classes.container}>
          <div className={classes.title}>
            EVENT INFO
          </div>
          <Row>
            <Col md={6}>
              <DelimitedStackedInfo header={'WIFI INFORMATION'}
                leftArray={['ssid: ']}
                rightArray={['HackDuke']}
                rightColor={acceptedBlue}
                alignment={'center'} />
              <DelimitedStackedInfo header={'SHIRT COLOR LEGEND'}
                leftArray={['purple: ', 'maroon: ', 'blue: ']}
                rightArray={['organizer', 'sponsor/mentor', 'hacker']}
                rightColors={[shirtPurple, shirtMaroon, shirtBlue]}
                // rightColor={shirtPink}
                alignment={'center'} />
              <EventInfoSection header={'DEVPOST'}
                text={'View prizes and submit your hacks to devpost by 1:30 PM on Sunday, 10/29!'}
                linkText={'HACKDUKE-2017.DEVPOST.COM'}
                url={'https://hackduke-2017.devpost.com/'} />
              <DelimitedStackedInfo header={'EMERGENCY CONTACTS'}
                leftArray={['911 ', '919-684-2444 ', '240-778-4399 ', '510-730-0186 ', '913-748-1682 ', '254-716-0605 ']}
                rightArray={['| Duke Police (emergency)', '| Duke Police', '| Yoon Ko', '| Yixin Lin', '| Michelle Chen', '| Harvey Shi']}
                rightColor={lighterGrey}
                alignment={'center'} />
            </Col>
            <Col md={6}>
              <EventInfoSection header={'Zoho'}
                text={'TBD'}
                linkText={'TBD'}
                url={'TDB'} />
              <AlertBubble firstText={'Need mentorship during the event?'}
                secondText={'Zoho bot '}
                boldText={'TBD'}
                thirdText={' will come soon'} />
              <EventInfoSection header={'HARDWARE'}
                text={'Check out hardware at Twinnies across from the Fitzpatrick Atrium.'}/>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

export default EventInfo
