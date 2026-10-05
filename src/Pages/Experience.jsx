export default function Experience() {  const experiences = [
    {
      title: "Biology NEET Faculty [Part Time]",
      organization: "Vanita Vishram Girls’ High School | Surat",
      duration: "Oct 2023 - Present",
      description: [
        "Designed engaging lesson plans for high school biology classes.",
        "Guided two student groups focused on Bioenzyme and Nutritional Pesticides, leading them to participate in the inter-school science fair, where they won first prize and received a grant from SSIP at the district level.",
      ],
    },
    {
      title: "Assistant Lecturer",
      organization: "Aakash Institute | Surat, Anand",
      duration: "July 2022 – Aug 2023",
      description: [
        "Collaborated with a team to develop and deliver high-quality educational content.",
        "Conducted workshops and training sessions for students preparing for competitive exams.",
        "Leveraged my biology expertise to enhance teaching materials.",
      ],
    },
    {
      title: "Research Trainee",
      organization: "Main Cotton Research Center, NAU | Surat",
      duration: "Mar 2022 – April 2022",
      description: [
        "Worked in the microbiology and biotechnology department.",
        "Learned several hands-on trainings both In vitro and In silico.",
      ],
    },
  ];

return <><header className="page-heading"><p className="eyebrow">TEACHING & RESEARCH</p><h1>Academic experience</h1><p>A professional journey through education, mentorship, and laboratory training.</p></header><div className="experience-list">{experiences.map(exp => <article className="experience-entry" key={exp.title}><p className="eyebrow">{exp.duration}</p><div><h2>{exp.title}</h2><p>{exp.organization}</p><ul>{exp.description.map(desc => <li key={desc}>{desc}</li>)}</ul></div></article>)}</div></>;
}
