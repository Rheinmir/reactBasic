import React from 'react';

class MyComponent extends React.Component {

    //key:value
    state = {
        name: 'Rhine',
        college: 'Hutech'
    }
    /*
    JSX
    fragment


    */
    handleOnchangeName = (event) => {
        // console.log(event.target.value,'event target: ', event.target, 'event object',event)
        //check How React catch User's input
        //merge
        this.setState({
            name: event.target.value,
        })
    }
    handleClickButton = () => {
        alert('Click me')
    }
    render() {
        // console.log('call render:', this.state)
        // check how many times React's re-render
        return (
            <>
                <div className="first">
                    <input value={this.state.name} type="text" 
                        onChange={(event) => this.handleOnchangeName(event)}
                    />
                    My name is { this.state['name'] }
                </div>
                <div className="second">
                    My University: { this.state.college }
                </div>
                <div className="third">
                    <button onClick={() => {this.handleClickButton()}}>Click me</button>
                </div>
            </>
        )

    }
}

export default MyComponent