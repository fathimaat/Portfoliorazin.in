import React, { useState } from 'react';
import { Award, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';

const certificates = [
  {
    provider: "STEYP",
    logo: "https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/23-11-2021/steyp-logo.svg",
    subtitle: "Development Courses",
    courses: [
      {
        title: "Tech Schooling",
        year: "",
        certificates: [
          {
            title: "UI Engineer",
            link: "https://steyp.com/nanodegree/tech-schooling/certification/obq0ct7kw1pck9bq4vym/"
          },
          {
            title: "Backend Developer",
            link: "https://steyp.com/nanodegree/tech-schooling/certification/3xegoichivniea40z8f6/"
          },
           {
            title: "Web Application Developer",
            link: "https://steyp.com/nanodegree/tech-schooling/certification/d5eplg07t8bn6s1a0mk6/"
          },
          {
            title: "DevOps Engineer",
            link: "https://steyp.com/nanodegree/tech-schooling/certification/5lz2yymray2f1p3l7tee/"
          }
        ]
      }
    ]
  },
  {
    provider: "META",
    logo: "https://pngimg.com/d/meta_PNG5.png",
    subtitle: "Professional Certification",
    courses: [
      {
        title: "Professional Certification",
        year: "",
        certificates: [
          {
            title: "Meta Front-End Developer",
            link: "https://www.coursera.org/account/accomplishments/professional-cert/certificate/TDTHD7C8RSK7"
          }
        ]
      }
    ]
  },
   {
    provider: "Github",
    logo: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
    subtitle: "Professional Certification",
    courses: [
      {
        title: "Professional Certification",
        year: "",
        certificates: [
          {
            title: "GitHub Foundations",
            link: ""
          }
        ]
      }
    ]
  }
];

function CertificateProvider({ provider, logo, subtitle, courses }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-[#111] border border-neutral-800 rounded-lg overflow-hidden">
      <div 
        className="p-4 flex items-center justify-between cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center gap-4">
          <img 
            src={logo} 
            alt={provider}
            className="w-8 h-8 object-contain"
          />
          <div>
            <h3 className="text-white text-xl">{provider}</h3>
            <p className="text-neutral-500 text-sm">{subtitle}</p>
          </div>
        </div>
        <button className="text-neutral-400 hover:text-white transition-colors">
          {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>
      </div>

      {isExpanded && (
        <div className="border-t border-neutral-800">
          {courses.map((course, index) => (
            <div key={index} className="p-4 space-y-4">
              <div className="flex justify-between items-center">
                <h4 className="text-cyan-400 text-lg">{course.title}</h4>
                <span className="text-neutral-500 text-sm">{course.year}</span>
              </div>
              <div className="space-y-2">
                {course.certificates.map((cert, certIndex) => (
                  <div 
                    key={certIndex} 
                    className="flex justify-between items-center py-2 px-3 bg-black rounded hover:bg-neutral-900 transition-colors"
                  >
                    <span className="text-neutral-300 text-sm">{cert.title}</span>
                    <a 
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
                      onClick={(e) => e.stopPropagation()}
                    >
                      View Certificate
                      <ExternalLink size={14} />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export function Certificates() {
  return (
    <section id="certificates" className="py-32 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-16">
        <h2 className="text-4xl sm:text-5xl md:text-6xl text-white">CERTIFICATES</h2>
          <Award size={48} className="text-white" />
        </div>
        
        <div className="space-y-4">
          {certificates.map((cert, index) => (
            <CertificateProvider 
              key={index}
              provider={cert.provider}
              logo={cert.logo}
              subtitle={cert.subtitle}
              courses={cert.courses}
            />
          ))}
        </div>
      </div>
    </section>
  );
}