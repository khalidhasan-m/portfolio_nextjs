import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Services from "@/components/Services";

export default function ServicesPage() {
  return <><Navbar /><main id="main-content" role="main" tabIndex={-1}><div className="noise-bg"><Services /></div></main><Footer /></>;
}
