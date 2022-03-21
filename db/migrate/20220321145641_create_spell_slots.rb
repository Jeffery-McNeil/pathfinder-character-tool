class CreateSpellSlots < ActiveRecord::Migration[7.0]
  def change
    create_table :spell_slots do |t|
      t.integer :level
      t.integer :number
      t.integer :spell_id

      t.timestamps
    end
  end
end
