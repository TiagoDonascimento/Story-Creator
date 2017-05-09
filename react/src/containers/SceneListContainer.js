import React, { Component } from 'react';
import SceneListContainer from '../components/SceneListContainer';

class StoryListContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      scenes: []
    }
    this.getData = this.getData.bind(this);
  }

  getData() {
    fetch('/api/v1/scenes')
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

        this.setState({scenes: body});
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  componentDidMount() {
    this.getData();
  }

  render() {


    let newScenes = this.state.scenes.map((scene) => {
      return (
        <SceneListTile
          id={scene.id}
          key={scene.id}
          story_name={scene.scene_name}
          protaginst={scene.problem}
          cover={scene.decision}
          setting={scene.polarity}
          goal={scene.effect}
        />
      )
    });
    return(

      <div>
        <section id="photos">
          {newScenes}
        </section>
      </div>
    )
  }
}

export default SceneListContainer;
