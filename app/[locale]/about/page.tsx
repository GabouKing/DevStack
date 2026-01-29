"use client";
import { useTranslations } from 'next-intl';
import { Download, Eye, Github, PencilRuler, Users } from 'lucide-react';
import Image from 'next/image'
import Logo from '../../../public/logo.svg'
import Footer from '@/components/Footer';
import { Header } from '@/components/Header';
import ProfilePicture from "../../../public/profilePic.png"


export default function LoginPage() {  
  const tAbout = useTranslations('about');  
  const stack = ['React', 'Node.js', 'TypeScript', 'AWS', 'PostgreSQL', 'Next.js', 'Docker'];
  return (
    <main className="min-h-screen bg-background flex flex-col items-center justify-between p-6">      
      <Header/>  
      <main className="min-h-screen bg-[#0a0f1a] flex items-center justify-center p-6">        
        <div className="flex flex-row flex-wrap items-start content-start gap-x-20 w-full max-w-[1105px] min-h-[900px] self-stretch flex-none">          
          <div className="flex-none w-full md:w-[380px] space-y-8">
            <div className="space-y-6">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-[#161b22]">
                <Image 
                  src={ProfilePicture} 
                  alt={'Profile Picture'}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 380px"
                />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">Lead Developer & Architect</h2>
                <p className="text-slate-500">Based in San Francisco, CA</p>
              </div>
            </div>
          
            <div className="bg-[#111827] border border-slate-800 rounded-2xl p-6">
              <h3 className="text-[10px] font-semibold text-slate-500 uppercase tracking-[0.2em] mb-4">
                {tAbout('techKnowledge')}
              </h3>
              <div className="flex flex-wrap gap-2">
                {stack.map((item) => (
                  <span 
                    key={item} 
                    className="px-3 py-1.5 bg-[#1f2937] text-slate-300 text-xs rounded-md border border-white/5"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="flex-1 min-w-[300px] flex flex-col pt-4">
            <div className="mb-6">
              <span className="px-4 py-1.5 border border-slate-700 rounded-full text-[11px] font-medium text-slate-400 bg-white/5">
                {tAbout('title')}
              </span>
            </div>

            <h1 className="text-5xl lg:text-[24px] font-semibold text-white leading-[1.1] mb-10">
              Crafting code with <br />
              architectural precision.
            </h1>

            <div className="space-y-6 text-[16px] leading-relaxed text-slate-400 mb-12 max-w-[600px]">
              <p>
                With over 8 years of experience in full-stack development, I specialize 
                in building robust systems that solve complex business problems. My 
                approach combines technical rigor with a deep understanding of user needs.
              </p>
              <p>
                I believe that great software isn't just about writing code; it's about 
                creating sustainable architectures that grow with your organization. I 
                focus on clean code, automated testing, and seamless CI/CD pipelines.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-16">
              <div className="bg-[#111827] p-8 rounded-2xl border border-slate-800/50">
                <div className="w-10 h-10 bg-white flex items-center justify-center rounded-lg mb-6">
                  <Users className="text-[#0a0f1a] w-5 h-5" />
                </div>
                <h4 className="text-white font-bold mb-3 text-lg">Technical Leadership</h4>
                <p className="text-slate-500 text-[14px] leading-relaxed">
                  Mentoring high-performing engineering teams and managing complex 
                  project lifecycles from concept to deployment.
                </p>
              </div>

              <div className="bg-[#111827] p-8 rounded-2xl border border-slate-800/50">
                <div className="w-10 h-10 bg-white flex items-center justify-center rounded-lg mb-6">
                  <PencilRuler className="text-[#0a0f1a] w-5 h-5" />
                </div>
                <h4 className="text-white font-bold mb-3 text-lg">Scalable Architecture</h4>
                <p className="text-slate-500 text-[14px] leading-relaxed">
                  Designing distributed systems that handle millions of requests with 
                  focus on performance, security, and reliability.
                </p>
              </div>
            </div>
            
            <div className="mt-auto flex items-center justify-between border-t border-slate-800 pt-8">
              <div className="flex gap-16">
                <div>
                  <div className="text-[32px] font-bold text-white tracking-tighter">8+</div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-widest font-medium">{tAbout('year')}.</div>
                </div>
                <div>
                  <div className="text-[32px] font-bold text-white tracking-tighter">120+</div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-widest font-medium">{tAbout('projects')}</div>
                </div>
              </div>

              <button className="flex items-center gap-2 text-[#3b82f6] hover:text-blue-400 transition-colors font-medium text-sm">
                {tAbout('download')}
                <Download size={18} />
              </button>
            </div>
          </div>

        </div>
      </main>
      <Footer/>
    </main>
  );
}

