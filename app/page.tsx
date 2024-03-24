import Navbar from "./components/Navbar";
import Meme from "./components/meme";
import "./styles/App.css";

export default function Home() {
  return (
    <>
      <div className="app">
       <Navbar/>
       <Meme/>
      </div>
    </>
  );
}
