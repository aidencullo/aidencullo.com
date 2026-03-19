import React, { useEffect, useRef } from 'react'

const NUM_DOTS = 120
const DOT_RADIUS = 1.8
const CONNECT_DIST = 140
const BASE_SPEED = 0.4
const DOT_COLOR = [255, 210, 140]
const LINE_COLOR = [255, 210, 140]

interface Dot {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  baseOpacity: number
}

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
    let dots: Dot[] = []

    const initDots = () => {
      dots = Array.from({ length: NUM_DOTS }, () => {
        const angle = Math.random() * Math.PI * 2
        const speed = BASE_SPEED * (0.5 + Math.random() * 0.5)
        return {
          x: Math.random() * w,
          y: Math.random() * h,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          size: DOT_RADIUS * (0.6 + Math.random() * 0.8),
          baseOpacity: 0.2 + Math.random() * 0.4,
        }
      })
    }

    const resize = () => {
      w = canvas.width = window.innerWidth
      h = canvas.height = window.innerHeight
      if (dots.length === 0) initDots()
    }
    resize()
    window.addEventListener('resize', resize)

    const tick = () => {
      ctx.clearRect(0, 0, w, h)

      for (const dot of dots) {
        dot.x += dot.vx
        dot.y += dot.vy

        if (dot.x < 0 || dot.x > w) dot.vx *= -1
        if (dot.y < 0 || dot.y > h) dot.vy *= -1
        dot.x = Math.max(0, Math.min(w, dot.x))
        dot.y = Math.max(0, Math.min(h, dot.y))
      }

      // Draw connections
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x
          const dy = dots[i].y - dots[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < CONNECT_DIST) {
            const opacity = (1 - dist / CONNECT_DIST) * 0.15
            ctx.beginPath()
            ctx.moveTo(dots[i].x, dots[i].y)
            ctx.lineTo(dots[j].x, dots[j].y)
            ctx.strokeStyle = `rgba(${LINE_COLOR[0]},${LINE_COLOR[1]},${LINE_COLOR[2]},${opacity})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }

      // Draw dots
      for (const dot of dots) {
        ctx.beginPath()
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${DOT_COLOR[0]},${DOT_COLOR[1]},${DOT_COLOR[2]},${dot.baseOpacity})`
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
