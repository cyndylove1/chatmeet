
export interface Couple {
  id: number;
  name: string;
  story: string;
  location: string;
  mainImage: string;
  thumbnails: string[];
}


export const couples: Couple[] = [
  {
    id: 1,
    name: "Joshua & Martha",
    location: "Ukraine, Kyiv",
    mainImage: "/images/couple 6.PNG",
    thumbnails: [
      "/images/couple 6.PNG",
      "/images/couple 7.PNG",
      "/images/couple 8.PNG",
      "/images/couple 9.PNG",
    ],
    story:
      "Joshua and Martha met through shared values and meaningful conversations. What started as a simple chat turned into a strong connection built on trust and respect.",
  },
  {
    id: 2,
    name: "Daniel & Favour",
    location: "Berlin, Germany",
    mainImage: "/images/couple 7.png",
    thumbnails: [
      "/images/couple 6.png",
      "/images/couple 7.png",
      "/images/couple 8.png",
      "/images/couple 9.png",
    ],
    story:
      "Daniel and Favour connected over music and travel. Their shared passions brought them closer, turning everyday conversations into something special.",
  },
  {
    id: 3,
    name: "Liam & Noor",
    location: "Toronto, Canada",
    mainImage: "/images/couple 8.png",
    thumbnails: [
      "/images/couple 6.png",
      "/images/couple 7.png",
      "/images/couple 8.png",
      "/images/couple 9.png",
    ],
    story:
      "Liam and Noor met during a virtual community event and quickly bonded over late-night conversations and shared ambitions. Their connection grew naturally, grounded in honesty and mutual support.",
  },
  {
    id: 4,
    name: "Andre & Sofia",
    location: "Lisbon, Portugal",
    mainImage: "/images/couple 9.png",
    thumbnails: [
      "/images/couple 6.png",
      "/images/couple 7.png",
      "/images/couple 8.png",
      "/images/couple 9.png",
    ],
    story:
      "Andre and Sofia crossed paths through a mutual friend and discovered a shared love for culture and creativity. What began as casual conversations soon evolved into a meaningful and lasting connection.",
  },
];
