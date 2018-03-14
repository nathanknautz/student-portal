class SkillsController < ApplicationController

  def show
     skills_id = params[:id]
    response = Unirest.get("heroku/skills/#{skills_id}")  
  end

  def create
  end

  def upate
  end

  def delete
  end
end