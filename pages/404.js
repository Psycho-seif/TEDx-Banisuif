import { useRouter } from "next/router";

// Components
import Button from "../components/Button";
import Title from "../components/Title";

const Error = () => {
	const router = useRouter();
	return (
		<>
			<Title>404</Title>
			<div className="relative flex w-screen h-screen bg-no-repeat bg-cover bg-errImage">
				<div className="z-20 flex flex-col items-center justify-center w-full h-full space-y-6">
					<img
						src="/logoWhite.png"
						className="h-36"
						alt="TEDx BeniSuef Logo"
					/>
					<h1 className="font-bold tracking-wide text-red-500 text-9xl font-roboto">
						404
					</h1>
					<Button type="filled" onClick={() => router.push("/")}>
						Back To Home
					</Button>
				</div>
				<div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black opacity-70" />
			</div>
		</>
	);
};

// Error.getInitialProps = ({ res, err }) => {
// 	const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
// 	return { statusCode };
// };

export default Error;
