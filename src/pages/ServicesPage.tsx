// jshint esversion:6
import HeroImg from "@/assets/services/hero_services-img.png";
import { SERVICE_CATEGORY } from "@/data/global/services";
import { useState } from "react";
import { WebDevService } from "@/components/services/navigation";

export const ServicesPage: React.FC = () => {

    // Services Navigation
    const [currentService, setCurrentService] = useState<SERVICE_CATEGORY>(SERVICE_CATEGORY.MOBILE_DEV)

    const ServicePageStyles = {
        heroStyle: {
            background: `url(${HeroImg}) no-repeat center center/cover`
        }
    }


    return (
        <>
            {/* Hero Image */}
            <section className="pb-[2rem]">
                <div className="w-full h-[178px] sm:h-[400px] relative" style={ServicePageStyles.heroStyle}>
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <p className="text-xl font-AeonikTrial-Bold text-white">SERVICES - Web App Development</p>
                    </div>
                </div>
            </section>

            {/* Services */}
            <section className="px-inline">

                {/* Navigation */}
                <div className="font-AeonikTrial-Regular">
                    {/* Web and Movile */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-3 gap-y-5">
                        <p onClick={() => setCurrentService(SERVICE_CATEGORY.WEB_DEV)} className={`cursor-pointer p-2 border-b-[2px] text-center ${currentService == SERVICE_CATEGORY.WEB_DEV ? "text-pry border-pry" : "border-b-white"} `}>Web Development Services</p>
                        <p onClick={() => setCurrentService(SERVICE_CATEGORY.MOBILE_DEV)} className={`cursor-pointer p-2 border-b-[2px] text-center ${currentService == SERVICE_CATEGORY.MOBILE_DEV ? "text-pry border-pry" : "border-b-white"} `}>Mobile App Development</p>
                        <p onClick={() => setCurrentService(SERVICE_CATEGORY.DESIGN)} className={`cursor-pointer p-2 border-b-[2px] text-center ${currentService == SERVICE_CATEGORY.DESIGN ? "text-pry border-pry" : "border-b-white"} `}>Design and Branding</p>
                        <p onClick={() => setCurrentService(SERVICE_CATEGORY.TRAINING)} className={`cursor-pointer p-2 border-b-[2px] text-center ${currentService == SERVICE_CATEGORY.TRAINING ? "text-pry border-pry" : "border-b-white"} `}>Training and Patnerships</p>
                    </div>
                </div>

                {/*  */}
                <div className="mt-7">
                    <WebDevService />
                </div>
            </section>

        </>
    )
}