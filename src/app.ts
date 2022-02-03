import server from './index';

const port = parseInt(process.env.PORT || '4000');

const app = new server().start(port)
    .then(port => console.log(`Running on port ${port}`))
    .catch(error => {
        console.log(error)
    });

export default app;