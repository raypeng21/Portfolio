import { useState } from "react";
import "./contact.scss";
import emailjs from "emailjs-com";

//npm install emails-com --save


export default function Contact() {

    const [message, setMessage] = useState(false)

    const sendEmail = (e)=>{
        e.preventDefault();
        setMessage(true)


        emailjs.sendForm('gmail', 'protfolio_temp', e.target, 'user_XOOjPjh06BUfF4OqOMyw0')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
    }

    return (
        <div className = "contact" id = "contact">

            <div className="right">
                <h2>Contact Me!</h2>
                <form onSubmit={sendEmail}>
                    <input type="text" placeholder="Your Name" name="name" />
                    <input type="email" placeholder="Email" name="email"/>
                    <input type="subject" placeholder="Subject" name="subject"/>

                    <textarea placeholder = "Your Message" name="message"></textarea>
                    <button type="submit">Send</button>
                    {message  && <span>Thanks， I'will reply ASAP.</span>}
                </form>
            </div>



        </div>
    )
}
