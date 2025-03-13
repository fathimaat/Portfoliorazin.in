import React, { useState } from 'react';
import { Mail, Linkedin } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionStatus('Submitting...');

    try {
      const response = await fetch('https://formspree.io/f/xkggnvwo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmissionStatus('Thank you for your message! I will get back to you soon.');
        setFormData({ name: '', email: '', message: '' }); // Reset form fields
      } else {
        setSubmissionStatus('Something went wrong, please try again.');
      }
    } catch (error) {
      setSubmissionStatus('Error: ' + error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 px-6 bg-black text-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-6xl mb-8">CONTACT</h2>
        <p className="text-3xl mb-16">
          Interested in working together?
          <br />
          Let's connect via email or LinkedIn
        </p>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Name"
              className="w-full p-4 bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email"
              className="w-full p-4 bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Message"
            rows={6}
            className="w-full p-4 bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-white"
          />
          <div className="flex justify-between items-center">
            <div className="flex gap-6">
              <a href="https://linkedin.com/in/razinrayees" target="_blank" rel="noopener noreferrer">
                <Linkedin size={24} />
              </a>
              <a href="mailto:razinrayees@outlook.com">
                <Mail size={24} />
              </a>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-12 py-4 bg-cyan-500 text-white hover:bg-cyan-600 transition-colors"
            >
              {isSubmitting ? 'Sending...' : 'SEND'}
            </button>
          </div>
        </form>
        {submissionStatus && <p className="mt-4 text-lg">{submissionStatus}</p>}
      </div>
    </section>
  );
}
