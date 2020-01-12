

scroll_pos = function _get_scroll(){
      if (self.pageYOffset) {
        return {scrollTop:self.pageYOffset,scrollLeft:self.pageXOffset};
      } else if (document.documentElement && document.documentElement.scrollTop) { // Explorer 6 Strict
        return {scrollTop:document.documentElement.scrollTop,scrollLeft:document.documentElement.scrollLeft};
      } else if (document.body) {// all other Explorers
        return {scrollTop:document.body.scrollTop,scrollLeft:document.body.scrollLeft};
      };
    };

/**
* jquery.matchHeight-min.js v0.5.1
* http://brm.io/jquery-match-height/
* License: MIT
*/
(function(b){b.fn.matchHeight=function(a){if(1>=this.length)return this;a="undefined"!==typeof a?a:!0;b.fn.matchHeight._groups.push({elements:this,byRow:a});b.fn.matchHeight._apply(this,a);return this};b.fn.matchHeight._apply=function(a,d){var c=b(a),e=[c];d&&(c.css({display:"block","padding-top":"0","padding-bottom":"0","border-top":"0","border-bottom":"0",height:"100px"}),e=k(c),c.css({display:"","padding-top":"","padding-bottom":"","border-top":"","border-bottom":"",height:""}));b.each(e,function(a,
c){var d=b(c),e=0;d.each(function(){var a=b(this);a.css({display:"block",height:""});a.outerHeight(!1)>e&&(e=a.outerHeight(!1))});d.each(function(){var a=b(this),c=0;"border-box"!==a.css("box-sizing")&&(c+=f(a.css("border-top-width"))+f(a.css("border-bottom-width")),c+=f(a.css("padding-top"))+f(a.css("padding-bottom")));a.css("height",e-c)})});return this};b.fn.matchHeight._applyDataApi=function(){var a={};b("[data-match-height], [data-mh]").each(function(){var d=b(this),c=d.attr("data-match-height");
a[c]=c in a?a[c].add(d):d});b.each(a,function(){this.matchHeight(!0)})};b.fn.matchHeight._groups=[];var g=-1;b.fn.matchHeight._update=function(a){if(a&&"resize"===a.type){a=b(window).width();if(a===g)return;g=a}b.each(b.fn.matchHeight._groups,function(){b.fn.matchHeight._apply(this.elements,this.byRow)})};b(b.fn.matchHeight._applyDataApi);b(window).bind("load resize orientationchange",b.fn.matchHeight._update);var k=function(a){var d=null,c=[];b(a).each(function(){var a=b(this),g=a.offset().top-f(a.css("margin-top")),
h=0<c.length?c[c.length-1]:null;null===h?c.push(a):1>=Math.floor(Math.abs(d-g))?c[c.length-1]=h.add(a):c.push(a);d=g});return c},f=function(a){return parseFloat(a)||0}})(jQuery);

/**
 * Isotope v1.5.25
 * An exquisite jQuery plugin for magical layouts
 * http://isotope.metafizzy.co
 *
 * Commercial use requires one-time purchase of a commercial license
 * http://isotope.metafizzy.co/docs/license.html
 *
 * Non-commercial use is licensed under the MIT License
 *
 * Copyright 2013 Metafizzy
 */
