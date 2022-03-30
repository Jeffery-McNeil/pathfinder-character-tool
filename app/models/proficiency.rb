class Proficiency < ApplicationRecord
    belongs_to :job

    validates :name, presence: true
    validates :proficiency_level, inclusion: { in: %w( Untrained Trained Expert Master Legendary ) }
    validates :job_id, presence: true
end
