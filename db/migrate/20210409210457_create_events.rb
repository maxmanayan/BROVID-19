class CreateEvents < ActiveRecord::Migration[6.1]
  def change
    create_table :events do |t|
      t.string :name
      t.text :info
      t.string :date
      t.boolean :byob
      t.integer :likes
      t.belongs_to :frat, null: false, foreign_key: true
      t.belongs_to :college, null: false, foreign_key: true

      t.timestamps
    end
  end
end
