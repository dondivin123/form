document.addEventListener('DOMContentLoaded', ()=>{
    //implement codes
    const headerElement = document.querySelector('header');

    headerElement.innerHTML = `<nav>
            <img id="log" src="./alight picture.PNG" alt="log picture">
            <ul>
                <li><a href="home.html">Home Me</a></li>
                <li><a href="contact.html">Contact Me</a></li>
                <li><a href="about.html">About Me</a></li>
            </ul>
        </nav>`  
})