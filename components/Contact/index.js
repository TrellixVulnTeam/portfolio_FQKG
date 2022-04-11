export default function ContactForm() {
  return (
    <div className="text-2xl font-mono w-full'">
      <form
        className="border-4 bg-gradient-to-r from-purple-200"
        action="https://usebasin.com/f/4dbdd7706b10"
        method="POST"
      >
        <label>First Name</label>
        <input
          className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          type="text"
          name="firstname"
          placeholder="  Your first name"
        />

        <label>Last Name</label>
        <input
          className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          type="text"
          name="lastname"
          placeholder="  Your last name"
        />

        <label>E-mail</label>
        <input
          className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          type="text"
          name="email"
          placeholder="  Enter your e-mail"
        />

        <label>Subject</label>
        <textarea
          className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          name="subject"
          placeholder="  Write your message here"
        ></textarea>

        <input
          className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        bg-fuchsia-300"
          name="button"
          type="submit"
          value="Submit"
        ></input>
      </form>
    </div>
  );
}
