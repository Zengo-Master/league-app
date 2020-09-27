class CreateResults < ActiveRecord::Migration[6.0]
  def change
    create_table :results do |t|
      t.string      :player
      t.string      :account 
      t.text        :achievement
      t.string      :op_1
      t.string      :op_2
      t.string      :op_3
      t.string      :op_4
      t.string      :op_5
      t.string      :op_6
      t.string      :op_7
      t.string      :op_8
      t.string      :op_9
      t.string      :op_10
      t.timestamps
    end
  end
end
