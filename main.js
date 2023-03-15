prediction=""





 Webcam.set({
    width:300,
    height:250,
    img_format:'png',
    png_quality:90,
})

camera=document.getElementById("camera");

Webcam.attach('#camera');


function take_snapshot(){
    Webcam.snap(
        function (data_uri){
            document.getElementById("result").innerHTML='<img id="snap" src="'+data_uri+'">'
        }

    )
}

console.log('ml5 version' , ml5.version)

classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/nTTlzp7z3/',modelLoaded)

function modelLoaded(){
    console.log('model has been loaded')
}

function check()
 { img = document.getElementById('snap'); 
 classifier.classify(img, gotResult); 
}

function speak(){
    var synth = window.speechSynthesis
    speech="The first prediction is"+predicton
   

    speech=new SpeechSynthesisUtterance(speech)
    synth.speak(speech)
}

function gotResult(error,result){
    if (error) {
        console.error(error)
        
    } else {
        console.log(result)

        document.getElementById("result_gesture_name").innerHTML = result[0].label;
        

        prediction = result[0].label;
        console.log(prediction)
        speak()
    }

    

    if (prediction == "yo") {
        
        document.getElementById("update_gesture").innerHTML = "&#129304;"
    }


    if (prediction == "best") {
        
        document.getElementById("update_gesture").innerHTML = "&#128077;"
    }

    if (prediction == "amazing") {
        
        document.getElementById("update_gesture").innerHTML = "&#128076;	"
    }

    if (prediction == "victory") {
        
        document.getElementById("update_gesture").innerHTML = "&#9996;	"
    }


    }


   


