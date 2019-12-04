const initializeDetailButtonEvents = () => {
    
  const allCloseButtons = document.querySelectorAll(".close__dialog")

  for (const btn of allCloseButtons) {
      btn.addEventListener(
          "click",
          theEvent => {
              console.log("this got clciked")
              const dialogElement = theEvent.target.parentNode
              dialogElement.close()
          }
      )
  }
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == button) {
        button.style.display = "none";
    }
}

  const allDetailButtons = document.querySelectorAll("button[id^='button--']")

  // Add an event listener to each one
  for (const btn of allDetailButtons) {
      btn.addEventListener(
          "click",
          theEvent => {
              const dialogSiblingSelector = `#${theEvent.target.id}+dialog`
              const theDialog = document.querySelector(dialogSiblingSelector)
              // you could simplify by doing this: 
              // const theDialog = document.querySelector(`#${theEvent.target.id}+dialog`)
              theDialog.showModal()
          }
      )
  }
}
export default initializeDetailButtonEvents