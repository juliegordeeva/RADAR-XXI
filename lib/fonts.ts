import localFont from "next/font/local";

export const rubik = localFont({
  src: [
    {
      path: "../public/fonts/radar/Rubik-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/radar/Rubik-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-rubik",
  display: "swap",
});

export const notoSans = localFont({
  src: [
    {
      path: "../public/fonts/radar/NotoSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/radar/NotoSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-noto-sans",
  display: "swap",
});
