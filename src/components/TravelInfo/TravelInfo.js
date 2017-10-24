import React from 'react'
import classes from './TravelInfo.scss'
import eventInfoClasses from 'components/EventInfo/EventInfo.scss'
import FAQItem from 'components/FAQItem'
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
                afterText={'. We will have a parking attendant from 7:30AM - 12:00PM \
                           on Saturday, and 4:00PM - 8:00PM on Sunday. \
                           If you will be arriving outside of those time windows, please let us know so we can make appropriate accommodations!'} />

              <FAQItem title={'Getting dropped off'}
                beforeText={'The easiest place to be dropped off is at the loop at the end of '}
                link={'https://goo.gl/maps/Grbu24enDMJ2'}
                linkText={'Science Drive'}
                afterText={' loop.'} />

              <FAQItem title={'Georgia Tech'}
                beforeText={'The Georgia Tech coach bus will be leaving from the '}
                link={'https://goo.gl/maps/7bpgzg4oHW92'}
                linkText={'Clough Undergrad Learning Commons'}
                afterText={' at 2:40 AM Saturday morning.'} />
            </Col>
            <Col md={6}>
              <FAQItem title={'University of Florida'}
                beforeText={'We\'ll have a bus leaving from the '}
                link={'https://goo.gl/maps/pBiG6EiMjrv'}
                linkText={'UF commuter lot'}
                afterText={' at 12:15 AM Saturday morning. Our onsite contact is Eyal Abadi (305) 767-6640.'} />

              <FAQItem title={'Virginia Tech'}
                beforeText={'Our VT bus will leave from the '}
                link={'https://goo.gl/maps/voqDEqvHfKL2'}
                linkText={'Newman Library'}
                afterText={' at 5:45 AM Saturday morning. Our onsite contact is Swaraj Dhumne (703) 636-3348.'} />

              <FAQItem title={'University of Virginia'}
                beforeText={'The UVA bus will be leaving from the '}
                link={'https://goo.gl/maps/hRjmMgfUnN12'}
                linkText={'Alderman library'}
                afterText={' at 2:45 AM Saturday morning. Our onsite contact is Frank Huang (571) 201-9700.'} />
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

export default TravelInfo
