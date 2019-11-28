import React from 'react';
import { ReactReduxContext } from 'react-redux';
import ListTask from './ListTask';
import CountTask from './CountTask';

class ViewTask extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            a: []
        }
    }    
    componentWillUnmount() {
        this.unsub();
    }
    render() {
        return (
            <ReactReduxContext.Consumer>
            {({ store }) => {
                
                const handle = () => {
                    const a = store.getState();
                    this.setState({
                        a: a
                    })
                }

                this.unsub = store.subscribe(handle.bind(this))

                return (
                    <React.Fragment>
                    <CountTask data={this.state.a} />
                    <ListTask store={store} data={this.state.a} />
                    </React.Fragment>
                )
            }}
            </ReactReduxContext.Consumer>
        )
    }
}

export default ViewTask;