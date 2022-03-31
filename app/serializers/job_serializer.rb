class JobSerializer < ActiveModel::Serializer
  attributes :id, :name, :key_abilities , :hit_points, :character_id
end
