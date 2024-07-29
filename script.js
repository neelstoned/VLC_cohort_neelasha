const speedUp=document.querySelector("#speedup");
const speedDown=document.querySelector("#speeddown");
const volumeUp=document.querySelector("#volumeup");
const volumeDown=document.querySelector("#volumedown");
const openBtn=document.querySelector("#openbtn");
const videoInputBtn=document.querySelector("#video-input-btn");
const videoPlayer=document.querySelector("#main");
const toast=document.querySelector(".toast");


function showToast(message){
    //toast show
   toast.textContent=message;
   toast.style.display="block";

   setTimeout(()=>{
    toast.style.display="none";
   },1000);
}



const speedUpHandler= function(){
    //yaha speed up karna hai
   //where is the video
   const videoElement=document.querySelector("video");
   if(videoElement==null){
    return;
   }
   if(videoElement.playbackRate>3){
    return;
   }
   //video->speed increase
   const increasedSpeed=videoElement.playbackRate+0.5;
   videoElement.playbackRate=increasedSpeed;
   //which property you will use to increase it's speed

   //*how much you want to increase
//   console.log("increased speed", increasedSpeed);
    //toast show
    showToast(increasedSpeed+"x");
   
}

const speedDownHandler=()=>{
    //yaha speed down karna hai
    console.log("kaam kar rhi");
   //where is the video
   const videoElement=document.querySelector("video");
   if(videoElement==null){
    return;
   }

 //    //video->speed decrease
   if(videoElement.playbackRate>0){
    const decreasedSpeed=videoElement.playbackRate-0.5;
    videoElement.playbackRate=decreasedSpeed;
    //which property you will use to increase it's speed
 
    //*how much you want to increase
    console.log("decreased speed", decreasedSpeed);
    showToast(decreasedSpeed+"x");
   }
   
  
}


const inputHandler=()=>{
    videoInputBtn.click();

}

const acceptInputHandler=(obj)=>{
   const selectedVideo=obj.target.files[0];
   const link=URL.createObjectURL(selectedVideo);
   const videoElement=document.createElement("video");
   videoElement.src=link;
   videoElement.play();
   videoElement.volume=0.3;
   videoPlayer.setAttribute("class","video");
   videoPlayer.appendChild(videoElement);
   videoElement.controls=true;
}

const volumeUpHandler=()=>{
    const videoElement=document.querySelector("video");
    if(videoElement==null){
     return;
    }

    if(videoElement.volume>=0.9){
        return;
    }
    const increasedVolume=videoElement.volume+0.1;
    videoElement.volume=increasedVolume;
    const percentage=(increasedVolume * 100) + "%";
    // console.log("increased Volume",increasedVolume);
    showToast(percentage);

}

const volumeDownHandler=()=>{
    const videoElement=document.querySelector("video");
    if(videoElement==null){
     return;
    }

    if(videoElement.volume<=0.1){
        videoElement.volume=0;
        return;
    }
    const decreasedVolume=videoElement.volume-0.1;
    videoElement.volume=decreasedVolume;
    const percentage=(decreasedVolume*100)+"%"
    console.log("decreasedVolume",decreasedVolume);
    showToast(percentage);
}

speedUp.addEventListener("click",speedUpHandler);
openBtn.addEventListener("click",inputHandler);
videoInputBtn.addEventListener("change",acceptInputHandler);
speedDown.addEventListener("click",speedDownHandler);
volumeUp.addEventListener("click",volumeUpHandler);
volumeDown.addEventListener("click",volumeDownHandler);






/***************   controls  ********************* */

const fullScreen=document.querySelector("#fullScreen");

const fullScreenHandler=()=>{
    videoPlayer.requestFullscreen();
}




fullScreen.addEventListener("click",fullScreenHandler);



