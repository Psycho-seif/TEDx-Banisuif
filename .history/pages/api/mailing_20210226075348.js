import axios from 'axios';

export default function handler(req, res) {
	if (req.method === 'POST') {
		let { email } = req.body;
		let chatId = process.env.TELEGRAM_DEVIEN_CHAT_ID;
		let botToken = process.env.TELEGRAM_BOT_API;

		axios
			.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
				chat_id: chatId,
				text: `hello`,
			})
			.then((res) => {
				res.status(200).send({ err });
				console.log('completed');
			})
			.catch((err) => {
				res.status(500).send({ err });
				console.log('failed');
			});
	} else if (req.method === 'GET') {
		res.status(200).json({ message: 'GET Request' });
	}
}
