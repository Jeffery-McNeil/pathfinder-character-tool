class Attribute < ApplicationRecord
    belongs_to :character
    validates :name, inclusion: { in: %w(strength dexterity constitution intelligence wisdom charisma) }
    validates :score, presence: true
    validates :bonus, presence: true
    
end
