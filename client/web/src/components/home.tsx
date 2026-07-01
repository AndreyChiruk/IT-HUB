import Header from "./header";
import "../styles/welcome.css";
function HomePage() {
  return (
    <div className="container">
      <Header />
      <div className="content-block">
        <h1 className="content-title">WELCOME PAGE</h1>
        <p className="content-text">
          Создавайте и посещайте митапы, конференции и воркшопы. IT-HUB — это
          место, где рождаются идеи и находятся таланты для ваших проектов.
        </p>
      </div>
    </div>
  );
}
export default HomePage;
