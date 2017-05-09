class Scenes < ActiveRecord::Migration[5.0]
  def change

    create_table :scenes do |t|
      t.string :scene_name, null: false
      t.text :scene_cover, null: false
      t.text   :problem,  null: false
      t.text   :decision, null: false
      t.boolean :polarity, null: false
      t.text   :effect,   null: false
      t.belongs_to :story, null: false

      t.timestamps null: false
    end
  end
end
