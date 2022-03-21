class CreateSpells < ActiveRecord::Migration[7.0]
  def change
    create_table :spells do |t|
      t.string :name
      t.integer :level
      t.string :description
      t.string :tradition
      t.string :school
      t.integer :job_id

      t.timestamps
    end
  end
end
