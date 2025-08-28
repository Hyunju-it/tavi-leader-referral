
import { useRef, useEffect, memo, useState } from 'react';

const StarryBackground = ({ currentCommand }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let stars = [];
    let meteors = [];
    let pulsingStars = [];
    let commandEffects = [];
    const numStars = 150;
    const numMeteors = 3;
    const numPulsingStars = 20;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Regular twinkling stars - more subtle
      stars = Array.from({ length: numStars }).map(() => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1 + 0.3,
        dx: (Math.random() - 0.5) * 0.1,
        dy: (Math.random() - 0.5) * 0.1,
        twinkle: Math.random() * Math.PI * 2,
        twinkleSpeed: Math.random() * 0.015 + 0.005,
        baseOpacity: Math.random() * 0.4 + 0.1,
      }));

      // Shooting stars/meteors - more subtle
      meteors = Array.from({ length: numMeteors }).map(() => ({
        x: -50,
        y: Math.random() * canvas.height,
        length: Math.random() * 60 + 15,
        speed: Math.random() * 2 + 1.5,
        angle: Math.random() * Math.PI / 8 - Math.PI / 16, // slight downward angle
        opacity: 0,
        life: 0,
        maxLife: Math.random() * 250 + 150,
        respawnDelay: Math.random() * 2000 + 4000,
      }));

      // Large pulsing stars - more refined
      pulsingStars = Array.from({ length: numPulsingStars }).map(() => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        baseRadius: Math.random() * 1.5 + 0.8,
        pulsePhase: Math.random() * Math.PI * 2,
        pulseSpeed: Math.random() * 0.02 + 0.008,
        color: ['#60a5fa', '#34d399', '#fbbf24', '#f87171', '#a78bfa'][Math.floor(Math.random() * 5)],
        opacity: Math.random() * 0.3 + 0.2,
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
      gradient.addColorStop(0, `rgba(255, 255, 255, ${meteor.opacity * 0.6})`);
      gradient.addColorStop(0.7, `rgba(135, 206, 250, ${meteor.opacity * 0.3})`);
      gradient.addColorStop(1, `rgba(255, 255, 255, 0)`);
      
      ctx.strokeStyle = gradient;
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(meteor.x, meteor.y);
      ctx.lineTo(endX, endY);
      ctx.stroke();
      
      // Add subtle head
      drawStar(meteor.x, meteor.y, 1.5, meteor.opacity * 0.7);
    };

    const drawPulsingStar = (star, time) => {
      const pulse = Math.sin(time * star.pulseSpeed + star.pulsePhase) * 0.5 + 0.5;
      const radius = star.baseRadius * (1 + pulse * 0.3);
      
      const gradient = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, radius * 3);
      gradient.addColorStop(0, `${star.color}${Math.floor(star.opacity * pulse * 255).toString(16).padStart(2, '0')}`);
      gradient.addColorStop(0.6, `${star.color}${Math.floor(star.opacity * pulse * 0.2 * 255).toString(16).padStart(2, '0')}`);
      gradient.addColorStop(1, `${star.color}00`);
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(star.x, star.y, radius * 3, 0, Math.PI * 2);
      ctx.fill();
    };

    const createCommandEffect = (command) => {
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      
      switch (command) {
        case 'help':
          // 섬세한 도움말 효과 - 얇은 선으로 정보의 흐름 표현
          return [
            ...Array.from({ length: 3 }).map((_, i) => ({
              type: 'info_ripple',
              x: 120,
              y: centerY - 50 + i * 50,
              radius: 0,
              maxRadius: 80,
              life: 0,
              maxLife: 180,
              delay: i * 25,
              color: '#60a5fa',
              opacity: 0.4,
              strokeWidth: 1,
            })),
            ...Array.from({ length: 3 }).map((_, i) => ({
              type: 'info_ripple',
              x: canvas.width - 120,
              y: centerY - 50 + i * 50,
              radius: 0,
              maxRadius: 80,
              life: 0,
              maxLife: 180,
              delay: i * 25 + 60,
              color: '#93c5fd',
              opacity: 0.3,
              strokeWidth: 1,
            }))
          ];
        
        case 'about':
          // 우아한 소개 효과 - 개인 스토리의 점진적 펼쳐짐
          return Array.from({ length: 8 }).map((_, i) => ({
            type: 'story_dot',
            x: 150 + i * (canvas.width - 300) / 7,
            y: 100 + Math.sin(i * 0.5) * 60,
            life: 0,
            maxLife: 150,
            delay: i * 30,
            size: 4,
            pulseSpeed: 0.04,
            color: '#fbbf24',
            opacity: 0.5,
          }));
        
        case 'impact':
          // 절제된 임팩트 효과 - 성과의 단계적 표현
          return [
            ...Array.from({ length: 4 }).map((_, i) => ({
              type: 'achievement_pulse',
              x: 100 + i * (canvas.width - 200) / 3,
              y: centerY,
              radius: 0,
              maxRadius: 60,
              life: 0,
              maxLife: 120,
              delay: i * 40,
              color: '#34d399',
              opacity: 0.4,
              strokeWidth: 1.5,
            })),
            ...Array.from({ length: 8 }).map((_, i) => ({
              type: 'micro_spark',
              x: 100 + i * (canvas.width - 200) / 7,
              y: centerY + (Math.random() - 0.5) * 100,
              life: 0,
              maxLife: 100,
              delay: i * 15 + 80,
              size: 2,
              color: '#10b981',
              opacity: 0.6,
            }))
          ];
        
        case 'achievements':
          // 세련된 성취 표시 - 작은 별들의 조용한 반짝임
          return Array.from({ length: 6 }).map((_, i) => ({
            type: 'subtle_star',
            x: 120 + (i % 3) * (canvas.width - 240) / 2,
            y: centerY - 80 + Math.floor(i / 3) * 160,
            life: 0,
            maxLife: 160,
            delay: i * 25,
            size: 6,
            rotation: 0,
            rotationSpeed: 0.03,
            pulseSpeed: 0.06,
            color: '#f59e0b',
            opacity: 0.5,
          }));
        
        case 'recommend':
          // 신뢰성 있는 추천 효과 - 안정적인 확산
          return Array.from({ length: 4 }).map((_, i) => ({
            type: 'trust_wave',
            x: [150, canvas.width - 150, 150, canvas.width - 150][i],
            y: [centerY - 100, centerY - 100, centerY + 100, centerY + 100][i],
            radius: 0,
            maxRadius: 70,
            life: 0,
            maxLife: 140,
            delay: i * 35,
            color: '#34d399',
            opacity: 0.3,
            strokeWidth: 1,
          }));
        
        case 'portfolio':
          // 전문성 있는 포트폴리오 효과 - 코드라인의 미학
          return [
            ...Array.from({ length: 6 }).map((_, i) => ({
              type: 'code_line',
              x: 80,
              y: centerY - 75 + i * 25,
              width: 0,
              maxWidth: 120,
              life: 0,
              maxLife: 100,
              delay: i * 12,
              color: '#22c55e',
              opacity: 0.5,
              strokeWidth: 1,
            })),
            ...Array.from({ length: 6 }).map((_, i) => ({
              type: 'code_line',
              x: canvas.width - 200,
              y: centerY - 75 + i * 25,
              width: 0,
              maxWidth: 120,
              life: 0,
              maxLife: 100,
              delay: i * 12 + 40,
              color: '#10b981',
              opacity: 0.4,
              strokeWidth: 1,
            }))
          ];
        
        case 'epilogue':
          // 우아한 마무리 - 조용한 감사의 표현
          return [
            ...Array.from({ length: 5 }).map((_, i) => ({
              type: 'gentle_bloom',
              x: centerX + Math.cos(i * (2 * Math.PI) / 5) * 150,
              y: centerY + Math.sin(i * (2 * Math.PI) / 5) * 150,
              radius: 0,
              maxRadius: 40,
              life: 0,
              maxLife: 180,
              delay: i * 30,
              color: '#ffd700',
              opacity: 0.4,
              strokeWidth: 1,
            })),
            ...Array.from({ length: 12 }).map((_, i) => ({
              type: 'farewell_twinkle',
              x: Math.random() * canvas.width,
              y: Math.random() * canvas.height,
              life: 0,
              maxLife: 200,
              delay: Math.random() * 120,
              size: Math.random() * 3 + 2,
              twinkle: 0,
              twinkleSpeed: 0.08,
              color: '#fbbf24',
              opacity: 0.3,
            }))
          ];
        
        default:
          return [];
      }
    };

    const drawCommandEffect = (effect, time) => {
      if (effect.delay && effect.life < effect.delay) return;
      
      const progress = effect.life / effect.maxLife;
      const baseOpacity = effect.opacity || 0.6;
      const opacity = Math.sin(progress * Math.PI) * baseOpacity;
      
      switch (effect.type) {
        case 'info_ripple':
          const rippleProgress = (effect.life - (effect.delay || 0)) / (effect.maxLife - (effect.delay || 0));
          effect.radius = effect.maxRadius * rippleProgress;
          
          ctx.save();
          ctx.strokeStyle = `${effect.color}${Math.floor(opacity * 255).toString(16).padStart(2, '0')}`;
          ctx.lineWidth = effect.strokeWidth;
          ctx.shadowBlur = 5;
          ctx.shadowColor = effect.color;
          ctx.beginPath();
          ctx.arc(effect.x, effect.y, effect.radius, 0, Math.PI * 2);
          ctx.stroke();
          ctx.restore();
          break;
        
        case 'story_dot':
          effect.pulse = (effect.pulse || 0) + effect.pulseSpeed;
          const dotScale = 1 + Math.sin(effect.pulse) * 0.2;
          
          ctx.save();
          ctx.beginPath();
          ctx.arc(effect.x, effect.y, effect.size * dotScale, 0, Math.PI * 2);
          ctx.fillStyle = `${effect.color}${Math.floor(opacity * 255).toString(16).padStart(2, '0')}`;
          ctx.shadowBlur = 8;
          ctx.shadowColor = effect.color;
          ctx.fill();
          ctx.restore();
          break;
        
        case 'achievement_pulse':
          const pulseProgress = (effect.life - (effect.delay || 0)) / (effect.maxLife - (effect.delay || 0));
          effect.radius = effect.maxRadius * pulseProgress;
          
          ctx.save();
          ctx.strokeStyle = `${effect.color}${Math.floor(opacity * 255).toString(16).padStart(2, '0')}`;
          ctx.lineWidth = effect.strokeWidth;
          ctx.shadowBlur = 6;
          ctx.shadowColor = effect.color;
          ctx.beginPath();
          ctx.arc(effect.x, effect.y, effect.radius, 0, Math.PI * 2);
          ctx.stroke();
          ctx.restore();
          break;
        
        case 'micro_spark':
          ctx.save();
          ctx.beginPath();
          ctx.arc(effect.x, effect.y, effect.size, 0, Math.PI * 2);
          ctx.fillStyle = `${effect.color}${Math.floor(opacity * 255).toString(16).padStart(2, '0')}`;
          ctx.shadowBlur = 4;
          ctx.shadowColor = effect.color;
          ctx.fill();
          ctx.restore();
          break;
        
        case 'subtle_star':
          effect.rotation += effect.rotationSpeed;
          effect.pulse = (effect.pulse || 0) + effect.pulseSpeed;
          const starScale = 1 + Math.sin(effect.pulse) * 0.15;
          
          ctx.save();
          ctx.translate(effect.x, effect.y);
          ctx.rotate(effect.rotation);
          ctx.scale(starScale, starScale);
          ctx.fillStyle = `${effect.color}${Math.floor(opacity * 255).toString(16).padStart(2, '0')}`;
          ctx.shadowBlur = 8;
          ctx.shadowColor = effect.color;
          
          // Draw subtle 5-pointed star
          ctx.beginPath();
          for (let i = 0; i < 5; i++) {
            const angle = (i * 2 * Math.PI) / 5 - Math.PI / 2;
            const outerX = Math.cos(angle) * effect.size;
            const outerY = Math.sin(angle) * effect.size;
            const innerAngle = angle + Math.PI / 5;
            const innerX = Math.cos(innerAngle) * (effect.size * 0.4);
            const innerY = Math.sin(innerAngle) * (effect.size * 0.4);
            
            if (i === 0) {
              ctx.moveTo(outerX, outerY);
            } else {
              ctx.lineTo(outerX, outerY);
            }
            ctx.lineTo(innerX, innerY);
          }
          ctx.closePath();
          ctx.fill();
          ctx.restore();
          break;
        
        case 'trust_wave':
          const trustProgress = (effect.life - (effect.delay || 0)) / (effect.maxLife - (effect.delay || 0));
          effect.radius = effect.maxRadius * trustProgress;
          
          ctx.save();
          ctx.strokeStyle = `${effect.color}${Math.floor(opacity * 255).toString(16).padStart(2, '0')}`;
          ctx.lineWidth = effect.strokeWidth;
          ctx.shadowBlur = 4;
          ctx.shadowColor = effect.color;
          ctx.beginPath();
          ctx.arc(effect.x, effect.y, effect.radius, 0, Math.PI * 2);
          ctx.stroke();
          ctx.restore();
          break;
        
        case 'code_line':
          const lineProgress = (effect.life - (effect.delay || 0)) / (effect.maxLife - (effect.delay || 0));
          effect.width = effect.maxWidth * lineProgress;
          
          ctx.save();
          ctx.strokeStyle = `${effect.color}${Math.floor(opacity * 255).toString(16).padStart(2, '0')}`;
          ctx.lineWidth = effect.strokeWidth;
          ctx.shadowBlur = 3;
          ctx.shadowColor = effect.color;
          ctx.beginPath();
          ctx.moveTo(effect.x, effect.y);
          ctx.lineTo(effect.x + effect.width, effect.y);
          ctx.stroke();
          ctx.restore();
          break;
        
        case 'gentle_bloom':
          const bloomProgress = (effect.life - (effect.delay || 0)) / (effect.maxLife - (effect.delay || 0));
          effect.radius = effect.maxRadius * bloomProgress;
          
          ctx.save();
          ctx.strokeStyle = `${effect.color}${Math.floor(opacity * 255).toString(16).padStart(2, '0')}`;
          ctx.lineWidth = effect.strokeWidth;
          ctx.shadowBlur = 8;
          ctx.shadowColor = effect.color;
          ctx.beginPath();
          ctx.arc(effect.x, effect.y, effect.radius, 0, Math.PI * 2);
          ctx.stroke();
          ctx.restore();
          break;
        
        case 'farewell_twinkle':
          effect.twinkle += effect.twinkleSpeed;
          const twinkleScale = 0.8 + Math.sin(effect.twinkle) * 0.4;
          
          ctx.save();
          ctx.beginPath();
          ctx.arc(effect.x, effect.y, effect.size * twinkleScale, 0, Math.PI * 2);
          ctx.fillStyle = `${effect.color}${Math.floor(opacity * 255).toString(16).padStart(2, '0')}`;
          ctx.shadowBlur = 6;
          ctx.shadowColor = effect.color;
          ctx.fill();
          ctx.restore();
          break;
      }
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

      // Draw and update command effects
      commandEffects = commandEffects.filter(effect => {
        if (effect.life < effect.maxLife) {
          effect.life++;
          drawCommandEffect(effect, time);
          return true;
        }
        return false;
      });

      requestAnimationFrame(draw);
    };

    // Function to trigger command effects
    const triggerCommandEffect = (command) => {
      const newEffects = createCommandEffect(command);
      commandEffects = [...commandEffects, ...newEffects];
    };

    resize();
    draw();
    window.addEventListener('resize', resize);
    
    // Expose trigger function to parent component
    canvas.triggerCommandEffect = triggerCommandEffect;
    
    return () => window.removeEventListener('resize', resize);
  }, []);

  // Effect to trigger command effects when currentCommand changes
  useEffect(() => {
    if (currentCommand && canvasRef.current && canvasRef.current.triggerCommandEffect) {
      canvasRef.current.triggerCommandEffect(currentCommand);
    }
  }, [currentCommand]);

  return <canvas ref={canvasRef} className="absolute inset-0 -z-10" />;
};

export default memo(StarryBackground);
