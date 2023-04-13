import TicketCard from '../components/TicketCard'

const Dashboard = () => {
	const tickets = [
		{
			category: 'Q1 2023',
			color: 'green',
			title: 'NFT Saftey 1',
			owner: 'Fidelis',
			avatar: 'https://jf-portfolio.onrender.com/images/jf-2.png',
			status: 'done',
			priority: 4,
			progress: 40,
			description: 'Make a video showcasing hot to work with NFTs safely.',
			timestamp: '2023-04-10T09:00:17+0000',
		},
		{
			category: 'Q1 2023',
			color: 'pink',
			title: 'NFT Saftey 2',
			owner: 'Talitha',
			avatar: '',
			status: 'done',
			priority: 3,
			progress: 85,
			description: 'Make a video showcasing hot to work with NFTs safely.',
			timestamp: '2023-02-10T09:00:17+0000',
		},
		{
			category: 'J1 2023',
			color: 'purple',
			title: 'NFT Saftey 3',
			owner: 'Adang',
			avatar: 'https://jf-portfolio.onrender.com/images/jf-2.png',
			status: 'working on it',
			priority: 5,
			progress: 70,
			description:
				'03 -Make a video showcasing hot to work with NFTs safely.',
			timestamp: '2023-03-10T09:00:17+0000',
		},
		{
			category: 'J1 2023',
			color: 'red',
			title: 'NFT Saftey 4',
			owner: 'JustFidel',
			avatar: '',
			status: 'done',
			priority: 2,
			progress: 90,
			description:
				'04 -Make a video showcasing hot to work with NFTs safely',
			timestamp: '2023-01-10T09:00:17+0000',
		},
		{
			category: 'Q1 2023',
			color: 'green',
			title: 'NFT Saftey 1',
			owner: 'Fidelis',
			avatar: 'https://jf-portfolio.onrender.com/images/jf-2.png',
			status: 'working on it',
			priority: 3,
			progress: 40,
			description: 'Make a video showcasing hot to work with NFTs safely.',
			timestamp: '2023-04-10T09:00:17+0000',
		},
		{
			category: 'Q1 2023',
			color: 'pink',
			title: 'NFT Saftey 2',
			owner: 'Talitha',
			avatar: '',
			status: 'done',
			priority: 4,
			progress: 85,
			description:
				'02 - Make a video showcasing hot to work with NFTs safely.',
			timestamp: '2023-02-10T09:00:17+0000',
		},
		{
			category: 'J1 2023',
			color: 'purple',
			title: 'NFT Saftey 3',
			owner: 'Adang',
			avatar: 'https://jf-portfolio.onrender.com/images/jf-2.png',
			status: 'working on it',
			priority: 5,
			progress: 70,
			description:
				'03 -Make a video showcasing hot to work with NFTs safely.',
			timestamp: '2023-03-10T09:00:17+0000',
		},
		{
			category: 'J1 2023',
			color: 'red',
			title: 'NFT Saftey 4',
			owner: 'JustFidel',
			avatar: '',
			status: 'done',
			priority: 1,
			progress: 90,
			description:
				'04 -Make a video showcasing hot to work with NFTs safely.',
			timestamp: '2023-01-10T09:00:17+0000',
		},
	]

	const uniqueCategories = [
		...new Set(tickets?.map(({ category }) => category)),
	]

	return (
		<div className="dashboard">
			<h1>My Projects</h1>
			<div className="ticket-container">
				{tickets &&
					uniqueCategories?.map((uniqueCategory, categoryIndex) => (
						<div key={categoryIndex}>
							<h3>{uniqueCategory}</h3>
							{tickets
								.filter(ticket => ticket.category === uniqueCategory)
								.map((filteredTicket, _index) => (
									<TicketCard
										id={_index}
										color={filteredTicket.color}
										ticket={filteredTicket}
									/>
								))}
						</div>
					))}
			</div>
		</div>
	)
}

export default Dashboard
