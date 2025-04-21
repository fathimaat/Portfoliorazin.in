import React, { useState } from 'react';
import { Award, ExternalLink } from 'lucide-react';

const certificates = [
  {
    provider: "STEYP",
    logo: "https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/assets/images/23-11-2021/steyp-logo.svg",
    subtitle: "Development Courses",
    courses: [
      {
        title: "Tech Schooling",
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
    <div
      className="rounded-2xl overflow-hidden transform transition-all duration-300 hover:scale-[1.02] border border-[#2C2C2C] shadow-md shadow-[#ffffff0d]"
      style={{
        background: 'linear-gradient(270deg, #1A1A1A 0%, #2A2A2A 100%)',
      }}
    >
      <div 
        className="p-6 flex items-center justify-between cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center gap-6">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center p-3">
            <img 
              src={logo} 
              alt={provider}
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <h3 className="text-white text-2xl font-bold">{provider}</h3>
            <p className="text-gray-400">{subtitle}</p>
          </div>
        </div>
        <Award className={`text-cyan-400 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} size={24} />
      </div>

      {isExpanded && (
        <div
          className="border-t border-[#3B3B3B] backdrop-blur-sm"
          style={{
            background: 'linear-gradient(270deg, #1A1A1A 0%, #2A2A2A 100%)',
          }}
        >
          {courses.map((course, index) => (
            <div key={index} className="p-6 space-y-4">
              <div className="flex justify-between items-center">
                <h4 className="text-cyan-400 text-xl font-medium">{course.title}</h4>
              </div>
              <div className="grid gap-3">
                {course.certificates.map((cert, certIndex) => (
                  <div 
                    key={certIndex} 
                    className="flex justify-between items-center py-3 px-4 bg-[#111111] rounded-lg hover:bg-[#1C1C1C] transition-colors"
                  >
                    <span className="text-gray-300">{cert.title}</span>
                    {cert.link && (
                      <a 
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        View
                        <ExternalLink size={16} />
                      </a>
                    )}
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
          <h2 className="text-6xl text-white">CERTIFICATES</h2>
          <Award size={48} className="text-cyan-400" />
        </div>
        
        <div className="space-y-6">
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