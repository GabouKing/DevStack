import Button from '@/components/Button';
import Footer from '@/components/Footer';
import { Header } from '@/components/Header';
import { Input } from '@/components/Input';
import { Textarea } from '@/components/TextArea';
import { Github, GithubIcon, Linkedin, LinkedinIcon, Send, Twitter } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function Page() {
   const tContact = useTranslations('contact');

  return (
    <main className='min-h-screen flex flex-col'>    
        <Header/>
    <section className="flex-1 bg-background text-foreground flex items-center justify-center px-6">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12">
                
        <section className="flex flex-col justify-center gap-8">
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
            {tContact('title.line1')} <br /> {tContact('title.line2')}
          </h1>

          <p className="text-muted max-w-md">
            {tContact('description')}
          </p>

          <div className="space-y-4 text-sm">
            <div>
              <span className="block text-muted">{tContact('email.label')}</span>
              <span className="font-medium">hello@portfolio.dev</span>
            </div>

            <div>
              <span className="block text-muted">{tContact('location.label')}</span>
              <span className="font-medium">{tContact('location.value')}</span>
            </div>
          </div>

          <div className="flex gap-4">
            {[
              { id: 'linkedin', icon: <LinkedinIcon /> },
              { id: 'github', icon: <GithubIcon /> },
              { id: 'twitter', icon: <Twitter /> }
            ].map(({ id, icon }) => (
              <button
                key={id}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary-hover transition"
              >
                {icon}
              </button>
            ))}
          </div>
        </section>
        
        <section className="bg-surface border border-border rounded-xl p-8">
          <form className="space-y-5">
             <Input
               label={tContact('form.name')}
               placeholder={tContact('form.namePlaceholder')}
             />

             <Input
               type="email"
               label={tContact('form.email')}
               placeholder={tContact('form.emailPlaceholder')}
             />

             <Input
               label={tContact('form.subject')}
               placeholder={tContact('form.subjectPlaceholder')}
             />

             <Textarea
               label={tContact('form.message')}
               placeholder={tContact('form.messagePlaceholder')}
               rows={4}
             />

            <Button
              type="submit"
              variant='primary'
              icon={<Send size={20}/>}
            >
              {tContact('form.submit')}
            </Button>
          </form>
        </section>
      </div>
    </section>
    <Footer/>
  </main>
  );
}