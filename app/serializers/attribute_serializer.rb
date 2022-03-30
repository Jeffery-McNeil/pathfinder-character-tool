class Ability_scoreSerializer < ActiveModel::Serializer
  ability_scores :id, :name, :score, :bonus, :character_id
end
