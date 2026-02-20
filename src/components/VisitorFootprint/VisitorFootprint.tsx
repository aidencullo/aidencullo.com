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

type ReverseGeoData = {
  city?: string
  locality?: string
  principalSubdivisionCode?: string
  countryCode?: string
  countryName?: string
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

const locationTextFromReverseGeo = (data: ReverseGeoData): string => {
  const subdivisionCode = data.principalSubdivisionCode?.split('-')[1]
  const parts = [data.city ?? data.locality, subdivisionCode, data.countryCode ?? data.countryName].filter(Boolean)
  return parts.join(', ')
}

const fetchJsonWithTimeout = async <T,>(url: string, timeoutMs = 3500): Promise<T | null> => {
  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), timeoutMs)
  try {
    const res = await fetch(url, { signal: controller.signal })
    if (!res.ok) return null
    return (await res.json()) as T
  } catch {
    return null
  } finally {
    clearTimeout(timeout)
  }
}

const getBrowserCoordinates = async (): Promise<{ latitude: number; longitude: number } | null> => {
  if (!navigator.geolocation) return null
  return new Promise((resolve) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        })
      },
      () => resolve(null),
      { enableHighAccuracy: false, timeout: 5000, maximumAge: 300000 }
    )
  })
}

const VisitorFootprint: React.FC = () => {
  const loadingLine = 'finding your location...'
  const fallbackLine = 'connecting from your area • weather unavailable'
  const fallbackSource = 'location: ipapi.co/ipwho.is • weather: open-meteo.com'
  const locationUnavailable = 'location unavailable • weather unavailable'
  const [line, setLine] = useState(fallbackLine)
  const [sourceLine, setSourceLine] = useState(fallbackSource)

  useEffect(() => {
    const load = async () => {
      try {
        setLine(loadingLine)
        setSourceLine(fallbackSource)

        let locationLabel = 'your area'
        let latitude: number | undefined
        let longitude: number | undefined

        const browserCoords = await getBrowserCoordinates()
        if (browserCoords) {
          latitude = browserCoords.latitude
          longitude = browserCoords.longitude
          const reverseGeo = await fetchJsonWithTimeout<ReverseGeoData>(
            `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`,
            3500
          )
          const reverseLabel = reverseGeo ? locationTextFromReverseGeo(reverseGeo) : ''
          if (reverseLabel) {
            locationLabel = reverseLabel
            setSourceLine('location: browser geolocation • weather: open-meteo.com')
          } else {
            locationLabel = `${latitude.toFixed(2)}, ${longitude.toFixed(2)}`
            setSourceLine('location: browser geolocation • weather: open-meteo.com')
          }
        }

        if (latitude === undefined || longitude === undefined) {
          let locationData = await fetchJsonWithTimeout<LocationData>('https://ipapi.co/json/', 3000)
          if (!locationData || !locationTextFrom(locationData)) {
            locationData = await fetchJsonWithTimeout<LocationData>('https://ipwho.is/', 3000)
          }

          if (!locationData) {
            setLine(locationUnavailable)
            return
          }

          const locationText = locationTextFrom(locationData)
          if (!locationText) {
            setLine(locationUnavailable)
            return
          }

          locationLabel = locationText
          latitude = typeof locationData.latitude === 'number' ? locationData.latitude : locationData.lat
          longitude = typeof locationData.longitude === 'number' ? locationData.longitude : locationData.lon
        }

        const locationPrefix = `connecting from ${locationLabel}`
        if (typeof latitude !== 'number' || typeof longitude !== 'number') {
          setLine(locationPrefix)
          return
        }

        const weatherData = await fetchJsonWithTimeout<WeatherData>(
          `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weather_code&temperature_unit=fahrenheit`,
          4000
        )

        const temp = weatherData?.current?.temperature_2m
        const code = weatherData?.current?.weather_code
        if (typeof temp === 'number') {
          setLine(`${locationPrefix} • ${Math.round(temp)}F ${weatherLabel(code)}`)
          return
        }

        setLine(`${locationPrefix} • weather unavailable`)
      } catch {
        setLine(fallbackLine)
        setSourceLine(fallbackSource)
      }
    }

    void load()
    return () => undefined
  }, [])

  return (
    <div className="visitor-footprint">
      <div>{line}</div>
      <div className="visitor-footprint-source">{sourceLine}</div>
    </div>
  )
}

export default VisitorFootprint
