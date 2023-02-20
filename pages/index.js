import Head from "next/head";
import { useRouter } from "next/router";

export default function Home() {
	const router = useRouter();
	return (
		<>
			<Head>
				<title>La loulou ell est supêrrrrrr</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<h1 className="font-bold  text-3xl text-center">
					Les Dauphins et les Licornes qui dancent{" "}
				</h1>
				<div className="flex">
					<img className="animate-bounce mt-52" src="/dauphins.jpg" />
					<img
						className="animate-spin mt-52"
						src="licornearcenciel.jpeg"
						onClick={() => router.push(`/poulet`)}
					/>
				</div>
				<p>les licornes c'est super et bien mieux que les dauphins heheeeee</p>
				<p className="hover:text-3xl">
					c mem pa vrai dabord! lé daufin c mieuyu en plus !!!!!!
				</p>
			</main>
		</>
	);
}
