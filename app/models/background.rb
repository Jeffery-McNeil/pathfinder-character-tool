class Background < ApplicationRecord
    belongs_to :character
    validates :name, presence: true
    validates :ability_boost_1, inclusion: { in: %w(strength dexterity constitution intelligence wisdom charisma) }
    validates :ability_boost_2, inclusion: { in: %w(strength dexterity constitution intelligence wisdom charisma) }


end
