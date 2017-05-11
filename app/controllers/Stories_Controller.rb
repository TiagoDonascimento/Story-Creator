class StoriesController < ApplicationController
  protect_from_forgery with: :exception

  def create

    @story = Story.new(story_params)
    @user = current_user
    @story.user = @user

    if @story.save!
      flash[:notice] = "Story successfully added!"
      redirect_to story_path(@story)
    else
      flash[:error] = @story.errors.full_messages.join('. ')
      render :new
    end
  end

  def new
    @story = Story.new
  end

  def index
    @story = Story.new
    @stories = Story.all
  end

  def show
    @story = Story.find(params[:id])
  end

  private

  def story_params
    params.require(:story).permit(:story_name, :protaginst, :cover, :setting, :goal)
  end
  end
