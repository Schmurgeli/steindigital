"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "./language-provider";
import { useSearchParams } from "next/navigation";

type LegalDocumentType = "privacy" | "terms" | "cookies" | "gdpr";

interface LegalDocument {
  title: string;
  content: string;
}

interface LegalDocuments {
  [key: string]: {
    en: LegalDocument;
    de: LegalDocument;
  };
}

export default function Legal() {
  const { t, language } = useLanguage();
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState<LegalDocumentType>("privacy");

  useEffect(() => {
    const doc = searchParams.get("doc");
    if (doc && ["privacy", "terms", "cookies", "gdpr"].includes(doc)) {
      setActiveTab(doc as LegalDocumentType);
    }
  }, [searchParams]);

  const legalDocuments: LegalDocuments = {
    privacy: {
      en: {
        title: "Privacy Policy",
        content: `
          <h2>1. Data Protection at a Glance</h2>
          <p>This privacy policy explains how we collect and use your personal data when you use our website.</p>
          
          <h2>2. Data Collection on Our Website</h2>
          <p>We collect personal data that you voluntarily provide to us when you contact us via email or our contact form.</p>
          
          <h2>3. Your Rights</h2>
          <p>You have the right to request information about your stored data, its origin, its recipients, and the purpose of its collection at no charge.</p>
        `,
      },
      de: {
        title: "Datenschutzerklärung",
        content: `
          <h2>1. Datenschutz auf einen Blick</h2>
          <p>Diese Datenschutzerklärung erläutert, wie wir Ihre personenbezogenen Daten erheben und verwenden, wenn Sie unsere Website nutzen.</p>
          
          <h2>2. Datenerhebung auf unserer Website</h2>
          <p>Wir erheben personenbezogene Daten, die Sie uns freiwillig mitteilen, wenn Sie uns per E-Mail oder über unser Kontaktformular kontaktieren.</p>
          
          <h2>3. Ihre Rechte</h2>
          <p>Sie haben das Recht, unentgeltlich Auskunft über Ihre gespeicherten Daten, deren Herkunft, deren Empfänger und den Zweck der Datenerhebung zu verlangen.</p>
        `,
      },
    },
    terms: {
      en: {
        title: "Terms of Service",
        content: `
          <h2>1. General Terms</h2>
          <p>By accessing and using our website, you accept and agree to be bound by these Terms of Service.</p>
          
          <h2>2. Services</h2>
          <p>We provide digital solutions and consulting services as described on our website.</p>
          
          <h2>3. Intellectual Property</h2>
          <p>All content on this website is protected by copyright and other intellectual property rights.</p>
        `,
      },
      de: {
        title: "Nutzungsbedingungen",
        content: `
          <h2>1. Allgemeine Bedingungen</h2>
          <p>Durch den Zugriff auf und die Nutzung unserer Website akzeptieren Sie diese Nutzungsbedingungen und erklären sich mit ihnen einverstanden.</p>
          
          <h2>2. Dienstleistungen</h2>
          <p>Wir bieten digitale Lösungen und Beratungsdienstleistungen an, wie auf unserer Website beschrieben.</p>
          
          <h2>3. Geistiges Eigentum</h2>
          <p>Alle Inhalte dieser Website sind durch Urheberrecht und andere geistige Eigentumsrechte geschützt.</p>
        `,
      },
    },
    cookies: {
      en: {
        title: "Cookie Policy",
        content: `
          <h2>1. What are Cookies?</h2>
          <p>Cookies are small text files that are stored on your device when you visit our website.</p>
          
          <h2>2. How We Use Cookies</h2>
          <p>We use cookies to improve your browsing experience and analyze website traffic.</p>
          
          <h2>3. Cookie Management</h2>
          <p>You can control and/or delete cookies as you wish through your browser settings.</p>
        `,
      },
      de: {
        title: "Cookie-Richtlinie",
        content: `
          <h2>1. Was sind Cookies?</h2>
          <p>Cookies sind kleine Textdateien, die auf Ihrem Gerät gespeichert werden, wenn Sie unsere Website besuchen.</p>
          
          <h2>2. Wie wir Cookies verwenden</h2>
          <p>Wir verwenden Cookies, um Ihr Surferlebnis zu verbessern und den Website-Verkehr zu analysieren.</p>
          
          <h2>3. Cookie-Verwaltung</h2>
          <p>Sie können Cookies über Ihre Browsereinstellungen nach Belieben steuern und/oder löschen.</p>
        `,
      },
    },
    gdpr: {
      en: {
        title: "GDPR Compliance",
        content: `
          <h2>1. GDPR Overview</h2>
          <p>We are committed to complying with the General Data Protection Regulation (GDPR).</p>
          
          <h2>2. Data Processing</h2>
          <p>We process personal data in accordance with GDPR requirements and maintain appropriate security measures.</p>
          
          <h2>3. Data Subject Rights</h2>
          <p>Under GDPR, you have rights including access, rectification, erasure, and data portability.</p>
        `,
      },
      de: {
        title: "DSGVO-Konformität",
        content: `
          <h2>1. DSGVO-Überblick</h2>
          <p>Wir sind bestrebt, die Datenschutz-Grundverordnung (DSGVO) einzuhalten.</p>
          
          <h2>2. Datenverarbeitung</h2>
          <p>Wir verarbeiten personenbezogene Daten gemäß den DSGVO-Anforderungen und halten angemessene Sicherheitsmaßnahmen ein.</p>
          
          <h2>3. Betroffenenrechte</h2>
          <p>Gemäß der DSGVO haben Sie Rechte einschließlich Auskunft, Berichtigung, Löschung und Datenübertragbarkeit.</p>
        `,
      },
    },
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{t("legal.title")}</h2>
          <p className="text-gray-600 dark:text-gray-400">{t("legal.subtitle")}</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap gap-4 mb-8">
            {Object.keys(legalDocuments).map((key) => (
              <button
                key={key}
                onClick={() => setActiveTab(key as LegalDocumentType)}
                className={`px-6 py-2 rounded-md font-medium transition-colors ${
                  activeTab === key ? "bg-[#459a35] text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {legalDocuments[key][language].title}
              </button>
            ))}
          </div>

          <div className="prose max-w-none">
            <div
              dangerouslySetInnerHTML={{
                __html: legalDocuments[activeTab][language].content,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
