require 'webrick'
require 'json'

root = File.expand_path './assets'
server = WEBrick::HTTPServer.new :Port => 3000, :DocumentRoot => root
comments = JSON.parse(File.read('./_comments.json'))

server.mount_proc '/comments.json' do |req, res|
  if req.request_method == 'POST'
    comments << req.query
  end

  res['Content-Type'] = 'application/json'
  res['Cache-Control'] = 'no-cache'
  res.body = JSON.generate(comments)
end

trap 'INT' do server.shutdown end

server.start
