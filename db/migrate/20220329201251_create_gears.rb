class CreateGears < ActiveRecord::Migration[7.0]
  def change
    create_table :gears do |t|
      t.string :name
      t.integer :price
      t.string :description
      t.string :bulk
      t.integer :level

      t.timestamps
    end
  end
end
