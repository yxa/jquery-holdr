# Run Docco 
guard 'process', :name => 'Docco', :command => 'docco holdr.js' do
  watch %r{holdr.js}
end


# Copy the newly created lib file for minification.
guard 'process', :name => 'Copy to min', :command => 'cp holdr.js holdr.min.js' do
  watch %r{holdr.js}
end

# Use uglify.js to minify the Javascript for maximum smallness
guard 'uglify', :destination_file => "holdr.min.js" do
  watch (%r{holdr.min.js})
end
