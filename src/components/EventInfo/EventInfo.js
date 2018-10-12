import React from 'react';
import classes from './EventInfo.scss';
import { Col, Row } from 'react-bootstrap';
import EventInfoSection from 'components/EventInfoSection';
import AlertBubble from 'components/AlertBubble';
import DelimitedStackedInfo from 'components/DelimitedStackedInfo';
import {
  lighterGrey,
  acceptedBlue,
  shirtPurple,
  shirtMaroon,
  shirtBlue
} from 'extensions/colorUtils';

class EventInfo extends React.Component {
  render() {
    return (
      <div>
        <div className={classes.container}>
          <div className={classes.title}>EVENT INFO</div>
          <Row>
            <Col md={6}>
              <DelimitedStackedInfo
                header={'Wi-Fi Information'}
                leftArray={['ssid: ']}
                rightArray={['HackDuke']}
                rightColor={acceptedBlue}
                alignment={'center'}
              />
              <DelimitedStackedInfo
                header={'Shirt Color Legend'}
                leftArray={['purple: ', 'maroon: ', 'blue: ']}
                rightArray={[
                  'organizers and volunteers',
                  'sponsor/mentor',
                  'hacker'
                ]}
                rightColors={[shirtPurple, shirtMaroon, shirtBlue]}
                // rightColor={shirtPink}
                alignment={'center'}
              />
              <EventInfoSection
                header={'Devpost'}
                text={
                  'View prizes and submit your hacks to Devpost by 12:00 pm on Sunday, 10/14. Hacking ends at 1:30 pm!'
                }
                linkText={'HACKDUKE-2018.DEVPOST.COM'}
                url={'https://hackduke-2018.devpost.com/'}
              />
              <DelimitedStackedInfo
                header={'Emergency Contacts'}
                leftArray={[
                  '911 ',
                  '919-684-2444 ',
                  '410-428-2378 ',
                  '615-524-0539 ',
                  '512-627-7127 ',
                  '512-578-8193 ',
                  '703-332-9736 ',
                  '224-501-6043 ',
                  '908-938-8667 ',
                  '919-768-3887 ',
                  '609-903-5446 ',
                  '919-903-4030 '
                ]}
                rightArray={[
                  '| Duke Police (emergency)',
                  '| Duke Police',
                  '| Sam Chan',
                  '| Margaret Overton',
                  '| Maya Messinger',
                  '| Akshara Anand',
                  '| Christina Le',
                  '| Grant Kim',
                  '| Vicki Lu',
                  '| Gina Lee',
                  '| Nishant Iyengar',
                  '| Stephanie Ding'
                ]}
                rightColor={lighterGrey}
                alignment={'center'}
              />
            </Col>
            <Col md={6}>
              <EventInfoSection
                header={'Slack'}
                text={'Slack will be used for communication during the event!'}
                linkText={'Slack'}
                url={'hackduke2018.slack.com'}
              />
              <EventInfoSection
                header={'Hardware'}
                text={
                  'Check out hardware at Twinnies across from the Fitzpatrick Atrium.'
                }
              />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default EventInfo;