(function(a,b,c){"use strict";var d=a.document,e=a.Modernizr,f=function(a){return a.charAt(0).toUpperCase()+a.slice(1)},g="Moz Webkit O Ms".split(" "),h=function(a){var b=d.documentElement.style,c;if(typeof b[a]=="string")return a;a=f(a);for(var e=0,h=g.length;e<h;e++){c=g[e]+a;if(typeof b[c]=="string")return c}},i=h("transform"),j=h("transitionProperty"),k={csstransforms:function(){return!!i},csstransforms3d:function(){var a=!!h("perspective");if(a){var c=" -o- -moz- -ms- -webkit- -khtml- ".split(" "),d="@media ("+c.join("transform-3d),(")+"modernizr)",e=b("<style>"+d+"{#modernizr{height:3px}}"+"</style>").appendTo("head"),f=b('<div id="modernizr" />').appendTo("html");a=f.height()===3,f.remove(),e.remove()}return a},csstransitions:function(){return!!j}},l;if(e)for(l in k)e.hasOwnProperty(l)||e.addTest(l,k[l]);else{e=a.Modernizr={_version:"1.6ish: miniModernizr for Isotope"};var m=" ",n;for(l in k)n=k[l](),e[l]=n,m+=" "+(n?"":"no-")+l;b("html").addClass(m)}if(e.csstransforms){var o=e.csstransforms3d?{translate:function(a){return"translate3d("+a[0]+"px, "+a[1]+"px, 0) "},scale:function(a){return"scale3d("+a+", "+a+", 1) "}}:{translate:function(a){return"translate("+a[0]+"px, "+a[1]+"px) "},scale:function(a){return"scale("+a+") "}},p=function(a,c,d){var e=b.data(a,"isoTransform")||{},f={},g,h={},j;f[c]=d,b.extend(e,f);for(g in e)j=e[g],h[g]=o[g](j);var k=h.translate||"",l=h.scale||"",m=k+l;b.data(a,"isoTransform",e),a.style[i]=m};b.cssNumber.scale=!0,b.cssHooks.scale={set:function(a,b){p(a,"scale",b)},get:function(a,c){var d=b.data(a,"isoTransform");return d&&d.scale?d.scale:1}},b.fx.step.scale=function(a){b.cssHooks.scale.set(a.elem,a.now+a.unit)},b.cssNumber.translate=!0,b.cssHooks.translate={set:function(a,b){p(a,"translate",b)},get:function(a,c){var d=b.data(a,"isoTransform");return d&&d.translate?d.translate:[0,0]}}}var q,r;e.csstransitions&&(q={WebkitTransitionProperty:"webkitTransitionEnd",MozTransitionProperty:"transitionend",OTransitionProperty:"oTransitionEnd otransitionend",transitionProperty:"transitionend"}[j],r=h("transitionDuration"));var s=b.event,t=b.event.handle?"handle":"dispatch",u;s.special.smartresize={setup:function(){b(this).bind("resize",s.special.smartresize.handler)},teardown:function(){b(this).unbind("resize",s.special.smartresize.handler)},handler:function(a,b){var c=this,d=arguments;a.type="smartresize",u&&clearTimeout(u),u=setTimeout(function(){s[t].apply(c,d)},b==="execAsap"?0:100)}},b.fn.smartresize=function(a){return a?this.bind("smartresize",a):this.trigger("smartresize",["execAsap"])},b.Isotope=function(a,c,d){this.element=b(c),this._create(a),this._init(d)};var v=["width","height"],w=b(a);b.Isotope.settings={resizable:!0,layoutMode:"masonry",containerClass:"isotope",itemClass:"isotope-item",hiddenClass:"isotope-hidden",hiddenStyle:{opacity:0,scale:.001},visibleStyle:{opacity:1,scale:1},containerStyle:{position:"relative",overflow:"hidden"},animationEngine:"best-available",animationOptions:{queue:!1,duration:800},sortBy:"original-order",sortAscending:!0,resizesContainer:!0,transformsEnabled:!0,itemPositionDataEnabled:!1},b.Isotope.prototype={_create:function(a){this.options=b.extend({},b.Isotope.settings,a),this.styleQueue=[],this.elemCount=0;var c=this.element[0].style;this.originalStyle={};var d=v.slice(0);for(var e in this.options.containerStyle)d.push(e);for(var f=0,g=d.length;f<g;f++)e=d[f],this.originalStyle[e]=c[e]||"";this.element.css(this.options.containerStyle),this._updateAnimationEngine(),this._updateUsingTransforms();var h={"original-order":function(a,b){return b.elemCount++,b.elemCount},random:function(){return Math.random()}};this.options.getSortData=b.extend(this.options.getSortData,h),this.reloadItems(),this.offset={left:parseInt(this.element.css("padding-left")||0,10),top:parseInt(this.element.css("padding-top")||0,10)};var i=this;setTimeout(function(){i.element.addClass(i.options.containerClass)},0),this.options.resizable&&w.bind("smartresize.isotope",function(){i.resize()}),this.element.delegate("."+this.options.hiddenClass,"click",function(){return!1})},_getAtoms:function(a){var b=this.options.itemSelector,c=b?a.filter(b).add(a.find(b)):a,d={position:"absolute"};return c=c.filter(function(a,b){return b.nodeType===1}),this.usingTransforms&&(d.left=0,d.top=0),c.css(d).addClass(this.options.itemClass),this.updateSortData(c,!0),c},_init:function(a){this.$filteredAtoms=this._filter(this.$allAtoms),this._sort(),this.reLayout(a)},option:function(a){if(b.isPlainObject(a)){this.options=b.extend(!0,this.options,a);var c;for(var d in a)c="_update"+f(d),this[c]&&this[c]()}},_updateAnimationEngine:function(){var a=this.options.animationEngine.toLowerCase().replace(/[ _\-]/g,""),b;switch(a){case"css":case"none":b=!1;break;case"jquery":b=!0;break;default:b=!e.csstransitions}this.isUsingJQueryAnimation=b,this._updateUsingTransforms()},_updateTransformsEnabled:function(){this._updateUsingTransforms()},_updateUsingTransforms:function(){var a=this.usingTransforms=this.options.transformsEnabled&&e.csstransforms&&e.csstransitions&&!this.isUsingJQueryAnimation;a||(delete this.options.hiddenStyle.scale,delete this.options.visibleStyle.scale),this.getPositionStyles=a?this._translate:this._positionAbs},_filter:function(a){var b=this.options.filter===""?"*":this.options.filter;if(!b)return a;var c=this.options.hiddenClass,d="."+c,e=a.filter(d),f=e;if(b!=="*"){f=e.filter(b);var g=a.not(d).not(b).addClass(c);this.styleQueue.push({$el:g,style:this.options.hiddenStyle})}return this.styleQueue.push({$el:f,style:this.options.visibleStyle}),f.removeClass(c),a.filter(b)},updateSortData:function(a,c){var d=this,e=this.options.getSortData,f,g;a.each(function(){f=b(this),g={};for(var a in e)!c&&a==="original-order"?g[a]=b.data(this,"isotope-sort-data")[a]:g[a]=e[a](f,d);b.data(this,"isotope-sort-data",g)})},_sort:function(){var a=this.options.sortBy,b=this._getSorter,c=this.options.sortAscending?1:-1,d=function(d,e){var f=b(d,a),g=b(e,a);return f===g&&a!=="original-order"&&(f=b(d,"original-order"),g=b(e,"original-order")),(f>g?1:f<g?-1:0)*c};this.$filteredAtoms.sort(d)},_getSorter:function(a,c){return b.data(a,"isotope-sort-data")[c]},_translate:function(a,b){return{translate:[a,b]}},_positionAbs:function(a,b){return{left:a,top:b}},_pushPosition:function(a,b,c){b=Math.round(b+this.offset.left),c=Math.round(c+this.offset.top);var d=this.getPositionStyles(b,c);this.styleQueue.push({$el:a,style:d}),this.options.itemPositionDataEnabled&&a.data("isotope-item-position",{x:b,y:c})},layout:function(a,b){var c=this.options.layoutMode;this["_"+c+"Layout"](a);if(this.options.resizesContainer){var d=this["_"+c+"GetContainerSize"]();this.styleQueue.push({$el:this.element,style:d})}this._processStyleQueue(a,b),this.isLaidOut=!0},_processStyleQueue:function(a,c){var d=this.isLaidOut?this.isUsingJQueryAnimation?"animate":"css":"css",f=this.options.animationOptions,g=this.options.onLayout,h,i,j,k;i=function(a,b){b.$el[d](b.style,f)};if(this._isInserting&&this.isUsingJQueryAnimation)i=function(a,b){h=b.$el.hasClass("no-transition")?"css":d,b.$el[h](b.style,f)};else if(c||g||f.complete){var l=!1,m=[c,g,f.complete],n=this;j=!0,k=function(){if(l)return;var b;for(var c=0,d=m.length;c<d;c++)b=m[c],typeof b=="function"&&b.call(n.element,a,n);l=!0};if(this.isUsingJQueryAnimation&&d==="animate")f.complete=k,j=!1;else if(e.csstransitions){var o=0,p=this.styleQueue[0],s=p&&p.$el,t;while(!s||!s.length){t=this.styleQueue[o++];if(!t)return;s=t.$el}var u=parseFloat(getComputedStyle(s[0])[r]);u>0&&(i=function(a,b){b.$el[d](b.style,f).one(q,k)},j=!1)}}b.each(this.styleQueue,i),j&&k(),this.styleQueue=[]},resize:function(){this["_"+this.options.layoutMode+"ResizeChanged"]()&&this.reLayout()},reLayout:function(a){this["_"+this.options.layoutMode+"Reset"](),this.layout(this.$filteredAtoms,a)},addItems:function(a,b){var c=this._getAtoms(a);this.$allAtoms=this.$allAtoms.add(c),b&&b(c)},insert:function(a,b){this.element.append(a);var c=this;this.addItems(a,function(a){var d=c._filter(a);c._addHideAppended(d),c._sort(),c.reLayout(),c._revealAppended(d,b)})},appended:function(a,b){var c=this;this.addItems(a,function(a){c._addHideAppended(a),c.layout(a),c._revealAppended(a,b)})},_addHideAppended:function(a){this.$filteredAtoms=this.$filteredAtoms.add(a),a.addClass("no-transition"),this._isInserting=!0,this.styleQueue.push({$el:a,style:this.options.hiddenStyle})},_revealAppended:function(a,b){var c=this;setTimeout(function(){a.removeClass("no-transition"),c.styleQueue.push({$el:a,style:c.options.visibleStyle}),c._isInserting=!1,c._processStyleQueue(a,b)},10)},reloadItems:function(){this.$allAtoms=this._getAtoms(this.element.children())},remove:function(a,b){this.$allAtoms=this.$allAtoms.not(a),this.$filteredAtoms=this.$filteredAtoms.not(a);var c=this,d=function(){a.remove(),b&&b.call(c.element)};a.filter(":not(."+this.options.hiddenClass+")").length?(this.styleQueue.push({$el:a,style:this.options.hiddenStyle}),this._sort(),this.reLayout(d)):d()},shuffle:function(a){this.updateSortData(this.$allAtoms),this.options.sortBy="random",this._sort(),this.reLayout(a)},destroy:function(){var a=this.usingTransforms,b=this.options;this.$allAtoms.removeClass(b.hiddenClass+" "+b.itemClass).each(function(){var b=this.style;b.position="",b.top="",b.left="",b.opacity="",a&&(b[i]="")});var c=this.element[0].style;for(var d in this.originalStyle)c[d]=this.originalStyle[d];this.element.unbind(".isotope").undelegate("."+b.hiddenClass,"click").removeClass(b.containerClass).removeData("isotope"),w.unbind(".isotope")},_getSegments:function(a){var b=this.options.layoutMode,c=a?"rowHeight":"columnWidth",d=a?"height":"width",e=a?"rows":"cols",g=this.element[d](),h,i=this.options[b]&&this.options[b][c]||this.$filteredAtoms["outer"+f(d)](!0)||g;h=Math.floor(g/i),h=Math.max(h,1),this[b][e]=h,this[b][c]=i},_checkIfSegmentsChanged:function(a){var b=this.options.layoutMode,c=a?"rows":"cols",d=this[b][c];return this._getSegments(a),this[b][c]!==d},_masonryReset:function(){this.masonry={},this._getSegments();var a=this.masonry.cols;this.masonry.colYs=[];while(a--)this.masonry.colYs.push(0)},_masonryLayout:function(a){var c=this,d=c.masonry;a.each(function(){var a=b(this),e=Math.ceil(a.outerWidth(!0)/d.columnWidth);e=Math.min(e,d.cols);if(e===1)c._masonryPlaceBrick(a,d.colYs);else{var f=d.cols+1-e,g=[],h,i;for(i=0;i<f;i++)h=d.colYs.slice(i,i+e),g[i]=Math.max.apply(Math,h);c._masonryPlaceBrick(a,g)}})},_masonryPlaceBrick:function(a,b){var c=Math.min.apply(Math,b),d=0;for(var e=0,f=b.length;e<f;e++)if(b[e]===c){d=e;break}var g=this.masonry.columnWidth*d,h=c;this._pushPosition(a,g,h);var i=c+a.outerHeight(!0),j=this.masonry.cols+1-f;for(e=0;e<j;e++)this.masonry.colYs[d+e]=i},_masonryGetContainerSize:function(){var a=Math.max.apply(Math,this.masonry.colYs);return{height:a}},_masonryResizeChanged:function(){return this._checkIfSegmentsChanged()},_fitRowsReset:function(){this.fitRows={x:0,y:0,height:0}},_fitRowsLayout:function(a){var c=this,d=this.element.width(),e=this.fitRows;a.each(function(){var a=b(this),f=a.outerWidth(!0),g=a.outerHeight(!0);e.x!==0&&f+e.x>d&&(e.x=0,e.y=e.height),c._pushPosition(a,e.x,e.y),e.height=Math.max(e.y+g,e.height),e.x+=f})},_fitRowsGetContainerSize:function(){return{height:this.fitRows.height}},_fitRowsResizeChanged:function(){return!0},_cellsByRowReset:function(){this.cellsByRow={index:0},this._getSegments(),this._getSegments(!0)},_cellsByRowLayout:function(a){var c=this,d=this.cellsByRow;a.each(function(){var a=b(this),e=d.index%d.cols,f=Math.floor(d.index/d.cols),g=(e+.5)*d.columnWidth-a.outerWidth(!0)/2,h=(f+.5)*d.rowHeight-a.outerHeight(!0)/2;c._pushPosition(a,g,h),d.index++})},_cellsByRowGetContainerSize:function(){return{height:Math.ceil(this.$filteredAtoms.length/this.cellsByRow.cols)*this.cellsByRow.rowHeight+this.offset.top}},_cellsByRowResizeChanged:function(){return this._checkIfSegmentsChanged()},_straightDownReset:function(){this.straightDown={y:0}},_straightDownLayout:function(a){var c=this;a.each(function(a){var d=b(this);c._pushPosition(d,0,c.straightDown.y),c.straightDown.y+=d.outerHeight(!0)})},_straightDownGetContainerSize:function(){return{height:this.straightDown.y}},_straightDownResizeChanged:function(){return!0},_masonryHorizontalReset:function(){this.masonryHorizontal={},this._getSegments(!0);var a=this.masonryHorizontal.rows;this.masonryHorizontal.rowXs=[];while(a--)this.masonryHorizontal.rowXs.push(0)},_masonryHorizontalLayout:function(a){var c=this,d=c.masonryHorizontal;a.each(function(){var a=b(this),e=Math.ceil(a.outerHeight(!0)/d.rowHeight);e=Math.min(e,d.rows);if(e===1)c._masonryHorizontalPlaceBrick(a,d.rowXs);else{var f=d.rows+1-e,g=[],h,i;for(i=0;i<f;i++)h=d.rowXs.slice(i,i+e),g[i]=Math.max.apply(Math,h);c._masonryHorizontalPlaceBrick(a,g)}})},_masonryHorizontalPlaceBrick:function(a,b){var c=Math.min.apply(Math,b),d=0;for(var e=0,f=b.length;e<f;e++)if(b[e]===c){d=e;break}var g=c,h=this.masonryHorizontal.rowHeight*d;this._pushPosition(a,g,h);var i=c+a.outerWidth(!0),j=this.masonryHorizontal.rows+1-f;for(e=0;e<j;e++)this.masonryHorizontal.rowXs[d+e]=i},_masonryHorizontalGetContainerSize:function(){var a=Math.max.apply(Math,this.masonryHorizontal.rowXs);return{width:a}},_masonryHorizontalResizeChanged:function(){return this._checkIfSegmentsChanged(!0)},_fitColumnsReset:function(){this.fitColumns={x:0,y:0,width:0}},_fitColumnsLayout:function(a){var c=this,d=this.element.height(),e=this.fitColumns;a.each(function(){var a=b(this),f=a.outerWidth(!0),g=a.outerHeight(!0);e.y!==0&&g+e.y>d&&(e.x=e.width,e.y=0),c._pushPosition(a,e.x,e.y),e.width=Math.max(e.x+f,e.width),e.y+=g})},_fitColumnsGetContainerSize:function(){return{width:this.fitColumns.width}},_fitColumnsResizeChanged:function(){return!0},_cellsByColumnReset:function(){this.cellsByColumn={index:0},this._getSegments(),this._getSegments(!0)},_cellsByColumnLayout:function(a){var c=this,d=this.cellsByColumn;a.each(function(){var a=b(this),e=Math.floor(d.index/d.rows),f=d.index%d.rows,g=(e+.5)*d.columnWidth-a.outerWidth(!0)/2,h=(f+.5)*d.rowHeight-a.outerHeight(!0)/2;c._pushPosition(a,g,h),d.index++})},_cellsByColumnGetContainerSize:function(){return{width:Math.ceil(this.$filteredAtoms.length/this.cellsByColumn.rows)*this.cellsByColumn.columnWidth}},_cellsByColumnResizeChanged:function(){return this._checkIfSegmentsChanged(!0)},_straightAcrossReset:function(){this.straightAcross={x:0}},_straightAcrossLayout:function(a){var c=this;a.each(function(a){var d=b(this);c._pushPosition(d,c.straightAcross.x,0),c.straightAcross.x+=d.outerWidth(!0)})},_straightAcrossGetContainerSize:function(){return{width:this.straightAcross.x}},_straightAcrossResizeChanged:function(){return!0}},b.fn.imagesLoaded=function(a){function h(){a.call(c,d)}function i(a){var c=a.target;c.src!==f&&b.inArray(c,g)===-1&&(g.push(c),--e<=0&&(setTimeout(h),d.unbind(".imagesLoaded",i)))}var c=this,d=c.find("img").add(c.filter("img")),e=d.length,f="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",g=[];return e||h(),d.bind("load.imagesLoaded error.imagesLoaded",i).each(function(){var a=this.src;this.src=f,this.src=a}),c};var x=function(b){a.console&&a.console.error(b)};b.fn.isotope=function(a,c){if(typeof a=="string"){var d=Array.prototype.slice.call(arguments,1);this.each(function(){var c=b.data(this,"isotope");if(!c){x("cannot call methods on isotope prior to initialization; attempted to call method '"+a+"'");return}if(!b.isFunction(c[a])||a.charAt(0)==="_"){x("no such method '"+a+"' for isotope instance");return}c[a].apply(c,d)})}else this.each(function(){var d=b.data(this,"isotope");d?(d.option(a),d._init(c)):b.data(this,"isotope",new b.Isotope(a,this,c))});return this}})(window,jQuery);

