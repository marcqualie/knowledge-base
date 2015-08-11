require 'sass'

desc 'Build application assets'
task :build do
  time_start = Time.now
  FileUtils.mkdir_p 'assets/stylesheets' unless Dir.exists? 'assets/stylesheets'
  FileUtils.mkdir_p 'assets/fonts' unless Dir.exists? 'assets/fonts'
  FileUtils.mkdir_p '_site/assets/stylesheets' unless Dir.exists? '_site/assets/stylesheets'
  puts "> sass compile application.scss"
  Sass.compile_file(
    '_assets/stylesheets/application.scss',
    'assets/stylesheets/application.css',
    load_paths: ['_assets/bower'],
  )
  FileUtils.cp 'assets/stylesheets/application.css', '_site/assets/stylesheets/application.css'
  puts "> install fonts"
  FileUtils.cp Dir.glob('_assets/bower/fontawesome/fonts/*'), 'assets/fonts/'
  puts "> jekyll build"
  puts `bundle exec jekyll build --trace`.split("\n").map { |l| "  #{l}" }
  puts "> complete: #{(Time.now - time_start).round 2}s"
end
