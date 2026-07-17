import { activities } from '../data/content'

export default function Activities() {
  return (
    <>
      <div className="section-eyebrow">Beyond Academics</div>
      <h2>Extra Curricular Activities</h2>
      <div className="glass-card">
        {activities.map((item) => (
          <div className="ec-item" key={item.text}>
            {item.text}
            <span>{item.date}</span>
          </div>
        ))}
      </div>
    </>
  )
}
