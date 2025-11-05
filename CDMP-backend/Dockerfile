# Use Node LTS
FROM node:18

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the code
COPY . .

# Expose the app port
EXPOSE 3000

# Default command (can be overridden by docker-compose.yml)
CMD ["npm", "start"]
