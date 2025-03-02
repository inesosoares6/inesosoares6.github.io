export const websites = [
  {
    name: "TL Nutrition",
    image: "nutri.png",
    link: "https://www.teresalemosnutricao.pt/",
    icons: ["vuejs", "vuetifyjs", "firebase"],
  },
  {
    name: "Invictus Clinic",
    image: "invictus.png",
    link: "https://www.invictusclinic.pt/",
    icons: ["vuejs", "vuetifyjs"],
  },
];

export const apps = [
  {
    name: "Book Library",
    image: "library.png",
    id: "libraryModalContent",
    page: "appModalTemplate",
    icons: ["vuejs", "vuetifyjs", "firebase"],
  },
  {
    name: "Shopping List",
    image: "shopping.png",
    id: "shoppingModalContent",
    page: "appModalTemplate",
    icons: ["vuejs", "quasar", "firebase"],
  },
  {
    name: "Workouts App",
    image: "workout.png",
    id: "workoutsModalContent",
    page: "appModalTemplate",
    icons: ["vuejs", "vuetifyjs"],
  },
  {
    name: "Bucket List App",
    image: "travel.png",
    id: "bucketListModalContent",
    page: "appModalTemplate",
    icons: ["kotlin"],
  },
  {
    name: "Progr(Ch)ess",
    image: "chess.png",
    id: "chessModalContent",
    page: "appModalTemplate",
    icons: ["unity", "cardboard"],
  },
  {
    name: "Electric Charging",
    image: "electric.png",
    id: "electricModalContent",
    page: "appModalTemplate",
    icons: ["kotlin", "firebase"],
  },
];

