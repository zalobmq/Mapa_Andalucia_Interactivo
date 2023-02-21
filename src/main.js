var audio;
/* INICIAR AUDIO-DOCUMNENTAL */

/* Recoge el audio pasado y lo reproduce */
function playAudio(audioFile) {
   if(!audio){
     audio = new Audio(audioFile);
    audio.play();
    }else{
        audio.pause();
        audio = new Audio(audioFile);
        audio.play();
    }
}

/* PARAR AUDIO-DOCUMNENTAL */
function stopAudio() {
    
    audio.pause();
    
  }

  
  
  
  
  