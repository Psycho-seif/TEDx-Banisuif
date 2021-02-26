import axios from 'axios';

export default async function handler(req, res) {
	if (req.method === 'POST') {
		const { email } = req.body;
		const chatId = process.env.TELEGRAM_DEVIEN_CHAT_ID;
		const botToken = process.env.TELEGRAM_BOT_API;

		try {
			await axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
				chat_id: chatId,
				text: `<i><b>MAILING</b></i>\n\n<b>Email:</b> \t${email}`,
				parse_mode: 'HTML',
			});
			res.status(200).json({ completed: true });
		} catch () {
			res.status(403).json({ completed: false });
		}
	} else if (req.method === 'GET') {
		res.status(200).json({ message: 'GET Request' });
	}
}
