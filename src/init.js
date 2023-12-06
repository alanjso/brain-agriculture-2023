const app = require('./server');
const config = require('config');
const port = config.get('port');
const version = config.get('version');

app.listen(port, () => {
    console.log(`Teste Brain Agriculture server running on port ${port}`);
    console.log(`http://localhost:${port}/${version}`);
});