import React, { useEffect, useState } from 'react'
import './VisitorFootprint.css'

type LocationData = {
  city?: string
  region?: string
  country_name?: string
  latitude?: number
  longitude?: number
}

type WeatherData = {
  current?: {
    temperature_2m?: number
    weather_code?: number
  }
}

const weatherLabel = (code?: number): string => {
  if (code === undefined) return 'weather unavailable'
  if (code === 0) return 'clear'
  if (code <= 3) return 'cloudy'
  if (code <= 48) return 'foggy'
  if (code <= 67) return 'rainy'
  if (code <= 77) return 'snowy'
  if (code <= 82) return 'showers'
  if (code <= 86) return 'snow showers'
  if (code <= 99) return 'stormy'
  return 'weather unavailable'
}

const VisitorFootprint: React.FC = () => {
  const [line, setLine] = useState('')
  const [sourceLine, setSourceLine] = useState('')

  useEffect(() => {
    const controller = new AbortController()

    const load = async () => {
      try {
        setSourceLine('location: ipapi.co')
        const locationRes = await fetch('https://ipapi.co/json/', { signal: controller.signal })
        if (!locationRes.ok) return
        const locationData = (await locationRes.json()) as LocationData

        const parts = [locationData.city, locationData.region, locationData.country_name].filter(Boolean)
        const locationText = parts.join(', ')
        if (!locationText) return

        const locationPrefix = `connecting from ${locationText}`
        if (
          typeof locationData.latitude === 'number' &&
          typeof locationData.longitude === 'number'
        ) {
          try {
            const weatherRes = await fetch(
              `https://api.open-meteo.com/v1/forecast?latitude=${locationData.latitude}&longitude=${locationData.longitude}&current=temperature_2m,weather_code&temperature_unit=fahrenheit`,
              { signal: controller.signal }
            )
            if (weatherRes.ok) {
              const weatherData = (await weatherRes.json()) as WeatherData
              const temp = weatherData.current?.temperature_2m
              const code = weatherData.current?.weather_code
              if (typeof temp === 'number') {
                setLine(`${locationPrefix} • ${Math.round(temp)}F ${weatherLabel(code)}`)
                setSourceLine('location: ipapi.co • weather: open-meteo.com')
                return
              }
            }
          } catch {
            // Keep location-only fallback.
          }
        }

        setLine(locationPrefix)
      } catch {
        setLine('')
        setSourceLine('')
      }
    }

    void load()
    return () => controller.abort()
  }, [])

  if (!line) return null

  return (
    <div className="visitor-footprint">
      <div>{line}</div>
      <div className="visitor-footprint-source">{sourceLine}</div>
    </div>
  )
}

export default VisitorFootprint
