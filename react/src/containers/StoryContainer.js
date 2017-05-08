import React, { Component } from 'react';
import Story from '../components/Story';

class StoryContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      story: ''
    }
    this.getData = this.getData.bind(this);
  }


  getData() {
    let storyId = this.props.params.id;
    fetch(`/api/v1/stories/${storyId}`)
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
        this.setState({ story: body });
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    debugger;
    return(

      <div>

      <Story
        id={this.state.story.id}
        key={this.state.story.id}
        story_name={this.state.story.story_name}
        protaginst={this.state.story.protaginst}
        cover={this.state.story.cover}
        setting={this.state.story.setting}
        goal={this.state.story.goal}
      />

      </div>
    )
  }
}

export default StoryContainer;