/*-----------------------------------------------------------------------------------*/
/*  PORTFOLIO
/*-----------------------------------------------------------------------------------*/
$(window).on('load',function(){
  'use strict';
  var portfolio_selectors = $('.portfolio-filter li a');
  if(portfolio_selectors!='undefined'){
    var portfolio = $('.portfolio-items');
    portfolio.isotope({
      itemSelector : 'li',
      layoutMode : 'fitRows'
    });
    portfolio_selectors.on('click', function(){
      portfolio_selectors.removeClass('active');
      $(this).addClass('active');
      var selector = $(this).attr('data-filter');
      portfolio.isotope({ filter: selector });
      return false;
    });
  }
});

jQuery(function($) {
'use strict';
	$('.tile-progress .tile-header').matchHeight();

	var footerHeight = jQuery('#footer-wrapper').outerHeight();
	jQuery('#content-wrapper').css('margin-bottom', footerHeight );

	var windowsHeight = jQuery(window).height();
	var navHeight = jQuery('navbar-fixed-top').outerHeight();
	var newHeight = windowsHeight - navHeight + 30;
    jQuery('#main-slider').css('height', newHeight + 'px');
    jQuery('#single-page-slider').css('min-height', windowsHeight/3 + 'px');

	//goto top
	$('.gototop').click(function(event) {
		event.preventDefault();
		$('html, body').animate({
			scrollTop: $("body").offset().top
		}, 500);
	});	

	// //Pretty Photo
	// $("a[rel^='prettyPhoto']").prettyPhoto({
	// 	social_tools: false,
	// 	theme: 'light_square'
	// });	

	jQuery('.prevbg').click(function(x) { x.preventDefault(); jQuery('body').data('backstretch').prev(); });
  	jQuery('.nextbg').click(function(x) { x.preventDefault(); jQuery('body').data('backstretch').prev(); });
});

