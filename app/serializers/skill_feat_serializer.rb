class SkillFeatSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :level, :job_id
end
