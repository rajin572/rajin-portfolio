const ContactGridCrad = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center my-20">
      <div className="group flex justify-center items-center flex-col gap-3 text-center border border-secondary hover:bg-secondary hover:text-primary p-5 rounded duration-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-image duration-500 text-secondary group-hover:text-primary"
        >
          <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
          <path d="M12 18h.01" />
        </svg>
        <h2 className="text-xl font-bold">Phone</h2>
        <p className="text-sm">
          Feel free to reach out to me directly if you have any questions, I am
          always open to new opportunities and collaborations!
        </p>
        <p className="text-secondary group-hover:text-primary font-bold duration-500">
          +8801647742754
        </p>
      </div>
      <div className="group flex justify-center items-center flex-col gap-3 text-center border border-secondary hover:bg-secondary hover:text-primary p-5 rounded duration-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-image duration-500  text-secondary group-hover:text-primary"
        >
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
        <h2 className="text-xl font-bold">Location</h2>
        <p className="text-sm">
          I am available for remote work and local opportunities. Whether you
          are in the same area or across the globe, do not hesitate to get in
          touch!
        </p>
        <p className="text-secondary group-hover:text-primary font-bold duration-500">
          Dhaka, Bangladesh
        </p>
      </div>
      <div className="group flex justify-center items-center flex-col gap-3 text-center border border-secondary hover:bg-secondary hover:text-primary p-5 rounded duration-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-image duration-500  text-secondary group-hover:text-primary"
        >
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
        <h2 className="text-xl font-bold">Gmail</h2>
        <p className="text-sm">
          Feel free to contact me via email for any inquiries, collaborations,
          or just to say hello. I will get back to you as soon as possible!
        </p>
        <p className="text-secondary group-hover:text-primary font-bold duration-500">
          din.islam.rajin572@gmail.com
        </p>
      </div>
    </div>
  );
};

export default ContactGridCrad;
