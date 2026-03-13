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
const TRAIL = 22
const MAX_SPEED = 3.5
const JITTER = 0.018
const MAGNETIC_STRENGTH = 80000
const MAGNETIC_RADIUS = 500

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef<{ x: number; y: number } | null>(null)

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

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }
    const onMouseLeave = () => {
      mouseRef.current = null
    }
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseleave', onMouseLeave)

    const particles: Particle[] = Array.from({ length: COUNT }, () => {
      const angle = Math.random() * Math.PI * 2
      const speed = 0.2 + Math.random() * MAX_SPEED
      return {
        x: Math.random() * w,
        y: Math.random() * h,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        ax: 0,
        ay: 0,
        size: 0.8 + Math.random() * 1.6,
        opacity: 0.1 + Math.random() * 0.25,
        trail: [],
      }
    })

    const tick = () => {
      ctx.clearRect(0, 0, w, h)
      const mouse = mouseRef.current

      for (const p of particles) {
        p.trail.push({ x: p.x, y: p.y })
        if (p.trail.length > TRAIL) p.trail.shift()

        // Jitter
        p.ax += (Math.random() - 0.5) * JITTER
        p.ay += (Math.random() - 0.5) * JITTER

        // Magnetic field force: tangential (perpendicular to radius vector) — creates field-line swirl
        if (mouse) {
          const dx = p.x - mouse.x
          const dy = p.y - mouse.y
          const dist2 = dx * dx + dy * dy
          const dist = Math.sqrt(dist2)

          if (dist < MAGNETIC_RADIUS && dist > 1) {
            const falloff = MAGNETIC_STRENGTH / (dist2 * dist)
            // Perpendicular (tangential) force creates the field-line curl
            p.ax += (-dy * falloff)
            p.ay += (dx * falloff)
            // Slight inward pull to keep particles near field lines
            p.ax -= (dx / dist) * falloff * 0.15
            p.ay -= (dy / dist) * falloff * 0.15
          }
        }

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
            ctx.strokeStyle = `rgba(180, 180, 180, ${p.opacity * t * 0.7})`
            ctx.lineWidth = p.size * t
            ctx.stroke()
          }
        }

        // Dot
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(180, 180, 180, ${p.opacity})`
        ctx.fill()
      }

      animId = requestAnimationFrame(tick)
    }

    tick()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseleave', onMouseLeave)
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
