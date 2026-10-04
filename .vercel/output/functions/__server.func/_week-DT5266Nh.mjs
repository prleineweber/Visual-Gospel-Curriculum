import { i as __toESM } from "./_runtime.mjs";
import { S as require_jsx_runtime, X as require_react, b as useNavigate, y as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { t as Shell } from "./_ssr/Shell-UQz4vjBr.mjs";
import { d as Slide, h as cn, l as SLIDES, r as Route$1, u as SLIDE_COUNT, v as weekByNumber, y as weekFileBase } from "./_ssr/router-C5OjXpej.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_week-DT5266Nh.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Deck({ week, slide }) {
	const navigate = useNavigate();
	const stage = (0, import_react.useRef)(null);
	const prevWeek = weekByNumber(week.n - 1);
	const nextWeek = weekByNumber(week.n + 1);
	const s = Math.min(SLIDE_COUNT, Math.max(1, slide));
	const base = weekFileBase(week);
	function go(weekN, slideN) {
		navigate({
			to: "/slides/$week",
			params: { week: String(weekN) },
			search: { s: slideN },
			replace: true
		});
	}
	(0, import_react.useEffect)(() => {
		function onKey(e) {
			const target = e.target;
			if (target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement) return;
			if (e.key === "ArrowRight" || e.key === "PageDown") {
				e.preventDefault();
				if (s < SLIDE_COUNT) go(week.n, s + 1);
			}
			if (e.key === "ArrowLeft" || e.key === "PageUp") {
				e.preventDefault();
				if (s > 1) go(week.n, s - 1);
			}
			if (e.key === "Home") go(week.n, 1);
			if (e.key === "End") go(week.n, SLIDE_COUNT);
		}
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [s, week.n]);
	function present() {
		const node = stage.current;
		if (!node) return;
		if (document.fullscreenElement) {
			document.exitFullscreen();
			return;
		}
		node.requestFullscreen();
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-6xl px-4 py-6 md:px-6 md:py-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/resources",
						className: "text-sm font-semibold underline decoration-line-strong underline-offset-4",
						children: "Resources"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/week/$week",
						params: { week: String(week.n) },
						className: "text-sm font-semibold underline decoration-line-strong underline-offset-4",
						children: "Lesson"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm text-muted",
					children: [
						"Week ",
						week.n,
						" of 30 · ",
						week.word,
						" · ",
						SLIDES[s - 1].label
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref: stage,
				className: "deck-stage mt-4",
				onClick: () => {
					if (document.fullscreenElement && s < SLIDE_COUNT) go(week.n, s + 1);
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slide, {
					week,
					index: s - 1
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex flex-wrap gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						disabled: s <= 1,
						onClick: () => go(week.n, s - 1),
						className: "inline-flex min-h-11 items-center rounded-full border border-line-strong px-4 text-sm font-semibold disabled:opacity-40",
						children: "Previous"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						disabled: s >= SLIDE_COUNT,
						onClick: () => go(week.n, s + 1),
						className: "inline-flex min-h-11 items-center rounded-full bg-ink px-4 text-sm font-semibold text-elevated disabled:opacity-40",
						children: "Next"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: present,
						className: "inline-flex min-h-11 items-center rounded-full border border-line-strong px-4 text-sm font-semibold",
						children: "Present"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: `/decks/${base}.zip`,
						download: true,
						className: "inline-flex min-h-11 items-center rounded-full border border-line-strong px-4 text-sm font-semibold",
						children: "Download slide deck"
					}),
					prevWeek && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => go(prevWeek.n, 1),
						className: "inline-flex min-h-11 items-center rounded-full border border-line px-4 text-sm font-semibold",
						children: ["Week ", prevWeek.n]
					}),
					nextWeek && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => go(nextWeek.n, 1),
						className: "inline-flex min-h-11 items-center rounded-full border border-line px-4 text-sm font-semibold",
						children: ["Week ", nextWeek.n]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "mt-4 flex gap-2 overflow-x-auto pb-1",
				"aria-label": "Slides in this week",
				children: SLIDES.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => go(week.n, i + 1),
					"aria-current": i + 1 === s ? "true" : void 0,
					className: cn("inline-flex min-h-11 shrink-0 items-center rounded-full border px-3 text-sm font-semibold", i + 1 === s ? "border-ink bg-ink text-elevated" : "border-line"),
					children: [
						i + 1,
						" ",
						item.label
					]
				}, item.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted",
				children: "Arrow keys move through this week. In Present, click the slide to advance."
			})
		]
	});
}
function SlidePage() {
	const week = Route$1.useLoaderData();
	const { s } = Route$1.useSearch();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Deck, {
		week,
		slide: s ?? 1
	}) });
}
//#endregion
export { SlidePage as component };
