To run application

1. clone repository onto your machine with `git clone https://github.com/GenerateNU/compound.git`
2. run `npm install` at <some path>/compound to install dependencies
3. create and run docker postgis container on port 3001 with POSTGRES_PASSWORD=password (make sure to shut down any existing containers)
4. add database to VSCode postgres extension (host: localhost, username: postgres, password: password) (may also need to set port to 3001 if you don't see our db)
5. run `npx prisma migrate dev --name init` at <some path>/compound to initialize the database
6. run `npm run dev` at <some path>/compound