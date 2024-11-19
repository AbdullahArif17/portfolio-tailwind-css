import { ReactNode } from 'react';
import Header from '../Header/page';
import Footer from '../Footer/page';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="font-sans bg-accent min-h-screen flex flex-col items-center">
      <Header />
      <main className="p-8 w-full max-w-4xl mx-auto my-8 animate-fadeIn">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
