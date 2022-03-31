class AbilityScore < ApplicationRecord
    belongs_to :character
    validates :score, presence: true
    validates :bonus, presence: true
    
end
