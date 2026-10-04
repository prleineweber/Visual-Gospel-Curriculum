import { X as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Shell-UQz4vjBr.js
var import_jsx_runtime = require_jsx_runtime();
function Shell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "no-print sticky top-0 z-30 border-b border-line bg-paper/95 backdrop-blur-md",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 md:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						"aria-label": "The Visual Gospel Leader Guide",
						className: "flex min-w-0 items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/cover.jpg",
							alt: "",
							width: 780,
							height: 1004,
							className: "h-11 w-auto border border-line"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "hidden min-w-0 sm:block",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-semibold tracking-widest text-muted uppercase",
								children: "The Visual Gospel"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-xl leading-none font-semibold",
								children: "Leader Guide"
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						className: "flex shrink-0 items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/resources",
								className: "inline-flex min-h-11 items-center rounded-full border border-line-strong px-3 text-sm font-semibold",
								children: "Resources"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/print",
								className: "hidden min-h-11 items-center rounded-full border border-line-strong px-3 text-sm font-semibold sm:inline-flex",
								children: "Print"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "/the-visual-gospel-leader-guide.pdf",
								download: true,
								className: "inline-flex min-h-11 items-center rounded-full bg-ink px-3 text-sm font-semibold text-elevated",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "sm:hidden",
									children: "PDF"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "hidden sm:inline",
									children: "Download PDF"
								})]
							})
						]
					})]
				})
			}),
			children,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "no-print border-t border-line",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl px-4 py-8 text-sm leading-relaxed text-muted md:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"A free guide to accompany",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "underline decoration-line-strong underline-offset-2",
							href: "https://visualgospelbook.com/",
							children: "The Visual Gospel"
						}),
						" ",
						"by Philip Leineweber, and the",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "underline decoration-line-strong underline-offset-2",
							href: "https://cards.visualgospelbook.com/",
							children: "flashcard app"
						}),
						". Definitions and memory verses are from the book. Group questions are not the devotional’s reflection questions."
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3",
						children: "Scripture quotations are from the ESV® Bible (The Holy Bible, English Standard Version®), © 2001 by Crossway, a publishing ministry of Good News Publishers. Used by permission. All rights reserved."
					})]
				})
			})
		]
	});
}
//#endregion
export { Shell as t };
