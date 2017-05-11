import React, { Component } from 'react';
import SceneListTile from '../components/SceneListTile';

class SceneStoriesList extends Component {
  constructor(props) {
    super(props)

  }

  render() {
    let newScenes = this.props.scenes.map((scene) => {
      console.log('hi again')
      return (
        <SceneListTile
          id={scene.id}
          key={scene.id}
          scene_name={scene.scene_name}
          scene_cover={scene.scene_cover}
          problem={scene.problem}
          decision={scene.decision}
          polarity={scene.polarity}
          effect={scene.effect}
        />
      )
    });
    return(

      <div className="center">
        <section>
          {newScenes}
        </section>
      </div>
    )
  }
}

export default SceneStoriesList;
