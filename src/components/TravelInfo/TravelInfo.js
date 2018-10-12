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
                  '. We will have a parking attendant from 7:30AM - 12:00PM \
                           on Saturday, and 4:00PM - 8:00PM on Sunday. \
                           If you will be arriving outside of those time windows, please let us know so we can make appropriate accommodations!'
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
                link={'https://goo.gl/maps/voqDEqvHfKL2'}
                linkText={'Newman Library'}
                afterText={
                  ' at 5:45 AM Saturday morning. Our onsite contact is Swaraj Dhumne (703) 636-3348.'
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
