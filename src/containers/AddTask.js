import React from 'react';
import { ReactReduxContext } from 'react-redux';
import addTask from '../actions/index';
import '../index.css';

const styles = {
    container: {
        padding: `5px 0px 0px 0px`,
    },
    button: {
        backgroundColor: `#fff`,
        padding: `5px`,
        marginLeft: `5px`,
        border: `1px solid #222`,
        cursor: `pointer`,
        outline: `none`
    }
}

const AddTask = () => {
    const handleClick = (store) => {
        let chance = Math.floor(10*Math.random());
        let variation = (chance > 5)?"Texture":"Opacity";
        variation = (chance === 3)?"Specular":variation;
        variation = (chance === 7)?"Diffuse":variation;
        store.dispatch(addTask(variation));
    }
    return (
        <ReactReduxContext.Consumer>
        {({ store }) => {
          return (
            <div style={ styles.container }>
                <button className="button" onClick={ () => handleClick(store) }>Add Variation</button>
            </div>
          )
        }}
      </ReactReduxContext.Consumer>
    )
}

export default AddTask;