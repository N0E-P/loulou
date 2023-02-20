import Head from "next/head";

export default function Home() {
	return (
		<>
			<Head>
				<title>La loulou ell est supêrrrrrr</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<h1 className="font-bold  text-3xl text-center">
					Les Poules et les Poulets qui dancent
				</h1>
				<div className="text-center flex mb-16">
					<div>
						<p className="text-2xl">poupoule</p>
						847€
					</div>
					<img
						src="/poule1.jpg"
						width="500"
						className="hover:animate-spin hover:scale-150"
					/>
				</div>
				<div className="text-center flex mb-16">
					<div>
						<p className="text-2xl">poupoulette</p>
						845444477€
					</div>
					<img src="/poule2.jpg" width="500" className="hover:animate-spin" />
				</div>
				<div className="text-center flex mb-16">
					<div>
						<p className="text-2xl">mimi</p>
						56€
					</div>
					<img
						src="/poule3.jpg"
						width="500"
						className="hover:animate-spin hover:scale-150"
					/>
				</div>

				<div className="text-center flex mb-16">
					<div>
						<p className="text-2xl">v</p>
						1€
					</div>
					<img src="/poule4.jpg" width="500" className="hover:animate-spin" />
				</div>
				<div className="text-center flex mb-16">
					<div>
						<p className="text-2xl">bouboul</p>
						285€
					</div>
					<img
						src="/poule5.jpg"
						width="500"
						className="hover:animate-spin hover:scale-150"
					/>
				</div>
				<div className="text-center flex mb-16">
					<div>
						<p className="text-2xl">pluplume</p>
						4567€
					</div>
					<img src="/poule6.jpg" width="500" className="hover:animate-spin" />
				</div>
				<div className="text-center flex mb-16">
					<div>
						<p className="text-2xl">big bouboule</p>
						78€
					</div>
					<img
						src="/poule7.jpg"
						width="500"
						className="hover:animate-spin hover:scale-150"
					/>
				</div>
				<div className="text-center flex mb-16">
					<div>
						<p className="text-2xl">poulmier</p>
						35€
					</div>
					<img src="/poule8.jpg" width="500" className="hover:animate-spin" />
				</div>
				<div className="text-center flex mb-16">
					<div>
						<p className="text-2xl">les incepoa</p>
						3578€
					</div>
					<img
						src="/poule9.jpg"
						width="500"
						className="hover:animate-spin hover:scale-150"
					/>
				</div>
				<div className="text-center flex mb-16">
					<div>
						<p className="text-2xl">cruella</p>
						98€
					</div>
					<img src="/poule10.jpg" width="500" className="hover:animate-spin" />
				</div>
			</main>
		</>
	);
}
