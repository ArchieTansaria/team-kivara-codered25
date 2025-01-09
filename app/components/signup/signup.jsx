const SignupPage = () => {
	return (
		<div className="min-h-screen flex mt-10 font-[manrope]">
			{/* Left Section */}
			<div className="w-1/2 bg-black text-white flex items-center justify-center p-10 pl-16">
				<div>
					<blockquote className="text-2xl font-light leading-relaxed">
						Nearly 50% of students fail standardized tests because
						they do not engage in enough self-practice outside of
						class.
					</blockquote>
					<div className="mt-6">
						<h3 className="text-lg font-semibold">
							National Center for Education Statistics
						</h3>
						<p className="text-sm text-gray-400 mt-2">NCES</p>
					</div>
				</div>
			</div>

			{/* Right Section */}
			<div className="w-1/2 bg-white flex items-center justify-center p-10">
				<div className="max-w-md w-full">
					<h1 className="text-3xl font-semibold mb-4">
						Create an account
					</h1>
					<p className="text-sm text-gray-600 mb-6">
						You are just 2 clicks away from creating questions from
						any piece of text in seconds.
					</p>

					{/* Signup Form */}
					<form>
						<div className="mb-4">
							<label
								htmlFor="email"
								className="block text-sm font-medium text-gray-700"
							>
								Email address
							</label>
							<input
								type="email"
								id="email"
								placeholder="name@example.com"
								className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-gray-900 focus:ring-black focus:border-black"
							/>
						</div>
						<div className="mb-4">
							<label
								htmlFor="password"
								className="block text-sm font-medium text-gray-700"
							>
								Password
							</label>
							<input
								type="password"
								id="password"
								placeholder="Password"
								className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-gray-900 focus:ring-black focus:border-black"
							/>
						</div>
						<div className="mb-4 text-right">
							<a
								href="#"
								className="text-sm text-black hover:underline"
							>
								forgot password?
							</a>
						</div>
						<button
							type="submit"
							className="w-full bg-black font-[poppins] text-white py-2 px-4 rounded-full hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
						>
							Sign up with Email
						</button>
					</form>

					<div className="mt-6 flex items-center">
						<div className="border-t border-gray-300 flex-grow"></div>
						<span className="mx-2 text-sm text-gray-500">or</span>
						<div className="border-t border-gray-300 flex-grow"></div>
					</div>

					<button
						type="button"
						className="w-full mt-4 bg-white text-black border border-gray-300 py-2 px-4 rounded-full flex items-center justify-center hover:bg-gray-100"
					>
						<span className="mr-2 font-[poppins]">G</span> Continue
						with Google
					</button>

					<p className="mt-6 text-center text-sm text-gray-500">
						Already have an account?{" "}
						<a href="#" className="text-black hover:underline">
							Sign in
						</a>
					</p>

					<p className="mt-4 text-center text-xs text-gray-400">
						By clicking continue, you agree to our{" "}
						<a href="#" className="hover:underline">
							Terms of Service
						</a>{" "}
						and{" "}
						<a href="#" className="hover:underline">
							Privacy Policy
						</a>
						.
					</p>
				</div>
			</div>
		</div>
	);
};

export default SignupPage;
