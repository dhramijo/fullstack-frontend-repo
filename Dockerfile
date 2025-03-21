# Use Node.js version >= 20.0.0
FROM node:20-slim

# Set working directory
WORKDIR /app

# Copy package.json and yarn.lock first to leverage Docker caching
COPY package.json yarn.lock ./

# Install dependencies using Yarn
RUN yarn install

# Copy the rest of the frontend files
COPY . .

# Build the frontend
RUN yarn build

# Expose the port the app will run on (Vite default port is 3000)
EXPOSE 3000

# Command to run the app in production mode (preview built files)
CMD ["yarn", "preview"]
