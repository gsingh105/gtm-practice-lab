"use client";
import { useRouter } from 'next/navigation';

export default function Contact() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // We will add dataLayer.push here during practice
    router.push('/thank-you');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 p-6">
      <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Get Free Resources</h1>
        <form id="lead_form" onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Email Address</label>
            <input name="email" type="email" required className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-500" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Job Role</label>
            <select name="role" className="w-full border p-2 rounded">
              <option value="analyst">Data Analyst</option>
              <option value="marketing">Marketing Manager</option>
              <option value="dev">Developer</option>
            </select>
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold">
            Download Guide
          </button>
        </form>
      </div>
    </div>
  );
}