/*-----------------------------------------------------------------------------------*/
/*  FANCY NAV
/*-----------------------------------------------------------------------------------*/
$(window).scroll(function() {
'use strict';
    var scroll_pos = 0;
    $(document).scroll(function() { 
        var windowsHeight = $(window).height();
        scroll_pos = $(this).scrollTop();
        if(scroll_pos > windowsHeight) {     	        
            $('.navbar-fixed-top').removeClass('opaqued');
        } else {
            $('.navbar-fixed-top').addClass('opaqued');
        }
    });

  	if  ( ($(document).height() - $(window).height()) - $(window).scrollTop() < 1000 ){
	    $('#footer-wrapper').css('z-index','4');
	} else {
		$('#footer-wrapper').css('z-index','1');
	}

});

jQuery(document).ready(function($){
'use strict';
  var windowsHeight = $(window).height();
  scroll_pos = $(this).scrollTop();
  if(scroll_pos > windowsHeight) {              
      $('.navbar-fixed-top').removeClass('opaqued');
  } else {
      $('.navbar-fixed-top').addClass('opaqued');
  }
  if  ( ($(document).height() - $(window).height()) - $(window).scrollTop() < 1000 ){
      $('#footer-wrapper').css('z-index','4');
    } else {
      $('#footer-wrapper').css('z-index','1');
   }
});


