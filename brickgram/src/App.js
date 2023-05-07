import React, { useEffect, useState } from 'react';
import './css/App.css';

function App() {
  const [editorOpen, setEditorOpen] = useState(false);

  const handleOpenEditor = () => {
    setEditorOpen(true);
  };

  const handleCloseEditor = () => {
    setEditorOpen(false);
  };

  useEffect(() => {
    if (editorOpen) {
      const frame = document.getElementById('drawio-frame');
      if (frame) {
        frame.addEventListener('message', handleDrawioMessage);
      }
    }
    return () => {
      const frame = document.getElementById('drawio-frame');
      if (frame) {
        frame.removeEventListener('message', handleDrawioMessage);
      }
    };
  }, [editorOpen]);

  const handleDrawioMessage = (event) => {
    const message = event.data;
    if (message.event === 'autosave') {
      console.log('Diagram autosaved', message);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>Welcome to Brickgram</p>
        {editorOpen ? (
          <button onClick={handleCloseEditor}>Close Editor</button>
        ) : (
          <button onClick={handleOpenEditor}>Open Editor</button>
        )}
        {editorOpen && (
          <iframe
            id="drawio-frame"
            title="draw.io"
            src="http://localhost:8080/?offline=1"
            style={{ width: '100%', height: '800px' }}
          />
        )}
      </header>
    </div>
  );
}

export default App;
