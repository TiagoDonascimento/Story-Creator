import React from 'react';
import { Link } from 'react-router';

const StoryListTile = (props) => {
  return(


    <ul className="flex-container">




        <p><img className="potato" src={props.cover}/>{props.protaginst}{props.story_name}</p>





    </ul>

  )
}

export default StoryListTile;
