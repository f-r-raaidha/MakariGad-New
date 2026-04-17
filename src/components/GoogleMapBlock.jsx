"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
    GoogleMap,
    MarkerF,
    InfoWindowF,
    useJsApiLoader,
} from "@react-google-maps/api";

// Google Map Options
import {mapObject} from "@/helpers/googleMapOptions";

// Center: your original coordinates (Kathmandu)
const CENTER = { lat: 27.73933774359107, lng: 85.33673144417855}; 

// Map container fills its parent; keep your wrapper height (e.g., min-h-[520px])
const containerStyle = { width: "100%", height: "100%" };

function GoogleMapBlock() {

    const { isLoaded } = useJsApiLoader({
        id: "google-map-script", 
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
        // If you add search later: libraries: ["places"],
    });

    // Beautiful, minimal UI; fallback dark style if you don't use Cloud Map Styling
    const mapOptions = useMemo(
        () => (mapObject),
        []
    );

    const [infoOpen, setInfoOpen] = useState(true);

    if (!isLoaded) {
        return <div className="min-h-[520px] rounded-xl bg-gray-100" />;
    }

    return (
        <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full h-full min-h-[520px] rounded-xl overflow-hidden"
            aria-label="Google Map"
        >
            <GoogleMap
                center={CENTER}
                zoom={18}
                options={mapOptions}
                mapContainerStyle={containerStyle}
            >
                <MarkerF
                    position={CENTER}
                    title="Makari Gad Hydro Power Co."
                    onClick={() => setInfoOpen(true)}
                />
                {infoOpen && (
                    <InfoWindowF position={CENTER} onCloseClick={() => setInfoOpen(false)}>
                        <div className="pr-6">
                            <a href={`https://www.google.com/maps/search/?api=1&query=Makari+Gad+Hydro+Power+Co.+Kathmandu`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm leading-snug font-[Poppins] hover:underline cursor-pointer">
                            
                            <strong>Makari Gad Hydro Power Co.</strong>
                            <br />
                            Kathmandu, Nepal
                        </a>

                        </div>
                        
                    </InfoWindowF>
                )}
            </GoogleMap>
        </motion.div>
    );
}

export default GoogleMapBlock