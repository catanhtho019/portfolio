class HomepageController < ApplicationController
  def home
    # @project = Project.new
    # @projects = Project.first(3)
  end
  def download_pdf
  send_file "#{Rails.root}/app/assets/docs/Catherine_Nguyen-Cat_CV.pdf", type: "application/pdf", x_sendfile: true
end
end
