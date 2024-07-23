import JobDetails from "./JobDetails";
import workHistory from "./workHistory.json";

export default function Experience() {
  return (
    <>
      <h2>My Experience</h2>
      {workHistory.map((work) => {
        return (
          <div key={work.title}>
            <JobDetails details={work} />
          </div>
        );
      })}
    </>
  );
}
