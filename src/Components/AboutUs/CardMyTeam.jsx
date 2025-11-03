import linkedin from '../../assets/linkedin.png'
import call from '../../assets/call.png'
import mail from '../../assets/mail.png'
import './cardMyTeam.css'

function CardMyTeam({
  linkUrl,
  phn_url,
  mail_url,
  photo,
  name,
  post
}){
  return(
    <div className="myTeamCard">
      <div className="myTeamBox">
        <div className="myTeamLinks">
          <img className='teamLogos' src={linkedin} alt="linkedin logo" onClick={() => window.open(linkUrl, "_blank")} />
          <img className='teamLogos' src={call} alt="linkedin logo" onClick={() => window.open(phn_url, "_blank")} />
          <img className='teamLogos' src={mail} alt="linkedin logo" onClick={() => window.open(mail_url, "_blank")} />
        </div>
        <div className="myTeamPhoto">
          <img src={photo} alt={name} />
        </div>
      </div>
      <div className="myTeamInfo">
        <div className="teamName">{post}</div>
        <div className="teamPost">{name}</div>
      </div>
    </div>
  )
}
export default CardMyTeam