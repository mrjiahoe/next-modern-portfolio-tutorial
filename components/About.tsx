import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {};

export default function About({}: Props) {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
		>
			<h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
				About
			</h3>

			{/* <motion.div
				initial={{
					x: -200,
				}}
				whileInView={{
					x: 0,
				}}
				className="h-[600px] w-[500px]"
			>
				<Image src="/DSC_0072pp.jpg" alt="" width="500px" height="600px" />
			</motion.div> */}
			<motion.img
				initial={{
					x: -200,
					opacity: 0,
				}}
				transition={{
					duration: 1.2,
				}}
				whileInView={{ opacity: 1, x: 0 }}
				viewport={{ once: true }}
				src="/DSC_0072pp.jpg"
				className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96"
			/>

			<div className="space-y-10 px-0 md:px-10">
				<h4 className="text-4xl font-semibold">
					Here is a{" "}
					<span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
					background
				</h4>
				<p className="text-sm">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
					deleniti architecto repellat asperiores voluptatum? Tempore, nemo
					exercitationem? Fugiat dignissimos quidem tenetur recusandae ratione
					at cum, officia quam aut magnam illum, vel nam, earum magni eius!
					<br />
					<br />
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
					nulla explicabo cum eius corporis quidem rem ea facilis sed saepe.
				</p>
			</div>
		</motion.div>
	);
}
