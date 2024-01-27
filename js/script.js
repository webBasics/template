const button = document.querySelector('button');

button.addEventListener('click', ()=>{
  Notification.requestPermission().then(perm => {
    if(perm === 'granted'){
      const notification = new Notification("Hello!", {
        body: "This is the body",
        data: { data : 'content'},
        //icon: "img/... .jpg",
        //tag: "Hello Notification", //prevent stacking
      });

      notification.addEventListener('close', e=>{
        console.log('Closed');
      });
    }
  });
});
