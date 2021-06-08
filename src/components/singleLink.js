import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function SingleLink({link, title, icon, isLive}) {
  return (
    <a href={link} className="single-link-a">
      <div className="single-link">
        <div>{title}</div>
        {title === "Twitch" ? isLive ? <div className="live-text">LIVE!</div> : <div>Not live</div> : null}
        <FontAwesomeIcon icon={icon} />
      </div>
    </a>
  )
}

export default SingleLink;
