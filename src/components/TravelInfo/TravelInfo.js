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
                beforeText={"If you're coming from RDU, you can call a Lyft or Uber. Please also submit a request "}
                link={'https://hackduke.typeform.com/to/qBjLYb'}
                linkText={'here'}
                afterText={' for travel reimbursement'}
              />

              <FAQItem
                title={'Finding parking'}
                beforeText={
                  'If you’re driving over, you can find parking at the '
                }
                link={'https://www.google.com/maps/search/Bryan+Center+Parking+Garage/@36.0016289,-78.9440213,17z'}
                linkText={'Bryan Center Parking Lot'}
                afterText={
                  '. Please take a validation ticket when you enter. You will need it in order to leave the garage. You will need one validation per day in the lot (if you park overnight, you will need two).  We will also have validation tickets to give out during the event, but if we run out we will reimburse yours.'
                  
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
              <FAQItem
                title={'More Info'}
                beforeText={
                  'Click '
                }
                link={'https://docs.google.com/document/d/1eDC1KWeQbYIyWUWhvmuShvsEQsDjROv9GX-6wjDeg_4/edit'}
                linkText={'here'}
                afterText={' for more info. If you have any more questions, please email hackers@hackduke.org.'}
              />
            </Col>
            <Col md={6}>
              <FAQItem
                title={'Buses'}
                beforeText={"We'll have buses covering the trail from UVA, VTech, Georgia Tech, UNC, and NC State. See detailed itineraries "}
                link={
                  'https://docs.google.com/document/d/1GrQsFlQ8waIzlQcexgPJc1iG98hMBvQF4XLhcYYpuIY/edit'
                }
                linkText={'here'}
                afterText={'.'}
                  
              />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default TravelInfo;
