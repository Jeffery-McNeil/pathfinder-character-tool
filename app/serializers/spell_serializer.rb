class SpellSerializer < ActiveModel::Serializer
  attributes :id, :name, :level, :description, :tradition, :school, :job_id
end
