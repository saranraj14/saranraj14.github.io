export default function Timeline({ items }) {
  return (
    <div className="glass-card">
      {items.map((item) => (
        <div className="timeline-item" key={item.title}>
          <div className="timeline-year">{item.year}</div>
          <h3>{item.title}</h3>
          <p>{item.place}</p>
          <span className="score-badge">{item.score}</span>
        </div>
      ))}
    </div>
  )
}
