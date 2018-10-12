import React from 'react';
import classes from './TravelInfo.scss';
import eventInfoClasses from 'components/EventInfo/EventInfo.scss';
import FAQItem from 'components/FAQItem';
import { Col, Row } from 'react-bootstrap';

class TravelInfo extends React.Component {
  render() {
    return (
      <div>
        <div className={eventInfoClasses.container}>
          <div className={eventInfoClasses.title}>TRAVEL INFO</div>
          <Row
            style={{
              paddingTop: '30px',
              paddingLeft: '10%',
              paddingRight: '10%'
            }}
          >
            <Col md={6}>
              <FAQItem
                title={'Coming from RDU'}
                beforeText={"If you're coming from RDU, you can "}
                link={'http://charlenesaferide.com/'}
                linkText={'take a cab to Duke'}
                afterText={' or call an Uber.'}
              />

              <FAQItem
                title={'Finding parking'}
                beforeText={
                  'If you’re driving over, you can find parking at the '
                }
                link={'https://goo.gl/maps/SJ1SxHYGAMn'}
                linkText={'Duke Chemistry Lot'}
                afterText={
                  '. We will have a parking attendant from 8:00AM - 12:00PM on Saturday and Sunday. If you will be arriving outside of those time windows, please let us know so we can make appropriate accommodations! \
                  Alternate parking is at the Bryan Center Parking Garage for $2/hr'
                }
              />

              <FAQItem
                title={'Getting dropped off'}
                beforeText={
                  'The easiest place to be dropped off is at the loop at the end of '
                }
                link={'https://goo.gl/maps/Grbu24enDMJ2'}
                linkText={'Science Drive'}
                afterText={' loop.'}
              />
            </Col>
            <Col md={6}>
              <FAQItem
                title={'Virginia Tech'}
                beforeText={'Our VT bus will leave from the '}
                link={
                  'https://www.google.com/maps/place/Squires+Student+Center,+Blacksburg,+VA+24061/@37.2295613,-80.4202095,17z/data=!3m1!4b1!4m5!3m4!1s0x884d95733ac1cb4d:0xf8d9c76521fc0952!8m2!3d37.229557!4d-80.4180208'
                }
                linkText={'Squires Student Center'}
                afterText={
                  ' at 5:00 AM Saturday morning. Our onsite contact is Kareem Abdol-Hamid: 336-822-9360 (driver locator number: 10014).'
                }
              />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default TravelInfo;
