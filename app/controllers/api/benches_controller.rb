class Api::BenchesController < ApplicationController
  def index
    @benches = Bench.all
    render json: @benches  
  end

  def create

  end

  private

  def bench_params
    params.require(:bench).permit(:description, :lat, :lng)
  end

end
