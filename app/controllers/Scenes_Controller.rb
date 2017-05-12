class ScenesController < ApplicationController
  protect_from_forgery with: :exception

  def create

    @scene = Scene.new(scene_params)
    @story = Story.find(params[:story_id])
    @scene.story = @story
    if @scene.save!
      flash[:notice] = "Scene successfully added!"
      redirect_to story_path(@story)
    else
      flash[:error] = @scene.errors.full_messages.join('. ')
      render :new
    end
  end

  def new
    @story = Story.find(params[:story_id])
    @scene = Scene.new
  end

  def index
    @scene = Scene.new
    @scenes = Scene.all
  end

  def show
    @scene = Scene.find(params[:id])
  end

  private

  def scene_params
    params.require(:scene).permit(:scene_name, :scene_cover,:problem, :decision, :polarity, :effect)
  end
  end
