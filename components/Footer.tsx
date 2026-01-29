import { useTranslations } from "next-intl";

export default function Footer() {
    const tFooter = useTranslations('footer');  
    return (
        <footer className="w-full text-center py-8 space-y-2">
            <div className="flex justify-center gap-6 text-muted text-xs">
                <a href="#" className="hover:text-foreground transition-colors">{tFooter('privacyPolicy')}</a>
                <a href="#" className="hover:text-foreground transition-colors">{tFooter('termsOfService')}</a>
                <a href="#" className="hover:text-foreground transition-colors">{tFooter('helpCenter')}</a>
            </div>
            <p className="text-[10px] text-muted/60">© 2026 DevStack. {tFooter('title')}.</p>
      </footer>
    );
}