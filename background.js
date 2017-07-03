removeContent();
window.addEventListener("scroll", removeContent);
function removeContent() {
    document.querySelectorAll('div.fbUserContent._5pcr').forEach(
    function(element) { 
        const text = element.textContent.toLowerCase();
        if(/^(.*big.*boss.*)$/.test(text)){
           element.style.display = 'none';     
        }
     }
     );
}