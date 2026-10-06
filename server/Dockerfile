FROM node:20-alpine

# Set working directory
WORKDIR /usr/src/app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Expose port (optional, as we map in compose)
EXPOSE 5000

# Start the application
CMD ["node", "index.js"]
