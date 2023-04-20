import axios from 'axios'

export default function DeleteBlock({ documentId }) {
	const __dirname =
		'http://localhost:3001' || 'https://jf-crm-clone.vercel.app'

	const deleteTicket = async () => {
		const response = await axios.delete(
			// `https://jf-crm-clone.vercel.app/tickets/${documentId}`,
			__dirname + `/tickets/${documentId}`,
		)
		console.log(__dirname)

		const success = response.status == 200
		if (success) window.location.reload()
	}

	return (
		<div className="delete-block">
			<div className="delete-icon" onClick={deleteTicket}>
				🗑
			</div>
		</div>
	)
}
