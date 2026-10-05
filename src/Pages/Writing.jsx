


import reviewPaperPdf from "../assets/RPaper.pdf";
import image from "../assets/RPaperIMG.png";
import noteIMG1 from "../assets/note1.jpeg";
import noteIMG2 from "../assets/note2.jpeg";
import noteIMG3 from "../assets/note3.jpeg";
import noteIMG4 from "../assets/note4.jpeg";
import noteIMG5 from "../assets/note5.jpeg";
import noteIMG6 from "../assets/note6.jpeg";
import noteIMG7 from "../assets/note7.jpeg";
import note1 from "../assets/note1.pdf";
import note2 from "../assets/note2.pdf";
import note3 from "../assets/note3.pdf";
import note4 from "../assets/note4.pdf";
import note5 from "../assets/note5.pdf";
import note6 from "../assets/note6.pdf";
import note7 from "../assets/note7.pdf";

const notes = [
  { id: 1, topic: "Topic 1", image: noteIMG1, notesUrl: note1 },
  { id: 2, topic: "Topic 2", image: noteIMG2, notesUrl: note2 },
  { id: 3, topic: "Topic 3", image: noteIMG3, notesUrl: note3 },
  { id: 4, topic: "Topic 4", image: noteIMG4, notesUrl: note4 },
  { id: 5, topic: "Topic 5", image: noteIMG5, notesUrl: note5 },
  { id: 6, topic: "Topic 6", image: noteIMG6, notesUrl: note6 },
  { id: 7, topic: "Topic 7", image: noteIMG7, notesUrl: note7 },
];

const youtubeVideoId = "3pUdoL6MHd8";

export default function Writing() {
return <><header className="page-heading"><p className="eyebrow">INQUIRY & KNOWLEDGE SHARING</p><h1>Research & teaching</h1><p>Research papers, study notes, and video content.</p></header><section className="research-paper"><div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start"><div><p className="eyebrow">RESEARCH RESOURCE</p><h2 className="text-3xl mb-5">Review paper</h2><p className="text-gray-600 mb-6">A comprehensive review of recent advancements in the field. Read the full paper using the link below.</p><a className="button-primary" href={reviewPaperPdf} target="_blank" rel="noopener noreferrer">Read paper ↗</a></div><a href={reviewPaperPdf} target="_blank" rel="noopener noreferrer"><img src={image} alt="Review paper preview" className="w-full h-72 object-cover object-top border border-gray-300" /></a></div></section><section><div className="section-heading"><div><p className="eyebrow">LEARNING RESOURCES</p><h2>Study notes</h2></div></div><div className="resource-grid">{notes.map(note => <article className="resource-card" key={note.id}><img src={note.image} alt={note.topic} loading="lazy" /><h3>{note.topic}</h3><a className="text-link" href={note.notesUrl} target="_blank" rel="noopener noreferrer">Read notes ↗</a></article>)}</div></section><section><p className="eyebrow">BEYOND THE PAGE</p><h2 className="text-3xl mb-6">Featured video</h2><iframe src={`https://www.youtube.com/embed/${youtubeVideoId}`} title="Jayraj Rana — featured teaching video" className="w-full aspect-video" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /></section></>;
}
