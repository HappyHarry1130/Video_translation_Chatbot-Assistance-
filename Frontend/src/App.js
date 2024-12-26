import React from "react";
import { Provider} from "react-redux";
import ExamplePage1 from './component/examplePage';
import store from "./store";

import Todo from "./component/Todo";
import Counter from "./component/Counter"
function App() {
  return(
    <Provider store={store}>
      <Counter/>
      <Todo/>
      <ExamplePage1/>
    </Provider>
  )
}

export default App;

