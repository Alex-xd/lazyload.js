/**
 *  @description 用于懒加载页面中一些非必要的图片，优化用户体验，节省带宽
 *
 *  @author Alexxd
 */
;(function (factory) {
	var registeredInModuleLoader = false;
	if (typeof define === 'function' && define.amd) {
		define(factory);
		registeredInModuleLoader = true;
	}
	if (typeof exports === 'object') {
		module.exports = factory();
		registeredInModuleLoader = true;
	}
	if (!registeredInModuleLoader) {
		var lazyload = window.lazyload;
		var api = window.lazyload = factory();
		api.noConflict = function () {
			window.lazyload = OldCookies;
			return api;
		};
	}
}(function(){
	//施工中
}));