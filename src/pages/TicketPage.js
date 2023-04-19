import { useState, useContext, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import CategoriesContext from '../context'

export default function TicketPage({ editMode }) {
	const { categories, setCategories } = useContext(CategoriesContext)

	const [formData, setFormData] = useState({
		category: '',
		title: '',
		owner: '',
		avatar:
			'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIYAAACGCAMAAAAvpwKjAAAAY1BMVEUiLTqzusC2vcO5wMYbJzUfKzgeKTcYJTMTITARHy8+R1IVIzGgp644QUywt71ETVcvOUWZoKcAFSdPV2F7gooIGiqPlp1gaHFJUlxmbXaBiZCmrbMpM0Budn6Ij5cADSJYYGmytJR9AAAEOUlEQVR4nO2b2ZaiMBCGITtbWBQUWZr3f8oJtu2MvYQUprDPHP4Lj3d+p7ZUJWUQ7Nq1a9euXbt27doFFOdcCPPxQgShJO+LLI6zog+kEi9hiKp4aFIdEqNQp80QV9HWJCw6XzSdAW4yX6k+nmu2IYSQ5zKk4WcRGja53CxMoqKh5AvEjaRJkk0geNT+BPHunVO0AYVgjQXiCjLiO4YF6deg+CTaKGQO0XeLFIYj7VE5uEwXPHLzSxlhcqjRwRZXe1wUHoXJETcKw4GXLyLWrhRhqDMst1RLqfpgjqbCoWAHZ5dcOc4454ssAcaYs0ViULAYZAxjjgzj3I8uUIwLQrLwooNRhGHnn8IEKCgyrjr790p0BPrEeGXwX0orWJ7MIqX/0vEGqKAf0m++KXgAD42QeC9gIl+DEfuO0TWJEhLv9XwdxuFXYNDJO8b5V1hDxL8iNtYlbOG9mldwipD4P2Lf3EaDB3Xeq2hQu84Gf0Wb2jtG4j4c3DEQTliRQynCMEfoAjk0OAhG9wXvewhGL2oKGLQlzlEGFeickqLMKYE8wTBOOBhBBOoDNRKFKR2QUbpFu+EA5CxJ8a57pPtMTw9YPjFSrnMs6qVTwFXndgXXoV7BBSx3yhZ9RnTJLDW53ItO6PfV0TIHnTAD46a6XQqMwX+38x3HRKwvCNMmFKaaFj9f39O02OY9xYiJY/itQQg58i2fuaKs/Pq2Q2iZb/Gk849EnTf6XxJC9ZjX2z+CMpW1TXf1hKlXXdNm0Zb++CuhahEfTm17OmSsTl7yHHwTZ0xKxl75OL5r1+8W54LJJFFGiZJMvGCXhCW17LPcFI3hKlM68qyXtdosdTlTNYuHsUw1IfQuQnRXjsM5iBJ8FJFU/XRJyfyz3x2whie9nIoKtaRKmbWlJrau57rXoss2k0hNMVdyejxULShUl6cEwSSiyo6ODHeSY1b5BREqH7/vt6wkYZN7XMPiSTFq8D3gLNMKFb5WShI2QLzxySL0GPiYWng0uSyw2CzSPr+WJvtxvSk+QJriyeytz8+Z4sMgh2dGKC6fiIpHkIGtdgyX8Ov6HzmatSeNqEtvFPNUuW5+YMWKFxSLSJetCFTe+6WYLwfhb1688k1xvRGDckifcXHnKIFxquDbGi4C7tmoybtH3kVOgAOG9UgUxh6Fe9oy+OaKq0jpHKWADUS46OAYHjxbsT/jLh27ZUs1orlkFnHbWWQZoktm0dglSiVkHXONSONwc7pqUQMm6rB5VEM3EOEi42IvxgvUNHnX8oLvisUEuGi7FB0rVv/gWlwW5HinyQNHbw9SuYVPDEZr7wclbgW9Y4z24BBuD5xPq7M6hfeb+GRuO2wpC9xofwJjsgWHGrbCONq6jnqbCJ2PNxtGhH263jFK22EPXN95AiO1UMB3u1bLvhOWbkQRdpaM5T34fwY7xv+L8QcJzT8NpfiPgAAAAABJRU5ErkJggg==',
		status: 'not started',
		priority: 0,
		progress: 0,
		description: '',
		timestamp: new Date().toISOString(),
	})

	const navigate = useNavigate()
	let { id } = useParams()

	const handleSubmit = async e => {
		e.preventDefault()

		if (editMode) {
			const response = await axios.put(
				`http://localhost:3001/tickets/${id}`,
				{
					data: formData,
				},
			)

			const success = response.status === 200

			if (success) {
				console.log(response.status)
				navigate('/')
			} else {
				console.log(response.status)
			}
		}

		if (!editMode) {
			const response = await axios.post('http://localhost:3001/tickets', {
				formData,
			})

			const success = response.status === 200

			if (success) {
				console.log(response.status)
				navigate('/')
			} else {
				console.log(response.status)
			}
		}
	}

	const fetchData = async () => {
		const response = await axios.get(`http://localhost:3001/tickets/${id}`)
		setFormData(response.data.data)
	}

	useEffect(() => {
		if (editMode) fetchData()
	}, [])

	const handleChange = e => {
		const value = e.target.value
		const name = e.target.name

		setFormData(prev => ({
			...prev,
			[name]: value,
		}))
	}

	// console.log(formData)

	return (
		<div className="ticket">
			<h1>{editMode ? 'Update your Ticket' : 'Create a Ticket'}</h1>

			<div className="ticket-container">
				<form onSubmit={handleSubmit}>
					<section>
						<label htmlFor="title">Title</label>
						<input
							id="title"
							name="title"
							type="text"
							onChange={handleChange}
							required={true}
							value={formData.title}
						/>

						<label htmlFor="description">Description</label>
						<input
							id="description"
							name="description"
							type="text"
							onChange={handleChange}
							required={true}
							value={formData.description}
						/>

						<label>Category</label>
						<select
							name="category"
							value={formData.category || 'New Category'}
							onChange={handleChange}>
							{categories?.map((category, _index) => (
								<option key={_index} value={category}>
									{category}
								</option>
							))}
						</select>

						<label htmlFor="new-category">New Category</label>
						<input
							id="new-category"
							name="category"
							type="text"
							onChange={handleChange}
							value={formData.category}
						/>

						<label>Priority</label>
						<div className="multiple-input-container">
							<input
								id="priority-1"
								name="priority"
								type="radio"
								onChange={handleChange}
								value={1}
								checked={formData.priority == 1}
							/>
							<label htmlFor="priority-1">1</label>

							<input
								id="priority-2"
								name="priority"
								type="radio"
								onChange={handleChange}
								value={2}
								checked={formData.priority == 2}
							/>
							<label htmlFor="priority-2">2</label>

							<input
								id="priority-3"
								name="priority"
								type="radio"
								onChange={handleChange}
								value={3}
								checked={formData.priority == 3}
							/>
							<label htmlFor="priority-3">3</label>

							<input
								id="priority-4"
								name="priority"
								type="radio"
								onChange={handleChange}
								value={4}
								checked={formData.priority == 4}
							/>
							<label htmlFor="priority-4">4</label>

							<input
								id="priority-5"
								name="priority"
								type="radio"
								onChange={handleChange}
								value={5}
								checked={formData.priority == 5}
							/>
							<label htmlFor="priority-5">5</label>
						</div>

						{editMode && (
							<>
								<input
									id="progress"
									name="progress"
									type="range"
									onChange={handleChange}
									value={formData.progress}
									min="0"
									max="100"
								/>
								<label htmlFor="progress">Progress</label>

								<label>Status</label>
								<select
									name="status"
									value={formData.status}
									onChange={handleChange}>
									<option
										selected={formData.status === 'done'}
										value="done">
										Done
									</option>
									<option
										selected={formData.status === 'working on it'}
										value="working on it">
										Working on it.
									</option>
									<option
										selected={formData.status === 'stuck'}
										value="stuck">
										Stuck
									</option>
									<option
										selected={formData.status === 'not started'}
										value="not started">
										Not Started
									</option>
								</select>
							</>
						)}

						<input type="submit" className="submit" />
					</section>

					<section>
						<label htmlFor="owner">Owner</label>
						<input
							id="owner"
							name="owner"
							type="text"
							onChange={handleChange}
							required={true}
							value={formData.owner}
						/>
						<label htmlFor="avatar">Avatar</label>
						<input
							id="avatar"
							name="avatar"
							type="url"
							onChange={handleChange}
							required={true}
							value={formData.avatar}
						/>
						<div className="image-preview">
							{formData.avatar && (
								<img src={formData.avatar} alt="Avatar preview" />
							)}
						</div>
					</section>
				</form>
			</div>
		</div>
	)
}
