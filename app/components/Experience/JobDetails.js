export default function JobDetails(details) {
  return (
    <div>
      <h3>{details.title}</h3>
      <p>{details.location}</p>
      <p>{details.description}</p>
      <p>{details.timeFrame}</p>
    </div>
  );
}
