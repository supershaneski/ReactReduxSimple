import React from 'react';
import AddTask from '../containers/AddTask';
import ViewTask from '../containers/ViewTask';

const App = () => (
    <div>
      <AddTask />
      <ViewTask />
    </div>
)

export default App;

/*
import React from 'react';
import { Provider } from 'react-redux';
import SSInput from '../components/ssinput';
import SSViewer from '../components';

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <SSInput />
                <SSViewer />
            </Provider>
        )
    }
}

export default App; */