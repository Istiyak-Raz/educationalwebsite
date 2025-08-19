import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <main className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl font-bold text-blue-800">Welcome to UDV Coaching</h1>
        <p className="text-xl mt-4">Your path to success starts here. We offer the best coaching for Medical, BUET, and University admissions.</p>
        <div className="mt-8">
          <Link href="/programs" className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700">Explore Our Programs</Link>
        </div>
      </main>

      {/* Highlighted Programs Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">Highlighted Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-bold text-green-600">Medical Admission</h3>
              <p className="mt-2">Comprehensive preparation for medical college entrance exams.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-bold text-green-600">BUET Admission</h3>
              <p className="mt-2">Specialized coaching for engineering university admission tests.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-bold text-green-600">University Admission</h3>
              <p className="mt-2">Guidance for various public and private university entrance exams.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-bold text-green-600">SSC/HSC Preparation</h3>
              <p className="mt-2">Strong foundation courses for high school students.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
              <p className="italic">"UDV Coaching helped me achieve my dream of getting into medical school. The teachers are amazing!"</p>
              <p className="mt-4 font-bold text-right text-green-600">- Student A</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
              <p className="italic">"The study materials and mock tests were incredibly helpful for my BUET admission preparation."</p>
              <p className="mt-4 font-bold text-right text-green-600">- Student B</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
              <p className="italic">"I am grateful for the guidance and support I received from UDV Coaching. Highly recommended!"</p>
              <p className="mt-4 font-bold text-right text-green-600">- Student C</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
