class AncestryFeat < ApplicationRecord
    belongs_to :ancestry
    validates :name, presence: true
    validates :level, inclusion: { in: 1..20 }
    validates :description, presence: true
end
