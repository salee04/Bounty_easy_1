export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".ic-assets.json5","favicon.ico","logo2.svg"]),
	mimeTypes: {".json5":"application/json5",".svg":"image/svg+xml"},
	_: {
		client: {"start":"_app/immutable/entry/start.DWfNzLaI.js","app":"_app/immutable/entry/app.Bvo4I2qP.js","imports":["_app/immutable/entry/start.DWfNzLaI.js","_app/immutable/chunks/entry.1PaAIOQ8.js","_app/immutable/chunks/scheduler.W2pu3yam.js","_app/immutable/entry/app.Bvo4I2qP.js","_app/immutable/chunks/preload-helper.C1FmrZbK.js","_app/immutable/chunks/scheduler.W2pu3yam.js","_app/immutable/chunks/index.Ca14tyrq.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
