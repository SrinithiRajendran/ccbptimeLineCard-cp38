// Write your code here
import {Chrono} from 'react-chrono'
import ProjectTimelineCard from '../ProjectTimelineCard'
import CourseTimelineCard from '../CourseTimelineCard'
import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props

  const renderTimeLine = eachItem => {
    if (eachItem.categoryId === 'PROJECT')
      return <ProjectTimelineCard projectDetails={eachItem} key={eachItem.id} />

    return <CourseTimelineCard courseDetails={eachItem} key={eachItem.id} />
  }
  return (
    <div className="app-container">
      <div className="heading-container">
        <h1 className="heading">
          MY JOURNEY OF <br /> <span className="ccbp-heading">CCBP 4.0</span>
        </h1>
      </div>
      <Chrono
        theme={{
          secondary: 'white',
        }}
        items={timelineItemsList}
        mode="VERTICAL_ALTERNATING"
      >
        {timelineItemsList.map(eachItem => renderTimeLine(eachItem))}
      </Chrono>
    </div>
  )
}

export default TimelineView
