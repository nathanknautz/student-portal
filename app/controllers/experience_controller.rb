class ExperienceController < ApplicationController

  def show
   experience_id = params[:id]
    response = Unirest.get("heroku/experience/#{experience_id}")  
  end

  def create
  end

  def upate
  end

  def delete
  end
