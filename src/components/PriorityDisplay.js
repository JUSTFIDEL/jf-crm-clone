export default function PriorotyDisplay({ priority }) {
	return (
		<div className="priority-display">
			<div className="star-container">
				<h3 style={{ color: priority >= 1 ? 'rgb(253, 55, 10)' : '' }}>
					★
				</h3>
				<h3 style={{ color: priority >= 2 ? 'rgb(253, 55, 10)' : '' }}>
					★
				</h3>
				<h3 style={{ color: priority >= 3 ? 'rgb(253, 55, 10)' : '' }}>
					★
				</h3>
				<h3 style={{ color: priority >= 4 ? 'rgb(253, 55, 10)' : '' }}>
					★
				</h3>
				<h3 style={{ color: priority >= 5 ? 'rgb(253, 55, 10)' : '' }}>
					★
				</h3>
			</div>
		</div>
	)
}
