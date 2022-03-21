class CreateAncestryFeats < ActiveRecord::Migration[7.0]
  def change
    create_table :ancestry_feats do |t|
      t.string :name
      t.string :description
      t.integer :level
      t.integer :ancestry_id

      t.timestamps
    end
  end
end
