# IntraVerse — L'intranet scolaire

> Projet de refonte d'un intranet pédagogique, réalisé par deux étudiants de Bachelor 3 de **La Plateforme_ Marseille**, issus des parcours Développement web et Logiciel.

**Statut :** en cours de conception et de développement  
**Équipe :** Jean-Christophe GERACE et Loriana DIANO

## Présentation

**IntraVerse** a pour objectif de concevoir une alternative moderne, ergonomique et fiable à l'intranet scolaire existant. La plateforme doit centraliser les informations pédagogiques et simplifier les échanges entre étudiants, formateurs et administrateurs.

Le projet est réalisé *from scratch*, avec une attention particulière portée à la qualité de l'architecture, à l'accessibilité des interfaces, à la sécurité et à la traçabilité des opérations.

## Objectifs

- Proposer une interface responsive et intuitive.
- Centraliser le suivi des projets, rendus et évaluations.
- Faciliter la gestion des promotions et des groupes.
- Mettre à disposition des outils de suivi pédagogique et d'assiduité.
- Sécuriser les accès selon les rôles et les permissions.
- Concevoir une API documentée et un système de journalisation structuré.

## Profils utilisateurs et fonctionnalités prévues

### Étudiant

- Consulter son tableau de bord, ses projets et leurs échéances.
- Déposer des rendus (liens GitHub, fichiers et commentaires).
- Consulter ses évaluations et les compétences validées.
- Créer des tickets d'assistance.

### Formateur

- Créer et modifier des briefs de projets.
- Suivre les rendus des étudiants par promotion.
- Évaluer les travaux et valider les compétences.
- Consulter les informations d'assiduité et de présence.
- Répondre aux tickets et assurer le suivi pédagogique.

### Administrateur / Staff

- Gérer les promotions et les années scolaires.
- Affecter les étudiants et les formateurs aux promotions.
- Superviser la plateforme et consulter les journaux système.

**Fonctionnalités complémentaires étudiées :** calendrier pédagogique, gestion des groupes, statistiques et notifications. Leur périmètre définitif sera précisé dans le cahier des charges.

## Technologies et contraintes

| Domaine | Technologies / principes |
| --- | --- |
| Frontend | HTML5 sémantique, TypeScript |
| Styles | CSS et framework utilitaire maison (mini-Tailwind) |
| Backend | Node.js natif avec TypeScript **ou** Java Spring Boot, selon le choix de l'équipe |
| Persistance | PostgreSQL |
| API | REST, échanges JSON |
| Conception | Merise (MCD, MLD, MPD), UML |
| Maquettage | Figma |
| Versionnement | Git et GitHub |

**Contraintes pédagogiques :** pas de framework frontend comme React ou Vue, pas d'Express ni de NestJS avec l'option Node.js natif, et pas d'IA génératrice de code. Le framework CSS utilitaire doit être conçu par l'équipe, sans Node CLI ni PostCSS.

> Le choix définitif du backend, les dépendances et les commandes d'exécution seront documentés après validation de l'architecture.

## Conception et documentation

La phase de conception comprend :

- Un cahier des charges fonctionnel et une matrice des permissions.
- Des user stories, cas d'utilisation et parcours utilisateurs.
- La modélisation de la base de données : MCD, MLD et MPD.
- Des diagrammes UML (cas d'utilisation, classes, séquences).
- Des wireframes et maquettes responsive sur Figma.
- Un design system avec palette, typographie, espacements et composants.
- Un contrat d'API REST et une stratégie de gestion des erreurs.
- Une stratégie de journalisation structurée des événements serveur.

**Maquette Figma :** [Consulter le travail de maquettage](https://www.figma.com/design/IalIh1p4q5itmWyLPRXVHY/Maquette?node-id=0-1&m=dev)

## Sécurité, erreurs et journalisation

La plateforme devra notamment prévoir :

- Une authentification et un contrôle d'accès selon les rôles.
- La validation des données reçues par l'API.
- Des réponses HTTP cohérentes (`200`, `201`, `204`, `400`, `401`, `403`, `404`, `409`, `500`).
- Des messages d'erreur compréhensibles, sans divulgation de données sensibles.
- Des logs structurés comprenant notamment la date, le niveau, l'identifiant de requête, la méthode, l'URL, le statut HTTP, la durée et, lorsque disponible, l'identifiant utilisateur.

## Avancement

| Étape | Statut |
| --- | --- |
| Analyse des besoins et des rôles | En cours |
| MCD et MLD | Travaux de conception réalisés, à valider |
| Cahier des charges et user stories | En cours |
| Maquettes Figma | Premiers écrans réalisés |
| MPD et script SQL | À finaliser |
| Développement frontend et backend | À documenter |
| Tests et déploiement | À documenter |

Ces statuts seront mis à jour au fil du projet.

## Installation et lancement

Les instructions d'installation seront ajoutées lorsque la structure technique et les scripts de démarrage auront été définis.

## Équipe

Projet réalisé en binôme :

- **Jean-Christophe GERACE** — Bachelor 3 Logiciel (**B3 Log**) ; conception et développement.
- **Loriana DIANO** — Bachelor 3 Développement web (**B3 Web**) ; conception et développement.

**Établissement :** La Plateforme_ Marseille  
**Année :** 2026–2027

## Cadre du projet

Projet pédagogique réalisé dans le cadre de la formation à **La Plateforme_**. Le périmètre et les contraintes techniques sont définis dans les documents *IntraVerse — Introduction* et *IntraVerse — Étape 1 : Conception, CDC & Design System*.
