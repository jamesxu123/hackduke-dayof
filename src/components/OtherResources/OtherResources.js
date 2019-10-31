import React from 'react';
import classes from './OtherResources.scss';
import datasetClasses from 'components/Datasets/Datasets.scss';
import eventInfoClasses from 'components/EventInfo/EventInfo.scss';
import DatasetElement2 from 'components/DatasetElement/DatasetElement2';
import FAQItem from 'components/FAQItem';
import DatasetElement from 'components/DatasetElement/DatasetElement'
import { Col, Row } from 'react-bootstrap';

class TravelInfo extends React.Component {
    render() {
        return (
            <div>
                <div className={eventInfoClasses.container}>
                    <div className={eventInfoClasses.title}>OTHER RESOURCES</div>

                    {/* DUML DATATHON */}
                    <Row
                        style={{
                        paddingTop: '30px',
                        paddingLeft: '10%',
                        paddingRight: '10%'
                        }}
                    >
                        <FAQItem
                            title={'DUML Datathon'}
                            beforeText={"Duke Undergraduate Machine Learning is hosting a datathon this weekend, so be sure to check out some of their "}
                            link={'https://dukeml.org/datathon/index.html#workshops'}
                            linkText={'workshops'}
                            afterText={' too!'}
                        />
                    </Row>

                    {/* COMPANY APIS */}
                    <Row
                        style={{
                        paddingTop: '30px',
                        paddingLeft: '10%',
                        paddingRight: '10%'
                        }}
                    >
                        <FAQItem
                            title={'Company APIs'}
                        />
                        {/* LEFT COLUMN OF APIS */}
                        <div className={datasetClasses.companyApi}>
                            <Col md={6}>
                                <div className={datasetClasses.leftColumnContainer}>
                                    <div className={datasetClasses.contentContainer}>
                                        <DatasetElement
                                            header={'Smartcar'}
                                            blurb={'Interested in mobility applications? The Smartcar API offers a variety of ways to interact with and fetch data from numerous different car brands'}
                                            url={'https://smartcar.com/docs/'}
                                        />
                                    </div>
                                </div>
                                <div className={datasetClasses.leftColumnContainer}>
                                    <div className={datasetClasses.contentContainer}>
                                        <DatasetElement2
                                            header={'GSK Chatbot'}
                                            blurb={'Visit the table in CIEMAS to check it out and learn how to use it for your own chatbots!'}
                                            // url={'idk man'}
                                        />
                                    </div>
                                </div>
                            </Col>

                            {/* RIGHT COLUMN OF APIS */}
                            <Col md={6}>
                                <div className={datasetClasses.rightColumnContainer}>
                                    <div className={datasetClasses.contentContainer}>
                                        <DatasetElement
                                            header={'Capital One'}
                                            blurb={'Capital One\'s Nessie API gives you access to real public data and simulated account data so that you can build your own financial applications'}
                                            url={'http://api.reimaginebanking.com/'}
                                        />
                                    </div>
                                </div>
                            </Col>
                        </div>
                    </Row>

                    {/* MLH STUFF */}
                    <Row
                        style={{
                        paddingTop: '30px',
                        paddingLeft: '10%',
                        paddingRight: '10%'
                        }}
                    >
                        <FAQItem
                            title={'MLH Software and More!'}
                            beforeText={"MLH partnered with some amazing technology companies to get you FREE access to GCP credit, free domains, and other awesome benefits "}
                            link={'https://hack.mlh.io/software/'}
                            linkText={'here'}
                        />
                    </Row>

                    {/* MENTORS */}
                    <Row
                        style={{
                        paddingTop: '30px',
                        paddingLeft: '10%',
                        paddingRight: '10%'
                        }}
                    >
                        <FAQItem
                            title={'Mentors'}
                            beforeText={"Looking for a mentor to give you one-on-one advice about your project? Look "}
                            link={'/mentors.csv'}
                            linkText={'here'}
                            afterText={' to find one with the right expertise.'}
                        />
                    </Row>

                    {/* CO-LAB */}
                    <Row
                        style={{
                        paddingTop: '30px',
                        paddingLeft: '10%',
                        paddingRight: '10%'
                        }}
                    >
                        <FAQItem
                            title={'Innovation Co-Lab'}
                            beforeText={"The Duke Innovation Co-lab is letting hackers work in their space and use the equipment! Super awesome co-working space with over 40 3D printers, Bluesmith 3D Printing Service, and much more! Check it out "}
                            link={'https://colab.duke.edu/studio'}
                            linkText={'here'}
                            afterText={' Students will need to swipe in with Duke cards.'}
                        />
                    </Row>
                </div>
            </div>
        );
    }
}

export default TravelInfo;