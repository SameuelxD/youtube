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