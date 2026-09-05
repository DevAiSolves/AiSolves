import type { ReactNode } from 'react';
import './styles.css';

export default function RootLayout({ children }: { children: ReactNode }) {
  return <html lang="es"><body>{children}</body></html>;
}
