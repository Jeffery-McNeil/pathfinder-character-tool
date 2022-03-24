class Ancestry < ApplicationRecord
    has_many :ancestry_feats
    has_many :languages
    validates :name, presence: true
    validates :hit_points, presence: true
    validates :ability_boost_1, inclusion: { in: %w(strength dexterity constitution intelligence wisdom charisma) }
    validates :ability_boost_2, inclusion: { in: %w(strength dexterity constitution intelligence wisdom charisma) }

end
