// Write your code here
import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {projectDetails} = props
  const {imageUrl, projectTitle, description, projectUrl} = projectDetails

  return (
    <div className="project-container">
      <img src={imageUrl} alt="project" className="project-img" />
      <div className="project-title-container">
        <h1 className="project-title">{projectTitle}</h1>
        <div className="project-duration-container">
          <AiFillCalendar className="calender-icon" />
          <p className="project-duration">{projectDetails.duration}</p>
        </div>
      </div>
      <p className="project-description">{description}</p>
      <a href={projectUrl} className="project-visit">
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
