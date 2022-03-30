class Ancestry < ApplicationRecord
    has_many :ancestry_feats
    has_many :languages
    validates :name, presence: true
    validates :hit_points, presence: true
    validates :ability_boost_1, inclusion: { in: %w(str dex con int wis cha) }

end
