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
async function DetailsChannel(){
    const url = 'https://youtube138.p.rapidapi.com/channel/details/?id=UC8fkwsjcI_MhralEX1g4OBw&hl=en&gl=US';
    const options = {
	    method: 'GET',
	    headers: {
		    'X-RapidAPI-Key': 'b5d6ae1157mshc83ca00c923dfd1p189b47jsnb6077838a4a7',
		    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
	    }
    };
    try {
	    const response = await fetch(url, options);
	    const result = await response.json();
	    console.log(result);
    } catch (error) {
	    console.error(error);
    }
}
DetailsChannel();


const path="details";
const path2="videos";
let buildAvatar=async()=>{
    let petition=await fetch(`js/${path}.json`);
    let res=await petition.json();
    let selection=document.querySelector("#avatar");
    selection.insertAdjacentHTML("beforeend", /* html */ `<img src=${res.author.avatar[2].url} alt="perfil">
    `);
}
buildAvatar();
let listVideos=async()=>{
    let random=Math.floor(Math.random() * 20)
    let petition=await fetch(`js/${path2}.json`);
    let res=await petition.json();
    let selection=document.querySelector("#list_videos");
    selection.insertAdjacentHTML("beforeend", /* html */` 
    <div class="videos_main">
        ${res.contents[random].video.thumbnails.map((value) => /*html */`
        <a href="#" class="video"><img src="${value.url}" alt=""></a>
        `).join("")}
        <div class="video_browser">
            ${res.contents[random].video.map((value)=> /* html */`
            <div class="information_video">        
                <a href="view.html">${value.title}</a>
                <p>${value.stats.views}</p>
                <p>${value.publishedTimeText}</p>       
            </div>`).join("")}
        </div>
    </div>
    `);
}
listVideos();