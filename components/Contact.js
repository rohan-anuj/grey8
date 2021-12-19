import React, { useRef } from 'react';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import emailjs from "emailjs-com"
const Contact = () => {
    
    const form = useRef();
console.log(form.current)
  const submitHandled=(e)=>{
      e.preventDefault()
      console.log(e.target)
      emailjs.sendForm('service_epmevej', 'template_383qkyl',   form.current , 
      'user_8r4J7Y3IcOAmYJDbQMB4x')
      .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });


  }
    return (
        <div className="w-max flex flex-col  border-2 border-black h-max p-5 justify-around ">
         <form className='flex flex-col justify-around items-center p-5' ref={form} onSubmit={submitHandled}>
             
             
         <TextField id="outlined-basic"  className="m-4 " name="name" label="name" variant="outlined" />
         <TextField id="outlined-basic"  className="m-4 " name="email"
          label="email" variant="outlined" />
         <TextField id="outlined-basic"  className="m-4 " name="phone" label="phone" variant="outlined" />
         <TextField id="outlined-basic" className="m-4 " name="message" label="message" multiline  rows={4} variant="outlined" />
         <Button type="submit" value="Send">Submit</Button>
     
             
        </form>        
        </div>
    )
}

export default Contact
