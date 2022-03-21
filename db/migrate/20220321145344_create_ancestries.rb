class CreateAncestries < ActiveRecord::Migration[7.0]
  def change
    create_table :ancestries do |t|
      t.string :name
      t.integer :hit_points
      t.string :size
      t.integer :speed
      t.string :ability_boost_1
      t.string :ability_boost_2
      t.string :ability_flaw
      t.integer :character_id

      t.timestamps
    end
  end
end
