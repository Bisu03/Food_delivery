import React from "react";
import "./contact.css";

class Contact extends React.Component {
    render() {
      return (
        <div className="contact us">
            <div class="container-form">
                <div class="content-form">
                    <div class="left-side-form">
                        <div class="address details">
                            <i class="fas fa-map-marker-alt"></i>
                            <div class="topic">Address</div>
                            <div class="text-one">Foodies , Sector V</div>
                            <div class="text-two">Kolkata- 07</div>
                        </div>
                        <div class="phone details">
                            <i class="fas fa-phone-alt"></i>
                            <div class="topic">Phone</div>
                            <div class="text-one">+91 811 690 2713</div>
                            <div class="text-two">03224 264 634</div>
                        </div>
                        <div class="email details">
                            <i class="fas fa-envelope"></i>
                            <div class="topic">Email</div>
                            <div class="text-one">foodieshunger@gmail.com</div>
                            <div class="text-two">info.foodies@gmail.com</div>
                        </div>
                    </div>
                    <div class="right-side-form">
                        <div class="topic-text">Send us a message</div>
                        <p>Thank you for taking the time to fill in our feedback form. By providing us your feedback, you are helping us understand what we do well and what improvements we need.</p>
                        <form action="#">
                            <div class="input-box">
                                <input type="text" placeholder="Enter your name" />
                            </div>
                            <div class="input-box">
                                <input type="text" placeholder="Enter your email" />
                            </div>
                            <div class="input-box message-box">
                                <textarea name="Write a messege" id="" cols="30" rows="10" placeholder="Write a Messege"></textarea>
                            </div>
                            <div class="button">
                                <input type="button" value="Send Messege" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>


);
}
}

export default Contact;
