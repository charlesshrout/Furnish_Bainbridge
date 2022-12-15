class Type < ApplicationRecord
    has_many :furnitures
    has_many :brands, through: :furnitures
end
