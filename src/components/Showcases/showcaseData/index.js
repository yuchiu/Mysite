export default [
  {
    id: "1",
    name: "Today News",
    time: "Fall 2018",
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
    introDesc: `Today News is a fullstack news recommendation system implemented in service oriented architecture. 
    Users can conveniently read latest news from various sources such CNN, Bloomberg, ESPN all in one place with personal recommendations according to his/her browsing history.
    The two main components of the system are data warehouse that collects, analyzes, converts raw data into processed data, and services that utilize the processed data to provides functionalities for user interfaces & interactions.`,
    userStory: [
      "Users can register and log in to their accounts",
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
    time: "Summer 2018",
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
    introDesc: `Slack Clone is a fullstack live chat application implemented in monolithic three Tier architecture.
    This application recreate Slack's main features including but not limited to real-time communications, create Teams, create Channels, direct messages, profile image uploads, file uploads and more.`,
    userStory: [
      "Users can register and log in to their account",
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
    archDesc: `Scenarios(Features): 
    send message and files in real time, create team, channels, direct messages, authentication and authorization

    Constraints(Requirements): 
    Concurrent Users during Peak time - Assume 100,000 users using slack clone service,
    daily active users/seconds per day * average online seconds(assume 30 mins per day) => 100,000 / (24 * 60 * 60) * (30 * 60) ≈ 2083(active users online at the moment)
    Assume concurrent usage during peak time is 6 times than normal => 2083 * 6 ≈  12500
    Assume active users doubles in 3 months => 12500 users * 2 = 25000 users.
    Asumme users make a request every 10 seconds during peak hour => 25000 / 10s = 2500/s there will be 2500 request per seconds.
    The system should be able to handle 25000 active users and 2500 request per seconds at minimum during peak usage time.
    Data Bandwidth - Authentications request are neglected due to bandwidth & data that registration going to consume is significantly lower than the application usage.
    Text message bandwidth is also neglected for the reason of text size is exponentially smaller than Images and other file types
    Let's say each users sends 1 voice file and 1 image file during 30 hours of online time(the slack clone itself sets limit of sending 5 mb max on uploading files to server.)
    Therefore (5 mbs voice files + 5 mbs image files) * 25000 peak users = 250000mb(250gb), 250gb files are being streamed during that 30 minutes of peak usage.
    There will be 250000 mb / 30 min * 60 seconds ≈ 140mb, 140mb/s of data streaming during that time. 
    The system should be able to handle 140mb/s streaming data during peak time at minimum.
    Data Storage - 10mb file uploads per user daily * 150000 users per month on average(100000 users first month grow to 200000 users on third month) ≈ 1465mb(1.465)gb per day
    1.465gb * 90 days ≈ 132gb total hard disk usage after 3 months.
    The system should be able to store 132gb of data after 3 months
    
    Implementations(Applications):
    3 tier architecture - 1) Client tier with React and its ecosystem as SPA framework, 2) Server tier with Nginx, Nodejs with Expressjs as the backend framework for high concurrent work load, 3) Data tier using PostgreSQL for relational database and Redis for caching session store and database query result
    The Client and Server are connected with RESTful API(http) and WebSocket using socket.io. WebSocket handle real time communication such as inviting new members, sharing files. RESTful API handles asynchronus request such as user registrations and team creations.
    Nginx is serves as Web Server that handles load balancing, reverse proxy and serves cached static files
    Apache Bench test with 5000 request and 500 concurrent on local server finished in 0.71 seconds.
    
    Evolvements(future expansion):
    Splitting services such as authentication service that has significantly lower concurrent request than the heavier chat service to maximize resource allocations.
    provides more feature/scenarios such as payment support
    use WebSockets for more connections, similiar to Slack's implementation
    implements a more rebust testing setup
    improve system robustness, prevent crash & failure cases`,
    techSpecDesc: `
    Under Construction
    Client:
    Styling - SASS, BEM, CSS grid, Flexbox, Semantic UI
    SCSS as CSS preprocessing to utilize the robust syntax like vars, mixins and nesting structure to enhance styling development
    Apply BEM methodology to provide better namespace and well defined CSS hierarchy structure.
    Templating Layout using CSS grid and Flexbox, use Semantic UI to bootstrap unified base styles for components like buttons and modals, also provides CSS effects for dropdown and pushable sidebar.
    
    React and its ecosystem as SPA framework to create components based structure. 
    Utilize Redux for data layer to serve global data and organize application structure in unidirectional data flow within its lifecycle phases. Action Dispatchers, handles mutation methods, calls services if there are external interactions, dispatch action payload to Reducers. Services, handle side effects like external API calls, return request result back to Actions Dispatchers. Reducers, save action payloads in Store with its respective data structure. Selectors, provides APIs for retrieving store's data, as well as taking care of business logics that compute raw data from reducers to derived data for components.
    Components are seperated in presentational and container. Container components are the logic layer that provides data source and mutations to presentations. Presentation components only render the view layer as stateless components.    
    Server:
    Authentications
    Testing
    Optimization
    Code Splitting
    Caching
    Advanced webpack config
    Deployment
    Future expansion:
    more testing
    optimization
    prerendering
    `,
    githubLink: "https://github.com/yuchiu/slack-clone",
    demoLink: "https://github.com/yuchiu/slack-clone"
  }
];
