import React from 'react'
import classes from './DelimitedStackedInfo.scss'
import sectionClasses from 'components/EventInfoSection/EventInfoSection.scss'

class DelimitedStackedInfo extends React.Component {

  static propTypes = {
    header: React.PropTypes.string.isRequired,
    leftArray: React.PropTypes.array.isRequired,
    rightArray: React.PropTypes.array.isRequired,
    alignment: React.PropTypes.string.isRequired,
    leftColor: React.PropTypes.string,
    rightColor: React.PropTypes.string,
    rightColors: React.PropTypes.array
  }

  render () {
    return (
      <div>
        <div className={sectionClasses.header} style={{'textAlign': 'center'}}>
          {this.props.header}
        </div>
        <div className={classes.container} style={{textAlign: this.props.alignment}}>
          {this.props.leftArray.map((left, index) => {
            return (<div className={classes.preDelimiter} key={index}
              style={{'color': this.props.leftColor}}>
              {left}
              {this.props.rightColor ? (
                <div className={classes.afterDelimiter} key={index}
                  style={{'color': this.props.rightColor}}>
                  {this.props.rightArray[index]}
                </div>
                ) : (
                  <div className={classes.afterDelimiter} key={index}
                    style={{'color': this.props.rightColors[index]}}>
                    {this.props.rightArray[index]}
                  </div>
              )}
            </div>)
          }
          )}
        </div>
      </div>
    )
  }
}

export default DelimitedStackedInfo

