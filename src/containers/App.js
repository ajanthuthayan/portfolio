import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Work from "../components/Work";
import Contact from "../components/Contact";
import About from "../components/About";
import Footer from "../components/Footer";

function App() {
	return (
		<div className="container">
			<Navbar />
			<Header />
			<About />
			<Work />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
