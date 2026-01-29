import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "outline";
  type?: "button" | "submit";
  onClick?: () => void;
  icon?: ReactNode; // Aceita um componente de ícone do Lucide ou qualquer elemento
}

export default function Button({ 
  children, 
  variant = "primary", 
  type = "button", 
  onClick,
  icon 
}: ButtonProps) {
  
  // Base de estilos comuns (layout, padding, transições)
  const baseStyles = "w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-semibold transition-all duration-200 text-sm active:scale-[0.98]";
  
  // Estilos específicos para cada variante de cor
  const variants = {
    // Azul sólido da DevStack
    primary: "bg-primary hover:bg-primary-hover text-white shadow-lg shadow-blue-900/20 border border-transparent",
    
    // Estilo com borda para o GitHub e outros secundários
    outline: "bg-transparent border border-border hover:bg-surface text-foreground hover:border-muted/50"
  };

  return (
    <button 
      type={type} 
      onClick={onClick} 
      className={`${baseStyles} ${variants[variant]}`}
    >
      {/* Renderiza o ícone apenas se ele for passado via props */}
      {icon && <span className="flex items-center justify-center">{icon}</span>}
      {children}
    </button>
  );
}