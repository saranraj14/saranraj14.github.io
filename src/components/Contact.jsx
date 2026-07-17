import { profile } from '../data/content'

export default function Contact() {
  return (
    <>
      <div className="section-eyebrow">Get in Touch</div>
      <h2>Contact</h2>
      <div className="glass-card">
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
        </div>
      </div>
    </>
  )
}
