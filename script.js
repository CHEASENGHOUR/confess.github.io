const yes = document.querySelector('.btn_yes');
const success = document.querySelector('.confess_success');
const Success=()=>{
    yes.addEventListener('click',function(){
        success.style.visibility = 'visible';
    })
}
Success();
const NoBtn = document.querySelector('.btn_no');
NoBtn.style.transition = "top 0.2s, left 0.2s";
NoBtn.addEventListener("mouseover", () => {
  const maxWidth = window.innerWidth - NoBtn.offsetWidth;
  const maxHeight = window.innerHeight - NoBtn.offsetHeight;
  const randomX = Math.round(Math.random() * maxWidth);
  const randomY = Math.round(Math.random() * maxHeight);

  NoBtn.style.position = "absolute";
  NoBtn.style.left = `${randomX}px`;
  NoBtn.style.top = `${randomY}px`;
});
    