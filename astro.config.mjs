// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightSidebarTopics from "starlight-sidebar-topics";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Reservamos SaaS - Data Lake Docs",
      favicon: "/favicon.png",
      logo: {
        light: "./src/assets/reservamossaas-logo.png",
        dark: "./src/assets/reservamossaas-logo-white.png",
        alt: "Reservamos SaaS Logo",
        replacesTitle: true,
      },
      plugins: [
        starlightSidebarTopics([
          {
            label: "Documentación",
            link: "/get-started/overview",
            icon: "open-book",
            items: [
              {
                label: "Introducción",
                items: ["get-started/overview"],
              },
              {
                label: "Recolección de datos",
                items: ["data-collection/getting-started"],
              },
              {
                label: "Servicios",
                items: [
                  "services/overview",
                  "services/recommended-trips",
                  "services/frequent-passengers",
                ],
              },
              {
                label: "Arquitectura",
                items: [
                  "architecture/overview",
                  "architecture/external-services",
                ],
              },
              {
                label: "Guías",
                items: ["guides/generate-mixpanel-and-fingerprint-tokens"],
              },
            ],
          },
          {
            label: "Referencia del SDK",
            link: "/reference/sdk/changelog",
            icon: "seti:javascript",
            items: [
              {
                label: "Changelog",
                link: "/reference/sdk/changelog",
              },
            ],
          },
        ]),
      ],
    }),
  ],
});
