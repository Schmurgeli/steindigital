"use client";

import { useLanguage } from "./language-provider";
import Image from "next/image";
import { CheckCircle } from "lucide-react";

export default function Services() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-green-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t("services.title")}</h2>
            <p className="text-gray-600 mb-8">{t("services.subtitle")}</p>

            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-[#459a35] mr-3 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">{t("services.items.webDevelopment")}</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-[#459a35] mr-3 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">{t("services.items.digitalStrategy")}</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-[#459a35] mr-3 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">{t("services.items.dataAnalytics")}</p>
              </div>
             
            </div>
          </div>

          <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
            {/* Test image */}
            <div className="absolute top-0 left-0 w-full h-full">
              <img src="/images/city_maps.jpg" alt="Test image" className="w-full h-full object-cover" />
            </div>
            <Image
              src="/images/city_maps.jpg"
              alt="Digital solutions in action"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={100}
              onError={(e) => console.error("Image failed to load:", e)}
              onLoad={(e) => console.log("Image loaded successfully")}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
