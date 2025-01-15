import Image from "next/image";
import Intro from "./components/Intro/Intro";
import Slideshow from "./components/Slideshow/Slideshow";

export default function Home() {
  return (
    <div className="parent-container">
      <Intro/>
      <Slideshow/>
    </div>
  )
}
