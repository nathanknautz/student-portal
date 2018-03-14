class SkillsController < ApplicationController

  def show
   skills_id = params[:id]
    response = Unirest.get("http://soc-resumes-api.herokuapp.com/skills/#{skills_id}")  

   @skill = response.body

   render 'show.json.jbuilder'
  end

  def create
    response = Unirest.post("http://soc-resumes-api.herokuapp.com/skills", parameters: params)

    @skill = response.body

    render 'show.json.jbuilder'
  end

  def upate
    @skill_id = params[:id]
    response = Unirest.patch("https://soc-resumes-api.herokuapp.com/skills/# {skill_id}", parameters: params)

    @skill = response.body

    render 'show.json.jbuilder'
  end

  def delete
    @skill = params[:id]
    response = Unirest.delete("http://soc-resumes-api.herokuapp.com/skill/#{skill_id}", parameters: params).body

    render json:{ message: "Successfully destroyed skill information" }
  end
end