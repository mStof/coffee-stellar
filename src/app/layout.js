import { Lobster, Besley } from "next/font/google";

const lobster = Lobster({
  weight: "400",
  subsets: ["latin"],
  variable:'--lobster-font',
});
const besley = Besley({
  weight: "400",
  subsets: ["latin"],
  variable:'--besley-font',
});

export const metadata = {
  title: "Coffee Stellar",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className={`${lobster.variable} ${besley.variable}`}>
      <body className={lobster.className}>{children}</body>
    </html>
  );
}
