get '/' do
  # Look in app/views/index.erb
  erb :index
end

post '/color' do

  #Create and return a JSON object with the random cell and color given below.
  content_type :json

  { :cell => "#{rand(1..8)}", 
    :color => "#{"#" + "%06x" % (rand * 0xffffff)}" }.to_json

  # cell= rand(1..8)
  # color= "#" + "%06x" % (rand * 0xffffff)
end




