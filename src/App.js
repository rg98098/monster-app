import React from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField:''
    }
    // console.log("constructor")
  }

  componentDidMount(){
    // console.log("componentDidMount")
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=> response.json())
    .then(users=> this.setState(()=> {
      return {monsters:users}
    }))
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(()=> {

      return {
        searchField
      }
    })
  }

  render(){
    // console.log("render from App")

    const { monsters, searchField} = this.state
    const {onSearchChange} = this
    const filterMonster = monsters.filter(monster=> {
      return monster.name.toLowerCase().includes(searchField)
    })
    return <div className="App">
    <SearchBox type="search" onChangeHandler = {onSearchChange} placeholder="search monsters" className = "search-box"/>
    <CardList monsters= {filterMonster}/>
    </div>;
  }
}

export default App;
