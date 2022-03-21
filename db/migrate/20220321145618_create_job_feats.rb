class CreateJobFeats < ActiveRecord::Migration[7.0]
  def change
    create_table :job_feats do |t|
      t.string :name
      t.integer :level
      t.string :description
      t.integer :job_id

      t.timestamps
    end
  end
end
