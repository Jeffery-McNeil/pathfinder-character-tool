class CreateProficiencies < ActiveRecord::Migration[7.0]
  def change
    create_table :proficiencies do |t|
      t.string :name
      t.string :proiciency_level
      t.integer :job_id

      t.timestamps
    end
  end
end
