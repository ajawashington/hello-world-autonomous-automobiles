const addEventListener = (clickOutside) => {


	// Detect all clicks on the document
	
	document.addEventListener("click", function (event) {
		// const box = document.querySelector("dialog[class^='dialog--']");
		// If user clicks inside the element, do nothing
		// if (event.target.close("dialog[class^='dialog--']"))

			// return;

		// If user clicks outside the element, hide it!
		// box.classList.add("js-is-hidden");
		try {
			
			event.target.close()
		} catch (error) {
			
		}


	})

}

export default addEventListener