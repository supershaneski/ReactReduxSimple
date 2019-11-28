import React from 'react';
import { ReactReduxContext } from 'react-redux';
import addTask from '../actions/index';
import { VAR_OPACITY, VAR_SPECULAR, VAR_DIFFUSE, VAR_TEXTURE } from './variationTypes.js';
import '../index.css';

const styles = {
    container: {
        padding: `5px 0px 0px 0px`,
    }
}

const AddTask = () => {
    
    const handleClick = (store) => {
        const chance = Math.floor(Math.random() * 5);
        
        let variation = "";
        switch(chance) {
          case 1:
            variation = VAR_OPACITY;
            break;
          case 2:
            variation = VAR_SPECULAR;
            break;
          case 3:
            variation = VAR_DIFFUSE;
            break;
          default:
            variation = VAR_TEXTURE;
        }

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