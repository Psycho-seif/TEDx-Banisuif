import { useEffect, useState } from 'react';

// div className='flex flex-col items-center justify-center w-64 h-64 m-0 border-2 border-red-500 rounded-full'
const Tile = ({ text, value }) => (
	<>
		<h4 className="font-black text-center text-white capitalize text-7xl lg:text-8xl xl:text-9xl">
			{value}
		</h4>
		<h5 className="text-4xl text-center text-white capitalize">{text}</h5>
	</>
);

const Timer = ({ time }) => {
	// const [minute, setMinute] = useState(0);
	// const [day, setDay] = useState(0);
	// const [hour, setHour] = useState(0);
	// const [second, setSecond] = useState(0);
	const [timeState, setTime] = useState({
		minute: 0,
		days: 0,
		hour: 0,
		second: 0,
	});

	let countDownDate = new Date(`${time} 00:00:00`).getTime();

	// Update the count down every 1 second
	useEffect(() => {
		let timeDate = setInterval(() => {
			let now = new Date().getTime();

			let distance = countDownDate - now;

			let days = Math.floor(distance / (1000 * 60 * 60 * 24));
			let hours = Math.floor(
				(distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
			);
			let minutes = Math.floor(
				(distance % (1000 * 60 * 60)) / (1000 * 60)
			);
			let seconds = Math.floor((distance % (1000 * 60)) / 1000);

			setTime({
				day: days,
				hour: hours,
				minute: minutes,
				second: seconds,
			});
			// setHour(hours);
			// setMinute(minutes);
			// setSecond(seconds);
		}, 1000);
		return () => {
			clearInterval(timeDate);
		};
	}, []);

	return (
		<ul className="grid grid-cols-1 divide-y-2 md:divide-y-0 md:divide-x-2 md:grid-cols-4">
			<li className="flex flex-col items-center justify-center py-3 md:py-0">
				<Tile text="days" value={timeState.day} />
			</li>
			<li className="flex flex-col items-center justify-center py-3 md:py-0">
				<Tile text="hour" value={timeState.hour} />
			</li>
			<li className="flex flex-col items-center justify-center py-3 md:py-0">
				<Tile text="minutes" value={timeState.minute} />
			</li>
			<li className="flex flex-col items-center justify-center py-3 md:py-0">
				<Tile text="seconds" value={timeState.second} />
			</li>
		</ul>
	);
};

export default Timer;
