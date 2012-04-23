# Run Docco 
guard 'process', :name => 'Docco', :command => 'docco jquery.holdr.js' do
  watch %r{jquery.holdr.js}
end


# Copy the newly created lib file for minification.
guard 'process', :name => 'Copy to min', :command => 'cp jquery.holdr.js jquery.holdr.min.js' do
  watch %r{jquery.holdr.js}
end

# Use uglify.js to minify the Javascript for maximum smallness
guard 'uglify', :destination_file => "jquery.holdr.min.js" do
  watch (%r{jquery.holdr.min.js})
end
