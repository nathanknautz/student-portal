class EducationController < ApplicationController

  def show
  education_id = params[:id] 
    response = Unirest.get("http://soc-resumes-api.herokuapp.com/educations/#{education_id}")  
    @education = response.body

    render 'show.json.jbuilder'
  end

  def create
    
    response = Unirest.post("http://soc-resumes-api.herokuapp.com/educations", parameters: params)

    @education = response.body

    render 'show.json.jbuilder'
  end

  def update
    @education_id = params[:id]
    response = Unirest.patch("https://soc-resumes-api.herokuapp.com/educations/# {education_id}", parameters: params)

    @education = response.body

    render 'show.json.jbuilder'
  end

  def delete
    @education = params[:id]
    response = Unirest.delete("http://soc-resumes-api.herokuapp.com/educations/#{education_id}", parameters: params).body

    render json:{ message: "Successfully destroyed education information" }
  end
end