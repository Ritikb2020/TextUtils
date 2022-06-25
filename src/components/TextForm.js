import React,{useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!","success");
    }
    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!","success");
    }
    const handleClearClick = ()=>{
        let newText = '';
        setText(newText);
        props.showAlert("Text cleared!","success");
    }
    const handleOnChange = (event)=>{
        // console.log("On change");
        setText(event.target.value);
    }
    const [text, setText] = useState('Enter text here');
    // text="new text"; // wrong way to change the state
    // setText("new Text"); // correct way to change state
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words, {text.length} characters</p>
        <p>{0.008* text.split(" ").length} Minutes Reading</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
