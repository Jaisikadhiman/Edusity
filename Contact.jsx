import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import arrow from '../../assets/white-arrow.png'
const Contact = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "cbf38532-6e27-439a-b553-10ffa239e01d");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className='contact'>
      <div className="col">
        <h2>Send us a message<img src={msg_icon} alt=''/></h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptatem, obcaecati quam velit similique ea sapiente neque voluptas libero, quis deleniti eos, quas ex? Aperiam totam eaque quasi cum sapiente.</p>
        <ul>
            <li><img src={mail_icon}alt=""/>contactus@gmail.com</li>
            <li><img src={phone_icon}alt=""/>+123-475-7412</li>
            <li><img src={location_icon}alt=""/>77 xyx Ave. cambridge</li>
        </ul>
      </div>
      <div className="col">
        <form onSubmit={onSubmit}>
            <label>Name</label>
            <input type='text' name='name' placeholder='Enter Name' required/>
            <label>Phone Number</label>
            <input type='tel' name='phone' placeholder='Enter Phone Number' required/>
            <label>Write Your Message</label>
            <textarea name='message' placeholder='Enter Your Message' rows="6" required></textarea>
            <button type='submit' className='btn' >Submit Now<img src={arrow} alt=''/></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
