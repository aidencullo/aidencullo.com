import React, { useEffect, useState } from 'react'
import './VisitorFootprint.css'

type LocationData = {
  city?: string
  region_code?: string
  region?: string
  country?: string
  country_name?: string
  latitude?: number
  longitude?: number
  lat?: number
  lon?: number
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

const locationTextFrom = (data: LocationData): string => {
  const parts = [data.city, data.region_code ?? data.region, data.country ?? data.country_name].filter(Boolean)
  return parts.join(', ')
}

const VisitorFootprint: React.FC = () => {
  const loadingLine = 'connecting from your area • checking weather...'
  const fallbackLine = 'connecting from your area • weather unavailable'
  const fallbackSource = 'location: ipapi.co/ipwho.is • weather: open-meteo.com'
  const locationUnavailable = 'connecting from unavailable'
  const [line, setLine] = useState(fallbackLine)
  const [sourceLine, setSourceLine] = useState(fallbackSource)

  useEffect(() => {
    const controller = new AbortController()

    const load = async () => {
      try {
        setLine(loadingLine)
        setSourceLine(fallbackSource)
        let locationData: LocationData | null = null

        const locationRes = await fetch('https://ipapi.co/json/', { signal: controller.signal })
        if (locationRes.ok) {
          locationData = (await locationRes.json()) as LocationData
        }

        if (!locationData || !locationTextFrom(locationData)) {
          const fallbackLocationRes = await fetch('https://ipwho.is/', { signal: controller.signal })
          if (fallbackLocationRes.ok) {
            locationData = (await fallbackLocationRes.json()) as LocationData
          }
        }

        if (!locationData) {
          setLine(fallbackLine)
          return
        }

        const locationText = locationTextFrom(locationData)
        if (!locationText) {
          setLine(locationUnavailable)
          return
        }

        const locationPrefix = `connecting from ${locationText}`
        const latitude = typeof locationData.latitude === 'number' ? locationData.latitude : locationData.lat
        const longitude = typeof locationData.longitude === 'number' ? locationData.longitude : locationData.lon
        if (
          typeof latitude === 'number' &&
          typeof longitude === 'number'
        ) {
          try {
            const weatherRes = await fetch(
              `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weather_code&temperature_unit=fahrenheit`,
              { signal: controller.signal }
            )
            if (weatherRes.ok) {
              const weatherData = (await weatherRes.json()) as WeatherData
              const temp = weatherData.current?.temperature_2m
              const code = weatherData.current?.weather_code
              if (typeof temp === 'number') {
                setLine(`${locationPrefix} • ${Math.round(temp)}F ${weatherLabel(code)}`)
                setSourceLine(fallbackSource)
                return
              }
            }
          } catch {
            // Keep location-only fallback.
          }
        }

        setLine(locationPrefix)
      } catch {
        setLine(fallbackLine)
        setSourceLine(fallbackSource)
      }
    }

    void load()
    return () => controller.abort()
  }, [])

  return (
    <div className="visitor-footprint">
      <div>{line}</div>
      <div className="visitor-footprint-source">{sourceLine}</div>
    </div>
  )
}

export default VisitorFootprint
