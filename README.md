# Dataminr Backend task

### Key Application Features

- Create a task list 
- Create a task
- Get task
- Get tasklist
- Edit task
- Edit tasklist
- Get tasks in task list
- Remove task from task list


### Development

This application was developed using NodeJs with express for routing. Postgres was used for persisting data.


### Installation

- Clone the project repository.
- Run git clone``` git clone https://github.com/bumsyalao/dataminr.git ```
- Run ``` yarn install ``` to install the dependencies in the package.json file.
- Update .env with envexample
- Create Postgresql database and run DDL scripts (https://www.postgresql.org/)
- Build docker container, on project root run ``` docker-compose up --build -d  ``` 
- ``` docker logs task-app ```
- Start app ```yarn start app ```
- Run test ```yarn test```




### Technologies Used

- JavaScript (ES6) (http://es6-features.org/)
- Node.js (https://nodejs.org/en/)
- Express (https://www.npmjs.com/package/express-api)
- Postgres (https://www.postgresql.org/)
- Docker (https://www.docker.com/)

### Author
Olubunmi Alao
## License & Copyright
MIT © [Olubunmi Alao](https://github.com/bumsyalao)

Licensed under the [MIT License](LICENSE)
