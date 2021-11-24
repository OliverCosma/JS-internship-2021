import React from 'react';
import FileUpload from './components/FileUpload';
import './App.css';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

function convertToASCII() {
  
  const ASCIIArray = [];
  const TextToCode=document.getElementById("textToConvert").value.split('');
  
  while (Number.isInteger(Math.sqrt(TextToCode.length/4))===false)
  {
    TextToCode.push(" ");
  }

  


   // do shifting stuff
  for (let i=0; i<TextToCode.length;i++)
  {
      /*var temp=TextToCode[i];
      TextToCode[i]=TextToCode[((i*3+1)%TextToCode.length)];
      TextToCode[((i*3+1)%TextToCode.length)]=temp;*/
      [TextToCode[i],TextToCode[((i*3+1)%TextToCode.length)]]=[TextToCode[((i*3+1)%TextToCode.length)],TextToCode[i]]
  }
  
  
  //reverse shifting
  /*
  console.log(TextToCode);
  
  for (let i= 3*TextToCode.length-1; i>=0; i--)
  {
     if ((i-1)%3===0)
     {
      [TextToCode[((i-1)/3)], TextToCode[i%TextToCode.length]] = [TextToCode[i%TextToCode.length], TextToCode[((i-1)/3)]]
     }
  }
  console.log(TextToCode);
  
  */
  
  
  var text=TextToCode.join(""); // make string so that we may use charCodeAt
  for (let i=0;i<text.length;i++)
  {
    ASCIIArray.push(text.charCodeAt(i)) //put all ascii into array 
  }
  //console.log(ASCIIArray);
  
  var canvas=document.createElement('canvas');
 
 
  var dimensionImage=(Math.sqrt(ASCIIArray.length/4)); //create square image with 4 values/pixel
 
  
  
  // create an offscreen canvas
    var ctx = canvas.getContext("2d");
    // size the canvas to your desired image
    canvas.height=dimensionImage;
    canvas.width=dimensionImage;
    
   
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
    console.log("ASCII in the first one:"+ data);
    console.log(data.length);
  
    // put the modified pixels on the canvas
    ctx.putImageData(imgData, 0, 0);
  
    // create a new img object
    var image = new Image();
  
    // set the img.src to the canvas data url
    image.src = canvas.toDataURL();
    
    image.width=canvas.width;
    image.height=canvas.height;
    // append the new img object to the page
    document.body.appendChild(image);
  

    
    var button = document.getElementById('btn-download');
    button.addEventListener('click', function (e) {
      var dataURL = canvas.toDataURL('image/png');
      button.href = dataURL;

  });
    /* testing stuff */
 /*
    
    const ASCIIArrayDecode=[];
     
    for (let i=0; i<data.length;i++)
      {
       ASCIIArrayDecode.push(String.fromCharCode(data[i])) 
      }
      console.log(ASCIIArrayDecode);

      for (let i= 3*ASCIIArrayDecode.length-1; i>=0; i--)
     {
     if ((i-1)%3===0)
       {
         [ASCIIArrayDecode[((i-1)/3)], ASCIIArrayDecode[i%ASCIIArrayDecode.length]] = [ASCIIArrayDecode[i%ASCIIArrayDecode.length], ASCIIArrayDecode[((i-1)/3)]]
       }
     }
  console.log("DECODAT"+ ASCIIArrayDecode.join(""))
 
  */
  }
  


const App = () => (
  <div>
          <Grid container spacing={0}>
    

    <Grid item xs={12}>
    <h4 className='display-4 text-center mb-4'>
      <i className='fab fa-react' /> React File Encoding & Decoding 
    </h4>
    </Grid>
    <Grid item xs={6}>

  <textarea  rows="5" cols="20" id="textToConvert"></textarea>
        <br></br>
        <Button onClick={convertToASCII} variant="contained" color="primary"> Create image  </Button>
        <Button variant="contained" color="secondary"><a href="" class="button" id="btn-download" download="my-file-name.png">Download</a> </Button> 
    </Grid>
        <Grid item xs={6}>
           <FileUpload />
         </Grid>
         </Grid>
    
  </div>
);

export default App;
