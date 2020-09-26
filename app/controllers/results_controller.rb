class ResultsController < ApplicationController

  def index
    @results = Result.all
  end

  # def cell
  #   result = Result.find(params[:id])
  #   if result.cell = ""
  #     result.update(cell: "○")
  #   else
  #     result.update(cell: "")
  #   end

  #   item = Result.find(params[:id])
  #   render json: { result: item }
  # end

end
