function toggleItem(){var e=this.parentNode.className;for(i=0;i<accItem.length;i++)accItem[i].className="accordionItem close";"accordionItem close"==e&&(this.parentNode.className="accordionItem open")}var accItem=document.getElementsByClassName("accordionItem"),accHD=document.getElementsByClassName("accordionItemHeading");for(i=0;i<accHD.length;i++)accHD[i].addEventListener("click",toggleItem,!1);