import React from 'react'
import classes from './DatasetElement.scss'

class DatasetElement extends React.Component {

  static propTypes = {
    header: React.PropTypes.string.isRequired,
    blurb: React.PropTypes.string.isRequired,
    url: React.PropTypes.string.isRequired
  }

  render () {
    return (
      <div>
        <div className={classes.container}>
          <div className={classes.headerContainer}>
            <div className={classes.header}> {this.props.header} </div>
          </div>
          <div className={classes.blurbContainer}>
            <div className={classes.blurb}> {this.props.blurb} </div>
          </div>
          <div className={classes.viewButtonContainer}>
          <div className={classes.viewButton}><a target="_blank" className={classes.viewButtonLink} target='_blank' href={this.props.url}>View</a></div>
          </div>
        </div>
      </div>
    )
  }
}

export default DatasetElement