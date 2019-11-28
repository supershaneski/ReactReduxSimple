import React from 'react';
import { deleteTask, fetchTasks } from '../actions/index';
import '../index.css';

class ListTask extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        // TODO: Uncomment if there is initial data.
        //const store = this.props.store;
        //store.dispatch(fetchTasks());
    }

    handleClick(index, store) {
        store.dispatch(deleteTask(index));
    }

    render() {

        const data = this.props.data;
        const store = this.props.store;

        return (
            <div>
            { 
                data.map((b, index) => {
                  return (
                    <div 
                    className="task" 
                    onClick={()=>this.handleClick(index, store)} 
                    key={index}>{b.text}</div>
                  )
                })
            }
            </div>
        )
    }
}

export default ListTask;