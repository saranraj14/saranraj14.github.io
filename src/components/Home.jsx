import { profile } from '../data/content'

export default function Home() {
  return (
    <>
      <div className="section-eyebrow">Welcome</div>
      <h2>Career Objective</h2>
      <div className="glass-card home-hero">
        <p className="objective">{profile.objective}</p>

        <div className="contact-grid">
          <div className="contact-item">
            <span>Location</span>
            {profile.location}
          </div>
          <div className="contact-item">
            <span>Phone</span>
            {profile.phone}
          </div>
          <div className="contact-item">
            <span>Email</span>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </div>
          <div className="contact-item">
            <span>LinkedIn</span>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              {profile.linkedinLabel}
            </a>
          </div>
          <div className="contact-item">
            <span>Languages</span>
            {profile.languages}
          </div>
          <div className="contact-item">
            <span>Interests</span>
            {profile.interests}
          </div>
        </div>
      </div>
    </>
  )
}
