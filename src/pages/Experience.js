import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { School } from '@mui/icons-material'

function Experience() {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor='#3333ff'>
        <VerticalTimelineElement 
          className='vertical-timeline-element--education' 
          date='2016 - 2019'
          iconStyle={{background: '#3333ff', color: '#fff'}}
          icon={<School />}>
            <h3 className='vertical-timeline-element-title'>
              Vung Tau High School, Vung Tau City, Viet Nam
            </h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
          className='vertical-timeline-element--education' 
          date='2019 - 2024'
          iconStyle={{background: '#3333ff', color: '#fff'}}
          icon={<School />}>
            <h3 className='vertical-timeline-element-title'>
              Vaasa University of Appiled Science, Vaasa, Finland
            </h3>
            <p></p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experience