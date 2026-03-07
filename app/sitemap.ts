import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://paralyangbandung.com";
    const locales = ["id", "en"];
    const routes = ["", "/booking", "/about", "/terms", "/privacy"];

    const entries: MetadataRoute.Sitemap = [];

    for (const locale of locales) {
        for (const route of routes) {
            entries.push({
                url: `${baseUrl}/${locale}${route}`,
                lastModified: new Date(),
                changeFrequency: route === "" ? "weekly" : "monthly",
                priority: route === "" ? 1 : route === "/booking" ? 0.9 : 0.7,
            });
        }
    }

    return entries;
}
