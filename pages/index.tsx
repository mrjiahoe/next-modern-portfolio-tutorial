/* eslint-disable @next/next/no-img-element */
import type { GetStaticProps } from "next";
import { groq } from "next-sanity";
import Head from "next/head";
import Link from "next/link";
import About from "../components/About";
import ContactMe from "../components/ContactMe";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import WorkExperience from "../components/WorkExperience";
import { sanityClient } from "../sanity";
import { Experience, PageInfo, Project, Skill, Social } from "../typings";
import { fetchExperiences } from "../utils/fetchExperiences";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchProjects } from "../utils/fetchProjects";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchSocials } from "../utils/fetchSocials";

type Props = {
	pageInfo: PageInfo;
	experiences: Experience[];
	skills: Skill[];
	projects: Project[];
	socials: Social[];
};

const Home = ({ pageInfo, experiences, projects, skills, socials }: Props) => {
	return (
		<div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
			<Head>
				<title>Jia Hoe&apos;s Portfolio</title>
			</Head>

			<Header socials={socials} />

			{/* Hero */}
			<section id="hero" className="snap-start">
				<Hero />
			</section>
			{/* About */}
			<section id="about" className="snap-center">
				<About />
			</section>
			{/* Experience */}
			<section id="experience" className="snap-center">
				<WorkExperience />
			</section>
			{/* Skills */}
			<section id="skills" className="snap-start">
				<Skills />
			</section>
			{/* Projects */}
			<section id="projects" className="snap-start">
				<Projects />
			</section>
			{/* Contact */}
			<section id="contact" className="snap-start">
				<ContactMe />
			</section>
			<Link href="#hero">
				<footer className="sticky bottom-5 w-full cursor-pointer">
					<div className="flex items-center justify-center">
						<img
							className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
							src="https://pbs.twimg.com/media/Fest1PeagAApc6W?format=jpg&name=medium"
							alt=""
						/>
					</div>
				</footer>
			</Link>
		</div>
	);
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
	// const pageInfo: PageInfo = await sanityClient.fetch(groq`
	// 	*[_type == "pageInfo"][0]
	// `);
	const experiences: Experience[] = await sanityClient.fetch(groq`
		*[_type == "experience"] {
			...,
			technologies[]->
		}
	`);
	const skills: Skill[] = await sanityClient.fetch(groq`
		*[_type == "skill"]
	`);
	const projects: Project[] = await sanityClient.fetch(groq`
		*[_type == "project"] {
			...,
			technologies[]->
		}
	`);
	const socials: Social[] = await await sanityClient.fetch(groq`
		*[_type == "social"]
	`);
	const pageInfo: PageInfo = await fetchPageInfo();
	// const experiences: Experience[] = await fetchExperiences();
	// const skills: Skill[] = await fetchSkills();
	// const projects: Project[] = await fetchProjects();
	// const socials: Social[] = await fetchSocials();

	return {
		props: {
			pageInfo,
			experiences,
			skills,
			projects,
			socials,
		},

		// Next.js will attempt to re-generate the page:
		// - When a request comes in
		// - At most once every 10 seconds
		revalidate: 10,
	};
};

// export const getStaticProps: GetStaticProps<Props> = async() => {
// 	const res = await sanityClient.fetch(query)
// const experience:Experience[]= res
// const res2= await sanityClient.fetch(query2)
// const projects: Project[]=res2
// const res3 = await sanityClient.fetch(query3)
// const skills: Skill[]= res3
// const res4 = await sanityClient.fetch(query4)
// const socials: Social[]= res4
