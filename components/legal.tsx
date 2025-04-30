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
          <h2>DATENSCHUTZHINWEISE</h2>
          <h3>I. Informationen über die Verarbeitung Ihrer Daten gemäß Art. 13 der Datenschutz-Grundverordnung (DS-GVO)</h3>
          
          <h4>1. Verantwortlicher und Datenschutzbeauftragter</h4>
          <p>Verantwortlich für diese Website ist [Name, Postadresse, E-Mail-Adresse des Verantwortlichen].</p>
          <p>Den Datenschutzbeauftragten erreichen Sie per E-Mail unter [E-Mail-Adresse des Datenschutzbeauftragten] oder über die Adresse [ggf. auch die Postadresse des Datenschutzbeauftragten].</p>

          <h4>2. Daten, die für die Bereitstellung der Website und die Erstellung der Protokolldateien verarbeitet werden</h4>
          
          <h5>a. Welche Daten werden für welchen Zweck verarbeitet?</h5>
          <p>Bei jedem Zugriff auf Inhalte der Website werden vorübergehend Daten gespeichert, die möglicherweise eine Identifizierung zulassen. Die folgenden Daten werden hierbei erhoben:</p>
          <ul>
            <li>Datum und Uhrzeit des Zugriffs</li>
            <li>IP-Adresse</li>
            <li>Hostname des zugreifenden Rechners</li>
            <li>Website, von der aus die Website aufgerufen wurde</li>
            <li>Websites, die über die Website aufgerufen werden</li>
            <li>Besuchte Seite auf unserer Website</li>
            <li>Meldung, ob der Abruf erfolgreich war</li>
            <li>Übertragene Datenmenge</li>
            <li>Informationen über den Browsertyp und die verwendete Version</li>
            <li>Betriebssystem</li>
          </ul>
          <p>Die vorübergehende Speicherung der Daten ist für den Ablauf eines Websitebesuchs erforderlich, um eine Auslieferung der Website zu ermöglichen. Eine weitere Speicherung in Protokolldateien erfolgt, um die Funktionsfähigkeit der Website und die Sicherheit der informationstechnischen Systeme sicherzustellen. In diesen Zwecken liegt auch unser berechtigtes Interesse an der Datenverarbeitung.</p>

          <h5>b. Auf welcher Rechtsgrundlage werden diese Daten verarbeitet?</h5>
          <p>Die Daten werden auf der Grundlage des Art. 6 Abs. 1 Buchstabe f DS-GVO verarbeitet.</p>

          <h5>c. Gibt es neben dem Verantwortlichen weitere Empfänger der personenbezogenen Daten?</h5>
          <p>Die Website wird bei [Name, Postadresse, E-Mail-Adresse des Hosters] gehostet. Der Hoster empfängt die oben genannten Daten als Auftragsverarbeiter.</p>

          <h5>d. Wie lange werden die Daten gespeichert?</h5>
          <p>Die Daten werden gelöscht, sobald sie für die Erreichung des Zwecks ihrer Erhebung nicht mehr erforderlich sind. Bei der Bereitstellung der Website ist dies der Fall, wenn die jeweilige Sitzung beendet ist. Die Protokolldateien werden […, maximal bis zu 24 Stunden] direkt und ausschließlich für Administratoren zugänglich aufbewahrt. Danach sind sie nur noch indirekt über die Rekonstruktion von Sicherungsbändern verfügbar und werden nach […, maximal vier Wochen] endgültig gelöscht.</p>

          <h4>3. Betroffenenrechte</h4>
          
          <h5>a. Recht auf Auskunft</h5>
          <p>Sie können Auskunft nach Art. 15 DS-GVO über Ihre personenbezogenen Daten verlangen, die wir verarbeiten.</p>

          <h5>b. Recht auf Widerspruch</h5>
          <p>Sie haben ein Recht auf Widerspruch aus besonderen Gründen (siehe unter Punkt II).</p>

          <h5>c. Recht auf Berichtigung</h5>
          <p>Sollten die Sie betreffenden Angaben nicht (mehr) zutreffend sein, können Sie nach Art. 16 DS-GVO eine Berichtigung verlangen. Sollten Ihre Daten unvollständig sein, können Sie eine Vervollständigung verlangen.</p>

          <h5>d. Recht auf Löschung</h5>
          <p>Sie können nach Art. 17 DS-GVO die Löschung Ihrer personenbezogenen Daten verlangen.</p>

          <h5>e. Recht auf Einschränkung der Verarbeitung</h5>
          <p>Sie haben nach Art. 18 DS-GVO das Recht, eine Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</p>

          <h5>f. Recht auf Beschwerde</h5>
          <p>Wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer personenbezogenen Daten gegen Datenschutzrecht verstößt, haben Sie nach Ar. 77 Abs. 1 DS-GVO das Recht, sich bei einer Datenschutzaufsichtsbehörde eigener Wahl zu beschweren. Hierzu gehört auch die für den Verantwortlichen zuständige Datenschutzaufsichtsbehörde: Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen, https://www.ldi.nrw.de/kontakt/ihre-beschwerde.</p>

          <h5>g. Recht auf Datenübertragbarkeit</h5>
          <p>Für den Fall, dass die Voraussetzungen des Art. 20 Abs. 1 DS-GVO vorliegen, steht Ihnen das Recht zu, sich Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an Dritte aushändigen zu lassen. Die Erfassung der Daten zur Bereitstellung der Website und die Speicherung der Protokolldateien sind für den Betrieb der Internetseite zwingend erforderlich. Sie beruhen daher nicht auf einer Einwilligung nach Art. 6 Abs. 1 Buchstabe a DS-GVO oder auf einem Vertrag nach Art. 6 Abs. 1 Buchstabe b DS-GVO, sondern sind nach Art. 6 Abs. 1 Buchstabe f DS-GVO gerechtfertigt. Die Voraussetzungen des Art. 20 Abs. 1 DSGVO sind demnach insoweit nicht erfüllt.</p>

          <h3>II. Recht auf Widerspruch gemäß Art. 21 Abs. 1 DS-GVO</h3>
          <p>Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit gegen die Verarbeitung Ihrer personenbezogenen Daten, die aufgrund von Artikel 6 Abs. 1 Buchstabe f DS-GVO erfolgt, Widerspruch einzulegen. Der Verantwortliche verarbeitet die personenbezogenen Daten dann nicht mehr, es sei denn, er kann zwingende schutzwürdige Gründe für die Verarbeitung nachweisen, die die Interessen, Rechte und Freiheiten der betroffenen Person überwiegen, oder die Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen. Die Erfassung der Daten zur Bereitstellung der Website und die Speicherung der Protokolldateien sind für den Betrieb der Internetseite zwingend erforderlich.</p>
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
        title: "Legal Notice",
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
        title: "Impressum",
        content: `
          <h2>Angaben gemäß § 5 TMG:</h2><br />
          <p>steindigital<br />
          Am sonnenhang 37<br />
          65321 Heidenrod<br />
          Deutschland</p>
         <br />
          <h2>Kontakt:</h2>
          <p>E-mail: steindigital@gmx.de</p>

          <h2>Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:</h2>
          <p>DE 369713031</p>
          <br />
          <h2>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</h2>
          <p>steindigital</p>
          <p>Am Sonnenhang 37</p>
          <p>65321 Heidenrod</p>
          <p>Deutschland</p>
          <p>Geschäftsführerin: Helena Stein</p>
          <br />
          <h2>Haftungsausschluss:</h2>
          <p>Der Inhalt dieser Website wird sorgfältig erstellt und überprüft. Dennoch übernimmt der Verantwortliche keine Gewähr für die Richtigkeit, Vollständigkeit und Aktualität der bereitgestellten Informationen. Haftungsansprüche gegen den Verantwortlichen, welche sich auf Schäden materieller oder ideeller Art beziehen, die durch die Nutzung der Informationen verursacht wurden, sind grundsätzlich ausgeschlossen, sofern keine vorsätzliche oder grobe Fahrlässigkeit vorliegt.</p>
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
          <div className="flex flex-wrap gap-4 mb-8 justify-center">
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

          <div className="prose max-w-none prose-headings:text-gray-900 prose-headings:font-bold prose-p:text-gray-600 prose-ul:text-gray-600">
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
