function HowItWorks() {
    const steps = [
      {
        number: "1",
        title: "Request Help",
        description: "Submit an emergency request with your location and the type of help you need.",
      },
      {
        number: "2",
        title: "Volunteers Get Notified",
        description: "Nearby volunteers receive your request instantly.",
      },
      {
        number: "3",
        title: "Help is Delivered",
        description: "A volunteer accepts your request and reaches your location.",
      },
    ];
  
    return (
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            How It Works
          </h2>
  
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div
                key={step.number}
                className="text-center p-8 rounded-xl shadow-lg bg-white"
              >
                <div className="w-14 h-14 mx-auto rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold">
                  {step.number}
                </div>
  
                <h3 className="text-2xl font-semibold mt-6">
                  {step.title}
                </h3>
  
                <p className="text-gray-600 mt-4">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  export default HowItWorks;