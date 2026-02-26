import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  GraduationCap, 
  Heart, 
  History, 
  Users, 
  ExternalLink, 
  Mail, 
  ChevronRight, 
  Award, 
  ShieldCheck,
  Menu,
  X,
  MessageSquare,
  Sparkles,
  Briefcase,
  CheckCircle2
} from 'lucide-react';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData as any).toString(),
    })
      .then(() => setFormSubmitted(true))
      .catch((error) => {
        console.error("Form submission error:", error);
        alert("There was an error sending your message. Please try again.");
      });
  };

  const navLinks = [
    { name: 'The Story', href: '#story' },
    { name: 'The Scholarship', href: '#scholarship' },
    { name: 'Transparency', href: '#transparency' },
    { name: 'Contact', href: '#contact' },
    { name: 'Alumni', href: '#alumni' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-300 font-sans selection:bg-blue-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-[#0f172a]/80 backdrop-blur-md z-50 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <a href="/" className="flex items-center -ml-4">
              <img src="https://raw.githubusercontent.com/iansagabaen/The-Saga-Foundation/refs/heads/main/the%20saga%20foundation.svg" alt="The Saga Foundation" className="h-48 w-auto invert brightness-0" />
            </a>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-sm font-semibold text-slate-400 hover:text-blue-400 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#scholarship"
                className="bg-blue-600 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/20 hover:scale-105 transition-all active:scale-95"
              >
                Apply for Scholarship
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-slate-400 hover:text-blue-400"
              >
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-[#0f172a] border-b border-slate-800 overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-3 py-4 text-base font-semibold text-slate-400 hover:text-blue-400 hover:bg-slate-800/50 rounded-md"
                  >
                    {link.name}
                  </a>
                ))}
                <div className="pt-4">
                  <a
                    href="#scholarship"
                    onClick={() => setIsMenuOpen(false)}
                    className="block w-full text-center bg-blue-600 text-white px-6 py-3 rounded-lg font-bold"
                  >
                    Apply for Scholarship
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-500/5 rounded-l-[100px] transform translate-x-20" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="max-w-4xl"
            >
              <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold tracking-wider uppercase mb-6">
                <Award className="w-4 h-4" />
                Honoring the Sagabaen Family Legacy
              </motion.div>
              <motion.h1 variants={itemVariants} className="text-5xl lg:text-7xl font-serif font-medium text-slate-100 leading-[1.1] mb-8">
                Empowering the Next Generation of <span className="italic text-blue-400">Overfelt Royals.</span>
              </motion.h1>
              <motion.p variants={itemVariants} className="text-xl text-slate-400 leading-relaxed mb-10 max-w-2xl font-medium">
                The Saga Foundation is an annual scholarship fund dedicated to supporting graduating seniors of Overfelt High School, rooted in the values of discipline, resilience, and leadership.
              </motion.p>
              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#scholarship" 
                  className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-500 hover:shadow-xl hover:shadow-blue-500/20 hover:-translate-y-1 transition-all group"
                >
                  Apply for Scholarship
                  <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="#story" 
                  className="inline-flex items-center justify-center bg-slate-800 text-slate-100 border border-slate-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-700 hover:border-slate-600 transition-all"
                >
                  Our Story
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative hidden lg:block"
            >
              <div className="relative z-10 rounded-3xl overflow-hidden border border-slate-700 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <img 
                  src="https://raw.githubusercontent.com/iansagabaen/The-Saga-Foundation/refs/heads/main/20020401-ray%20%26%20ian%20graduation.jpg" 
                  alt="Ray and Ian Graduation" 
                  className="w-full h-auto object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -inset-4 bg-blue-500/10 rounded-[40px] blur-2xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Story Section */}
      <section id="story" className="py-16 bg-[#0f172a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl border border-slate-800">
                <img 
                  src="https://raw.githubusercontent.com/iansagabaen/The-Saga-Foundation/refs/heads/main/20020401-ray%20%26%20ian%20graduation.jpg" 
                  alt="Ray and Ian Graduation" 
                  className="w-full h-full object-cover opacity-80 grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-sm font-bold text-blue-400 tracking-widest uppercase mb-4">The Legacy</h2>
              <h3 className="text-4xl font-serif font-medium text-slate-100 mb-6">Honoring the Royal Journey</h3>
              <div className="space-y-6 text-lg text-slate-400 leading-relaxed font-medium">
                <p>
                  The Saga Foundation was established to honor the Sagabaen family legacy and the Overfelt High School community that shaped it. Our founder, <a href="https://iansagabaen.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Ian Sagabaen</a>, a member of the Class of 2001, attributes his career in the Silicon Valley tech industry to the foundational lessons learned within these halls.
                </p>
                <p>
                  It was at Overfelt where strict discipline was refined while preparing for stage presence in <strong>Mr. Barnhill's band</strong>, and where a passion for STEM was first ignited in <strong>Mr. Barrientez's science class</strong>. These experiences—guided by dedicated staff and teachers—demonstrated the importance of resilience, networking, and finding one's path early on.
                </p>
                <p>
                  The foundation honors the journey of the Sagabaen family as Filipino migrants who settled in East Side San Jose, seeking to provide the same support system for today's students that our founder received decades ago.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Scholarship Section */}
      <section id="scholarship" className="py-16 bg-[#0f172a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex flex-col items-center gap-2 px-8 py-6 rounded-[32px] bg-blue-600/10 border border-blue-500/20 text-blue-400 mb-10 shadow-xl shadow-blue-500/5"
            >
              <div className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase opacity-80">
                <Award className="w-4 h-4" />
                Annual Scholarship Award
              </div>
              <div className="text-5xl font-serif font-bold text-slate-100 mt-1 tracking-tight">$1,000</div>
              <div className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mt-2">One Recipient Selected Per Year</div>
            </motion.div>
            <h2 className="text-sm font-bold text-blue-400 tracking-widest uppercase mb-4">The Opportunity</h2>
            <h3 className="text-4xl font-serif font-medium text-slate-100 mb-6">The Saga Scholarship</h3>
            <p className="text-lg text-slate-400 font-medium max-w-2xl mx-auto leading-relaxed">
              The Saga Scholarship is an annual award for Overfelt High School seniors who are ready to bridge the gap between their high school journey and their future careers. We focus on celebrating heritage and potential especially for those interested in the tech industry and leadership roles within the East Side San Jose community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-800/30 p-10 rounded-3xl border border-slate-800 hover:bg-slate-800/50 transition-all"
            >
              <div className="mb-6 p-4 bg-[#0f172a] w-fit rounded-2xl border border-slate-800 shadow-sm">
                <Users className="w-8 h-8 text-blue-400" />
              </div>
              <h4 className="text-2xl font-serif font-medium text-slate-100 mb-4">Who Should Apply</h4>
              <p className="text-slate-400 leading-relaxed font-medium">
                You are a current senior at Overfelt High School with a cumulative GPA of at least 3.0. While we have a special mission to support students of Filipino-American heritage, this scholarship is open to every graduating Royal. We are looking for students who show a commitment to academic growth and have a history of overcoming challenges through resilience.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-800/30 p-10 rounded-3xl border border-slate-800 hover:bg-slate-800/50 transition-all"
            >
              <div className="mb-6 p-4 bg-[#0f172a] w-fit rounded-2xl border border-slate-800 shadow-sm">
                <Sparkles className="w-8 h-8 text-blue-400" />
              </div>
              <h4 className="text-2xl font-serif font-medium text-slate-100 mb-4">What You Receive</h4>
              <p className="text-slate-400 leading-relaxed font-medium">
                Recipients get more than just financial support for college. You will gain access to career guidance from professionals working at major technology firms in Silicon Valley. This ensures you have a network to lean on as you navigate your post-secondary education.
              </p>
            </motion.div>
          </div>

          <div className="mt-12 bg-blue-600/10 border border-blue-500/20 rounded-[40px] p-12 text-slate-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="max-w-xl">
                <h4 className="text-3xl font-serif font-medium mb-4 text-slate-100">How to Get Started</h4>
                <p className="text-slate-400 text-lg font-medium">
                  Applications for the 2026 academic year will begin in early 2026. We are currently syncing our timeline with the official Overfelt scholarship cycle to make the process as easy as possible for you. If you want to be the first to know when the portal opens, use the contact form below to send us an inquiry.
                </p>
              </div>
              <a 
                href="#donate"
                className="bg-blue-600 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-blue-500 transition-colors shadow-lg shadow-blue-500/20 inline-block text-center whitespace-nowrap"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Transparency Section */}
      <section id="transparency" className="pt-8 pb-16 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center">
              <h2 className="text-sm font-bold text-blue-400 tracking-widest uppercase mb-4">Trust & Transparency</h2>
              <h3 className="text-4xl font-serif font-medium text-slate-100 mb-6">A Sustainable Legacy</h3>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed font-medium">
                The Saga Foundation operates as a <strong>Donor Advised Fund (DAF)</strong> of Franklin Templeton. This structure ensures that all contributions are managed with the highest level of professional oversight and legal compliance.
              </p>
              <ul className="grid sm:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
                {[
                  "Operates within a 501(c)(3) public charity",
                  "Immediate tax deduction for all donors",
                  "Professional asset management and growth",
                  "Transparent reporting and grant distribution"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-400 font-medium">
                    <div className="w-5 h-5 bg-blue-500/10 border border-blue-500/20 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-blue-400 rounded-full" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="pt-8 pb-16 bg-slate-900 text-slate-300 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-sm font-bold text-blue-400 tracking-widest uppercase mb-4">Get Involved</h2>
              <h3 className="text-4xl font-serif font-medium text-slate-100 mb-8 leading-tight">Join us in building this legacy.</h3>
              <p className="text-slate-400 text-lg mb-10 leading-relaxed font-medium">
                Whether you are an Overfelt alumnus, a community member, or a friend of the Sagabaen family, your support helps us scale our impact and support more students each year.
              </p>
            </div>

            <div id="donate" className="bg-slate-800/50 backdrop-blur-md text-slate-100 p-10 rounded-[40px] border border-slate-700">
              <h4 className="text-2xl font-serif font-medium mb-6">Scholarship Inquiry</h4>
              {!formSubmitted ? (
                <form 
                  name="scholarship-inquiry" 
                  method="POST" 
                  data-netlify="true"
                  onSubmit={handleFormSubmit}
                  className="space-y-4"
                >
                  <input type="hidden" name="form-name" value="scholarship-inquiry" />
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">First Name</label>
                      <input name="firstName" type="text" placeholder="Jane" required className="w-full px-4 py-3 rounded-xl bg-[#0f172a] border border-slate-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-slate-100" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Last Name</label>
                      <input name="lastName" type="text" placeholder="Doe" required className="w-full px-4 py-3 rounded-xl bg-[#0f172a] border border-slate-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-slate-100" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Email Address</label>
                    <input name="email" type="email" placeholder="jane@example.com" required className="w-full px-4 py-3 rounded-xl bg-[#0f172a] border border-slate-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-slate-100" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Message</label>
                    <textarea name="message" rows={4} placeholder="Tell us about yourself or ask a question..." required className="w-full px-4 py-3 rounded-xl bg-[#0f172a] border border-slate-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all resize-none text-slate-100"></textarea>
                  </div>
                  <button type="submit" className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/20 transition-all active:scale-95">
                    Send Message
                  </button>
                </form>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-blue-500/30">
                    <CheckCircle2 className="w-10 h-10 text-blue-400" />
                  </div>
                  <h5 className="text-2xl font-serif font-medium text-slate-100 mb-4">Thank you!</h5>
                  <p className="text-slate-400 font-medium">Your inquiry has been sent successfully. We will get back to you soon.</p>
                  <button 
                    onClick={() => setFormSubmitted(false)}
                    className="mt-8 text-blue-400 font-bold text-sm hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Alumni CTA Section */}
      <section id="alumni" className="py-16 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-800/30 backdrop-blur-sm rounded-[40px] p-8 md:p-16 shadow-sm border border-slate-800 flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="w-16 h-16 bg-blue-500/10 border border-blue-500/20 rounded-2xl flex items-center justify-center mb-8">
                <MessageSquare className="text-blue-400 w-8 h-8" />
              </div>
              <h3 className="text-4xl font-serif font-medium text-slate-100 mb-6">Calling All Overfelt Alumni</h3>
              <p className="text-xl text-slate-400 leading-relaxed mb-8 font-medium">
                The Royal legacy is built by its people. We want to showcase the incredible success stories of our alumni to inspire the next generation of students.
              </p>
              <p className="text-lg text-slate-500 mb-8">
                Did Overfelt help support your growth? Share your journey with us and help show current students what's possible.
              </p>
              <a 
                href="#donate"
                className="inline-flex items-center justify-center bg-slate-700 text-slate-100 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-600 hover:shadow-xl transition-all active:scale-95 border border-slate-600"
              >
                Share Your Success Story
              </a>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              <img src="https://raw.githubusercontent.com/iansagabaen/The-Saga-Foundation/main/20020401-chamber%20choir%203.jpg" alt="Alumni 1" className="rounded-2xl shadow-md transform -rotate-2 opacity-80" referrerPolicy="no-referrer" />
              <img src="https://raw.githubusercontent.com/iansagabaen/The-Saga-Foundation/main/_IMG_0025.JPG" alt="Alumni 2" className="rounded-2xl shadow-md transform rotate-2 translate-y-8 opacity-80" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-[#0f172a] text-slate-500 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center">
              <img src="https://raw.githubusercontent.com/iansagabaen/The-Saga-Foundation/refs/heads/main/the%20saga%20foundation.svg" alt="The Saga Foundation" className="h-32 w-auto -ml-2 invert brightness-0" />
            </div>
            
            <div className="text-sm text-center md:text-right">
              <p>© {new Date().getFullYear()} The Saga Foundation. All rights reserved.</p>
              <p className="mt-1">A Donor Advised Fund of Franklin Templeton Charitable.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
