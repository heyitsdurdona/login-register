window.addEventListener("load", function(){
    const user = null;

    if (user){
        window.location.href = "./index.html";
    }
});

const elForm = document.getElementById('form');

elForm.addEventListener('submit', function(evt){
    evt.preventDefault();
     
    const formData = new FormData(evt.target);
    

    // formData.forEach((el, key) => {
    //     console.log(el, key)
    // });

    const result = {};
    for(const [key, value] of formData.entries()){
        result[key]= value;
    }
    console.log(result)
})