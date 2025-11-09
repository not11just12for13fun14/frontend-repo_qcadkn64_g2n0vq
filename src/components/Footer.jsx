export default function Footer() {
  return (
    <footer id="about" className="py-10 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-slate-600 text-sm">© {new Date().getFullYear()} HireFlow. All rights reserved.</p>
        <div className="text-sm text-slate-600">
          Built with care for teams who value great design and better hiring.
        </div>
      </div>
    </footer>
  );
}
