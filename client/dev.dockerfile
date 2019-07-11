# client/Dockerfile-dev

# This is the build file for the client module,
# Docker will use this to setup the client container image.

# Installs the node image
FROM node

# Creates the client directory in the container
RUN mkdir -p /app/client
# Sets the working directory to the client directory
WORKDIR /app/client

# Copies the yarn.lock file to the container
COPY yarn.lock /app/client/
# Copies the package.json to the container
COPY package*.json /app/client/

# Installs the client dependencies
RUN yarn install

# Copies the files from the client directory to the container
COPY . /app/client/

# Runs the client
CMD ["yarn", "start"]