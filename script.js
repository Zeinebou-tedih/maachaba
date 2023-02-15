let show=document.querySelector(".chow");
let side=document.querySelector(".recherche");
show.addEventListener("click",function(){
    if(side.style.display=="none"){
        side.style.display="block";
    }
    else{
        side.style.display="none";
    }
    window.onscroll=function(){
        side.style.display="none";
    }
});

let cardP=document.querySelectorAll(".cardp");
let select=document.querySelector(".input");
// let option=document.querySelectorAll("#select option");
select.onchange=function (){

    window.scrollTo(460,parseInt(select.value));
    switch(select.value){
        case "900":
            cardP[0].style.transform="scale(1.1)";
            cardP[0].style.backgroundColor="#4e9eff";
            setTimeout(function(){
                cardP[0].style.transform="scale(1)";
                cardP[0].style.backgroundColor="transparent";
            },2000);
            break;
            case "901":
            cardP[1].style.transform="scale(1.1)";
            cardP[1].style.backgroundColor="#4e9eff";
            setTimeout(function(){
                cardP[1].style.transform="scale(1)";
                cardP[1].style.backgroundColor="transparent";
            },2000);
            break;
            case "902":
            cardP[2].style.transform="scale(1.1)";
            cardP[2].style.backgroundColor="#4e9eff";
            setTimeout(function(){
                cardP[2].style.transform="scale(1)";
                cardP[2].style.backgroundColor="transparent";
            },2000);
            break;
            case "1650":
            cardP[3].style.transform="scale(1.1)";
            cardP[3].style.backgroundColor="#4e9eff";
            setTimeout(function(){
                cardP[3].style.transform="scale(1)";
                cardP[3].style.backgroundColor="transparent";
            },2000);
            break;
            case "1651":
                cardP[4].style.transform="scale(1.1)";
                cardP[4].style.backgroundColor="#4e9eff";
                setTimeout(function(){
                    cardP[4].style.transform="scale(1)";
                    cardP[4].style.backgroundColor="transparent";
                },2000);
                break;
                case "1652":
                    cardP[5].style.transform="scale(1.1)";
                    cardP[5].style.backgroundColor="#4e9eff";
                    setTimeout(function(){
                        cardP[5].style.transform="scale(1)";
                        cardP[5].style.backgroundColor="transparent";
                    },2000);
                    break;
                    case "2350":
                        cardP[6].style.transform="scale(1.1)";
                        cardP[6].style.backgroundColor="#4e9eff";
                        setTimeout(function(){
                            cardP[6].style.transform="scale(1)";
                            cardP[6].style.backgroundColor="transparent";
                        },2000);
                        break;
                        case "2351":
                            cardP[7].style.transform="scale(1.1)";
                            cardP[7].style.backgroundColor="#4e9eff";
                            setTimeout(function(){
                                cardP[7].style.transform="scale(1)";
                                cardP[7].style.backgroundColor="transparent";
                            },2000);
                            break;
                            case "2352":
                                cardP[8].style.transform="scale(1.1)";
                                cardP[8].style.backgroundColor="#4e9eff";
                                setTimeout(function(){
                                    cardP[8].style.transform="scale(1)";
                                    cardP[8].style.backgroundColor="transparent";
                                },2000);
                                break;
                                case "3050":
                                cardP[9].style.transform="scale(1.1)";
                                cardP[9].style.backgroundColor="#4e9eff";
                                setTimeout(function(){
                                    cardP[9].style.transform="scale(1)";
                                    cardP[9].style.backgroundColor="transparent";
                                },2000);
                                break;
                                case "3051":
                                cardP[10].style.transform="scale(1.1)";
                                cardP[10].style.backgroundColor="#4e9eff";
                                setTimeout(function(){
                                    cardP[10].style.transform="scale(1)";
                                    cardP[10].style.backgroundColor="transparent";
                                },2000);
                                break;
                                case "3052":
                                cardP[11].style.transform="scale(1.1)";
                                cardP[11].style.backgroundColor="#4e9eff";
                                setTimeout(function(){
                                    cardP[11].style.transform="scale(1)";
                                    cardP[11].style.backgroundColor="transparent";
                                },2000);
                                break;
                                case "3750":
                                cardP[12].style.transform="scale(1.1)";
                                cardP[12].style.backgroundColor="#4e9eff";
                                setTimeout(function(){
                                    cardP[12].style.transform="scale(1)";
                                    cardP[12].style.backgroundColor="transparent";
                                },2000);
                                break;
                                case "3751":
                                cardP[13].style.transform="scale(1.1)";
                                cardP[13].style.backgroundColor="#4e9eff";
                                setTimeout(function(){
                                    cardP[13].style.transform="scale(1)";
                                    cardP[13].style.backgroundColor="transparent";
                                },2000);
                                break;
                                case "3752":
                                cardP[14].style.transform="scale(1.1)";
                                cardP[14].style.backgroundColor="#4e9eff";
                                setTimeout(function(){
                                    cardP[14].style.transform="scale(1)";
                                    cardP[14].style.backgroundColor="transparent";
                                },2000);
                                break;
                                case "4450":
                                cardP[15].style.transform="scale(1.1)";
                                cardP[15].style.backgroundColor="#4e9eff";
                                setTimeout(function(){
                                    cardP[15].style.transform="scale(1)";
                                    cardP[15].style.backgroundColor="transparent";
                                },2000);
                                break;
                                case "4451":
                                cardP[16].style.transform="scale(1.1)";
                                cardP[16].style.backgroundColor="#4e9eff";
                                setTimeout(function(){
                                    cardP[16].style.transform="scale(1)";
                                    cardP[16].style.backgroundColor="transparent";
                                },2000);
                                break;
    }
}

