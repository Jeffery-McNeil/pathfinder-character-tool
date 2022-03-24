class GeneralFeat < ApplicationRecord
    belongs_to :job

    validates :name, presence: true
    validates :description, presence: true
    validates :level, inclusion: { in: 1..20 }
end
