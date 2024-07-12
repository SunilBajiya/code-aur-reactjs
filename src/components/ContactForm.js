import { isFunctionDeclaration } from "typescript";
import "./ContactFormStyles.css";
function ContactForm() {
  return (
    <div className="from-container" style={{ background: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbE-mAf8VRw7D8BEAlbbctXCfdpWI97qWk6P3G4REB8UD4DGQwOiTO5UOp6VTgluU1k8s&usqp=CAU")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
  <h1 style={{ marginLeft: '40%' }}>Send a message to us!</h1>
      <form autoComplete="on">
      <input type="text" name="name" placeholder="Name" autoComplete="name" required="required" />
      <input type="email" name="email" placeholder="Email" autoComplete="email" required="required" />
      <input type="text" name="subject" placeholder="Subject" autoComplete="subject" required="required" />
      <textarea name="message" placeholder="Type your Message..."   required="required"></textarea>
      <button type="submit">Send Message</button>
    </form>

      
    </div>
      );
} 


export default ContactForm;
