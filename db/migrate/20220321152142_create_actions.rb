class CreateActions < ActiveRecord::Migration[7.0]
  def change
    create_table :actions do |t|
      t.string :name
      t.string :description
      t.integer :length
      t.integer :job_id


      t.timestamps
    end
  end
end
