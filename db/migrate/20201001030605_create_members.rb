class CreateMembers < ActiveRecord::Migration[6.0]
  def change
    create_table :members do |t|
      t.string     :name
      t.string     :account
      t.text       :achievement
      t.integer    :win
      t.integer    :lose
      t.integer    :sb

      t.timestamps
    end
  end
end
