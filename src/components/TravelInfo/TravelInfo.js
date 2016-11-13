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
                afterText={'. We will have a parking attendant from 10 AM - 2PM \
                           on Saturday. If you will be arriving after that, \
                           please let us know so we can make appropriate accommodations!'} />

              <FAQItem title={'Getting dropped off'}
                beforeText={'The easiest place to be dropped off is in front of the Duke Chapel at the '}
                link={'https://goo.gl/maps/Uh1etuH8sRB2'}
                linkText={'West Campus bus stop'}
                afterText={'.'} />

            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

export default TravelInfo
