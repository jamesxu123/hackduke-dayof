import React from 'react'
import classes from './EventInfo.scss'
import { Col, Row } from 'react-bootstrap'
import EventInfoSection from 'components/EventInfoSection'
import AlertBubble from 'components/AlertBubble'
import DelimitedStackedInfo from 'components/DelimitedStackedInfo'
import {
  lighterGrey,
  acceptedBlue,
  shirtPurple,
  shirtMaroon,
  shirtBlue,
  navy,
  berry,
  lightblue
} from 'extensions/colorUtils'

class EventInfo extends React.Component {
  render () {
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
                leftArray={['Navy (Sweatshirts): ', 'Purple: ', 'Navy: ', 'Grey: ']}
                rightArray={[
                  'Organizers',
                  'Volunteers',
                  'Sponsor/Mentor',
                  'Hacker'
                ]}
                rightColors={[navy, shirtPurple, navy, lighterGrey]}
                // rightColor={shirtPink}
                alignment={'center'}
              />
              <EventInfoSection
                header={'Devpost'}
                text={
                  'View prizes and submit your hacks to Devpost by 12:00 pm on Sunday, 10/14. Hacking ends at 1:30 pm!'
                }
                linkText={'HACKDUKE-2019.DEVPOST.COM'}
                url={'https://hackduke-2019.devpost.com/'}
              />
              <EventInfoSection
                header={'Hardware'}
                text={
                  'Check out hardware at Twinnies across from the Fitzpatrick Atrium.'
                }
                linkText={'HackDuke Hardware List'}
                url={
                  'https://docs.google.com/spreadsheets/d/1ZnCMF760RlDXiO1NPSjxQOPmC73ggJVOgtJBBk4HkoY/edit'
                }
                linkText2={'MLH Hardware List'}
                url2={'https://hardware.mlh.io/events/hackduke-2019'}
              />
            </Col>
            <Col md={6}>
              <EventInfoSection
                header={'Slack'}
                text={'Slack will be used for communication during the event!'}
                linkText={'Slack'}
                url={
                  'https://join.slack.com/t/hackdukecodef-xsb1992/shared_invite/enQtNzkzNjQ5MjM3MzYzLTc2MDY5M2ExNDkzOWFjMWRlM2M3ZjU5ZGFlZjIyNjY3N2IxNTA3NWZjMTllNGZjZjNmMDVhYmQzOTQwYzlhNzM'
                }
              />
              <DelimitedStackedInfo
                header={'Directors'}
                leftArray={['410-428-2378 ', '908-938-8667 ']}
                rightArray={['| Sam Chan', '| Vicki Lu']}
                rightColor={acceptedBlue}
                alignment={'center'}
              />
              <DelimitedStackedInfo
                header={'Emergency Contacts'}
                leftArray={[
                  '911 ',
                  '919-684-2444 ',
                  '609-903-5446 ',
                  '512-578-8193 ',
                  '360-553-6669 ',
                  '434-234-7862 ',
                  '201-245-9879',
                  '864-735-4335',
                  '703-332-9736 ',
                  '520-204-6474',
                  '302-268-6512',
                  '919-308-4422',
                  '727-453-8689 '
                ]}
                rightArray={[
                  '| Police (emergency)',
                  '| Duke Police',
                  '| Nishant Iyengar',
                  '| Akshara Anand',
                  '| Annie Lu',
                  '| Brian Li',
                  '| Nicole Moiseyev',
                  '| Kevin Tian',
                  '| Christina Le',
                  '| Eugene Wang',
                  '| Troy Zha',
                  '| Michelle Zhang',
                  '| Preston McDonald'
                ]}
                rightColor={lighterGrey}
                alignment={'center'}
              />
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

export default EventInfo
