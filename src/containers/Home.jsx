import React, { Component } from 'react';

import Input from '../common/Input';

import './Home.scss';

class Home extends Component {
    render() { 
        return ( 
            <div className='Home'>
                <Input label="Recherche" />
            </div>
         );
    }
}
 
export default Home;