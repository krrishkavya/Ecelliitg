import React, { useState, useEffect, useRef } from 'react';
import img1 from './weRDng1.png';
import img2 from './weRDng2.png';
import img3 from './weRDng3.png';

const ECellWebsite = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef(null);
  const isScrolling = useRef(false);

  const styles = {
    mainContainer: {
      height: '100vh',
      width: '100%',
      color: 'white',
      overflow: 'hidden',
      position: 'relative',
      backgroundColor: '#0F0F0F',
    },
    slideContainer: {
      transition: 'transform 1s ease-in-out',
      transform: `translateY(-${currentSlide * 100}vh)`,
    },
    slide: {
      height: '90vh',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    titleSlide: {
      fontSize: '5rem',
      fontWeight: '300',
      letterSpacing: '0.2em',
      textAlign: 'center',
    },
    titleItalic: {
      fontStyle: 'italic',
      fontWeight: '300',
    },
    contentWrapper: {
      maxWidth: '80rem',
      margin: '0 auto',
      padding: '0 2rem',
    },
    header: {
      marginBottom: '3rem',
    },
    headerTitle: {
      fontSize: '2.5rem',
      fontWeight: '300',
      letterSpacing: '0.1em',
      marginBottom: '0.75rem',
      textAlign: 'left',
    },
    headerSubtitle: {
      fontSize: '1.875rem',
      fontWeight: '300',
      fontStyle: 'italic',
      letterSpacing: '0.05em',
      color: '#9CA3AF',
      textAlign: 'left',
    },
    descriptionWrapper: {
      display: 'flex',
      justifyContent: 'flex-end',
      marginBottom: '3rem',
      paddingRight: '4rem',
    },
    description: {
      maxWidth: '28rem',
      fontSize: '0.875rem',
      lineHeight: '1.625',
      color: '#9CA3AF',
      textAlign: 'right',
    },
    imageGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '1.25rem',
      marginTop: '2rem',
    },
    imageContainer: {
      aspectRatio: '16/9',
      backgroundColor: '#1F2937',
      borderRadius: '0.25rem',
      overflow: 'hidden',
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
    liveNowSection: {
      textAlign: 'center',
      marginBottom: '2.5rem',
      marginTop: '0',
    },
    liveNowLabel: {
      color: '#EF4444',
      fontSize: '0.75rem',
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      fontWeight: '600',
      marginBottom: '1rem',
      textShadow: '0 0 10px rgba(239, 68, 68, 0.8), 0 0 20px rgba(239, 68, 68, 0.5), 0 0 30px rgba(239, 68, 68, 0.3)',
      animation: 'glow 2s ease-in-out infinite alternate',
    },
    liveNowTitle: {
      fontSize: '1.875rem',
      fontWeight: '300',
      letterSpacing: '0.1em',
    },
    cardsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '2.5rem',
      marginTop: '1.5rem',
      maxWidth: '46rem',
      margin: '1.5rem auto 0',
      paddingBottom: '2rem',
    },
    card: {
      backgroundColor: 'rgba(31, 41, 55, 0.4)',
      border: '0.05px solid rgba(220, 220, 220, 0.23)',
      boxShadow: '0 6px 28.3px 11px rgba(0, 0, 0, 0.06), 0 2px 3px 0 rgba(0, 0, 0, 0.30)',
      backdropFilter: 'blur(90px)',
      borderRadius: '1.75rem',
      padding: '1.5rem 1.25rem',
      position: 'relative',
      overflow: 'hidden',
      transition: 'border-color 0.3s',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      minHeight: '300px',
      maxHeight: '330px',
    },
    cardHeader: {
      marginBottom: '2rem',
    },
    cardTitleWrapper: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.25rem',
      marginBottom: '1rem',
    },
    cardTitleWrapperDisrupt: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
      marginBottom: '1rem',
    },
    udgamLogo: {
      maxWidth: '100%',
      height: 'auto',
    },
    dotsContainer: {
      display: 'flex',
      gap: '0.25rem',
      marginLeft: '0.5rem',
    },
    dot: {
      width: '0.75rem',
      height: '0.75rem',
      borderRadius: '50%',
      backgroundColor: '#4B5563',
    },
    separator: {
      width: '100%',
      height: '1px',
      backgroundColor: '#374151',
    },
    cardDescription: {
      color: '#9CA3AF',
      fontSize: '0.75rem',
      lineHeight: '1.625',
      textAlign: 'center',
      marginBottom: '2rem',
      position: 'relative',
      zIndex: 10,
    },
    buttonContainer: {
      display: 'flex',
      gap: '0.75rem',
      justifyContent: 'center',
      position: 'relative',
      zIndex: 10,
    },
    buttonPrimary: {
      padding: '0.5rem 1.5rem',
      backgroundColor: '#7C3AED',
      borderRadius: '9999px',
      fontSize: '0.75rem',
      fontWeight: '500',
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      border: 'none',
      color: 'white',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    },
    buttonSecondary: {
      padding: '0.5rem 1.5rem',
      backgroundColor: 'white',
      color: 'black',
      borderRadius: '9999px',
      fontSize: '0.75rem',
      fontWeight: '500',
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      border: 'none',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    },
    disruptLogo: {
      width: '2rem',
      height: '2rem',
      flexShrink: 0,
      opacity: 0.66,
      background: "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"42\" height=\"45\" viewBox=\"0 0 42 45\" fill=\"none\"><path d=\"M21.9112 0H5.65625V10.1683C5.65625 13.8203 7.6281 21.554 16.6839 21.554C24.9904 21.554 27.5683 14.6796 27.4967 11.0276C27.5683 14.6796 30.5758 21.912 38.5959 21.912C30.6331 21.912 27.4967 30.2185 27.4967 34.0854C27.4967 30.2424 25.3341 22.5279 16.6839 22.4133C8.03363 22.2987 5.65625 29.5025 5.65625 33.5125V44.0389H21.9112C28.7856 44.0389 42.8208 37.9522 41.9615 21.912C41.1022 5.87185 28.0695 0 21.9112 0Z\" fill=\"%23C0C0C0\"/><path d=\"M4.3596 17.6875C4.44505 20.0149 6.35535 21.8823 8.73617 21.9659C6.35535 22.0494 4.44505 23.9168 4.3596 26.2442C4.27415 23.9168 2.38082 22.0494 0 21.9659C2.38082 21.8823 4.27415 20.0149 4.3596 17.6875Z\" fill=\"%23C6FC30\"/></svg>') rgba(23, 23, 23, 0.4) 50% / cover no-repeat",
    },
    disruptText: {
      color: '#C0C0C0',
      fontFamily: '"Prosto One", sans-serif',
      fontSize: '32px',
      fontWeight: 400,
      lineHeight: '100%',
      letterSpacing: '0.87px',
    },
  };

  const slides = [
    {
      id: 0,
      content: (
        <div style={styles.slide}>
          <h1 style={styles.titleSlide}>
            WHAT WE ARE <span style={styles.titleItalic}>DOING</span>
          </h1>
        </div>
      )
    },
    {
      id: 1,
      content: (
        <div style={{...styles.slide, padding: '3rem 2rem 3rem', alignItems: 'flex-start'}}>
          <div style={styles.contentWrapper}>
            <div style={styles.header}>
              <h3 style={styles.headerTitle}>ENTREPRENEURSHIP CELL</h3>
              <h4 style={styles.headerSubtitle}>IIT GUWAHATI</h4>
            </div>
            
            <div style={styles.descriptionWrapper}>
              <p style={styles.description}>
                We are a non-profit student run organisation where we strive and explore the constantly evolving world of Entrepreneurship and Startups out. In our quest to promote the spirit of entrepreneurship among the community.
              </p>
            </div>

            <div style={styles.imageGrid}>
              <div style={styles.imageContainer}>
                <img 
                  src={img1} 
                  alt="Team group photo" 
                  style={styles.image}
                />
              </div>
              <div style={styles.imageContainer}>
                <img 
                  src={img2}
                  alt="Event inauguration" 
                  style={styles.image}
                />
              </div>
              <div style={styles.imageContainer}>
                <img 
                  src={img3}
                  alt="Workshop session" 
                  style={styles.image}
                />
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 2,
      content: (
        <div style={{...styles.slide, padding: '2rem'}}>
          <div style={styles.contentWrapper}>
            <div style={styles.liveNowSection}>
              <p style={styles.liveNowLabel}>+ LIVE NOW</p>
              <h3 style={styles.liveNowTitle}>RIGHT NOW. RIGHT HERE.</h3>
            </div>

            <div style={styles.cardsGrid}>
              {/* UDGAM Card */}
              <div style={styles.card}>
                <div style={styles.cardHeader}>
                  <div style={styles.cardTitleWrapper}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="180" height="63" viewBox="0 0 225 79" fill="none" style={styles.udgamLogo}>
                      <path d="M21.6193 0.0691433V42.9504C21.6193 43.7695 20.9573 44.4306 20.1371 44.4306C19.3169 44.4306 18.6549 43.7695 18.6549 42.9504V0.0691433H0.374014V43.4883C0.374014 46.7595 3.02721 49.409 6.30294 49.409H39.9002V0.0691433H21.6193Z" fill="#C0C0C0"/>
                      <path d="M77.2031 0H43.6058V49.3399H77.2031C80.4788 49.3399 83.132 46.6903 83.132 43.4191V5.92079C83.132 2.64955 80.4788 0 77.2031 0ZM64.4707 42.9948C64.4707 43.8138 63.8086 44.475 62.9885 44.475C62.1683 44.475 61.5062 43.8138 61.5062 42.9948V6.48326C61.5062 5.66422 62.1683 5.00307 62.9885 5.00307C63.8086 5.00307 64.4707 5.66422 64.4707 6.48326V42.9948Z" fill="#C0C0C0"/>
                      <path d="M108.083 37.0741C108.083 39.5213 110.079 41.5147 112.53 41.5147C113.35 41.5147 114.012 42.1758 114.012 42.9949C114.012 43.8139 113.35 44.475 112.53 44.475C108.444 44.475 105.118 41.1545 105.118 37.0741V6.56721C105.118 5.7679 105.721 5.04754 106.522 5.00807C107.376 4.96366 108.083 5.64455 108.083 6.48826V17.343C108.083 20.6143 110.736 23.2638 114.012 23.2638H126.364V5.98993C126.364 2.7187 123.711 0.0691433 120.435 0.0691433H92.7665C89.4908 0.0691433 86.8376 2.7187 86.8376 5.98993V43.4883C86.8376 46.7595 89.4908 49.409 92.7665 49.409H120.435C123.711 49.409 126.364 46.7595 126.364 43.4883V26.2193H108.083V37.0741Z" fill="#C0C0C0"/>
                      <path d="M141.937 25.3015C141.626 24.517 142.031 23.6239 142.841 23.3525C143.602 23.096 144.427 23.54 144.724 24.2851L154.768 49.4237H169.596L151.325 3.80407C150.425 1.55417 148.246 0.0838393 145.821 0.0838393H135.998C132.723 0.0838393 130.069 2.73339 130.069 6.00463V43.5029C130.069 46.7742 132.723 49.4237 135.998 49.4237H151.577L141.942 25.3015H141.937Z" fill="#C0C0C0"/>
                      <path d="M171.117 7.27323C170.801 6.48872 171.206 5.59567 172.017 5.31936C172.777 5.0628 173.603 5.50686 173.899 6.24695L191.829 49.409L206.617 49.3992L189.107 7.28803C188.81 6.54299 189.102 5.65488 189.828 5.31936C190.604 4.95918 191.513 5.32923 191.829 6.11374L209.809 49.3992L224.626 49.3893L206.355 3.76962C205.456 1.51972 203.277 0.0493881 200.851 0.0493881H153.993L173.766 49.4189L188.632 49.409L171.112 7.26829L171.117 7.27323Z" fill="#C0C0C0"/>
                      <path d="M141.223 66.399C141.223 65.7389 141.759 65.2038 142.42 65.2038H223.803C224.464 65.2038 225 65.7389 225 66.399C225 67.059 224.464 67.5941 223.803 67.5941H142.42C141.759 67.5941 141.223 67.059 141.223 66.399Z" fill="#C0C0C0"/>
                      <path d="M0 66.399C0 65.7389 0.535831 65.2038 1.19681 65.2038H80.1864C80.8473 65.2038 81.3832 65.7389 81.3832 66.399C81.3832 67.059 80.8473 67.5941 80.1864 67.5941H1.19681C0.535832 67.5941 0 67.059 0 66.399Z" fill="#C0C0C0"/>
                      <path fillRule="evenodd" clipRule="evenodd" d="M98.8527 78.5377C105.581 78.5377 111.036 73.0905 111.036 66.3711C111.036 59.6516 105.581 54.2044 98.8527 54.2044C92.124 54.2044 86.6693 59.6516 86.6693 66.3711C86.6693 73.0905 92.124 78.5377 98.8527 78.5377ZM97.8282 67.4418L93.2472 70.459V73.1844H103.871V70.459H98.9003L97.6332 70.5565V70.459L98.6079 70.0698L100.128 69.0575C100.765 68.6293 101.317 68.227 101.785 67.8506C102.266 67.4742 102.656 67.0849 102.955 66.6826C103.267 66.2672 103.494 65.826 103.637 65.3588C103.793 64.8916 103.871 64.3531 103.871 63.7431C103.871 63.1072 103.748 62.5167 103.501 61.9716C103.254 61.4136 102.903 60.927 102.448 60.5116C101.993 60.0962 101.441 59.7719 100.791 59.5383C100.141 59.2916 99.4136 59.1685 98.6079 59.1685C97.9841 59.1685 97.4253 59.2398 96.9315 59.3826C96.4506 59.5124 96.0218 59.6875 95.6449 59.9083C95.281 60.1157 94.9626 60.3624 94.6897 60.648C94.4168 60.9334 94.1894 61.219 94.0075 61.5044C93.5786 62.1924 93.2927 62.9708 93.1497 63.8403H96.1907C96.2687 63.477 96.4052 63.1526 96.6001 62.867C96.769 62.6206 97.0095 62.3998 97.3214 62.2052C97.6332 61.9975 98.0621 61.8937 98.6079 61.8937C99.2967 61.8937 99.823 62.0754 100.187 62.4388C100.564 62.7893 100.752 63.2565 100.752 63.8403C100.752 64.1778 100.7 64.4893 100.596 64.7749C100.492 65.0603 100.323 65.3459 100.089 65.6313C99.8555 65.9039 99.5501 66.1893 99.1732 66.488C98.8093 66.7734 98.361 67.0913 97.8282 67.4418Z" fill="#C0C0C0"/>
                      <path fillRule="evenodd" clipRule="evenodd" d="M125.656 78.5377C132.385 78.5377 137.84 73.0905 137.84 66.3711C137.84 59.6516 132.385 54.2044 125.656 54.2044C118.927 54.2044 113.473 59.6516 113.473 66.3711C113.473 73.0905 118.927 78.5377 125.656 78.5377ZM123.604 73.3791C124.111 73.5089 124.683 73.5737 125.32 73.5737C126.177 73.5737 126.944 73.444 127.62 73.1844C128.309 72.9378 128.893 72.6004 129.374 72.1721C129.855 71.7439 130.225 71.2442 130.485 70.6732C130.745 70.0892 130.875 69.4663 130.875 68.8044C130.875 68.1425 130.745 67.5261 130.485 66.9551C130.238 66.3711 129.894 65.865 129.452 65.4367C129.01 65.0084 128.484 64.671 127.873 64.4244C127.262 64.1649 126.606 64.0351 125.904 64.0351C125.437 64.0351 125.027 64.087 124.676 64.1908C124.338 64.2946 124.059 64.405 123.838 64.5218C123.578 64.6645 123.357 64.8267 123.175 65.0084H123.078L123.273 62.2831H129.706V59.5578H120.739L120.154 67.5391H123.175C123.279 67.3833 123.429 67.2406 123.624 67.1108C123.793 67.007 124.014 66.9097 124.286 66.8188C124.559 66.715 124.904 66.6631 125.32 66.6631C126.099 66.6631 126.697 66.8642 127.113 67.2665C127.542 67.6559 127.756 68.1685 127.756 68.8044C127.756 69.3884 127.542 69.8751 127.113 70.2644C126.697 70.6537 126.099 70.8484 125.32 70.8484C124.748 70.8484 124.286 70.7641 123.936 70.5953C123.598 70.4266 123.338 70.2385 123.156 70.0308C122.935 69.7972 122.779 69.5182 122.688 69.1937H119.667C119.822 70.0243 120.128 70.7576 120.583 71.3935C120.778 71.666 121.012 71.9321 121.284 72.1916C121.57 72.4512 121.902 72.6848 122.279 72.8924C122.669 73.1001 123.11 73.2623 123.604 73.3791Z" fill="#C0C0C0"/>
                    </svg>
                    <div style={styles.dotsContainer}>
                      <div style={styles.dot}></div>
                      <div style={styles.dot}></div>
                    </div>
                  </div>
                  <div style={styles.separator}></div>
                </div>
                
                <p style={styles.cardDescription}>
                  UDGAM is the flagship E-Summit of E-Cell, fostering entrepreneurial spirit across the nation with thousands of attendees and beyond.
                </p>

                <div style={styles.buttonContainer}>
                  <button 
                    style={styles.buttonPrimary}
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#6D28D9'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = '#7C3AED'}
                  >
                    Register Now
                  </button>
                  <button 
                    style={styles.buttonSecondary}
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#E5E7EB'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = 'white'}
                  >
                    Visit Website
                  </button>
                </div>
              </div>

              {/* DISRUPT Card */}
              <div style={styles.card}>
                <div style={styles.cardHeader}>
                  <div style={styles.cardTitleWrapperDisrupt}>
                    <div style={styles.disruptLogo}></div>
                    <span style={styles.disruptText}>DISRUPT</span>
                  </div>
                  <div style={styles.separator}></div>
                </div>
                
                <p style={styles.cardDescription}>
                  DISRUPT is the flagship Business Summit of E-Cell, fostering entrepreneurial spirit across Northeast India and beyond.
                </p>

                <div style={styles.buttonContainer}>
                  <button 
                    style={styles.buttonPrimary}
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#6D28D9'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = '#7C3AED'}
                  >
                    Register Now
                  </button>
                  <button 
                    style={styles.buttonSecondary}
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#E5E7EB'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = 'white'}
                  >
                    Visit Website
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  const goToPage = (index) => {
    if (index >= 0 && index < slides.length && !isScrolling.current) {
      isScrolling.current = true;
      setCurrentSlide(index);
      setTimeout(() => {
        isScrolling.current = false;
      }, 1000);
    }
  };

  const nextPage = () => goToPage(currentSlide + 1);
  const prevPage = () => goToPage(currentSlide - 1);

  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault();
      
      if (isScrolling.current) return;
      
      isScrolling.current = true;
      
      if (e.deltaY > 0 && currentSlide < slides.length - 1) {
        setCurrentSlide(prev => prev + 1);
      } else if (e.deltaY < 0 && currentSlide > 0) {
        setCurrentSlide(prev => prev - 1);
      }
      
      setTimeout(() => {
        isScrolling.current = false;
      }, 1000);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      if (container) {
        container.removeEventListener('wheel', handleWheel);
      }
    };
  }, [currentSlide, slides.length]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowDown' && currentSlide < slides.length - 1) {
        setCurrentSlide(prev => prev + 1);
      } else if (e.key === 'ArrowUp' && currentSlide > 0) {
        setCurrentSlide(prev => prev - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide, slides.length]);

  return (
    <div ref={containerRef} style={styles.mainContainer}>
      <div style={styles.slideContainer}>
        {slides.map((slide) => (
          <div key={slide.id}>
            {slide.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ECellWebsite;