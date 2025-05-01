"use client";

import React, { createContext, useContext, useState } from "react";

type Language = "en" | "de";

interface TranslationKeys {
  // Navbar
  "nav.home": string;
  "nav.services": string;
  "nav.about": string;
  "nav.contact": string;
  "nav.language": string;

  // Hero
  "hero.title": string;

  "hero.cta": string;

  // Services
  "services.title": string;
  "services.subtitle": string;
  "services.items.webDevelopment": string;
  "services.items.digitalStrategy": string;
  "services.items.dataAnalytics": string;
 


  // Footer
  "footer.company": string;
  "footer.about": string;
  "footer.team": string;
  "footer.careers": string;
  "footer.blog": string;
  "footer.contact": string;
  "footer.legal": string;
  "footer.privacy": string;
  "footer.terms": string;
  "footer.cookies": string;
  "footer.gdpr": string;
  "footer.copyright": string;
  "footer.description": string;

  // Features
  "features.title": string;
  "features.subtitle": string;
  "features.innovation": string;
  "features.innovation.desc": string;
  "features.expertise": string;
  "features.expertise.desc": string;
  "features.support": string;
  "features.support.desc": string;
  "features.quality": string;
  "features.quality.desc": string;

  // Contact
  "contact.title": string;
  "contact.subtitle": string;
  "contact.name": string;
  "contact.email": string;
  "contact.phone": string;
  "contact.address": string;
  "contact.subject": string;
  "contact.message": string;
  "contact.send": string;
  "contact.success": string;
  "contact.error": string;
  "contact.required": string;
  "contact.invalid_email": string;

