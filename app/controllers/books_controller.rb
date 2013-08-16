class BooksController < ApplicationController
respond_to :json

  def index
    respond_with json: Book.all
  end

  def show
    respond_with Book.find(params[:id])
  end

end