import Header from "@/components/Header";
import "./globals.css";

export const metadata = {
  title: "Task Manager",
  description: "Manage your tasks efficiently",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 min-h-screen">
          <Header />
          {children}
      </body>
    </html>
  );
}