/*-----------------------------------------------------------------------------------*/
/*  SEARCH BAR
/*-----------------------------------------------------------------------------------*/
jQuery(document).ready(function($){
'use strict';
  jQuery('#search-wrapper, #search-wrapper input').hide();

	jQuery('span.search-trigger').click(function(){
		jQuery('#search-wrapper').slideToggle(0, function() {
			var check=$(this).is(":hidden");
			if(check == true) {
		  		jQuery('#search-wrapper input').fadeOut(600);
			} else {
				jQuery("#search-wrapper input").focus();
				jQuery('#search-wrapper input').slideDown(200);
			}
		});
	});

  $('#main-slider .carousel-content').flexVerticalCenter({ cssAttribute: 'padding-top' });

});

/*-----------------------------------------------------------------------------------*/
/*  NICESCROLL
/*-----------------------------------------------------------------------------------*/
 

/*-----------------------------------------------------------------------------------*/
/*  ANIMATE
/*-----------------------------------------------------------------------------------*/
jQuery(document).ready(function($){
'use strict';
  jQuery('.fade-up, .fade-down, .bounce-in, .flip-in').addClass('no-display');
  jQuery('.bounce-in').one('inview', function() { 
    jQuery(this).addClass('animated bounceIn appear');
  });
  jQuery('.flip-in').one('inview', function() { 
    jQuery(this).addClass('animated flipInY appear');
  });
  jQuery('.counter').counterUp({
    delay: 10,
    time: 1000
  });
  jQuery('.fade-up').one('inview', function() {
    jQuery(this).addClass('animated fadeInUp appear');
  });
  jQuery('.fade-down').one('inview', function() {
    jQuery(this).addClass('animated fadeInDown appear');
  });

});

/*-----------------------------------------------------------------------------------*/
/*  SNOOOOOOOOTH SCROLL - SO SMOOTH
/*-----------------------------------------------------------------------------------*/
$(function() {
'use strict';
	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
					}, 1000);
				return false;
			}
		}
	});
});

/*-----------------------------------------------------------------------------------*/
/*  CAROUSEL
/*-----------------------------------------------------------------------------------*/
$(document).ready(function() {
'use strict';
  //Set the carousel options
  $('#quote-carousel').carousel({
    pause: true,
    interval: 4000,
  });

	$('#scroller').carousel({
	    pause: true,
	    interval: 4000,
	});

});

/*global jQuery */
/*!
* FlexVerticalCenter.js 1.0
*
* Copyright 2011, Paul Sprangers http://paulsprangers.com
* Released under the WTFPL license
* http://sam.zoy.org/wtfpl/
*
* Date: Fri Oct 28 19:12:00 2011 +0100
*/
(function( $ ){

  $.fn.flexVerticalCenter = function( options ) {
    var settings = $.extend({
      cssAttribute:   'margin-top', // the attribute to apply the calculated value to
      verticalOffset: 0,            // the number of pixels to offset the vertical alignment by
      parentSelector: null,         // a selector representing the parent to vertically center this element within
      debounceTimeout: 25,          // a default debounce timeout in milliseconds
      deferTilWindowLoad: false     // if true, nothing will take effect until the $(window).load event
    }, options || {});

    return this.each(function(){
      var $this   = $(this); // store the object
      var debounce;

      // recalculate the distance to the top of the element to keep it centered
      var resizer = function () {

        var parentHeight = (settings.parentSelector && $this.parents(settings.parentSelector).length) ?
          $this.parents(settings.parentSelector).first().height() : $this.parent().height();

        $this.css(
          settings.cssAttribute, ( ( ( parentHeight - $this.height() ) / 2 ) + parseInt(settings.verticalOffset) )
        );
        if (settings.complete !== undefined) {
         settings.complete();
        }
      };

      // Call on resize. Opera debounces their resize by default.
      $(window).resize(function () {
          clearTimeout(debounce);
          debounce = setTimeout(resizer, settings.debounceTimeout);
      });

      if (!settings.deferTilWindowLoad) {
        // call it once, immediately.
        resizer();
      }

      // Call again to set after window (frames, images, etc) loads.
      $(window).on('load',function () {
          resizer();
      });

    });

  };

})( jQuery );

/*!
* jquery.counterup.js 1.0
*
* Copyright 2013, Benjamin Intal http://gambit.ph @bfintal
* Released under the GPL v2 License
*
* Date: Nov 26, 2013
*/
(function(e){"use strict";e.fn.counterUp=function(t){var n=e.extend({time:400,delay:10},t);return this.each(function(){var t=e(this),r=n,i=function(){var e=[],n=r.time/r.delay,i=t.text(),s=/[0-9]+,[0-9]+/.test(i);i=i.replace(/,/g,"");var o=/^[0-9]+$/.test(i),u=/^[0-9]+\.[0-9]+$/.test(i),a=u?(i.split(".")[1]||[]).length:0;for(var f=n;f>=1;f--){var l=parseInt(i/n*f);u&&(l=parseFloat(i/n*f).toFixed(a));if(s)while(/(\d+)(\d{3})/.test(l.toString()))l=l.toString().replace(/(\d+)(\d{3})/,"$1,$2");e.unshift(l)}t.data("counterup-nums",e);t.text("0");var c=function(){t.text(t.data("counterup-nums").shift());if(t.data("counterup-nums").length)setTimeout(t.data("counterup-func"),r.delay);else{delete t.data("counterup-nums");t.data("counterup-nums",null);t.data("counterup-func",null)}};t.data("counterup-func",c);setTimeout(t.data("counterup-func"),r.delay)};t.waypoint(i,{offset:"100%",triggerOnce:!0})})}})(jQuery);

/*-----------------------------------------------------------------------------------*/
/*  CONTACT FORM
/*-----------------------------------------------------------------------------------*/
jQuery(document).ready(function($){
'use strict';

  $('#contactform').submit(function(){
    var action = $(this).attr('action');
    $("#message").slideUp(750,function() {
    $('#message').hide();
    $('#submit').attr('disabled','disabled');
    $.post(action, {
      name: $('#name').val(),
      email: $('#email').val(),
      website: $('#website').val(),
      comments: $('#comments').val()
    },
      function(data){
        document.getElementById('message').innerHTML = data;
        $('#message').slideDown('slow');
        $('#submit').removeAttr('disabled');
        if(data.match('success') != null) $('#contactform').slideUp('slow');
        $(window).trigger('resize');
      }
    );
    });
    return false;
  });
  
});

