class CreatePatients < ActiveRecord::Migration[6.0]
  def change
    create_table :patients do |t|
      t.string :name, null: false
      t.integer :age, null: false
      t.integer :weight
      t.integer :height
      t.string :phonenumber, null: false
      t.text :history
      t.string :image, default: 'https://static01.nyt.com/images/2020/04/14/smarter-living/14virus-maskdonts5/00well-masks-chin-mobileMasterAt3x-v2.png'
      t.timestamps
    end
  end
end
