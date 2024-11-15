import jsDetailing from "../assets/img/jsMobileDetailing.png";
import tennis from "../assets/img/tennisHomePage.png";
import choreQuest from "../assets/img/ChoreQuestSplashPage2.jpg"
import urls  from "./Urls";

let Project = [
          {
            id: 0,
            name: " J's Mobile Detailing",
            image: jsDetailing,
            imageLocation:"jPhoto.PNG",
            imageForDetails: "https://images.pexels.com/photos/7154618/pexels-photo-7154618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            description: "Get detailing services for your car at your finger tips.",
            stack: "React, HTML, CSS, React Hooks",
            project: urls.jsMobileDeatiling,
            code: urls.jsMobileDeatilingGithub,
            video: null,
            type: "web",
            goal: "I wanted a white-label application that could highlight the features of a mobile detailing business. Specifically, I wanted to show customers the services that are rendered and provide examples. Additionally, I wanted the site to have links to the business's Yelp, Instagram, and/or Facebook page.",
            problem:"I noticed that other detailing websites worked, but were outdated. Some sites were not mobile-friendly or had broken links. I wanted to produce a site that was sleek and functional.",
            approach: "I focused on making the site mobile-friendly, as I thought that most customers would look up a mobile service using their phones. To ensure that the site was mobile-friendly, I checked its responsiveness by changing the screen size using the DevTools. Additionally, I used Bootstrap to make the site dynamic."
          },
          {
            id: 1,
            name: "Topsin Maxed",
            image: tennis,
            imageForDetails: "https://images.pexels.com/photos/207361/pexels-photo-207361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            description:
              "Enable tennis players to keep track of important stats such as matches won, lost, hours played, etc.",
            stack: "React, Typescript, Tailwind, React Hooks, Supabase",
            project: urls.topspinMaxed,
            code: urls.topspinMaxedGithub,
            video:
              null,
            type: "mobile",
            goal: "I wanted an application that could keep track of macthes won/lost, host tournments, show what gear a player has, and find local tennis players.",
            problem:"I wanted to make a mobile app using React Native. I was able to get something together using React Native and Expo. However, I had no clue how I could push my app into the Apple or Google store.",
            approach: "I got some advice from a senior I worked with. He suggested I should focus on making a mobile-first website instead of an app. I switched my focus to building out the website using React and AWS."
          },
          {
            id: 2,
            name: "Chore-Quest",
            image: choreQuest,
            description:
              "Make chores fun by turning them into interactive quest for children",
            stack: "React Native, Typescript, Tailwind, Supabase, SQL",
            // project: urls.topspinMaxed,
            // code: urls.topspinMaxedGithub,
            video:
              null,
            type: "mobile",
            goal: "I hope to make chores fun for kids. Chores build essential life skills for children. This also helps parents manage chores around thier house and assign them to thier children.",
            // problem:"I wanted to make a mobile app using React Native. I was able to get something together using React Native and Expo. However, I had no clue how I could push my app into the Apple or Google store.",
            // approach: "I got some advice from a senior I worked with. He suggested I should focus on making a mobile-first website instead of an app. I switched my focus to building out the website using React and AWS."
          },

]

export default Project;