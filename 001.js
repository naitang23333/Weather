window.popImg = function(imgUrl){
    if(document.querySelector('#__img_popup_mask')){
        document.querySelector('#__img_popup_mask').remove();
        return;
    }
    const mask = document.createElement('div');
    mask.id = '__img_popup_mask';
    Object.assign(mask.style,{
        position:'fixed',top:'0px',left:'0px',width:'100vw',height:'100vh',
        background:'rgba(0,0,0,0.75)',display:'flex',justifyContent:'center',
        alignItems:'center',zIndex:'999999'
    });
    const box = document.createElement('div');
    Object.assign(box.style,{position:'relative',maxWidth:'92vw',maxHeight:'92vh'});
    const closeBtn = document.createElement('button');
    closeBtn.textContent = '×';
    Object.assign(closeBtn.style,{
        position:'absolute',top:'-14px',right:'-14px',width:'34px',height:'34px',
        borderRadius:'50%',border:'none',background:'#fff',color:'#222',
        fontSize:'24px',cursor:'pointer',display:'flex',justifyContent:'center',alignItems:'center'
    });
    const img = document.createElement('img');
    img.src = imgUrl;
    Object.assign(img.style,{maxWidth:'90vw',maxHeight:'88vh',display:'block',objectFit:'contain'});
    function closePop(){mask.remove();}
    closeBtn.onclick = closePop;
    mask.onclick = e=>{if(e.target===mask)closePop();};
    box.append(closeBtn,img);
    mask.appendChild(box);
    document.body.appendChild(mask);
};
//示例调用
popImg("https://picsum.photos/id/237/1000/800");
