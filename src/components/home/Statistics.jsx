function Statistics() {
    const stats = [
      {
        number: "1000+",
        title: "Volunteers",
      },
      {
        number: "500+",
        title: "Emergency Requests",
      },
      {
        number: "50+",
        title: "Cities Covered",
      },
      {
        number: "24/7",
        title: "Support",
      },
    ];
  
    return (
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <h2 className="text-5xl font-bold">
                  {stat.number}
                </h2>
  
                <p className="mt-3 text-lg">
                  {stat.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  export default Statistics;