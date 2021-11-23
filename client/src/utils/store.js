// Redux store that holds the state of the app
import { createStore } from 'redux';

// Importing the reducer file
import reducers from './reducers';

export default createStore(reducers);