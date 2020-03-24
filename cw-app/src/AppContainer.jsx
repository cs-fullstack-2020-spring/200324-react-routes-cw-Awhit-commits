import React, { Component } from 'react'
import StarWarsCharacters from './StarWarsCharacters'
import { BrowserRouter as Router } from 'react-router-dom'
import { Route, Link } from 'react-router-dom'
import AddCharacter from './AddCharacter'


export default class AppContainer extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div>
              <h1>Classwork Exercise</h1> 
              <Router>
                  <Link to ='/'>Home</Link>
                  <Link to="/Character"> New Character</Link>
                  <Link to ="/StarWars">Star Wars Characters</Link>
                  <Route path="/Character"><AddCharacter/></Route>
                  <Route path ="/StarWars"><StarWarsCharacters/></Route>
              </Router>
            </div>
        )
    }
}
