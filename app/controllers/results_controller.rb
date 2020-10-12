class ResultsController < ApplicationController

  def index
    @members = Member.all
  end

  def win_or_lose
    result = Result.find(params[:id])
    if result.result == "◯"
      result.update(result: "")
    else result.result == ""
      result.update(result: "◯")
    end
    item = Result.find(params[:id])
    render json: { result: item }
  end

end
