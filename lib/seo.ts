import { AUTHOR_WEBSITE, BASE_URL } from "@/lib/variables";

export const ROOTKEYWORDS = [
    "invoice",
    "invoice generator",
    "invoice generating",
    "invoice app",
    "invoice generator app",
    "free invoice generator",
];

export const JSONLD = {
    "@context": "https://schema.org",
    "@type": "Website",
    name: "Invoice App",
    description: "An Invoice Generator Web App",
    keywords: ROOTKEYWORDS,
    url: BASE_URL,
    image: "",
    mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `${BASE_URL}/#website`,
    },
    author: {
        "@type": "Person",
        name: "Hector Munachi",
        url: AUTHOR_WEBSITE,
    },
    "@graph": [
        {
            "@type": "WebSite",
            "@id": `${BASE_URL}/#website`,
            url: `${BASE_URL}`,
        },
    ],
};
