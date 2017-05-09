class Scene < ActiveRecord::Base
  belongs_to :story

  validates :scene_name, :scene_cover, :problem, :decision, :polarity, :effect, :story_id, presence: true
end
