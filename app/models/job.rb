class Job < ApplicationRecord
    has_many :general_feats
    has_many :skill_feats
    has_many :skill_feats
    has_many :skills
    has_many :spell_slots
    has_many :spells
    has_many :proficiencies
end
