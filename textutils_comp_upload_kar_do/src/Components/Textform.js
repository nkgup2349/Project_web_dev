import React ,{useState} from 'react'

export default function Textform(prop) {

    const handleupClick = ()=>{
        // console.log("Upper case was Clicked" + text) ; 
        let newtext = text.toUpperCase();
        setText(newtext); 
        prop.Showalert("Success" , "Converted to uppercase")
    }
    const handlelowClick = ()=>{
        let newtext = text.toLocaleLowerCase();
        setText(newtext); 
        prop.Showalert("Success" , "Converted to Lowercase")
    }
    const handlecopyClick = ()=>{
        prop.Showalert("Success" , "Copied to Clipboard")

        var text1 = document.getElementById("mybox");
        text1.select();
        navigator.clipboard.writeText(text1.value); 
        document.getSelection().removeAllRanges();
        
        //------------------------------------------------
        // navigator.clipboard.writeText(text)
        // .catch(()=>{
        //     alert("Text copied failed");
        // })
        // newcopytext("Copied Text")
    }
    const handleclearClick = ()=>{
        let newtext = '';
        setText(newtext); 
    }
    const handleonchange = (event)=>{
        // console.log("on changed") ; 
        setText(event.target.value);
    }


    // const handlekuchtoClick = ()=>{
    //     const inputWord = document.getElementById('inputfind').value; // Get the input word
    //     if (!inputWord.trim()) return; // Do nothing if input is empty
    //     const regex = new RegExp(`(${inputWord})`, "gi"); // Case-insensitive
    //     const newHtml = text.replace(
    //       regex,
    //       `<span style="background-color: yellow;">$1</span>` // Use captured group for replacement
    //     );
    //     console.log("This is the new highlighted text:", newHtml);
    //     setText(newHtml);
    // }


    // const [text , setText]   = useState('enter your Text') by default some text if you want to give
    const [text , setText]   = useState('')
    const [copytext , newcopytext] = useState('Copy text')

// iska matlab kuch aise hai ki ek fucntion se le rahe ho aur dusre wale fucntion {setText} se usko convert karo 
//text = "this is new updated text" --> this will give error , acc to react you can not update directly 
// setText("this is new updated text") --> this is right way to update
  return (
    <>
    <div className='container' style={{color:prop.mode=='dark'?'white':'black'}}>
        <h1 className='mb-4'>{prop.heading}</h1>
        <div className="mb-3">

{/* if you wan to change the colour of backgroun -> lec-12 {15:44} */}
    <textarea className="form-control mb-3" id="mybox" style={{backgroundColor:prop.mode==='dark'?'black':'white', color:prop.mode==='dark'?'white':'black'}}  onChange={handleonchange} value={text} rows="8"></textarea>
    <button disabled={text.length===0} className="btn btn-primary my-1 mx-3" onClick={handleupClick} >Convert to UpperCase</button>
    <button disabled={text.length===0} className="btn btn-primary my-1 mx-3" onClick={handlelowClick} >Convert to LowerCase</button>
    <button disabled={text.length===0} className="btn btn-primary my-1 mx-3" onClick={handleclearClick} >Clear Text</button>
    <button disabled={text.length===0} className="btn btn-primary my-1 mx-3" onClick={handlecopyClick} >{copytext}</button>
    {/* <button className="btn btn-primary my-3 mx-5" onClick={handlekuchtoClick} ><input placeholder='enter text' id='inputfind'></input>Find</button> */}
        </div>
    </div>
    {/* <div className="container" style={{color:prop.mode==='dark'?'light':'dark'}}> */}
    <div className="container" style={{color:prop.mode==='dark'?'white':'black'}}>
        <h1>Text Summury</h1>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} charactor</p>
        <h3>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length}Minutes to Read</h3>
        <h2>Preveiw</h2>
        <p>{text.length>0?text :"Enter something to preview here"}</p>
    </div>
    </>
  )
}
