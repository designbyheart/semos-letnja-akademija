// var formList = document.getElementById('registration');

// console.log("form ",  document.getElementById('registration'))

function onLoad() {
    // let form = document.contactForm
    // let email = document.getElementsByName('Email')[0]
    // console.log("form", form, email)
    test();
}

function test() {
    var form = document.querySelector('form[name="login"]');
    console.log('inputs', form);
    
    var newElement = document.createElement('textarea');
    newElement.setAttribute("name", 'Login description');
    newElement.value = 'Idemooooo';
    form.appendChild(newElement);

    var elements = form.querySelectorAll('input');
    elements.forEach(input => {
        input.remove();
    });
    console.log('elements', elements)

}
window.addEventListener("load", function(){
    onLoad()
});