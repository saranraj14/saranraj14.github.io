import { achievements } from '../data/content'

export default function Achievements() {
  return (
    <>
      <div className="section-eyebrow">Recognition</div>
      <h2>Achievements</h2>
      <div className="glass-card">
        {achievements.map((item) => (
          <div className="ach-item" key={item.text}>
            <div className="ach-marker">{item.icon}</div>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </>
  )
}
