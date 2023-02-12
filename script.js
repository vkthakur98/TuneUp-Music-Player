console.log("Welcome To TuneUp Dev Console");
let audioElement = new Audio("/Teri Khair Mangdi(Female)mp3");
const songs = [
    {sno:0,songname:"Teri Khair Mangdi(Female).mp3",artist:"Ramya Ramkumar",coverimage:"song-cover1.jpg"},{sno:1,songname:"KENDIYA-IMRAAN KHAN.mp3",artist:"Imran Khan",coverimage:"song-cover3.jpg"},{sno:2,songname:"Agar tum mil jao.mp3",artist:"Shreya Ghoshal",coverimage:"song-cover4.jpg"},{sno:3,songname:"Kabhi-jo-badal-barse-violin-10635.mp3",artist:"Ramya Ramkumar",coverimage:"tuneup.jpg"}
]
const songdiv = document.getElementsByClassName("nams");
const fav_song_container = document.getElementsByClassName("fav-song-container");
var songindex = 0;
for(let i=0;i<songs.length;i++)
{
let song_item = document.createElement("div");
song_item.setAttribute("class","song-item");    
let song_cover = document.createElement("img");
song_cover.setAttribute("class","songcover");
song_cover.setAttribute("height","150");
song_cover.setAttribute("width","130");
song_cover.setAttribute("alt",songs[i].songname);
song_cover.setAttribute("artist",songs[i].artist);
song_cover.setAttribute("cover",songs[i].coverimage);
song_cover.setAttribute("songindex",songs[i].sno);
recoversong = songs[i].coverimage;
song_cover.setAttribute("src","./CoverImages/"+recoversong);
let name = document.createElement("p");
name.setAttribute("class","nams");
name.innerHTML = songs[i].songname;
song_item.appendChild(song_cover);
song_item.appendChild(name);
fav_song_container[0].appendChild(song_item);
}
const songcovers = document.getElementsByClassName("songcover")
// for(let i = 0;i<songs.length;i++)
// {
//     songdiv[i].innerHTML = songs[i].songname;
//     songcovers[i].setAttribute("alt",songs[i].songname);
//     songcovers[i].setAttribute("artist",songs[i].artist);
//     songcovers[i].setAttribute("cover",songs[i].coverimage);
//     songcovers[i].setAttribute("songindex",songs[i].sno);
//     recoversong = songs[i].coverimage;
//     songcovers[i].setAttribute("src","./CoverImages/"+recoversong);
// }

//play the song
let main_play_btn = document.getElementsByClassName("pp-mn-btn")[0];
let  mysong = Array.from(document.getElementsByClassName("song-item"));
mysong.forEach((element) => {
element.addEventListener("click",(e)=>{
    let songname = e.target.getAttribute("alt");
    let artist = e.target.getAttribute("artist");
    let cover = e.target.getAttribute("cover");
    songindex = e.target.getAttribute("songindex");
    audioElement.src="./songs/"+songname;
    document.getElementById("main-cover-img").src="./CoverImages/"+cover;
    document.getElementById("cover-image-mini").src="./CoverImages/"+cover;
    let resongname = songname.replace("mp3","");
    document.getElementById("main-name").innerHTML=resongname;
    if(audioElement.paused)
    { 
    audioElement.play();
    document.getElementsByClassName("pp-m-btn")[0].classList.replace("fa-play","fa-pause");
    document.getElementsByClassName("pp-mn-btn")[0].classList.replace("fa-play-circle","fa-pause-circle");
    document.getElementsByClassName("music-playing")[0].style.opacity="1";
    document.getElementsByClassName("music-playing")[1].style.opacity="1";
    document.getElementsByClassName("song-name-mini-p")[0].innerHTML=songname; 
    document.getElementsByClassName("artist-name")[0].innerHTML=artist;
    }
    else
    {
    audioElement.pause();
    }
    })   
});

let mini_pause_btn = document.getElementsByClassName("pp-m-btn")[0];
let cover_img = document.getElementsByClassName("coverimage-mini")[0];

