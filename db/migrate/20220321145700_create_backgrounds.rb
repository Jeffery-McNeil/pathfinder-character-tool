class CreateBackgrounds < ActiveRecord::Migration[7.0]
  def change
    create_table :backgrounds do |t|
      t.string :name
      t.string :description
      t.string :skill
      t.string :bonus_feat
      t.string :ability_boost_1
      t.string :ability_boost_2
      t.integer :character_id

      t.timestamps
    end
  end
end
