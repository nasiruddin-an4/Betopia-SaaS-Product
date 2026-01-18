"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronRight, Shield, Zap, Database, Globe, Box, Cpu, GraduationCap, HeartPulse, Phone, Clock, BookOpen, Monitor, School, Layers, Mail, Lock, Cloud } from 'lucide-react';
import { PRODUCTS } from '../data/products';



const PRODUCT_ICONS = {
    'agentic-ai': <Cpu />,
    'tolkora-ai': <Box />,
    'smart-ivr': <Phone />,
    'business-24x7': <Clock />,
    'edu-os': <GraduationCap />,
    'care-os': <HeartPulse />,
    'betopia-lms': <BookOpen />,
    'virtual-gate': <Monitor />,
    'smart-class': <School />,
    'betopia-stitch': <Layers />,
    'mail-campaign': <Mail />,
    'count-trust': <Lock />,
    'cloud-managed-services': <Cloud />
};

const Products = () => {
    return (
        <>
            {/* Our Products Section */}
            <section className="relative bg-slate-50 pt-32 pb-48">
                <div className="container mx-auto px-4 md:px-0 mb-24 text-center">
                    <span className="text-blue-600 font-bold text-xs uppercase tracking-[0.4em] mb-4 block">The Ecosystem</span>
                    <h2 className="text-5xl font-bold text-slate-900 tracking-wide leading-none">Our Intelligent Products</h2>
                    <p className="mt-6 text-slate-500 max-w-2xl mx-auto font-medium leading-tight">Modular, enterprise-grade AI solutions engineered for the modern scale.</p>
                </div>

                <div className="container mx-auto md:px-0 flex flex-col items-center">
                    {PRODUCTS.map((product, index) => (
                        <div
                            key={product.id}
                            className="sticky top-32 h-[65vh] w-full flex items-center justify-center px-4 md:px-0"
                            style={{ zIndex: index + 1, marginBottom: index === PRODUCTS.length - 1 ? '0' : '15vh' }}
                        >
                            <div className="w-full max-w-7xl h-full bg-white md:rounded-[2.5rem] rounded-[2rem] border border-slate-200 overflow-hidden flex flex-col md:flex-row transition-all duration-500">
                                <div className="flex-1 p-8 md:p-12 lg:p-16 flex flex-col justify-center custom-scrollbar">
                                    <div className="mb-6">

                                        <h3 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-2 tracking-wide leading-none">{product.name.replace('Betopia ', '')}</h3>
                                        <p className="text-[10px] font-bold text-blue-600 uppercase tracking-[0.15em] mb-3">{product.tagline}</p>
                                        <p className="text-slate-400 text-base lg:text-lg leading-snug mb-2 max-w-md">
                                            {product.overview.substring(0, 140)}...
                                        </p>
                                    </div>
                                    <div className="border-t border-slate-100 pt-2 space-y-2">
                                        {product.features.slice(0, 3).map((feature, fIndex) => (
                                            <div
                                                key={fIndex}
                                                className="group flex items-center justify-between py-1 transition-all"
                                            >
                                                <span className="text-slate-800 text-md font-semibold tracking-tight">
                                                    {feature}
                                                </span>

                                                <ChevronRight className="w-4 h-4 text-slate-300 transition-transform group-hover:translate-x-0.5 group-hover:text-slate-400" />
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-4">
                                        <Link
                                            href={`/products/${product.id}`}
                                            className="group flex items-center text-blue-700 font-bold text-[10px] uppercase tracking-[0.2em] hover:text-blue-900 transition-colors"
                                        >
                                            Explore More <ArrowRight className="ml-2 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="flex-1 bg-slate-950 relative overflow-hidden hidden md:flex items-center justify-center">
                                    <div className="absolute inset-0 opacity-20">
                                        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,_rgba(59,130,246,0.2)_0%,_transparent_70%)]"></div>
                                    </div>
                                    <div className="relative z-10 w-full h-full flex items-center justify-center space-x-4">
                                        <div className="w-20 h-48 bg-gradient-to-b from-blue-600 to-blue-900 rounded-t-full rounded-b-none opacity-80 transform translate-y-8"></div>
                                        <div className="w-20 h-64 bg-gradient-to-b from-indigo-500 to-indigo-900 rounded-t-full rounded-b-none opacity-90"></div>
                                        <div className="w-20 h-56 bg-gradient-to-b from-emerald-600 to-teal-900 rounded-t-full rounded-b-none opacity-80 transform translate-y-12"></div>
                                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10">
                                            <div className="w-full h-px bg-white rotate-[15deg]"></div>
                                            <div className="w-full h-px bg-white -rotate-[15deg]"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Bento Grid Features */}
            <section className="py-40 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-24">
                        <h2 className="text-4xl font-bold text-slate-900 tracking-wide mb-4 leading-none">Enterprise-Ready Infrastructure</h2>
                        <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-tight">Built to scale with the world's most demanding businesses.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="md:col-span-2 bento-card p-12 rounded-[2.5rem] bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-xl shadow-blue-900/10">
                            <Shield className="w-12 h-12 mb-8 text-blue-200" />
                            <h3 className="text-3xl font-bold mb-4 leading-tight">Absolute Security Architecture</h3>
                            <p className="text-blue-100 text-lg max-w-md leading-snug">
                                We implement zero-trust protocols, multi-layer encryption, and regional data residency to ensure your enterprise data remains proprietary and protected.
                            </p>
                        </div>
                        <div className="bento-card p-12 rounded-[2.5rem] bg-slate-50 border border-slate-100">
                            <Zap className="w-12 h-12 mb-8 text-blue-600" />
                            <h3 className="text-2xl font-bold text-slate-900 mb-4 leading-tight">Hyper-Speed Integration</h3>
                            <p className="text-slate-500 leading-snug">
                                Modular API-first design allows your existing systems to synchronize with our AI layer in record time.
                            </p>
                        </div>
                        <div className="bento-card p-12 rounded-[2.5rem] bg-slate-900 text-white shadow-2xl shadow-slate-900/20">
                            <Database className="w-12 h-12 mb-8 text-emerald-400" />
                            <h3 className="text-2xl font-bold mb-4 leading-tight">Multi-Tenant Cloud</h3>
                            <p className="text-slate-400 leading-snug">
                                Scalable infrastructure that handles millions of users simultaneously with dedicated resource allocation.
                            </p>
                        </div>
                        <div className="md:col-span-2 bento-card p-12 rounded-[2.5rem] bg-white border border-slate-100 flex flex-col md:flex-row items-center gap-12 shadow-sm">
                            <div className="flex-1">
                                <Globe className="w-12 h-12 mb-8 text-blue-600" />
                                <h3 className="text-3xl font-bold text-slate-900 mb-4 leading-tight">From Bangladesh to the World</h3>
                                <p className="text-slate-500 text-lg leading-snug">
                                    Headquartered in Dhaka, we tap into a world-class pool of engineers to deliver high-performance software at an optimized global cost structure.
                                </p>
                            </div>
                            <div className="flex-1 bg-slate-50 rounded-3xl p-8 w-full text-center">
                                <div className="text-[10px] font-black text-slate-400 tracking-[0.3em] uppercase mb-4">Delivery Route</div>
                                <div className="flex items-center justify-between font-bold text-slate-800 px-4">
                                    <span>DHAKA</span>
                                    <ArrowRight className="text-blue-500 w-4 h-4" />
                                    <span>LONDON</span>
                                    <ArrowRight className="text-blue-500 w-4 h-4" />
                                    <span>NYC</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Products;
