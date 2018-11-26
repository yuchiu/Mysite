export default [
  {
    id: "1",
    name: "Today News",
    imgUrl: {
      demoPic: "https://i.imgur.com/y2bUGMn.gif",
      archDiagram: "https://i.imgur.com/FBYB9vn.jpg"
    },
    clientTechStack: [
      "Reactjs",
      "React Native",
      "React-Redux",
      "React-Router",
      "Redux",
      "Redux-Thunk",
      "Reselect",
      "Axios",
      "SCSS"
    ],
    serverTechStack: [
      "Python",
      "Nodejs",
      "Expressjs",
      "RESTful API",
      "RPC API",
      "Message Broker",
      "RabbitMQ",
      "Redis",
      "ElasticSearch",
      "Mongoose",
      "MongoDB",
      "Web Scraper",
      "Machine Learning",
      "TensorFlow"
    ],
    introDesc: `Sed ut perspiciatis unde omnis ia dolor sit amet, consectetur, adipisci velit, sed quia non numquam.`,
    userStory: [
      "Users can register and log in with their accounts",
      "News are classified in different categories for users",
      "News are derived from multiple news sources",
      "Users can scroll to the bottom and get more news feeds",
      "Users can search for news article by keyword",
      "News are recommended to users based on his/her browsing histories"
    ],
    archDesc: `Under Construction
    Service Oriented Architecture, inter services communication, databases, Data Pipeline, Machine Learning
    `,

    techSpecDesc: `
    Under Construction
    Client
    Server
    Search
    Authentications
    Web Scraping
    NLP
    Machine Learning
    Optimization
    Deployment
    `,
    githubLink: "https://github.com/yuchiu/today-news",
    demoLink: "https://github.com/yuchiu/today-news"
  },
  {
    id: "2",
    name: "Slack Clone",
    imgUrl: {
      demoPic: "https://i.imgur.com/6FqTT5y.gif",
      archDiagram: "https://i.imgur.com/4k0g7dE.jpg"
    },
    clientTechStack: [
      "Reactjs",
      "React-Redux",
      "React-Router",
      "Redux",
      "Redux-Thunk",
      "Reselect",
      "Axios",
      "Jest",
      "SCSS",
      "Semantic-UI"
    ],
    serverTechStack: [
      "Nodejs",
      "TypeScript",
      "Expressjs",
      "RESTful API",
      "Socketio",
      "Redis",
      "Sequelize",
      "PostgreSQL",
      "Nginx",
      "Docker"
    ],
    introDesc:
      "t vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserun.",
    userStory: [
      "Users can register and log in with their account",
      "Users can edit his/her profile info, including profile image & password",
      "Users can create team",
      "Teams description can be edited only by admin",
      "Users can invite people to join their team",
      "Users can create channel inside his/her team",
      "Channels can be public or private for invited members only",
      "Channels description can be edited",
      "Users can create direct message or group message with other team members",
      "Users can send real time message within channels or direct message",
      "Users can share images, audio or text files to other users"
    ],
    archDesc: `
    Monolithic Architecture, n-layer architecture, throughput, database, load-balance, containerize
      `,
    techSpecDesc: `
    Under Construction
    Client:
    Styling:
    React and its ecosystem as SPA framework to create components based structure. 
    Utilize Redux for data layer to serve global data and organize application structure in unidirectional data flow within its lifecycle phases. Action Dispatchers, handles mutation methods, calls services if there are external interactions, dispatch action payload to Reducers. Services, handle side effects like external API calls, return request result back to Actions Dispatchers. Reducers, save action payloads in Store with its respective data structure. Selectors, provides APIs for retrieving store's data, as well as taking care of business logics that compute raw data from reducers to derived data for components.
    Components are seperated in presentational and container. Container components are the logic layer that provides data source and mutations to presentations. Presentation components only render the view layer as stateless components.    
    Server:
    Authentications
    Testing
    Optimization
    Deployment
    `,
    githubLink: "https://github.com/yuchiu/slack-clone",
    demoLink: "https://github.com/yuchiu/slack-clone"
  }
];
