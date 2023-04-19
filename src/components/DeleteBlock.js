import axios from 'axios'

export default function DeleteBlock({ documentId }) {
	const deleteTicket = async () => {
		const response = await axios.delete(
			`https://jf-crm-clone.vercel.app/tickets/${documentId}`,
		)

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
