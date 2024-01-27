const button = document.querySelector('button');

button.addEventListener('click', ()=>{
  Notification.requestPermission().then(perm => {
    if(perm === 'granted'){
      console.log('Hello')
    }
  }
}
