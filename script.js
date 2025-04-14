
const button = document.getElementById("change-text");
const button2 = document.getElementById("change-style");
const button3 = document.getElementById("remove");

const content = document.getElementById("content");
const content2  = document.getElementById("content2");

button.addEventListener("click", () =>{
    const content = document.getElementById("content");
    content.innerHTML = "The text is changed!"
})

button2.addEventListener("click", function(){
    Object.assign(content.style, {
        backgroundColor: "blue",
        color: 'white',
        fontSize: '25px',
        width: '200px'
    })
});

button3.addEventListener("click", () =>{
    const Element = document.createElement("p");
    Element.textContent = "element added";
    content2.appendChild(Element)
})