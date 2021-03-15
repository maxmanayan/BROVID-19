class Api::StaticController < ApplicationController

  def api_test 
    render json: {data_here: 'Working'}
  end

end
