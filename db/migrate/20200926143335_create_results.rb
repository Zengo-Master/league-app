class CreateResults < ActiveRecord::Migration[6.0]
  def change
    create_table :results do |t|
      t.string :nickname,   null: false
      t.string :cell_1,                  default: ""
      t.string :cell_2,                  default: ""
      t.string :cell_3,                  default: ""
      t.string :cell_4,                  default: ""
      t.string :cell_5,                  default: ""
      t.string :cell_6,                  default: ""
      t.string :cell_7,                  default: ""
      t.string :cell_8,                  default: ""
      t.string :cell_9,                  default: ""
      t.string :cell_10,                 default: ""

      t.timestamps
    end
  end
end
