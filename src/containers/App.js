import React, {Component} from 'react';
import Cardlist from '../components/Cardlist';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'

class App extends Component {
    constructor() {
        super()
    this.state={
        robots:[],
        searchfield:" "

    }
}

componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => this.setState({ robots: users}))
}

onSearchChange=(event)=>{
    this.setState({searchfield:event.target.value})
                 }
    render(){
        const arr=this.state.robots.filter(robots=>{
            return(robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase()))
       })
       if(this.state.robots.length===0){
           return <h1>Loading</h1>
       } else{
        return(
            <div className="tc">    
                <h1>Robofriends</h1>
                <SearchBox searchfield={this.searchfield} searchChange={this.onSearchChange}/>
                <Scroll>
                <Cardlist  robots={arr} />
                </Scroll>
                
                
            </div>
        )
       }
    }
    }
    export default App