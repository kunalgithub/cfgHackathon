import React, { Component } from 'react'
import axios from 'axios'
import Suggestions from './Suggestions'



const API_URL = 'http://localhost:8080/Fintech/System?filter='

class Search extends Component {

 state = {   
   query: '',   
   results: []
 }

 handleInputChange = () => {
    this.setState({
      query: this.search.value
    }, () => {
      if (this.state.query) {
          this.getSearch()        
      } 
    })
  }

 getSearch = () => {  
    axios.get(`${API_URL}{fintech:'${this.state.query}'}`,{auth: {username: 'admin', password: 'changeit'}})
      .then(({ data }) => {
        var _embedded = data._embedded;
        var count = data._returned;
        console.log('returned:',data._returned,data,_embedded);
        if(count>0){
          console.log("here");
          this.setState({          
            results: _embedded
          })  
        }else{
          this.setState({          
            results: ["Not Found"]
          })
        }
        
      })
  }

 render() {
   return (
    <form>
        <input
          placeholder="Search for..."
          ref={input => this.search = input}
          onChange={this.handleInputChange}
        />
        <Suggestions results={this.state.results} />
      </form>
   )
 }
}

export default Search