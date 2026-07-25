function Features() {
  const features = [
    {
      title: "Request Help",
      icon: "🚨",
      description:
        "Request food, shelter, transportation, or emergency assistance instantly.",
    },
    {
      title: "Volunteer",
      icon: "🤝",
      description:
        "Join as a volunteer and support people during emergencies.",
    },
    {
      title: "Live Map",
      icon: "📍",
      description:
        "Track emergency requests and nearby volunteers in real time.",
    },
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition duration-300"
            >
              <div className="text-5xl mb-5">{feature.icon}</div>

              <h3 className="text-2xl font-semibold mb-4">
                {feature.title}
              </h3>

              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;