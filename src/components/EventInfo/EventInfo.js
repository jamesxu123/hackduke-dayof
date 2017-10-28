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
                text={'View prizes and submit your hacks to devpost by 12:00 pm on Sunday, 10/29. Hacking ends at 1:30 pm!'}
                linkText={'HACKDUKE-2017.DEVPOST.COM'}
                url={'https://hackduke-2017.devpost.com/'} />
              <DelimitedStackedInfo header={'EMERGENCY CONTACTS'}
                leftArray={['911 ', '919-684-2444 ', '919-903-4030 ', '954-305-0146 ', '512-627-7127 ', '319-383-8274 ', '703-585-7204 ', '240-751-0359 ']}
                rightArray={['| Duke Police (emergency)', '| Duke Police', '| Stephanie Ding', '| Steven Yang', '| Maya Messinger', '| Neil Wu', '| Carter Zenke', '| Edward Liang']}
                rightColor={lighterGrey}
                alignment={'center'} />
            </Col>
            <Col md={6}>
              <EventInfoSection header={'Zoho'}
                text={'Zoho will be used for communication during the event!'}
                linkText={'Zoho'}
                url={'https://www.zoho.com/cliq/'} />
              <AlertBubble firstText={'Need mentorship during the event?'}
                secondText={'Check out the '}
                boldText={'mentor bot'}
                thirdText={' in Zoho'} />
              <EventInfoSection header={'HARDWARE'}
                text={'Check out hardware at Twinnies across from the Fitzpatrick Atrium.'} />
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

export default EventInfo
