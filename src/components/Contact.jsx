import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="px-5 py-12 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-2xl border border-violet-100 bg-violet-50 p-8 sm:p-12">

        <div className="grid gap-10 lg:grid-cols-2">

          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-violet-500">
              Let's Work Together
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Have a Project in Mind?
            </h2>

            <p className="mt-4 max-w-lg leading-7 text-slate-500">
              I'm available for freelance projects, internships
              and exciting collaborations. Let's build something
              amazing together.
            </p>

            <a
              href="mailto:your@email.com"
              className="mt-7 inline-flex items-center gap-2 rounded-md bg-violet-500 px-6 py-3 text-sm font-semibold text-white"
            >
              Let's Talk
              <ArrowUpRight size={17} />
            </a>
          </div>

          <div className="space-y-5">
            <div className="flex gap-4">
              <Mail className="text-violet-500" />
              <div>
                <p className="text-xs text-slate-500">Email</p>
                <p className="font-medium">dev.satish.kr@gmail.com</p>
              </div>
            </div>

            <div className="flex gap-4">
              <Phone className="text-violet-500" />
              <div>
                <p className="text-xs text-slate-500">Phone</p>
                <p className="font-medium">+91 9065952750</p>
              </div>
            </div>

            <div className="flex gap-4">
              <MapPin className="text-violet-500" />
              <div>
                <p className="text-xs text-slate-500">Location</p>
                <p className="font-medium">India</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}