console.log("lets e+write js")

// async function main() {
//     let a = await fetch("http://127.0.0.1:5500/songs/")
//     let response = await a.text();
//     console.log(response)
// }

const getSongs = async ()=>{
    let a = await fetch("http://127.0.0.1:5500/songs/")
    let response = await a.text();
    console.log(response)
    let div = document.createElement("div")
    div.innerHTML = response;
    let as = div.getElementsByTagName("a")
    let songs= [];
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if(element.href.endsWith(".mp3")){
songs.push(element.href)
        }
        
    }
    return songs
}


const main = async()=>{
    let songs = await getSongs()
    console.log(songs)

   const btn = document.getElementById("play"); // a button in your HTML
    btn.addEventListener("click", () => {
        var audio = new Audio(songs[0]);
        audio.play().catch(err => console.log("Playback blocked:", err));
    });
   
}

main()

