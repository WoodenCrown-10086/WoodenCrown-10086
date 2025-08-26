// ==UserScript==
// @name         CopyAny
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  按住c键，实现点击哪里复制哪里
// @author       WoodenCrown
// @match        https://*/*
// @match        http://*/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    let canCopy=0;
    document.addEventListener('keydown',function(event){
    if(event.key==='c'||event.key==='C'){
    canCopy=1;
    getText()
    }
    })
    document.addEventListener('keyup',(event)=>{
    if(event.key==='c'||event.key==='C'){
    canCopy=0;
    }
    })
    function getText(){

        document.addEventListener('click',function(event){
            if(!canCopy)return
            const clickElement=event.target
            console.log('点击了',clickElement)
            let textCopy;

            textCopy=clickElement.textContent||clickElement.innerText;


            if(textCopy && textCopy.trim()!==''){
            copy(textCopy)
            }
        })
        }

   function copy(text) {
   console.log('成功进入')
   navigator.clipboard.writeText(text).then(() => {
            console.log('复制成功:', text);
            showSuccess(text)

        }).catch(err => {
            console.error('复制失败:', err);
        });
  }

    function showSuccess(text){
        console.log('展示一下子')
        const show=document.createElement('div');
        show.textContent=`成功复制: ${text}`;
        show.style.zIndex='99999';
        show.style.backgroundColor='#00FFFF';
        show.style.border='solid 1px'
        show.style.borderRadius='6px';
        show.style.position='fixed';
        show.style.bottom='20px';
         document.body.appendChild(show);

       setTimeout(()=>{
        document.body.removeChild(show);
       },2000)
    }


})();