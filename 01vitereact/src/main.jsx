import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

function MyApp(){
  return (
    <div>
      <h1>My App</h1>
      <p>This is my first React app!</p>
    </div>
  )
}
const reactElement = React.createElement(
  'a',
  {
    href: 'https://google.com',
    target: '_blank'
  },
  'Click me to visit Google'
)
export default MyApp;
ReactDOM.createRoot(document.getElementById('root')).render
(
<div>
  <App />
  <MyApp />
  {reactElement}
</div>
);