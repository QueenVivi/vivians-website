const About = () => {
  return (
    <div className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            A frontend dev specialized in design and marketing
          </p>
          <p className="py-2 text-gray-600">
            I was once a Chinese teacher, a bathbomb maker, a wellness
            practitioner. The passion of creating my own business has led me on
            the path of learning UX design, digital marketing, and software
            engineering.
          </p>
          <p className="py-2 text-gray-600">
            Fascinated with how intricate programming can be I was quickly drawn
            to learn more. I started with javascript and was even more enthused
            with learning even cooler library and framework, such as React,
            Next.js and more.
          </p>
          <a className="py-2 text-gray-600 underline cursor-pointer" href="#">
            Check out my projects
          </a>
        </div>
        <div className="col-span-1 w-full h-auto m-auto shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <img
            className="rounded-xl"
            src="https://images.unsplash.com/photo-1491252807115-39d1d4a93d7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
            alt="laptop and sticky notes"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
