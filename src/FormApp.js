import React, {Component}from 'react';
export default class FormApp extends Component{

    constructor(props){
        super(props);

        this.state ={
            value:'',
            message:''
        };

        this.handleInput = this.handleInput.bind(this);
        this.send = this.send.bind(this);
    }

    handleInput({target:{value}}){
        this.setState({
            value
        });
    }

    handleInput(event){
        let value = event.target.value;
        this.setState({
            value:value
        });
    }

    
    send(){
        const {value} = this.state;
        this.setState({
            value:'',
            message:value
        });
    }

    render(){
        return(
            <div>
                <input type="text" value={this.state.value} onChange={this.handleInput}/>
                <button onClick={this.send.bind(this)}>SEND</button>
                <div>{this.state.message}</div>
            </div>
        );
    }
}