class Background < ApplicationRecord
    belongs_to :character
    validates :name, presence: true
    validates :ability_boost_1, inclusion: { in: %w(Strength Dexterity Constitution Intelligence Wisdom Charisma) }
    validates :ability_boost_2, inclusion: { in: %w(Strength Dexterity Constitution Intelligence Wisdom Charisma) }


end
