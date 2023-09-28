# Use Node.js version 20 on Alpine Linux 3.17 as the base image
FROM node:20-alpine3.17

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (if present)
COPY package.json .

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port your application listens on (assuming it's port 4000)
EXPOSE 4000

# Define the command to run your application in development mode
CMD ["npm", "run", "dev"]
