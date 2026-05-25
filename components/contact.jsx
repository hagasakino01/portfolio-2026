import dynamic from "next/dynamic";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

import SectionShell from "@/components/section-shell";
import { slideIn } from "@/lib/motion";

const EarthCanvas = dynamic(() => import("@/components/canvas/earth-canvas"), {
  ssr: false,
  loading: () => <div className="h-full w-full rounded-[2rem] bg-white/5" />,
});

const initialForm = {
  name: "",
  email: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [notice, setNotice] = useState({ type: "", message: "" });

  const emailConfig = {
    serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
    templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
    publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!emailConfig.serviceId || !emailConfig.templateId || !emailConfig.publicKey) {
      setNotice({
        type: "error",
        message: "EmailJS env vars are missing. Check .env.local before sending.",
      });
      return;
    }

    setLoading(true);
    setNotice({ type: "", message: "" });

    try {
      await emailjs.send(
        emailConfig.serviceId,
        emailConfig.templateId,
        {
          yourName: form.name,
          Email: form.email,
          Message: form.message,
        },
        {
          publicKey: emailConfig.publicKey,
        },
      );

      setNotice({
        type: "success",
        message: "Message sent successfully. I will get back to you soon.",
      });
      setForm(initialForm);
    } catch (error) {
      console.error(error);
      setNotice({
        type: "error",
        message: "Message failed to send. Please try again in a moment.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <SectionShell
      id="contact"
      eyebrow="Get In Touch"
      title="Let&apos;s build something sharp, useful, and visually strong."
      description="The contact flow stays close to the original portfolio and uses EmailJS on the client. Update the public env vars if you want to connect it to a different mailbox."
      className="pb-24"
    >
      <div className="grid gap-8 xl:grid-cols-[0.78fr_1fr] xl:items-stretch">
        <motion.div
          variants={slideIn("left", "tween", 0.14, 0.7)}
          className="glass-panel rounded-[32px] p-8 shadow-card sm:p-10"
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <label className="flex flex-col gap-3">
              <span className="text-sm font-medium uppercase tracking-[0.24em] text-cyan-100/80">
                Your Name
              </span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What should I call you?"
                required
                className="rounded-2xl border border-white/10 bg-slate-950/70 px-5 py-4 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-200/40"
              />
            </label>

            <label className="flex flex-col gap-3">
              <span className="text-sm font-medium uppercase tracking-[0.24em] text-cyan-100/80">
                Your Email
              </span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
                className="rounded-2xl border border-white/10 bg-slate-950/70 px-5 py-4 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-200/40"
              />
            </label>

            <label className="flex flex-col gap-3">
              <span className="text-sm font-medium uppercase tracking-[0.24em] text-cyan-100/80">
                Message
              </span>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about the product, scope, or timeline."
                required
                className="rounded-2xl border border-white/10 bg-slate-950/70 px-5 py-4 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-200/40"
              />
            </label>

            <div className="flex flex-wrap items-center gap-4">
              <button
                type="submit"
                disabled={loading}
                className="rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold uppercase tracking-[0.24em] text-slate-950 transition hover:bg-cyan-200 disabled:cursor-not-allowed disabled:bg-cyan-300/70"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

              {notice.message ? (
                <p
                  className={`text-sm ${
                    notice.type === "success" ? "text-emerald-300" : "text-rose-300"
                  }`}
                >
                  {notice.message}
                </p>
              ) : null}
            </div>
          </form>
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.14, 0.7)}
          className="panel-gradient min-h-[360px] overflow-hidden rounded-[32px] border border-white/10 shadow-card md:min-h-[460px]"
        >
          <EarthCanvas />
        </motion.div>
      </div>
    </SectionShell>
  );
}
