class Ancestry < ApplicationRecord
    has_many :ancestry_feats
    has_many :languages
end
