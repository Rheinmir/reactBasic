import React from "react";

class AddComponent extends React.Component {

    state = {
        tittle: '',
        salary: '',
    }
    handleChangeFirstName = (event) => {
        this.setState({
            tittle: event.target.value
        })
    }

    handleChangeLastName = (event) => {
        this.setState({
            salary: event.target.value
        })
    }
    
    handleSubmit = (event) => {
        event.preventDefault()
        console.log('>>> check data input', this.state)
        this.props.addNewJob({
            id: Math.random(),
            tittle: this.state.tittle,
            salary: this.state.salary
        })
    }

    render() {
        return(
            <form>
                    <label htmlFor="fname">Job Tittle:</label><br/>
                    <input 
                        type="text" 
                        value={this.state.tittle}
                        onChange={(event)=> this.handleChangeFirstName(event)}
                    /><br/>
                    <label htmlFor="lname">Salary:</label><br/>
                    <input 
                        type="text" 
                        value={this.state.salary}
                        onChange={(event)=> this.handleChangeLastName(event)}
                        /><br/><br/>
                    <input 
                        type="submit"
                        value="Submit"
                        onClick={(event)=> this.handleSubmit(event)}
                    />
                </form>
        )
    }

}

export default AddComponent;