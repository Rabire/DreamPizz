# Installer le projet

Copier le projet :

```
cd/votreespacedetravail
git clone https://github.com/Rabire/DreamPizz.git
```

# Installer les dependances

Installer les nodes.modules :

```
cd ./frontend
npm i
```

# Lancer le projet

Frontend :

```
cd/frontend
npm start
```

Backend :

```
cd/backend
docker-compose up
npm start
```

## Back-end

Installer les dependances:

```
cd ../backend
npm i
```

## Lancer les migrations

Installer Docker :

Lancer les migrations dans le backend tout en ayant lancer mysql:

```
docker-compose up
npm run migrate
```

(Pour enlever les migrations: `npm run migrate:undo`)

## Lancer les seeders

Lancer les seeders en ayant lancer MySql:

```
npm run seed
```

(Pour enlever les seeders: `npm run seed:undo`)
