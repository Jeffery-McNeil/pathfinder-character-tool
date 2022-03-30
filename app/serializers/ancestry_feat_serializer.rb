class AncestryFeatSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :level, :ancestry_id
end
