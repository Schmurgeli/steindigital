"use client";

import { useLanguage } from "./language-provider";
import { CheckCircle } from "lucide-react";

export default function Features() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("features.title")}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{t("features.subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <CheckCircle className="h-6 w-6 text-green-500 mr-2" />
              <h3 className="text-xl font-semibold">{t("features.innovation")}</h3>
            </div>
            <p className="text-gray-600">{t("features.innovation.desc")}</p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <CheckCircle className="h-6 w-6 text-green-500 mr-2" />
              <h3 className="text-xl font-semibold">{t("features.expertise")}</h3>
            </div>
            <p className="text-gray-600">{t("features.expertise.desc")}</p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <CheckCircle className="h-6 w-6 text-green-500 mr-2" />
              <h3 className="text-xl font-semibold">{t("features.support")}</h3>
            </div>
            <p className="text-gray-600">{t("features.support.desc")}</p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <CheckCircle className="h-6 w-6 text-green-500 mr-2" />
              <h3 className="text-xl font-semibold">{t("features.quality")}</h3>
            </div>
            <p className="text-gray-600">{t("features.quality.desc")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
