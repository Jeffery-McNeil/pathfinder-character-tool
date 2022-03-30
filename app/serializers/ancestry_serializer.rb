class AncestrySerializer < ActiveModel::Serializer
  attributes :id, :name, :hit_points, :size, :speed, :ability_boost_1, :ability_boost_2, :ability_flaw, :character_id
end
