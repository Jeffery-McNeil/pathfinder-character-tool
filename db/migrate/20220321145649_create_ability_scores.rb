class CreateAbilityScores < ActiveRecord::Migration[7.0]
  def change
    create_table :ability_scores do |t|
      t.string :name
      t.integer :score
      t.integer :bonus
      t.integer :character_id

      t.timestamps
    end
  end
end
