import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {detail} = props
  const {id, name, teamImageUrl} = detail
  return (
    <Link className="nav-link" to={`/team-matches/${id}`}>
      <li className="nav-link2">
        <img alt={name} src={teamImageUrl} className="team-image" />
        <p className="team-card-name">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
