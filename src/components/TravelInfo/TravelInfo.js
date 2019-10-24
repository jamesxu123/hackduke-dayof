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
                  <span>
                    <br />
                    <br />
                    <u>
                      <b>Itinerary</b>
                    </u>
                    <br />
                    <b>Saturday, Nov.2 4AM: </b>
                    Pick up from Squires Student Center
                    <br />
                    <b>Saturday, Nov.2 9:30AM: </b>
                    Arrive at Duke <br />
                    <b>Sunday, Nov.3 6PM: </b> Pick up from Duke <br />
                    {/* <br />
                    Onsite contact:
                    <b> Kareem Abdol-Hamid</b>
                    <br />
                    Phone: <b>336-822-9360</b>
                    <br />
                    Driver Locator Number: <b>10014</b> */}
                  </span>
                }
              />
              <FAQItem
                title={'UVA'}
                beforeText={'Our UVA bus will leave from the '}
                link={
                  'https://www.google.com/maps/place/Scott+Stadium+Parking/@38.0296407,-78.5160005,17.73z/data=!4m5!3m4!1s0x89b3865dd355683d:0xa4d7bec59150eff2!8m2!3d38.0290068!4d-78.5147029'
                }
                linkText={'Scott Stadium Parking Lot'}
                afterText={
                  <span>
                    <br />
                    <br />
                    <u>
                      <b>Itinerary</b>
                    </u>
                    <br />
                    <b>Saturday, Nov.2 1AM: </b>
                    Pick up from Scott Stadium parking lot
                    <br />
                    <b>Saturday, Nov.2 9:30AM: </b>
                    Arrive at Duke <br />
                    <b>Sunday, Nov.3 6PM: </b> Pick up from Duke <br />
                    
                  </span>
                }
              />
              <FAQItem
                title={'NC State'}
                beforeText={'Our NC State bus will leave from the '}
                link={
                  'https://www.google.com/maps/place/Engineering+Bldg+II,+890+Oval+Dr,+Raleigh,+NC+27606/@35.7720132,-78.6750721,18z/data=!4m5!3m4!1s0x89acf59ddf70cafd:0x47b0abfcfdad99af!8m2!3d35.7719356!4d-78.674002'
                }
                linkText={'Engineering Buidling II'}
                afterText={
                  <span>
                    <br />
                    <br />
                    <u>
                      <b>Itinerary</b>
                    </u>
                    <br />
                    <b>Saturday, Nov.2 8:30AM: </b>
                    Pick up from Engineering Building II 
                    <br />
                    <b>Saturday, Nov.2 9:30AM: </b>
                    Arrive at Duke <br />
                    <b>Sunday, Nov.3 6PM: </b> Pick up from Duke <br />
                    
                  </span>
                }
              />
              <FAQItem
                title={'Georgia Tech'}
                beforeText={'Our Georgia Tech bus will leave from the '}
                link={
                  'https://www.google.com/maps/place/Georgia+Tech+Student+Center/@33.77386,-84.3995455,18.31z/data=!4m5!3m4!1s0x88f50489a73dcb65:0xe5b99fb6b844e7bb!8m2!3d33.7739778!4d-84.3988123'
                }
                linkText={'Student Center'}
                afterText={
                  <span>
                    <br />
                    <br />
                    <u>
                      <b>Itinerary</b>
                    </u>
                    <br />
                    <b>Saturday, Nov.2 1AM: </b>
                    Pick up from Student Center
                    <br />
                    <b>Saturday, Nov.2 9:00AM: </b>
                    Arrive at Duke <br />
                    <b>Sunday, Nov.3 6PM: </b> Pick up from Duke <br />
                    
                  </span>
                }
              />
              <FAQItem
                title={'UNC-Chapel Hill'}
                beforeText={'Our UNC bus will leave from the '}
                link={
                  'https://www.google.com/maps/place/Morehead+Planetarium+and+Science+Center/@35.9139076,-79.0526987,17z/data=!3m1!4b1!4m5!3m4!1s0x89acc2c294c7b583:0x8effe7d104029f8c!8m2!3d35.9139033!4d-79.05051'
                }
                linkText={'Moorehead Planetarium'}
                afterText={
                  <span>
                    <br />
                    <br />
                    <u>
                      <b>Itinerary</b>
                    </u>
                    <br />
                    <b>Saturday, Nov.2 8:30AM: </b>
                    Pick up from Moorehead Planetarium
                    <br />
                    <b>Saturday, Nov.2 9:00AM: </b>
                    Arrive at Duke <br />
                    <b>Sunday, Nov.3 6PM: </b> Pick up from Duke <br />
                    
                  </span>
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
