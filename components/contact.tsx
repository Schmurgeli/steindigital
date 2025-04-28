"use client";

import { useLanguage } from "./language-provider";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Get in Touch Section */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("contact.title")}</h2>
            <p className="text-gray-600 mb-8">{t("contact.subtitle")}</p>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="flex items-start">
              <Mail className="h-6 w-6 text-[#459a35] mr-3 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium">{t("contact.email")}</p>
                <p className="text-gray-600">info@steindigital.com</p>
              </div>
            </div>

            <div className="flex items-start">
              <Phone className="h-6 w-6 text-[#459a35] mr-3 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium">{t("contact.phone")}</p>
                <p className="text-gray-600">+49 (0) 123 456 789</p>
              </div>
            </div>

            <div className="flex items-start">
              <MapPin className="h-6 w-6 text-[#459a35] mr-3 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium">{t("contact.address")}</p>
                <p className="text-gray-600">Musterstraße 123, 12345 Berlin, Deutschland</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
