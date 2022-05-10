import TeamCard from '../TeamCard'

import './index.css'

const TeamMatchess = props => {
  const {details} = props

  return (
    <div className="team-matches-container">
      {details.map(each => (
        <TeamCard detail={each} key={each.id} />
      ))}
    </div>
  )
}

export default TeamMatchess
