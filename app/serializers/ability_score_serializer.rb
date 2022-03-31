class AbilityScoreSerializer < ActiveModel::Serializer
  attributes :id, :name, :score, :bonus, :character_id
end
