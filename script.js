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

//Select component

const selected = document.querySelector('.selected');
const optionsContainer = document.querySelector('.options-container');

const optionsList = document.querySelectorAll('.option');

selected.addEventListener('click', () => {
	optionsContainer.classList.toggle('active');
})

optionsList.forEach(option => {
	option.addEventListener('click', () => {
		selected.innerText = option.querySelector('label').innerText; 
		optionsContainer.classList.remove('active');
	})
})

//button

const buttonActive = document.querySelector('div')
const buttonButton = document.querySelectorAll('.button__toggle');

buttonButton.forEach(singleButton => {
	singleButton.addEventListener('click', function() {
		buttonActive.classList.toggle('button--active')
	});
});



//accordion

const accordions = document.querySelectorAll('.accordion');

accordions.forEach(accordion => {
	const accordionToggle = accordion.querySelector('.accordion__toggle');
	
	const displayAccordionContent = (event) => {
		accordion.classList.toggle('accordion--expanded');
	}
	
	accordionToggle.addEventListener('click', displayAccordionContent);
})


//choicechip

const choicechipActive = document.querySelector('div');
const choicechipButton = document.querySelectorAll('.choicechip__button')

choicechipButton.forEach(choicechip=>{
	choicechip.addEventListener('click', () => {
		choicechipActive.classList.toggle('choicechip--active')
	});
});


//Alert

