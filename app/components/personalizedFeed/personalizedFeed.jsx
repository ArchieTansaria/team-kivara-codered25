"use client";
import {
	Heart,
	MessageCircle,
	Users,
	Eye,
	PersonStanding,
	Filter,
	Book,
} from "lucide-react";

import { useRouter } from "next/navigation";

const BlogFeed = () => {
	const router = useRouter();
	const articles = [
		{
			author: "Danyl Kecha",
			avatar: "/api/placeholder/40/40",
			blog: "blog.danylkecha.com",
			date: "Jul 13",
			title: "Building notes app in React using React Markdown",
			excerpt:
				"Introduction When it comes to web application development, React provides developers with the flexibility to create applic...",
			likes: 52,
			comments: 4,
			reads: 500,
			thumbnail: "/api/placeholder/200/120",
			tag: "React",
			featured: true,
		},
		{
			author: "Maximilian Dietel",
			avatar: "/api/placeholder/40/40",
			blog: "maxdietel.hashnode.dev",
			date: "Jul 11",
			title: "Type-Safe Request Data Validation in Node.js with Zod and TypeScript",
			excerpt:
				"In my journey as a developer, I've often found myself grappling with data validation in Node.js. While there are numerous libr...",
			likes: 52,
			comments: 4,
			reads: 800,
			thumbnail: "/api/placeholder/200/120",
			tag: "Node.js",
			featured: true,
		},
	];

	const recommendedBlogs = [
		{
			name: "Jason's react blog",
			url: "blog.jasreact.com",
			avatar: "/api/placeholder/40/40",
		},
		{
			name: "Francesco Ciulla",
			url: "blog.francescociulla.com",
			avatar: "/api/placeholder/40/40",
		},
	];

	return (
		<div
			className="flex font-[poppins] mt-20 bg-black"
			style={{ minHeight: "calc(100vh - 20px)" }}
		>
			{/* Sidebar */}
			<div className="w-64 p-4 bg-black border-r border-gray-700">
				<div className="space-y-6">
					<div className="flex items-center space-x-4">
						<img
							src="/assets/logo.png"
							alt="Profile"
							className="rounded-full"
						/>
					</div>

					<div className="space-y-3">
						<button className="flex items-center space-x-2 w-full p-2 rounded-lg bg-white bg-opacity-15 hover:bg-gray-700">
							<Filter className="w-5 h-5 text-blue-400" />
							<span className="text-gray-100">Interests</span>
						</button>

						<button className="flex items-center space-x-2 w-full p-2 rounded-lg bg-white bg-opacity-15 hover:bg-gray-700">
							<Heart className="w-5 h-5 text-blue-400" />
							<span className="text-gray-100">Likes</span>
						</button>

						<button className="flex items-center space-x-2 w-full p-2 rounded-lg bg-white bg-opacity-15 hover:bg-gray-700">
							<Users className="w-5 h-5 text-blue-400" />
							<span className="text-gray-100">Follows</span>
						</button>

						<button className="flex items-center space-x-2 w-full p-2 rounded-lg bg-white bg-opacity-15 hover:bg-gray-700">
							<Book className="w-5 h-5 text-blue-400" />
							<span className="text-gray-100">Reads</span>
						</button>
					</div>
				</div>
			</div>

			{/* Main Content */}
			<div className="flex-1 p-6 font-[poppins]">
				<h1 className="font-bold text-white text-[40px] font-[manrope]">
					Hi Archie
				</h1>
				<h3 className=" mb-[20px] text-white text-[18px] font-[manrope]">
					Here are some interesting reads for you
				</h3>
				{/* Top Navigation */}
				<div className="flex space-x-6 mb-8">
					<button className="flex items-center space-x-2 text-blue-400">
						<Filter className="w-5 h-5" />
						<span>Personalized</span>
					</button>
					<button className="flex items-center space-x-2 text-gray-400">
						<Users className="w-5 h-5" />
						<span>Following</span>
					</button>
					<button className="flex items-center space-x-2 text-gray-400">
						<PersonStanding className="w-5 h-5" />
						<span>Featured</span>
					</button>
					<button
						className="px-6 py-3 bg-white text-black font-[Poppins] font-semibold rounded-full focus:outline-none hover:shadow-lg hover:scale-105 transition"
						onClick={() => router.push("/home")}
					>
						Generate Quiz
					</button>
				</div>

				{/* Articles */}
				<div className="space-y-6">
					{articles.map((article, index) => (
						<div
							key={index}
							className=" bg-white bg-opacity-15 p-4 rounded-lg"
						>
							<div className="flex justify-between">
								<div className="flex space-x-3">
									<div>
										<h3 className="font-medium text-white">
											{article.author}
										</h3>
										<p className="text-sm text-gray-400">
											{article.blog} · {article.date}
										</p>
									</div>
								</div>
								{article.featured && (
									<span className="text-sm text-blue-400 flex items-center">
										<PersonStanding className="w-4 h-4 mr-1" />
										Featured
									</span>
								)}
							</div>

							<div className="mt-4 flex justify-between">
								<div className="flex-1">
									<h2 className="text-xl font-semibold mb-2 text-white">
										{article.title}
									</h2>
									<p className="text-gray-300">
										{article.excerpt}
									</p>

									<div className="mt-4 flex items-center space-x-4 text-gray-400">
										<span className="flex items-center">
											<Heart className="w-4 h-4 mr-1" />
											{article.likes}
										</span>
										<span className="flex items-center">
											<MessageCircle className="w-4 h-4 mr-1" />
											{article.comments}
										</span>
										<span className="flex items-center">
											<Eye className="w-4 h-4 mr-1" />
											{article.reads} reads
										</span>
									</div>
								</div>

								<div className="ml-4">
									<span className="mt-2 inline-block text-sm text-gray-400"></span>
								</div>
							</div>
						</div>
					))}
				</div>

				{/* Recommended Blogs */}
				<div className="mt-8">
					<div className="flex justify-between items-center mb-4">
						<h2 className="text-lg font-semibold text-white">
							Recommended blogs for you
						</h2>
						<a href="#" className="text-blue-400 text-sm">
							See more →
						</a>
					</div>

					<div className="grid grid-cols-2 gap-4">
						{recommendedBlogs.map((blog, index) => (
							<div
								key={index}
								className="flex items-center space-x-3"
							>
								{/* <img
									src={blog.avatar}
									alt={blog.name}
									className="w-10 h-10 rounded-full"
								/> */}
								<div>
									<h3 className="font-medium text-white">
										{blog.name}
									</h3>
									<p className="text-sm text-gray-400">
										{blog.url}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default BlogFeed;
