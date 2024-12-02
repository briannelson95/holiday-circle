# Use the official Node.js image as a base
FROM node:18-alpine AS base

# Set the working directory
WORKDIR /app

# Copy package.json and bun.lockb (or package-lock.json) to the working directory
COPY package.json bun.lockb* ./

# Install dependencies with bun (or npm if using npm)
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Next.js app
RUN npm run build

# Use a lightweight web server for the final image
FROM node:18-alpine AS production
WORKDIR /app

# Copy build output and necessary files from the build stage
COPY --from=base /app ./

# Expose port 3000
EXPOSE 3000

# Start the Next.js app in production mode
CMD ["npm", "run", "start"]
