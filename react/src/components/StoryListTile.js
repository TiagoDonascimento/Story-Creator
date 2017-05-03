import React from 'react';
import { Link } from 'react-router';

const StoryListTile = (props) => {
  return(
    <div className="list-item text-center medium-4 small-12 columns">
      <p><img src={props.cover}/></p>

      <p>{props.setting}</p>
      <div>

      </div>
    </div>

  )
}

export default StoryListTile;
