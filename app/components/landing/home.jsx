"use client";

import { useRouter } from "next/navigation";
// import facebook from "../../assets/facebook.png";
// import instagram from "../../assets/instagram.png";
// import twitter from "../../assets/twitter.png";

const Home = () => {
	const router = useRouter();
	return (
		<div>
			<section
				className={`min-h-screen bg-black text-white mt-8 flex flex-col justify-center items-center relative overflow-hidden`}
				style={{
					backgroundImage: `url("/assets/bg.png")`,
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
			>
				{/* Background */}
				{/* <div className="absolute bg-black inset-0 flex justify-center items-center">
				<div className="absolute inset-0 bg-gradient-to-b from-black via-slate-200 to-black opacity-15" />
			</div> */}
				{/* Content Section */}
				<div className="font-[Manrope] text-center z-10 px-4">
					<p className="text-xl mb-4 text-gray-400">PrepMate AI</p>
					<h1 className="text-4xl md:text-6xl leading-tight mb-3">
						Empower Learning.
					</h1>
					<h1 className="text-4xl md:text-6xl leading-tight mb-3">
						Upload, Generate,
					</h1>
					<h1 className="text-4xl md:text-6xl leading-tight mb-8">
						Practice & Excel.
					</h1>
					<p className="text-lg md:text-base max-w-xl mx-auto mb-10 text-gray-400">
						Welcome to PrepMate. Revolutionize the way you learn and
						create! <br />
						Upload your PDFs, and let AI transform them into
						expertly crafted quizzes. Automate tasks, streamline
						workflows, and unlock the full potential of your study
						materials. Experience productivity, and simplicity—all
						in one platform.
					</p>
					<div className="flex justify-center space-x-4">
						<button
							className="px-6 py-3 bg-white text-black font-[Poppins] font-semibold rounded-full focus:outline-none hover:shadow-lg hover:scale-105 transition"
							onClick={() => router.push("/home")}
						>
							Start Generating🚀
						</button>
						<button
							className="px-6 py-3 text-white font-bold fon-[Poppins] rounded-full border border-gray-200 hover:shadow-md hover:shadow-white transition duration-100 focus:outline-none"
							onClick={() => router.push("/login")}
						>
							Login
						</button>
					</div>
				</div>
			</section>

			<section className="py-20 bg-black text-white font-[Manrope]">
				{/* Section Header */}
				<div className="text-center mb-16 mt-20 pb-8">
					<h2 className="text-3xl font-light text-gray-400 leading-normal">
						More features
					</h2>
					<h3 className="text-4xl font-semibold">
						PrepMate AI offers to an individual
					</h3>
				</div>

				{/* Features Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 max-w-6xl mx-auto px-4 pb-24">
					{/* Feature Item */}
					<div>
						<h4 className="text-xl font-medium mb-2">
							AI-Generated Questions
						</h4>
						<p className="text-gray-400 text-sm">
							Upload your PDFs and let our AI create tailored
							quizzes, helping you understand topics deeply.
						</p>
					</div>

					<div>
						<h4 className="text-xl font-medium mb-2">
							Read PDFs & Attachments
						</h4>
						<p className="text-gray-400 text-sm">
							Extract knowledge seamlessly from your uploaded
							documents, making learning efficient.
						</p>
					</div>

					<div>
						<h4 className="text-xl font-medium mb-2">Research</h4>
						<p className="text-gray-400 text-sm">
							Get quick, AI-powered insights on any topic with
							references and actionable summaries.
						</p>
					</div>
				</div>

				<div className="bg-black flex items-center justify-center py-28">
					{/* Section Wrapper */}
					<div
						className="relative w-full max-w-4xl mx-auto rounded-lg shadow-lg overflow-hidden px-6 py-12 text-center"
						style={{
							backgroundImage: `url("/assets/landing-image-2.png")`,
							backgroundSize: "cover",
							backgroundPosition: "center",
						}}
					>
						<div className="absolute inset-0 bg-black bg-opacity-10"></div>

						{/* Content */}
						<div className="relative z-10 text-white font-[Manrope]">
							<h2 className="text-xl md:text-3xl font-medium mb-4">
								PrepMate has no limitation.
							</h2>
							<p className="text-3xl mb-6">
								Get Started in a journey with PrepMate.
							</p>
							<button className="bg-white text-black px-4 py-2 rounded-full text-xs font-semibold hover:shadow-lg hover:scale-105 transition">
								Create an Account
							</button>
						</div>
					</div>
				</div>
			</section>
			<footer className="bg-black text-gray-400 py-10 px-8 opacity-95 pt-32 border-t border-gray-900">
				<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 pb-24">
					{/* Navigation */}
					<div>
						<h4 className="text-white font-bold mb-4">
							Navigation
						</h4>
						<ul className="space-y-2">
							<li>Schedule</li>
							<li>Courses</li>
							<li>Pricing</li>
							<li>Payment</li>
							<li>Books</li>
						</ul>
					</div>

					{/* About & Contact */}
					<div>
						<h4 className="text-white font-bold mb-4">
							Contact us
						</h4>
						<ul className="space-y-2">
							<li>+91 67555 01210</li>
							<li>+91 98480 01038</li>
							<li>help@prepmate.com</li>
						</ul>
					</div>

					{/* Social Media */}
					<div>
						<h4 className="text-white font-bold mb-4">Follow us</h4>
						<div className="flex space-x-4">
							<a
								href="#"
								className="text-gray-400 hover:text-white"
							>
								<i className="fab fa-facebook"></i>
							</a>
							<a
								href="#"
								className="text-gray-400 hover:text-white"
							>
								<i className="fab fa-google-plus-g"></i>
							</a>
							<a
								href="#"
								className="text-gray-400 hover:text-white"
							>
								<i className="fab fa-instagram"></i>
							</a>
							<a
								href="#"
								className="text-gray-400 hover:text-white"
							>
								<i className="fab fa-youtube"></i>
							</a>
							<a
								href="#"
								className="text-gray-400 hover:text-white"
							>
								<i className="fab fa-telegram"></i>
							</a>
							<a
								href="#"
								className="text-gray-400 hover:text-white"
							>
								<i className="fab fa-whatsapp"></i>
							</a>
						</div>
					</div>

					{/* Location */}
					<div>
						<h4 className="text-white font-bold mb-4">Location</h4>
						<p>2972 Whitefield Rd. Santa Ana, Bengaluru 25486</p>
					</div>
				</div>

				<div className="border-t border-gray-600 mt-10 pt-6 flex justify-between items-center">
					<p className="text-sm">&copy; 2024 PrepMade AI</p>
					<div className="space-x-4">
						<a href="#" className="text-sm">
							Privacy
						</a>
						<a href="#" className="text-sm">
							Policy
						</a>
						<a href="#" className="text-sm">
							All rights reserved
						</a>
					</div>
					<div className="flex space-x-2">
						<span className="text-sm">En</span>
						<span className="text-sm">Es</span>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Home;
