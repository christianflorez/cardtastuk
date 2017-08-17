# include "ActionView::Helpers::AssetTagHelper"
class ProofsController < ApplicationController
  def landscape
    layout "landscape"
    @proof = Proof.find(params[:id])
    respond_to do |format|
      format.html
      format.pdf do
        render pdf: "proof_file_name", :page_height => '10.25in', :page_width => '7.25in'  # Excluding ".pdf" extension.
      end
    end
  end

  def portrait
    layout "portrait"
    @proof = Proof.find(params[:id])
    respond_to do |format|
      format.html
      format.pdf do
        render pdf: "proof_file_name", :page_height => '10.25in', :page_width => '7.25in'  # Excluding ".pdf" extension.
      end
    end
  end
end
