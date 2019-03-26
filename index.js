// 1- find the element

const dodger = document.getElementById('dodger')


function onKeyDown(event){
  
  if (event.keycode === 37) {
    
    console.log(dodger.style.left)
  }
  
  
  
}

// 2. add event listener

document.addEventListener('keydown', onKeyDown)