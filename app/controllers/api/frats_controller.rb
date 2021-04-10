class Api::FratsController < ApplicationController
  before_action :set_frat, only: [:show, :update, :destroy]

  def index
    frats = Frat.all
    render json: frats
  end

  def show
    render json: {frat: @frat, colleges: @frat.get_colleges_with_event_info, events: @frat.events, unassociated_colleges: @frat.get_unassociated_colleges}
  end

  def create
    @frat = Frat.new(frat_params)

    if @frat.save
      render json: @frat
    else
      render json: {error: @frat.errors}, status: 422
    end
  end

  def update 
    if @frat.update(frat_params)
      render json: @frat
    else
      render json: {error: @frat.errors}, status: 422
    end
  end

  def destroy
    @frat.destroy
    render json: @frat
  end

  private
    def set_frat
      @frat = Frat.find(params[:id])
    end

    def frat_params
      params.require(:frat).permit(:name, :fav_beer, :member_count)
    end
end
