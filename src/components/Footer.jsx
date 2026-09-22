export default function Footer() {
  return (
    <footer className="border-t border-slate-100 px-5 py-10 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 md:flex-row">

        <div>
          <div className="text-3xl font-black text-violet-500">
            SK
          </div>

          <p className="mt-3 max-w-sm text-sm leading-6 text-slate-500">
            Building modern digital experiences that inspire,
            engage and deliver results.
          </p>
        </div>

        <div className="flex gap-5 text-sm text-slate-500">
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-7xl border-t border-slate-100 pt-6 text-xs text-slate-400">
        © 2026 Satish Kumar. All rights reserved.
      </div>
    </footer>
  );
}