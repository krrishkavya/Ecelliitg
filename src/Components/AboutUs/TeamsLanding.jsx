import './teamsLanding.css'
import secy from "../../assets/ecell_secy.png"
import CardMyTeam from './CardMyTeam'

function App() {
  return (
    <>
    <div id="my-team-title">MEET THE TEAM</div>
    <div id="my-team-desc">The minds behind the magic</div>
    <div id="my-team-cards">
      <CardMyTeam 
      linkUrl ="//www.youtube.com/watch?v=xvFZjo5PgG0.com/playlist?list=PLauivoElc3ggagradg8MfOZreCMmXMmJ-"
      phn_url ="https://www.caciitg.com/"
      mail_url = "https://static.toiimg.com/thumb/msid-86114422,width-400,resizemode-4/86114422.jpg"
      photo = {secy}
      name = "Rishi Agarwal"
      post = "Secretary"
      />
      <CardMyTeam 
      linkUrl ="//www.youtube.com/watch?v=xvFZjo5PgG0.com/playlist?list=PLauivoElc3ggagradg8MfOZreCMmXMmJ-"
      phn_url ="https://www.caciitg.com/"
      mail_url = "https://static.toiimg.com/thumb/msid-86114422,width-400,resizemode-4/86114422.jpg"
      photo = {secy}
      name = "Rishi Agarwal"
      post = "Secretary"
      />
      <CardMyTeam 
      linkUrl ="//www.youtube.com/watch?v=xvFZjo5PgG0.com/playlist?list=PLauivoElc3ggagradg8MfOZreCMmXMmJ-"
      phn_url ="https://www.caciitg.com/"
      mail_url = "https://static.toiimg.com/thumb/msid-86114422,width-400,resizemode-4/86114422.jpg"
      photo = {secy}
      name = "Rishi Agarwal"
      post = "Secretary"
      />
      <cardMyTeam 
      linkUrl ="//www.youtube.com/watch?v=xvFZjo5PgG0.com/playlist?list=PLauivoElc3ggagradg8MfOZreCMmXMmJ-"
      phn_url ="https://www.caciitg.com/"
      mail_url = "https://static.toiimg.com/thumb/msid-86114422,width-400,resizemode-4/86114422.jpg"
      photo = {secy}
      name = "Rishi Agarwal"
      post = "Secretary"
      />
    </div>
    </>
  )
}

export default TeamsLanding