class Stories < ActiveRecord::Migration[5.0]
    def change

      create_table :stories do |t|
        t.string :story_name, null: false
        t.string :protaginst, null: false
        t.text   :cover,      null: false
        t.text   :setting, null: false
        t.text   :goal, null: false
        t.belongs_to :user, null: false

        t.timestamps null: false
    end
  end
end
