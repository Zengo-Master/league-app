class JsonPController < ApplicationController
  def parse
    json_str  = request.body.read     # リクエストのJSON
    json_hash = JSON.parse(json_data,symbolize_names: true)  # Hashに変換

    # 見やすいように整形
    response_str = 
    "JSON: " + json_str       + "n" + 
    "Hash: " + json_hash.to_s + "n"

    render plain: response_str
  end
end