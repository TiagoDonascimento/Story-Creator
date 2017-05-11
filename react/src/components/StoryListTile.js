import React from 'react';
import { Link } from 'react-router';

const StoryListTile = (props) => {
  return(

            <div>

                <div className="animated flipInY">

                    <a href={`/stories/${props.id}`}><img src={props.cover}/></a>

      
                </div>
              </div>
  )
}

export default StoryListTile;
