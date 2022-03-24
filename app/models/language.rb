class Language < ApplicationRecord
    belongs_to :ancestry

    validates :name, presence: true
    validates :ancestry_id, presence: true
end
