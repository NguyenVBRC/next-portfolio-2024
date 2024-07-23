export default function Technology() {
  const certifications = [
    "AWS Cloud Practitioner",
    "Full Stack Developer Certification",
    "Programming Foundations: Algorithms Certificate",
    "Programming Foundations: Object-Oriented Design",
  ];

  return (
    <div className="tech">
      <h2>Technologies</h2>
      <p id="hasBorder">
        AWS, Azure, TypeScript, Node, React, Next, Restful APIs, Git, Nuxt, Vue
      </p>
      <h2>Certifications</h2>
      <ul className="certs" id="hasBorder">
        {certifications.map((cert, index) => {
          return (
            <li key={index} id="certList">
              {cert}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
