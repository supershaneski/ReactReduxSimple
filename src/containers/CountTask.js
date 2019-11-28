import React from 'react';
import { VAR_OPACITY, VAR_SPECULAR, VAR_DIFFUSE, VAR_TEXTURE } from './variationTypes.js';

const styles = {
    container: {
        padding: `5px 0px`,
    }
}

class CountTask extends React.Component {
    render() {
        const data = this.props.data;
        
        let texture = 0, opacity = 0, diffuse = 0, specular = 0;
        
        data.forEach(element => {
            if (element.text.indexOf(VAR_TEXTURE) >= 0) texture++;
            if (element.text.indexOf(VAR_OPACITY) >= 0) opacity++;
            if (element.text.indexOf(VAR_DIFFUSE) >= 0) diffuse++;
            if (element.text.indexOf(VAR_SPECULAR) >= 0) specular++;
        });

        return (
            <div style={ styles.container }>
                <strong>Texture</strong>:{ texture }
                &nbsp;<strong>Opacity</strong>:{ opacity }
                &nbsp;<strong>Diffuse</strong>:{ diffuse }
                &nbsp;<strong>Specular</strong>:{ specular }
                &nbsp;<strong>Total</strong>:{ (texture + opacity + diffuse + specular) }
            </div>
        )
    }
}

export default CountTask;