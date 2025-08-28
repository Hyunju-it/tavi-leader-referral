
import { useRef, useEffect, memo } from 'react';

const StarryBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let stars = [];
    let meteors = [];
    let pulsingStars = [];
    const numStars = 150;
    const numMeteors = 3;
    const numPulsingStars = 20;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Regular twinkling stars
      stars = Array.from({ length: numStars }).map(() => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5 + 0.5,
        dx: (Math.random() - 0.5) * 0.3,
        dy: (Math.random() - 0.5) * 0.3,
        twinkle: Math.random() * Math.PI * 2,
        twinkleSpeed: Math.random() * 0.02 + 0.01,
        baseOpacity: Math.random() * 0.8 + 0.2,
      }));

      // Shooting stars/meteors
      meteors = Array.from({ length: numMeteors }).map(() => ({
        x: -50,
        y: Math.random() * canvas.height,
        length: Math.random() * 80 + 20,
        speed: Math.random() * 3 + 2,
        angle: Math.random() * Math.PI / 6 - Math.PI / 12, // slight downward angle
        opacity: 0,
        life: 0,
        maxLife: Math.random() * 300 + 200,
        respawnDelay: Math.random() * 1000 + 2000,
      }));

      // Large pulsing stars
      pulsingStars = Array.from({ length: numPulsingStars }).map(() => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        baseRadius: Math.random() * 2 + 1,
        pulsePhase: Math.random() * Math.PI * 2,
        pulseSpeed: Math.random() * 0.03 + 0.01,
        color: ['#60a5fa', '#34d399', '#fbbf24', '#f87171', '#a78bfa'][Math.floor(Math.random() * 5)],
        opacity: Math.random() * 0.6 + 0.4,
      }));
    };

    const drawStar = (x, y, radius, opacity = 1) => {
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius * 3);
      gradient.addColorStop(0, `rgba(255, 255, 255, ${opacity})`);
      gradient.addColorStop(0.5, `rgba(255, 255, 255, ${opacity * 0.5})`);
      gradient.addColorStop(1, `rgba(255, 255, 255, 0)`);
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(x, y, radius * 3, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fill();
    };

    const drawMeteor = (meteor) => {
      const endX = meteor.x - Math.cos(meteor.angle) * meteor.length;
      const endY = meteor.y - Math.sin(meteor.angle) * meteor.length;
      
      const gradient = ctx.createLinearGradient(meteor.x, meteor.y, endX, endY);
      gradient.addColorStop(0, `rgba(255, 255, 255, ${meteor.opacity})`);
      gradient.addColorStop(0.7, `rgba(135, 206, 250, ${meteor.opacity * 0.5})`);
      gradient.addColorStop(1, `rgba(255, 255, 255, 0)`);
      
      ctx.strokeStyle = gradient;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(meteor.x, meteor.y);
      ctx.lineTo(endX, endY);
      ctx.stroke();
      
      // Add bright head
      drawStar(meteor.x, meteor.y, 2, meteor.opacity);
    };

    const drawPulsingStar = (star, time) => {
      const pulse = Math.sin(time * star.pulseSpeed + star.pulsePhase) * 0.5 + 0.5;
      const radius = star.baseRadius * (1 + pulse * 0.5);
      
      const gradient = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, radius * 4);
      gradient.addColorStop(0, `${star.color}${Math.floor(star.opacity * pulse * 255).toString(16).padStart(2, '0')}`);
      gradient.addColorStop(0.5, `${star.color}${Math.floor(star.opacity * pulse * 0.3 * 255).toString(16).padStart(2, '0')}`);
      gradient.addColorStop(1, `${star.color}00`);
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(star.x, star.y, radius * 4, 0, Math.PI * 2);
      ctx.fill();
    };

    let time = 0;
    const draw = () => {
      time++;
      
      // Create a subtle dark gradient background
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, '#0a0a0f');
      gradient.addColorStop(1, '#1a1a2e');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw regular twinkling stars
      stars.forEach((star) => {
        star.twinkle += star.twinkleSpeed;
        const twinkleOpacity = Math.sin(star.twinkle) * 0.3 + 0.7;
        const opacity = star.baseOpacity * twinkleOpacity;
        
        drawStar(star.x, star.y, star.radius, opacity);

        star.x += star.dx;
        star.y += star.dy;

        if (star.x < 0 || star.x > canvas.width) star.dx *= -1;
        if (star.y < 0 || star.y > canvas.height) star.dy *= -1;
      });

      // Draw pulsing colored stars
      pulsingStars.forEach((star) => {
        drawPulsingStar(star, time);
      });

      // Draw and update meteors
      meteors.forEach((meteor) => {
        if (meteor.life < meteor.maxLife) {
          meteor.life++;
          meteor.x += Math.cos(meteor.angle) * meteor.speed;
          meteor.y += Math.sin(meteor.angle) * meteor.speed;
          
          // Fade in and out
          if (meteor.life < meteor.maxLife * 0.1) {
            meteor.opacity = meteor.life / (meteor.maxLife * 0.1);
          } else if (meteor.life > meteor.maxLife * 0.8) {
            meteor.opacity = 1 - (meteor.life - meteor.maxLife * 0.8) / (meteor.maxLife * 0.2);
          } else {
            meteor.opacity = 1;
          }
          
          drawMeteor(meteor);
          
          if (meteor.x > canvas.width + 100 || meteor.y > canvas.height + 100) {
            meteor.life = meteor.maxLife;
          }
        } else if (meteor.respawnDelay <= 0) {
          // Reset meteor
          meteor.x = -50;
          meteor.y = Math.random() * canvas.height;
          meteor.life = 0;
          meteor.respawnDelay = Math.random() * 2000 + 3000;
          meteor.angle = Math.random() * Math.PI / 6 - Math.PI / 12;
          meteor.speed = Math.random() * 3 + 2;
        } else {
          meteor.respawnDelay -= 16; // ~60fps
        }
      });

      requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 -z-10" />;
};

export default memo(StarryBackground);
