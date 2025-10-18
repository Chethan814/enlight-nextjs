const ContactForm = () => {
  return (
    <div className="blogsidebar__content__wraper__2 mt-4" data-aos="fade-up">
      <h4 className="sidebar__title">Get in Touch</h4>
      <form className="get__touch__input">
        <input
          type="text"
          placeholder="Enter name*"
          className="form-control mb-3"
          required
        />
        <input
          type="email"
          placeholder="Enter your mail*"
          className="form-control mb-3"
          required
        />
        <textarea
          placeholder="Message*"
          className="form-control mb-3"
          rows={4}
          required
        ></textarea>
        <button type="submit" className="default__button w-100">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
