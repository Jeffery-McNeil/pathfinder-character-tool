class CreateWeapons < ActiveRecord::Migration[7.0]
  def change
    create_table :weapons do |t|
      t.string :name
      t.string :damage
      t.string :description
      t.integer :price
      t.string :bulk
      t.integer :hands
      t.string :group
      t.string :proficiency
      t.integer :level


      t.timestamps
    end
  end
end
