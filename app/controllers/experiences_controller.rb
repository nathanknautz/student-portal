class ExperienceController < ApplicationController

  def show
   experience_id = params[:id]
    response = Unirest.get("heroku/experience/#{experience_id}")  
  end

  def create
   response = Unirest.post("http://soc-resumes-api.herokuapp.com/experience]", parameters: params)

    @experience = response.body

    render 'show.json.jbuilder' 
  end

  def upate
    @experiences_id = params[:id]
    response = Unirest.patch("https://soc-resumes-api.herokuapp.com/experiences/# {experiences_id}", parameters: params)

    @experience = response.body

    render 'show.json.jbuilder'
  end

  def delete
     @experience = params[:id]
    response = Unirest.delete("http://soc-resumes-api.herokuapp.com/experience/#{experience}", parameters: params).body

    render json:{ message: "Successfully destroyed experience information" }
  end