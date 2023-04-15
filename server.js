const PORT = 5000
const express = require('express')
const cors = require('cors')
require('dotenv').config()
const axios = require('axios')

const app = express()
app.use(cors())
app.use(express.json)

const url = process.env.URI
const token = process.env.TOKEN

app.post('/tickets', async (req, res) => {
	const formData = req.body.formData

	const options = {
		method: 'PORT',
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
