var mobile=/iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase()),otherTitle=document.getElementById("otherTitle"),otherList=document.getElementById("otherList");mobile?(otherTitle.style.display="block",otherList.style.display="block"):(otherTitle.style.display="none",otherList.style.display="none");