# ChefUp

A cooking app to match people who want to learn new home cooking styles, by finding a local chef to teach them how to cook authentic home made meals.

<img src="https://i.imgur.com/QICZA8U.png" width="500">

---

## Contents

- [Team](#team)
- [Installation](#installation)
- [Goals](#goals)
- [User Journey](#user-journey)
- [Design week](#design-week)
- [User research](#user-research)
- [First Build Sprint](#first-build-sprint)
- [Second Build Sprint](#second-build-sprint)
- [Stretch Goals](#stretch-goals)
- [Things we've learnt](#things-we-learnt)
- [Tech Stack](#tech-stack)

---

### Team

Scrum Master - [Nikke](https://github.com/nikkesan) \
DevOps - [Pat](https://github.com/pat-cki) \
QA - [Maria](https://github.com/marialani) \
UX Lead - [Alex](https://github.com/AlexandraOM)

---

### Installation

1. Clone repo `git@github.com:fac18/chefup_app.git`
2. Install dependencies ```npm i```
3. Set up `.env` file in the root directory.  Please request `REACT_APP_TOKEN` token from any team member listed above.
4. Start server with `npm start`.  This should load to `http://localhost:3000`
5. To check tests, run `npm test`

---

### Goals

- Learn to cook
- Share cultural recipes 
- Eat healthier
- Save money
- Build community

---

### User Journey

#### Initial brainstorming

As a team we brainstormed what we envisioned the user journey would be - both as a student AND a teacher (local chef) using the app

<img src="https://i.imgur.com/aT6xbP9.jpg" width="500">

---

### Design Week

#### Mood board

[Click here for Figma Mood Board link](https://www.figma.com/file/6vYWzMYMMSOeIv9CrzRpS3/Prototyping-in-Figma?node-id=0%3A1)

We drew inspiration from apps that we've used and collated them together onto a mood board

<img src="https://i.imgur.com/GrEJpTw.jpg" width="500">

#### Rapid prototyping

<img src="https://i.imgur.com/WPhLMTU.jpg" width="500">

#### Crazy 8's

Each member had a quick 2min per frame to sketch out ideas of our app interface.  Here is one example:

<img src="https://i.imgur.com/W0cEpw6.jpg" width="500">

#### Merging team designs

As a team we picked the best elements of all our designs

<img src="https://i.imgur.com/RySmJxP.jpg" width="500">

---

### Building in Figma

[Click here for Figma Prototype link](https://www.figma.com/file/G2FduaeR6RYVzO6CPon4xU/Chef-Up?node-id=0%3A1)

#### Fixed components

These are componenets designed to be re-used throughout the app

<img src="https://i.imgur.com/PFlLUfJ.png" width="200"><img src="https://i.imgur.com/JbBEuu3.png" width="500">

#### User journey sketching 

Designing mobile first for our user journey

<img src="https://i.imgur.com/ow6CbYb.jpg" width="500">

#### Connected Prototypes

Connecting up our user journey sketches ready for testing

<img src="https://i.imgur.com/gTGRSsl.png" width="500">

---

### User Research

[Click here for AirTable full user research notes](https://airtable.com/tblIi5EMcQMdzs67M/viwdVxb4SMTv5Jahy?blocks=hide) 

#### Summary of our findings

- Friends and Family -> The internet to learn something new
- Cooking preferences are based on friends and family (as well as impressing them)
- Prefer home cooked food
  - Eating out/Takeaways are usually due to time restrictions, ease or as a treat
- Most have general -> specific dietary goals

#### Potential problems and ongoing concerns

- lack of trust
- lack of skills and time
- how to guide teachers to deliver good service
- willingness to meet strangers
- Privacy issues: will be my email/address visible to other users? 
- What is the app about??? (recipes, cooking lessons, deliveroo)
- Trust issues - is it safe to invite someone to my home?
- What do I really pay for? 

#### User Stories

[Click here for AirTable User Stories](https://airtable.com/tblBbG7unqX5K1Uat/viwTMheFWsOCwQAqI?blocks=hide)

User stories are also broken down into build sprints as below, including point Estimates vs Actuals for each sprint: 


### First Build Sprint

We prioritised our user stories into two sprints in order to achieve a MVP.  Our first sprint comprised of: 

| No. | User stories  | Estimates     | Value | Actuals       | Value |
| :-------------: | ------------- |-------------| :----:|-------------| :----:|
| 1 | I want to arrive at home page and clearly understand what Chef Up is | ⭐️ | 1 | ⭐️⭐️ | 2 |
| 4 | I can see a search bar on the home screen  | ⭐️ |    1 | ⭐️ | 1 |
| 5 | I can see cooking lessons on the home screen  | ⭐️⭐️ |    2 | ⭐️⭐️⭐️ | 3 |
| 2 | I want to be able to have access to more information about the app and its community if I want to | ⭐️⭐️ | 2 |  | - |
| 14 | My cooking lesson is searchable | ⭐️⭐️⭐️ | 3 |  | - |
| 22 | I want to type in the search bar and see in real time the results being updated | ⭐️⭐️⭐️ | 3 |  | - |
| 10 | I can book a cooking lesson | ⭐️⭐️⭐️ |    3 |  | - |
| 6 | I can select a cooking lesson and see more info | ⭐️⭐️⭐️⭐️⭐️ | 5 | ⭐️⭐️⭐️⭐️ | 4 |
|   | **TOTAL**  |   | **20** |  | **10** |


---

### Second Build Sprint

Our second build sprint is more aimed at post requests to our database and authentication:

| No. | User stories  | Estimates     | Value | Actuals       | Value |
| :-------------: | ------------- |-------------| :----:|-------------| :----:|
| 3 | I want to be able to skip the introduction to this app (if I am not new) | ⭐️⭐️ | 2 |  | - |
| 13 | I can create my own cooking lesson  | ⭐️⭐️⭐️ | 3 |  | - |
| 16 | I want to know that my information is secure | ⭐️⭐️⭐️ | 3 |  | - |
| 15 | As a local chef, my new cooking lesson is bookable | ⭐️⭐️⭐️ | 3 |  | - |
| 7 | I have to log in and create my own profile if I want to book a lesson | ⭐️⭐️⭐️⭐️⭐️ | 5 |  | - |
| 9 | I can create my own profile  | ⭐️⭐️⭐️⭐️⭐️ |    5 |  | - |
| 8 | I can log in  | ⭐️⭐️⭐️⭐️⭐️ |    5 |  | - |
| 11 | I can log out | ⭐️⭐️⭐️⭐️⭐️ |    5 |  | - |
| 12 | I want to create an account and become a local chef | ⭐️⭐️⭐️⭐️⭐️ |    5 |  | - |
|   | **TOTAL** |  | **36** |  | **0** |

---

### Stretch Goals

| No. | User stories  | Estimates     | Value | Actuals       | Value |
| :-------------: | ------------- |-------------| :----:|-------------| :----:|
| 17 | I want to see lots of profile information to secure my confidence in booking/teaching | ⭐️⭐️⭐️⭐️ | 4 |  | - |
| 18 | I want to filter my searches by cuisine, location, dietary requirements, allergies | ⭐️⭐️⭐️⭐️⭐️ | 5 |  | - |
| 19 | I want to leave feedback on my local chefs and their recipes | ⭐️⭐️⭐️⭐️⭐️ | 5 |  | - |
| 20 | I want to keep track of the lessons I've booked | ⭐️⭐️⭐️⭐️⭐️ | 5 |  | - |
| 21 | I want to collect badges on my profile to show I am trustworthy  | ⭐️⭐️⭐️⭐️⭐️ | 5 |  | - |
|   | **TOTAL** |  | **24** |  | **0** |

---

### Things we've learnt

- wesbos esLint is not so easy to set up with create-react-app
- a getRequest from AirTable reads empty rows as null and receives undefined when making a getRequest
- .includes() is cAsE sEnsItiVe

---

### Tech Stack

- React
- Netlify
- AirTable
