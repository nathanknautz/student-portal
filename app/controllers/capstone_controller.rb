class CapstonesController < ApplicationController

  def show
    capstone_id = params[:id]
    response = Unirest.get("https://soc-resumes-api.herokuapp.com/capstones/#{capstone_id}")

    @capstone = response.body

    render 'show.json.jbuilder'
  end

  def create
    response = Unirest.post("http://soc-resumes-api.herokuapp.com/capstones", parameters: params)

    @capstone = response.body

    render 'show.json.jbuilder'
  end

  def update
    @capstone_id = params[:id]
    response = Unirest.patch("https://soc-resumes-api.herokuapp.com/capstones/#{capstone_id}", parameters: params)

    @capstone = response.body

    render 'show.json.jbuilder'
  end

  def destroy
    @capstone = params[:id]
    response = Unirest.delete("http://soc-resumes-api.herokuapp.com/#{capstone_id}", parameters: params).body

    render json:{ message: "Successfully destroyed capstone project" }

  end
end