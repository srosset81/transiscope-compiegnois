# Transiscope en Pays Nantais

Pour accéder à l'outil et découvrir le projet : https://nantes.transiscope.org/

Cet outil est basé sur Archipelago (https://github.com/assemblee-virtuelle/archipelago)

## Lancer le logiciel localement

Copier le fichier `.env.local.example` et le renommer en `.env.local`
Vous aurez notamment à y mettre un token valide de Mapbox pour que les cartes puissent fonctionner correctement.

Lancer le projet avec

```
make build
make start-local
```

Stopper le projet avec
```
make stop
```

Les services suivants seront alors démarrés :
- Frontend on http://localhost:4000/
- Middleware on http://localhost:3000/
- Fuseki database on http://localhost:3030 (user: admin, password : admin)

## Lancer le projet pour développer

Utiliser `make start-dev` à la place de `make start-local`.

Il est possible de démarrer et de stopper les services un à un avec les commandes suivantes :
- make start-frontend / make start-frontend-dev / make stop-frontend
- make start-middleware / make start-middleware-dev / make stop-middleware
- make start-db / make stop-db

## Publier une nouvelle version

Pour publier une nouvelle version, il faut utiliser les commandes suivantes :

```
make publish-frontend
make publish-middleware
```

Une version vous sera demandée lors de la publication. Merci de respecter le format semver (https://semver.org/).

## Déployer l'outil en production

Copier le fichier `.env.prod.example` et le renommer en `.env.prod`

Remplacer les variables FRONTEND_VERSION et MIDDLEWARE_VERSION par les versions voulues (par défaut, la dernière image publiée sera prise en compte si la valeur est vide)

Remplacer le mot de passe de la base de données.

Lancer la commande suivante :
```
make start-prod
```

Il est nécessaire de mettre en place une tâche régulière de compactage de la base de données, pour cela il faut exécuter la commandes suivantes :

```
make set-compact-cron
```

Il est aussi possible de le faire manuellement avec `make compact-prod`.

## Mettre à jour l'outil en production

Modifier le fichier .env.prod avec les nouveaux numéros de version, puis lancer la commande suivante
```
make update-prod
```
