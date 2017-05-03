import React, { Component } from 'react';
import StoryListTile from '../components/StoryListTile';

class StoryListContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      stories: []
    }
    this.getData = this.getData.bind(this);
  }

  getData() {
    fetch('http://localhost:3000/api/v1/stories')
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

        this.setState({stories: body});
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  componentDidMount() {
    this.getData();
  }

  render() {


    let newStories = this.state.stories.map((story) => {
      return (
        <StoryListTile
          id={story.id}
          key={story.id}
          story_name={story.story_name}
          protaginst={story.protaginst}
          cover={story.cover}
          setting={story.setting}
          goal={story.goal}
        />
      )
    });
    return(
      <div>
        {newStories}
      </div>
    )
  }
}

export default StoryListContainer;
