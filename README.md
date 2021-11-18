# Send-Email-API
This an API to send emails. I made this to use in my personal page, as the email API that the form submission is connected to.

### The "form" HTML tag structure

The form tag structure utilized in my site has the following structure

```
<form id="contact-form" action="https://email-free-api.herokuapp.com/send-email" method="POST" target="#">
  <label>Name</label>
  <input type="text" id="name" name="name" placeholder="Your Name"/>

  <label>Email</label>
  <input type="email" id="email" name="email" placeholder="Your Email"/>

  <label>Message</label>
  <textarea name="message" id="message" placeholder="Type a Message"></textarea>

  <div className="send-message">
    <button type="submit">Send Message</button>
  </div>
</form>
```

The "name" and "email" are utilized to identify and contact the sender back.

You can also utilize a software as Insomnia or Postman to send data in the POST route with a JSON request like this:

```
{
  "name": "name",
  "email": "senderEmail@emailDomain.com",
  "addressee": "addresseeEmail@emailDomain.com",
  "message": "message"
}
```

- If you want to use this project with your own email server, take a look at the `.env.example` with the structure of the .env variables to set in the application. The variables are API_HOST (to use gmail server, the default is "smtp.gmail.com"), API_PORT (default is 587), API_USER (user email) and API_PASSWORD (user password).