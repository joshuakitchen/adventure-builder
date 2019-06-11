const path = require('path');
const express = require('express');

/**
 * Called when the server has started listening.
 */
function onListen()
{
    console.log(`Adventure-Builder has started listening on port ${this.address().port}`);
}

/**
 * Called when the index has started listening.
 */
function onIndex(req, res)
{
    res.sendFile(path.join(__dirname, 'static/index.html'));
}

/**
 * The main method sets up the application.
 */
function main()
{
    const app = express();
    
    app.use('/static', express.static(path.join(__dirname, 'static/')));
    app.get('/*', onIndex);

    app.listen(8080, onListen);
}

main();

