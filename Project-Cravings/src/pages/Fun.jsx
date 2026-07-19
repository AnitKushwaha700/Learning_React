import React, { useState, useEffect, useRef, useCallback } from 'react';
import './Fun.css'; // We'll define some crazy styles

const Fun = () => {
  // ==================== STATE FOR CHAOS ====================
  const [clickCount, setClickCount] = useState(0);
  const [isPartyMode, setIsPartyMode] = useState(false);
  const [rainbowText, setRainbowText] = useState('🌟 GRAND LEVEL UNPREDICTABLE SURPRISE 🌟');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [floatingEmojis, setFloatingEmojis] = useState([]);
  const [confettiVisible, setConfettiVisible] = useState(false);
  const [gravityFlip, setGravityFlip] = useState(false);
  const [colorShift, setColorShift] = useState(0);
  const [hiddenTreasure, setHiddenTreasure] = useState(false);
  const [timeWarp, setTimeWarp] = useState(false);
  const [audioContext, setAudioContext] = useState(null);
  const [isAudioInitialized, setIsAudioInitialized] = useState(false);
  
  const containerRef = useRef(null);
  const animationRef = useRef(null);
  const audioCtxRef = useRef(null);

  // ==================== AUDIO GENERATOR (SURPRISE SOUNDS) ====================
  const initAudio = useCallback(() => {
    if (!audioCtxRef.current && window.AudioContext) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      const ctx = new AudioCtx();
      audioCtxRef.current = ctx;
      setIsAudioInitialized(true);
    }
  }, []);

  const playRandomSound = useCallback(() => {
    if (!audioCtxRef.current) return;
    try {
      const ctx = audioCtxRef.current;
      const oscillator = ctx.createOscillator();
      const gainNode = ctx.createGain();
      oscillator.connect(gainNode);
      gainNode.connect(ctx.destination);
      
      // Random unpredictable sound: sine, square, sawtooth, triangle
      const waveTypes = ['sine', 'square', 'sawtooth', 'triangle'];
      oscillator.type = waveTypes[Math.floor(Math.random() * waveTypes.length)];
      oscillator.frequency.value = 200 + Math.random() * 800;
      gainNode.gain.value = 0.1;
      oscillator.start();
      gainNode.gain.exponentialRampToValueAtTime(0.00001, ctx.currentTime + 0.5);
      oscillator.stop(ctx.currentTime + 0.5);
    } catch (e) { console.log("Audio error", e); }
  }, []);

  // ==================== EFFECTS FOR GRAND LEVEL ====================
  
  // Auto color shifting
  useEffect(() => {
    const interval = setInterval(() => {
      setColorShift(prev => (prev + 1) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // Floating emoji generator
  const addFloatingEmoji = useCallback((x, y) => {
    const emojis = ['🎉', '✨', '💥', '⭐', '🌀', '🎈', '🔮', '🤯', '🦄', '🌈', '🍕', '🚀', '👾', '🎭', '💎'];
    const newEmoji = {
      id: Date.now() + Math.random(),
      emoji: emojis[Math.floor(Math.random() * emojis.length)],
      x: x || Math.random() * window.innerWidth,
      y: y || Math.random() * window.innerHeight,
      velocityY: gravityFlip ? -5 + Math.random() * 10 : 2 + Math.random() * 8,
      velocityX: (Math.random() - 0.5) * 4,
      life: 1,
    };
    setFloatingEmojis(prev => [...prev, newEmoji]);
    setTimeout(() => {
      setFloatingEmojis(prev => prev.filter(e => e.id !== newEmoji.id));
    }, 3000);
  }, [gravityFlip]);

  // Confetti burst
  const burstConfetti = useCallback(() => {
    setConfettiVisible(true);
    setTimeout(() => setConfettiVisible(false), 2000);
    for (let i = 0; i < 100; i++) {
      setTimeout(() => {
        addFloatingEmoji(Math.random() * window.innerWidth, Math.random() * window.innerHeight);
      }, i * 20);
    }
  }, [addFloatingEmoji]);

  // Handle click: massive unpredictable reactions
  const handleGrandClick = useCallback((e) => {
    if (!isAudioInitialized) initAudio();
    playRandomSound();
    
    const increment = Math.floor(Math.random() * 10) + 1;
    setClickCount(prev => prev + increment);
    
    // Random unpredictable effects
    const randomEffect = Math.floor(Math.random() * 8);
    switch(randomEffect) {
      case 0: setIsPartyMode(prev => !prev); break;
      case 1: setGravityFlip(prev => !prev); break;
      case 2: setTimeWarp(prev => !prev); break;
      case 3: burstConfetti(); break;
      case 4: setHiddenTreasure(true); setTimeout(() => setHiddenTreasure(false), 3000); break;
      case 5: setRainbowText(prev => prev.split('').reverse().join('')); break;
      case 6: 
        document.body.style.transform = `rotate(${Math.random() * 2 - 1}deg)`;
        setTimeout(() => document.body.style.transform = '', 200);
        break;
      default: break;
    }
    
    // Add floating emoji at click position
    if (e && e.clientX) {
      addFloatingEmoji(e.clientX, e.clientY);
    } else {
      addFloatingEmoji();
    }
    
    // Also update mouse trail effect
    setMousePosition({ x: e.clientX, y: e.clientY });
  }, [initAudio, isAudioInitialized, playRandomSound, burstConfetti, addFloatingEmoji]);
  
  // Mouse move for crazy trail
  const handleMouseMove = useCallback((e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
    if (Math.random() > 0.95) { // 5% chance to spawn emoji on move
      addFloatingEmoji(e.clientX, e.clientY);
    }
  }, [addFloatingEmoji]);
  
  // Update floating emojis with gravity/physics
  useEffect(() => {
    if (!containerRef.current) return;
    const updateEmojis = () => {
      setFloatingEmojis(prev => prev.map(emoji => ({
        ...emoji,
        y: emoji.y + emoji.velocityY,
        x: emoji.x + emoji.velocityX,
        velocityY: gravityFlip ? emoji.velocityY + 0.2 : emoji.velocityY - 0.2,
        life: emoji.life - 0.02,
      })).filter(e => e.life > 0 && e.y > -100 && e.y < window.innerHeight + 100));
      animationRef.current = requestAnimationFrame(updateEmojis);
    };
    animationRef.current = requestAnimationFrame(updateEmojis);
    return () => cancelAnimationFrame(animationRef.current);
  }, [gravityFlip]);
  
  // ==================== RENDER GRAND LEVEL UI ====================
  
  return (
    <div 
      ref={containerRef}
      className={`grand-container ${isPartyMode ? 'party-mode' : ''} ${timeWarp ? 'time-warp' : ''}`}
      onClick={handleGrandClick}
      onMouseMove={handleMouseMove}
      style={{
        '--color-shift': `${colorShift}deg`,
        '--bg-color': `hsl(${colorShift}, 80%, 50%)`,
      }}
    >
      {/* Background effects */}
      <div className="chaos-background"></div>
      <div className="scanlines"></div>
      
      {/* Top status bar */}
      <div className="status-bar">
        <div className="click-counter">
          💥 GRAND CLICKS: {clickCount} 💥
        </div>
        <div className="chaos-meter" style={{ width: `${Math.min(clickCount % 200, 100)}%` }}>
          CHAOS LEVEL {Math.floor(clickCount / 10)}%
        </div>
      </div>
      
      {/* Main title with unpredictable text */}
      <h1 className="grand-title" style={{ animation: 'shake 0.2s infinite, rainbow 0.5s linear infinite' }}>
        {rainbowText}
      </h1>
      
      {/* Giant interactive button */}
      <button className="grand-button" onClick={(e) => { e.stopPropagation(); handleGrandClick(e); }}>
        ⚡ UNLEASH THE UNPREDICTABLE ⚡
        <div className="button-sparkles">✨✨✨</div>
      </button>
      
      {/* Hidden treasure reveal */}
      {hiddenTreasure && (
        <div className="treasure-reveal">
          🎁 SECRET TREASURE FOUND! 🎁
          <div>⭐ YOU UNLOCKED: "THE MYSTERY OF THE GRAND LEVEL" ⭐</div>
          <img src="https://media.giphy.com/media/26BRuo6sLetdllPAQ/giphy.gif" alt="treasure" />
        </div>
      )}
      
      {/* Gravity flip warning */}
      {gravityFlip && (
        <div className="gravity-warning">
          ⚠️ GRAVITY FLIP ACTIVE — EVERYTHING IS UPSIDE DOWN ⚠️
        </div>
      )}
      
      {/* Time warp effect */}
      {timeWarp && (
        <div className="time-warp-effect">
          ⏰ TIME WARP — THE FUTURE IS NOW ⏰
        </div>
      )}
      
      {/* Floating emojis */}
      {floatingEmojis.map(emoji => (
        <div
          key={emoji.id}
          className="floating-emoji"
          style={{
            left: emoji.x,
            top: emoji.y,
            opacity: emoji.life,
            transform: `scale(${emoji.life}) rotate(${emoji.life * 360}deg)`,
            position: 'fixed',
            pointerEvents: 'none',
            zIndex: 10000,
            fontSize: `${30 + (1 - emoji.life) * 40}px`,
          }}
        >
          {emoji.emoji}
        </div>
      ))}
      
      {/* Mouse trail effect */}
      <div 
        className="mouse-trail"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          opacity: 0.8,
        }}
      />
      
      {/* Confetti canvas */}
      {confettiVisible && (
        <canvas className="confetti-canvas" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 9999 }} />
      )}
      
      {/* Interactive sound init */}
      {!isAudioInitialized && (
        <div className="audio-init-overlay" onClick={(e) => { e.stopPropagation(); initAudio(); }}>
          🎵 Click anywhere to initialize SURPRISE SOUNDS 🎵
        </div>
      )}
      
      {/* Crazy additional elements */}
      <div className="random-effects">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="random-orb" style={{ '--i': i, '--delay': `${i * 2}s` }} />
        ))}
      </div>
      
      <div className="footer-message">
        🌀 EVERY CLICK IS A NEW SURPRISE — THERE ARE OVER 1,000,000 POSSIBLE REACTIONS 🌀
      </div>
    </div>
  );
};

export default Fun;