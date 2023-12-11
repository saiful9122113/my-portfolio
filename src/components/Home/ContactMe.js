import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';


export const ContactMe = () => {
    const formRef = useRef()


    const handleSubmit=(e)=>{
        e.preventDefault();

        // const form=e.target
        // const name=form.name.value;
        // const email=form.email.value
        // const subject=form.subject.value;
        // const message=form.message.value;
        // const send={name,email,subject,message}


        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID,process.env.REACT_APP_TEMPLATE_ID, formRef.current,process.env.REACT_APP_PUBLIC_ID)
        .then(res=>{console.log(res)
        
        }).catch(error=>console.log(error))
       
        
        // console.log(send)
        

    }
  
  
  return (
    
    <section class="mb-4 text-light px-5">
    
        
        <h2 class="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
    
        <p class="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
            a matter of hours to help you.</p>
    
        <div class="row">
    
        
            <div class="col-md-9 mb-md-0 mb-5">
                <form onSubmit={handleSubmit} ref={formRef} id="contact-form" name="contact-form"  >
    
                 
                    <div class="row">
    
                        
                        <div class="col-md-6">
                            <div class="md-form mb-0">
                                <input type="text" id="name" name="from_name" class="form-control"/>
                                <label for="name" class="">Your name</label>
                            </div>
                        </div>
                       
                        <div class="col-md-6">
                            <div class="md-form mb-0">
                                <input type="text" id="email" name="from_email" class="form-control"/>
                                <label for="email" class="">Your email</label>
                            </div>
                        </div>
                      
    
                    </div>
                  
                    <div class="row">
                        <div class="col-md-12">
                            <div class="md-form mb-0">
                                <input type="text" id="subject" name="subject" class="form-control"/>
                                <label for="subject" class="">Subject</label>
                            </div>
                        </div>
                    </div>
                 
                    <div class="row">
    
                       
                        <div class="col-md-12">
    
                            <div class="md-form">
                                <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                                <label for="message">Your message</label>
                            </div>
    
                        </div>
                    </div>
                  
                    <div class="text-center text-md-left">
                    <button type="submit" class="btn btn-primary">Send</button>
                </div>
                </form>
    
               
                <div class="status"></div>
            </div>
           
            <div class="col-md-3 text-center">
                <ul class="list-unstyled mb-0">
                    <li><i class="fas fa-map-marker-alt fa-2x"></i>
                        <p>NETRAKONA ,BANGLADESH</p>
                    </li>
    
                    <li><i class="fas fa-phone mt-4 fa-2x"></i>
                        <p>+880 1984156269</p>
                    </li>
    
                    <li><i class="fas fa-envelope mt-4 fa-2x"></i>
                        <p>muhammad.saiful.islam.25@gmail.com</p>
                    </li>
                </ul>
            </div>
           
    
        </div>
    
    </section>
  



  
  )
}
