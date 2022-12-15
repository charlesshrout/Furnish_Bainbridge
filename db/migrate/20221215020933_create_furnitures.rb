class CreateFurnitures < ActiveRecord::Migration[7.0]
  def change
    create_table :furnitures do |t|
      t.string :name
      t.string :image
      t.belongs_to :brand, null: false, foreign_key: true
      t.belongs_to :type, null: false, foreign_key: true

      t.timestamps
    end
  end
end