export const modals = {
  libraryModalContent: {
    title: "Book Library",
    appIcon: "library",
    icons: ["vuejs", "vuetifyjs", "firebase"],
    content:
      "Me and my father are passionate about reading and sometimes our tastes in books collide. To avoid buying books that we already had at home, I decided to create a mobile app to store our books and distinguish to which library they belong (mine or my father's). So, now we can save the money we would waste on duplicated books and buy new ones.",
    requirements: [
      "Create a database for the home library;",
      "Have a way to quickly add books: scan the ISBN bar code and automatically retrieve the book data;",
      "Have a fallback plan when the API does not find the book data: manually insert the data;",
      "Have a fallback plan when the camera is not able to read the barcode: manually insert the ISBN code;",
      "Add filters to easily search for books within the app;",
      "Possibility to have multiple libraries.",
    ],
    technologies: [
      "Frameworks: VueJS and Vuetify",
      "State Management: Pinia",
      "Database: Google Firebase (Realtime Database)",
    ],
    link: "./assets/videos/bookLibrary.mp4",
    repo: "https://github.com/inesosoares6/book-library",
  },
  shoppingModalContent: {
    title: "Shopping List",
    appIcon: "shopping",
    icons: ["vuejs", "quasar", "firebase"],
    content:
      "This app was created to solve an existing problem in my home. So, before this app, we had a paper in our house where we would write the things to buy at the supermarket. But the problem was that most of the time we would forget the paper at home, or we wanted to add something and we were not home. To solve all those problems, my parents asked me to create an app that would be our shopping list and it was shared by all of us in real time.",
    requirements: [
      "Shared shopping list (each member would have an account);",
      "To have a catalog to store the products;",
      "Ability to add, remove, or update items on the list;",
      "To have a list of favorite products that could be easily added (for example, products that we need to buy weekly);",
      "Ability to create multiple lists;",
      "Ability to filter products when searching.",
    ],
    technologies: [
      "Frameworks: VueJS and Quasar",
      "State Management: Pinia",
      "Database: Google Firebase (Authentication and Realtime Database)",
    ],
    link: "./assets/videos/shoppingList.mp4",
    repo: "https://github.com/inesosoares6/shopping-list-v2",
  },
  workoutsModalContent: {
    title: "Workouts App",
    appIcon: "workouts",
    icons: ["vuejs", "quasar"],
    content:
      "The idea of developing this app solved a specific issue: the assistant coach of my volleyball team used to give us warmup exercises with several papers in his hand. So, offering him an app to store the warmup exercises at the Secret Santa gift exchange would be a good idea. From that time, the app requirements increased and the app developed from just a place to store warmups to a complete gym assistant.",
    requirements: [
      "Store gym workouts without internet usage;",
      "Generate random workouts;",
      "Share workout plans;",
      "Implement timer and Tabata timer;",
      "Record the user evolution in gym exercises and health (weight, body fat and muscle);",
      "Define and store objectives;",
      "Show to the user some statistics of the workouts made.",
    ],
    technologies: [
      "Frameworks: VueJS and Vuetify",
      "State Management: Pinia",
      "Database: localStorage",
    ],
    link: "./assets/videos/workoutsApp.mp4",
    repo: "https://github.com/inesosoares6/workouts-app",
  },
  bucketListModalContent: {
    title: "Bucket List App",
    appIcon: "travel",
    icons: ["kotlin"],
    content:
      "I love to travel and explore the world. So, when I started to learn web development, an app to combine my passion for travel and the skills that I was learning was the most logical option. I wanted to, not only, create something that would motivate me to plan new trips, but also to have a place where I could revisit my past trips and remember beautiful moments. This is why the Bucket List App came into existence! It's basically an app to travel the world with just your phone.",
    requirements: [
      "To have a todo list of the places that I want to travel to with images;",
      "To have a list of the places I've been to with photos;",
      "To have a text editor to store places that I want to go;",
      "To have a personal page with some statistics of the places I've been and some photos of my favorite trips;",
      "To have a map with pins of the places I've been and want to go.",
    ],
    technologies: ["Programming Language: Kotlin"],
    link: "./assets/videos/bucketlistApp.mp4",
    repo: "https://github.com/inesosoares6/app_BucketList",
  },
  chessModalContent: {
    title: "Progr(Ch)ess",
    appIcon: "chess",
    icons: ["unity", "cardboard"],
    content:
      "Progr(Ch)ess is a program to promote success that, combining programming, robotics, and chess, explores countless benefits of the oldest board game, through attractive and innovative dynamics. Using a strong playful component, this project aims to contribute to the development of capacities associated with computational thinking and digital literacy, fostering transversal skills in the curriculum. The transferability of chess, programming, and robotics allows not only to reinforce the domain of computing but also other domains of learning (e.g., reading, writing, mathematics, expressions, etc.). Thus, it is important to make learning more and more meaningful and contextualized, challenging students to develop multidisciplinary competencies, and reinforcing confidence in their capabilities. The target audience for this project is elementary school students.",
    requirements: [
      "To develop a Virtual Reality application to integrate this project; for cost management, the application should be compatible with Google Cardboard.",
      "The application should be divided into 4 parts:<ul>  <li>Pieces Identification Game;</li>  <li>Pieces Movements Game;</li>  <li>Board & Pieces Setup Game;</li>  <li>King Attacks Game.</li></ul>",
      "Each game should have several levels for the students to first learn the rules and then increase their skills along the game.",
    ],
    technologies: ["Unity Game Engine and Google Cardboard"],
    repo: "https://github.com/inesosoares6/Progrchess",
  },
  electricModalContent: {
    title: "Electric Vehicle Charging Management System",
    appIcon: "electric",
    icons: ["kotlin", "firebase"],
    content:
      "This application was developed in the context of a college project where we needed to implement a system to manage electric vehicle charging. I was studying Electrical and Computer Engineering (automation and robotics), but interested in learning about web development. Therefore, I volunteered to develop the app for our project. This way, I could be responsible for a crucial part of the project and explore these new skills. Back then, I was far from knowing that web development would become my passion.",
    requirements: [
      "Ability to search electric charging parks;",
      "Have multiple ways to read the charger ID (text, NFC, and QR code);",
      "Ability to charge the vehicle in multiple ways (regular, fast, and green);",
      "Check the prices for the different charging methods;",
      "Receive the total price when the operation has finished;",
      "Possibility to add several vehicles to the app;",
      "Store the charging history.",
    ],
    technologies: [
      "Programming Language: Kotlin",
      "Database: Google Firebase (Authentication and Cloud Firestore)",
    ],
    link: "./assets/videos/seaiApp.gif",
    repo: "https://github.com/inesosoares6/app_SEAI-G",
  },
};
