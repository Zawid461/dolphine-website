function Testimonials() {

  const testimonials = [
    {
      name: "Rahul Kumar",
      text: "Excellent project guidance and professional support."
    },
    {
      name: "Arun Prakash",
      text: "Best automation solutions with futuristic implementation."
    },
    {
      name: "Nivetha",
      text: "Very innovative and client-friendly service experience."
    }
  ];

  return (
    <section className="py-24 px-6">

      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-cyan-400 text-center mb-16">

          Client Testimonials

        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {testimonials.map((item, index) => (

            <div
              key={index}
              className="bg-cyan-500/5 border border-cyan-400/20 rounded-2xl p-8 hover:shadow-[0_0_30px_#00b4ff33] transition"
            >

              <p className="text-gray-300 leading-8 mb-8">

                "{item.text}"

              </p>

              <h3 className="text-cyan-400 font-bold text-xl">

                {item.name}

              </h3>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Testimonials;