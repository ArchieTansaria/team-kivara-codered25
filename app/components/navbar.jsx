import logo from "../../assets/logo.png";

const Navbar = () => {
	return (
		<nav className="fixed top-0 left-0 w-full z-50 bg-black text-white px-10 py-6 flex justify-between items-center border-b border-gray-800">
			{/* Left Section */}
			<ul className="flex space-x-6 text-xs font-[poppins] pl-24">
				<li className="hover:text-gray-400 cursor-pointer">About</li>
				<li className="hover:text-gray-400 cursor-pointer">
					Technologies
				</li>
				<li className="hover:text-gray-400 cursor-pointer">Products</li>
				<li className="hover:text-gray-400 cursor-pointer">Discover</li>
			</ul>

			{/* Center Section */}
			<div className="flex items-center space-x-2">
				<div className="text-black rounded-full w-6 h-6 flex items-center justify-center">
					{/* <img src={logo} alt="PrepMate AI logo" /> */}
				</div>
				<span className="text-2xl font-[manrope]">PrepMate AI</span>
			</div>

			{/* Right Section */}
			<div className="flex space-x-6 items-center text-xs font-[poppins] pr-24">
				<span className="hover:text-gray-400 cursor-pointer">Team</span>
				<span className="hover:text-gray-400 cursor-pointer">
					Pricing
				</span>
				<span className="hover:text-gray-400 cursor-pointer">
					Buy Premium
				</span>
				<button className="bg-white text-black font-[poppins] font-medium text-sm px-4 py-2 rounded-full hover:shadow-md hover:shadow-lg hover:scale-105 transition">
					Get Started
				</button>
			</div>
		</nav>
	);
};

export default Navbar;
