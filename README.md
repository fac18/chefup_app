# ChefUp
A cooking app to match people who want to learn new home cooking styles in their own home, by finding a local chef to teach them how to cook authentic home made meals.

<img src="https://i.imgur.com/QICZA8U.png" width="400">
<img src="" width="400">

## Useful links:
- [ChefUp App](https://chefup.netlify.com/)
- [Figma](https://www.figma.com/file/G2FduaeR6RYVzO6CPon4xU/Chef-Up?node-id=0%3A1)
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
4. Start server with `npm start`.  This should load to `localhost:3000`

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
<img src="https://i.imgur.com/aT6xbP9.jpg" width="400">

---

### Design Week

#### Rapid prototyping
<img src="https://i.imgur.com/WPhLMTU.jpg" width="400">

#### Crazy 8's
<img src="https://i.imgur.com/W0cEpw6.jpg" width="400">

#### Merging team designs
<img src="https://i.imgur.com/RySmJxP.jpg" width="400">

### Building in Figma

#### Fixed components
<img src="https://i.imgur.com/PFlLUfJ.png" width="200"><img src="https://i.imgur.com/JbBEuu3.png" width="400">

#### User journey sketching 
<img src="https://i.imgur.com/ow6CbYb.jpg" width="400">

#### Connected Prototypes
<img src="https://i.imgur.com/gTGRSsl.png" width="400">

---

### User Research

#### Our findings
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

#### User Journey overview
- As a user, I want to be able to search for and sign up for free cooking lessons stratified by location and type of food

#### Steps
- Be able to search for what is available in my area
- Be able to view the results in an intuitive way
- Be able to book a teacher to teach me how to cook 
- View guidance/guidelines as to how the process works, on demand
- Be able to view update/amend my details as well as my booking from my profile page
- Be able to leave reviews for teachers/lessons I have attended

---

### First Build Sprint

---

### Second Build Sprint

---

### Stretch Goals

---

### Things we've learnt
- wesBos esLint is not easy to set up with create-react-app
- a getRequest from AirTable reads empty rows as null and receives undefined when trying to request
- .includes() is case sensitive

---

### Tech Stack
- React
- Netlify
- AirTable














---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
