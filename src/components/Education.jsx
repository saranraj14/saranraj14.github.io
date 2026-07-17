import { education } from '../data/content'
import Timeline from './Timeline'

export default function Education() {
  return (
    <>
      <div className="section-eyebrow">Academic Background</div>
      <h2>Educational Qualification</h2>
      <Timeline items={education} />
    </>
  )
}
