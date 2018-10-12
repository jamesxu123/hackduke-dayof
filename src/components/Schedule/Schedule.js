import React from 'react';
import classes from './Schedule.scss';
import eventInfoClasses from 'components/EventInfo/EventInfo.scss';
import ScheduleElement from 'components/ScheduleElement';
import { Col, Row } from 'react-bootstrap';

const data = [
  {
    // Months are zero-indexed for whatever reason
    // This is a historical artifact from the Java (yes, Java) APIs
    date: new Date(2018, 9, 13),
    events: [
      {
        time: '9:00AM - 10:45AM',
        name: 'Check-In',
        locations: ['Schiciano Atrium']
      },
      {
        time: '11:00AM - 12:30PM',
        name: 'Opening Ceremony',
        locations: ['Reynolds Theatre']
      },
      {
        time: '1:00PM - 2:00PM',
        name: 'Lunch',
        locations: ['Schiciano Atrium']
      },
      { time: '2:00PM', name: 'Hacking Commences' },
      {
        time: '2:00PM - 2:30PM',
        name: 'Team Formation Mixer',
        locations: ['CIEMAS']
      },
      {
        time: '2:00PM - 8:00PM',
        name: 'Frisbee, Football, Volleyball',
        locations: ['Harrington Quad']
      },
      {
        time: '2:30PM - 3:30PM',
        name: 'Arduino Workshop by August Ning',
        locations: ['Hudson 201']
      },
      {
        time: '2:30PM - 3:30PM',
        name: 'VR Workshop by Mark Steelman',
        locations: ['Hudson 232']
      },
      {
        time: '3:00PM - 4:30PM',
        name: 'Javascript Workshop by Co-Lab',
        locations: ['Hudson 216']
      },
      {
        time: '3:00PM - 5:00PM',
        name: 'Puppies!!!!!',
        locations: ['Harrington Quad']
      },
      {
        time: '4:30PM - 5:30PM',
        name: 'API Workshop by Archana Ahlawat',
        locations: ['Hudson 115A']
      },
      {
        time: '4:45PM - 6:15PM',
        name: 'Mobile Workshop by Co-Lab',
        locations: ['Hudson 216']
      },
      {
        time: '6:30PM - 8:00PM',
        name: 'Dinner',
        locations: ['Schiciano Atrium']
      },
      {
        time: '8:00PM - 9:00PM',
        name: 'MLH Werewolf',
        locations: ['CIEMAS 1st floor']
      },
      {
        time: '9:00PM - 10:00PM',
        name: 'Mixer for Female-Identifying and Non-Binary Hackers',
        locations: ['Innovation Co-Lab']
      },
      {
        time: '9:00PM - 10:00PM',
        name: 'WIT Mixer',
        locations: ['CoLab']
      },
      {
        time: '10:00PM - 11:00PM',
        name: 'Nerf War',
        locations: ["Twinnie's 2nd Floor"]
      },
      {
        time: '11:00PM - 11:45PM',
        name: 'Spicy Noodle Challenge',
        locations: ['Schiciano Atrium']
      }
    ]
  },
  {
    date: new Date(2018, 9, 14),
    events: [
      {
        time: '12:00AM - 8:00AM',
        name: 'Midnight Snacks',
        locations: ["Twinnie's"]
      },
      {
        time: '9:00AM - 9:45AM',
        name: 'Breakfast',
        locations: ['Schiciano Atrium']
      },
      {
        time: '11:00AM - 12:00PM',
        name: 'Turning Hack into Startup by Kasper Kubica',
        locations: ['Hudson 222']
      },
      {
        time: '12:00PM - 1:30PM',
        name: 'Lunch',
        locations: ['Schiciano Atrium']
      },
      { time: '1:30PM', name: 'Hacking Ends' },
      { time: '2:00PM', name: 'Judging Begins' },
      {
        time: '2:00PM - 2:45PM',
        name: 'First Round Judging',
        locations: ['CIEMAS Lobby']
      },
      {
        time: '2:45PM - 3:30PM',
        name: 'Finalist Demos',
        locations: ['CIEMAS Lobby']
      },
      {
        time: '3:30PM - 4:00PM',
        name: 'Final Judging',
        locations: ['CIEMAS Lobby']
      },
      {
        time: '4:00PM',
        name: 'HackDuke Ends'
      },
      {
        time: '4:30PM - 5:30PM',
        name: 'Closing Ceremony',
        locations: ['Reynolds Theatre']
      },
      {
        time: '6:00PM',
        name: 'VTech Bus Leaves',
        locations: ['Science Drive']
      }
    ]
  }
];

const formatDate = date => {
  const dayOfWeek = date.toLocaleDateString('en-US', {
    weekday: 'short'
  });
  return `${dayOfWeek} ${date.getMonth() + 1}/${date.getDate()}`;
};

class Schedule extends React.Component {
  render() {
    return (
      <div>
        <div className={eventInfoClasses.container}>
          <div className={eventInfoClasses.title}>SCHEDULE</div>
          <Row>
            {data.map(({ date, events }, dayIndex) => (
              <Col md={6} key={date}>
                <div
                  className={
                    dayIndex === 0
                      ? classes.leftColumnContainer
                      : classes.rightColumnContainer
                  }
                >
                  <div className={classes.dateHeader}>{formatDate(date)}</div>
                  <div className={classes.contentContainer}>
                    {events.map(({ time, name, locations }, index) => {
                      let [startTime, endTime] = time.split(' - ');
                      if (endTime) startTime += ' -';
                      return (
                        <ScheduleElement
                          startTime={startTime}
                          key={index}
                          endTime={endTime}
                          title={name}
                          location={locations && locations[0]}
                        />
                      );
                    })}
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    );
  }
}

export default Schedule;
