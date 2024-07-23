import Introduction from "./components/Introduction";
import Details from "./components/details/Details";

export default function Home() {
  return (
    <div className="container">
      <div className="intro-container">
        <div id="intro">
          <Introduction />
        </div>
        <Details />
      </div>
      <div className="blog-container">blog</div>
    </div>
  );
}
