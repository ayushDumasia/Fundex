import Sidebar from '@/components/Sidebar';
import './globals.css';
export const metadata = {
  title: 'Your App Title',
  description: 'Your App Description',
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
      </head>
      <body className="min-h-screen flex">
        <Sidebar />
        <main className="flex-1 p-4">
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