/*-----------------------------------------------------------------------------------*/
/*  PRELOADER
/*-----------------------------------------------------------------------------------*/
jQuery(document).ready(function($){
'use strict';
  $(window).on('load',function(){
    $('#preloader').fadeOut('slow',function(){$(this).remove();});
  });
});

/*-----------------------------------------------------------------------------------*/
/*  my js
 /*-----------------------------------------------------------------------------------*/
var apiHost = "http://mingdao.fun"
function itemShowOrHide(i,n,hs){
    $("" + i + "[name='"+ n +"']").each(function() {
        if(hs == "show"){
            $(this).show();
        }else{
            $(this).hide();
        }
    });
}
function onInit(){
    if(chk_userlanguage() == 'zh'){
        itemShowOrHide("li","enLabel","hide");
        itemShowOrHide("li","zhLabel","show");
    }else{
        itemShowOrHide("li","enLabel","show");
        itemShowOrHide("li","zhLabel","hide");
        $("#cmn-toggle-chineseOp").attr("checked",false);
        $("#cmn-toggle-englishOp").attr("checked",true);
    }


    if(!$("#cmn-toggle-chineseOp").is(':checked') && $("#cmn-toggle-englishOp").is(':checked')){
        msgDiv();
    }else if($("#cmn-toggle-chineseOp").is(':checked') && !$("#cmn-toggle-englishOp").is(':checked')){
        itemShowOrHide("p","chineseText","show");
        itemShowOrHide("p","englishText","hide");
    }
};

function msgDiv(){
    if(!$("#cmn-toggle-chineseOp").is(':checked')
        && !$("#cmn-toggle-pinyinOp").is(':checked')
        && !$("#cmn-toggle-redioOp").is(':checked')){
        $("div[class='box']").each( function() {$(this).hide();});
    }else{
        $("div[class='box']").each( function() {$(this).show();});
    }
};

function showOrHide(obj,n,i){
    if(!$(obj).is(':checked')) {
        itemShowOrHide(i,n,"hide");
    } else {
        itemShowOrHide(i,n,"show");
    }
    msgDiv();
}

function downVoice(obj){

    if($(obj).is(':checked')) {
        $("source[name='voiceSource']").each(function () {
            if ($(this).attr("src") != "") {
                return;
            } else {
                $(this).attr("src",$(this).attr("data-src"));
            }
            $(this).parents("audio").load();
        });
    }
}


$("#cmn-toggle-chineseOp").click(function () {showOrHide(this,"chineseText","p");});
$("#cmn-toggle-englishOp").click(function () {showOrHide(this,"englishText","p");});
$("#cmn-toggle-pinyinOp").click(function () {showOrHide(this,"pinyinText","p");});
$("#cmn-toggle-redioOp").click(function () {showOrHide(this,"textRedio","div");downVoice(this);});
$(function(){
//	$("#replyModal").append(`<div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-hidden="true" onclick="cancelRevert()">&times;</button><h4 class="modal-title" >Reply <span id="modal-toUser"></span></h4><input type="hidden" id="replyId" name="replyId"></div><div class="modal-body"><div class="contact-box text-center"><div class="form-group row"><div class="col-lg-6"><input type="text" class="form-control" id="modal-name" name="name" placeholder="Name*" required=""></div><div class="col-lg-6"><input type="email" class="form-control" id="modal-email" name="email" placeholder="Email" required=""></div></div><div class="form-group"><textarea class="form-control" id="modal-message" name="message" rows="10" style="float: left;"><font color="red"><span id="replyRlt"></span></font></label><button type="button" class="btn btn-default" data-dismiss="modal" onclick="cancelRevert()">cancel </button><button type="button" class="btn btn-primary" onclick="submitRevert()"> Submit  </button></div></div>`);
    onInit();
});


//
function chk_userlanguage () {
    /* get browser default lang */
    if (navigator.userLanguage) {
        baseLang = navigator.userLanguage.substring(0,2).toLowerCase();
    } else {
        baseLang = navigator.language.substring(0,2).toLowerCase();
    }
    return baseLang;
};
function getLatestNews(message){
    if(message != undefined && message.length > 0){
        for(var i = 0;i<message.length;i++){
            if(chk_userlanguage() == 'zh'){
                var divBlockZh = `<li name="zhLabel"><a href="${message[i]["uri"]}" target="_blank">${message[i]["title"]}</a></li>`;
                $("#latestNews").append(divBlockZh);
            }else{
                var divBlockEn = `<li name="enLabel"><a href="${message[i]["uri"]}" target="_blank">${message[i]["enTitel"]}</a></li>`;
                $("#latestNews").append(divBlockEn);
            }
        }
    }
}
$(function(){
    var date = getDate();
    var data = "appId=" + appkey;
    jQuery.support.cors = true;
    $.ajax({
        type: "post",
        url: apiHost + "/api/G/getNews",
        contentType: "application/x-www-form-urlencoded;charset=utf-8",
        dataType:"json",
        crossDomain:true,
        // jsonpCallback: 'successCallback',
        success:function (message) {
            getLatestNews(message);
        },
        error:function (message) {

        },
        data:data
    });
});

var loadCount = 1;
var totalPageNum = 0;
var commentNum = 0;
var revertNum = 0;
var pNum = 0;
var tipNum = 0;
var commentsTipNum = 0;
var lessComments = 0;


// show pageNumBar
function setPageBar(beginNum,activeNum){


    totalPageNum = Math.ceil(commentNum/5);

    for(var i = beginNum ; i <= totalPageNum && i < beginNum + 10;i++){

        if( i == activeNum ){
            $("#pageleft").after("<li class='active' id='pageBarLi"+i+"'><a name='pageBar'>"+i+"</a></li>");
        }else{
            $("#pageright").before("<li id='pageBarLi"+i+"'><a name='pageBar' onclick='showPage("+ i +")'>"+i+"</a></li>");
        }
    }
}

