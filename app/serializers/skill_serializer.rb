class SkillSerializer < ActiveModel::Serializer
  attributes :id, :name, :proficiency, :job_id
end
