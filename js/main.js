const container_primary=document.querySelector("#container_primary");
document.querySelector("#btn_bars").addEventListener('click', () =>{
    container_primary.classList.toggle("check");
});
const checkWidth = () => {
    if(window.innerWidth <= 768){
        container_primary.classList.remove("check");
    }
    else{
        container_primary.classList.add("check")
    }
}
checkWidth();
window.addEventListener('resize',() => {
    checkWidth();
});

/* Api */



const path1="details";
const path2="videos";
let buildAvatar=async()=>{
    let petition1=await fetch(`js/${path1}.json`);
    let res1=await petition1.json();
    let selection=document.querySelector("#avatar");
    selection.insertAdjacentHTML("beforeend", /* html */ `<img src=${res1.author.avatar[2].url} alt="perfil">
    `);
}
buildAvatar()



async function listVideos() {
    let petition1 = await fetch(`js/${path1}.json`);
    let res1 = await petition1.json();
    let petition2 = await fetch(`js/${path2}.json`);
    let res2 = await petition2.json();
    let selection = document.querySelector("#list_videos");

    // Verifica si el elemento con ID "list_videos" existe
    if (!selection) {
        console.error("#list_videos no encontrado en el DOM");
        return;
    }

    // Limpia el contenido existente en #list_videos
    selection.innerHTML = "";

    // Obtiene un conjunto específico de miniaturas aleatorias
    let randomThumbnails = res2.contents.map((values) => `
         <div class="videos_main">
            <a href="view.html" class="video"><img src="${values.video.thumbnails[3].url}" alt="videos"/></a>
            <div class="information_videos">
                    <a href="#" id="photo_channel"><img src="${res1.author.avatar[2].url}" alt="avatar"/></a>
                    <a href="#" class="video_title">${values.video.title}</a>
                    <a href="#" class="ch">CreativeCode</a>
                    <a href="#" class="stats">${values.video.stats.views} views - ${values.video.publishedTimeText}</a>
            </div> 
        </div>
    `).join("");

    // Inserta los elementos en #list_videos
    selection.insertAdjacentHTML("beforeend", randomThumbnails);

   

    
}
document.addEventListener("DOMContentLoaded", function () {
    listVideos();
});


async function playingVideo(){
    let petition1= await fetch(`js/${path1}.json`);
    let petition2 = await fetch(`js/${path2}.json`);
    let res1=await petition1.json();
    let res2 = await petition2.json();
    let selection= document.querySelector('#playing_video')
    selection.insertAdjacentHTML("beforeend", /* html */ `
        <iframe width="100%" height="450px" src="https://www.youtube.com/embed/izvodnnCvt0?si=0LEHxTMcnFagHCYY" class="playing_video" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <div class="description_video">    
                <h2 class="title_playing">WebApi NetCore Part22</h2>
                <div class="column1">
                    <a href="#" id="avatar_channel"><img src="${res1.author.avatar[2].url}" alt="avatar"/></a>
                    <h2>CreativeCode</h2>
                    <h3>${res1.author.stats.subscribersText}</h3>
                    <button class=btn_suscribirse>Suscribirse</button>
                </div>
                <div class="column2>
                    <a href="#"><i class="fa-solid fa-thumbs-up"></i></a>                   
                    <a href="#"><i class="fa-solid fa-thumbs-down"></i>
                    <button class="share_v">Share</button>

                </div>
                

            </div>
        `);
}
playingVideo(); 
