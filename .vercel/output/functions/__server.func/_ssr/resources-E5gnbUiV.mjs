import { i as __toESM } from "../_runtime.mjs";
import { n as WEEKS, s as weekFileBase, t as PARTS } from "./data-DNwYy4NH.mjs";
import { S as require_jsx_runtime, X as require_react, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Shell } from "./Shell-UQz4vjBr.mjs";
import { t as cn } from "./cn-Ccejyh36.mjs";
import { t as Slide } from "./Slide-BWvsu2pu.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/resources-E5gnbUiV.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var BUY = "https://www.amazon.com/dp/B0HLC7QP8N";
function Resources() {
	const [open, setOpen] = (0, import_react.useState)(1);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-6xl px-4 py-8 md:px-6 md:py-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-semibold tracking-widest text-muted uppercase",
				children: "For the leader"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display mt-3 text-5xl leading-none font-semibold tracking-tight md:text-6xl",
				children: "Resources"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 max-w-2xl text-lg leading-relaxed",
				children: "The devotional, the full guide, a PDF for each week, and a 16:9 slide you can project."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 grid gap-4 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "flex gap-4 rounded-card border border-line bg-elevated p-4 md:p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/cover.jpg",
						alt: "Cover of The Visual Gospel",
						width: 780,
						height: 1004,
						className: "w-24 shrink-0 border border-line sm:w-28"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-2xl font-semibold",
								children: "The devotional"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-muted",
								children: "Thirty days. The drawings, the definitions, and the personal reflection questions live in the book."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: BUY,
								className: "mt-4 inline-flex min-h-11 items-center rounded-full bg-ink px-4 text-sm font-semibold text-elevated",
								children: "Buy the devotional"
							})
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "flex flex-col rounded-card border border-line bg-elevated p-4 md:p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-2xl font-semibold",
							children: "The full leader guide"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-muted",
							children: "All thirty weeks, with leader notes, the cover, and a code to purchase the book. Free to copy for your church. Please do not sell it."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "/the-visual-gospel-leader-guide.pdf",
							download: true,
							className: "mt-auto inline-flex min-h-11 w-fit items-center rounded-full border border-line-strong px-4 text-sm font-semibold",
							children: "Download the full PDF"
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl font-semibold tracking-tight",
						children: "Each week"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 max-w-2xl text-sm leading-relaxed text-muted",
						children: "The lesson PDF is that week’s gathering, leader notes included. The slide is a 16:9 image: the drawing, the word, the definition, and the memory verse."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 border-t border-line",
						children: PARTS.map((part) => {
							const shown = open === part.id;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "border-b border-line",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									"aria-expanded": shown,
									onClick: () => setOpen(shown ? 0 : part.id),
									className: "flex min-h-14 w-full items-center justify-between gap-3 py-3 text-left",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-xs font-semibold tracking-widest text-muted uppercase",
										children: ["Part ", part.roman]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block font-display text-2xl leading-tight font-semibold",
										children: part.title
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm font-semibold text-muted",
										children: shown ? "Hide" : "Show"
									})]
								}), shown && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "pb-3",
									children: part.weeks.map((n) => {
										const week = WEEKS[n - 1];
										const base = weekFileBase(week);
										return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex flex-col gap-3 border-t border-line py-3 sm:flex-row sm:items-center",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "min-w-0 flex-1",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "font-display text-xl font-semibold",
													children: [
														week.n,
														". ",
														week.word
													]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "block text-sm text-muted",
													children: week.ref
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "flex flex-wrap gap-2",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
														href: `/lessons/${base}.pdf`,
														download: true,
														className: "inline-flex min-h-11 items-center rounded-full border border-line-strong px-3 text-sm font-semibold",
														children: "Lesson PDF"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
														href: `/slides/${base}.jpg`,
														download: true,
														className: "inline-flex min-h-11 items-center rounded-full border border-line-strong px-3 text-sm font-semibold",
														children: "Slide"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
														to: "/slides/$week",
														params: { week: String(week.n) },
														className: cn("inline-flex min-h-11 items-center px-2 text-sm font-semibold underline decoration-line-strong underline-offset-4"),
														children: "Open"
													})
												]
											})]
										}, n);
									})
								})]
							}, part.id);
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl font-semibold tracking-tight",
						children: "Slide deck"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 max-w-2xl text-sm leading-relaxed text-muted",
						children: "Thirty slides, 16:9, one word each. Present them in the room, or download the images and the deck."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 max-w-3xl",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slide, { week: WEEKS[0] })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/slides/$week",
							params: { week: "1" },
							className: "inline-flex min-h-11 items-center rounded-full bg-ink px-5 text-sm font-semibold text-elevated",
							children: "Open the deck"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "/the-visual-gospel-slides.pdf",
							download: true,
							className: "inline-flex min-h-11 items-center rounded-full border border-line-strong px-5 text-sm font-semibold",
							children: "Download the deck"
						})]
					})
				]
			})
		]
	});
}
function ResourcesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Resources, {}) });
}
//#endregion
export { ResourcesPage as component };
