class FurnitureSerializer < ActiveModel::Serializer
  attributes :id, :name, :image
  belongs_to :brand
  belongs_to :type
end