function tipPageBar(direction){

    var list = $("#pageBarUl").find("li");
    var leftNum = list.eq(1).children("a:eq(0)").html();
    var rigthNum = list.eq(list.length - 2).children("a:eq(0)").html();
    for(var i = 1; i < list.length - 1; i++ ){
        list.eq(i).remove();
    }
    if(direction == "right" && rigthNum < totalPageNum){
        setPageBar(parseInt(rigthNum,10) + 1,parseInt(rigthNum,10) + 1);
        showPage(parseInt(rigthNum,10) + 1);
    }
    if(direction == "left" && leftNum > 1){
        if(parseInt(leftNum) - 10 > 1){
            setPageBar(parseInt(leftNum) - 10,parseInt(leftNum)  - 10);
            showPage(parseInt(leftNum,10) + 1);
        }else{
            setPageBar(1,1);
            showPage(1);
        }
    }
}


function showPage(){
    loadCount++;
    // set class
//	 $("#pageBarUl").children(".active").removeClass();
//	 $("#pageBarLi"+num).addClass("active");

    //
//	$("#comments-list").children("div").each(function(){
//		$(this).remove();
//	})

    var data = "appId=" +appkey+ "&num=" +pageNum + "&type=1&pageNum="+loadCount+"&pageSize=5&tipNum=" +commentsTipNum;
    $.ajax({
        type: "post",
        url: apiHost + "/api/A/getComment",
        contentType: "application/x-www-form-urlencoded;charset=utf-8",
        dataType:"json",
        crossDomain:true,
        // jsonpCallback: 'successCallback',
        success:function (message) {
            showCommentBlock(message);
        },
        error:function (message) {
            $("#commentsH3").val("No comment");
        },
        data:data
    });

}



function showRevert(ownerNum,pn,pSize,tNum){
    revertNum = ownerNum;
    pNum = 1 + pn;
    tipNum = tNum;
    var data = "appId=" +appkey+ "&num=" +ownerNum + "&type=2&pageNum="+pNum+"&pageSize="+pSize + "&tipNum="+tipNum;
    $.ajax({
        type: "post",
        url: apiHost + "/api/A/getComment",
        contentType: "application/x-www-form-urlencoded;charset=utf-8",
        dataType:"json",
        crossDomain:true,
        // jsonpCallback: 'successCallback',
        success:function (message) {
            debugger;
            if(message != null && message.length > 0 && message[0] != null ){
                for(var i = 0;i < message.length ;i++){
                    var reTmp = message[i];
                    var reNum = reTmp["num"];
                    var reUname = reTmp["uname"];
                    var reToName = reTmp["toName"];
                    var redate = reTmp["date"];
                    var reComments = reTmp["comments"];
                    var ownerNum = reTmp["ownerNum"];
                    var reDivBlock = `<div class='media' style='margin-top: 0px;' id=${reNum}><div class='pull-left'></div><div class='media-body'><div class='well'><div class='media-heading'><strong>${reUname}</strong><span>&nbsp;to&nbsp;</span><strong>${reToName}</strong>&nbsp; <small>${redate}</small></div><p>${reComments}</p><a name="Reply" class="pull-right btn btn-primary btn-outlined" style="padding: 1px 16px;" data-toggle="modal" data-target="#replyModal" onclick="revert(${ownerNum},'${reUname}')">Reply</a></div></div></div>`;
                    $("#lodeMore"+ownerNum).before(reDivBlock);
                }
                $("#lodeMore"+revertNum).remove();
                $("#"+message[message.length - 1]["num"]).after(`<span id='lodeMore${revertNum}' class='label label-warning pull-right'><a onclick="showRevert(${revertNum},${pNum},3,${tipNum})">lode more</a></span>`);
            }else{
                $("#lodeMore"+revertNum).remove();
            }
        },
        error:function (message) {
            alert("Failed, please try again later");
        },
        data:data
    });

}


// add comment
function showCommentBlock(message){


    if(message != undefined && message.length > 0){
        commentsTipNum = message[0]["num"];
        commentNum = message[0]["counts"];
        lessComments = commentNum - (loadCount-1) * 5;
        for(var i = 0;i<message.length;i++){
            var tmp = message[i];
            var num = tmp["num"];
            var uname = tmp["uname"];
            var date = tmp["date"];
            var comments = tmp["comments"];

            var divBlock =`<div class="media" style="border:1px solid #8F8F8F;" ><div class='pull-left'><div style='text-align: center;'><font color="#1BB29E"><h3>${lessComments}</h3></font></div></div><div class='media-body'><div class='well' id=${num}><div class='media-heading'><strong>${uname}</strong>&nbsp; <small>${date}</small></div><p>${comments}</p><a name='Reply' class='pull-right btn btn-primary btn-outlined' style="padding: 1px 16px;" data-toggle='modal' data-target='#replyModal' onclick='revert(${num},"${uname}")'>Reply</a></div></div></div>`;
            $("#loadMoreComments").before(divBlock);
            lessComments--;


            var reCounts = tmp["reCounts"];
            var details = tmp["details"];
            if(details != null && details.length > 0 && details[0] != null){
                for(var j = details.length -1 ;j>= 0 ;j--){
                    var reTmp = details[j];
                    var reNum = reTmp["num"];
                    var reUname = reTmp["uname"];
                    var reToName = reTmp["toName"];
                    var redate = reTmp["date"];
                    var reComments = reTmp["comments"];
                    var reDivBlock = `<div class='media' style='margin-top: 0px;' id=${reNum}><div class='pull-left'></div><div class='media-body'><div class='well' ><div class='media-heading'><strong>${reUname}</strong><span>&nbsp;to&nbsp;</span><strong>${reToName}</strong>&nbsp; <small>${redate}</small></div><p>${reComments}</p><a name="Reply" class="pull-right btn btn-primary btn-outlined" style="padding: 1px 16px;" data-toggle="modal" data-target="#replyModal" onclick="revert(${num},'${reUname}')">Reply</a></div></div></div>`;
                    $("#"+num).after(reDivBlock);
                }
                if(reCounts > details.length){
                    $("#"+details[details.length - 1]["num"]).after(`<span id='lodeMore${num}' class='label label-warning pull-right'><a onclick="showRevert(${num},1,${details.length},${details[0]["num"]})">lode more</a></span>`);
                }
            }
        }
        $("#commentsH3").text(commentNum+" Comments");

    }else{
        if(commentNum == 0){
            $("#commentsH3").text("No comment");
        }
        $("#loadMoreComments").remove();
    }


}


