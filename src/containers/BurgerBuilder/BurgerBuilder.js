import React, { Component } from 'react';

import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Buger';

class BurgerBuilder extends Component {
    render() {
        return (
            <Aux>
                <Burger />
                {/* <div>Burger</div> */}
                <div>Builder Contorls</div>
            </Aux>
        );
    }
}

export default BurgerBuilder;