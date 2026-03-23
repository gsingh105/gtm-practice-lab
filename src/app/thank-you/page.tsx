import Link from 'next/link';

export default function ThankYou() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-white text-center">
      <h1 className="text-5xl font-black text-green-500 mb-4">Thank You!</h1>
      <p className="text-xl text-slate-600">Your registration was successful.</p>
      <div className="mt-8 p-4 bg-slate-50 border rounded text-sm text-slate-400">
        Order ID: <span id="transaction_id">ORD-99283-X</span>
      </div>
      <Link href="/" className="mt-10 text-blue-600 hover:underline">Return to Home</Link>
    </div>
  );
}