class Skill < ApplicationRecord
    belongs_to :skill

    validates :name, presence: true
    validates :job_id, presence: true
    validates :proiciency, inclusion: { in: %w( untrained, trained, expert, master, legendary ) }
end
