class ResultsController < ApplicationController

  def index
    @results = Result.all
  end

  # def win_or_lose
  #   result = Result.find(params[:id])
  #   binding.pry
  #   if result.op_2 == nil
  #     result.update(op_2: "○")
  #   else result.op_2 == "○"
  #     result.update(op_2: nil)
  #   end
  #   item = Result.find(params[:id])
  #   render json: { result: item }
  # end

end
