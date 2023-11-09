function toggleSongs(){
    let secondHalf = document.getElementById("songs-second-half");
    if(!(secondHalf.classList.contains('hidden'))){
        secondHalf.classList.add('hidden');
    } else {
        secondHalf.classList.remove('hidden')
    } 
}

document.getElementById("toggle-button").onclick = toggleSongs;