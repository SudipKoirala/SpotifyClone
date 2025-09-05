console.log("lets e+write js")
let currSong = new Audio();


const getSongs = async () => {
    let a = await fetch("http://127.0.0.1:5500/songs/")
    let response = await a.text();
    console.log(response)
    let div = document.createElement("div")
    div.innerHTML = response;
    let as = div.getElementsByTagName("a")
    let songs = [];
    let geet = [];
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".mp3")) {
            songs.push(element.href.split("/songs/")[1].split(".mp3")[0])
            geet.push(element.href)
        }

    }
    return { songs, geet };
}
const playMusic = (track)=>{
    currSong.src = track;
    currSong.play();
}

const main = async () => {

    let { songs, geet } = await getSongs()
    // console.log(songs)
    console.log(geet);
    let songul = document.querySelector(".leftlib ul")
    for (const song of songs) {
        songul.innerHTML = songul.innerHTML + ` 
        <li class="flex">
                        <img src="music.svg" alt="music">
                <div class="songinfo">
                    <div class="songname">${song.replaceAll("%20", " ").replace("%2C", "").replace(/\(.*?\)/g, "")}</div>
                    <div class="songartist">Sudip</div>
                </div>
                <div class="playnow flex">
                        <span>Play Now</span>
                        <img src="play.svg" id="lplay" alt="play">
                    </div>
                    </li>`;

    }

    document.querySelectorAll(".songlist li").forEach((li, index) => {
    li.addEventListener("click", () => {
        playMusic(geet[index]);
        })
        
        
    })
 const play = document.getElementById("play");
play.addEventListener("click",()=>{
if (currSong.paused){
    currSong.play()
    play.src = "pause.svg"
}else{
    currSong.pause()
play.src = "play.svg"
}
})
}

main()

