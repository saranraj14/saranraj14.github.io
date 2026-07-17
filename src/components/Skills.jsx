import { skillGroups } from '../data/content'

export default function Skills() {
  return (
    <>
      <div className="section-eyebrow">Toolkit</div>
      <h2>Skills &amp; Areas of Interest</h2>
      <div className="skills-grid">
        {skillGroups.map((group) => (
          <div className="glass-card" key={group.title}>
            <h4>{group.title}</h4>
            <div className="skill-pill-row">
              {group.pills.map((pill) => (
                <span className="skill-pill" key={pill}>
                  {pill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