//open main player
let bottomPlayer = document.getElementsByClassName("bottom-player")[0];
let mainPlayer = document.getElementsByClassName("main-player")[0];

main_play_btn.addEventListener("click",()=>{
    if(audioElement.paused)
    {
        audioElement.play(); 
        document.getElementsByClassName("pp-m-btn")[0].classList.replace("fa-play","fa-pause");
        document.getElementsByClassName("pp-mn-btn")[0].classList.replace("fa-play-circle","fa-pause-circle");
        document.getElementsByClassName("music-playing")[0].style.opacity="1";
        document.getElementsByClassName("music-playing")[1].style.opacity="1";
    }
    else
    {
        audioElement.pause();
        document.getElementsByClassName("pp-m-btn")[0].classList.replace("fa-pause","fa-play");
        document.getElementsByClassName("pp-mn-btn")[0].classList.replace("fa-pause-circle","fa-play-circle");
        document.getElementsByClassName("music-playing")[0].style.opacity="0";
        document.getElementsByClassName("music-playing")[1].style.opacity="0";
    }  
})

bottomPlayer.addEventListener("click",(event)=>{
    if(event.target===mini_pause_btn)
    {
        if(audioElement.paused)
    {
        audioElement.play(); 
        document.getElementsByClassName("pp-m-btn")[0].classList.replace("fa-play","fa-pause");
        document.getElementsByClassName("pp-mn-btn")[0].classList.replace("fa-play-circle","fa-pause-circle");
        document.getElementsByClassName("music-playing")[0].style.opacity="1";
        document.getElementsByClassName("music-playing")[1].style.opacity="1";
    }
    else
    {
        audioElement.pause();
        document.getElementsByClassName("pp-m-btn")[0].classList.replace("fa-pause","fa-play");
        document.getElementsByClassName("pp-mn-btn")[0].classList.replace("fa-pause-circle","fa-play-circle");
        document.getElementsByClassName("music-playing")[0].style.opacity="0";
        document.getElementsByClassName("music-playing")[1].style.opacity="0";
    }       
    }
    else    {
        mainPlayer.style.display="block";
    }
})

//close main player
let angleDown = document.getElementsByClassName("fa-angle-down")[0];
angleDown.addEventListener("click",()=>{
mainPlayer.style.display="none";
})

//update seekbar
seekbar = document.getElementsByClassName("seekbar")[0];
audioElement.addEventListener("timeupdate",()=>{
    seekbar.value = parseInt((audioElement.currentTime/audioElement.duration*100));
    if(audioElement.paused)
    {
        document.getElementsByClassName("music-playing")[0].style.opacity="0";
        document.getElementsByClassName("music-playing")[1].style.opacity="0";
        document.getElementsByClassName("pp-m-btn")[0].classList.replace("fa-pause","fa-play");
        document.getElementsByClassName("pp-mn-btn")[0].classList.replace("fa-pause-circle","fa-play-circle");
    }
    if(audioElement.currentTime===audioElement.duration)
    {
        autoPlay();
    }
})

//seek current song
seekbar.addEventListener("change",()=>{
    seekvalue = ((seekbar.value*audioElement.duration)/100);
    audioElement.currentTime = seekvalue;    
})

//prev next events
let nextBtn = document.getElementById("next-btn");
nextBtn.addEventListener("click",()=>{
    if(songindex>=3)
    {
        songindex=0;
    } 
    else
    { 
    songindex++;
    }
    let nextsong = songs[songindex].songname;
    audioElement.src="./songs/"+nextsong;
    let resongname = nextsong.replace("mp3","");
    document.getElementById("main-name").innerHTML = resongname;
    document.getElementById("main-cover-img").src = "./Coverimages/"+songs[songindex].coverimage;
    document.getElementById("cover-image-mini").src="./Coverimages/"+songs[songindex].coverimage;
    document.getElementsByClassName("artist-name")[0].innerHTML=songs[songindex].artist;
    document.getElementsByClassName("song-name-mini-p")[0].innerHTML=resongname;
    document.getElementsByClassName("pp-m-btn")[0].classList.replace("fa-play","fa-pause");
        document.getElementsByClassName("pp-mn-btn")[0].classList.replace("fa-play-circle","fa-pause-circle");
        document.getElementsByClassName("music-playing")[0].style.opacity="1";
        document.getElementsByClassName("music-playing")[1].style.opacity="1"; 
    audioElement.play();
})

