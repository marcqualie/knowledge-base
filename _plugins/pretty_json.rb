module Jekyll
  module JsonFilter
    def pretty_json(input)
      JSON.pretty_generate(input).gsub('<', '&lt;').gsub("\n", "<br/>")
    end
  end
end

Liquid::Template.register_filter(Jekyll::JsonFilter)
