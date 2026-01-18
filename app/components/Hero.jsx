"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center overflow-hidden hero-panel-bg pt-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
                <div className="max-w-4xl">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-slate-100/80 border border-slate-200/50 text-slate-500 text-[11px] font-bold mb-10 tracking-tight">
                        <Sparkles className="w-3 h-3 mr-2 text-emerald-500" /> Leading Software Development Company in Bangladesh
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-8">
                        Enterprise-Grade Custom Software Built for <span className="text-blue-500 italic font-serif">Scale</span>
                    </h1>

                    <p className="text-lg md:text-xl text-slate-600 max-w-2xl mb-12 leading-snug font-medium">
                        We help enterprises, institutions, and public sector organizations design, build, and scale secure digital systems—backed by 20+ years of delivery experience and proven execution.
                    </p>

                    <p className="text-sm font-bold text-slate-500 mb-8 italic">
                        Choose how you want to explore, by <span className="text-slate-900">industry</span>, or <span className="text-slate-900">solution</span>.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center space-y-6 sm:space-y-0 sm:space-x-10">
                        <Link
                            href="/contact"
                            className="btn-neon-emerald flex items-center group px-8 py-4 rounded-full font-bold text-sm tracking-tight text-slate-900 shadow-xl shadow-emerald-500/10"
                        >
                            Schedule a Meeting
                            <div className="ml-4 w-7 h-7 bg-black rounded-full flex items-center justify-center text-white group-hover:translate-x-1 transition-transform">
                                <ArrowRight className="w-4 h-4" />
                            </div>
                        </Link>

                        <Link
                            href="/solutions"
                            className="group flex items-center text-slate-900 font-bold text-sm tracking-tight hover:text-blue-600 transition-colors"
                        >
                            View Case Studies <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
