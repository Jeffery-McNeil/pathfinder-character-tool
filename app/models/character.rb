class Character < ApplicationRecord
    has_many :ability_scores
    has_one :background
    has_one :job
    has_one :ancestry
    has_many :proficiencies, through: :job
    has_many :spells, through: :job
    has_many :skill_feats, through: :job
    has_many :job_feats, through: :job
    has_many :general_feats, through: :job
    has_many :ancestry_feats, through: :ancestry
    has_many :languages, through: :ancestry
    has_many :spell_slots, through: :job
    has_many :skills, through: :job

    validates :name, presence: true
    validates :level, presence: true
    validates :level, inclusion: { in: 1..20}
end
