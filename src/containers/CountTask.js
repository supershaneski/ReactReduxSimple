import React from 'react';

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
            if (element.text.indexOf("Texture") >= 0) texture++;
            if (element.text.indexOf("Opacity") >= 0) opacity++;
            if (element.text.indexOf("Diffuse") >= 0) diffuse++;
            if (element.text.indexOf("Specular") >= 0) specular++;
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