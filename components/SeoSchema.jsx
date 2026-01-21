export default function SeoSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Musab Hassan",
    url: "https://techmusab.in",
    jobTitle: "Full Stack MERN Developer",
    sameAs: [
      "https://www.linkedin.com/in/musab0712",
      "https://github.com/musab0712",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
