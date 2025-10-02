import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config) {
    // نلاقي أي loader بيشتغل مع SVG ونشيله
    config.module.rules.forEach((rule:any) => {
      if (rule && typeof rule === "object" && "test" in rule && rule.test instanceof RegExp && rule.test.test(".svg")) {
        // @ts-ignore
        rule.exclude = /\.svg$/i;
      }
    });

    // نضيف loader خاص بـ SVGR
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            icon: true, // يخلي الـ svg يتظبط كأيقونة
          },
        },
      ],
    });

    return config;
  },
};

export default nextConfig;
