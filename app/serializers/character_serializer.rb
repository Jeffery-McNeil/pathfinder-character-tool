class CharacterSerializer < ActiveModel::Serializer
  attributes :id, :name, :level, :user_id
end
