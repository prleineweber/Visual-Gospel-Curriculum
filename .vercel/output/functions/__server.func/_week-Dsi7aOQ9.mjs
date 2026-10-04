import { r as Slide } from "./_ssr/Slide-Bg0mTIzY.mjs";
import { X as require_jsx_runtime } from "./_libs/@tanstack/react-router+[...].mjs";
import { i as Route$3 } from "./_ssr/router-TAlmKPHY.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_week-Dsi7aOQ9.js
var import_jsx_runtime = require_jsx_runtime();
function ExportSlide() {
	const week = Route$3.useLoaderData();
	const { s } = Route$3.useSearch();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "bg-paper",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slide, {
			week,
			index: (s ?? 1) - 1
		})
	});
}
//#endregion
export { ExportSlide as component };
