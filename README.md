# DoodleFront

Projet universitaire répliquant le fonctionnement de doodle, le célèbre site de sondages en ligne.
Ce projet se base sur un frontend Angular 7 et d'un backend Java 8.

## Frontend

Angular 7 permet d'avoir une Single Page Application bien structurée plutôt simplement.
Le frontend appelle l'api REST mis en place par le backend décrit plus bas.

Avec les données récupérées,
on construit et alimente les divers tableaux présentés aux utilisateurs.

Angular Material a été ajouté au projet afin d'avoir une interface moderne et user-friendly.

## Backend

Le frontend appelle l'api REST du backend afin de récupérer des informations.
Le backend ce situe dans ce [repo](https://github.com/mathieulehan/TP_SIR).

## Fonctionnalités

Via le menu qui se dévoile à gauche de l'interface, on peut :
- voir les employés existants
- obtenir le nombre d'employés existants
- à partir de son id, récupérer les informations concernant l'employé
- voir les sondages existants
- voir les sondages en fonction de leur type
- compter les sondages
- compter les sondages de chaque type
- voir un sondage à partir de son id
- supprimer un sondage à partir de son id
- créer un département
- créer un employé
- créer des sondages (sauf ceux de types nombre de choix variables)

Les différents tableaux affichables sont dotés de pagination,
permettent de trier les résultats affichés en fonction d'une entrée utilisateur, 
et enfin permettent de trier les colonnes (ascendant / descendant)
