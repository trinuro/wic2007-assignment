import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const moduleTitles = {
  1: 'Social Media Safety',
  2: 'Phishing',
  3: 'Authentication'
};

const moduleDescriptions = {
  1: 'Learn how to protect yourself on social media platforms, handle friend requests safely, avoid online predators, and maintain your privacy in the digital world.',
  2: 'Learn to identify and protect yourself from phishing attempts, scams, and social engineering attacks that try to steal your personal information.',
  3: 'Learn to create and manage strong, unique passwords, understand why reuse is dangerous, and use password managers to safeguard your personal information.',
  4: 'Learn about the risk on teenager loved social media platforms: Facebook, Rednote, TikTok, Instagram, etc.',
  5: 'Learn about phishing 2.0',
  6: 'Learn about authentication'
};

export default function ModulePage() {
  const { moduleId } = useParams();
  const navigate = useNavigate();
  const title = moduleTitles[Number(moduleId)] || 'Course Not Found';
  const description = moduleDescriptions[Number(moduleId)] || '';

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <button
        className="back-btn-pixel"
        style={{
          position: 'absolute',
          top: 24,
          left: 24,
          zIndex: 10,
          minWidth: 100,
          background: '#0a192f',
          color: '#64ffda',
          fontWeight: 900,
          fontSize: '1.1rem',
          fontFamily: 'monospace, "Press Start 2P", "VT323", "Courier New", Courier',
          border: '4px solid #64ffda',
          borderRadius: 0,
          boxShadow: '0 0 0 4px #0a192f',
          padding: '1rem 2.5rem',
          cursor: 'pointer',
          letterSpacing: '2px',
          textTransform: 'uppercase',
          transition: 'transform 0.1s',
          outline: 'none',
        }}
        onMouseDown={e => { e.currentTarget.style.transform = 'translateY(2px)'; }}
        onMouseUp={e => { e.currentTarget.style.transform = 'translateY(0)'; }}
        onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; }}
        onClick={() => navigate(-1)}
      >
        BACK
      </button>
      <h1 style={{ textAlign: 'center', margin: '2rem 0 1.5rem 0' }}>{title}</h1>
      <div style={{
        maxWidth: 600,
        margin: '0 auto',
        background: 'rgba(20, 40, 80, 0.7)',
        borderRadius: 16,
        padding: '2rem',
        boxShadow: '0 4px 24px rgba(0,0,0,0.15)',
        textAlign: 'center',
        marginBottom: '2rem'
      }}>
        <p style={{ fontSize: '1.15rem', color: '#a8b2d1', marginBottom: '2rem' }}>{description}</p>
        <button
          className="courses-btn"
          onClick={() => navigate(`/courses/${moduleId}`)}
          style={{ padding: '0.8rem 2rem', borderRadius: 8, background: '#64ffda', color: '#0a192f', fontWeight: 600, border: 'none', cursor: 'pointer', fontSize: '1rem' }}
        >
          Course
        </button>
      </div>
      {moduleId === '1' && (
        <div style={{
          maxWidth: 600,
          margin: '0 auto',
          background: 'rgba(20, 40, 80, 0.7)',
          borderRadius: 16,
          padding: '2rem',
          boxShadow: '0 4px 24px rgba(0,0,0,0.15)',
          textAlign: 'center',
          marginBottom: '2rem'
        }}>
          <p style={{ fontSize: '1.15rem', color: '#a8b2d1', marginBottom: '2rem' }}>
            {moduleDescriptions[4]}
          </p>
          <button
            className="courses-btn"
            onClick={() => navigate('/courses/4')}
            style={{ padding: '0.8rem 2rem', borderRadius: 8, background: '#64ffda', color: '#0a192f', fontWeight: 600, border: 'none', cursor: 'pointer', fontSize: '1rem' }}
          >
            Course
          </button>
        </div>
      )}
      {moduleId === '2' && (
        <div style={{
          maxWidth: 600,
          margin: '0 auto',
          background: 'rgba(20, 40, 80, 0.7)',
          borderRadius: 16,
          padding: '2rem',
          boxShadow: '0 4px 24px rgba(0,0,0,0.15)',
          textAlign: 'center',
          marginBottom: '2rem'
        }}>
          <p style={{ fontSize: '1.15rem', color: '#a8b2d1', marginBottom: '2rem' }}>
            {moduleDescriptions[5]}
          </p>
        </div>
      )}
      {moduleId === '3' && (
        <div style={{
          maxWidth: 600,
          margin: '0 auto',
          background: 'rgba(20, 40, 80, 0.7)',
          borderRadius: 16,
          padding: '2rem',
          boxShadow: '0 4px 24px rgba(0,0,0,0.15)',
          textAlign: 'center',
          marginBottom: '2rem'
        }}>
          <p style={{ fontSize: '1.15rem', color: '#a8b2d1', marginBottom: '2rem' }}>
            {moduleDescriptions[6]}
          </p>
        </div>
      )}
    </div>
  );
} 