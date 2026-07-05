import React, { useEffect, useRef, useContext } from 'react';
import { ColorContext } from '../context/ContextShare';
import '../styles/floatingSkills.css';

const SKILLS_DATA = [
    { id: '1', label: 'Problem Solving' },
    { id: '2', label: 'Collaboration' },
    { id: '3', label: 'User Research', solid: true },
    { id: '4', label: 'System Architecture' },
    { id: '5', label: 'Prototyping', styleType: 'pixel' },
    { id: '6', label: 'User Flow' },
    { id: '8', label: 'Visual & UI', lines: ['Visual', '& UI'], isCircle: true, prefix: 'MY' },
    { id: '9', label: 'Critical Thinking', solid: true },
    { id: '10', label: 'SEO Optimization' },
    { id: '11', label: '&', isCircleSmall: true },
    { id: '12', label: 'Ecommerce Solutions', styleType: 'pixel' },
    { id: '13', label: 'Build & Deploy', lines: ['Build', '&', 'Deploy'], isDiamond: true }
];

function FloatingSkills() {
    const { color } = useContext(ColorContext);
    const canvasRef = useRef(null);
    const pillsRef = useRef([]);
    const bodiesRef = useRef([]);
    const mouseRef = useRef({ x: -1000, y: -1000, vx: 0, vy: 0, isDown: false });
    const draggedIdxRef = useRef(null);
    const dragOffsetRef = useRef({ x: 0, y: 0 });

    const calculateGridSlots = (canvasWidth) => {
        const gap = 10;
        const slots = [];

        const dims = SKILLS_DATA.map((skill, i) => {
            const el = pillsRef.current[i];
            let w = el?.offsetWidth;
            if (!w || w === 0) {
                if (skill.isCircle) w = 100;
                else if (skill.isCircleSmall) w = 80;
                else if (skill.isDiamond) w = 106;
                else w = skill.label.length * 10 + 76;
            }
            const h = el?.offsetHeight || (skill.isCircle ? 100 : (skill.isDiamond ? 106 : 50));
            return { w, h };
        });

        if (canvasWidth < 768) {
            let curX = 12;
            let curY = 15;
            let rowMaxH = 0;
            const mobileGap = 8;
            for (let i = 0; i < SKILLS_DATA.length; i++) {
                const { w, h } = dims[i];
                if (curX + w > canvasWidth - 12 && i > 0) {
                    curX = 12;
                    curY += rowMaxH + 10;
                    rowMaxH = 0;
                }
                slots[i] = {
                    x: curX,
                    y: curY,
                    w,
                    h,
                    angle: (i === 0 ? -6 : (i === 1 ? 6 : (SKILLS_DATA[i].isDiamond ? 45 : 0)))
                };
                curX += w + mobileGap;
                if (h > rowMaxH) rowMaxH = h;
            }
            return slots;
        }

        // Row 1: items 0 to 5
        // Empathy & Collaboration overlap exactly like reference image 2
        slots[0] = { x: 35, y: 12, w: dims[0].w, h: dims[0].h, angle: -14 };
        slots[1] = { x: 15, y: 46, w: dims[1].w, h: dims[1].h, angle: 12 };

        let currentX = Math.max(slots[0].x + dims[0].w, slots[1].x + dims[1].w) + 8;
        let currentY = 28;

        for (let i = 2; i <= 5; i++) {
            const { w, h } = dims[i];
            if (currentX + w > canvasWidth - 15) {
                currentX = 15;
                currentY += 68;
            }
            slots[i] = {
                x: currentX,
                y: currentY + (50 - h) / 2,
                w,
                h,
                angle: 0
            };
            currentX += w + gap;
        }

        // Row 2: items 6 to 11
        currentY = Math.max(currentY + 68, 140);
        currentX = 35;

        for (let i = 6; i < SKILLS_DATA.length; i++) {
            const { w, h } = dims[i];
            if (SKILLS_DATA[i].isDiamond) {
                currentX += 26;
            }
            if (currentX + w > canvasWidth - 15 && i > 6) {
                currentX = 15;
                currentY += 85;
            }
            slots[i] = {
                x: currentX,
                y: currentY + (100 - h) / 2,
                w,
                h,
                angle: SKILLS_DATA[i].isDiamond ? 45 : 0
            };
            currentX += w + gap;
        }

        return slots;
    };

    const handleRearrange = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const canvasWidth = canvas.clientWidth || 800;
        const slots = calculateGridSlots(canvasWidth);

        let allInInitialState = true;
        bodiesRef.current.forEach((body, i) => {
            const slot = slots[i];
            if (slot) {
                const dist = Math.sqrt(Math.pow(body.x - slot.x, 2) + Math.pow(body.y - slot.y, 2));
                const angleDiff = Math.abs(body.angle - (slot.angle || 0));
                if (dist > 4 || angleDiff > 4) {
                    allInInitialState = false;
                }
            }
        });

        if (!allInInitialState) {
            bodiesRef.current.forEach((body, i) => {
                const slot = slots[i];
                if (slot) {
                    body.targetX = slot.x;
                    body.targetY = slot.y;
                    body.targetAngle = slot.angle || 0;
                    body.isRearranging = true;
                    body.isAwake = true;
                }
            });
        } else {
            bodiesRef.current.forEach((body) => {
                body.shakeTime = 35;
            });
        }
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const initLayout = () => {
            const canvasWidth = canvas.clientWidth || 800;
            const canvasHeight = canvas.clientHeight || 360;
            const slots = calculateGridSlots(canvasWidth);

            const bodies = SKILLS_DATA.map((_, i) => {
                const slot = slots[i] || { x: 10, y: 10, w: 145, h: 50, angle: SKILLS_DATA[i].isDiamond ? 45 : 0 };

                return {
                    x: slot.x,
                    y: slot.y,
                    w: slot.w,
                    h: slot.h,
                    vx: 0,
                    vy: 0,
                    angle: slot.angle || 0,
                    vAngle: 0,
                    isAwake: false,
                    isRearranging: false
                };
            });

            bodiesRef.current = bodies;

            const lastSlot = slots[slots.length - 1];
            if (lastSlot && lastSlot.y + 90 > canvasHeight) {
                canvas.style.height = `${lastSlot.y + 90}px`;
            }
        };

        initLayout();

        const timer1 = setTimeout(initLayout, 150);
        const timer2 = setTimeout(initLayout, 600);
        window.addEventListener('resize', initLayout);

        const handleMouseDown = (e) => {
            const rect = canvas.getBoundingClientRect();
            const mx = e.clientX - rect.left;
            const my = e.clientY - rect.top;
            mouseRef.current.isDown = true;

            for (let i = bodiesRef.current.length - 1; i >= 0; i--) {
                const b = bodiesRef.current[i];
                if (mx >= b.x && mx <= b.x + b.w && my >= b.y && my <= b.y + b.h) {
                    draggedIdxRef.current = i;
                    dragOffsetRef.current = { x: mx - b.x, y: my - b.y };
                    b.isAwake = true;
                    b.isRearranging = false;
                    b.vx = 0;
                    b.vy = 0;
                    b.vAngle = 0;
                    break;
                }
            }
        };

        const handleTouchStart = (e) => {
            if (e.touches.length === 0) return;
            const rect = canvas.getBoundingClientRect();
            const mx = e.touches[0].clientX - rect.left;
            const my = e.touches[0].clientY - rect.top;
            mouseRef.current.isDown = true;
            mouseRef.current.x = mx;
            mouseRef.current.y = my;

            for (let i = bodiesRef.current.length - 1; i >= 0; i--) {
                const b = bodiesRef.current[i];
                if (mx >= b.x && mx <= b.x + b.w && my >= b.y && my <= b.y + b.h) {
                    draggedIdxRef.current = i;
                    dragOffsetRef.current = { x: mx - b.x, y: my - b.y };
                    b.isAwake = true;
                    b.isRearranging = false;
                    b.vx = 0;
                    b.vy = 0;
                    b.vAngle = 0;
                    break;
                }
            }
        };

        const handleMouseMove = (e) => {
            const rect = canvas.getBoundingClientRect();
            const newX = e.clientX - rect.left;
            const newY = e.clientY - rect.top;
            mouseRef.current.vx = newX - mouseRef.current.x;
            mouseRef.current.vy = newY - mouseRef.current.y;
            mouseRef.current.x = newX;
            mouseRef.current.y = newY;
        };

        const handleTouchMove = (e) => {
            if (e.touches.length === 0) return;
            const rect = canvas.getBoundingClientRect();
            const newX = e.touches[0].clientX - rect.left;
            const newY = e.touches[0].clientY - rect.top;
            mouseRef.current.vx = newX - mouseRef.current.x;
            mouseRef.current.vy = newY - mouseRef.current.y;
            mouseRef.current.x = newX;
            mouseRef.current.y = newY;
        };

        const handleMouseUp = () => {
            if (draggedIdxRef.current !== null) {
                const b = bodiesRef.current[draggedIdxRef.current];
                if (b) {
                    b.vx = mouseRef.current.vx * 1.5;
                    b.vy = mouseRef.current.vy * 1.5;
                    b.vAngle = (mouseRef.current.vx + mouseRef.current.vy) * 0.2;
                }
                draggedIdxRef.current = null;
            }
            mouseRef.current.isDown = false;
        };

        const handleMouseLeave = () => {
            handleMouseUp();
            mouseRef.current.x = -1000;
            mouseRef.current.y = -1000;
        };

        canvas.addEventListener('mousedown', handleMouseDown);
        canvas.addEventListener('mousemove', handleMouseMove);
        canvas.addEventListener('mouseup', handleMouseUp);
        canvas.addEventListener('mouseleave', handleMouseLeave);

        canvas.addEventListener('touchstart', handleTouchStart, { passive: true });
        canvas.addEventListener('touchmove', handleTouchMove, { passive: true });
        canvas.addEventListener('touchend', handleMouseUp);

        let animationFrameId;

        const updatePhysics = () => {
            const curWidth = canvas.clientWidth || 800;
            const curHeight = canvas.clientHeight || 360;
            const mouse = mouseRef.current;
            const draggedIdx = draggedIdxRef.current;
            const bodies = bodiesRef.current;

            bodies.forEach((body, i) => {
                const el = pillsRef.current[i];
                if (!el) return;

                if (i === draggedIdx) {
                    body.x = mouse.x - dragOffsetRef.current.x;
                    body.y = mouse.y - dragOffsetRef.current.y;
                    el.style.transform = `translate3d(${body.x}px, ${body.y}px, 0) rotate(${body.angle}deg) scale(1.05)`;
                    el.style.zIndex = 50;
                    return;
                } else {
                    el.style.zIndex = i === 1 ? 5 : 1;
                }

                let sx = 0, sy = 0, sa = 0;
                if (body.shakeTime > 0) {
                    body.shakeTime--;
                    const intensity = (body.shakeTime / 35) * 6;
                    sx = (Math.random() - 0.5) * intensity * 2.5;
                    sy = (Math.random() - 0.5) * intensity * 2.5;
                    sa = (Math.random() - 0.5) * intensity * 2;
                }

                if (body.isRearranging) {
                    const dx = body.targetX - body.x;
                    const dy = body.targetY - body.y;
                    const targetAngle = body.targetAngle !== undefined ? body.targetAngle : 0;
                    body.x += dx * 0.12;
                    body.y += dy * 0.12;
                    body.angle += (targetAngle - body.angle) * 0.15;

                    if (Math.abs(dx) < 1 && Math.abs(dy) < 1 && Math.abs(targetAngle - body.angle) < 1) {
                        body.x = body.targetX;
                        body.y = body.targetY;
                        body.angle = targetAngle;
                        body.vx = 0;
                        body.vy = 0;
                        body.vAngle = 0;
                        body.isRearranging = false;
                        body.isAwake = false;
                    }
                    el.style.transform = `translate3d(${body.x + sx}px, ${body.y + sy}px, 0) rotate(${body.angle + sa}deg)`;
                    return;
                }

                const cx = body.x + body.w / 2;
                const cy = body.y + body.h / 2;

                if (draggedIdx === null) {
                    const dx = cx - mouse.x;
                    const dy = cy - mouse.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    const radius = 160;

                    if (dist < radius && dist > 0) {
                        body.isAwake = true;
                        body.isRearranging = false;
                        const force = Math.pow((radius - dist) / radius, 1.2);
                        body.vx += (dx / dist) * force * 3.2;
                        body.vy += (dy / dist) * force * 3.2;
                        body.vAngle += (dx > 0 ? 1 : -1) * force * 2.0;
                    }
                }

                if (!body.isAwake) {
                    el.style.transform = `translate3d(${body.x + sx}px, ${body.y + sy}px, 0) rotate(${body.angle + sa}deg)`;
                    return;
                }

                body.x += body.vx;
                body.y += body.vy;
                body.angle += body.vAngle;

                body.vx *= 0.986;
                body.vy *= 0.986;
                body.vAngle *= 0.96;

                const maxX = curWidth - body.w;
                const maxY = curHeight - body.h;

                if (body.x < 0) { body.x = 0; body.vx = Math.abs(body.vx) * 0.75; body.vAngle *= -0.5; }
                if (body.x > maxX) { body.x = maxX; body.vx = -Math.abs(body.vx) * 0.75; body.vAngle *= -0.5; }
                if (body.y < 0) { body.y = 0; body.vy = Math.abs(body.vy) * 0.75; body.vAngle *= -0.5; }
                if (body.y > maxY) { body.y = maxY; body.vy = -Math.abs(body.vy) * 0.75; body.vAngle *= -0.5; }

                for (let j = i + 1; j < bodies.length; j++) {
                    if (i === 0 && j === 1 && draggedIdx !== 0 && draggedIdx !== 1) continue;
                    const b2 = bodies[j];
                    const c2x = b2.x + b2.w / 2;
                    const c2y = b2.y + b2.h / 2;
                    const cdx = c2x - cx;
                    const cdy = c2y - cy;
                    const cdist = Math.sqrt(cdx * cdx + cdy * cdy);
                    const minDist = (body.w + b2.w) / 3 + 20;

                    if (cdist < minDist && cdist > 0) {
                        body.isAwake = true;
                        b2.isAwake = true;
                        body.isRearranging = false;
                        b2.isRearranging = false;
                        const overlap = (minDist - cdist) * 0.08;
                        const nx = cdx / cdist;
                        const ny = cdy / cdist;

                        body.x -= nx * overlap * 0.5;
                        body.y -= ny * overlap * 0.5;
                        b2.x += nx * overlap * 0.5;
                        b2.y += ny * overlap * 0.5;

                        const rvx = b2.vx - body.vx;
                        const rvy = b2.vy - body.vy;
                        const velAlongNormal = rvx * nx + rvy * ny;

                        if (velAlongNormal < 0) {
                            const impulse = -(1 + 0.8) * velAlongNormal * 0.5;
                            body.vx -= impulse * nx;
                            body.vy -= impulse * ny;
                            b2.vx += impulse * nx;
                            b2.vy += impulse * ny;

                            body.vAngle -= impulse * 0.3;
                            b2.vAngle += impulse * 0.3;
                        }
                    }
                }

                if (Math.abs(body.vx) < 0.02 && Math.abs(body.vy) < 0.02 && Math.abs(body.vAngle) < 0.02) {
                    body.vx = 0;
                    body.vy = 0;
                    body.vAngle = 0;
                }

                el.style.transform = `translate3d(${body.x + sx}px, ${body.y + sy}px, 0) rotate(${body.angle + sa}deg)`;
            });

            animationFrameId = requestAnimationFrame(updatePhysics);
        };

        animationFrameId = requestAnimationFrame(updatePhysics);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
            window.removeEventListener('resize', initLayout);
            cancelAnimationFrame(animationFrameId);
            canvas.removeEventListener('mousedown', handleMouseDown);
            canvas.removeEventListener('mousemove', handleMouseMove);
            canvas.removeEventListener('mouseup', handleMouseUp);
            canvas.removeEventListener('mouseleave', handleMouseLeave);
            canvas.removeEventListener('touchstart', handleTouchStart);
            canvas.removeEventListener('touchmove', handleTouchMove);
            canvas.removeEventListener('touchend', handleMouseUp);
        };
    }, []);

    return (
        <div className="floating-skills-section" data-aos="fade-up" data-aos-duration="1200" style={{ '--brand-color': color }}>
            <div className="floating-skills-header">
                <div className="floating-skills-title">
                    with my skills in:
                </div>
                <button 
                    className="rearrange-btn" 
                    style={{ backgroundColor: color }} 
                    onClick={handleRearrange}
                >
                    <i className="fa-solid fa-rotate-right rearrange-icon"></i>
                    <span>Click here to rearrange</span>
                </button>
            </div>
            <div className="capsules-canvas" ref={canvasRef}>
                {SKILLS_DATA.map((skill, i) => {
                    let className = 'skill-capsule';
                    if (skill.solid) className += ' solid-capsule';
                    if (skill.styleType) className += ` style-${skill.styleType}`;
                    if (skill.isCircle) className += ' circle-badge';
                    if (skill.isCircleSmall) className += ' circle-small';
                    if (skill.isDiamond) className += ' diamond-badge';

                    return (
                        <div
                            key={skill.id}
                            ref={(el) => (pillsRef.current[i] = el)}
                            className={className}
                        >
                            {skill.prefix && <span className="circle-subtext">{skill.prefix}</span>}
                            {skill.lines ? (
                                <span className={skill.isDiamond ? "diamond-content" : "circle-lines"}>
                                    {skill.lines.map((line, idx) => (
                                        <span key={idx} className={line === '&' ? 'diamond-ampersand' : ''}>{line}</span>
                                    ))}
                                </span>
                            ) : skill.isDiamond ? (
                                <span className="diamond-content">{skill.label}</span>
                            ) : (
                                skill.label
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default FloatingSkills;
