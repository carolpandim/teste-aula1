// import React from 'react';

// class Home extends React.Component{
//     render(){
//         return (<div>Home</div>)
//     }
// } OU


//Faça desse jeito que é melhor
import React, { Component } from 'react';

class Home extends Component {
    constructor(){
        super();
        this.search = this.search.bind(this)
    }

    search(event){
        console.log(event.currentTarget.value);
        
    }

    render() {
        return (
            <div>
                <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                    <input onChange={this.search} className="mdl-textfield__input" type="text" id="search" />
                    <label className="mdl-textfield__label" htmlFor="search">Digite para buscar...</label>
                </div>
            </div>
        )
    }
}

export default Home