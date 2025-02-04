# Use an official Node runtime as a parent image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if available) to leverage Docker cache for dependencies
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port your GraphQL Yoga server listens on (default: 4000)
EXPOSE 4000

# Define the command to run your app
CMD ["node", "server.js"]
