class JobSerializer < ActiveModel::Serializer
  attributes :id, :name, :key_ability, :hit_points, :character_id
end
