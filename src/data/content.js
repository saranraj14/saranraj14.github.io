// All resume content lives here. Edit this file to update the site's text —
// none of the components below contain hardcoded copy.

export const profile = {
  name: 'Saran Raj S',
  role: 'Civil Engineer',
  initials: 'SR',
  location: 'Perundurai, Erode',
  phone: '7845516281',
  email: 'saranraj14111999@gmail.com',
  linkedin: 'https://www.linkedin.com/in/saranraj14/',
  linkedinLabel: 'linkedin.com/in/saranraj14',
  languages: 'English, Tamil, Hindi',
  interests: 'Photography, Travelling',
  objective:
    'To work in a competitive environment that provides career growth and gives opportunity to show my creativity and skills to accomplish high goals for the growth of the organization and myself.',
}

// Order here also defines swipe/scroll navigation order and sidebar order.
export const navItems = [
  { id: 'home', label: 'Home', icon: '🏠' },
  { id: 'education', label: 'Education', icon: '🎓' },
  { id: 'experience', label: 'Experience', icon: '💼' },
  { id: 'achievements', label: 'Achievements', icon: '🏆' },
  { id: 'projects', label: 'Projects', icon: '📐' },
  { id: 'skills', label: 'Skills & Interests', icon: '🛠️' },
  { id: 'activities', label: 'Extra Curricular', icon: '🌱' },
  { id: 'contact', label: 'Contact', icon: '✉️' },
]

export const education = [
  {
    year: '2017 – 2021',
    title: 'B.E in Civil Engineering',
    place: 'Bannari Amman Institute of Technology, Sathyamangalam',
    score: '8.59 CGPA / 10 (upto 6th sem)',
  },
  {
    year: '2015 – 2017',
    title: 'HSC',
    place: 'Bharathi Matriculation Higher Secondary School, Vijayamangalam',
    score: '89%',
  },
  {
    year: '2015',
    title: 'SSLC',
    place: 'Nandha Matriculation Higher Secondary School, Erode',
    score: '95.2%',
  },
]

export const experience = [
  {
    year: 'Sep 15, 2021 – Present',
    title: 'Zoho Corporation',
    place:
      'Working on the Zoho Projects product team, involved in backend and data-focused engineering work.',
    score: 'Current',
  },
]

export const achievements = [
  {
    icon: '🥉',
    text: 'Secured third place in Geo Genius competition at CEA Fest 2019, held at IIT Madras on March 10–11, 2019.',
  },
  {
    icon: '🏁',
    text: 'One of the finalists in the VesAIthon event held at VESIT College, Chembur, Mumbai on June 27–28, 2019.',
  },
  {
    icon: '🌏',
    text: 'Participated in IEEE Yesist 12 2019 under the Maker Fair Track, held Sept 5–6, 2019 at Stamford International University, Hua Hin, Thailand.',
  },
  {
    icon: '⌨️',
    text: 'Secured first class in Typewriting Junior Grade, August 2012.',
  },
]

export const projects = [
  {
    title: 'Fall Detection and Guide for Walking',
    meta: 'Aug 2019 – Nov 2019',
    paragraphs: [
      'Used an accelerometer sensor (MPU 6050) to detect if a person falls down and immediately alert relatives and neighbours.',
      'Used an ultrasonic sensor (HC-SR04) to act as a walking guide for blind people.',
    ],
    tags: ['C', 'MPU 6050', 'HC-SR04', 'Embedded Systems'],
  },
  {
    title: 'Construction of Cost-Efficient Embankment in Flyovers',
    meta: 'Feb 10, 2019 – Mar 15, 2019',
    paragraphs: [
      'Explored cost-effective construction of embankments in flyovers using industrial waste materials — Fly Ash, Quarry Sand, GGBFS, Sawdust — as a replacement for over-exploited natural sand.',
    ],
    tags: ['Concrete Technology', 'Sustainable Materials', 'Civil Engineering'],
  },
]

export const skillGroups = [
  { title: 'Skills Known', pills: ['C', 'Java', 'Python'] },
  { title: 'Areas of Interest', pills: ['Data Structures', 'DBMS', 'Concrete Technology'] },
  { title: 'Strengths', pills: ['Time Management', 'Punctuality'] },
  { title: 'Languages', pills: ['English (S,R,W)', 'Tamil (S,R,W)', 'Hindi (R,W)'] },
]

export const activities = [
  {
    text: 'Organised and participated in two Anti-Plastic Campaigns.',
    date: '5 Aug 2018 & 9 Sept 2018',
  },
  {
    text: 'Voluntarily participated in blood donation camps under the guidance of the NSS club.',
    date: '4 Nov 2017, 26 Oct 2018, 13 Mar 2019',
  },
]
