import React from 'react';
import { Link } from 'react-router';

const SceneListTile = (props) => {

  let polar = ""
  if (props.polarity === true) {
    polar = "closer"
  }else  {
    polar = "farther"
  }


  return(


      <div>
      <img className="holder" src={props.scene_cover}/>




        <div className="flex-container">
        
      <div className="flex-item"><p><h3>Scene</h3>{props.scene_name}</p></div>
      <div className="flex-item"><p><h3>Problem:</h3>{props.problem}</p></div>
      <div className="flex-item"><p><h3>Decision</h3>{props.decision}</p></div>
      <div className="flex-item"><p><h3>Effect</h3>{props.effect}</p></div>
      <div className="flex-item"><p><h3>Problem:</h3>{props.problem}</p></div>


    </div>
      </div>
  )
}

export default SceneListTile;