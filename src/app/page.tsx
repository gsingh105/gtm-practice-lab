import Link from 'next/link';

export default function Home() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-24 px-6 text-center">
        <h1 className="text-6xl font-extrabold mb-6">GSingh Analytics Lab</h1>
        <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
          A controlled environment to master Google Tag Manager and GA4.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/courses" id="main_cta" className="bg-blue-600 px-8 py-3 rounded-md font-bold hover:bg-blue-500">
            View Courses
          </Link>
          <a href="https://google.com" target="_blank" id="external_doc_link" className="border border-slate-700 px-8 py-3 rounded-md font-bold hover:bg-slate-800">
            Read Docs
          </a>
        </div>
      </section>

      {/* Featured Section for Element Visibility Tracking */}
      <section className="py-40 px-6 max-w-5xl mx-auto text-center">
        <div id="visibility_trigger_box" className="p-20 border-2 border-dashed border-slate-200 rounded-2xl">
          <h2 className="text-3xl font-bold text-slate-800">Visibility Sandbox</h2>
          <p className="text-slate-500 mt-4">This section is deep. Use it to test "Element Visibility" triggers.</p>
        </div>
      </section>

      {/* Footer with Social Links */}
      <footer className="bg-slate-50 py-12 border-t text-center">
        <p className="text-slate-500 mb-4">Practice Outbound Clicks here:</p>
        <div className="flex justify-center gap-6">
          <a href="https://twitter.com" className="social-link text-blue-400">Twitter</a>
          <a href="https://linkedin.com" className="social-link text-blue-700">LinkedIn</a>
          <a href="https://github.com" className="social-link text-slate-900">GitHub</a>
        </div>
      </footer>
    </main>
  );
}