import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Script from "next/script";  
import logo from "@/assets/illusion ai.jpg";

const inter = Inter({
  subsets: ["latin"],
  weight: ["700"],
});

export const metadata: Metadata = {
  title: "Illusion AI | Where AI Meets Infinite Wisdom",
  description:
    "AI that can read your future, solve your business problems, and teach you the secrets of the universe and help you to research — all in one place. Illusion AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={"./favicon.ico"} />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Toaster />
        {children}
        <Script id="chatbase-script" strategy="afterInteractive">
          {`
            (function(){
              if(!window.chatbase || window.chatbase("getState")!=="initialized"){
                window.chatbase=(...arguments)=>{
                  if(!window.chatbase.q){window.chatbase.q=[]}
                  window.chatbase.q.push(arguments)
                };
                window.chatbase=new Proxy(window.chatbase,{
                  get(target,prop){
                    if(prop==="q"){return target.q}
                    return(...args)=>target(prop,...args)
                  }
                })
              }
              const onLoad=function(){
                const script=document.createElement("script");
                script.src="https://www.chatbase.co/embed.min.js";
                script.id="_14eRx0NZbTme7xrzp9E-";
                script.domain="www.chatbase.co";
                document.body.appendChild(script);
              };
              if(document.readyState==="complete"){onLoad();}
              else{window.addEventListener("load",onLoad);}
            })();
          `}
        </Script>
      </body>
    </html>
  );
}
