class CreateSkillFeats < ActiveRecord::Migration[7.0]
  def change
    create_table :skill_feats do |t|
      t.string :name
      t.string :description
      t.integer :level
      t.integer :job_id

      t.timestamps
    end
  end
end
