import {Component} from 'react'

import Loader from 'react-loader-spinner'

import TeamMatchess from '../TeamMatchess'

import './index.css'

class Home extends Component {
  state = {teamMatchesList: [], isLoading: true}

  componentDidMount() {
    this.getTeamMatches()
  }

  getTeamMatches = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const {teams} = data
    const updatedTeams = teams.map(each => ({
      id: each.id,
      name: each.name,
      teamImageUrl: each.team_image_url,
    }))
    this.setState({teamMatchesList: updatedTeams, isLoading: false})
  }

  render() {
    const {teamMatchesList, isLoading} = this.state

    return (
      <div className="home-container">
        <div className="ipl-logo-and-heading-container">
          <img
            alt="ipl logo"
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            className="ipl-logo"
          />
          <h1 className="ipl-heading">IPL Dashboard</h1>
        </div>
        {isLoading ? (
          <div testid="loader">
            <Loader />
          </div>
        ) : (
          <TeamMatchess details={teamMatchesList} />
        )}
      </div>
    )
  }
}

export default Home
