import React from 'react'
import classes from './AlertBubble.scss'

class AlertBubble extends React.Component {

  constructor () {
    super()
  }


  static propTypes = {
    firstText: React.PropTypes.string.isRequired,
    secondText: React.PropTypes.string,
    boldText: React.PropTypes.string,
    thirdText: React.PropTypes.string
  }

  render () {
    return (
      <div>
        <div className={classes.container}>
          <div className={classes.bubble}>
            <div className={classes.firstText}>
              {this.props.firstText}
            </div>
            {this.props.secondText  ? (
              <div className={classes.secondText}>
                {this.props.secondText}
                <div className={classes.bold}>
                  {this.props.boldText}
                </div>
                {this.props.thirdText}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    )
  }
}

export default AlertBubble

