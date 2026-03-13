import React, { useEffect, useRef } from 'react'

const SPACING = 28
const BAR_LENGTH = 14
const BAR_WIDTH = 1.2
const EASE = 0.08

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
    let cols = 0
    let rows = 0

    // Each bar has a current angle that eases toward the target
    let angles: number[] = []

    const resize = () => {
      w = canvas.width = window.innerWidth
      h = canvas.height = window.innerHeight
      cols = Math.ceil(w / SPACING) + 1
      rows = Math.ceil(h / SPACING) + 1
      angles = new Array(cols * rows).fill(0)
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

    const tick = () => {
      ctx.clearRect(0, 0, w, h)
      const mouse = mouseRef.current

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const x = col * SPACING + SPACING / 2
          const y = row * SPACING + SPACING / 2
          const idx = row * cols + col

          let targetAngle: number
          if (mouse) {
            const dx = mouse.x - x
            const dy = mouse.y - y
            targetAngle = Math.atan2(dy, dx)
          } else {
            targetAngle = 0
          }

          // Ease current angle toward target (handle wrap-around)
          let diff = targetAngle - angles[idx]
          // Normalize diff to [-PI, PI]
          while (diff > Math.PI) diff -= Math.PI * 2
          while (diff < -Math.PI) diff += Math.PI * 2
          angles[idx] += diff * EASE

          const angle = angles[idx]
          const cos = Math.cos(angle)
          const sin = Math.sin(angle)
          const half = BAR_LENGTH / 2

          const dist = mouse ? Math.hypot(mouse.x - x, mouse.y - y) : Infinity
          const influence = mouse ? Math.min(1, 600 / Math.max(dist, 1)) : 0
          const opacity = 0.08 + influence * 0.35

          ctx.beginPath()
          ctx.moveTo(x - cos * half, y - sin * half)
          ctx.lineTo(x + cos * half, y + sin * half)
          ctx.strokeStyle = `rgba(180, 180, 180, ${opacity})`
          ctx.lineWidth = BAR_WIDTH
          ctx.lineCap = 'round'
          ctx.stroke()
        }
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
