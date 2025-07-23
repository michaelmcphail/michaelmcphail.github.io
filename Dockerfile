# No officiel Jekyll image, use a custom one from jvconseil
FROM jvconseil/jekyll-docker:4.3.3

# Set working directory
WORKDIR /srv/jekyll

# Copy Gemfile first for better caching. If we want to optimise caching,
# we could generate and copy Gemfile.lock as well.
COPY Gemfile ./

# Install dependencies (this will create Gemfile.lock if it doesn't exist)
RUN bundle install

# Copy the rest of the application
COPY . .

# Expose port 4000 (default Jekyll port)
EXPOSE 4000

# Set environment variables
ENV JEKYLL_ENV=development
ENV JEKYLL_SERVE_HOST=0.0.0.0

# Default command to serve the site
CMD ["jekyll", "serve", "--livereload", "--host", "0.0.0.0"] 