"use client";
import { useTranslations } from 'next-intl';
import { Eye, Github } from 'lucide-react';
import Image from 'next/image'
import Button from '@/components/Button';
import Logo from '../../../public/logo.svg'
import { useRouter } from "@/i18n/navigation";
import Footer from '@/components/Footer';

export default function LoginPage() {
  
  const tAuth = useTranslations('auth');
  const tHeader = useTranslations('header');  
  const router = useRouter();
  
  const redirectToNextScreen = () =>
    {  router.push('/about'); }
  return (
    <main className="min-h-screen bg-background flex flex-col items-center justify-between p-6">      
      <header className="w-full max-w-7xl flex justify-between items-center py-4">
        <div className="flex items-center gap-2">
          <Image src={Logo} alt={'DevStack Logo'}/>          
          <span className="text-foreground font-bold text-xl tracking-tight">DevStack</span>
        </div>
        
        <div className="flex items-center gap-4">
          <span className="text-muted text-sm hidden sm:inline">{tHeader('newHere')}</span>
          <button className="bg-primary hover:bg-primary-hover text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
            {tHeader('createAccount')}
          </button>
        </div>
      </header>
      
      <section className="w-full max-w-[480px] bg-surface border border-border rounded-2xl p-8 md:p-12 shadow-2xl">
        <div className="flex flex-col items-center text-center mb-10">
           <div className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-xl mb-6 hover:bg-primary-hover">
              <Image src={Logo} alt={'DevStack Logo'} width={35}/>          
           </div>
           <h1 className="text-3xl font-bold text-foreground mb-3">{tAuth('welcomeBack')}</h1>
           <p className="text-muted text-sm leading-relaxed">
             {tAuth('subtitle')}
           </p>
        </div>

        <form className="space-y-6">          
          <div className="space-y-2">
            <label className="text-foreground text-sm font-medium">{tAuth('email.label')}</label>
            <input 
              type="email" 
              placeholder={tAuth('email.placeholder')}
              className="w-full bg-transparent border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-muted/50"
            />
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label className="text-foreground text-sm font-medium">{tAuth('password.label')}</label>
              <a href="#" className="text-primary text-xs hover:underline">{tAuth('password.forgot')}</a>
            </div>
            <div className="relative">
              <input 
                type="password" 
                placeholder="••••••••"
                className="w-full bg-transparent border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              />
              <button type="button" title={tAuth('password.show')} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-foreground">
                <Eye size={18} />
              </button>
            </div>
          </div>

          <Button variant="primary" onClick={redirectToNextScreen}>
            {tAuth('signIn')}
          </Button>

          <div className="relative flex items-center py-2">
            <div className="flex-grow border-t border-border"></div>
            <span className="flex-shrink mx-4 text-muted text-[10px] uppercase tracking-[0.2em]">{tAuth('orContinueWith')}</span>
            <div className="flex-grow border-t border-border"></div>
          </div>

          <Button variant="outline" icon={<Github size={20} onClick={ redirectToNextScreen }/>}>
            {tAuth('github')}
          </Button>
        </form>

        <p className="text-center text-sm text-muted mt-8">
          {tAuth('noAccount')} <a href="#" className="text-primary font-semibold hover:underline">{tAuth('signUpFree')}</a>
        </p>
      </section>

      <Footer/>
    </main>
  );
}