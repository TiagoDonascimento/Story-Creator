import React, { Component } from 'react';
import Scene from '../components/Scene';

class SceneContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      scene: ''
    }
    this.getData = this.getData.bind(this);
  }


  getData() {
    let sceneId = this.props.params.id;
    fetch(`/api/v1/scene/${sceneId}`)
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} ($response.statusText)`,
            error = new Error(errorMessage);
          throw(error);
        }
      })
      .then(response => response.json())
      .then(body => {
        this.setState({ scene: body });
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  componentDidMount() {
    this.getData();
  }

  render() {

    return(

      <div>

      <Story
        id={this.state.scene.id}
        key={this.state.scene.id}
        scene_name={this.state.scene.scene_name}
        problem={this.state.scene.problem}
        decision={this.state.scene.decision}
        polarity={this.state.scene.polarity}
        effect={this.state.scene.effect}
      />

      </div>
    )
  }
}

export default SceneContainer;
