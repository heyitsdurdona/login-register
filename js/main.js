window.addEventListener('load', function(evt){
    const user = JSON.parse(localStorage.getItem('user'));

    if(!user){
        window.location.href = "./pages/login.html"
    }
})