import { X as require_jsx_runtime } from "./_libs/@tanstack/react-router+[...].mjs";
import { n as Route } from "./_ssr/router-DdEs_TEJ.mjs";
import { t as Shell } from "./_ssr/Shell-UQz4vjBr.mjs";
import { t as WeekBody } from "./_ssr/WeekBody-CkUdWvxj.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_week-CuzETmdu.js
var import_jsx_runtime = require_jsx_runtime();
function WeekPage() {
	const week = Route.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "mx-auto max-w-3xl px-4 py-8 md:px-6 md:py-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WeekBody, { week })
	}) });
}
//#endregion
export { WeekPage as component };
