import React from 'react';
import scb from './assets/images/scb.png';

const App = () => {
    return(
        <div>React Application basic setup not yet done deployments {process.env.NODE_ENV}
        name is : {process.env.name}
            <img src={scb} height={400} width={400}/>
        </div>
    )
}

export default App;
