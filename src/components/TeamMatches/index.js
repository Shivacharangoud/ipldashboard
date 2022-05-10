import {Component} from 'react'

import Loader from 'react-loader-spinner'

import LatestMatch from '../LatestMatch'

import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  state = {teamMatchesData: [], isLoading: true}

  componentDidMount() {
    this.getTeamMatches()
  }

  getTeamMatches = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const formattedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
    }

    this.setState({teamMatchesData: formattedData, isLoading: false})
  }

  render() {
    const {match} = this.props
    const {teamMatchesData, isLoading} = this.state
    const {teamBannerUrl, recentMatches, latestMatchDetails} = teamMatchesData
    const {params} = match
    const {id} = params
    const classs = isLoading ? 'height-bg' : ''
    return (
      <div className={`team-matches-bg ${id} ${classs}`}>
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <>
            <img
              alt="team banner"
              src={teamBannerUrl}
              className="team-banner"
            />
            <p className="latest-matches-para">Latest Matches</p>
            <LatestMatch dataa={latestMatchDetails} />
            <div className="match-card-container">
              <MatchCard detail={recentMatches[0]} />
              {recentMatches.map(each => (
                <MatchCard detail={each} key={each.id} />
              ))}
            </div>
          </>
        )}
      </div>
    )
  }
}

export default TeamMatches
