import React from "react"
import TeamFavsView from './TeamFavsView';

class TeamFavs extends React.Component{
constructor(props) {
    super(props);

    this.state = {
      cocktail: false
    }
  }
  handleonClick = e => {
  this.setState({cocktail:true})
  }

  render() {
  return(
      <div>
        <button onClick = {this.handleonClick}>
          Team Favourites!
        </button>

        {this.state.cocktail && (
          <TeamFavsView cocktail = {this.state.cocktail}/>
        )}
      </div>
  )
  }
}



export default TeamFavs