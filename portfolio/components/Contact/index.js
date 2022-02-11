export default function ContactMe() {
  return (
    <div>
      <form action="https://usebasin.com/f/4dbdd7706b10" method="POST">
        <label>First Name</label>
        <input type="text" name="firstname" placeholder="Your first name.." />

        <label>Last Name</label>
        <input type="text" name="lastname" placeholder="Your last name.." />

        <label>E-mail</label>
        <input type="text" name="email" placeholder="Enter your e-mail" />

        <label>Subject</label>
        <textarea
          name="subject"
          placeholder="Write your message here"
        ></textarea>

        <input name="button" type="submit" value="Submit"></input>
      </form>
    </div>
  );
}
