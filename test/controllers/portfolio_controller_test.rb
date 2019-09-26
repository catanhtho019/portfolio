require 'test_helper'

class PortfolioControllerTest < ActionDispatch::IntegrationTest
  test "should get work" do
    get portfolio_work_url
    assert_response :success
  end

  test "should get experiment" do
    get portfolio_experiment_url
    assert_response :success
  end

  test "should get about" do
    get portfolio_about_url
    assert_response :success
  end

end
