import React from 'react'
import classes from './DelimitedStackedInfo.scss'
import sectionClasses from 'components/EventInfoSection/EventInfoSection.scss'

class DelimitedStackedInfo extends React.Component {

  constructor () {
    super()
  }

  static propTypes = {
    header: React.PropTypes.string.isRequired,
    leftArray: React.PropTypes.array.isRequired,
    rightArray: React.PropTypes.array.isRequired,
    alignment: React.PropTypes.string.isRequired,
    leftColor: React.PropTypes.string,
    rightColor: React.PropTypes.string,
  }

  render () {
    return (
      <div>
        <div className={sectionClasses.header} style={{'textAlign': 'center'}}>
          {this.props.header}
        </div>
        <div className={classes.container} style={{textAlign: this.props.alignment}}>
          {this.props.leftArray.map((left, index) => {
              return ( <div className={classes.preDelimeter} key={index}
                        style={{'color': this.props.leftColor}}>
                {left}
                <div className={classes.afterDelimeter} key={index}
                  style={{'color': this.props.rightColor}}>
                  {this.props.rightArray[index]}
                </div>
              </div> )
            }
          )}
        </div>
      </div>
    )
  }
}

export default DelimitedStackedInfo

