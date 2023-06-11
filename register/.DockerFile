# Dockerize the auth microservice container
FROM  node:latest

# Create app directory
WORKDIR /promptify

# copy package.json and package-lock.json
COPY package*.json ./

# copy source code
COPY . .

# install dependencies build the microservice container
RUN npm install
RUN npm run build

# expose port 5000
EXPOSE 5000

# start the microservice container
CMD [ "npm", "start" ]