const overviewButtons = document.querySelectorAll('.overview__button');
const components = document.querySelectorAll('.component');

overviewButtons.forEach(overviewButton => {
	const displayComponent = (event) => {
		const button = event.currentTarget;
		const componentDisplay = button.dataset.componentDisplay;
	
		overviewButtons.forEach(overviewButton => {
			overviewButton.classList.remove('overview__button--active');

			if (overviewButton.dataset.componentDisplay === componentDisplay) {
				button.classList.add('overview__button--active');
			}
		})
	
		components.forEach(component => {
			component.classList.remove('component--visible');
	
			const componentName = component.dataset.componentName;
	
			if (componentName === componentDisplay) {
				component.classList.add('component--visible');
			}
		});
	}

	overviewButton.addEventListener('click', displayComponent);
});