# Use Node.js version >= 20.0.0
FROM node:20-slim

# Set working directory
WORKDIR /app

# Copy the frontend files
COPY . .

# Install dependencies using Yarn
RUN yarn install

# Build the frontend
RUN yarn build

# Expose the port the app will run on
EXPOSE 3000

# Command to run the app
CMD ["yarn", "start"]