let prevBtn = document.getElementById("prev-btn");
prevBtn.addEventListener("click",()=>{
    if(songindex<0)
    {
        songindex=1;
    } 
    else
    { 
    songindex--;
    }
    let nextsong = songs[songindex].songname;
    audioElement.src="./songs/"+nextsong;
    let resongname = nextsong.replace("mp3","");
    document.getElementById("main-name").innerHTML = resongname;
    document.getElementById("main-cover-img").src = "./Coverimages/"+songs[songindex].coverimage;
    document.getElementById("cover-image-mini").src="./Coverimages/"+songs[songindex].coverimage;
    document.getElementsByClassName("artist-name")[0].innerHTML=songs[songindex].artist;
    document.getElementsByClassName("pp-m-btn")[0].classList.replace("fa-play","fa-pause");
    document.getElementsByClassName("pp-mn-btn")[0].classList.replace("fa-play-circle","fa-pause-circle");
    document.getElementsByClassName("music-playing")[0].style.opacity="1";
    document.getElementsByClassName("music-playing")[1].style.opacity="1";
    audioElement.play();
})

function autoPlay()
{
    if(songindex>=3)
    {
        songindex=0;
    } 
    else
    { 
    songindex++;
    }
    let nextsong = songs[songindex].songname;
    audioElement.src="./songs/"+nextsong;
    let resongname = nextsong.replace("mp3","");
    document.getElementById("main-name").innerHTML = resongname;
    document.getElementById("main-cover-img").src = "./Coverimages/"+songs[songindex].coverimage;
    document.getElementById("cover-image-mini").src="./Coverimages/"+songs[songindex].coverimage;
    document.getElementsByClassName("artist-name")[0].innerHTML=songs[songindex].artist;
    document.getElementsByClassName("song-name-mini-p")[0].innerHTML=resongname;
    document.getElementsByClassName("pp-m-btn")[0].classList.replace("fa-play","fa-pause");
        document.getElementsByClassName("pp-mn-btn")[0].classList.replace("fa-play-circle","fa-pause-circle");
        document.getElementsByClassName("music-playing")[0].style.opacity="1";
        document.getElementsByClassName("music-playing")[1].style.opacity="1"; 
    audioElement.play();
    
}

document.getElementsByClassName("fa-search")[0].addEventListener("click",()=>{
    document.getElementsByClassName("div-search")[0].style.marginTop="13px";
})

document.getElementsByClassName("fa-angle-up")[0].addEventListener("click",()=>
{
    document.getElementsByClassName("div-search")[0].style.marginTop="-110px";
})

let searchkey = document.getElementById("searchkey");
let search_result = document.getElementsByClassName("search-results");
let songnamescontain  = [];
searchkey.addEventListener("keyup",()=>{
    songnamescontain=[];
    let searchval = document.getElementById("searchkey").value;
    for(let i = 0; i<=songs.length;i++)
    {
        if(searchval==="")
        {
            search_result[0].style.opacity="0";
        }
        else
        {
            if(songs[i].songname.includes(searchval))
            {
                    let renamesong = songs[i].songname.replace("mp3","");        
                    songnamescontain[i] = renamesong;
                    search_result[0].innerHTML = songnamescontain;
                    search_result[0].style.opacity="1";
            }
            console.log(songnamescontain.length);
        }
    }
})

function removeLoader()
{
    document.getElementsByClassName("loader")[0].style.display="none";
}

document.getElementsByClassName("fa-user")[0].addEventListener("click",()=>{
    window.location.href="admin.html";
})



