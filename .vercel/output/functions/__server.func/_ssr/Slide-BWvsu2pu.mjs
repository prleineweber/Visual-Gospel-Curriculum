import { a as partOf, r as artSrc } from "./data-DNwYy4NH.mjs";
import { S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Slide-BWvsu2pu.js
var import_jsx_runtime = require_jsx_runtime();
function Slide({ week }) {
	const part = partOf(week);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "slide-frame",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "slide-canvas",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex w-2/5 items-center justify-center px-16 py-16",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: artSrc(week.n),
					alt: week.alt,
					className: "max-h-full max-w-full border border-line bg-elevated object-contain"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex w-3/5 flex-col pr-20 py-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-lg font-semibold tracking-widest text-muted uppercase",
						children: [
							"Week ",
							week.n,
							" of 30",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mx-3",
								children: "·"
							}),
							"Part ",
							part.roman,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mx-3",
								children: "·"
							}),
							part.title
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display mt-4 text-7xl leading-none font-semibold tracking-tight",
						children: week.word
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-xl leading-snug text-muted",
						children: week.language
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-8 text-3xl leading-snug",
						children: week.definition
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 border-l-4 border-ink pl-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-semibold tracking-widest text-muted uppercase",
								children: "Memory verse"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-2xl leading-snug",
								children: week.verse
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-lg font-semibold",
								children: week.ref
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-auto border-t border-line pt-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-semibold tracking-widest text-muted uppercase",
							children: "Say it together"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-2xl leading-snug",
							children: week.say
						})]
					})
				]
			})]
		})
	});
}
//#endregion
export { Slide as t };
