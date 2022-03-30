class JobFeatSerializer < ActiveModel::Serializer
  attributes :id, :name, :level, :description, :job_id
end
