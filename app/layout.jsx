import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ThemeProvider from '@/components/theme-provider';
import SplashProvider from '@/components/splash-provider';

export const metadata = {
  title: {
    default: 'Tarun Asrani | Data Maverick',
    template: '%s | Tarun Asrani',
  },
  description: 'Portfolio of Tarun Asrani – Data Analyst & Dashboard Storyteller',
  openGraph: {
    title: 'Tarun Asrani | Data Maverick',
    description: 'Portfolio of Tarun Asrani – Data Analyst & Dashboard Storyteller',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tarun Asrani | Data Maverick',
    description: 'Portfolio of Tarun Asrani – Data Analyst & Dashboard Storyteller',
  },

  other: {
    'darkreader-lock': '',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="min-h-screen bg-page text-gray-800 dark:text-gray-100 antialiased">
        <SplashProvider>
          <ThemeProvider>
            <Header />
            <main className="min-h-[calc(100vh-160px)]">{children}</main>
            <Footer />
          </ThemeProvider>
        </SplashProvider>
      </body>
    </html>
  );
}
