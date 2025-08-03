import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: "https",
  //       hostname: "images.unsplash.com",
  //       port: "",
  //       pathname: "/**",
  //       search: "",
  //     },
  //   ],
  // },
  images: {
    domains: ["images.unsplash.com"], // add the domain of your image URL
  },
};

export default nextConfig;
