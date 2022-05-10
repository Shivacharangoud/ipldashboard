import './index.css'

const LatestMatch = props => {
  const {dataa} = props

  const formattedData = {
    competingTeam: dataa.competing_team,
    competingTeamLogo: dataa.competing_team_logo,
    date: dataa.date,
    firstInnings: dataa.first_innings,
    id: dataa.id,
    manOfTheMatch: dataa.man_of_the_match,
    matchStatus: dataa.match_status,
    result: dataa.result,
    secondInnings: dataa.second_innings,
    umpires: dataa.umpires,
    venue: dataa.venue,
  }
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    manOfTheMatch,
    result,
    secondInnings,
    umpires,
    venue,
  } = formattedData
  return (
    <div className="latest-match-con">
      <div className="latest-match-main-details-logo-container">
        <div className="latest-match-main-details-container">
          <p className="competing-team-heading">{competingTeam}</p>
          <p>{date}</p>
          <p>{venue}</p>
          <p>{result}</p>
        </div>
        <img
          alt={`latest match ${competingTeam}`}
          src={competingTeamLogo}
          className="team-logo"
        />
      </div>
      <div className="latest-match-additional-details-container">
        <p>first Innings</p>
        <p>{firstInnings}</p>
        <p>Seconds Innings</p>
        <p>{secondInnings}</p>
        <p>Man of The Match</p>
        <p>{manOfTheMatch}</p>
        <p>Umpires</p>
        <p>{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
