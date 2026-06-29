import Link from "next/link";

export const metadata = { title: "Contact — Audio Workshop Indonesia" };

const phone = "+62 21 7211 234";
const email = "info@audioworkshop.co.id";
const address = "Jl. Panglima Polim Raya No. 45, Kebayoran Baru, Jakarta Selatan";
const whatsapp = "628111234567";
const instagram = "https://instagram.com/audioworkshop.id";

export default function Page({ searchParams }) {
  const sent = searchParams?.sent === "1";
  return (
    <>
      <section className="pt-32 pb-16 max-w-7xl mx-auto px-6">
        <p className="text-[#C9A84C] text-xs font-bold tracking-widest uppercase mb-2">Contact</p>
        <h1 className="text-4xl md:text-5xl font-black text-[#F0F0F2] mb-4">Get in Touch</h1>
        <p className="text-[#8A8A96] text-lg max-w-2xl">Ready to upgrade your car audio? Contact our experts for a free consultation and quote.</p>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-24 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Contact Form */}
        <div className="lg:col-span-2">
          <div className="bg-[#131316] border border-[#1E1E26] rounded-xl p-8">
            <h2 className="text-[#F0F0F2] font-black text-xl mb-6">Send Us a Message</h2>
            <form
              action="https://formsubmit.co/info@audioworkshop.co.id"
              method="POST"
              className="space-y-5"
            >
              <input type="hidden" name="_subject" value="New inquiry from audioworkshop.co.id" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="https://audioworkshop.co.id/contact?sent=1" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-[#8A8A96] text-xs font-bold tracking-wider uppercase block mb-2">Name *</label>
                  <input type="text" name="name" required className="w-full bg-[#0C0C0E] border border-[#1E1E26] focus:border-[#C9A84C]/60 text-[#F0F0F2] rounded-lg px-4 py-3 text-sm outline-none transition-colors placeholder-[#8A8A96]/40" placeholder="Your name" />
                </div>
                <div>
                  <label className="text-[#8A8A96] text-xs font-bold tracking-wider uppercase block mb-2">Phone *</label>
                  <input type="tel" name="phone" required className="w-full bg-[#0C0C0E] border border-[#1E1E26] focus:border-[#C9A84C]/60 text-[#F0F0F2] rounded-lg px-4 py-3 text-sm outline-none transition-colors placeholder-[#8A8A96]/40" placeholder="+62 xxx xxxx xxxx" />
                </div>
              </div>

              <div>
                <label className="text-[#8A8A96] text-xs font-bold tracking-wider uppercase block mb-2">Email</label>
                <input type="email" name="email" className="w-full bg-[#0C0C0E] border border-[#1E1E26] focus:border-[#C9A84C]/60 text-[#F0F0F2] rounded-lg px-4 py-3 text-sm outline-none transition-colors placeholder-[#8A8A96]/40" placeholder="your@email.com" />
              </div>

              <div>
                <label className="text-[#8A8A96] text-xs font-bold tracking-wider uppercase block mb-2">Car Model</label>
                <input type="text" name="car_model" className="w-full bg-[#0C0C0E] border border-[#1E1E26] focus:border-[#C9A84C]/60 text-[#F0F0F2] rounded-lg px-4 py-3 text-sm outline-none transition-colors placeholder-[#8A8A96]/40" placeholder="e.g. Toyota Camry 2023" />
              </div>

              <div>
                <label className="text-[#8A8A96] text-xs font-bold tracking-wider uppercase block mb-2">Inquiry Type</label>
                <select name="inquiry_type" className="w-full bg-[#0C0C0E] border border-[#1E1E26] focus:border-[#C9A84C]/60 text-[#F0F0F2] rounded-lg px-4 py-3 text-sm outline-none transition-colors">
                  <option value="product">Product Inquiry</option>
                  <option value="installation">Installation Quote</option>
                  <option value="dealer">Dealer Application</option>
                  <option value="training">Training Program</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="text-[#8A8A96] text-xs font-bold tracking-wider uppercase block mb-2">Message *</label>
                <textarea name="message" required rows="5" className="w-full bg-[#0C0C0E] border border-[#1E1E26] focus:border-[#C9A84C]/60 text-[#F0F0F2] rounded-lg px-4 py-3 text-sm outline-none transition-colors resize-none placeholder-[#8A8A96]/40" placeholder="Tell us what you're looking for..." />
              </div>

              <button type="submit" className="w-full bg-[#C9A84C] hover:bg-[#B8963E] text-white font-bold py-4 rounded-lg text-sm tracking-wider uppercase transition-colors">
                Send Message
              </button>
            </form>

            {sent && (
              <div className="mt-6 bg-green-500/10 border border-green-500/30 rounded-lg p-4 text-green-400 text-sm font-semibold">
                Thank you! Your message has been sent. We'll get back to you within 24 hours.
              </div>
            )}
          </div>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          <div className="bg-[#131316] border border-[#1E1E26] rounded-xl p-6">
            <h3 className="text-[#F0F0F2] font-bold mb-4">Contact Information</h3>
            <div className="space-y-4">
              <div>
                <p className="text-[#8A8A96] text-xs uppercase tracking-wider mb-1">Phone</p>
                <a href={`tel:${phone}`} className="text-[#F0F0F2] hover:text-[#C9A84C] text-sm transition-colors">{phone}</a>
              </div>
              <div>
                <p className="text-[#8A8A96] text-xs uppercase tracking-wider mb-1">Email</p>
                <a href={`mailto:${email}`} className="text-[#F0F0F2] hover:text-[#C9A84C] text-sm transition-colors">{email}</a>
              </div>
              <div>
                <p className="text-[#8A8A96] text-xs uppercase tracking-wider mb-1">Address</p>
                <p className="text-[#F0F0F2] text-sm leading-relaxed">{address}</p>
              </div>
            </div>
          </div>

          <div className="bg-[#131316] border border-[#1E1E26] rounded-xl p-6">
            <h3 className="text-[#F0F0F2] font-bold mb-4">Quick Contact</h3>
            <a
              href={`https://wa.me/${whatsapp}?text=Hi, I'd like to inquire about car audio products/installation`}
              target="_blank"
              rel="noopener"
              className="flex items-center gap-3 bg-green-600/10 hover:bg-green-600/20 border border-green-600/30 text-green-400 font-semibold px-4 py-3 rounded-lg text-sm transition-colors mb-3"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.1-1.7-.8-1.9-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1-.3-.2-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.6-2.1-.2-.3 0-.5.1-.6l.4-.5.3-.5v-.5l-.9-2.1c-.2-.6-.5-.5-.6-.5h-.6c-.2 0-.5.1-.8.4C8 8 7 9 7 11s1 4.1 2 5.2c.3.4 2.3 3.6 5.6 5 .8.3 1.4.5 1.9.7.8.2 1.5.2 2.1.1.6-.1 1.9-.8 2.1-1.5.2-.7.2-1.4.1-1.5-.1-.2-.3-.3-.6-.4z"/><path d="M12 2C6.5 2 2 6.5 2 12c0 1.9.5 3.7 1.4 5.3L2 22l4.8-1.3C8.3 21.5 10.1 22 12 22c5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18c-1.8 0-3.5-.5-5-1.3l-.3-.2-3.2.8.9-3.1-.2-.3C3.5 15.5 3 13.8 3 12 3 7 7 3 12 3s9 4 9 9-4 8-9 9z"/></svg>
              Chat on WhatsApp
            </a>
            <a href={instagram} target="_blank" rel="noopener" className="flex items-center gap-3 border border-[#1E1E26] hover:border-[#C9A84C]/40 text-[#8A8A96] hover:text-[#F0F0F2] font-semibold px-4 py-3 rounded-lg text-sm transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
              Follow on Instagram
            </a>
          </div>

          <div className="bg-[#131316] border border-[#1E1E26] rounded-xl p-6">
            <h3 className="text-[#F0F0F2] font-bold mb-2">Business Hours</h3>
            <div className="space-y-1 text-sm">
              <div className="flex justify-between text-[#8A8A96]"><span>Monday – Friday</span><span>09:00 – 18:00</span></div>
              <div className="flex justify-between text-[#8A8A96]"><span>Saturday</span><span>09:00 – 15:00</span></div>
              <div className="flex justify-between text-[#8A8A96]"><span>Sunday</span><span>Closed</span></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
