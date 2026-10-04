import { S as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Route$5, f as PARTS, p as WEEKS, v as weekByNumber } from "./router-DqGjQ7mM.mjs";
import { t as WeekBody } from "./WeekBody-uNyiz3SY.mjs";
import { t as HowTo } from "./HowTo-GGZ_M1T2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/print-CFzOiPXr.js
var import_jsx_runtime = require_jsx_runtime();
function PrintGuide({ only }) {
	const weeks = only ? [weekByNumber(only)].filter((w) => w != null) : WEEKS;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-3xl bg-paper px-4 py-8 md:px-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "no-print mb-8 flex flex-wrap items-center justify-between gap-3 border-b border-line pb-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "text-sm font-semibold underline decoration-line-strong underline-offset-4",
					children: "Back to the guide"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => window.print(),
					className: "inline-flex min-h-11 items-center rounded-full bg-ink px-4 text-sm font-semibold text-elevated",
					children: "Save as PDF"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "no-print mb-8 text-sm leading-relaxed text-muted",
				children: "In the print dialog, choose Save as PDF. Leader notes are included. This is the version to hand a teacher."
			}),
			!only && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "print-keep pb-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-6 sm:flex-row sm:items-end",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/cover.jpg",
							alt: "Cover of The Visual Gospel by Philip Leineweber",
							width: 780,
							height: 1004,
							className: "w-48 shrink-0 border border-line sm:w-56"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-semibold tracking-widest text-muted uppercase",
									children: "Philip Leineweber"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
									className: "font-display mt-3 text-5xl leading-none font-semibold tracking-tight",
									children: "The Visual Gospel"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display mt-3 text-3xl font-medium",
									children: "Leader Guide"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-5 max-w-xl text-lg leading-relaxed",
									children: "A 30-week study for small groups, classes, youth, and families. To be used alongside the devotional and the flashcard app — not instead of them."
								})
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex items-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/purchase-qr.svg",
							alt: "QR code linking to visualgospelbook.com",
							width: 256,
							height: 256,
							className: "size-28 shrink-0 border border-line bg-elevated p-1"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-2xl font-semibold",
							children: "Purchase the devotional"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 text-sm leading-relaxed text-muted",
							children: [
								"visualgospelbook.com",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"cards.visualgospelbook.com"
							]
						})] })]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "print-break max-w-2xl space-y-4 text-sm leading-relaxed",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-3xl font-semibold",
							children: "About this guide"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "The Visual Gospel Leader Guide is a free companion to The Visual Gospel by Philip Leineweber (ISBN 979-8-1943079-3-7). Definitions and memory verses are taken from the book. The icebreakers, passages, and discussion questions were written for the gathering. They are not the reflection questions, gospel responses, or prayers printed in the devotion. Those belong to the personal reading. Each week ends by sending the group to someone far from Jesus, with one action and one true sentence." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "You may copy, print, and share this guide freely in your church, class, or home. Please do not sell it. The devotional itself remains under its own copyright." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Scripture quotations are from the ESV® Bible (The Holy Bible, English Standard Version®), © 2001 by Crossway, a publishing ministry of Good News Publishers. Used by permission. All rights reserved. The ESV text may not be quoted in any publication made available to the public by a Creative Commons license. The ESV may not be translated into any other language." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "The drawings are the studies created for The Visual Gospel. Week numbers follow the book." })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "print-break mt-10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HowTo, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "print-break mt-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl font-semibold",
						children: "Thirty weeks"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 space-y-6",
						children: PARTS.map((part) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
							className: "text-sm font-semibold tracking-widest text-muted uppercase",
							children: [
								"Part ",
								part.roman,
								" · ",
								part.title
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-2",
							children: part.weeks.map((n) => {
								const week = WEEKS[n - 1];
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex gap-3 border-t border-line py-1.5 text-sm",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "w-8 font-semibold",
											children: n
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "w-36 font-display text-base font-semibold",
											children: week.word
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted",
											children: week.ref
										})
									]
								}, n);
							})
						})] }, part.id))
					})]
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 space-y-12",
				children: weeks.map((week) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WeekBody, {
					week,
					mode: "print"
				}, week.n))
			})
		]
	});
}
function PrintPage() {
	const { week } = Route$5.useSearch();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrintGuide, { only: week });
}
//#endregion
export { PrintPage as component };
