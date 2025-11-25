import React from 'react';

import { Mail, Phone, Linkedin, Send } from 'lucide-react';

const Contact = () => {
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
                </div>

                <form className="space-y-6 bg-white/5 p-8 rounded-2xl border border-white/10" onSubmit={(e) => e.preventDefault()}>
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                        <input
                            type="text"
                            id="name"
                            className="w-full bg-cyber-dark border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyber-primary focus:ring-1 focus:ring-cyber-primary transition-all"
                            placeholder="Your Name"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="w-full bg-cyber-dark border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyber-primary focus:ring-1 focus:ring-cyber-primary transition-all"
                            placeholder="your@email.com"
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                        <textarea
                            id="message"
                            rows="4"
                            className="w-full bg-cyber-dark border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyber-primary focus:ring-1 focus:ring-cyber-primary transition-all resize-none"
                            placeholder="Your message..."
                        ></textarea>
                    </div>
                    <button type="submit" className="w-full bg-cyber-primary text-cyber-dark font-bold py-3 px-6 rounded-lg hover:bg-cyber-primary/90 transition-colors flex items-center justify-center gap-2">
                        Send Message
                        <Send className="w-4 h-4" />
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
