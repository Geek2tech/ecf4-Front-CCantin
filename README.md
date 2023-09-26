# Site Photographe Charles Cantin

Site réalisé dans le cadre d'une évaluation d'entrainement.

Sujet : 

**Charles Cantin**, une personne de votre entourage, est passionné par la photographie.
Même s’il pratique en amateur, son talent est reconnu et beaucoup font appel à lui pour immortaliser
leurs événements.
Pour passer à la vitesse supérieure et peut-être vivre de cette activité, il désire pouvoir se construire un
portfolio sous la forme d’un site web. Et comme il a appris que vous étiez actuellement en formation pour
devenir développeur, il fait appel à vous.


## Technologies utilisées 

### Front End : 
* VueJS 3
* BootStrap 5

### Back End :
 * Strapi V 4.17
 * Actuellement configuré pour une base de donnée MariaDB

Strapi contient et permet la gestion du contenu. Le front demande les informations via des requêtes API ( via Axios )

## Mode d'emploi

Un document PDF est présent sur le repo dans Notice expliquant comment rajouter ou modifier du contenu (photos et prestations)

## Installation en local pour développements et tests

### pré-requis 

* disposer d'un serveur MariaDB ( ou Mysql )

 Une fois le repos cloné , ce rendre dans le dossier cmscantin .

### Back End
 * se rendre dans le dossier BackEnd ( cd BackEnd )
 * lancer npm install pour l'installation des dépendances
 * Importer la base de donnée présente dans le dossier BDD sur votre base MariaDB
 * créer un .env à la racine en copien .env.example et en remplacant les données par les bonnes valeurs ( exemple
   DATABASE_HOST=IP DE VOTRE SERVEUR par DATABASE_HOST=127.0.0.1 )

**Pour lancer Strapi en mode développement : npm run develop (cela permet l'accès au content builder)**
**Pour Lancer Strapi en mode production : npm run start ( cela bloque le content builder )**

### Front End
 * se rendre dans le dossier FrontEnd
 * lancer npm install pour l'installation des dépendances
 * crée un fichier .env.developement.local en copiant .env.example et en modifiant la variable VUE_APP_STRAPI_URL par http://localhost:1337 ( à adapter si nécessaire)

**Pour Lancer le serveur : rpm run serve**


# Site de démonstration 

## partie administration du contenu

Adresse de la page d'administration de Strapi : http://admincc.geek2tech.fr/admin
login : geek2tech@geek2tech.fr
password : StrapiCC1

## Front

Adresse : http://cmscc.geek2tech.fr
