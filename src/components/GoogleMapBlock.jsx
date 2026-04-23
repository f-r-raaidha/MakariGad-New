"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { APIProvider, Map, AdvancedMarker, InfoWindow } from "@vis.gl/react-google-maps";
import { pre } from "framer-motion/client";

const CENTER = { lat: 27.73933774359107, lng: 85.33673144417855 };

function GoogleMapBlock() {
    const [infoOpen, setInfoOpen] = useState(true);

    return (
        <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full h-full min-h-[520px] rounded-xl overflow-hidden"
            aria-label="Google Map"
        >
            <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
                <Map
                    defaultCenter={CENTER}
                    defaultZoom={18}
                    style={{ width: "100%", height: "100%" }}
                    mapId={process.env.NEXT_PUBLIC_GOOGLE_MAP_ID}
                >
                    <AdvancedMarker
                        position={CENTER}
                        title="Makari Gad Hydro Power Co."
                        onClick={() => setInfoOpen(prev => !prev)}
                    />

                    {infoOpen && (
                        <InfoWindow
                            position={CENTER}
                            onCloseClick={() => setInfoOpen(false)}
                        >
                            <div className="pr-6"><a
                                
                                    href="https://www.google.com/maps/search/?api=1&query=Makari+Gad+Hydro+Power+Co.+Kathmandu"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm leading-snug font-[Poppins] hover:underline cursor-pointer"
                                >
                                    <strong>Makari Gad Hydro Power Co.</strong>
                                    <br />
                                    Kathmandu, Nepal
                                </a>
                            </div>
                        </InfoWindow>
                    )}
                </Map>
            </APIProvider>
        </motion.div>
    );
}

export default GoogleMapBlock;