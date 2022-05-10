import './index.css'

const MatchCard = props => {
  const {detail} = props
  const formattedData = {
    competingTeamLogo: detail.competing_team_logo,
    competingTeam: detail.competing_team,
    result: detail.result,
    matchStatus: detail.match_status,
  }
  const {competingTeam, competingTeamLogo, result, matchStatus} = formattedData

  return (
    <li className="match-card">
      <img
        alt={`competing team ${competingTeam}`}
        src={competingTeamLogo}
        className="team-logoo"
      />
      <p className="namee">{competingTeam}</p>
      <p className="resultt">{result}</p>
      <p className="status">{matchStatus}</p>
    </li>
  )
}
export default MatchCard
