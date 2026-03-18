import React, { useEffect, useRef } from 'react'

const NUM_DOTS = 260
const DOT_RADIUS = 1.6
const BASE_SPEED = 0.3
const COLOR = 'rgba(255, 210, 140,'

// Simple 2D value noise (no dependencies)
// Permutation-based for smooth, non-repeating drift
const perm = new Uint8Array(512)
{
  const p = new Uint8Array(256)
  for (let i = 0; i < 256; i++) p[i] = i
  for (let i = 255; i > 0; i--) {
    const j = (Math.random() * (i + 1)) | 0
    ;[p[i], p[j]] = [p[j], p[i]]
  }
  perm.set(p)
  perm.set(p, 256)
}

function fade(t: number) {
  return t * t * t * (t * (t * 6 - 15) + 10)
}

function lerp(a: number, b: number, t: number) {
  return a + t * (b - a)
}

function grad(hash: number, x: number, y: number) {
  const h = hash & 3
  const u = h < 2 ? x : y
  const v = h < 2 ? y : x
  return (h & 1 ? -u : u) + (h & 2 ? -v : v)
}

function noise(x: number, y: number) {
  const X = Math.floor(x) & 255
  const Y = Math.floor(y) & 255
  const xf = x - Math.floor(x)
  const yf = y - Math.floor(y)
  const u = fade(xf)
  const v = fade(yf)
  const aa = perm[perm[X] + Y]
  const ab = perm[perm[X] + Y + 1]
  const ba = perm[perm[X + 1] + Y]
  const bb = perm[perm[X + 1] + Y + 1]
  return lerp(
    lerp(grad(aa, xf, yf), grad(ba, xf - 1, yf), u),
    lerp(grad(ab, xf, yf - 1), grad(bb, xf - 1, yf - 1), u),
    v
  )
}

interface Dot {
  x: number
  y: number
  baseOpacity: number
  size: number
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
    let time = Math.random() * 1000 // offset so each load feels different

    const initDots = () => {
      dots = Array.from({ length: NUM_DOTS }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        baseOpacity: 0.15 + Math.random() * 0.35,
        size: DOT_RADIUS * (0.6 + Math.random() * 0.8),
      }))
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
      time += 0.002

      for (const dot of dots) {
        // Perlin noise drives direction — changes smoothly over time
        const scale = 0.003
        const angle = noise(dot.x * scale, dot.y * scale + time) * Math.PI * 2
        const speed = BASE_SPEED + noise(dot.x * scale + 100, dot.y * scale + time + 50) * 0.2

        dot.x += Math.cos(angle) * speed
        dot.y += Math.sin(angle) * speed

        // Wrap around edges
        if (dot.x < -10) dot.x += w + 20
        if (dot.x > w + 10) dot.x -= w + 20
        if (dot.y < -10) dot.y += h + 20
        if (dot.y > h + 10) dot.y -= h + 20

        // Opacity pulses slowly with noise
        const opacityNoise = noise(dot.x * 0.005 + 200, dot.y * 0.005 + time * 1.5)
        const opacity = dot.baseOpacity + opacityNoise * 0.2

        ctx.beginPath()
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2)
        ctx.fillStyle = `${COLOR} ${Math.max(0.05, Math.min(0.6, opacity))})`
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
