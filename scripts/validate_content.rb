#!/usr/bin/env ruby
# frozen_string_literal: true

require "pathname"
require "date"
require "yaml"

ROOT = Pathname.new(__dir__).parent
CONTENT_GLOBS = %w[_essays/*.md _poems/*.md _aphorisms/*.md _quotes/*.md _thoughts/*.md *.md].freeze

errors = []

def front_matter(path)
  text = path.read
  return [{}, text] unless text.start_with?("---\n")

  _opening, yaml, body = text.split(/^---\s*$/, 3)
  [YAML.safe_load(yaml, permitted_classes: [Date, Time], aliases: false) || {}, body || ""]
rescue Psych::Exception => e
  [{}, text, "Invalid YAML front matter: #{e.message}"]
end

CONTENT_GLOBS.flat_map { |glob| Dir.glob(ROOT.join(glob)).map { |file| Pathname.new(file) } }.each do |path|
  data, body, yaml_error = front_matter(path)
  rel = path.relative_path_from(ROOT).to_s
  errors << "#{rel}: #{yaml_error}" if yaml_error

  image = data["image"]
  if image
    asset_path = ROOT.join(image.to_s.sub(%r{\A/}, ""))
    errors << "#{rel}: image does not exist: #{image}" unless asset_path.file?
    errors << "#{rel}: image_alt is required when image is set" if data["image_alt"].to_s.strip.empty?
  end

  body.scan(/<img\b[^>]*>/i).each do |tag|
    src = tag[/\bsrc=["']([^"']+)["']/i, 1]
    alt = tag[/\balt=["']([^"']*)["']/i, 1]
    errors << "#{rel}: inline image is missing alt text: #{src || tag}" if alt.nil?
  end
end

if errors.any?
  warn errors.join("\n")
  exit 1
end

puts "Content references look good."
