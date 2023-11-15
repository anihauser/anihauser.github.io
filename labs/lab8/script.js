function toggleTheme(){
    let bod = document.querySelector("body");
    bod.classList.toggle('dark-mode');
}
let tog = document.getElementById("toggleButton")
tog.onclick = toggleTheme;