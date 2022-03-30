class BackgroundSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :skill, :bonus_feat, :ability_boost_1, :ability_boost_2, :character_id
end
