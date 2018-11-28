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
    The two main components of the system are data warehouse that collects, analyzes, converts raw data into processed data, and services that utilize the processed data to provides functionalities for user interfaces & interactions.
    Users can conveniently read latest news from various sources such CNN, Bloomberg, ESPN all in one place with personal recommendations according to his/her browsing history.`,
    userStory: [
      "Users can register and log in to their accounts",
      "News are classified in different categories for users",
      "News are derived from multiple news sources",
      "Users can scroll to the bottom and get more news feeds",
      "Users can search for news article by keyword",
      "News are recommended to users based on his/her browsing histories"
    ],
    archDesc: `\n**Scenarios:**
    \n**Constraints:** 
    \n**Implementations:** 
    \n**Evolvements: **`,

    techSpecDesc: `
    \n**Client Application: **(React ∙ React Native ∙ Redux ∙ React-Redux ∙ Redux-Thunk ∙ React-Router ∙ Axios)
    • React and its ecosystem as SPA framework to create components based structure. 
    \n**Communication: **(RESTful API ∙ RPC API ∙ Message Broker ∙ RabbitMQ)
    • First layer of communications between Client and Web Server is done in HTTP request in RESTful standard. RPC API & Message Broker are being utilize behind the first layer of the system. 
    • Server & Services are mostly using Remote Procedure Call that allow the API to be free from REST like HTTP request and involkes functions similiarly to local procedure calls with JSON-RPC via HTTP.
    • Data Services are handled asynchronously instead of letting service waiting for their response, such as data pipeline &d preference log processor that handles heavy computations. These Services communication are put into queue of task by Message Broker service that are implemented in RabbitMQ.
    \n**Authentications: **(Json Web Token)
    \n**Service Applications: **(Python ∙ Nodejs ∙ Express)
    \n**Database:** (Redis ∙ Mongoose ∙ MongoDB ∙ ElasticSearch)
    \n**Data Pipeline:** (Python ∙ Web Scraper ∙ NLP ∙ Tensorflow)
    \n**Recommendation System:** (Python ∙ Tensorflow)
    \n**Deployment: **
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
      archDiagram: "https://i.imgur.com/PhN3zT1.jpg"
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
    archDesc: `**Scenarios:**  
    send message and files in real time, create team, channels, direct messages, authentication and authorization  
    \n**Constraints: **  
    Concurrent Users during Peak time - Assume 100,000 users using slack clone service,  
    daily active users/seconds per day x average online seconds(assume 30 mins per day) => 100,000 / (24 x 60 x 60) x (30 x 60) ≈ 2083(active users online at the moment)
    Assume concurrent usage during peak time is 6 times than normal => 2083 x 6 ≈  12500
    Assume active users doubles in 3 months => 12500 users x 2 = 25000 users.
    Asumme users make a request every 10 seconds during peak hour => 25000 / 10s = 2500/s there will be 2500 request per seconds.
    The system should be able to handle 25000 active users and 2500 request per seconds at minimum during peak usage time.
    Data Bandwidth - Authentications request are neglected due to bandwidth & data that registration going to consume is significantly lower than the application usage.
    Text message bandwidth is also neglected for the reason of text size is exponentially smaller than Images and other file types
    Let's say each users sends 1 voice file and 1 image file during 30 minutes of online time(the slack clone itself sets limit of sending 5 mb max on uploading files to server.)
    Therefore (5 mbs voice files + 5 mbs image files) x 25000 peak users = 250000mb(250gb), 250gb files are being streamed during that 30 minutes of peak usage.
    There will be 250000 mb / 30 min x 60 seconds ≈ 140mb, 140mb/s of data streaming during that time. 
    The system should be able to handle 140mb/s streaming data during peak time at minimum.
    Data Storage - 10mb file uploads per user daily x 150000 users per month on average(100000 users first month grow to 200000 users on third month) ≈ 1465mb(1.465)gb per day
    1.465gb * 90 days ≈ 132gb total hard disk usage after 3 months.
    The system should be able to store 132gb of data after 3 months
    \n**Implementations:**  
    3 tier architecture - 1) Client tier with React and its ecosystem as SPA framework, 2) Server tier with Nginx, Nodejs with Expressjs as the backend framework for high concurrent work load, 3) Data tier using PostgreSQL for relational database and Redis for caching session store and database query result.
    The Client and Server are connected with RESTful API(http) and WebSocket using socket.io. WebSocket handle real time communication such as inviting new members, sharing files. RESTful API handles asynchronus request such as user registrations and team creations.
    Nginx is serves as Web Server that handles load balancing, reverse proxy and serves cached static files
    Apache Bench test with 5000 request and 500 concurrent on local server finished in 0.71 seconds.
    \n**Evolvements(future expansion):**  
    Splitting services such as authentication service that has significantly lower concurrent request than the heavier chat service to maximize resource allocations.
    provides more feature/scenarios such as payment support
    use WebSockets for more connections, similiar to Slack's implementation
    implements a more rebust testing setup
    improve system robustness, prevent crash & failure cases`,
    techSpecDesc: `**Styling: **(SCSS ∙ BEM • CSS grid • Flexbox • Semantic UI)
    • SCSS as CSS preprocessing to utilize the robust syntax of vars, mixins and nesting structure to enhance CSS styling development
    • Apply BEM methodology to provide better namespace and well defined CSS hierarchy structure.
    • Templating Layout using CSS grid and Flexbox, use Semantic UI to bootstrap unified base styles for components like buttons and modals, also provides CSS effects for dropdown and pushable sidebar.
    \n**Client Applications: **(React ∙ Redux ∙ React-Redux ∙ Redux-Thunk ∙ React-Router ∙ Reselect ∙ Axios ∙ Jest)
    • React and its ecosystem as SPA framework to create components based structure. 
    • Utilize Redux for data layer to serve global data and organize application structure in unidirectional data flow within its lifecycle phases. Action Dispatchers, handles mutation methods, calls services if there are external interactions, dispatch action payload to Reducers. Services, handle side effects like external API calls, return request result back to Actions Dispatchers. Reducers, save action payloads in Store with its respective data structure. Selectors, provides APIs for retrieving store's data, as well as taking care of business logics that compute raw data from reducers to derived data for components.
    • Components are seperated in presentational and container. Container components are the logic layer that provides data source and mutations to presentations. Presentation components only render the view layer as stateless components.    
    \n**Communications: **(RESTful API ∙ WebSocket ∙ Socket.io)
    • Since using session for authentications is not stateless, I stick with the conventional endpoint such as /signin, /singout instead of naming them in RESTful semantic standard.
    • The rest of API endpoint would be considered more RESTful with semantic noun naming, api versioning, apply HTTP methods accordingly to request resource. The response of REST endpoint also include a "meta" field besides requesting data itself. The meta field include 3 attributes, 1) the embedded HTTP response status code, 2) sucess or error type, 3) server's response message. By providing meta field, client would have a better understanding for server's response for the request"  
    • Using WebSocket connection for real time message
    \n**Authentications: **(Session ∙ Redis)
    • Session for authentications, 
    • Redis for session store, it also maintain a central pool of session data which stay consistence even with multiple backend server instances being load balanced.
    • Authorization is done by having administration field for Team_Member table that indicates his/her status with repective team once it was created, "2" would pocess highest authority as the owner of the team, "1" would be admin, and "0" would be normal users
    \n**Server Applications: **(Nodejs ∙ TypeScript ∙ Express ∙ Nginx)
    • Nodejs and Express is the stack for the BackEnd Server, with TypeScript to provides more robust syntax capability like static typing. For example all model attributes has according sequelize interface that has type checks built in for all interactions.
    • The Server Application is split into three main components, Routers, Controllers, Models, which could also be interpreted as 3 tier as well. Router would be the frontend of the Server that routes and select controllers to handles the request API Request, and it would also be the tier to return API responses back to the Client. Controller is the tier where business logic taking place, it is the tier that perform operations with Database interface and provides the response to the router. Models is the Data tier that defines how the schema is structured and presented in database. Some Models contains hooks that perform in certain phase during specific database operations, some also has inherited methods that were defined within the model such as comparePassword. 
    • Nginx is serving static files like images and audio during production environments.
    \n**Databases:** (Redis ∙ Sequelize ∙ PostgreSQL)
    • Caching Database query with Redis, remove stale data every hour, update when the key changes
    • Due to the strong correlation between Database table like users, channels, teams, message, Relational Database would be a superior choice at this scale. 
    • Sequelize is used as the ORM for the Database, most of the basic interactions is done with Sequelize's API. However there are more complex query which introduces redundant complexity into controller, therefore a seperate file of SQL queries was created for the complex query operations.
    \n**Deployments & Operations: **(Nginx ∙ Docker)
    • Nginx is the reverse proxy and load balancer in production environment. IP hash would be the load balancing strategy that keeps connections between client and servers with same IP address, therefore WebSocket would be hitting the same server throughout connected duration.
    • Containerize each module with Docker including Redis, PostgreSQL, Nginx, Backend Server. A Docker-Compose file was created to bootstrap all the operations that are necessary to initiate the system. This simplify steps to configure settings that were neccessary such as setting persisting volume for PostgreSQL & Redis, Nginx access to Cache directory, exposing ports and Load balancing with multiple BackEnd Server instance.`,
    githubLink: "https://github.com/yuchiu/slack-clone",
    demoLink: "https://github.com/yuchiu/slack-clone"
  }
];
