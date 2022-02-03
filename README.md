# Dataminr Backend task

### Key Application Features 🚀

[Postman Documentation](https://web.postman.co/collections/5050161-c3de30ec-a986-5641-5287-5fb034f633b6?workspace=2adbc62a-f9af-401c-8a56-7c77fd3eceed#d3ea7b56-43fa-53e9-8d78-4d13a501501f)

- **Create a task list**
    Request: ```curl --location --request POST "http://localhost:4000/tasklist" \
  --header "Content-Type: application/x-www-form-urlencoded" \
  --data "title=tasklist%20033"```

    Response:

    ```
    Tasklist created succesfully ID: 5
    ```
- **Create a task**

    Request: ```curl --location --request POST "http://localhost:4000/task" \
  --header "Content-Type: application/x-www-form-urlencoded" \
  --data "title=task%2040"```

    Response:

    ```
    Task created succesfully ID: 2
    ```
-  **Get task**

    Request:
         ```curl --location --request GET "http://localhost:4000/task" ```


    Response:

    ```
    [
        {
            "id": 1,
            "title": "task0001",
            "updated_at": "2022-02-01T20:00:00.000Z"
        },
        {
            "id": 2,
            "title": "task 40",
            "updated_at": "2022-02-02T20:00:00.000Z"
        }
    ]
    ```
- **Get tasklist**

    Request:
         ```curl --location --request GET "http://localhost:4000/tasklist" ```


    Response:

    ```
    [
        {
            "id": 2,
            "title": "tasklist 01",
            "updated_at": "2022-02-02T20:00:00.000Z"
        },
        {
            "id": 3,
            "title": "tasklist 02",
            "updated_at": "2022-02-02T20:00:00.000Z"
        },
        {
            "id": 4,
            "title": "tasklist 03",
            "updated_at": "2022-02-02T20:00:00.000Z"
        }
    ]
    ```
- **Edit Task**

    Request: ```curl --location --request PUT "http://localhost:4000/task/1" \
  --header "Content-Type: application/x-www-form-urlencoded" \
  --data "title=task03"```

    Response:

    ```
    Task modified with ID: 1
    ```
- **Edit Tasklist**

    Request: ```curl --location --request PUT "http://localhost:4000/tasklist/2" \
  --header "Content-Type: application/x-www-form-urlencoded" \
  --data "title=tasklist%2002"```

    Response:

    ```
    Tasklist modified with ID: 1
    ```

- **Get Tasks in Tasklist**

    Request:

    ```curl --location --request GET "http://localhost:4000/tasklist/1"```
    
    Response:

    ```
    [
        {
            "task_id": 2,
            "tasklist_id": 1
        },
        {
            "task_id": 3,
            "tasklist_id": 1
        }
    ]
    ```

- **Add Task to Tasklist**

    Request: ```curl --location --request POST "http://localhost:4000/tasklist/1/task/7"```

    Response:

    ```
    Task 7 succesfully added to tasklist 1
    ```
- **Remove task from task list**

    Request: ```curl --location --request DELETE "http://localhost:4000/tasklist/1/task/7"```

    Response:

    ```
    Task 7 succesfully deleted from tasklist 1
    ```


### Development 🛠
This application was developed using NodeJs with express for routing. Postgres was used for persisting data.


### Installation 📲

- Clone the project repository.
- Run git clone``` git clone https://github.com/bumsyalao/dataminr.git ```
- Run ``` yarn install ``` to install the dependencies in the package.json file.
- Update .env with envexample
- Create Postgresql database and run DDL scripts (https://www.postgresql.org/)
- Build docker container, on project root run ``` docker-compose up --build -d  ``` 
- ``` docker logs task-app ```
- Start app ```yarn start app ```
- Run test ```yarn test```




### Technologies Used ⚙️

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
