import { useState } from "react";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";

type NavBarProps = {
	menu: boolean;
	setMenu: (value: boolean) => void;
}


const IndexNavbar = [
	{
		workName: 'Work',
		workCant: 36,
	},
	{
		workName: 'Work I',
		workCant: 32,
	},
	{
		workName: 'Work II',
		workCant: 42,
	},
	{
		workName: 'Work III',
		workCant: 41,
	},
	{
		workName: 'Work IV',
		workCant: 29,
	},
	{
		workName: 'Work V',
		workCant: 23,
	},
	{
		workName: 'Work VI',
		workCant: 40,
	},
	{
		workName: 'Work VII',
		workCant: 26,
	},
	{
		workName: 'Work VIII',
		workCant: 43,
	},
	{
		workName: 'Work IX',
		workCant: 50,
	},
	{
		workName: 'Work X',
		workCant: 43,
	},
]

const Navbar = ({ menu, setMenu }: NavBarProps) => {
	const togglemenu = () => {
		setMenu(!menu);
	};
	
	return (
		<header className="sticky top-0 inset-x-0 p-4 bg-neutral-900">
			<nav className="container mx-auto">
				<motion.button
					initial="hide"
					// 		{menu ? truthy : falsy }
					animate={menu ? "show" : "hide"}
					onClick={togglemenu}
					className="flex flex-col gap-1"
				>
					<motion.span
						variants={{
							hide: {
								rotate: 0,
							},
							show: {
								rotate: 45,
								y: 5,
								opacity: 1
							},
						}}
						className="w-6 bg-white h-px block z-[99999999]"
					></motion.span>
					<motion.span
						variants={{
							hide: {
								opacity: 1,
							},
							show: {
								opacity: 0,
							},
						}}
						className="w-6 bg-white h-px block z-[99999999]"
					></motion.span>
					<motion.span
						variants={{
							hide: {
								rotate: 0,
							},
							show: {
								rotate: -45,
								y: -5,
								opacity: 1
							},
						}}
						className="w-6 bg-white h-px block z-[99999999]"
					></motion.span>
				</motion.button>
				<AnimatePresence>
					{menu && (
						<MotionConfig
							transition={{
								type: "spring",
								bounce: 0.1,
							}}
						>
							<motion.div
								key="mobile-nav"
								variants={{
									hide: {
										x: "-100%",
										transition: {
											type: "spring",
											bounce: 0.1,
											when: "afterChildren",
											staggerChildren: 0.25,
										},
									},
									show: {
										x: "0%",
										transition: {
											type: "spring",
											bounce: 0.1,
											when: "beforeChildren",
											staggerChildren: 0.25,
										},
									},
								}}
								initial="hide"
								animate="show"
								exit="hide"
								className="fixed inset-0 bg-sky-700 p-6 flex flex-col justify-center space-y-10"
							>
								{/* motion.ul ORIGINAL */}
								{/* <motion.ul
									variants={{
										hide: {
											y: "25%",
											opacity: 0,
										},
										show: {
											y: "0%",
											opacity: 1,
										},
									}}
									className="list-none space-y-6"
								>
									<li>
										<a href="#" className="text-5xl font-semibold text-white">
											Link #1
										</a>
									</li>
									<li>
										<a href="#" className="text-5xl font-semibold text-white">
											Link #2
										</a>
									</li>
									<li>
										<a href="#" className="text-5xl font-semibold text-white">
											Link #3
										</a>
									</li>
								</motion.ul> */}
								<motion.ul
									variants={{
										hide: {
											y: "25%",
											opacity: 0,
										},
										show: {
											y: "0%",
											opacity: 1,
										},
									}}
									className="list-none space-y-2 max-w-lg w-full mx-auto"
								>
									{IndexNavbar.map((nav, index) => (
										<motion.li
											key={index}
											variants={{
												hide: {
													y: "25%",
													opacity: 0,
												},
												show: {
													y: "0%",
													opacity: 1,
												},
											}}>
											<a href="#" className="flex justify-between">
												<span className="text-sm font-light text-white">{nav.workName}</span>
												<span className="text-sm font-light text-white">{nav.workCant}</span>
											</a>
										</motion.li>
									))}
								</motion.ul>
								<motion.div
									variants={{
										hide: {
											y: "25%",
											opacity: 0,
										},
										show: {
											y: "0%",
											opacity: 1,
										},
									}}
									className="w-full h-px bg-white/30"
								></motion.div>
								<motion.ul
									variants={{
										hide: {
											y: "25%",
											opacity: 0,
										},
										show: {
											y: "0%",
											opacity: 1,
										},
									}}
									className="list-none flex justify-center gap-x-4"
								>
									<li>
										<div className="bg-white rounded-lg w-8 h-8"></div>
									</li>
									<li>
										<div className="bg-white rounded-lg w-8 h-8"></div>
									</li>
									<li>
										<div className="bg-white rounded-lg w-8 h-8"></div>
									</li>
								</motion.ul>
							</motion.div>
						</MotionConfig>
					)}
				</AnimatePresence>
			</nav>
		</header>
	);
}
export default Navbar;