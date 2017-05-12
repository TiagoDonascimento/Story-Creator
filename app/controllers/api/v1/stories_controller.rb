class Api::V1::StoriesController < ApplicationController
  skip_before_action :verify_authenticity_token
  def index
    stories = Story.where(user: current_user)
    render json: stories #, each_serializer: SimpleStorySerializer
  end

  def update
    story = Story.find(params[:id])
    story.points += 1
    if story.save!
      render json: story
    end
  end

  def show
    story = Story.find(params[:id])
    scenes = story.scenes
    render json: {
      story: story,
      scenes: scenes
    }
  end

  private

  def story_params
    params.require(:story).permit(:id, :name, :points)
  end
end
