class CreateSkills < ActiveRecord::Migration[7.0]
  def change
    create_table :skills do |t|
      t.string :name
      t.string :proficiency
      t.integer :job_id

      t.timestamps
    end
  end
end
