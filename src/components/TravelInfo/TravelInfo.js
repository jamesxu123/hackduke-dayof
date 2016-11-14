import React from 'react'
import classes from './TravelInfo.scss'
import eventInfoClasses from 'components/EventInfo/EventInfo.scss'
import FAQItem from 'components/FAQItem'
import cat from 'static/cat.jpg'
import { Col, Row } from 'react-bootstrap'

class TravelInfo extends React.Component {

  render () {
    return (
      <div>
        <div className={classes.container}>
          <div className={eventInfoClasses.title}>
            TRAVEL INFO
          </div>
          <Row style={{'paddingTop': '30px'}}>
            <Col md={6}>
              <FAQItem title={'Coming from RDU'}
                beforeText={'If you\'re coming from RDU, you can '}
                link={'http://charlenesaferide.com/'}
                linkText={'take a cab to Duke'}
                afterText={' or call an Uber.'} />

              <FAQItem title={'Finding parking'}
                beforeText={'If you’re driving over, you can find parking at the '}
                link={'https://goo.gl/maps/SJ1SxHYGAMn'}
                linkText={'Duke Chemistry Lot'}
                afterText={'. We will have a parking attendant from 10 AM - 2PM \
                           on Saturday. If you will be arriving after that, \
                           please let us know so we can make appropriate accommodations!'} />

              <FAQItem title={'Getting dropped off'}
                beforeText={'The easiest place to be dropped off is in front of the Duke Chapel at the '}
                link={'https://goo.gl/maps/Uh1etuH8sRB2'}
                linkText={'West Campus bus stop'}
                afterText={'.'} />

              <FAQItem title={'Buses'}
                text={'All buses will arrive at our hacking area around 9:30 am. \
                For departure times, locations, and onsite contacts, see the right column.'} />
            </Col>
            <Col md={6}>
              <FAQItem title={'Georgia Tech'}
                beforeText={'The Georgia Tech coach bus will be leaving from the '}
                link={'https://goo.gl/maps/7bpgzg4oHW92'}
                linkText={'Clough Undergrad Learning Commons'}
                afterText={' at 3:30 am. Our onsite contact is Lekha Surasani 732-543-4382.'}/>

              <FAQItem title={'University of Florida'}
                beforeText={'We\'ll have a bus leaving from the '}
                link={'https://goo.gl/maps/pBiG6EiMjrv'}
                linkText={'UF commuter lot'}
                afterText={' at 12:30 am. Our onsite contact is Cesar Gonzalez 786-320-2490.'}/>

              <FAQItem title={'University of Maryland'}
                beforeText={'The UMD bus will be leaving from the '}
                link={'https://goo.gl/maps/ABamfXwYAZH2'}
                linkText={'Computer Science Instructional Center'}
                afterText={' at 4:30 am. Our onsite contact is Ji-Hyuk Bae 240-855-7058.'} />

              <FAQItem title={'Virginia Tech'}
                beforeText={'Our VT bus will leave from the '}
                link={'https://goo.gl/maps/voqDEqvHfKL2'}
                linkText={'Newman Library'}
                afterText={' at 6:00 am. Our onsite contacts are Diana Chang 703-851-3868 \
                and Kyle Long 980-213-7352.'}/>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

export default TravelInfo
