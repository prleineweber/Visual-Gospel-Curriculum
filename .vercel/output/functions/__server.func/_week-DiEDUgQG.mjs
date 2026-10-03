import { i as __toESM } from "./_runtime.mjs";
import { n as WEEKS, o as weekByNumber, s as weekFileBase } from "./_ssr/data-DNwYy4NH.mjs";
import { S as require_jsx_runtime, X as require_react, b as useNavigate, y as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { r as Route$1 } from "./_ssr/router-BJqiPrQy.mjs";
import { t as Shell } from "./_ssr/Shell-UQz4vjBr.mjs";
import { t as cn } from "./_ssr/cn-Ccejyh36.mjs";
import { t as Slide } from "./_ssr/Slide-BWvsu2pu.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_week-DiEDUgQG.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Deck({ week }) {
	const navigate = useNavigate();
	const stage = (0, import_react.useRef)(null);
	const prev = weekByNumber(week.n - 1);
	const next = weekByNumber(week.n + 1);
	const base = weekFileBase(week);
	(0, import_react.useEffect)(() => {
		function onKey(e) {
			const target = e.target;
			if (target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement) return;
			if (e.key === "ArrowRight" && next) navigate({
				to: "/slides/$week",
				params: { week: String(next.n) }
			});
			if (e.key === "ArrowLeft" && prev) navigate({
				to: "/slides/$week",
				params: { week: String(prev.n) }
			});
		}
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [
		navigate,
		next,
		prev
	]);
	function go(n) {
		navigate({
			to: "/slides/$week",
			params: { week: String(n) }
		});
	}
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
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/resources",
					className: "text-sm font-semibold underline decoration-line-strong underline-offset-4",
					children: "Resources"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm text-muted",
					children: [
						"Week ",
						week.n,
						" of 30 · ",
						week.word
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref: stage,
				className: "deck-stage mt-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slide, { week })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex flex-wrap gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						disabled: !prev,
						onClick: () => prev && go(prev.n),
						className: "inline-flex min-h-11 items-center rounded-full border border-line-strong px-4 text-sm font-semibold disabled:opacity-40",
						children: "Previous"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						disabled: !next,
						onClick: () => next && go(next.n),
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
						href: `/slides/${base}.jpg`,
						download: true,
						className: "inline-flex min-h-11 items-center rounded-full border border-line-strong px-4 text-sm font-semibold",
						children: "Download this slide"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/the-visual-gospel-slides.pdf",
						download: true,
						className: "inline-flex min-h-11 items-center rounded-full border border-line-strong px-4 text-sm font-semibold",
						children: "Download the deck"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "mt-4 flex gap-1 overflow-x-auto pb-1",
				"aria-label": "Weeks",
				children: WEEKS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => go(item.n),
					"aria-current": item.n === week.n ? "true" : void 0,
					className: cn("inline-flex size-11 shrink-0 items-center justify-center rounded-full border text-sm font-semibold", item.n === week.n ? "border-ink bg-ink text-elevated" : "border-line"),
					children: item.n
				}, item.n))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted",
				children: "Arrow keys move between weeks."
			})
		]
	});
}
function SlidePage() {
	const week = Route$1.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Deck, { week }) });
}
//#endregion
export { SlidePage as component };
