const PORT = 5000
const express = require('express')
const cors = require('cors')
require('dotenv').config()
const axios = require('axios')

const app = express()
app.use(cors())
app.use(express.json)

const url =
	'https://6abc94cf-8891-4dc4-8c1e-e9e11b5b5281-europe-west1.apps.astra.datastax.com/api/rest/v2/namespaces/tickets/collections/task'
const token =
	'AstraCS:AXwFQupRHXjSEHNHHOZoJdZD:8de601b2aebbf842edb7f717a919fda32bbd991a097439ba61eac8cb3f9b7b29'

app.post('/tickets', async (req, res) => {
	const formData = req.body.formData

	const options = {
		method: 'POST',
		headers: {
			Accepts: 'application/json',
			'X-Cassandra-Token': token,
			'Content-Type': 'application/json',
		},

		data: formData,
	}

	try {
		const response = await axios(url, options)
		res.status(200).json(response.data)
	} catch (err) {
		console.log(err)
		res.status(500).json({ message: err })
	}
})

app.listen(PORT, () => {
	console.log('Server running on PORT ' + PORT)
})
