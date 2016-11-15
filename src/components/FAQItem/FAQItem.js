import React from 'react'
import classes from '../FAQItem/FAQItem.scss'

export const FAQItem = (props) => (

  <div className={classes.section}>
    <div className={classes.sectionHeader} style={{'textAlign': 'left'}}>
      {props.title}
    </div>
    <div className={classes.sectionText}>
      {(props.link) ? (
        generateTextWithLink(props.beforeText, props.link, props.linkText, props.afterText)
      ) : props.text }
    </div>
  </div>
)

function generateTextWithLink (beforeText, link, linkText, afterText) {
  return (
    <div className={classes.sectionText}>
      {beforeText}
      <a href={link} className={classes.link}>{linkText}</a>
      {afterText}
    </div>
  )
}

FAQItem.propTypes = {
  title: React.PropTypes.string.isRequired,
  text: React.PropTypes.string,
  beforeText: React.PropTypes.string,
  afterText: React.PropTypes.string,
  linkText: React.PropTypes.string,
  link: React.PropTypes.string
}

export default FAQItem
