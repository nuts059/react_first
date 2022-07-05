import React, {Component} from 'react';
export default class Todo extends Component{

    change = (e) =>{
        const{ target } = this.target;
        const{ value } = target.type === "checkbox" ? target.checked:target.value;
    }
    render(){
        return(
            <div>
                <
            </div>
        );
    }
        
}