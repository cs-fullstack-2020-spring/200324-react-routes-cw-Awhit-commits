import React, { Component } from 'react'

export default class AddCharacter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"",
             year:"",
             gender:"",
             hasSubmitted:false
        }
    }
    //Capture the values as they are typed or selected in their respective fields
    handleChange = (event) =>{
        if (event.target.name ==="name"){
            this.setState({name:event.target.value})
        }
        else if (event.target.name ==="gender"){
            this.setState({gender:event.target.value})
        }
        else if (event.target.name ==="year"){
            this.setState({year:event.target.value})
        }
    }
    //arrow fucntions to set conditon rendering to true when submit button is pressed
    handleSubmission = (event) =>{
        event.preventDefault();
        this.setState({hasSubmitted:true})
    }
    render() {
        // Condition rendering used when submit button is pressed
        if( this.state.hasSubmitted){
            return(<div>
                <h1>New Character Info</h1>
                <p>Name: {this.state.name}</p>
                <p>Gender: {this.state.gender}</p>
                <p>Year: {this.state.year}</p>
            </div>)
        }
        return (
            <div className ="container">
                <form action="">
                    <fieldset>
                        <legend>Add a New Character</legend>
                        <div className = "form">
                            <p>
                            <label htmlFor="name">Name: </label>
                            <input type="text" name="name" id="name" value= {this.state.name} onChange ={this.handleChange}/>
                            </p>
                            <p>
                                <label htmlFor="year">Year: </label>
                                <input type="number" name="year" id="year" value = {this.state.year} onChange = {this.handleChange}/>
                            </p>
                            <p>
                                <select name="gender" id="gender" value = {this.state.gender} onChange = {this.handleChange}>
                                    <option value="">Please Select A Gender</option>
                                    <option value="Female"> Female</option>
                                    <option value="Male">Male</option>
                                    <option value="Other">Other</option>
                                </select>
                            </p>
                            <button onClick= {this.handleSubmission} type="submit">Submit</button>
                        </div>
                    </fieldset>
                </form>
                
            </div>
        )
    }
}
