export interface Project {
  title: string;
  description: string;
  image: string;
  type: string;
  link: string;
  technologies?: string[];
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    title: "Resumin",
    description: 'A minimal, no-cost tool to create a public resume with a custom URL like resumin.link/yourname. Designed for developers, freelancers, and job seekers who want a simple way to showcase their profile online — without ads, clutter, or fees.',
    image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=1200', 
    type: 'WEB APPLICATION',
    link: 'https://resumin.link',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Firebase'],
    githubUrl: 'https://github.com/razinrayees/resumin'
  },
  {
    title: "Zeba's Portfolio",
    description: 'A sleek and modern portfolio site showcasing web projects, designed for speed, responsiveness, and clarity.',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200', 
    type: 'PORTFOLIO',
    link: 'https://zebakk.web.app',
    technologies: ['React', 'CSS3', 'JavaScript'],
    githubUrl: 'https://github.com/razinrayees/zeba-portfolio'
  },
  {
    title: "Arshad Khader's Portfolio",
    description: ' A clean, professional website designed for Arshad Khader, showcasing his background and initiatives.',
    image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1200',
    type: 'PORTFOLIO',
    link: 'https://arshadk.pages.dev',
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    githubUrl: 'https://github.com/razinrayees/arshad-portfolio'
  },
  {
    title: 'Patch Property',
    description: 'Building a static modern renting platform with Patch to improve credit history, rent with a deposit, and find the perfect pad',
    image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1200',
    type: 'PROJECT',
    link: 'https://patch.razinrayees.com',
    technologies: ['React', 'Tailwind CSS', 'TypeScript'],
    githubUrl: 'https://github.com/razinrayees/patch-property'
  }
];