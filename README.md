# StudyMate

Door het groeiende aantal studenten en het gevolg van de COVID-19 maatregelen, moeten studenten al een lange tijd een plaats in de bibliotheek reserveren om er te kunnen studeren. Jammer genoeg zijn er minimale plaatsen aanwezig waardoor niet iedereen de mogelijkheid heeft om in een sociale context te studeren. 
Vanuit deze problematiek ontstaan er nieuwe alternatieve blokspots waar studenten samentroepen om te kunnen studeren. Dit zijn vaak simpele ruimtes, met voorbeeld Chiro lokalen, garages, … .Ondanks de innovatieve oplossingen blijft het tekort aan studieplekken groot. 

Door de opkomst van COVID-19 besloten studenten het heft in eigen handen te nemen en ontstond er een alternatieve versie op de studieplaatsen in die fysieke bibliotheek, namelijk de online oplossing. Studenten begonnen samen op het online platform Discord te studeren. Dit telkens met hun camera aan, maar hun microfoon uit. Op deze manier konden studenten de invloed van sociale cohesie simpelweg ervaren vanuit hun eigen kamer. 

Hieruit ontstond mijn idee om, aansluitend op het innovatieve idee van een online bibliotheek, een webapplicatie te maken. Deze doelgericht ontwikkelde applicatie zou meer overzicht & minder afleiding bieden dan een server in Discord.

## URL
De site kan je vinden op onderstaande URL:
www.studymate.be
## Lokaal draaien

Clone het project

```bash
  git clone https://github.com/Andries-DB/Studymate.git
```

Ga naar de root folder van het project

```bash
  cd Studymate
```

Installeer dependencies

```bash
  npm install
  composer install
```

Start de server

```bash
  npm run dev
  php artisan serve
```


## Features

- Het aanmaken van projecten en taken: Dit zorgt ervoor dat een student een simpel en makkelijk te gebruiken overzicht heeft over aankomende deadlines.
- Berichten sturen: Spreek af met vrienden waar en wanneer je gaat studeren. Stuur ze een berichtje en wacht tot ze antwoorden!
- Studeerkamers: Ga studeren in publieke studeerkamers en studeer samen in groep! Wil je liever studeren met vrienden? Maak een private studeerkamer aan en nodig ze uit!
- Verschillende talen: De webapplicatie is beschikbaar in het Engels & Nederlands!
- Responsive: Geen laptop bij de hand? Geen probleem, Open de site op je GSM en studeer zonder enig probleem!


## Schaalbaarheid

Omdat de webapplicatie op dit moment amper of geen gebruikers heeft heb ik de applicatie schaalbaar gehouden. Dit wil zeggen naarmate dat er meer en meer gebruikers komen, dat er nog meer features bij kunnen komen.

- Het toevoegen van vrienden: Dit was nu al aanwezig maar je haalde er geen voordelen uit, daarom heb ik het eruit gelaten. Je was gewoon vrienden of niet. Dit zou nog geïmplementeerd kunnen worden. Moest je een studeerkamer aanmaken zou je eerst kunnen selecteren uit je vrienden en dan alle andere gebruikers.1

- Alleen studeren: De webapplicatie is vooral bedoeld om samen te studeren. Uit mijn onderzoek blijk dat er nog veel studenten zijn die liever alleen studeren. Dit kan geïmplementeerd worden volgens een soort van pomodoro techniek. Je ziet een timer tijdens het studeren en kan eventueel nog een video kiezen die in de achtergrond afspeelt.

- Kalender: Er is nu geen mogelijkheid om een project te maken die tegen een bepaalde datum af moet zijn. Hier zou een kalender handig van pas komen. Zo is er een extra overzicht voor de projecten en taken.

## Geleerde Lessen

Allereerst heb ik het front-end framework Vue gebruikt. Ik heb geleerd hoe dit framework gebruikt wordt en hoe het moet geïmplementeerd worden met Laravel. Dit is mede dankzij Inertia gedaan. Naast dat ik Vue heb geleerd en Laravel beter heb leren verstaan en efficiënter heb leren gebruiken heb ik nog veel bijgeleerd. Ik heb veel bijgeleerd over Agora en hoe je dit moet gebruiken. Dit was een heuse zoektocht die goed is afgelopen. 

In het algemeen ben ik door de bachelorproef beter geworden in het coderen. Ook het ontdekken van andere frameworks, SDK's, externe bibliotheken, ... gaat beter en beter. Ik kan met trots zeggen dat het mij is gelukt om een volledig product af te leveren waarbij ik een groot deel mezelf dingen heb moeten aanleren.
## Auteur

- [@AndriesDB](https://www.github.com/Andries-DB)
