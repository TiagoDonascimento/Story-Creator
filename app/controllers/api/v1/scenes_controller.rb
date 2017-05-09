class Api::V1::Scenes_Controller < ApplicationController
  skip_before_action :verify_authenticity_token
  def index
    stories = Scene.all
    render json: stories #, each_serializer: SimpleStorySerializer
  end

  

  def update
    scene = Scene.find(params[:id])
    scene.points += 1
    if scene.save!
      render json: Scene, serializer: CompleteSceneSerializer
    end
  end

  def show
    scene = Scene.find(params[:id])
    render json: scene #, serializer: CompleteStorySerializer
  end

  private

  def scene_params
    params.require(:scene).permit(:id, :name, :points)
  end
end
