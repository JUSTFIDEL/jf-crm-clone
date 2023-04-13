import blankAvatar from '../images/avatar.png'

function AvatarDisplay({ ticket }) {
	return (
		<div className="avartar-container">
			<div className="image-container">
				<img
					src={ticket.avatar ? ticket.avatar : blankAvatar}
					alt={'photo of ' + ticket.owner}
				/>
			</div>
		</div>
	)
}

export default AvatarDisplay
