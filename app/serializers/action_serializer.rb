class ActionSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :length, :job_id
end
