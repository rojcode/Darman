# Use lightweight Nginx version to serve static files
FROM nginx:alpine

# Maintainer info (optional)
LABEL maintainer="Darman Ravankar Pars"

# Remove default Nginx files
RUN rm -rf /usr/share/nginx/html/*

# Copy all project files to Nginx default directory
COPY . /usr/share/nginx/html

# Expose port 80 for web access
EXPOSE 80

# Run Nginx in foreground
CMD ["nginx", "-g", "daemon off;"]
