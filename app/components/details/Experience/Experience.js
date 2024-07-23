import JobDetails from "./JobDetails";
import workHistory from "./workHistory.json";

export default function Experience() {
  return (
    <div className="exp-container">
      {workHistory.map((work) => {
        return (
          <div key={work.title} id="history-container">
            <JobDetails details={work} />
          </div>
        );
      })}
    </div>
  );
}
