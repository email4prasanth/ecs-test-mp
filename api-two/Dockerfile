# Step 1: Use an official Node.js image as a base
FROM node:16-alpine

# Step 2: Set the working directory inside the container
WORKDIR /usr/src/app/api-two

# Step 3: Copy the package.json and package-lock.json (check if is exist)
COPY package*.json ./
COPY index.js ./


# Step 4: Install dependencies
RUN npm install -g serverless@3
RUN npm install moment nodemon express

# Step 5: Copy the rest of your application code to the container
COPY . .

# Step 6: Expose the port your app runs on (change if needed)
EXPOSE 9090

# Step 7: Command to run the app (make sure the start script is in your package.json)
CMD [ "node", "index.js" ]
#run it


