class Proficiency < ApplicationRecord
    belongs_to :job

    validates :name, presence: true
    validates :proiciency_level, inclusion: { in: %w( untrained, trained, expert, master, legendary ) }
    validates :job_id, presence: true
end
