# Send-Email-API
This an API to send emails. I made this to use in my personal page, as the email API that the form submission is connected to.

### The "form" HTML tag structure:

The form tag structure utilized in my site is like this:

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

You can also utilize a software as Insomnia or Postman to utilize the POST route with a JSON request like this:

```
{
  "name": "name",
  "email": "email@emailDomain.com",
  "message": "message"
}
```