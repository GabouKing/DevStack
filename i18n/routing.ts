import {defineRouting} from 'next-intl/routing';
 
export const routing = defineRouting({  
  locales: ['en', 'pt-BR', 'es', 'fr'],
  
  pathnames:{
    "/login":{
      "en":"/login",
      "pt-BR":"/conectar",
      "es":"/conectar",
      "fr":"/connecter",
    },
    "/about":{
      "en":"/about",
      "pt-BR":"/sobre",
      "es":"/sobre",
      "fr":"/a-propos",
    },
    "/contact":{
      "en":"/contact",
      "pt-BR":"/contato",
      "es":"/contacto",
      "fr":"/contact",
    },
    "/projects":{
      "en":"/projects",
      "pt-BR":"/projetos",
      "es":"/proyectos",
      "fr":"/projets",
    }
  },  
  defaultLocale: 'en'
});