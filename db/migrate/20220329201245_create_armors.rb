class CreateArmors < ActiveRecord::Migration[7.0]
  def change
    create_table :armors do |t|
      t.string :type
      t.string :name
      t.string :description
      t.integer :price
      t.string :bulk
      t.integer :bonus
      t.integer :check_penalty
      t.integer :speed_penalty
      t.integer :strength
      t.integer :level

      t.timestamps
    end
  end
end
