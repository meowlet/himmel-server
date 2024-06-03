# use node 20.14.0 alpine as base
FROM node:20.14.0-alpine

# Set local directory in docker
WORKDIR /himmel

# Copy package.json into docker workdir
COPY package.json ./

# Update npm to latest version
RUN npm install -g npm@latest

# Install dependencies
RUN bun install

# Copy src file to docker
COPY . .

# Expose docker to port 3212
EXPOSE 3212

# Set env port to 3212
ENV PORT 3212

# Set default hostname to 0.0.0.0 (accept all hosts)
ENV HOSTNAME "0.0.0.0"

# Start the app
CMD ["bun", "run" "./himmel-server/index.ts"]

