import type {FDSTableCellHTMLElementBuilder} from '@liferay/js-api/data-set';

const fdsCellRenderer: FDSTableCellHTMLElementBuilder = ({value}) => {
	const element = document.createElement('div');

	const rawDate = String(value);
	const cellDate = new Date(rawDate);

	if (!isNaN(cellDate.getTime())) {
		const now = new Date();
		const thirtyDaysAgo = new Date();
		thirtyDaysAgo.setDate(now.getDate() - 30);

		if (cellDate < thirtyDaysAgo) {
			element.style.backgroundColor = 'rgba(255, 0, 0, 0.2)';
			element.textContent = `${cellDate.toLocaleDateString()}  - OLD`;
		} else {
			element.textContent = cellDate.toLocaleDateString();
		}
	} else {
		element.textContent = 'Invalid Date';
	}

	return element;
};

export default fdsCellRenderer;