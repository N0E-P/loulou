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
				<img
					src="/pouletvivantcarilestpasmort.jpg"
					className="hover:scale-150 duration-1000"
					onClick={() => router.push(`/poulet/acheter`)}
				/>
			</main>
		</>
	);
}
