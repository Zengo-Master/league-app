class ResultsController < ApplicationController

  def index
    @results = Result.all
  end

  # def game
  #   result = Result.find(params[:id])
  #   if result.クリックしたtdのカラム == ""
  #     result.update(クリックしたtdのカラム: "")
  #   else
  #     result.update(クリックしたtdのカラム: "")
  #   end
  # end

end
