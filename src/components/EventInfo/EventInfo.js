import React from 'react'
import classes from './EventInfo.scss'
import { Col, Row } from 'react-bootstrap'
import EventInfoSection from 'components/EventInfoSection'
import AlertBubble from 'components/AlertBubble'
import DelimitedStackedInfo from 'components/DelimitedStackedInfo'
import { lighterGrey, acceptedBlue } from 'extensions/colorUtils'

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
              <DelimitedStackedInfo header={'WIFI PASSWORD'}
                leftArray={['user: ', 'password: ']}
                rightArray={['eduroam', 'HELLOHELO']}
                rightColor={acceptedBlue}
                alignment={'center'} />
              <EventInfoSection header={'DEVPOST'}
                text={'Submit your hacks to devpost and view prizes!'}
                linkText={'HACKDUKE16.DEVPOST.COM'}
                url={'https://hackduke16.devpost.com'} />
              <DelimitedStackedInfo header={'EMERGENCY CONTACTS'}
                leftArray={['(224) 567-0874 ', '(512) 826-2769 ']}
                rightArray={['| HackDuke Director', '| Duke University Police']}
                rightColor={lighterGrey}
                alignment={'center'} />
            </Col>
            <Col md={6}>
              <EventInfoSection header={'SLACK'}
                text={'Slack will be used for announcements, team formation, and mentorship.'}
                linkText={'HACKDUKE16.SLACK.COM'}
                url={'https://hackduke16.slack.com'} />
              <AlertBubble firstText={'Need mentorship during the event?'}
                secondText={'Direct message '}
                boldText={'@mentorbot'}
                thirdText={' on Slack to pair up with a mentor!'} />
              <EventInfoSection header={'HARDWARE'}
                text={'Log in to the portal to see available hardware and what you\'ve checked out!'}
                linkText={'MY.HACKDUKE.ORG'}
                url={'https://my.hackduke.org'} />
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

export default EventInfo

