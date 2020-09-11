class Api::V1::PatientsController < ApplicationController
  def index
    patient = Patient.all.order(created_at: :desc)
    render json: patient
  end

  def create
    patient = Patient.create!(patient_params)
    if patient
      render json: patient
    else
      render json: patient.errors
    end
  end

  def show
    if patient
      render json: patient
    else
      render json: patient.errors
    end
  end

  def destroy
    patient&.destroy
    render json: {message: 'Patient Deleted'}
  end

  private

  def patient_params
    params.permit(:name, :age, :weight, :height, :phonenumber, :history, :image)
  end

  def patient
    @patient ||= Patient.find(params[:id])
  end
end