// 加载评论
$(function(){

    $("#submitCommentTip").hide();

    var data = "appId="+appkey+"&num=" +pageNum + "&type=1&pageNum=1&pageSize=5";

    $.ajax({
        type: "post",
        url:  apiHost + "/api/A/getComment",
        contentType: "application/x-www-form-urlencoded;charset=utf-8",
        dataType:"json",
        crossDomain:true,
        // jsonpCallback: 'successCallback',
        success:function (message) {
            showCommentBlock(message);
            setPageBar(1,1);
        },
        error:function (message) {
            $("#commentsH3").val("No comment");
        },
        data:data
    });

});
// 提交评论 "http://localhost:8080/api/A/submitComment"
function submit(url,data) {
    $.ajax({
        type: "POST",
        url: url,
        contentType: "application/json;charset=utf-8",
        data:data,
        dataType: "json",
        success:function (message) {
            return message;
        },
        error:function (message) {
            return message;
        }
    });
} ;

/**
 * get date
 */
function getDate(){
    var curTime=new Date()
//枚举月份
    var month=new Array(12);
    month[0]="January";
    month[1]="February";
    month[2]="March";
    month[3]="April";
    month[4]="May";
    month[5]="June";
    month[6]="July";
    month[7]="August";
    month[8]="September";
    month[9]="October";
    month[10]="November";
    month[11]="December";
    var minutes = curTime.getMinutes();
    var secends = curTime.getSeconds();
    if(parseInt(minutes,10) < 10){
        minutes = "0" + minutes;
    }
    if(parseInt(secends,10) < 10){
        secends = "0" + secends;
    }
    var strCurTime = month[curTime.getMonth()] + " " + curTime.getDate() + ", " + curTime.getFullYear() + " " + curTime.getHours() + ":" + minutes + ":" + secends;
    return strCurTime;
}

function revert(id,userName){
    $("#replyId").val(id);
    $("#modal-toUser").text(userName);
    var name = $("#comment-Name").val();
    if(name != undefined && name != ""){
        $("#modal-name").val(name);
    }
    var email = $("#comment-Email").val();
    if(email != undefined && email != ""){
        $("#modal-email").val(email);
    }
}

function submitRevert(){

    var replyId = $("#replyId").val();

    var toName = $("#modal-toUser").html();
// get name
    var name = $("#modal-name").val();
// get email
    var email = $("#modal-email").val();
// get message
    var comments = $("#modal-message").val();

    if(name == undefined || name == ""){
        alert("Please enter your name");
        return;
    }
    if(comments == undefined || comments == ""){
        alert("Please enter a comment");
        return;
    }else if(comments.length < 2){
        alert("Comment length must be greater than 2 characters");
        return;
    }
    var reg1 = /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)/;
    if(reg1.test(email) == false){
        alert("Email is malformed");
        return;
    }
    $("#comment-Name").val(name);
    $("#comment-Email").val(email);
    var date = getDate();
    var data = "appId=" +appkey+ "&name=" +name + "&type=2&num=" +replyId + "&email=" + email +"&date=" + date +"&comments=" + comments  +"&toName="+toName;
    jQuery.support.cors = true;
    $.ajax({
        type: "post",
        url: apiHost + "/api/A/submitComment",
        contentType: "application/x-www-form-urlencoded;charset=utf-8",
        dataType:"json",
        crossDomain:true,
        // jsonpCallback: 'successCallback',
        success:function (message) {

            var divBlock = `<div class='media' style='margin-top: 0px;' ><div class='pull-left'></div><div class='media-body'><div class='well'><div class='media-heading'><strong>${name}</strong><span>&nbsp;to&nbsp;</span><strong>${toName}</strong>&nbsp; <small>${date}</small></div><p>${comments}</p><a name="Reply" class="pull-right btn btn-primary btn-outlined" style="padding: 1px 16px;" data-toggle="modal" data-target="#replyModal" onclick="revert(${replyId},'${name}')">Reply</a></div></div></div>`;
            $("#"+replyId).after(divBlock);
            $('#replyModal').modal('hide');
            $("#modal-message").val("");
            $("#replyRlt").text("");
        },
        error:function (message) {
            $("#submitCommentTip").show();
            $("#replyRlt").text("Failed, please try again later");
        },
        data:data

    });


}

function cancelRevert(){
    $("#replyRlt").text("");
}

function submitComment(){

    var name = $("#comment-Name").val();
    var email = $("#comment-Email").val();
    var comments = $("#comment-Comment").val();

    if(name == undefined || name == ""){
        alert("Please enter your name");
        return;
    }
    if(comments == undefined || comments == ""){
        alert("Please enter a comment");
        return;
    }else if(comments.length < 2){
        alert("Comment length must be greater than 2 characters");
        return;
    }

    var reg1 = /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)/;
    if(reg1.test(email) == false){
        alert("Email is malformed");
        return;
    }

    var date = getDate();
// var data = {"name":name,"type":1,"num":1,"email":email,"date":date,"comments":comments,"appId":"abctest"};
    var data = "appId="+appkey+"&name=" +name + "&type=1&num=" + pageNum+ "&email=" + email +"&date=" + date +"&comments=" + comments  ;
    jQuery.support.cors = true;
    // submit
    $.ajax({
        type: "post",
        url: apiHost + "/api/A/submitComment",
        contentType: "application/x-www-form-urlencoded;charset=utf-8",
        dataType:"json",
        crossDomain:true,
        // jsonpCallback: 'successCallback',
        success:function (message) {
            var num = message["num"];
            var divBlock =`<div class="media" style="border:1px solid #8F8F8F;"><div class='pull-left'></div><div class='media-body'><div class='well' id=${num}><div class='media-heading'><strong>${name}</strong>&nbsp; <small>${getDate()}</small></div><p>${comments}</p><a name='Reply' class='pull-right btn btn-primary btn-outlined' style="padding: 1px 16px;" data-toggle='modal' data-target='#replyModal' onclick='revert(${num},"${name}")'>Reply</a></div></div></div>`;
            $("#commentsH3").after(divBlock);
            $("#comment-Comment").val("");
            $("#submitCommentTip").hide();
        },
        error:function (message) {
            $("#submitCommentTip").show();
        },
        data:data
    });
}

function isVisible($node) {
    var winH = $(window).height(),                                    //浏览器窗口高度
        scrollTop = $(document).scrollTop(),                          //滚轮滚动高度
        offSetTop = $node.offset().top;                               //元素距离浏览器顶部的距离
    if (offSetTop < winH + scrollTop) {
        let src_value = $node.attr("data-src");
        $node.attr("src", src_value);
        return true;
    } else {
        return false;
    }
}
function loadPartImg() {
    $("img[name='pic']").each(function () {
        if ($(this).attr("src") != "") {
            return;
        } else {
            isVisible($(this));
        }
    });
}
loadPartImg();
$(window).on("scroll", function () {
    loadPartImg();
});
