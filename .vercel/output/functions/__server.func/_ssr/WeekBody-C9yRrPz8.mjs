import { S as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as partOf, d as BOOK, g as isPartStart, h as cn, m as artSrc, o as meetingLabel, s as useGuide, v as weekByNumber } from "./router-B4JVgVtG.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/WeekBody-C9yRrPz8.js
var import_jsx_runtime = require_jsx_runtime();
var STEPS = [
	[
		"ice",
		"Icebreaker",
		"7 min"
	],
	[
		"word",
		"The Word",
		"8 min"
	],
	[
		"bible",
		"Open the Bible",
		"15 min"
	],
	[
		"talk",
		"Around the room",
		"20 min"
	],
	[
		"say",
		"Say it",
		"5 min"
	],
	[
		"go",
		"Go",
		"5 min"
	],
	[
		"pray",
		"Pray",
		"8 min"
	]
];
function Core({ on }) {
	if (!on) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "ml-2 align-middle text-xs font-semibold tracking-widest text-muted uppercase",
		children: "Core"
	});
}
function Aim({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
		className: "leader-only mt-2 border-l-2 border-line-strong pl-3 text-sm leading-relaxed text-muted",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-semibold text-ink",
			children: "Leader. "
		}), children]
	});
}
function PromptBlock({ n, prompt }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
		className: "border-t border-line py-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "leading-relaxed",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "mr-2 font-display text-lg font-semibold",
					children: [n, "."]
				}),
				prompt.q,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Core, { on: prompt.star })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Aim, { children: prompt.aim })]
	});
}
function WeekBody({ week, mode = "screen" }) {
	const part = partOf(week);
	const printing = mode === "print";
	const hydrated = useGuide((s) => s.hydrated);
	const startDate = useGuide((s) => s.startDate);
	const hideNotes = useGuide((s) => s.hideNotes);
	const done = useGuide((s) => s.done.includes(week.n));
	const note = useGuide((s) => s.notes[String(week.n)] ?? "");
	const toggleDone = useGuide((s) => s.toggleDone);
	const setNote = useGuide((s) => s.setNote);
	const setHideNotes = useGuide((s) => s.setHideNotes);
	const when = hydrated ? meetingLabel(startDate, week.n) : null;
	const prev = weekByNumber(week.n - 1);
	const next = weekByNumber(week.n + 1);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: cn(printing && "print-break", !printing && hideNotes && "hide-notes"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs font-semibold tracking-widest text-muted uppercase",
					children: [
						"Part ",
						part.roman,
						" · ",
						part.title,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mx-2",
							children: "·"
						}),
						"Week ",
						week.n,
						" of 30"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-2 flex flex-wrap items-end justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-5xl leading-none font-semibold tracking-tight md:text-6xl",
						children: week.word
					}), when && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted",
						children: when
					})]
				}),
				!printing && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "no-print mt-4 flex flex-wrap gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => toggleDone(week.n),
							className: cn("inline-flex min-h-11 items-center rounded-full border px-4 text-sm font-semibold", done ? "border-ink bg-ink text-elevated" : "border-line-strong"),
							children: done ? "Marked taught" : "Mark taught"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setHideNotes(!hideNotes),
							className: "inline-flex min-h-11 items-center rounded-full border border-line-strong px-4 text-sm font-semibold",
							children: hideNotes ? "Show leader notes" : "Hide notes to project"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/slides/$week",
							params: { week: String(week.n) },
							className: "inline-flex min-h-11 items-center rounded-full bg-ink px-4 text-sm font-semibold text-elevated",
							children: "Slide deck"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/print",
							search: { week: week.n },
							className: "inline-flex min-h-11 items-center rounded-full border border-line-strong px-4 text-sm font-semibold",
							children: "Print this week"
						})
					]
				})
			] }),
			!printing && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "no-print mt-6 flex gap-2 overflow-x-auto pb-1",
				"aria-label": "Session movements",
				children: STEPS.map(([id, label, time]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: `#${id}`,
					className: "inline-flex min-h-11 shrink-0 items-center rounded-full border border-line bg-elevated px-3 text-sm",
					children: [label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "ml-2 text-muted",
						children: time
					})]
				}, id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
				className: "mt-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: artSrc(week.n),
					alt: week.alt,
					className: "mx-auto w-full max-w-lg bg-elevated object-contain"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
					className: "mx-auto mt-3 max-w-lg text-sm leading-relaxed text-muted",
					children: week.picture
				})]
			}),
			isPartStart(week) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "mt-6 rounded-card border border-line bg-subtle px-4 py-4 md:px-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs font-semibold tracking-widest text-muted uppercase",
					children: [
						"Open Part ",
						part.roman,
						" by saying"
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 leading-relaxed",
					children: part.open
				})]
			}),
			week.lookBack && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "mt-4 rounded-card border border-line px-4 py-4 md:px-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold tracking-widest text-muted uppercase",
					children: "Optional, three minutes"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 leading-relaxed",
					children: week.lookBack
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-8 rounded-card border border-line bg-elevated px-4 py-4 md:px-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-xl font-semibold",
					children: "Before you gather"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-2 list-disc space-y-1 pl-5 text-sm leading-relaxed",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							"Read Day ",
							week.n,
							", ",
							week.word,
							", in The Visual Gospel. Do not reteach the essay."
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							"Read ",
							week.passageRef,
							" in your Bible. The excerpt below is only a backup."
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Your people should already have answered the day’s reflection questions. Do not ask those again." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Leave with a name. The missional challenge only works if someone is named before you pray." })
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "ice",
				className: "mt-10 scroll-mt-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold tracking-widest text-muted uppercase",
						children: "1 · Icebreaker · 7 min"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display mt-1 text-3xl font-semibold",
						children: "Open the room"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-lg leading-relaxed",
						children: week.icebreaker
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Aim, { children: [week.iceAim, " Say that passing is allowed, especially the first few weeks."] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "word",
				className: "mt-10 scroll-mt-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold tracking-widest text-muted uppercase",
						children: "2 · The Word · 8 min"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display mt-1 text-3xl font-semibold",
						children: "See it, then say it"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 rounded-card bg-subtle px-4 py-4 md:px-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-semibold tracking-widest text-muted uppercase",
							children: "If you need the words"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 leading-relaxed",
							children: week.show
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "mt-6 space-y-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-xs font-semibold tracking-widest text-muted uppercase",
								children: "Definition, from the book"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-1 text-lg leading-relaxed",
								children: week.definition
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-xs font-semibold tracking-widest text-muted uppercase",
								children: "In the original language"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-1 leading-relaxed text-muted",
								children: week.language
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dt", {
								className: "text-xs font-semibold tracking-widest text-muted uppercase",
								children: ["Memory verse · ", week.ref]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "font-display mt-2 text-xl leading-snug italic",
								children: week.verse
							})] })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 text-sm leading-relaxed",
						children: [
							"Read day ",
							week.n,
							" of",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: "font-semibold underline decoration-line-strong underline-offset-2",
								href: BOOK,
								target: "_blank",
								rel: "noopener noreferrer",
								children: "The Visual Gospel"
							}),
							" ",
							"before you teach it. The drawing and the personal questions are there."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 text-sm leading-relaxed",
						children: [
							"Together, open the",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: "underline decoration-line-strong underline-offset-2",
								href: "https://cards.visualgospelbook.com/",
								children: "flashcard"
							}),
							" ",
							"for ",
							week.word,
							". Say the word, the definition, and the verse once. Then put the phone away."
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "bible",
				className: "mt-10 scroll-mt-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold tracking-widest text-muted uppercase",
						children: "3 · Open the Bible · 15 min"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display mt-1 text-3xl font-semibold",
						children: week.passageRef
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 leading-relaxed text-muted",
						children: week.passageWhy
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", {
						className: "mt-4 border-l-2 border-ink pl-4 leading-relaxed",
						children: week.passage
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "leader-only mt-3 text-sm text-muted",
						children: "Have two readers if you can. Bibles open. The excerpt is only here so a forgotten Bible does not stop the night."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-6 font-display text-xl font-semibold",
						children: "From the passage"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", { children: week.fromText.map((prompt, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PromptBlock, {
						n: i + 1,
						prompt
					}, prompt.q)) })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "talk",
				className: "mt-10 scroll-mt-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold tracking-widest text-muted uppercase",
						children: "4 · Around the room · 20 min"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display mt-1 text-3xl font-semibold",
						children: "A conversation this chapter did not assign"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", { children: week.talk.map((prompt, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PromptBlock, {
						n: i + 3,
						prompt
					}, prompt.q)) })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "say",
				className: "mt-10 scroll-mt-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold tracking-widest text-muted uppercase",
						children: "5 · Say it · 5 min"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display mt-1 text-3xl font-semibold",
						children: "In one sentence"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display mt-3 text-2xl leading-snug font-medium",
						children: week.say
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm leading-relaxed text-muted",
						children: "Ask for two volunteers, not the whole circle. They may look at the sentence, then try it without looking. Clumsy and true is the goal."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "go",
				className: "mt-10 scroll-mt-24 rounded-card border border-ink px-4 py-5 md:px-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold tracking-widest text-muted uppercase",
						children: "6 · This week · 5 min"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display mt-1 text-3xl font-semibold",
						children: "Missional challenge"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm leading-relaxed text-muted",
						children: "Before next week, carry this word to someone far from Jesus — a neighbor, a classmate, a coworker, a friend. Do it with a real action and with a true sentence. Name the person before you pray."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-lg leading-relaxed",
						children: week.mission
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Aim, { children: [week.missionAim, " Next week, before the icebreaker, take one minute. Who went, and what happened? One sentence. No speeches."] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "pray",
				className: "mt-10 scroll-mt-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold tracking-widest text-muted uppercase",
						children: "7 · Pray · 8 min"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display mt-1 text-3xl font-semibold",
						children: "Pray these, and leave room for others"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "mt-3 list-decimal space-y-2 pl-5 leading-relaxed",
						children: week.pray.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: line }, line))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "leader-only mt-10 rounded-card border border-line bg-subtle px-4 py-4 md:px-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl font-semibold",
						children: "Before you stumble"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 leading-relaxed",
						children: week.watch
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-4 text-sm font-semibold tracking-widest text-muted uppercase",
						children: "With students"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 leading-relaxed",
						children: week.youth
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-4 text-sm font-semibold tracking-widest text-muted uppercase",
						children: "If you still have time"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 leading-relaxed",
						children: week.further
					})
				]
			}),
			!printing && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "no-print mt-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "text-sm font-semibold",
						htmlFor: `note-${week.n}`,
						children: "Notes for your group"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						id: `note-${week.n}`,
						value: hydrated ? note : "",
						onChange: (e) => setNote(week.n, e.target.value),
						rows: 4,
						placeholder: "Room setup, people to follow up with, what landed last time.",
						className: "mt-2 w-full rounded-card border border-line-strong bg-elevated px-3 py-3 text-base leading-relaxed"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-5",
						children: [prev ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/week/$week",
							params: { week: String(prev.n) },
							className: "min-h-11 text-sm font-semibold underline decoration-line-strong underline-offset-4",
							children: [
								"Week ",
								prev.n,
								" · ",
								prev.word
							]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}), next ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/week/$week",
							params: { week: String(next.n) },
							className: "inline-flex min-h-11 items-center rounded-full bg-ink px-4 text-sm font-semibold text-elevated",
							children: [
								"Week ",
								next.n,
								" · ",
								next.word
							]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							className: "inline-flex min-h-11 items-center rounded-full bg-ink px-4 text-sm font-semibold text-elevated",
							children: "Back to all weeks"
						})]
					})
				]
			})
		]
	});
}
//#endregion
export { WeekBody as t };
