class StudentController < ApplicationController

  def show
    student_ref = current_user.student_ref
    response = Unirest.get("http://soc-resumes-api.herokuapp.com/educations/students/#{student_ref}") 

    @student = response.body

    render 'show.json.jbuilder'
  end

  def create
    response = Unirest.post("http://soc-resumes-api.herokuapp.com/students", parameters: params)

    @students = response.body

    render 'show.json.jbuilder'
  end

  def update
    student_ref = params[:id]
    response = Unirest.patch("https://soc-resumes-api.herokuapp.com/students/# {student_ref}", parameters: params)

    @student = response.body

    render 'show.json.jbuilder'
  end

  def delete
    @education = params[:id]
    response = Unirest.delete("http://soc-resumes-api.herokuapp.com/educations/#{education_id}", parameters: params).body

    render json:{ message: "Successfully destroyed education information" }
  end
end
