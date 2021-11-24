
characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R",  "S", "T", "U", "V",  "W", "X", "Y", "Z", 
 "0", "1",  "2", "3", "4", "5", "6", "7",  "8", "9", ".", ",", "?", "!", "'", "_", "-", "&", "@", "#", "$", "%", "*", "(", ")", " "];
 



function encryptMessage()
{

    var message=document.getElementById("message_encrypt").value;
    var key=document.getElementById("key").value;

    if (message.length==0 || key.length==0)
    {
        alert("One of inputs is empty");
    }
    else
    {

     message=message.toUpperCase();
     key=key.toUpperCase();
    let length_key=key.length
    let length_message=message.length
    let message_returned="";
    // if the key is shorter, make it equal 
    if (length_key < length_message)
    {
        for (let i=length_key; i<length_message; i++)
        {
            key=key.concat(key[i-length_key])
        }

    }

    for (let j=0;j<length_message;j++)
    {
        let key_index0=characters.indexOf(message[j])
        let key_index1=characters.indexOf(key[j]);
        message_returned=message_returned.concat(characters[(key_index0+key_index1)%51]);
    }
    
    //console.log("Message to encrypt: " + message);
    //console.log("Key used to encrypt: " + key);
    document.getElementById("result_encrypt").value=message_returned;
}
}


function decryptMessage()
{
    var message2=document.getElementById("message_decrypt").value;
    var key2=document.getElementById("key2").value;
    if (message2.length==0 || key2.length==0)
    {
        alert("Some inputs are empty!");
    }
    else
    {

    
    message2=message2.toUpperCase();
    key2=key2.toUpperCase();
    let length_key2=key2.length
    let length_message2=message2.length
    let message_returned2="";
    if (length_key2 < length_message2) // make strings equal
    {
        for (let i=length_key2; i<length_message2; i++)
        {
            key2=key2.concat(key2[i-length_key2])
        }

    }

    for (let z=0;z<length_message2;z++)
    {
        let key_index2=characters.indexOf(message2[z]);
        let key_index3=characters.indexOf(key2[z]);
        message_returned2=message_returned2.concat(characters[((key_index2+51)-key_index3)%51]);
    }

    document.getElementById("result_decrypt").value=message_returned2;
    }
}

function ClearAll()
{
    document.getElementById("result_decrypt").value="";
    document.getElementById("result_encrypt").value="";
    document.getElementById("message_decrypt").value="";
    document.getElementById("message_encrypt").value="";
    document.getElementById("key").value="";
    document.getElementById("key2").value="";
}
/* Tests */ 
/*
encryptMessage(',.23abcde123','aabs).');
console.log("-----------------------")
decryptMessage(',.3%),CDF#1O','aabs).');
*/
