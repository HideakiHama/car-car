import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

async function loadService() {
  const response = await fetch('http://localhost:8080/api/service/');
  if (response.ok) {
    const data = await response.json();
    root.render(
      <React.StrictMode>
        <App service={data.service} />
      </React.StrictMode>
    );
  } else {
    console.error(response);
  }
}
loadService();