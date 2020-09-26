# Specify the base image of the first block and tag
FROM node:alpine as builder

# Specify working directory
WORKDIR '/app'

# Install dependencies
COPY ./package.json ./
RUN npm install

# Copy the contents of working directory
COPY ./ ./

# Build the production application
RUN npm run build

# New block with nginx base image
FROM nginx

# Expose the port to elasticbeanstalk
EXPOSE 80

# Copy the static content from previous block to the new block
COPY --from=builder /app/build /usr/share/nginx/html