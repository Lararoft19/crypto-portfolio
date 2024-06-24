# Use the official Node.js image.
FROM node:14

# Create and change to the app directory.
WORKDIR /usr/src/app

# Copy application dependency manifests to the container image.
COPY package*.json ./

# Install dependencies.
RUN npm install

# Copy the local code to the container image.
COPY . .

# Build the application
RUN npm run build

# Start the application.
CMD ["npx", "serve", "-s", "build"]

# Expose the port the app runs on
EXPOSE 5000
