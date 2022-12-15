class Brand < ApplicationRecord
    has_many :furnitures
    has_many :types, through: :furnitures
end
