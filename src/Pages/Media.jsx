


import img1 from "../assets/img1.jpeg";
import img2 from "../assets/img2.jpeg";
import img3 from "../assets/img3.jpeg";
import img4 from "../assets/img4.jpeg";
import img5 from "../assets/img5.jpeg";
import img6 from "../assets/img6.jpeg";
import img7 from "../assets/img7.jpeg";
import img8 from "../assets/img8.jpeg";
import img9 from "../assets/img9.jpeg";

import img12 from "../assets/img12.jpeg";
import img13 from "../assets/img13.jpeg";
import img14 from "../assets/img14.jpeg";
import img15 from "../assets/img15.jpeg";
import img16 from "../assets/img16.jpeg";
import img17 from "../assets/img17.jpeg";
import img18 from "../assets/img18.jpeg";
import img19 from "../assets/img19.jpeg";
import img20 from "../assets/img20.jpeg";

import img22 from "../assets/img22.jpeg";






import img29 from "../assets/img29.jpeg";
import img30 from "../assets/img30.jpeg";

import img32 from "../assets/img32.jpeg";
import img33 from "../assets/img33.jpeg";
import img34 from "../assets/img34.jpeg";
import img35 from "../assets/img35.jpeg";
import img36 from "../assets/img36.jpeg";
import img37 from "../assets/img37.jpeg";
import img38 from "../assets/img38.jpeg";

import img40 from "../assets/img40.jpeg";
import img41 from "../assets/img41.jpeg";
import img42 from "../assets/img42.jpeg";
import img43 from "../assets/img43.jpeg";
import img44 from "../assets/img44.jpeg";

const images = [
  { src: img1, title: "Featured at Divya Bhaskar for Participating in workshop at CSIR-CSMCRI" },
  { src: img2, title: "Featuring with director of CSIR-CSMCRI at Divya Bhaskar" },
  { src: img3, title: "Student's of Jayraj stood first at inter-school science fair" },
  { src: img4, title: "Reciting poetry at Kavya Goshthi" },
  { src: img5, title: "Chilling at Rishikesh after visiting IIT Roorkee" },
  { src: img6, title: "in conversation with Scientist Dr.Prakash Koringa on animal biology" },
  { src: img7, title: "Falicitation by Dr.Alpesh Patel at genexplore dignostics & research centre" },
  { src: img8, title: "Jayraj With His Students at Aakash Institute" },
  { src: img9, title: "Explaining Plant tissue live demonstration" },
  { src: img12, title: "Explaining Anatomy of Buccal Cavity by model demonstration" },
  { src: img13, title: "Explainig Diffusion" },
  { src: img14, title: "at Wildlife Institute of India,Dehradun" },
  { src: img15, title: "Plantation Drive at Veer Narmad South Gujarat University lead by Jayraj " },
  { src: img16, title: "Plantation" },
  { src: img17, title: "Jayraj with his student and the faculties of Dept. of Microbiology,Vanita Vishram Women's University" },
  { src: img18, title: "Jayraj Explainig and helping his Student to extract out the phytochemicals" },
  { src: img19, title: `Students presenting their work on "Development of Nutritional Pesticide" at science fair` },
  { src: img20, title: `Students presenting their work on "Bio Enzyme: an alternative to hazardous household products" at science fair` },
  { src: img22, title: "Jayraj and students With visiters at District level science fair, Vidhyadeep University" },
  { src: img29, title: "Board Work of Human Excretory System " },
  { src: img30, title: "Board Work of Nephron and its mechanism" },
  { src: img32, title: "with fellow Labmates at IISER,Bhopal" },
  { src: img33, title: "At IISER,Bhopal" },
  { src: img34, title: "Handling Transgenic Mice at IISER,Bhopal" },
  { src: img35, title: "Performing Immunological assay" },
  { src: img36, title: "Bid Adieu to Dr.Himanshu Kumar,Professer " },
  { src: img37, title: "with Dr.Himanshu Kumar,Professer" },
  { src: img38, title: "Observing growth of Microalgae at CSIR CSMCRI" },
  { src: img40, title: "Fellow Participants and Instructor Principal Scientist Dr.Subir Kumar Mandal " },
  { src: img41, title: "At Internation Conferance held by SAST,GTU" },
  { src: img42, title: "Oral presentation of dissertation at Internation Conferance held by SAST,GTU" },
  { src: img43, title: "Oral presentation at National Conferance held by BMU,surat" },
  { src: img44, title: `Jayraj With his dissertation thesis on "Metagenomic Profiling..."` },
];

export default function Media() {
return <><header className="page-heading"><p className="eyebrow">IN THE LAB & BEYOND</p><h1>Academic life & moments</h1><p>Research, conferences, classroom experiences, and creative pursuits.</p></header><div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">{images.map(({ src, title }) => <figure key={src} className="break-inside-avoid border border-gray-300 bg-white"><a href={src} target="_blank" rel="noopener noreferrer" aria-label={`View photo: ${title}`}><img src={src} alt={title} loading="lazy" className="w-full h-auto" /></a><figcaption className="p-4 text-xs text-gray-600">{title}</figcaption></figure>)}</div></>;
}

