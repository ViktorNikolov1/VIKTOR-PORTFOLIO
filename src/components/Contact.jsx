
/*
        import React, { useState, useRef } from 'react';
        import ReCAPTCHA from 'react-google-recaptcha';
        import { Mail, Phone, Linkedin, Send, Shield } from 'lucide-react';
  
        const Contact = () => {
            const [captchaVerified, setCaptchaVerified] = useState(false);
            const [formSubmitted, setFormSubmitted] = useState(false);
            const recaptchaRef = useRef(null);

            // Replace this with your actual site key
            const RECAPTCHA_SITE_KEY = "6LdBJDosAAAAADcSln5WyBjppXJIjepIaSaj2WZG";

            const handleCaptchaChange = (value) => {
                if (value) {
                    setCaptchaVerified(true);
                } else {
                    setCaptchaVerified(false);
                }
            };

            const handleSubmit = (e) => {
                e.preventDefault();

                if (!captchaVerified) {
                    alert('Please complete the CAPTCHA verification');
                    return;
                }

                // Here you would normally send the form data to your backend
                // For now, we'll just show a success message
                setFormSubmitted(true);

                // Reset form after 3 seconds
                setTimeout(() => {
                    setFormSubmitted(false);
                    setCaptchaVerified(false);
                    if (recaptchaRef.current) {
                        recaptchaRef.current.reset();
                    }
                    e.target.reset();
                }, 3000);
            };

            return (
                <section id="contact" className="py-20 px-6 bg-gradient-to-b from-cyber-dark to-black">
                    <div className="max-w-4xl mx-auto text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Let's <span className="text-cyber-primary">Connect</span>
                        </h2>
                        <p className="text-gray-300 text-lg">
                            I'm currently open to opportunities in cybersecurity, backend development, and software engineering.
                            Whether you have a question or just want to say hi, I'll try my best to get back to you!
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                        <div className="space-y-8">
                            <div className="flex items-center gap-4 text-gray-300 hover:text-cyber-primary transition-colors p-4 rounded-xl bg-white/5 border border-white/10">
                                <div className="w-12 h-12 rounded-full bg-cyber-primary/20 flex items-center justify-center text-cyber-primary">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div className="text-left">
                                    <p className="text-sm text-gray-500">Email</p>
                                    <a href="mailto:viktorgn4@gmail.com" className="text-lg font-medium">viktorgn4@gmail.com</a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 text-gray-300 hover:text-cyber-primary transition-colors p-4 rounded-xl bg-white/5 border border-white/10">
                                <div className="w-12 h-12 rounded-full bg-cyber-primary/20 flex items-center justify-center text-cyber-primary">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div className="text-left">
                                    <p className="text-sm text-gray-500">Phone</p>
                                    <a href="tel:+14753308521" className="text-lg font-medium">+1 (475) 330-8521</a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 text-gray-300 hover:text-cyber-primary transition-colors p-4 rounded-xl bg-white/5 border border-white/10">
                                <div className="w-12 h-12 rounded-full bg-cyber-primary/20 flex items-center justify-center text-cyber-primary">
                                    <Linkedin className="w-6 h-6" />
                                </div>
                                <div className="text-left">
                                    <p className="text-sm text-gray-500">LinkedIn</p>
                                    <a href="https://linkedin.com/in/viktor-nikolov1" target="_blank" rel="noopener noreferrer" className="text-lg font-medium">linkedin.com/in/viktor-nikolov1</a>
                                </div>
                            </div>

                           
                            <div className="flex items-center gap-3 text-gray-400 p-4 rounded-xl bg-cyber-primary/5 border border-cyber-primary/20">
                                <Shield className="w-5 h-5 text-cyber-primary" />
                                <p className="text-sm">Protected by reCAPTCHA to prevent spam and abuse</p>
                            </div>
                        </div>

                        <form className="space-y-6 bg-white/5 p-8 rounded-2xl border border-white/10" onSubmit={handleSubmit}>
                            {formSubmitted && (
                                <div className="bg-cyber-primary/20 border border-cyber-primary text-cyber-primary px-4 py-3 rounded-lg text-center font-medium animate-pulse">
                                    ✓ Message sent successfully!
                                </div>
                            )}

                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    className="w-full bg-cyber-dark border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyber-primary focus:ring-1 focus:ring-cyber-primary transition-all"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    className="w-full bg-cyber-dark border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyber-primary focus:ring-1 focus:ring-cyber-primary transition-all"
                                    placeholder="your@email.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    required
                                    className="w-full bg-cyber-dark border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyber-primary focus:ring-1 focus:ring-cyber-primary transition-all resize-none"
                                    placeholder="Your message..."
                                ></textarea>
                            </div>

                       
                            <div className="flex justify-center">
                                <div className="transform scale-95 origin-center">
                                    <ReCAPTCHA
                                        ref={recaptchaRef}
                                        sitekey={RECAPTCHA_SITE_KEY}
                                        onChange={handleCaptchaChange}
                                        theme="dark"
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={!captchaVerified}
                                className={`w-full font-bold py-3 px-6 rounded-lg transition-all flex items-center justify-center gap-2 ${captchaVerified
                                    ? 'bg-cyber-primary text-cyber-dark hover:bg-cyber-primary/90 cursor-pointer'
                                    : 'bg-gray-600 text-gray-400 cursor-not-allowed opacity-50'
                                    }`}
                            >
                                Send Message
                                <Send className="w-4 h-4" />
                            </button>
                        </form>
                    </div>
                </section>
            );
        };

        export default Contact;
        */