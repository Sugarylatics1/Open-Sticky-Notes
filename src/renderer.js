/**
 * This file will automatically be loaded by webpack and run in the "renderer" context.
 * To learn more about the differences between the "main" and the "renderer" context in
 * Electron, visit:
 *
 * https://electronjs.org/docs/tutorial/process-model
 *
 * By default, Node.js integration in this file is disabled. When enabling Node.js integration
 * in a renderer process, please be aware of potential security implications. You can read
 * more about security risks here:
 *
 * https://electronjs.org/docs/tutorial/security
 *
 * To enable Node.js integration in this file, open up `main.js` and enable the `nodeIntegration`
 * flag:
 *
 * ```
 *  // Create the browser window.
 *  mainWindow = new BrowserWindow({
 *    width: 800,
 *    height: 600,
 *    webPreferences: {
 *      nodeIntegration: true
 *    }
 *  });
 * ```
 */
import './index.jsx';

//import './index.css';
/*
console.log('👋 This message is being logged by "renderer.js", included via webpack');
*/

/*
import React from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
  const [text, setText] = React.useState("");

  return (
    <div style={{
      background: 'rgba(255,255,153,0.9)',
      width: '100vw',
      height: '100vh',
      padding: '10px',
      boxSizing: 'border-box',
      fontFamily: 'sans-serif'
    }}>
      <textarea
        style={{
          width: '100%',
          height: '100%',
          background: 'transparent',
          border: 'none',
          resize: 'none',
          outline: 'none'
        }}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
*/