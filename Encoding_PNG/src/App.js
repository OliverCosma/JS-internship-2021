import './App.css';
import Button from '@material-ui/core/Button';


function convertToASCII() {
  

const ASCIIArray = [];
const TextToCode=document.getElementById("textToConvert").value.split('');

 // do shifting stuff
for (let i=0; i<TextToCode.length;i++)
{
    [TextToCode[i],TextToCode[((i*3+1)%TextToCode.length)]]=[TextToCode[((i*3+1)%TextToCode.length)],TextToCode[i]]
}


//reverse shifting

/*
for (let i= 3*TextToCode.length-1; i>=0; i--)
{
   if ((i-1)%3===0)
   {
    [TextToCode[((i-1)/3)], TextToCode[i%TextToCode.length]] = [TextToCode[i%TextToCode.length], TextToCode[((i-1)/3)]]
   }
}
*/



var text=TextToCode.join(); // make string so that we may use charCodeAt
for (let i=0;i<text.length;i++)
{
  ASCIIArray.push(text.charCodeAt(i)) //put all ascii into array 
}
//console.log(ASCIIArray);

var canvas=document.createElement('canvas');
var dimensionImage=Math.sqrt(ASCIIArray.length/4); //create square image with 4 values/pixel

canvas.height=dimensionImage;
canvas.width=dimensionImage;


// create an offscreen canvas
  var canvas = document.createElement("canvas");
  var ctx = canvas.getContext("2d");

  // size the canvas to your desired image
 
  // get the imageData and pixel array from the canvas
  var imgData = ctx.getImageData(0, 0, dimensionImage, dimensionImage);
  var data = imgData.data;

  // manipulate some pixel elements
  for (var i = 0; i < dimensionImage*dimensionImage; i++) {
      data[i*4+0]=ASCIIArray[i*4+0];
      data[i*4+1]=ASCIIArray[i*4+1];
      data[i*4+2]=ASCIIArray[i*4+2];
      data[i*4+3]=ASCIIArray[i*4+3]; 
  }

  // put the modified pixels back on the canvas
  ctx.putImageData(imgData, 0, 0);

  // create a new img object
  var image = new Image();

  // set the img.src to the canvas data url
  image.src = canvas.toDataURL();
  console.log(data.length)
  // append the new img object to the page
  document.body.appendChild(image);
  
  var button = document.getElementById('btn-download');
button.addEventListener('click', function (e) {
    var dataURL = canvas.toDataURL('image/png');
    button.href = dataURL;
});

}





function App() {
  return (
    <div className="App">
        <textarea  rows="20" cols="50" id="textToConvert"></textarea>
        <br></br>
        <Button onClick={convertToASCII} variant="contained" color="primary"> Create image  </Button>
        <a href="#" class="button" id="btn-download" download="my-file-name.png">Download</a>    

            <h1>Upload Image</h1>
 
            <form action="/upload" method="post" enctype="multipart/form-data">
                  <input type="file" accept="image/*" name="photo" ></input>
                       <input type="submit" value="upload"></input> 
                       </form>
           
      </div>
  );
}

export default App;
