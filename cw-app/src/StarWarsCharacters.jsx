import React, { Component } from 'react'

export default class StarWarsCharacters extends Component {
    constructor(props) {
        super(props)
    //Setting state to have empty list intially
        this.state = {
            dataList:[]
             
        }
    }
    componentDidMount(){
        //Sanity check
        console.log(`Component did mount`);
        this.loadData();
    }
    //using an asynchrnous function mainly because it looks cleaner
    loadData = async()=>{
        //Another sanity check
        console.log(`Data Loaded`)
        const response = await fetch('https://swapi.co/api/people/');
        const json = await response.json();
        this.setState({dataList:json.results})
        //See if there's any data from the api hitting the list in state
        console.log(this.state)
        
    }
    render() {

        return (
    
            <div className = "parent">
                <h1>Star Wars Characters</h1>
                {/* Mapped through the json data that was returned to retreive the name,gender,birth year */}
                {this.state.dataList.map((stars,index) => {
                    return(
                        <div key = {index}>
                            <p>Name: {stars.name}</p>
                            <p>Year: {stars.birth_year}</p>
                            <p>Gender: {stars.gender}</p>
                           
                            
                        </div>
                    )
                })}
            </div>
        )
    }
}
