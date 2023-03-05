import React from 'react'
import './Contact.css'
import utkc from '.././../images/utkcontact.png'
import Nav from '../../navbar/Nav'

const Contact=()=> {
    return (
        <>
            <Nav />
        <section className="ftco-section" > <div className="container" > <div className="row justify-content-center" > <div className="col-md-6 text-center mb-5" > <h2 className="heading-section" >Contact Form</h2> </div> </div> <div className="row justify-content-center" > <div className="col-md-12" > <div className="wrapper" > <div className="row no-gutters" > <div className="col-lg-6" > <div className="contact-wrap w-100 p-md-5 p-4" > <h3>Contact Me</h3> <p className="mb-4 text-gray-900  " >Simply Mail for any query or just to have a chat</p>
        <div id="form-message-warning" className="mb-4" /> <div id="form-message-success" className="mb-4" > Your message was sent, thank you ! </div> <div className="row mb-4" > <div className="col-md-4" > <div className="dbox w-100 d-flex align-items-start" > <div className="text" > <p><span>LinkedIn:</span>
            <a href="https://www.linkedin.com/in/utkarsh-saxena-5a9034201/" > utkarsh-saxena</a> </p> </div> </div> </div> <div className="col-md-4" > <div className="dbox w-100 d-flex align-items-start" > <div className="text" >
                <p><span>Email:</span> <a href="mailto:info@yoursite.com" >utkarshsaxena2012@gmail.com</a></p> </div> </div> </div> <div className="col-md-4" > <div className="dbox w-100 d-flex align-items-start" > <div className="text" >
                    <p><span>Phone:</span> <a href="tel://8092506511" >+91-7985259022</a></p> </div> </div> </div> </div> <form method="POST" id="contactForm" name="contactForm" className="contactForm" > <div className="row" > <div className="col-md-12" > <div className="form-group" > <input type="text" className="form-control" name="name" id="name" placeholder="Name" /> </div> </div> <div className="col-md-12" > <div className="form-group" > <input type="email" className="form-control" name="email" id="email" placeholder="Email" /> </div> </div> <div className="col-md-12" > <div className="form-group" > <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" /> </div> </div> <div className="col-md-12" > <div className="form-group" > <textarea name="message" className="form-control" id="message" cols={
            30
        }

        rows= {
            4
        }

        placeholder="Create a message here" defaultValue= {
            ""
        }

        /> </div> </div> <div className="col-md-12" > <div className="form-group" > <input type="submit" defaultValue="Send Message" className="btn btn-primary" /> <div className="submitting" /> </div> </div> </div> </form> <div className="w-100 social-media mt-5" > <h3>Follow me here</h3> <p>
            <a href="https://github.com/UtkarshSaxenautk" >Github</a>
            <a href="https://stackoverflow.com/users/19090939/utkarsh-saxena" >StackOverflow</a>
            <a href="/" >Instagram</a>
            <a href="https://www.linkedin.com/in/utkarsh-saxena-5a9034201/" >Linkedin</a>
        </p> </div> </div> </div> <div className="col-lg-6 d-flex align-items-stretch" > <div className="info-wrap w-100 p-5 img" style={
                {
                backgroundImage: `url(${utkc})`
            }
        }

                > </div> </div> </div> </div> </div> </div> </div> </section>
            </>)
}

export default Contact