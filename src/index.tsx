import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Убедитесь, что TypeScript правильно понимает, что `root` - это элемент HTMLElement
const rootElement = document.getElementById('root') as HTMLElement;

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

// Если вы хотите начать измерять производительность в вашем приложении, передайте функцию
// для логирования результатов (например: reportWebVitals(console.log))
// или отправьте на аналитический эндпоинт. Узнайте больше: https://bit.ly/CRA-vitals
reportWebVitals();
