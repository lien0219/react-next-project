// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    loader: "custom",
    loaderFile: "./my-loader.ts",
    // domains: ["dogpay-data-prod.oss-us-west-1.aliyuncs.com"],
    formats: ["image/avif", "image/webp"],
    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: "dogpay-data-prod.oss-us-west-1.aliyuncs.com",
    //     port: "",
    //     pathname: "/site-static/**",
    //   },
    // ],
  },
};

export default nextConfig;
