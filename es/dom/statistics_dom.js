var div=document.createElement("div");
div.id="_js_statistics_dom";
var html="图像个数:"+document.images.length+"<br/>";
html+="连接个数:"+document.links.length+"<br/>";
html+="表单个数:"+document.forms.length+"<br/>";
div.innerHTML=html;
div.style.width="100px";
div.style.height="100px";
div.style.lineHeight="20px";
div.style.padding="5px";
div.style.backgroundColor="#00CCFF";
div.style.color="white";
div.style.position="fixed";
div.style.bottom="0px";
div.style.right="1px";
div.style.borderRadius="20px";
div.style.boxShadow="0px 0px 8px #00CCFF";
document.body.appendChild(div);