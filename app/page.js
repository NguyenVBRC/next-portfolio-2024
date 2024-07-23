import Introduction from "./components/Introduction";
import Technology from "./components/Technology";
import Experience from "./components/Experience/Experience";

export default function Home() {
  return (
    <div className="container">
      <div className="intro-container">
        <div id="intro">
          <Introduction />
        </div>
      </div>
      <div className="blog-container">blog</div>
    </div>
  );
}
