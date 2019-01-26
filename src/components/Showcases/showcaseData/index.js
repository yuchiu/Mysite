export default [
  {
    id: "1",
    name: "Today News",
    time: "Fall 2018",
    imgUrl: {
      demoPic: "https://i.imgur.com/y2bUGMn.gif",
      archDiagram: "https://i.imgur.com/FBYB9vn.jpg"
    },
    githubLink: "https://github.com/yuchiu/today-news",
    demoLink:
      "https://github.com/yuchiu/today-news/blob/master/today-gif-demo.gif",
    siteLink: "http://today-news.surge.sh",
    language: ["JavaScript", "Python"],
    frontEndStack: [
      "React.js",
      "React-Router",
      "Redux",
      "React Native",
      "SCSS"
    ],
    backEndStack: [
      "Node.js",
      "Express.js",
      "jsonrpclib-pelix",
      "RESTful API",
      "RPC API",
      "Web Scraper",
      "TensorFlow"
    ],
    dataStore: ["RabbitMQ", "Redis", "ElasticSearch", "Mongoose", "MongoDB"],
    operationsStack: ["Docker", "AWS EC2"],
    introDesc: `A comprehensive news coverage applications aggregated from various sources with personal news recommendation system.`,
    highlight: [
      "Users can register and log in to their accounts",
      "News are classified in different categories for users",
      "News are derived from multiple news sources",
      "Users can scroll to the bottom and get more news feeds",
      "Users can search for news article by keyword",
      "News are recommended to users based on his/her browsing histories"
    ],
    archDesc: `\n**Scenarios:**
    Search News, fetch News, recommend news, Authentications for users. Scrape news, data cleansing in the backend.
    \n**Constraints:**
    Concurrent Users during Peak time - Assume 500,000 users using Today News service,  
    daily active users/seconds per day x average online seconds(assume 30 mins per day) => 500,000 / (24 x 60 x 60) x (30 x 60) ≈ 10400(active users online at the moment)
    Assume concurrent usage during peak time is 3 times than normal => 10400 x 3 ≈  31200
    Assume active users doubles in 3 months so does concurrent user during peak time => 31200 users x 2 = 62400 users.
    Assume users make a request every 20 seconds during peak hour => 62400 / 20s = 3120/s there will be 3120 request per seconds during peak hour.
    The system should be able to handle 250,000 active users and 3120 request per seconds at minimum during peak usage time.
    Data Bandwidth - Assume concurrent user during peak time would be 31200 users based on our previous assumptions
    Assume file size of 5kb per news, during peak 30 min client rendered 50 news to users => 5kb * 50 news * 31200 users ≈ 7,800,000kb ( 7.8gb, the data size streamed in 30 min of peak time)
    There will be 7800000 kb / 30 min x 60 seconds ≈ 4333kb, 4.3mb of data will be streaming during that time.
    Data Storage - Assume file size of 5kb per news, assume each day the system fetch 1000 news, there will be 5mb of news fetched per day.    
    5mb * 90 days ≈ 450mb of total hard disk usage after 3 months.
    The system should be able to store 132gb of data after 3 months. Storage wise the concern is fairly minimum.
    Real Time Recommendation System(User-Based Collaborative Filtering)
    Assume concurrent user during peak time would be 31200 users based on our previous assumptions
    Assume user preference changed every 10 minutes
    31200 users x 1/(5 min x 60) => 104/s 
    The Recommendation System need to be able to process 104 QPS per second to recomputing user's preference.
    \n**Implementations:** 
    The System is consisted of 3 layer in general, 
    1) Frontend client layer consumes data from backend platform layer via API, then provides visual presentations to the client. i.e Web Client, Mobile Client, Status Monitoring Service. 
    2) Backend platform layer are consist of services that perform operations to provide processed data to Client layer via REST API. The communication between services would be perform in RPC API and Message Queue, i.e News Service, User Service, Search Service, Recommendation Service, Preference Log Process Service. 
    3) Data Layer transforms raw data into processed data for backend platform layer to use.

    \n**Evolvements(future expansion): **
    Improve topic modeling accuracy and recommendation accuracy
    Integrate with The Onion Router(TOR) network to improve the stability of scraping system
    Continuous deployment pipeline such as Jenkins
    `,

    techSpecDesc: `
    \n**Client Application: **(React ∙ React Native ∙ Redux ∙ React-Redux ∙ Redux-Thunk ∙ React-Router ∙ Axios)
    • React and its ecosystem as SPA framework to create components based structure, utilizing Redux as the global state control layer.
    • React Native for mobile applications(Under Development)
    \n**Communication: **(RESTful API ∙ RPC API ∙ RabbitMQ)
    • Communications between Client and Web Server/API Gateway is done in HTTP request in RESTful standard. RPC API & Message Queue are being utilized for inter service communication beneath client layer. 
    • Server & Services that required fast response are using Remote Procedure Call that allow the API to be free from REST like HTTP request and invokes functions similarly to local procedure calls with JSON-RPC via HTTP.
    • Communications with asynchronously request are handled by Message Queue that implemented in RabbitMQ. The services utilize Message Queue are the computation heavy services, such as data pipeline &d preference log processor.
    \n**Authentications: **(Json Web Token)
    • Using Json Web Token for authentication, since JWT is stateless, this allow authentication for multiple platform such as mobile and web with minimum configuration needed.
    \n**Backend Services: **(Python ∙ jsonrpclib-pelix ∙ Nodejs ∙ Express ∙ Jayson)
    • Web Server/API Gateway is implemented in Nodejs and Expressjs. Platform layer services are implemented in both Nodejs and Python with its own JSON-RPC server library. Data layer services like Topic Modeling & News Pipeline are implemented in Python because of the varieties of tools that are available in Python, such as Tensorflow for machine learning.
    • Web Server/API gateway routes requests accordingly to different services for handling and responding to client. Services that require data outside of its own scope are done by calling APIs provided by other services instead of obtaining data by itself.
    • News Recommendation Service consist of Click log processor and JSON RPC recommendation Service. (Under Development, currently it only applies time decay model, next goal is applying User-Based Collaborative Filtering as well)
    Click log processor to implements time decay model to calculate user's preference. If a news topic is clicked, p = (1-α)p + α, if not, p = (1-α)p, Where p is the selection probability, and α is the degree of weight decrease. The result is that the nth most recent selection will have a weight of (1-α)^n. Using a coefficient value of 0.05 as an example, the 10th most recent selection would only have half the weight of the most recent. Increasing α would bias towards more recent results more.
    • Each of services has implemented a heartbeat API which allow external service to check on its current status. This allow monitoring service to keep the system in checks.
    \n**Data Pipeline:** (Python ∙ Web Scraper ∙ NLP ∙ CNN ∙ Tensorflow)
    • Data Pipeline is consist of 5 Main Module, News Monitor, News Scraper, News Deduper, Topic Modeling Trainer and Topic Modeling Service. 
    • The news monitor use News API to derive latest news, store news title MD5 digest from news fetcher into Redis to avoid sending repeated news to message queue. 
    • The web scraper use a Newspaper package to fetch corresponding news articles from official news website. 
    • News depuper implements TF-IDF to calculate similarity of news to avoid storing same news from different news source into MongoDB and only store the one published firstly.
    • News Topic Modeling trainer is implemented by Convolutional Neural Network(CNN) in TensorFlow.
    • Topic Modeling Service provides classification service using model that are trained offline.
    \n**Database:** (Redis ∙ Mongoose ∙ MongoDB ∙ ElasticSearch)
    • MongoDB is the main database this project uses due to several considerations. 1) The news data are scrape from various sources therefore the data structure would be less consistent. 2) There are no strong correlation between data that we are utilizing. 
    • Search service uses ElasticSearch as database for the robust searching functionalities such as type predictions and fuzzy matching. It obtains its data from main mongoDB and store a copy of the news data.(under development.
    • Redis is used as cache for news, user's recommendations, as well as other services.
    \n**Deployment: **
    • Deployed on AWS EC2 instance`
  },
  {
    id: "2",
    name: "Slack Clone",
    time: "Summer 2018",
    imgUrl: {
      demoPic: "https://i.imgur.com/6FqTT5y.gif",
      archDiagram: "https://i.imgur.com/PhN3zT1.jpg"
    },
    githubLink: "https://github.com/yuchiu/slack-clone",
    demoLink:
      "https://github.com/yuchiu/slack-clone/blob/master/slack-clone-demo.gif",
    siteLink: "http://yuchiu-slack.surge.sh",
    language: ["JavaScript", "TypeScript"],
    frontEndStack: ["React.js", "React-Router", "Redux", "SCSS", "Semantic-UI"],
    backEndStack: ["Nodejs", "Expressjs", "RESTful API", "Websocket"],
    dataStore: ["Redis", "Sequelize", "PostgreSQL"],
    operationsStack: ["Nginx", "Docker", "AWS EC2"],
    introDesc: `A fullstack web application that recreate Slack's main features including but not limited to real-time communications, create Teams, create Channels, direct messages, profile image uploads, file uploads and more.`,
    highlight: [
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
    Assume active users doubles in 3 months so does concurrent user during peak time => 12500 users x 2 = 25000 users.
    Assume users make a request every 10 seconds during peak hour => 25000 / 10s = 2500/s there will be 2500 request per seconds.
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
    The system is built in three tier architecture,
    1) Client tier with React and its ecosystem as SPA framework, 
    2) Server tier with Nginx, Nodejs with Expressjs as the backend framework for high concurrent workload, 
    3) Data tier using PostgreSQL for relational database and Redis for caching session store and database query result.
    The Client and Server are connected with RESTful API(http) and WebSocket using socket.io. 
    WebSocket handle real time communication such as inviting new members, sharing files and RESTful API handles asynchronous request such as user registrations and team creations.
    Apache Bench test with 5000 request and 500 concurrent on local server finished in 0.71 seconds.
    \n**Evolvements(future expansion):**  
    Splitting services such as authentication service that has significantly lower concurrent request than the heavier chat service to maximize resource allocations.
    provides more feature/scenarios such as payment support
    use WebSockets for more connections, similar to Slack's implementation`,
    techSpecDesc: `**Styling: **(SCSS ∙ BEM • CSS grid • Flexbox • Semantic UI)
    • SCSS as CSS preprocessing to utilize the robust syntax of vars, mixins and nesting structure to enhance CSS styling development
    • Apply BEM methodology to provide better namespace and well defined CSS hierarchy structure.
    • Templating Layout using CSS grid and Flexbox, use Semantic UI to bootstrap unified base styles for components like buttons and modals, also provides CSS effects for dropdown and pushable sidebar.
    \n**Client Applications: **(React ∙ Redux ∙ React-Redux ∙ Redux-Thunk ∙ React-Router ∙ Reselect ∙ Axios ∙ Jest)
    • React and its ecosystem as SPA framework to create components based structure. 
    • Utilize Redux for data layer to serve global data and organize application structure in unidirectional data flow within its lifecycle phases. Action Dispatchers, handles mutation methods, calls services if there are external interactions, dispatch action payload to Reducers. Services, handle side effects like external API calls, return request result back to Actions Dispatchers. Reducers, save action payloads in Store with its respective data structure. Selectors, provides APIs for retrieving store's data, as well as taking care of business logics that compute raw data from reducers to derived data for components.
    • Components are separated in presentational and container. Container components are the logic layer that provides data source and mutations to presentations. Presentation components only render the view layer as stateless components.    
    \n**Communications: **(RESTful API ∙ WebSocket ∙ Socket.io)
    • The API endpoint are implemented in RESTful fashion with semantic plural noun naming, api versioning, apply HTTP methods accordingly to request resource. The response of REST endpoint also include a "meta" field besides requesting data itself. The meta field include 3 attributes, 1) the embedded HTTP response status code, 2) success or error type, 3) server's response message. By providing meta field, client would have a better understanding for server's response for the request"  
    • WebSocket connection are implemented for real time message using socket.io.
    \n**Authentications: **(OAuth2 ∙ Session ∙ Redis)
    • implemented OAuth2 with Google API.
    • Sessions are store in redis, which provides a central store of session data that stay consistent even when connected with multiple backend server instances.
    • Authorization is done by having administration field for Team_Member table that indicates his/her status with respective team once it was created.
    \n**Server Applications: **(Nodejs ∙ TypeScript ∙ Express ∙ Nginx)
    • BackEnd Server is implemented in Nodejs and Expressjs, with TypeScript to provides more robust syntax capability like static typing. For example all model attributes has its according sequelize interface that has type checks built in for all interactions.
    • The Server Application is split into three main components, Routers, Controllers, Models, which could also be interpreted as 3 tier as well. Router would be the frontend of the Server that routes and select controllers to handles the request API Request, and it would also be the tier to return API responses back to the Client. Controller is the tier where business logic taking place, it is the tier that perform operations with Database interface and provides the response to the router. Models is the Data tier that defines how the schema is structured and presented in database. Some Models contains hooks that perform in certain phase during specific database operations, some also has inherited methods that were defined within the model such as comparePassword. 
    \n**Databases:** (Redis ∙ Sequelize ∙ PostgreSQL)
    • Caching Database queries with Redis, remove stale data every hour, also update cached data when the key changes
    • Due to the strong correlation between Database table like users, channels, teams, message, Relational Database would be a more favorable choice at this scenario. 
    • Sequelize is used as the ORM for the Database, most of the trivial interactions is done with Sequelize's API. However there are more complex query which introduces redundant complexity into controller with ORM, therefore a separate file of SQL queries was created specifically for the complex query operations.
    \n**Deployments & Operations: **(Nginx ∙ Docker)
    • Nginx serves static files, load balance and reverse proxy in production environment. The load balancing strategy is IP hash which keeps connections between client and servers with same IP address, therefore WebSocket would be hitting the same server throughout connected duration.
    • Every components of this application is containerized and connected by the docker network driver. The Docker built processes are specified in the docker-compose.yml that bootstrap all the operations necessary to initiate the containerized system. This simplify steps to configure settings that were necessary such as mounting persisting volume for PostgreSQL & Redis, Nginx access to Cache directory, exposing ports and Load balancing with multiple BackEnd Server instance.`
  }
];
