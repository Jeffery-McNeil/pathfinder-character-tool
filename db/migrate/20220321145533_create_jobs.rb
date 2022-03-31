class CreateJobs < ActiveRecord::Migration[7.0]
  def change
    create_table :jobs do |t|
      t.string :name
      t.text :key_abilities
      t.integer :hit_points
      t.integer :character_id

      t.timestamps
    end
  end
end
