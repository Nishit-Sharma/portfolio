import localFont from "next/font/local";

export const manrope = localFont({
  src: "./static/fonts/manrope-regular.otf",
  variable: "--font-manrope",
  display: "swap",
});

export const scholar = localFont({
  src: "./static/fonts/scholar-regular.otf",
  variable: "--font-scholar",
  display: "swap",
}); 

// Specific font instances for direct className usage across the app
export const manropeRegular = localFont({
  src: "./static/fonts/manrope-regular.otf",
  display: "swap",
  preload: true,
  variable: "--font-manrope-regular",
});

export const manropeSemiBold = localFont({
  src: "./static/fonts/manrope-semibold.otf",
  display: "swap",
  preload: true,
  variable: "--font-manrope-semibold",
});

export const scholarRegular = localFont({
  src: "./static/fonts/scholar-regular.otf",
  display: "swap",
  preload: true,
  variable: "--font-scholar-regular",
});

export const scholarItalic = localFont({
  src: "./static/fonts/scholar-italic.otf",
  display: "swap",
  preload: true,
  variable: "--font-scholar-italic",
});