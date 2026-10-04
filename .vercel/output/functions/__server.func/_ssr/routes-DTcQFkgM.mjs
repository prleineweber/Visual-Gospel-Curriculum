import { S as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Shell } from "./Shell-UQz4vjBr.mjs";
import { d as PARTS, f as WEEKS, g as partOf, m as cn, o as meetingLabel, s as useGuide } from "./router-BiSVah47.mjs";
import { t as HowTo } from "./HowTo-GGZ_M1T2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DTcQFkgM.js
var import_jsx_runtime = require_jsx_runtime();
function Home() {
	const hydrated = useGuide((s) => s.hydrated);
	const groupName = useGuide((s) => s.groupName);
	const startDate = useGuide((s) => s.startDate);
	const done = useGuide((s) => s.done);
	const setGroupName = useGuide((s) => s.setGroupName);
	const setStartDate = useGuide((s) => s.setStartDate);
	const next = WEEKS.find((w) => !done.includes(w.n)) ?? WEEKS[0];
	const finished = done.length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-6xl px-4 py-8 md:px-6 md:py-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col items-center gap-8 md:flex-row md:items-start md:gap-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "order-2 min-w-0 flex-1 md:order-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-semibold tracking-widest text-muted uppercase",
							children: "Free for your church, class, or home"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "font-display mt-3 max-w-3xl text-5xl leading-none font-semibold tracking-tight md:text-6xl",
							children: "Thirty weeks on the gospel."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 max-w-2xl text-lg leading-relaxed",
							children: "A leader guide for The Visual Gospel. Each gathering gives you the word, the book’s definition, the memory verse, an icebreaker, a passage your group has not already journaled, questions that start a real conversation, and a missional challenge — one action and one true sentence for someone far from Jesus."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex flex-wrap gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/week/$week",
									params: { week: String(next.n) },
									className: "inline-flex min-h-11 items-center rounded-full bg-ink px-5 text-sm font-semibold text-elevated",
									children: finished > 0 && finished < 30 ? `Continue · Week ${next.n}, ${next.word}` : `Start with ${next.word}`
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "/the-visual-gospel-leader-guide.pdf",
									download: true,
									className: "inline-flex min-h-11 items-center rounded-full border border-line-strong px-5 text-sm font-semibold",
									children: "Download the PDF"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/resources",
									className: "inline-flex min-h-11 items-center rounded-full border border-line-strong px-5 text-sm font-semibold",
									children: "Resources"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "https://visualgospelbook.com/",
									className: "inline-flex min-h-11 items-center px-2 text-sm font-semibold underline decoration-line-strong underline-offset-4",
									children: "The book"
								})
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "https://visualgospelbook.com/",
					className: "order-1 w-40 shrink-0 md:order-2 md:w-64",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/cover.jpg",
						alt: "Cover of The Visual Gospel by Philip Leineweber",
						width: 780,
						height: 1004,
						className: "w-full border border-line bg-elevated shadow-md"
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-10 grid gap-4 rounded-card border border-line bg-elevated p-4 md:grid-cols-2 md:p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "block text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-semibold",
						children: "Group name"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: hydrated ? groupName : "",
						onChange: (e) => setGroupName(e.target.value),
						placeholder: "Wednesday night, youth, membership class",
						className: "mt-2 min-h-11 w-full rounded-lg border border-line-strong bg-paper px-3"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "block text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-semibold",
							children: "First gathering"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "date",
							value: hydrated ? startDate : "",
							onChange: (e) => setStartDate(e.target.value),
							className: "mt-2 min-h-11 w-full rounded-lg border border-line-strong bg-paper px-3"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-1 block text-muted",
							children: "Dates fill in on each week. They stay on this device."
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-end justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl font-semibold tracking-tight",
						children: "The thirty weeks"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-muted",
						children: [finished, " of 30 taught"]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-5 space-y-8",
					children: PARTS.map((part) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
							className: "text-xs font-semibold tracking-widest text-muted uppercase",
							children: [
								"Part ",
								part.roman,
								" · ",
								part.title
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 max-w-2xl text-sm leading-relaxed text-muted",
							children: part.subtitle
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-3 divide-y divide-line border-y border-line",
							children: part.weeks.map((n) => {
								const week = WEEKS[n - 1];
								const taught = done.includes(n);
								const when = hydrated ? meetingLabel(startDate, n) : null;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/week/$week",
									params: { week: String(n) },
									className: "flex min-h-14 items-center gap-3 py-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: cn("flex size-8 shrink-0 items-center justify-center rounded-full border text-sm font-semibold", taught ? "border-ink bg-ink text-elevated" : "border-line-strong"),
											"aria-hidden": true,
											children: n
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "min-w-0 flex-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "block font-display text-xl leading-tight font-semibold",
												children: week.word
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "block truncate text-sm text-muted",
												children: [week.ref, when ? ` · ${when}` : ""]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "hidden text-sm text-muted sm:block",
											children: partOf(week).title
										})
									]
								}) }, n);
							})
						})
					] }, part.id))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mt-16 border-t border-line pt-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HowTo, {})
			})
		]
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Home, {}) });
}
//#endregion
export { Index as component };
