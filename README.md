## 按住C键，点击哪里复制哪里
脚本放在油猴Tampermonkey中管理，需要打开插件的开发者模式才能生效，在扩展管理中设置
## 有些页面不让复制！但我就想复制
当在面试鸭看一些题的时候，部分内容看不到，于是想要复制问题出去搜，发现根本无法选中，更别说复制了<br>
于是想到了通过写一个脚本让以后可以方便的复制想要的内容。

### 目标
当鼠标放上去点击一下就可以复制元素的内容，感觉挺简单但是实际写起来还有点复杂<br>
### 具体实现
首先是获取点击的目标元素：
``` js
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
```
获取元素内容如果存在就调用复制函数
``` js
function copy(text) {
   console.log('成功进入')
   navigator.clipboard.writeText(text).then(() => {
            console.log('复制成功:', text);
            showSuccess(text)

        }).catch(err => {
            console.error('复制失败:', err);
        });
  }
```
用Navigator对象实现将内容放入剪切板，showSuccess()函数就是用来提示的，显示复制了没以及复制的东西，通过`createElement`方法实现


