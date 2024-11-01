"use client"
import  { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

import 'mapbox-gl/dist/mapbox-gl.css';

const HeatMap = () => {
  const mapContainerRef = useRef<any>(null!);
  const mapRef = useRef<any>(null!);

  useEffect(() => {
    console.log("env: ", process.env.NEXT_PUBLIC_ACCESS_TOKEN);
    
    mapboxgl.accessToken = process.env.NEXT_PUBLIC_ACCESS_TOKEN!

    const sw = new mapboxgl.LngLat(46.3253, 24.4036);
const ne = new mapboxgl.LngLat(46.980, 24.9836);
const bounds = new mapboxgl.LngLatBounds(sw, ne);

    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/hayaofwar/cm2y9jb66006701qzbdxx1kp8?optimize=true",
      center: [ 46.6753,24.7136],
      zoom: 10,
      attributionControl:false,
      maxBounds: bounds
    });

    return () => {
      mapRef.current.remove();
    };
  }, []);

  return <div id='map-container' className='mt-6' ref={mapContainerRef} style={{ height: '550px', width: '500px' }}></div>;
};

export default HeatMap;