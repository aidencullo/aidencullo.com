import React, { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  ax: number
  ay: number
  size: number
  opacity: number
  trail: Array<{ x: number; y: number }>
}

const COUNT = 90
const TRAIL = 18
const MAX_SPEED = 0.45
const JITTER = 0.007

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    let w = 0
    let h = 0

    const resize = () => {
      w = canvas.width = window.innerWidth
      h = canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const particles: Particle[] = Array.from({ length: COUNT }, () => {
      const angle = Math.random() * Math.PI * 2
      const speed = 0.08 + Math.random() * MAX_SPEED
      return {
        x: Math.random() * w,
        y: Math.random() * h,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        ax: 0,
        ay: 0,
        size: 0.6 + Math.random() * 1.2,
        opacity: 0.12 + Math.random() * 0.35,
        trail: [],
      }
    })

    const tick = () => {
      ctx.clearRect(0, 0, w, h)

      for (const p of particles) {
        p.trail.push({ x: p.x, y: p.y })
        if (p.trail.length > TRAIL) p.trail.shift()

        p.ax += (Math.random() - 0.5) * JITTER
        p.ay += (Math.random() - 0.5) * JITTER
        p.vx += p.ax
        p.vy += p.ay

        const spd = Math.sqrt(p.vx * p.vx + p.vy * p.vy)
        if (spd > MAX_SPEED) {
          p.vx = (p.vx / spd) * MAX_SPEED
          p.vy = (p.vy / spd) * MAX_SPEED
        }
        p.ax *= 0.88
        p.ay *= 0.88

        p.x += p.vx
        p.y += p.vy

        if (p.x < 0) p.x += w
        if (p.x > w) p.x -= w
        if (p.y < 0) p.y += h
        if (p.y > h) p.y -= h

        // Trail
        if (p.trail.length > 1) {
          for (let i = 1; i < p.trail.length; i++) {
            const t = i / p.trail.length
            ctx.beginPath()
            ctx.moveTo(p.trail[i - 1].x, p.trail[i - 1].y)
            ctx.lineTo(p.trail[i].x, p.trail[i].y)
            ctx.strokeStyle = `rgba(160, 195, 255, ${p.opacity * t * 0.55})`
            ctx.lineWidth = p.size * t
            ctx.stroke()
          }
        }

        // Dot
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(180, 210, 255, ${p.opacity})`
        ctx.fill()
      }

      animId = requestAnimationFrame(tick)
    }

    tick()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  )
}

export default ParticleBackground
