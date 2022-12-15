class FurnitureSerializer < ActiveModel::Serializer
  attributes :id, :name, :image
  has_one :brand_id
  has_one :type_id
end
