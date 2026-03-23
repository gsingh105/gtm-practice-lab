export default function Courses() {
  const courses = [
    { id: 'gtm_01', name: 'GTM Fundamentals', price: '$49', color: 'bg-blue-100' },
    { id: 'ga4_02', name: 'GA4 Deep Dive', price: '$79', color: 'bg-purple-100' },
    { id: 'sql_03', name: 'BigQuery for Marketers', price: '$99', color: 'bg-orange-100' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-20 px-6">
      <h1 className="text-4xl font-bold text-center mb-12">Available Courses</h1>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {courses.map((course) => (
          <div key={course.id} className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 flex flex-col">
            <div className={`w-12 h-12 rounded-lg ${course.color} mb-6`}></div>
            <h2 className="text-xl font-bold mb-2">{course.name}</h2>
            <p className="text-2xl font-black text-slate-900 mb-6">{course.price}</p>
            <button 
              className="enroll-button mt-auto bg-slate-900 text-white py-2 rounded hover:bg-slate-800"
              data-course-id={course.id}
              data-course-name={course.name}
            >
              Enroll Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}