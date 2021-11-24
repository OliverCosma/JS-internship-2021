import React, { Fragment, useState } from 'react';
import Message from './Message';
import Progress from './Progress';
import axios from 'axios';
import Button from '@material-ui/core/Button';



const FileUpload = () => {
  const [file, setFile] = useState('');
  const [filename, setFilename] = useState('Choose File');
  const [uploadedFile, setUploadedFile] = useState({});
  const [message, setMessage] = useState('');
  const [uploadPercentage, setUploadPercentage] = useState(0);

  const onChange = e => {
    
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
    
  };

  const onSubmit = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await axios.post('/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        onUploadProgress: progressEvent => {
          setUploadPercentage(
            parseInt(
              Math.round((progressEvent.loaded * 100) / progressEvent.total)
            )
          );
        }
      });

      // Clear percentage
      setTimeout(() => setUploadPercentage(0), 10000);

      const { fileName, filePath } = res.data;
     
      setUploadedFile({ fileName, filePath });
      

      setMessage('File Uploaded');
    } catch (err) {
      if (err.response.status === 500) {
        setMessage('There was a problem with the server');
      } else {
        setMessage(err.response.data.msg);
      }
      setUploadPercentage(0)
    }
      

  };

  function setup()
  {
    const img = document.getElementById('myIMG');
    const canvas2 = document.createElement('canvas');
    
    canvas2.width = img.width;
    canvas2.height = img.height;
    const context2 = canvas2.getContext('2d');
    context2.drawImage(img,0,0);
    const myData = context2.getImageData(0, 0, canvas2.width, canvas2.height);
    const data = myData.data;
    const ASCIIArrayDecode=[];
    console.log("data length:" +img.width+"height"+img.height)
    for (let i=0; i<img.width*img.width;i++)
      {
       ASCIIArrayDecode.push(String.fromCharCode(data[i*4+0])) 
       ASCIIArrayDecode.push(String.fromCharCode(data[i*4+1]))
       ASCIIArrayDecode.push(String.fromCharCode(data[i*4+2])) 
       ASCIIArrayDecode.push(String.fromCharCode(data[i*4+3])) 
      }
      console.log(ASCIIArrayDecode);

      for (let i= 3*ASCIIArrayDecode.length-1; i>=0; i--)
     {
     if ((i-1)%3===0)
       {
         [ASCIIArrayDecode[((i-1)/3)], ASCIIArrayDecode[i%ASCIIArrayDecode.length]] = [ASCIIArrayDecode[i%ASCIIArrayDecode.length], ASCIIArrayDecode[((i-1)/3)]]
       }
     }
  console.log(ASCIIArrayDecode);
  console.log(ASCIIArrayDecode.join(""))

  }        


  return (
    <Fragment>
      {message ? <Message msg={message} /> : null}
      <form onSubmit={onSubmit}>
        <div className='custom-file mb-4'>
          <input
            type='file'
            className='custom-file-input'
            id='customFile'
            onChange={onChange}
          />
          <label className='custom-file-label' htmlFor='customFile'>
            {filename}
          </label>
        </div>
        <Progress percentage={uploadPercentage} />
        <input
          type='submit'
          value='Upload'
          className='btn btn-primary btn-block mt-4'
        />
      </form>
      {uploadedFile ? (
       <div>
          
            <h3 className='text-center'>{uploadedFile.fileName}</h3>
            <img id="myIMG" src={uploadedFile.filePath} alt='' />
            <Button variant="contained" color="primary" onClick={setup}>Convert To Text</Button>
            <canvas id="canvasToDraw"></canvas>
        </div>
      ) : null}
    </Fragment>
  );
};

export default FileUpload;
