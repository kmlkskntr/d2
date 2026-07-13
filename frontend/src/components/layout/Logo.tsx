import { Link } from 'react-router-dom';
import logoUrl from '../../assets/d2-logo.png';

interface LogoProps {
  withWordmark?: boolean;
  className?: string;
  onClick?: () => void;
}

export default function Logo({ withWordmark = false, className = '', onClick }: LogoProps) {
  return (
    <Link to="/" onClick={onClick} className={`inline-flex items-center group ${className}`} aria-label="D2 Grup">
      <span className="inline-flex items-center rounded-md border border-brand-teal/40 bg-black/30 backdrop-blur-sm px-3 py-1.5 transition-all duration-300 group-hover:border-brand-teal/70 group-hover:bg-black/40">
        <img
          src={logoUrl}
          alt="D2 Grup"
          className={`${withWordmark ? 'h-9 md:h-10' : 'h-7 md:h-8'} w-auto object-contain`}
        />
      </span>
    </Link>
  );
}
