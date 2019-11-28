import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import reducer from './reducers'

// Uncomment this to add default task
import addTask from './actions/index';

const store = createStore(reducer)

// Add default tasks in store
store.dispatch(addTask('Texture'));
store.dispatch(addTask('Specular'));
store.dispatch(addTask('Diffuse'));

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>, 
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
