import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { useEffect } from "react";
import { useGuide } from "@/lib/guide-store";
import appCss from "../styles.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "The Visual Gospel — Leader Guide" },
      {
        name: "description",
        content:
          "A free 30-week leader guide for The Visual Gospel: the word, a plain definition, a memory verse, and discussion for small groups, classes, and youth.",
      },
      { name: "theme-color", content: "#f4f1e8" },
    ],
    links: [
      { rel: "icon", href: "/favicon.ico", sizes: "32x32" },
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32.png" },
      { rel: "icon", type: "image/png", sizes: "192x192", href: "/icon-192.png" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
    ],
  }),
  component: Root,
});

function Root() {
  const setHydrated = useGuide((s) => s.setHydrated);
  useEffect(() => {
    const pending = useGuide.persist.rehydrate();
    void Promise.resolve(pending).finally(() => setHydrated(true));
  }, [setHydrated]);

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <PreviewHostBridge />
        <AuthProvider>
          <Outlet />
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  );
}
