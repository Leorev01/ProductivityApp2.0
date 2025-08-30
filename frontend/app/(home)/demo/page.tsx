import Navbar from "@/components/Navbars/Navbar";

export default function DemoPage() {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">App Demo</h1>
        <p className="text-gray-600 mb-8">
        Watch a quick video walkthrough of the productivity app and see how it helps you build habits, track progress, and stay motivated!
        </p>
        <div className="bg-gray-100 rounded-xl flex items-center justify-center h-72 border border-gray-200">
            {/* Video demo will be embedded here */}
            <span className="text-gray-400 text-lg">[Demo video placeholder]</span>
        </div>
      </div>
    </>
  );
}