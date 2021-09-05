import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import Reactotron from './ReactotronConfig';

const middleWare = applyMiddleware(thunk);

const configureStore = () => {
  return createStore(
    rootReducer,
    compose(middleWare, Reactotron.createEnhancer()),
  );
};

export default configureStore;
