# Set up the project

## Clone the project

Clone this project in your workspace or in your production environment:

```
cd /yourworkspace
git clone https://github.com/iomentum/auth-boilerplate.git
cd ./auth-boilerplate
```

## Install dependencies

The following commands will create a `node_modules` folder.

### Front-end

Place yourself in the frontend directory and install dependencies:

```
cd ./frontend
npm i
```

### Back-end

Go back in the auth-boilerplate project then in the backend directory and install dependencies:

```
cd ../backend
npm i
```

## Run migrations

Migrations allows us to create the table.
Make sure to have docker installed and running to set up the mysql database.

Run the migrations in the backend directory while mysql is running:

```
docker-compose up
npm run migrate
```

( To undo migrations, type: `npm run migrate:undo` )

## Run seeders

Seeders allows us to create default datas in the table.

```
The super Admin user is created during the seed.

email: sa@iomentum.com
password: admin
```

Run the seeders in the backend directory while mysql is running and migrations are done:

```
npm run seed
```

( To undo seeders, type: `npm run seed:undo` )

# Start the project

Run the backend side of the project from the backend directory:

```
docker-compose up
npm start
```

Run the frontend side of the project from the frontend directory:

```
cd ../frontend
npm start
```
