import React from 'react';
import { Link } from 'react-router';

const StoryListTile = (props) => {
  return(

          <div>
          <a href={`/stories/${props.id}`}><img src={props.cover}/></a>
          </div>

  )
}

export default StoryListTile;
