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
/*async function listVideos() {
    const [res1, res2] = await Promise.all([
        fetch(`js/${path1}.json`).then(details => details.json()),
        fetch(`js/${path2}.json`).then(videos => videos.json())
    ]);

    let selection = document.querySelector("#list_videos");

    // Limpia el contenido existente en #list_videos
    selection.innerHTML = "";

    // Combina los resultados de res1 y res2 y mapea el contenido
    let combinedData = res1.contents.concat(res2.contents);
    let randomThumbnails = combinedData.map((values) => `
         <div class="videos_main">
            <a href="#" class="video"><img src="${values.video.thumbnails[3].url}" alt="videos"/></a>
            <div class="information_videos">
                    <a href="#" id="photo_channel"><img src="#" alt="videos"/></a>
                    <a href="#" class="video_title">${values.video.title}</a>
                    <a href="#" class="ch">CreativeCode</a>
                    <a href="#" class="stats">${values.video.stats.views} views - ${values.video.publishedTimeText}</a>
            </div> 
        </div>
    `).join("");

    // Inserta los elementos en #list_videos
    selection.insertAdjacentHTML("beforeend", randomThumbnails);
}
listVideos();*/





async function listVideos() {
    let petition1=await fetch(`js/${path1}.json`);
    let res1=await petition1.json();
    let petition2 = await fetch(`js/${path2}.json`);
    let res2 = await petition2.json();
    let selection = document.querySelector("#list_videos");
    
    // Limpia el contenido existente en #list_videos
    selection.innerHTML = "";

    // Obtiene un conjunto específico de miniaturas aleatorias
    let randomThumbnails = res2.contents.map((values)=> `
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
    //let randomTitle = res.contents[random].video;

    // Construye los elementos HTML
       
    
    // Inserta los elementos en #list_videos
    selection.insertAdjacentHTML("beforeend", randomThumbnails);
    //selection.insertAdjacentHTML("beforeend",titleVideos)
}

listVideos();
/*async function playingVideo(){
    let petition1=await fetch(`js/${path1}.json`);
    let res1=await petition1.json();
    let petition2 = await fetch(`js/${path2}.json`);
    let res2 = await petition2.json();
    let selection = document.querySelector("#playing_video");
    
    // Limpia el contenido existente en #list_videos
    selection.innerHTML = "";

    // Obtiene un conjunto específico de miniaturas aleatorias
    let playing_video = res2.contents.video.videoId/* html 
    let video= <div class="playing_video">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/izvodnnCvt0?si=q05MVhsSepC_QcKn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
        
    selection.insertAdjacentHTML("beforeend", playing_video);       
}
playingVideo();*/

/*let listVideos=async()=>{
    let random=Math.floor(Math.random() * 20)
    let petition=await fetch(`js/${path2}.json`);
    let res=await petition.json();
    let selection=document.querySelector("#list_videos");
    selection.insertAdjacentHTML("beforeend", /* html  
    <div class="videos_main">
        ${res.contents[random].video.thumbnails.map((value) => html `
        <a href="#" class="video"><img src="${value.url}" alt=""></a>
        `).join("")}
}

<div class="information_video">
            <a href="#">${value.title}</a>
            <p>${value.stats.views} Views &bull; ${value.publishedTimeText}</p>
        </div>


    </div>
    `);
}
listVideos();


/*<div class="video_browser">
            ${res.contents[random].video.map((value)=>  html `
            <div class="information_video">        
                <a href="view.html">${value.title}</a>
                <p>${value.stats.views}</p>
                <p>${value.publishedTimeText}</p>       
            </div>).join("")}
        </div>*/




/* 

        <div class="videos_main">
            ${res.contents[random].video.thumbnails.map((value) => `
                <a href="#" class="video"><img src="${value.url}" alt=""></a>    
            `).join("")}
        </div>
        `);
        selection.insertAdjacentHTML("beforeend",/* html `
        <div class="information_videos">
            ${res.contents[random].video.map((value) => `
                <a href="#" class="title_video">${value.title}</a>
            `).join("")}
        </div>
        `);    */