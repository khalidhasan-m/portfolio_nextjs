import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import About from "@/components/About";

export default function AboutPage() {
  return <><Navbar /><main id="main-content" role="main" tabIndex={-1}><div className="noise-bg"><About /></div></main><Footer /></>;
}
