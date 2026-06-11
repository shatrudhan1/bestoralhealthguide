import { Link } from "react-router-dom";

export default function SymptomsHubPage() {
  const symptoms = [
    {
      title: "Bad Breath",
      url: "/bad-breath",
      description: "Learn causes, symptoms, and treatments for bad breath."
    },
    {
      title: "Bleeding Gums",
      url: "/bleeding-gums",
      description: "Understand why gums bleed and how to stop it."
    },
    {
      title: "Tooth Sensitivity",
      url: "/tooth-sensitivity",
      description: "Find common triggers and solutions for sensitive teeth."
    },
    {
      title: "Dry Mouth",
      url: "/dry-mouth",
      description: "Explore causes and remedies for dry mouth symptoms."
    }
  ];

  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-4">
        Oral Health Symptoms Guide
      </h1>

      <p className="text-lg text-gray-600 mb-10">
        Explore common oral health symptoms and find expert-backed information.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {symptoms.map((item) => (
          <Link
            key={item.url}
            to={item.url}
            className="border rounded-xl p-6 hover:shadow-lg transition"
          >
            <h2 className="text-2xl font-semibold mb-2">
              {item.title}
            </h2>

            <p className="text-gray-600">
              {item.description}
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
}