  // Legal
  "legal.title": string;
  "legal.subtitle": string;
}

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: keyof TranslationKeys) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, TranslationKeys> = {
  en: {
    // Navbar
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.language": "DE",

    // Hero
    "hero.title": "DIGITALISATION AND HIKING TOURISM",

    "hero.cta": "Get Started",

    // Services
    "services.title": "Our Services",
    "services.subtitle": "Comprehensive digital solutions for your business needs",
    "services.items.webDevelopment": "Custom web and mobile application development",
    "services.items.digitalStrategy": "Digital strategy and consulting services",
    "services.items.dataAnalytics": "Data analytics and business intelligence solutions",
    
    

    // Footer
    "footer.company": "Company",
    "footer.about": "About Us",
    "footer.team": "Our Team",
    "footer.careers": "Careers",
    "footer.blog": "Blog",
    "footer.contact": "Contact",
    "footer.legal": "Legal",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
    "footer.cookies": "Cookie Policy",
    "footer.gdpr": "Legal Notice",
    "footer.copyright": "All rights reserved",
    "footer.description":
      "Innovative digital solutions for modern businesses. We help companies navigate the digital landscape and achieve their goals.",

    // Features
    "features.title": "Why Choose Us",
    "features.subtitle": "We deliver exceptional results through innovative solutions",
    "features.innovation": "Innovation",
    "features.innovation.desc": "Stay ahead with cutting-edge technology solutions",
    "features.expertise": "Expertise",
    "features.expertise.desc": "Years of experience in digital transformation",
    "features.support": "Support",
    "features.support.desc": "24/7 dedicated customer support",
    "features.quality": "Quality",
    "features.quality.desc": "Commitment to excellence in every project",

    // Contact
    "contact.title": "Get in Touch",
    "contact.subtitle": "Let's discuss how we can help your business grow",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.phone": "Phone",
    "contact.address": "Address",
    "contact.subject": "Subject",
    "contact.message": "Your Message",
    "contact.send": "Send Message",
    "contact.success": "Message sent successfully!",
    "contact.error": "Error sending message. Please try again.",
    "contact.required": "This field is required",
    "contact.invalid_email": "Please enter a valid email address",

    // Legal
    "legal.title": "Legal Documents",
    "legal.subtitle": "Please review our legal documents and policies",
  },
  de: {
    // Navbar
    "nav.home": "Startseite",
    "nav.services": "Digitalisierung von Wanderwegen",
    "nav.about": "Digitales Wegemanagement",
    "nav.contact": "Kontakt",
    "nav.language": "EN",

    // Hero
    "hero.title": "DIGITALISIERUNG UND WANDERTOURISMUS",
    "hero.cta": "Kontakt",

    // Services
    "services.title": "Digitales Wegemanagement",
    "services.subtitle":
      "Schöne Landschaften allein reichen nicht aus - gepflegte Wegweiser, saubere Rastplätze und funktionierende Mülleimer sind essenziell für ein hochwertiges Wandererlebnis.",
    "services.items.webDevelopment": "Ein effizientes digitales Wegemanagement ist die Grundlage dafür, Wanderwege langfristig attraktiv und nutzerfreundlich zu gestalten.",
    "services.items.digitalStrategy": "In Deutschland verfügen bisher nur wenige Wanderwegenetzwerke über ein modernes digitales Managementsystem.",
    "services.items.dataAnalytics": "Mit einem durchdachten digitalen Wegemanagement lassen sich Mängel schnell erfassen und beheben, notwendige Wartungen planen und die Qualität der Wege dauerhaft sichern",
    
    

    // Footer
    "footer.company": "Unternehmen",
    "footer.about": "Über uns",
    "footer.team": "Unser Team",
    "footer.careers": "Karriere",
    "footer.blog": "Blog",
    "footer.contact": "Kontakt",
    "footer.legal": "Rechtliches",
    "footer.privacy": "Datenschutz",
    "footer.terms": "Nutzungsbedingungen",
    "footer.cookies": "Cookie-Richtlinie",
    "footer.gdpr": "Impressum",
    "footer.copyright": "Alle Rechte vorbehalten",
    "footer.description":
      "Innovative digitale Lösungen für modernes Unternehmen. Wir helfen Unternehmen, sich im digitalen Umfeld zurechtzufinden und ihre Ziele zu erreichen.",

    // Features
    "features.title": "Digitalisierung von Wanderwegen",
    "features.subtitle":
      "Im digitalen Zeitalter erwarten Wanderinnen und Wanderer weit mehr als klassische Karten und Wegweiser. Über Smartphones und Apps stehen heute umfassende Informationen wie Streckenverlauf, Schwierigkeitsgrad, Höhenprofile oder aktuelle Wetterdaten jederzeit zur Verfügung.",
    "features.innovation": "Digitale Angebote",
    "features.innovation.desc": "begleiten Wanderer entlang der gesamten Reise - vor, während und nach dem Wandern.",
    "features.expertise": "Vor der Wanderung",
    "features.expertise.desc":
      "geht es um Inspiration und Planung, etwa durch interaktive Karten, Tourenvorschläge oder Wetterwarnungen.",

    "features.support": "Während der Wanderung",
    "features.support.desc": "sind Navigation, aktuelle Hinweise und Echtzeit-Informationen entscheidend.",
    "features.quality": "Nach der Wanderung ",
    "features.quality.desc":
      "bieten Social Media, Newsletter oder Feedbackportale die Chance, das Erlebnis zu teilen, neue Zielgruppen zu erreichen und dauerhafte Wanderbegeisterung zu fördern.",

    // Contact
    "contact.title": "Kontakt",
    "contact.subtitle":
      "Als Fachinformatikerin für Anwendungsentwicklung mit einem Bachelor of Arts in Intermedia vereine ich technisches Know- how mit kreativem Denken. Ich spezialisiere mich auf die Entwicklung von Konzepten zur Digitalisierung von Wanderwegen sowie auf die Einführung eines digitalen Wegemanagements. Mein Ziel ist es, durch innovative Lösungen die Pflege, Verwaltung und das Erlebnis von Wanderwegen zukunftsfähig zu gestalten.",
    "contact.name": "Ihr Name",
    "contact.email": "E-Mail",
    "contact.phone": "Telefon",
    "contact.address": "Adresse",
    "contact.subject": "Betreff",
    "contact.message": "Ihre Nachricht",
    "contact.send": "Nachricht senden",
    "contact.success": "Nachricht erfolgreich gesendet!",
    "contact.error": "Fehler beim Senden der Nachricht. Bitte versuchen Sie es erneut.",
    "contact.required": "Dieses Feld ist erforderlich",
    "contact.invalid_email": "Bitte geben Sie eine gültige E-Mail-Adresse ein",

    // Legal
    "legal.title": "Rechtliche Dokumente",
    "legal.subtitle": "Bitte lesen Sie unsere rechtlichen Dokumente und Richtlinien",
  },
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: keyof TranslationKeys) => {
    return translations[language][key];
  };

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
