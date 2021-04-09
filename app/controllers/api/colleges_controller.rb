class Api::CollegesController < ApplicationController
  before_action :set_college, only: [:show, :update, :destroy]

  def index
    colleges = College.all
    render json: colleges
  end

  def show
    render json: {college: @college, patients: @college.get_patients_with_appointment_info, unassociated_patients: @college.get_unassociated_patients}
  end

  def create
    @college = College.new(college_params)

    if @college.save
      render json: @college
    else
      render json: {error: @college.errors}, status: 422
    end
  end

  def update 
    if @college.update(college_params)
      render json: @college
    else
      render json: {error: @college.errors}, status: 422
    end
  end

  def destroy
    @college.destroy
    render json: @college
  end

  private
    def set_college
      @college = College.find(params[:id])
    end

    def college_params
      params.require(:college).permit(:name, :mascot)
    end
end
