import React, { useState } from 'react';
import './faq.css';

// Individual FAQ Item Component
const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="faq-item">
      <button 
        className={`faq-question ${isOpen ? 'active' : ''}`}
        onClick={toggleAccordion}
        aria-expanded={isOpen}
      >
        {question}
        <span className="faq-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 16 16">
            <path d={isOpen 
              ? "M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z" 
              : "M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
            }/>
          </svg>
        </span>
      </button>
      {isOpen && (
        <div 
          className="faq-answer open"
        >
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

// Main FAQ Component
const FAQ = () => {
  const faqData = [
    {
      question: "What is GDG?",
      answer: "Google Developer Groups (GDG) are community groups for college and university students who are interested in Google developer technologies. Students from all undergraduate or graduate programs with an interest in growing as a developer are welcome. By joining a GDG, students grow their knowledge in a peer-to-peer learning environment and build solutions for local businesses and their community."
    },
    {
      question: "How can you become a part of GDG?",
      answer: "We conduct an annual team recruitment process. The details of recruitment are posted online a few weeks prior. It's a two step process involving form filling and personal interview. Students scoring both rounds are selected to be the part of the core team."
    },
    {
      question: "What does a GDG Lead do?",
      answer: "A GDG Lead fills a lot of shoes. He works with the university to build the club, recruit the core team, hold workshops, build projects, collaborate with local partners."
    },
    {
      question: "How is DSC related to Google?",
      answer: "A GDG Lead fills a lot of shoes. He works with the university to build the club, recruit the core team, hold workshops, build projects, collaborate with local partners."
    },
    {
      question: "How to reach us?",
      answer: "Mail us at \"dev.nrec@gmail.com\""
    }
  ];

  return (
    <section className="faq-section">
      <div className="faq-container">
        <h2 className="section-title">FAQs</h2>
        <div className="faq-list">
          {faqData.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;