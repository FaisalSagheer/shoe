import { Poetsen_One, Prompt } from "next/font/google";
import "./globals.css";

const PromptFont = Prompt({
  variable: "--font-prompt-serif",
  weight:'400',
  subsets: ["latin"],
});

const PoetsenOne = Poetsen_One({
  variable: "--font-poetsen-one",
  weight: '400',
  subsets: ["latin"],
});

export const metadata = {
  title: "E-commerce",
  description: "Created By Faisal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${PromptFont.variable} ${PoetsenOne.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
