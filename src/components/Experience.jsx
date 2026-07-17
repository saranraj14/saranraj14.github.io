import { experience } from '../data/content'
import Timeline from './Timeline'

export default function Experience() {
  return (
    <>
      <div className="section-eyebrow">Professional Journey</div>
      <h2>Work Experience</h2>
      <Timeline items={experience} />
    </>
  )
}
