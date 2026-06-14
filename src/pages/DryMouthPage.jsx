import { Link } from "react-router-dom";

export default function DryMouthPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-teal-900 to-slate-950 text-white">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <nav className="text-sm text-teal-300 mb-6">
            <Link to="/" className="hover:text-white">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link to="/symptoms" className="hover:text-white">
              Symptoms
            </Link>
            <span className="mx-2">/</span>
            Dry Mouth
          </nav>

          <span className="inline-block px-4 py-2 rounded-full bg-teal-500/20 text-teal-300 text-sm font-medium">
            Oral Health Symptom Guide
          </span>

          <h1 className="mt-6 text-5xl font-extrabold leading-tight">
            Dry Mouth (Xerostomia)
          </h1>

          <p className="mt-6 max-w-3xl text-lg text-slate-300">
            Dry mouth occurs when your salivary glands do not produce enough
            saliva. It can increase the risk of cavities, gum disease, bad
            breath, and oral infections if left untreated.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <div className="bg-white/10 px-4 py-3 rounded-xl">
              <p className="text-xs uppercase text-teal-300">Severity</p>
              <p className="font-semibold">Moderate</p>
            </div>

            <div className="bg-white/10 px-4 py-3 rounded-xl">
              <p className="text-xs uppercase text-teal-300">Category</p>
              <p className="font-semibold">Breath & Saliva</p>
            </div>

            <div className="bg-white/10 px-4 py-3 rounded-xl">
              <p className="text-xs uppercase text-teal-300">Medical Review</p>
              <p className="font-semibold">Dental Advisory Team</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid lg:grid-cols-3 gap-10">

        {/* Content */}
        <div className="lg:col-span-2 space-y-12">

          {/* Overview */}
          <section className="bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-3xl font-bold mb-4">
              What Is Dry Mouth?
            </h2>

            <p className="text-slate-600 leading-8">
              Dry mouth, also called xerostomia, occurs when there is reduced
              saliva production. Saliva plays a vital role in protecting teeth,
              washing away food particles, neutralizing acids, and maintaining
              overall oral health.
            </p>
          </section>

          {/* Symptoms */}
          <section className="bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-3xl font-bold mb-6">
              Common Symptoms
            </h2>

            <ul className="grid md:grid-cols-2 gap-4">
              {[
                "Sticky or dry feeling in the mouth",
                "Difficulty chewing or swallowing",
                "Bad breath",
                "Dry throat",
                "Cracked lips",
                "Burning sensation",
                "Frequent thirst",
                "Changes in taste"
              ].map((item) => (
                <li
                  key={item}
                  className="p-4 rounded-xl bg-slate-50 border"
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* Causes */}
          <section className="bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-3xl font-bold mb-6">
              Common Causes
            </h2>

            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-xl">
                  Medications
                </h3>
                <p className="text-slate-600">
                  Many prescription drugs can reduce saliva production.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-xl">
                  Dehydration
                </h3>
                <p className="text-slate-600">
                  Not drinking enough fluids may contribute to oral dryness.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-xl">
                  Mouth Breathing
                </h3>
                <p className="text-slate-600">
                  Sleeping with your mouth open can worsen symptoms.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-xl">
                  Medical Conditions
                </h3>
                <p className="text-slate-600">
                  Diabetes, Sjögren’s syndrome, and autoimmune disorders may
                  cause chronic dry mouth.
                </p>
              </div>
            </div>
          </section>

          {/* Treatment */}
          <section className="bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-3xl font-bold mb-6">
              Treatment Options
            </h2>

            <ul className="space-y-4 text-slate-600">
              <li>✔ Drink water regularly throughout the day</li>
              <li>✔ Use alcohol-free mouthwash</li>
              <li>✔ Chew sugar-free gum</li>
              <li>✔ Avoid tobacco products</li>
              <li>✔ Use saliva substitutes if recommended</li>
              <li>✔ Discuss medication alternatives with your doctor</li>
            </ul>
          </section>

          {/* When To See Dentist */}
          <section className="bg-red-50 border border-red-100 rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-4">
              When To See A Dentist
            </h2>

            <p className="text-slate-700 leading-8">
              Seek professional dental care if dry mouth persists for several
              weeks, causes difficulty swallowing, affects sleep, or is
              accompanied by frequent cavities or oral infections.
            </p>
          </section>

          {/* FAQ */}
          <section className="bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-3xl font-bold mb-6">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold">
                  Is dry mouth serious?
                </h3>
                <p className="text-slate-600 mt-2">
                  It can increase the risk of tooth decay and gum disease if
                  untreated.
                </p>
              </div>

              <div>
                <h3 className="font-semibold">
                  Can dehydration cause dry mouth?
                </h3>
                <p className="text-slate-600 mt-2">
                  Yes. Dehydration is one of the most common causes.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <aside className="space-y-6">

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="font-bold text-lg mb-4">
              Related Symptoms
            </h3>

            <div className="space-y-3">
              <Link
                to="/bad-breath"
                className="block hover:text-teal-600"
              >
                Bad Breath
              </Link>

              <Link
                to="/bleeding-gums"
                className="block hover:text-teal-600"
              >
                Bleeding Gums
              </Link>

              <Link
                to="/tooth-sensitivity"
                className="block hover:text-teal-600"
              >
                Tooth Sensitivity
              </Link>
            </div>
          </div>

          <div className="bg-gradient-to-br from-teal-600 to-teal-700 text-white rounded-2xl p-6">
            <h3 className="font-bold text-xl">
              Explore More Symptoms
            </h3>

            <p className="mt-3 text-teal-100">
              Browse our complete oral health symptom library.
            </p>

            <Link
              to="/symptoms"
              className="inline-block mt-5 bg-white text-teal-700 px-4 py-2 rounded-lg font-semibold"
            >
              View Symptoms Hub
            </Link>
          </div>
        </aside>
      </div>
    </main>
  );
}
