class Api::EventsController < ApplicationController
  before_action :get_event, only: [:show, :update, :destroy]
  
  def index
    # events = Event.with_colleges_frats
    render json: Event.with_colleges_frats
  end


  def show
    render json: @event
  end


  def create
    event = Event.new(event_params)
    if event.save
      render json: event
    else
      render json: {error: event.errors}, status: 422
    end
  end


  def update 
    if @event.update(event_params)
      render json: @event
    else
      render json: {error: @event.errors}, status: 422
    end
  end


  def destroy
    @event.destroy
    render json: @event
  end


  private
  
  def event_params
    params.require(:event).permit(:name, :info, :data, :byob, :likes ,:frat_id, :college_id)
  end


  def get_event
    @event = Event.find(params[:id])
  end
end
