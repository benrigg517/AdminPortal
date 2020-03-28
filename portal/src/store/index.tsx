import * as storage from 'redux-storage';
import { createStore, applyMiddleware } from 'redux';
// import { createLogger } from 'redux-logger';
import { persistStore } from 'redux-persist';
import createEngine from 'redux-storage-engine-localstorage';

// Imports: Redux
import rootReducer from './reducer/index';

const reducer = storage.reducer(rootReducer);

// Now it's time to decide which storage engine should be used
//
// Note: The arguments to `createEngine` are different for every engine!

const engine = createEngine('my-save-key');

// And with the engine we can create our middleware function. The middleware
// is responsible for calling `engine.save` with the current state afer
// every dispatched action.
//
// Note: You can provide a list of action types as second argument, those
//       actions will be filtered and WON'T trigger calls to `engine.save`!
const middleware = storage.createMiddleware(engine);

// As everything is prepared, we can go ahead and combine all parts as usual
const createStoreWithMiddleware = applyMiddleware(middleware)(createStore);
const store = createStoreWithMiddleware(reducer);
let persistor = persistStore(store);
// At this stage the whole system is in place and every action will trigger
// a save operation.
//
// BUT (!) an existing old state HAS NOT been restored yet! It's up to you to
// decide when this should happen. Most of the times you can/should do this
// right after the store object has been created.

// To load the previous state we create a loader function with our prepared
// engine. The result is a function that can be used on any store object you
// have at hand :)
const load = storage.createLoader(engine);
load(store);

// Notice that our load function will return a promise that can also be used
// to respond to the restore event.

export { store, persistor };
