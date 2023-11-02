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

const buttonButton = document.querySelectorAll('.button');

buttonButton.forEach(button => {
	const buttonToggle = button.querySelector('.button__toggle');

	const displayActiveButton = (event) =>{
		button.classList.toggle('button--active');
	}

	button.addEventListener('click', displayActiveButton);
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

const choicechipButton = document.querySelectorAll('.choicechip')

choicechipButton.forEach(choicechip => {
	const choicechipToggle = choicechip.querySelector('.choicechip__button');

	const displayActiveChoicehip = (event) => {
		choicechip.classList.toggle('choicechip--active');
	}

	choicechip.addEventListener('click', displayActiveChoicehip);
});


//Toast


let warningButton= document.querySelector('.button-warning')
let errorButton = document.querySelector('.button-error')
const toastContainer = document.querySelector('.toast-container')

warningButton.addEventListener('click', () =>{
	let toast = document.createElement('div');
	toast.classList.add('alert');
	toast.classList.add('toast-animation');
	toast.innerText = 'Warning';
	toastContainer.appendChild(toast);

	setTimeout(() => {
		toast.remove();
	  }, 3005);
});

errorButton.addEventListener('click', () =>{
	let toast = document.createElement('div');
	toast.classList.add('alert');
	toast.classList.add('alert-second');
	toast.classList.add('toast-animation');
	toast.innerText = 'Error';
	toastContainer.appendChild(toast);


	setTimeout(() => {
		toast.remove();
	  }, 3000);
});