/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["lh3.googleusercontent.com"],
    },
};

module.exports = nextConfig;

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     experimental: {
//         appDir: true,
//         serverComponentsExternalPackages: ["mongoose"],
//     },
//     images: {
//         domains: ["lh3.googleusercontent.com"],
//     },
//     webpack(config) {
//         config.experiments = {
//             ...config.experiments,
//             topLevelAwait: true,
//         };
//         return config;
//     },
// };

// module.exports = nextConfig;
