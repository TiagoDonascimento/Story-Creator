import React from 'react'
import { Link } from 'react-router';
import PageTransition from 'react-router-page-transition';



const Story = props => {


  return(

    <div className="animated rotateInDownLeft">

<img className="holder" src={props.cover}/>


<h1> Story: </h1>{props.story_name}

<h1>Protaganist:</h1>{props.protaginst}

<h1> Setting: </h1>{props.setting}

<h1> Goal: </h1>{props.goal}


  <li><a href={"/stories/"+ props.id + "/scenes/new"}>Add a scene</a></li>


      </div>
      <img className="holder" src={props.cover}/>
  )
}
export default Story;
