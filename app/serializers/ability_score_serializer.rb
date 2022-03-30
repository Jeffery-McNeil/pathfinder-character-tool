class AbilityScoreSerializer < ActiveModel::Serializer
  ability_scores :id, :name, :score, :bonus, :character_id
end
