class CreateFrats < ActiveRecord::Migration[6.1]
  def change
    create_table :frats do |t|
      t.string :name
      t.string :fav_beer
      t.integer :member_count

      t.timestamps
    end
  end
end
