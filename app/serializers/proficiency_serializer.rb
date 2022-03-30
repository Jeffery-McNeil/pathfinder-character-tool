class ProficiencySerializer < ActiveModel::Serializer
  attributes :id, :name, :proficiency_level, :job_id
end
