const Contact = ()=>{
    return(
        <div className="contact m-28">
            <h1>Contact Us on abc@gmail.com</h1>
            <h3>+91 1231242</h3>

            <input className="border border-black rounded-lg m-3" placeholder="name"/>
            <input className="border border-black rounded-lg m-3" placeholder="email"/>
            <button className="border border-black bg-green-400 rounded-lg m-3">Submit</button>
        </div>
    )
};

export default Contact;