import React, { useEffect, useState } from 'react';
import FB from 'fb';

import './styles.scss';

const MyComments = () => {
  const [comments, setComments] = useState([])

  useEffect(
    () => {
      const accessToken = "EAADNTb56epABACZCgoUTfRuXKjkdmMTDj3pUSW4atRwrdx1SEzJh4ZBnBXyYC00GaURw2jXPe6kOl4XBKZC7XNeQPZBqa92zwkewvblWO7iLLQ8YabCqIP5w6aHyaVUT5yqCkrDc1x5WPylpMsjd0ZAROd3U7R3z0jYtF2TdyPjAF0HptCZAA4Lj6ZABeUtIrmpOv56GE71bvApc4xs6EHHhRhZCFdGZBCtmeBGsBD0OxqgZDZD"
      FB.options({ appId: '878259099323437', autoLogAppEvents: true, xfbml: true, version: 'v6.0' })
      FB.setAccessToken(accessToken)
      
      FB.api('215275429546355/comments').then(
        res => {
          return setComments(res.data)
        }, err => {
          console.error(err)
        }
      )
      
    }, []
  );

  return (
    <section>
      <div className="comments-container">
        <ul>
          { comments.map( el => (
            <li key={el.id} >{ el.message }</li>
          ) ) }
        </ul>
      </div>
    </section>
  )
}

export default MyComments;
