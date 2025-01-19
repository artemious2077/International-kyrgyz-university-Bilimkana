import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import { MultiContainer } from '@/UI/MultiContainer/MultiСontainer'
import { Typography } from '@/UI/Typography/Typography'
import mapEmail from '@/assets/icons/mapEmail.svg'
import mapPhone from '@/assets/icons/mapPhone.svg'
import mapDesc from '@/assets/icons/mapDesc.svg'
import { useMarkerApi } from './api/MapApi'
import { useEffect, useRef } from 'react'
import styles from './map.module.scss'
import { useTranslation } from 'react-i18next'

const icon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
  shadowSize: [41, 41],
})

const map = [
  {
    id: 1,
    position: [42.859269, 74.6065683],
  },
]

export const MainMap = () => {
  const { t } = useTranslation()
  const { markerData, markerRequest } = useMarkerApi()
  const markerRef = useRef(null)
  const mapRef = useRef(null)

  useEffect(() => {
    markerRequest()
  }, [markerRequest])

  useEffect(() => {
    if (markerRef.current && markerData.length > 0) {
      markerRef.current.openPopup()

      if (mapRef.current) {
        const mapInstance = mapRef.current
        mapInstance.flyTo(
          [map[0].position[0] - -0.0025, map[0].position[1]],
          16,
        )
      }
    }
  }, [markerData])
  return (
    <MultiContainer>
      <Typography variant='h2' className={styles.mapTitle}>
        {t('map.title')}
      </Typography>
      <MapContainer
        center={map[0].position}
        ref={mapRef}
        zoom={16}
        minZoom={7}
        maxZoom={16}
        className={styles.mapContainer}
      >
        <TileLayer
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker
          key={map[0].id}
          position={map[0].position}
          icon={icon}
          ref={markerRef}
        >
          <Popup position={map[0].position}>
            {markerData.map((item) => (
              <div
                key={item.id}
                style={{ textAlign: 'center' }}
                className='popup'
              >
                <Typography variant='h2' className={styles.popupTitle}>
                  {t('map.popup_title')}
                </Typography>
                <Typography variant='span' className={styles.mapLinks}>
                  <a href={`mailto:${item.email}`}>
                    <img src={mapEmail} alt='email icon' />
                    {item.email}
                  </a>
                </Typography>
                <Typography variant='span' className={styles.mapLinks}>
                  <a href={`tel:${item.number}`}>
                    <img src={mapPhone} alt='phone icon' />
                    {item.number}
                  </a>
                </Typography>
                <Typography variant='span' className={styles.mapLinks}>
                  <a href={`tel:${item.number}`}>
                    <img src={mapPhone} alt='phone icon' />
                    {item.number_2}
                  </a>
                </Typography>
                <Typography variant='span' className={styles.mapLinks}>
                  <a href={item.gps} target='_blank' rel='noreferrer'>
                    <img src={mapDesc} alt='location icon' />
                    {item.address}
                  </a>
                </Typography>
              </div>
            ))}
          </Popup>
        </Marker>
      </MapContainer>
    </MultiContainer>
  )
}
