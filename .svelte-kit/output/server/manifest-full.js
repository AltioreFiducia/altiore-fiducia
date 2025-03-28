export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","favicon.png","images/.DS_Store","images/altiore-logo.png","images/home-about-us.webp","images/service-aviation.webp","images/service-background.webp","images/service-construction.webp","images/service-cyber.webp","images/service-energy.webp","images/service-maritime.webp","images/service-personal.webp","images/service-property.webp","robots.txt","sitemap.xml","videos/.DS_Store","videos/home-video.mp4"]),
	mimeTypes: {".png":"image/png",".webp":"image/webp",".txt":"text/plain",".xml":"text/xml",".mp4":"video/mp4"},
	_: {
		client: {start:"_app/immutable/entry/start.AQOJ5ZFj.js",app:"_app/immutable/entry/app.CU6U-WEz.js",imports:["_app/immutable/entry/start.AQOJ5ZFj.js","_app/immutable/chunks/DMWyXSxF.js","_app/immutable/chunks/B7zSZc4c.js","_app/immutable/entry/app.CU6U-WEz.js","_app/immutable/chunks/CWnU2Bey.js","_app/immutable/chunks/B7zSZc4c.js","_app/immutable/chunks/A7N6otk2.js","_app/immutable/chunks/DM1WIT8Y.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about-us",
				pattern: /^\/about-us\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/services",
				pattern: /^\/services\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
