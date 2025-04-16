
import './index.css';
import React, { useEffect, useState } from 'react';

const { ipcRenderer } = window.electron;

const App = () => {
  const [text, setText] = useState("");

  useEffect(() => {
    ipcRenderer.invoke('load-note').then(data => {
      setText(data.text || '');
    });
  }, []);

  useEffect(() => {
    const save = () => ipcRenderer.invoke('save-note', { text });
    const id = setInterval(save, 1000);
    return () => clearInterval(id);
  }, [text]);

  const handleExit = () => {
    window.close();
  };

  const handleNewNote = () => {
    ipcRenderer.invoke('create-new-note');
  };

  return (
    <div className="app-container">
      <div className="top-bar">
        <div className="new-button" onClick={handleNewNote}>＋</div>
        <div className="exit-button" onClick={handleExit}>×</div>
      </div>
      <textarea
        className="note-textarea"
        value={text}
        onChange={e => setText(e.target.value)}
      />
    </div>
  );
};

export default App;

