! function(e, t) { "function" == typeof define && define.amd ? define(function() { return e.Reveal = t(), e.Reveal }) : "object" == typeof exports ? module.exports = t() : e.Reveal = t() }(this, function() { "use strict";

    function e(e) { if (!0 !== wt)
            if (wt = !0, function() { ut = /(iphone|ipod|ipad|android)/gi.test(bt), pt = /chrome/i.test(bt) && !/edge/i.test(bt); var e = document.createElement("div");
                    It.transforms3d = "WebkitPerspective" in e.style || "MozPerspective" in e.style || "msPerspective" in e.style || "OPerspective" in e.style || "perspective" in e.style, It.transforms2d = "WebkitTransform" in e.style || "MozTransform" in e.style || "msTransform" in e.style || "OTransform" in e.style || "transform" in e.style, It.requestAnimationFrameMethod = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame, It.requestAnimationFrame = "function" == typeof It.requestAnimationFrameMethod, It.canvas = !!document.createElement("canvas").getContext, It.overviewTransitions = !/Version\/[\d\.]+.*Safari/.test(bt), It.zoom = "zoom" in e.style && !ut && (pt || /Version\/[\d\.]+.*Safari/.test(bt)) }(), It.transforms2d || It.transforms3d) { Tt.wrapper = document.querySelector(".reveal"), Tt.slides = document.querySelector(".reveal .slides"), window.addEventListener("load", E, !1); var t = it.getQueryHash();
                void 0 !== t.dependencies && delete t.dependencies, l(yt, e), l(yt, t), yt.hideAddressBar && ut && (window.addEventListener("load", b, !1), window.addEventListener("orientationchange", b, !1)),
                    function() {
                        function e() { o.length && head.js.apply(null, o), At = !0, Tt.slides.classList.add("no-transition"), ut ? Tt.wrapper.classList.add("no-hover") : Tt.wrapper.classList.remove("no-hover"), /iphone/gi.test(bt) ? Tt.wrapper.classList.add("ua-iphone") : Tt.wrapper.classList.remove("ua-iphone"), Tt.background = a(Tt.wrapper, "div", "backgrounds", null), Tt.progress = a(Tt.wrapper, "div", "progress", "<span></span>"), Tt.progressbar = Tt.progress.querySelector("span"), Tt.controls = a(Tt.wrapper, "aside", "controls", '<button class="navigate-left" aria-label="previous slide"><div class="controls-arrow"></div></button><button class="navigate-right" aria-label="next slide"><div class="controls-arrow"></div></button><button class="navigate-up" aria-label="above slide"><div class="controls-arrow"></div></button><button class="navigate-down" aria-label="below slide"><div class="controls-arrow"></div></button>'), Tt.slideNumber = a(Tt.wrapper, "div", "slide-number", ""), Tt.speakerNotes = a(Tt.wrapper, "div", "speaker-notes", null), Tt.speakerNotes.setAttribute("data-prevent-swipe", ""), Tt.speakerNotes.setAttribute("tabindex", "0"), a(Tt.wrapper, "div", "pause-overlay", null), Tt.wrapper.setAttribute("role", "application"), Tt.controlsLeft = c(document.querySelectorAll(".navigate-left")), Tt.controlsRight = c(document.querySelectorAll(".navigate-right")), Tt.controlsUp = c(document.querySelectorAll(".navigate-up")), Tt.controlsDown = c(document.querySelectorAll(".navigate-down")), Tt.controlsPrev = c(document.querySelectorAll(".navigate-prev")), Tt.controlsNext = c(document.querySelectorAll(".navigate-next")), Tt.controlsRightArrow = Tt.controls.querySelector(".navigate-right"), Tt.controlsDownArrow = Tt.controls.querySelector(".navigate-down"), Tt.statusDiv = function() { var e = document.getElementById("aria-status-div"); return e || ((e = document.createElement("div")).style.position = "absolute", e.style.height = "1px", e.style.width = "1px", e.style.overflow = "hidden", e.style.clip = "rect( 1px, 1px, 1px, 1px )", e.setAttribute("id", "aria-status-div"), e.setAttribute("aria-live", "polite"), e.setAttribute("aria-atomic", "true"), Tt.wrapper.appendChild(e)), e }(), yt.postMessage && window.addEventListener("message", function(e) { var t = e.data; "string" == typeof t && "{" === t.charAt(0) && "}" === t.charAt(t.length - 1) && (t = JSON.parse(t)).method && "function" == typeof it[t.method] && it[t.method].apply(it, t.args) }, !1), setInterval(function() { 0 === Tt.wrapper.scrollTop && 0 === Tt.wrapper.scrollLeft || (Tt.wrapper.scrollTop = 0, Tt.wrapper.scrollLeft = 0) }, 1e3), c(Tt.wrapper.querySelectorAll(vt)).forEach(function(e) { c(e.querySelectorAll("section")).forEach(function(e, t) { t > 0 && (e.classList.remove("present"), e.classList.remove("past"), e.classList.add("future"), e.setAttribute("aria-hidden", "true")) }) }), i(), ue(), Q(!0), setTimeout(function() { Tt.slides.classList.remove("no-transition"), Tt.wrapper.classList.add("ready"), y("ready", { indexh: ot, indexv: st, currentSlide: ct }) }, 1), m() && (s(), "complete" === document.readyState ? r() : window.addEventListener("load", r)) }

                        function t(t) { head.ready(t.src.match(/([\w\d_\-]*)\.?js$|[^\\\/]*$/i)[0], function() { "function" == typeof t.callback && t.callback.apply(this), 0 == --l && e() }) } var n = [],
                            o = [],
                            l = 0; for (var d = 0, u = yt.dependencies.length; d < u; d++) { var p = yt.dependencies[d];
                            p.condition && !p.condition() || (p.async ? o.push(p.src) : n.push(p.src), t(p)) }
                        n.length ? (l = n.length, head.js.apply(null, n)) : e() }() } else { document.body.setAttribute("class", "no-transforms"); for (var n = c(document.getElementsByTagName("img")), o = c(document.getElementsByTagName("iframe")), d = n.concat(o), u = 0, p = d.length; u < p; u++) { var f = d[u];
                    f.getAttribute("data-src") && (f.setAttribute("src", f.getAttribute("data-src")), f.removeAttribute("data-src")) } } }

    function t(e) { var r = ""; if (3 === e.nodeType) r += e.textContent;
        else if (1 === e.nodeType) { var a = e.getAttribute("aria-hidden"),
                n = "none" === window.getComputedStyle(e).display; "true" === a || n || c(e.childNodes).forEach(function(e) { r += t(e) }) } return r }

    function r() { var e = q(window.innerWidth, window.innerHeight),
            t = Math.floor(e.width * (1 + yt.margin)),
            r = Math.floor(e.height * (1 + yt.margin)),
            a = e.width,
            n = e.height;
        h("@page{size:" + t + "px " + r + "px; margin: 0px;}"), h(".reveal section>img, .reveal section>video, .reveal section>iframe{max-width: " + a + "px; max-height:" + n + "px}"), document.body.classList.add("print-pdf"), document.body.style.width = t + "px", document.body.style.height = r + "px", x(a, n), c(Tt.wrapper.querySelectorAll(vt)).forEach(function(e, t) { e.setAttribute("data-index-h", t), e.classList.contains("stack") && c(e.querySelectorAll("section")).forEach(function(e, r) { e.setAttribute("data-index-h", t), e.setAttribute("data-index-v", r) }) }), c(Tt.wrapper.querySelectorAll(ht)).forEach(function(e) { if (!1 === e.classList.contains("stack")) { var i = (t - a) / 2,
                    o = (r - n) / 2,
                    s = e.scrollHeight,
                    l = Math.max(Math.ceil(s / r), 1);
                (1 === (l = Math.min(l, yt.pdfMaxPagesPerSlide)) && yt.center || e.classList.contains("center")) && (o = Math.max((r - s) / 2, 0)); var c = document.createElement("div"); if (c.className = "pdf-page", c.style.height = (r + yt.pdfPageHeightOffset) * l + "px", e.parentNode.insertBefore(c, e), c.appendChild(e), e.style.left = i + "px", e.style.top = o + "px", e.style.width = a + "px", e.slideBackgroundElement && c.insertBefore(e.slideBackgroundElement, e), yt.showNotes) { var d = be(e); if (d) { var u = "string" == typeof yt.showNotes ? yt.showNotes : "inline",
                            p = document.createElement("div");
                        p.classList.add("speaker-notes"), p.classList.add("speaker-notes-pdf"), p.setAttribute("data-layout", u), p.innerHTML = d, "separate-page" === u ? c.parentNode.insertBefore(p, c.nextSibling) : (p.style.left = "8px", p.style.bottom = "8px", p.style.width = t - 16 + "px", c.appendChild(p)) } } if (yt.slideNumber && /all|print/i.test(yt.showSlideNumber)) { var f = parseInt(e.getAttribute("data-index-h"), 10) + 1,
                        h = parseInt(e.getAttribute("data-index-v"), 10) + 1,
                        v = document.createElement("div");
                    v.classList.add("slide-number"), v.classList.add("slide-number-pdf"), v.innerHTML = J(f, ".", h), c.appendChild(v) } } }), c(Tt.wrapper.querySelectorAll(ht + " .fragment")).forEach(function(e) { e.classList.add("visible") }), y("pdf-ready") }

    function a(e, t, r, a) { for (var n = e.querySelectorAll("." + r), i = 0; i < n.length; i++) { var o = n[i]; if (o.parentNode === e) return o } var s = document.createElement(t); return s.className = r, "string" == typeof a && (s.innerHTML = a), e.appendChild(s), s }

    function n(e, t) { var r = { background: e.getAttribute("data-background"), backgroundSize: e.getAttribute("data-background-size"), backgroundImage: e.getAttribute("data-background-image"), backgroundVideo: e.getAttribute("data-background-video"), backgroundIframe: e.getAttribute("data-background-iframe"), backgroundColor: e.getAttribute("data-background-color"), backgroundRepeat: e.getAttribute("data-background-repeat"), backgroundPosition: e.getAttribute("data-background-position"), backgroundTransition: e.getAttribute("data-background-transition") },
            a = document.createElement("div");
        a.className = "slide-background " + e.className.replace(/present|past|future/, ""), r.background && (/^(http|file|\/\/)/gi.test(r.background) || /\.(svg|png|jpg|jpeg|gif|bmp)([?#]|$)/gi.test(r.background) ? e.setAttribute("data-background-image", r.background) : a.style.background = r.background), (r.background || r.backgroundColor || r.backgroundImage || r.backgroundVideo || r.backgroundIframe) && a.setAttribute("data-background-hash", r.background + r.backgroundSize + r.backgroundImage + r.backgroundVideo + r.backgroundIframe + r.backgroundColor + r.backgroundRepeat + r.backgroundPosition + r.backgroundTransition), r.backgroundSize && (a.style.backgroundSize = r.backgroundSize), r.backgroundSize && a.setAttribute("data-background-size", r.backgroundSize), r.backgroundColor && (a.style.backgroundColor = r.backgroundColor), r.backgroundRepeat && (a.style.backgroundRepeat = r.backgroundRepeat), r.backgroundPosition && (a.style.backgroundPosition = r.backgroundPosition), r.backgroundTransition && a.setAttribute("data-background-transition", r.backgroundTransition), t.appendChild(a), e.classList.remove("has-dark-background"), e.classList.remove("has-light-background"), e.slideBackgroundElement = a; var n = window.getComputedStyle(a); if (n && n.backgroundColor) { var i = g(n.backgroundColor);
            i && 0 !== i.a && (function(e) { "string" == typeof e && (e = g(e)); if (e) return (299 * e.r + 587 * e.g + 114 * e.b) / 1e3; return null }(n.backgroundColor) < 128 ? e.classList.add("has-dark-background") : e.classList.add("has-light-background")) } return a }

    function i(e) { var t = yt.transition; if ("object" == typeof e && l(yt, e), !1 !== At) { var r = Tt.wrapper.querySelectorAll(ht).length;
            Tt.wrapper.classList.remove(t), !1 === It.transforms3d && (yt.transition = "linear"), Tt.wrapper.classList.add(yt.transition), Tt.wrapper.setAttribute("data-transition-speed", yt.transitionSpeed), Tt.wrapper.setAttribute("data-background-transition", yt.backgroundTransition), Tt.controls.style.display = yt.controls ? "block" : "none", Tt.progress.style.display = yt.progress ? "block" : "none", Tt.controls.setAttribute("data-controls-layout", yt.controlsLayout), Tt.controls.setAttribute("data-controls-back-arrows", yt.controlsBackArrows), yt.shuffle && j(), yt.rtl ? Tt.wrapper.classList.add("rtl") : Tt.wrapper.classList.remove("rtl"), yt.center ? Tt.wrapper.classList.add("center") : Tt.wrapper.classList.remove("center"), !1 === yt.pause && B(), yt.showNotes && Tt.speakerNotes.setAttribute("data-layout", "string" == typeof yt.showNotes ? yt.showNotes : "inline"), yt.mouseWheel ? (document.addEventListener("DOMMouseScroll", je, !1), document.addEventListener("mousewheel", je, !1)) : (document.removeEventListener("DOMMouseScroll", je, !1), document.removeEventListener("mousewheel", je, !1)), yt.rollingLinks ? function() { if (It.transforms3d && !("msPerspective" in document.body.style))
                    for (var e = Tt.wrapper.querySelectorAll(ht + " a"), t = 0, r = e.length; t < r; t++) { var a = e[t]; if (a.textContent && !a.querySelector("*") && (!a.className || !a.classList.contains(a, "roll"))) { var n = document.createElement("span");
                            n.setAttribute("data-title", a.text), n.innerHTML = a.innerHTML, a.classList.add("roll"), a.innerHTML = "", a.appendChild(n) } } }() : function() { for (var e = Tt.wrapper.querySelectorAll(ht + " a.roll"), t = 0, r = e.length; t < r; t++) { var a = e[t],
                        n = a.querySelector("span");
                    n && (a.classList.remove("roll"), a.innerHTML = n.innerHTML) } }(), yt.previewLinks ? (w(), A("[data-preview-link=false]")) : (A(), w("[data-preview-link]:not([data-preview-link=false])")), ft && (ft.destroy(), ft = null), r > 1 && yt.autoSlide && yt.autoSlideStoppable && It.canvas && It.requestAnimationFrame && ((ft = new nt(Tt.wrapper, function() { return Math.min(Math.max((Date.now() - Rt) / Dt, 0), 1) })).on("click", at), Bt = !1), !1 === yt.fragments && c(Tt.slides.querySelectorAll(".fragment")).forEach(function(e) { e.classList.add("visible"), e.classList.remove("current-fragment") }); var a = "none";
            yt.slideNumber && !m() && ("all" === yt.showSlideNumber ? a = "block" : "speaker" === yt.showSlideNumber && de() && (a = "block")), Tt.slideNumber.style.display = a, X() } }

    function o() { if (Ht = !0, window.addEventListener("hashchange", Qe, !1), window.addEventListener("resize", Ge, !1), yt.touch && (Tt.wrapper.addEventListener("touchstart", Be, !1), Tt.wrapper.addEventListener("touchmove", We, !1), Tt.wrapper.addEventListener("touchend", Oe, !1), window.navigator.pointerEnabled ? (Tt.wrapper.addEventListener("pointerdown", Fe, !1), Tt.wrapper.addEventListener("pointermove", Ye, !1), Tt.wrapper.addEventListener("pointerup", Xe, !1)) : window.navigator.msPointerEnabled && (Tt.wrapper.addEventListener("MSPointerDown", Fe, !1), Tt.wrapper.addEventListener("MSPointerMove", Ye, !1), Tt.wrapper.addEventListener("MSPointerUp", Xe, !1))), yt.keyboard && (document.addEventListener("keydown", Re, !1), document.addEventListener("keypress", ze, !1)), yt.progress && Tt.progress && Tt.progress.addEventListener("click", Ve, !1), yt.focusBodyOnPageVisibilityChange) { var e; "hidden" in document ? e = "visibilitychange" : "msHidden" in document ? e = "msvisibilitychange" : "webkitHidden" in document && (e = "webkitvisibilitychange"), e && document.addEventListener(e, et, !1) } var t = ["touchstart", "click"];
        bt.match(/android/gi) && (t = ["touchstart"]), t.forEach(function(e) { Tt.controlsLeft.forEach(function(t) { t.addEventListener(e, Ue, !1) }), Tt.controlsRight.forEach(function(t) { t.addEventListener(e, $e, !1) }), Tt.controlsUp.forEach(function(t) { t.addEventListener(e, _e, !1) }), Tt.controlsDown.forEach(function(t) { t.addEventListener(e, Ke, !1) }), Tt.controlsPrev.forEach(function(t) { t.addEventListener(e, Je, !1) }), Tt.controlsNext.forEach(function(t) { t.addEventListener(e, Ze, !1) }) }) }

    function s() { Ht = !1, document.removeEventListener("keydown", Re, !1), document.removeEventListener("keypress", ze, !1), window.removeEventListener("hashchange", Qe, !1), window.removeEventListener("resize", Ge, !1), Tt.wrapper.removeEventListener("touchstart", Be, !1), Tt.wrapper.removeEventListener("touchmove", We, !1), Tt.wrapper.removeEventListener("touchend", Oe, !1), window.navigator.pointerEnabled ? (Tt.wrapper.removeEventListener("pointerdown", Fe, !1), Tt.wrapper.removeEventListener("pointermove", Ye, !1), Tt.wrapper.removeEventListener("pointerup", Xe, !1)) : window.navigator.msPointerEnabled && (Tt.wrapper.removeEventListener("MSPointerDown", Fe, !1), Tt.wrapper.removeEventListener("MSPointerMove", Ye, !1), Tt.wrapper.removeEventListener("MSPointerUp", Xe, !1)), yt.progress && Tt.progress && Tt.progress.removeEventListener("click", Ve, !1), ["touchstart", "click"].forEach(function(e) { Tt.controlsLeft.forEach(function(t) { t.removeEventListener(e, Ue, !1) }), Tt.controlsRight.forEach(function(t) { t.removeEventListener(e, $e, !1) }), Tt.controlsUp.forEach(function(t) { t.removeEventListener(e, _e, !1) }), Tt.controlsDown.forEach(function(t) { t.removeEventListener(e, Ke, !1) }), Tt.controlsPrev.forEach(function(t) { t.removeEventListener(e, Je, !1) }), Tt.controlsNext.forEach(function(t) { t.removeEventListener(e, Ze, !1) }) }) }

    function l(e, t) { for (var r in t) e[r] = t[r]; return e }

    function c(e) { return Array.prototype.slice.call(e) }

    function d(e) { if ("string" == typeof e) { if ("null" === e) return null; if ("true" === e) return !0; if ("false" === e) return !1; if (e.match(/^-?[\d\.]+$/)) return parseFloat(e) } return e }

    function u(e, t) { var r = e.x - t.x,
            a = e.y - t.y; return Math.sqrt(r * r + a * a) }

    function p(e, t) { e.style.WebkitTransform = t, e.style.MozTransform = t, e.style.msTransform = t, e.style.transform = t }

    function f(e) { "string" == typeof e.layout && (Mt.layout = e.layout), "string" == typeof e.overview && (Mt.overview = e.overview), Mt.layout ? p(Tt.slides, Mt.layout + " " + Mt.overview) : p(Tt.slides, Mt.overview) }

    function h(e) { var t = document.createElement("style");
        t.type = "text/css", t.styleSheet ? t.styleSheet.cssText = e : t.appendChild(document.createTextNode(e)), document.getElementsByTagName("head")[0].appendChild(t) }

    function v(e, t) { for (var r = e.parentNode; r;) { var a = r.matches || r.matchesSelector || r.msMatchesSelector; if (a && a.call(r, t)) return r;
            r = r.parentNode } return null }

    function g(e) { var t = e.match(/^#([0-9a-f]{3})$/i); if (t && t[1]) return t = t[1], { r: 17 * parseInt(t.charAt(0), 16), g: 17 * parseInt(t.charAt(1), 16), b: 17 * parseInt(t.charAt(2), 16) }; var r = e.match(/^#([0-9a-f]{6})$/i); if (r && r[1]) return r = r[1], { r: parseInt(r.substr(0, 2), 16), g: parseInt(r.substr(2, 2), 16), b: parseInt(r.substr(4, 2), 16) }; var a = e.match(/^rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/i); if (a) return { r: parseInt(a[1], 10), g: parseInt(a[2], 10), b: parseInt(a[3], 10) }; var n = e.match(/^rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\,\s*([\d]+|[\d]*.[\d]+)\s*\)$/i); return n ? { r: parseInt(n[1], 10), g: parseInt(n[2], 10), b: parseInt(n[3], 10), a: parseFloat(n[4]) } : null }

    function m() { return /print-pdf/gi.test(window.location.search) }

    function b() { setTimeout(function() { window.scrollTo(0, 1) }, 10) }

    function y(e, t) { var r = document.createEvent("HTMLEvents", 1, 2);
        r.initEvent(e, !0, !0), l(r, t), Tt.wrapper.dispatchEvent(r), yt.postMessageEvents && window.parent !== window.self && window.parent.postMessage(JSON.stringify({ namespace: "reveal", eventName: e, state: ye() }), "*") }

    function w(e) { c(document.querySelectorAll(e || "a")).forEach(function(e) { /^(http|www)/gi.test(e.getAttribute("href")) && e.addEventListener("click", rt, !1) }) }

    function A(e) { c(document.querySelectorAll(e || "a")).forEach(function(e) { /^(http|www)/gi.test(e.getAttribute("href")) && e.removeEventListener("click", rt, !1) }) }

    function k(e) { "boolean" == typeof e ? e ? L() : S() : Tt.overlay ? S() : L() }

    function L() { if (yt.help) { S(), Tt.overlay = document.createElement("div"), Tt.overlay.classList.add("overlay"), Tt.overlay.classList.add("overlay-help"), Tt.wrapper.appendChild(Tt.overlay); var e = '<p class="title">Keyboard Shortcuts</p><br/>';
            e += "<table><th>KEY</th><th>ACTION</th>"; for (var t in Ot) e += "<tr><td>" + t + "</td><td>" + Ot[t] + "</td></tr>";
            e += "</table>", Tt.overlay.innerHTML = ["<header>", '<a class="close" href="#"><span class="icon"></span></a>', "</header>", '<div class="viewport">', '<div class="viewport-inner">' + e + "</div>", "</div>"].join(""), Tt.overlay.querySelector(".close").addEventListener("click", function(e) { S(), e.preventDefault() }, !1), setTimeout(function() { Tt.overlay.classList.add("visible") }, 1) } }

    function S() { Tt.overlay && (Tt.overlay.parentNode.removeChild(Tt.overlay), Tt.overlay = null) }

    function E() { if (Tt.wrapper && !m()) { var e = q();
            x(yt.width, yt.height), Tt.slides.style.width = e.width + "px", Tt.slides.style.height = e.height + "px", Nt = Math.min(e.presentationWidth / e.width, e.presentationHeight / e.height), Nt = Math.max(Nt, yt.minScale), 1 === (Nt = Math.min(Nt, yt.maxScale)) ? (Tt.slides.style.zoom = "", Tt.slides.style.left = "", Tt.slides.style.top = "", Tt.slides.style.bottom = "", Tt.slides.style.right = "", f({ layout: "" })) : Nt > 1 && It.zoom ? (Tt.slides.style.zoom = Nt, Tt.slides.style.left = "", Tt.slides.style.top = "", Tt.slides.style.bottom = "", Tt.slides.style.right = "", f({ layout: "" })) : (Tt.slides.style.zoom = "", Tt.slides.style.left = "50%", Tt.slides.style.top = "50%", Tt.slides.style.bottom = "auto", Tt.slides.style.right = "auto", f({ layout: "translate(-50%, -50%) scale(" + Nt + ")" })); for (var t = c(Tt.wrapper.querySelectorAll(ht)), r = 0, a = t.length; r < a; r++) { var n = t[r]; "none" !== n.style.display && (yt.center || n.classList.contains("center") ? n.classList.contains("stack") ? n.style.top = 0 : n.style.top = Math.max((e.height - n.scrollHeight) / 2, 0) + "px" : n.style.top = "") }
            _(), G(), D() && P() } }

    function x(e, t) { c(Tt.slides.querySelectorAll("section > .stretch")).forEach(function(r) { var a = function(e, t) { if (t = t || 0, e) { var r, a = e.style.height; return e.style.height = "0px", r = t - e.parentNode.offsetHeight, e.style.height = a + "px", r } return t }(r, t); if (/(img|video)/gi.test(r.nodeName)) { var n = r.naturalWidth || r.videoWidth,
                    i = r.naturalHeight || r.videoHeight,
                    o = Math.min(e / n, a / i);
                r.style.width = n * o + "px", r.style.height = i * o + "px" } else r.style.width = e + "px", r.style.height = a + "px" }) }

    function q(e, t) { var r = { width: yt.width, height: yt.height, presentationWidth: e || Tt.wrapper.offsetWidth, presentationHeight: t || Tt.wrapper.offsetHeight }; return r.presentationWidth -= r.presentationWidth * yt.margin, r.presentationHeight -= r.presentationHeight * yt.margin, "string" == typeof r.width && /%$/.test(r.width) && (r.width = parseInt(r.width, 10) / 100 * r.presentationWidth), "string" == typeof r.height && /%$/.test(r.height) && (r.height = parseInt(r.height, 10) / 100 * r.presentationHeight), r }

    function N(e, t) { "object" == typeof e && "function" == typeof e.setAttribute && e.setAttribute("data-previous-indexv", t || 0) }

    function M(e) { if ("object" == typeof e && "function" == typeof e.setAttribute && e.classList.contains("stack")) { var t = e.hasAttribute("data-start-indexv") ? "data-start-indexv" : "data-previous-indexv"; return parseInt(e.getAttribute(t) || 0, 10) } return 0 }

    function T() { if (yt.overview && !D()) { kt = !0, Tt.wrapper.classList.add("overview"), Tt.wrapper.classList.remove("overview-deactivating"), It.overviewTransitions && setTimeout(function() { Tt.wrapper.classList.add("overview-animated") }, 1), Ee(), Tt.slides.appendChild(Tt.background), c(Tt.wrapper.querySelectorAll(ht)).forEach(function(e) { e.classList.contains("stack") || e.addEventListener("click", tt, !0) }); var e = q();
            Lt = e.width + 70, St = e.height + 70, yt.rtl && (Lt = -Lt), U(), I(), P(), E(), y("overviewshown", { indexh: ot, indexv: st, currentSlide: ct }) } }

    function I() { c(Tt.wrapper.querySelectorAll(vt)).forEach(function(e, t) { e.setAttribute("data-index-h", t), p(e, "translate3d(" + t * Lt + "px, 0, 0)"), e.classList.contains("stack") && c(e.querySelectorAll("section")).forEach(function(e, r) { e.setAttribute("data-index-h", t), e.setAttribute("data-index-v", r), p(e, "translate3d(0, " + r * St + "px, 0)") }) }), c(Tt.background.childNodes).forEach(function(e, t) { p(e, "translate3d(" + t * Lt + "px, 0, 0)"), c(e.querySelectorAll(".slide-background")).forEach(function(e, t) { p(e, "translate3d(0, " + t * St + "px, 0)") }) }) }

    function P() { var e = Math.min(window.innerWidth, window.innerHeight);
        f({ overview: ["scale(" + Math.max(e / 5, 150) / e + ")", "translateX(" + -ot * Lt + "px)", "translateY(" + -st * St + "px)"].join(" ") }) }

    function C() { yt.overview && (kt = !1, Tt.wrapper.classList.remove("overview"), Tt.wrapper.classList.remove("overview-animated"), Tt.wrapper.classList.add("overview-deactivating"), setTimeout(function() { Tt.wrapper.classList.remove("overview-deactivating") }, 1), Tt.wrapper.appendChild(Tt.background), c(Tt.wrapper.querySelectorAll(ht)).forEach(function(e) { p(e, ""), e.removeEventListener("click", tt, !0) }), c(Tt.background.querySelectorAll(".slide-background")).forEach(function(e) { p(e, "") }), f({ overview: "" }), Y(ot, st), E(), Se(), y("overviewhidden", { indexh: ot, indexv: st, currentSlide: ct })) }

    function H(e) { "boolean" == typeof e ? e ? T() : C() : D() ? C() : T() }

    function D() { return kt }

    function z(e) { return (e = e || ct) && e.parentNode && !!e.parentNode.nodeName.match(/section/i) }

    function R() { if (yt.pause) { var e = Tt.wrapper.classList.contains("paused");
            Ee(), Tt.wrapper.classList.add("paused"), !1 === e && y("paused") } }

    function B() { var e = Tt.wrapper.classList.contains("paused");
        Tt.wrapper.classList.remove("paused"), Se(), e && y("resumed") }

    function W(e) { "boolean" == typeof e ? e ? R() : B() : O() ? B() : R() }

    function O() { return Tt.wrapper.classList.contains("paused") }

    function F(e) { "boolean" == typeof e ? e ? qe() : xe() : Bt ? qe() : xe() }

    function Y(e, r, a, n) { lt = ct; var i = Tt.wrapper.querySelectorAll(vt); if (0 !== i.length) { void 0 !== r || D() || (r = M(i[e])), lt && lt.parentNode && lt.parentNode.classList.contains("stack") && N(lt.parentNode, st); var o = qt.concat();
            qt.length = 0; var s = ot || 0,
                l = st || 0;
            ot = V(vt, void 0 === e ? ot : e), st = V(gt, void 0 === r ? st : r), U(), E();
            e: for (var d = 0, u = qt.length; d < u; d++) { for (var p = 0; p < o.length; p++)
                    if (o[p] === qt[d]) { o.splice(p, 1); continue e }
                document.documentElement.classList.add(qt[d]), y(qt[d]) }
            for (; o.length;) document.documentElement.classList.remove(o.pop());
            D() && P(); var f = i[ot],
                h = f.querySelectorAll("section");
            ct = h[st] || f, void 0 !== a && Ae(a); var v = ot !== s || st !== l;
            v ? y("slidechanged", { indexh: ot, indexv: st, previousSlide: lt, currentSlide: ct, origin: n }) : lt = null, lt && (lt.classList.remove("present"), lt.setAttribute("aria-hidden", "true"), Tt.wrapper.querySelector(mt).classList.contains("present") && setTimeout(function() { var e, t = c(Tt.wrapper.querySelectorAll(vt + ".stack")); for (e in t) t[e] && N(t[e], 0) }, 0)), !v && lt || (se(lt), ne(ct)), Tt.statusDiv.textContent = t(ct), Z(), _(), Q(), G(), K(), $(), pe(), Se() } }

    function X() { s(), o(), E(), Dt = yt.autoSlide, Se(), m(), Tt.background.innerHTML = "", Tt.background.classList.add("no-transition"), c(Tt.wrapper.querySelectorAll(vt)).forEach(function(e) { var t = n(e, Tt.background);
                c(e.querySelectorAll("section")).forEach(function(e) { n(e, t), t.classList.add("stack") }) }), yt.parallaxBackgroundImage ? (Tt.background.style.backgroundImage = 'url("' + yt.parallaxBackgroundImage + '")', Tt.background.style.backgroundSize = yt.parallaxBackgroundSize, setTimeout(function() { Tt.wrapper.classList.add("has-parallax-background") }, 1)) : (Tt.background.style.backgroundImage = "", Tt.wrapper.classList.remove("has-parallax-background")), pe(), c(Tt.wrapper.querySelectorAll(vt)).forEach(function(e) { var t = c(e.querySelectorAll("section"));
                t.forEach(function(e, t) { we(e.querySelectorAll(".fragment")) }), 0 === t.length && we(e.querySelectorAll(".fragment")) }), Z(), _(), K(), U(), Q(!0), yt.showNotes && Tt.slides.querySelectorAll("[data-notes], aside.notes").length > 0 ? Tt.wrapper.classList.add("show-notes") : Tt.wrapper.classList.remove("show-notes"), $(),
            function() { var e = function(e, t, r) { c(Tt.slides.querySelectorAll("iframe[" + e + '*="' + t + '"]')).forEach(function(t) { var a = t.getAttribute(e);
                        a && -1 === a.indexOf(r) && t.setAttribute(e, a + (/\?/.test(a) ? "&" : "?") + r) }) };
                e("src", "youtube.com/embed/", "enablejsapi=1"), e("data-src", "youtube.com/embed/", "enablejsapi=1"), e("src", "player.vimeo.com/", "api=1"), e("data-src", "player.vimeo.com/", "api=1"), ut && c(Tt.slides.querySelectorAll("video, audio")).forEach(function(e) { e.controls = !0 }) }(), !1 === yt.autoPlayMedia ? se(ct, { unloadIframes: !1 }) : ne(ct), D() && I() }

    function j() { var e = c(Tt.wrapper.querySelectorAll(vt));
        e.forEach(function(t) { Tt.slides.insertBefore(t, e[Math.floor(Math.random() * e.length)]) }) }

    function V(e, t) { var r = c(Tt.wrapper.querySelectorAll(e)),
            a = r.length,
            n = m(); if (a) { yt.loop && (t %= a) < 0 && (t = a + t), t = Math.max(Math.min(t, a - 1), 0); for (var i = 0; i < a; i++) { var o = r[i],
                    s = yt.rtl && !z(o); if (o.classList.remove("past"), o.classList.remove("present"), o.classList.remove("future"), o.setAttribute("hidden", ""), o.setAttribute("aria-hidden", "true"), o.querySelector("section") && o.classList.add("stack"), n) o.classList.add("present");
                else if (i < t) { if (o.classList.add(s ? "future" : "past"), yt.fragments)
                        for (var l = c(o.querySelectorAll(".fragment")); l.length;) { var d = l.pop();
                            d.classList.add("visible"), d.classList.remove("current-fragment") } } else if (i > t && (o.classList.add(s ? "past" : "future"), yt.fragments))
                    for (var u = c(o.querySelectorAll(".fragment.visible")); u.length;) { var p = u.pop();
                        p.classList.remove("visible"), p.classList.remove("current-fragment") } }
            r[t].classList.add("present"), r[t].removeAttribute("hidden"), r[t].removeAttribute("aria-hidden"); var f = r[t].getAttribute("data-state");
            f && (qt = qt.concat(f.split(" "))) } else t = 0; return t }

    function U() { var e, t = c(Tt.wrapper.querySelectorAll(vt)),
            r = t.length; if (r && void 0 !== ot) { var a = D() ? 10 : yt.viewDistance;
            ut && (a = D() ? 6 : 2), m() && (a = Number.MAX_VALUE); for (var n = 0; n < r; n++) { var i = t[n],
                    o = c(i.querySelectorAll("section")),
                    s = o.length; if (e = Math.abs((ot || 0) - n) || 0, yt.loop && (e = Math.abs(((ot || 0) - n) % (r - a)) || 0), e < a ? ee(i) : te(i), s)
                    for (var l = M(i), d = 0; d < s; d++) { var u = o[d];
                        e + (n === (ot || 0) ? Math.abs((st || 0) - d) : Math.abs(d - l)) < a ? ee(u) : te(u) } }
            Tt.wrapper.querySelectorAll(".slides>section>section").length ? Tt.wrapper.classList.add("has-vertical-slides") : Tt.wrapper.classList.remove("has-vertical-slides"), Tt.wrapper.querySelectorAll(".slides>section").length > 1 ? Tt.wrapper.classList.add("has-horizontal-slides") : Tt.wrapper.classList.remove("has-horizontal-slides") } }

    function $() { yt.showNotes && Tt.speakerNotes && ct && !m() && (Tt.speakerNotes.innerHTML = be() || '<span class="notes-placeholder">No notes on this slide.</span>') }

    function _() { yt.progress && Tt.progressbar && (Tt.progressbar.style.width = ce() * Tt.wrapper.offsetWidth + "px") }

    function K() { if (yt.slideNumber && Tt.slideNumber) { var e = [],
                t = "h.v"; switch ("string" == typeof yt.slideNumber && (t = yt.slideNumber), t) {
                case "c":
                    e.push(le() + 1); break;
                case "c/t":
                    e.push(le() + 1, "/", ve()); break;
                case "h/v":
                    e.push(ot + 1), z() && e.push("/", st + 1); break;
                default:
                    e.push(ot + 1), z() && e.push(".", st + 1) }
            Tt.slideNumber.innerHTML = J(e[0], e[1], e[2]) } }

    function J(e, t, r) { return "number" != typeof r || isNaN(r) ? '<span class="slide-number-a">' + e + "</span>" : '<span class="slide-number-a">' + e + '</span><span class="slide-number-delimiter">' + t + '</span><span class="slide-number-b">' + r + "</span>" }

    function Z() { var e = re(),
            t = ae();
        Tt.controlsLeft.concat(Tt.controlsRight).concat(Tt.controlsUp).concat(Tt.controlsDown).concat(Tt.controlsPrev).concat(Tt.controlsNext).forEach(function(e) { e.classList.remove("enabled"), e.classList.remove("fragmented"), e.setAttribute("disabled", "disabled") }), e.left && Tt.controlsLeft.forEach(function(e) { e.classList.add("enabled"), e.removeAttribute("disabled") }), e.right && Tt.controlsRight.forEach(function(e) { e.classList.add("enabled"), e.removeAttribute("disabled") }), e.up && Tt.controlsUp.forEach(function(e) { e.classList.add("enabled"), e.removeAttribute("disabled") }), e.down && Tt.controlsDown.forEach(function(e) { e.classList.add("enabled"), e.removeAttribute("disabled") }), (e.left || e.up) && Tt.controlsPrev.forEach(function(e) { e.classList.add("enabled"), e.removeAttribute("disabled") }), (e.right || e.down) && Tt.controlsNext.forEach(function(e) { e.classList.add("enabled"), e.removeAttribute("disabled") }), ct && (t.prev && Tt.controlsPrev.forEach(function(e) { e.classList.add("fragmented", "enabled"), e.removeAttribute("disabled") }), t.next && Tt.controlsNext.forEach(function(e) { e.classList.add("fragmented", "enabled"), e.removeAttribute("disabled") }), z(ct) ? (t.prev && Tt.controlsUp.forEach(function(e) { e.classList.add("fragmented", "enabled"), e.removeAttribute("disabled") }), t.next && Tt.controlsDown.forEach(function(e) { e.classList.add("fragmented", "enabled"), e.removeAttribute("disabled") })) : (t.prev && Tt.controlsLeft.forEach(function(e) { e.classList.add("fragmented", "enabled"), e.removeAttribute("disabled") }), t.next && Tt.controlsRight.forEach(function(e) { e.classList.add("fragmented", "enabled"), e.removeAttribute("disabled") }))), yt.controlsTutorial && (!xt && e.down ? Tt.controlsDownArrow.classList.add("highlight") : (Tt.controlsDownArrow.classList.remove("highlight"), !Et && e.right && 0 === st ? Tt.controlsRightArrow.classList.add("highlight") : Tt.controlsRightArrow.classList.remove("highlight"))) }

    function Q(e) { var t = null,
            r = yt.rtl ? "future" : "past",
            a = yt.rtl ? "past" : "future"; if (c(Tt.background.childNodes).forEach(function(n, i) { n.classList.remove("past"), n.classList.remove("present"), n.classList.remove("future"), i < ot ? n.classList.add(r) : i > ot ? n.classList.add(a) : (n.classList.add("present"), t = n), (e || i === ot) && c(n.querySelectorAll(".slide-background")).forEach(function(e, r) { e.classList.remove("past"), e.classList.remove("present"), e.classList.remove("future"), r < st ? e.classList.add("past") : r > st ? e.classList.add("future") : (e.classList.add("present"), i === ot && (t = e)) }) }), dt && se(dt), t) { ne(t); var n = t.style.backgroundImage || ""; /\.gif/i.test(n) && (t.style.backgroundImage = "", window.getComputedStyle(t).opacity, t.style.backgroundImage = n); var i = dt ? dt.getAttribute("data-background-hash") : null,
                o = t.getAttribute("data-background-hash");
            o && o === i && t !== dt && Tt.background.classList.add("no-transition"), dt = t }
        ct && ["has-light-background", "has-dark-background"].forEach(function(e) { ct.classList.contains(e) ? Tt.wrapper.classList.add(e) : Tt.wrapper.classList.remove(e) }), setTimeout(function() { Tt.background.classList.remove("no-transition") }, 1) }

    function G() { if (yt.parallaxBackgroundImage) { var e, t, r = Tt.wrapper.querySelectorAll(vt),
                a = Tt.wrapper.querySelectorAll(gt),
                n = Tt.background.style.backgroundSize.split(" ");
            1 === n.length ? e = t = parseInt(n[0], 10) : (e = parseInt(n[0], 10), t = parseInt(n[1], 10)); var i, o = Tt.background.offsetWidth,
                s = r.length;
            i = ("number" == typeof yt.parallaxBackgroundHorizontal ? yt.parallaxBackgroundHorizontal : s > 1 ? (e - o) / (s - 1) : 0) * ot * -1; var l, c, d = Tt.background.offsetHeight,
                u = a.length;
            l = "number" == typeof yt.parallaxBackgroundVertical ? yt.parallaxBackgroundVertical : (t - d) / (u - 1), c = u > 0 ? l * st : 0, Tt.background.style.backgroundPosition = i + "px " + -c + "px" } }

    function ee(e, t) { t = t || {}, e.style.display = yt.display, c(e.querySelectorAll("img[data-src], video[data-src], audio[data-src]")).forEach(function(e) { e.setAttribute("src", e.getAttribute("data-src")), e.setAttribute("data-lazy-loaded", ""), e.removeAttribute("data-src") }), c(e.querySelectorAll("video, audio")).forEach(function(e) { var t = 0;
            c(e.querySelectorAll("source[data-src]")).forEach(function(e) { e.setAttribute("src", e.getAttribute("data-src")), e.removeAttribute("data-src"), e.setAttribute("data-lazy-loaded", ""), t += 1 }), t > 0 && e.load() }); var r = fe(e),
            a = me(r.h, r.v); if (a && (a.style.display = "block", !1 === a.hasAttribute("data-loaded"))) { a.setAttribute("data-loaded", "true"); var n = e.getAttribute("data-background-image"),
                i = e.getAttribute("data-background-video"),
                o = e.hasAttribute("data-background-video-loop"),
                s = e.hasAttribute("data-background-video-muted"),
                l = e.getAttribute("data-background-iframe"); if (n) a.style.backgroundImage = "url(" + n + ")";
            else if (i && !de()) { var d = document.createElement("video");
                o && d.setAttribute("loop", ""), s && (d.muted = !0), ut && (d.muted = !0, d.autoplay = !0, d.setAttribute("playsinline", "")), i.split(",").forEach(function(e) { d.innerHTML += '<source src="' + e + '">' }), a.appendChild(d) } else if (l && !0 !== t.excludeIframes) { var u = document.createElement("iframe");
                u.setAttribute("allowfullscreen", ""), u.setAttribute("mozallowfullscreen", ""), u.setAttribute("webkitallowfullscreen", ""), /autoplay=(1|true|yes)/gi.test(l) ? u.setAttribute("data-src", l) : u.setAttribute("src", l), u.style.width = "100%", u.style.height = "100%", u.style.maxHeight = "100%", u.style.maxWidth = "100%", a.appendChild(u) } } }

    function te(e) { e.style.display = "none"; var t = fe(e),
            r = me(t.h, t.v);
        r && (r.style.display = "none"), c(e.querySelectorAll("video[data-lazy-loaded][src], audio[data-lazy-loaded][src]")).forEach(function(e) { e.setAttribute("data-src", e.getAttribute("src")), e.removeAttribute("src") }), c(e.querySelectorAll("video[data-lazy-loaded] source[src], audio source[src]")).forEach(function(e) { e.setAttribute("data-src", e.getAttribute("src")), e.removeAttribute("src") }) }

    function re() { var e = Tt.wrapper.querySelectorAll(vt),
            t = Tt.wrapper.querySelectorAll(gt),
            r = { left: ot > 0 || yt.loop, right: ot < e.length - 1 || yt.loop, up: st > 0, down: st < t.length - 1 }; if (yt.rtl) { var a = r.left;
            r.left = r.right, r.right = a } return r }

    function ae() { if (ct && yt.fragments) { var e = ct.querySelectorAll(".fragment"),
                t = ct.querySelectorAll(".fragment:not(.visible)"); return { prev: e.length - t.length > 0, next: !!t.length } } return { prev: !1, next: !1 } }

    function ne(e) { e && !de() && (c(e.querySelectorAll('img[src$=".gif"]')).forEach(function(e) { e.setAttribute("src", e.getAttribute("src")) }), c(e.querySelectorAll("video, audio")).forEach(function(e) { if (!v(e, ".fragment") || v(e, ".fragment.visible")) { var t = yt.autoPlayMedia; "boolean" != typeof t && (t = e.hasAttribute("data-autoplay") || !!v(e, ".slide-background")), t && "function" == typeof e.play && (e.readyState > 1 ? ie({ target: e }) : (e.removeEventListener("loadeddata", ie), e.addEventListener("loadeddata", ie))) } }), c(e.querySelectorAll("iframe[src]")).forEach(function(e) { v(e, ".fragment") && !v(e, ".fragment.visible") || oe({ target: e }) }), c(e.querySelectorAll("iframe[data-src]")).forEach(function(e) { v(e, ".fragment") && !v(e, ".fragment.visible") || e.getAttribute("src") !== e.getAttribute("data-src") && (e.removeEventListener("load", oe), e.addEventListener("load", oe), e.setAttribute("src", e.getAttribute("data-src"))) })) }

    function ie(e) { var t = !!v(e.target, "html"),
            r = !!v(e.target, ".present");
        t && r && (e.target.currentTime = 0, e.target.play()), e.target.removeEventListener("loadeddata", ie) }

    function oe(e) { var t = e.target; if (t && t.contentWindow) { var r = !!v(e.target, "html"),
                a = !!v(e.target, ".present"); if (r && a) { var n = yt.autoPlayMedia; "boolean" != typeof n && (n = t.hasAttribute("data-autoplay") || !!v(t, ".slide-background")), /youtube\.com\/embed\//.test(t.getAttribute("src")) && n ? t.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*") : /player\.vimeo\.com\//.test(t.getAttribute("src")) && n ? t.contentWindow.postMessage('{"method":"play"}', "*") : t.contentWindow.postMessage("slide:start", "*") } } }

    function se(e, t) { t = l({ unloadIframes: !0 }, t || {}), e && e.parentNode && (c(e.querySelectorAll("video, audio")).forEach(function(e) { e.hasAttribute("data-ignore") || "function" != typeof e.pause || (e.setAttribute("data-paused-by-reveal", ""), e.pause()) }), c(e.querySelectorAll("iframe")).forEach(function(e) { e.contentWindow && e.contentWindow.postMessage("slide:stop", "*"), e.removeEventListener("load", oe) }), c(e.querySelectorAll('iframe[src*="youtube.com/embed/"]')).forEach(function(e) {!e.hasAttribute("data-ignore") && e.contentWindow && "function" == typeof e.contentWindow.postMessage && e.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*") }), c(e.querySelectorAll('iframe[src*="player.vimeo.com/"]')).forEach(function(e) {!e.hasAttribute("data-ignore") && e.contentWindow && "function" == typeof e.contentWindow.postMessage && e.contentWindow.postMessage('{"method":"pause"}', "*") }), !0 === t.unloadIframes && c(e.querySelectorAll("iframe[data-src]")).forEach(function(e) { e.setAttribute("src", "about:blank"), e.removeAttribute("src") })) }

    function le() { var e = c(Tt.wrapper.querySelectorAll(vt)),
            t = 0;
        e: for (var r = 0; r < e.length; r++) { for (var a = e[r], n = c(a.querySelectorAll("section")), i = 0; i < n.length; i++) { if (n[i].classList.contains("present")) break e;
                t++ } if (a.classList.contains("present")) break;!1 === a.classList.contains("stack") && t++ }
        return t }

    function ce() { var e = ve(),
            t = le(); if (ct) { var r = ct.querySelectorAll(".fragment"); if (r.length > 0) { t += ct.querySelectorAll(".fragment.visible").length / r.length * .9 } } return t / (e - 1) }

    function de() { return !!window.location.search.match(/receiver/gi) }

    function ue() { var e = window.location.hash,
            t = e.slice(2).split("/"),
            r = e.replace(/#|\//gi, ""); if (isNaN(parseInt(t[0], 10)) && r.length) { var a; if (/^[a-zA-Z][\w:.-]*$/.test(r) && (a = document.getElementById(r)), a) { var n = it.getIndices(a);
                Y(n.h, n.v) } else Y(ot || 0, st || 0) } else { var i = parseInt(t[0], 10) || 0,
                o = parseInt(t[1], 10) || 0;
            i === ot && o === st || Y(i, o) } }

    function pe(e) { if (yt.history)
            if (clearTimeout(Ct), "number" == typeof e) Ct = setTimeout(pe, e);
            else if (ct) { var t = "/",
                r = ct.getAttribute("id");
            r && (r = r.replace(/[^a-zA-Z0-9\-\_\:\.]/g, "")), "string" == typeof r && r.length ? t = "/" + r : ((ot > 0 || st > 0) && (t += ot), st > 0 && (t += "/" + st)), window.location.hash = t } }

    function fe(e) { var t, r = ot,
            a = st; if (e) { var n = z(e),
                i = n ? e.parentNode : e,
                o = c(Tt.wrapper.querySelectorAll(vt));
            r = Math.max(o.indexOf(i), 0), a = void 0, n && (a = Math.max(c(e.parentNode.querySelectorAll("section")).indexOf(e), 0)) } if (!e && ct) { if (ct.querySelectorAll(".fragment").length > 0) { var s = ct.querySelector(".current-fragment");
                t = s && s.hasAttribute("data-fragment-index") ? parseInt(s.getAttribute("data-fragment-index"), 10) : ct.querySelectorAll(".fragment.visible").length - 1 } } return { h: r, v: a, f: t } }

    function he() { return c(Tt.wrapper.querySelectorAll(ht + ":not(.stack)")) }

    function ve() { return he().length }

    function ge(e, t) { var r = Tt.wrapper.querySelectorAll(vt)[e],
            a = r && r.querySelectorAll("section"); return a && a.length && "number" == typeof t ? a ? a[t] : void 0 : r }

    function me(e, t) { var r = ge(e, t); if (r) return r.slideBackgroundElement }

    function be(e) { if ((e = e || ct).hasAttribute("data-notes")) return e.getAttribute("data-notes"); var t = e.querySelector("aside.notes"); return t ? t.innerHTML : null }

    function ye() { var e = fe(); return { indexh: e.h, indexv: e.v, indexf: e.f, paused: O(), overview: D() } }

    function we(e) { var t = [],
            r = [],
            a = [];
        (e = c(e)).forEach(function(e, a) { if (e.hasAttribute("data-fragment-index")) { var n = parseInt(e.getAttribute("data-fragment-index"), 10);
                t[n] || (t[n] = []), t[n].push(e) } else r.push([e]) }); var n = 0; return (t = t.concat(r)).forEach(function(e) { e.forEach(function(e) { a.push(e), e.setAttribute("data-fragment-index", n) }), n++ }), a }

    function Ae(e, r) { if (ct && yt.fragments) { var a = we(ct.querySelectorAll(".fragment")); if (a.length) { if ("number" != typeof e) { var n = we(ct.querySelectorAll(".fragment.visible")).pop();
                    e = n ? parseInt(n.getAttribute("data-fragment-index") || 0, 10) : -1 } "number" == typeof r && (e += r); var i = [],
                    o = []; return c(a).forEach(function(r, a) { r.hasAttribute("data-fragment-index") && (a = parseInt(r.getAttribute("data-fragment-index"), 10)), a <= e ? (r.classList.contains("visible") || i.push(r), r.classList.add("visible"), r.classList.remove("current-fragment"), Tt.statusDiv.textContent = t(r), a === e && (r.classList.add("current-fragment"), ne(r))) : (r.classList.contains("visible") && o.push(r), r.classList.remove("visible"), r.classList.remove("current-fragment")) }), o.length && y("fragmenthidden", { fragment: o[0], fragments: o }), i.length && y("fragmentshown", { fragment: i[0], fragments: i }), Z(), _(), !(!i.length && !o.length) } } return !1 }

    function ke() { return Ae(null, 1) }

    function Le() { return Ae(null, -1) }

    function Se() { if (Ee(), ct && !1 !== yt.autoSlide) { var e = ct.querySelector(".current-fragment");
            e || (e = ct.querySelector(".fragment")); var t = e ? e.getAttribute("data-autoslide") : null,
                r = ct.parentNode ? ct.parentNode.getAttribute("data-autoslide") : null,
                a = ct.getAttribute("data-autoslide");
            Dt = t ? parseInt(t, 10) : a ? parseInt(a, 10) : r ? parseInt(r, 10) : yt.autoSlide, 0 === ct.querySelectorAll(".fragment").length && c(ct.querySelectorAll("video, audio")).forEach(function(e) { e.hasAttribute("data-autoplay") && Dt && 1e3 * e.duration / e.playbackRate > Dt && (Dt = 1e3 * e.duration / e.playbackRate + 1e3) }), !Dt || Bt || O() || D() || it.isLastSlide() && !ae().next && !0 !== yt.loop || (zt = setTimeout(function() { "function" == typeof yt.autoSlideMethod ? yt.autoSlideMethod() : Ce(), Se() }, Dt), Rt = Date.now()), ft && ft.setPlaying(-1 !== zt) } }

    function Ee() { clearTimeout(zt), zt = -1 }

    function xe() { Dt && !Bt && (Bt = !0, y("autoslidepaused"), clearTimeout(zt), ft && ft.setPlaying(!1)) }

    function qe() { Dt && Bt && (Bt = !1, y("autoslideresumed"), Se()) }

    function Ne() { yt.rtl ? (D() || !1 === ke()) && re().left && Y(ot + 1) : (D() || !1 === Le()) && re().left && Y(ot - 1) }

    function Me() { Et = !0, yt.rtl ? (D() || !1 === Le()) && re().right && Y(ot - 1) : (D() || !1 === ke()) && re().right && Y(ot + 1) }

    function Te() {
        (D() || !1 === Le()) && re().up && Y(ot, st - 1) }

    function Ie() { xt = !0, (D() || !1 === ke()) && re().down && Y(ot, st + 1) }

    function Pe() { if (!1 === Le())
            if (re().up) Te();
            else { var e; if (e = yt.rtl ? c(Tt.wrapper.querySelectorAll(vt + ".future")).pop() : c(Tt.wrapper.querySelectorAll(vt + ".past")).pop()) { var t = e.querySelectorAll("section").length - 1 || void 0;
                    Y(ot - 1, t) } } }

    function Ce() { Et = !0, xt = !0, !1 === ke() && (re().down ? Ie() : yt.rtl ? Ne() : Me()) }

    function He(e) { for (; e && "function" == typeof e.hasAttribute;) { if (e.hasAttribute("data-prevent-swipe")) return !0;
            e = e.parentNode } return !1 }

    function De(e) { yt.autoSlideStoppable && xe() }

    function ze(e) { e.shiftKey && 63 === e.charCode && k() }

    function Re(e) { if ("function" == typeof yt.keyboardCondition && !1 === yt.keyboardCondition()) return !0; var t = Bt;
        De(); var r = document.activeElement && "inherit" !== document.activeElement.contentEditable,
            a = document.activeElement && document.activeElement.tagName && /input|textarea/i.test(document.activeElement.tagName),
            n = document.activeElement && document.activeElement.className && /speaker-notes/i.test(document.activeElement.className); if (!(r || a || n || e.shiftKey && 32 !== e.keyCode || e.altKey || e.ctrlKey || e.metaKey)) { var i, o = [66, 86, 190, 191]; if ("object" == typeof yt.keyboard)
                for (i in yt.keyboard) "togglePause" === yt.keyboard[i] && o.push(parseInt(i, 10)); if (O() && -1 === o.indexOf(e.keyCode)) return !1; var s = !1; if ("object" == typeof yt.keyboard)
                for (i in yt.keyboard)
                    if (parseInt(i, 10) === e.keyCode) { var l = yt.keyboard[i]; "function" == typeof l ? l.apply(null, [e]) : "string" == typeof l && "function" == typeof it[l] && it[l].call(), s = !0 }
            if (!1 === s) switch (s = !0, e.keyCode) {
                case 80:
                case 33:
                    Pe(); break;
                case 78:
                case 34:
                    Ce(); break;
                case 72:
                case 37:
                    Ne(); break;
                case 76:
                case 39:
                    Me(); break;
                case 75:
                case 38:
                    Te(); break;
                case 74:
                case 40:
                    Ie(); break;
                case 36:
                    Y(0); break;
                case 35:
                    Y(Number.MAX_VALUE); break;
                case 32:
                    D() ? C() : e.shiftKey ? Pe() : Ce(); break;
                case 13:
                    D() ? C() : s = !1; break;
                case 58:
                case 59:
                case 66:
                case 86:
                case 190:
                case 191:
                    W(); break;
                case 70:
                    ! function() { var e = document.documentElement,
                            t = e.requestFullscreen || e.webkitRequestFullscreen || e.webkitRequestFullScreen || e.mozRequestFullScreen || e.msRequestFullscreen;
                        t && t.apply(e) }(); break;
                case 65:
                    yt.autoSlideStoppable && F(t); break;
                default:
                    s = !1 }
            s ? e.preventDefault && e.preventDefault() : 27 !== e.keyCode && 79 !== e.keyCode || !It.transforms3d || (Tt.overlay ? S() : H(), e.preventDefault && e.preventDefault()), Se() } }

    function Be(e) { if (He(e.target)) return !0;
        Wt.startX = e.touches[0].clientX, Wt.startY = e.touches[0].clientY, Wt.startCount = e.touches.length, 2 === e.touches.length && yt.overview && (Wt.startSpan = u({ x: e.touches[1].clientX, y: e.touches[1].clientY }, { x: Wt.startX, y: Wt.startY })) }

    function We(e) { if (He(e.target)) return !0; if (Wt.captured) bt.match(/android/gi) && e.preventDefault();
        else { De(); var t = e.touches[0].clientX,
                r = e.touches[0].clientY; if (2 === e.touches.length && 2 === Wt.startCount && yt.overview) { var a = u({ x: e.touches[1].clientX, y: e.touches[1].clientY }, { x: Wt.startX, y: Wt.startY });
                Math.abs(Wt.startSpan - a) > Wt.threshold && (Wt.captured = !0, a < Wt.startSpan ? T() : C()), e.preventDefault() } else if (1 === e.touches.length && 2 !== Wt.startCount) { var n = t - Wt.startX,
                    i = r - Wt.startY;
                n > Wt.threshold && Math.abs(n) > Math.abs(i) ? (Wt.captured = !0, Ne()) : n < -Wt.threshold && Math.abs(n) > Math.abs(i) ? (Wt.captured = !0, Me()) : i > Wt.threshold ? (Wt.captured = !0, Te()) : i < -Wt.threshold && (Wt.captured = !0, Ie()), yt.embedded ? (Wt.captured || z(ct)) && e.preventDefault() : e.preventDefault() } } }

    function Oe(e) { Wt.captured = !1 }

    function Fe(e) { e.pointerType !== e.MSPOINTER_TYPE_TOUCH && "touch" !== e.pointerType || (e.touches = [{ clientX: e.clientX, clientY: e.clientY }], Be(e)) }

    function Ye(e) { e.pointerType !== e.MSPOINTER_TYPE_TOUCH && "touch" !== e.pointerType || (e.touches = [{ clientX: e.clientX, clientY: e.clientY }], We(e)) }

    function Xe(e) { e.pointerType !== e.MSPOINTER_TYPE_TOUCH && "touch" !== e.pointerType || (e.touches = [{ clientX: e.clientX, clientY: e.clientY }], Oe()) }

    function je(e) { if (Date.now() - Pt > 600) { Pt = Date.now(); var t = e.detail || -e.wheelDelta;
            t > 0 ? Ce() : t < 0 && Pe() } }

    function Ve(e) { De(), e.preventDefault(); var t = c(Tt.wrapper.querySelectorAll(vt)).length,
            r = Math.floor(e.clientX / Tt.wrapper.offsetWidth * t);
        yt.rtl && (r = t - r), Y(r) }

    function Ue(e) { e.preventDefault(), De(), Ne() }

    function $e(e) { e.preventDefault(), De(), Me() }

    function _e(e) { e.preventDefault(), De(), Te() }

    function Ke(e) { e.preventDefault(), De(), Ie() }

    function Je(e) { e.preventDefault(), De(), Pe() }

    function Ze(e) { e.preventDefault(), De(), Ce() }

    function Qe(e) { ue() }

    function Ge(e) { E() }

    function et(e) {!1 === (document.webkitHidden || document.msHidden || document.hidden) && document.activeElement !== document.body && ("function" == typeof document.activeElement.blur && document.activeElement.blur(), document.body.focus()) }

    function tt(e) { if (Ht && D()) { e.preventDefault(); for (var t = e.target; t && !t.nodeName.match(/section/gi);) t = t.parentNode; if (t && !t.classList.contains("disabled") && (C(), t.nodeName.match(/section/gi))) { Y(parseInt(t.getAttribute("data-index-h"), 10), parseInt(t.getAttribute("data-index-v"), 10)) } } }

    function rt(e) { if (e.currentTarget && e.currentTarget.hasAttribute("href")) { var t = e.currentTarget.getAttribute("href");
            t && (! function(e) { S(), Tt.overlay = document.createElement("div"), Tt.overlay.classList.add("overlay"), Tt.overlay.classList.add("overlay-preview"), Tt.wrapper.appendChild(Tt.overlay), Tt.overlay.innerHTML = ["<header>", '<a class="close" href="#"><span class="icon"></span></a>', '<a class="external" href="' + e + '" target="_blank"><span class="icon"></span></a>', "</header>", '<div class="spinner"></div>', '<div class="viewport">', '<iframe src="' + e + '"></iframe>', '<small class="viewport-inner">', '<span class="x-frame-error">Unable to load iframe. This is likely due to the site\'s policy (x-frame-options).</span>', "</small>", "</div>"].join(""), Tt.overlay.querySelector("iframe").addEventListener("load", function(e) { Tt.overlay.classList.add("loaded") }, !1), Tt.overlay.querySelector(".close").addEventListener("click", function(e) { S(), e.preventDefault() }, !1), Tt.overlay.querySelector(".external").addEventListener("click", function(e) { S() }, !1), setTimeout(function() { Tt.overlay.classList.add("visible") }, 1) }(t), e.preventDefault()) } }

    function at(e) { it.isLastSlide() && !1 === yt.loop ? (Y(0, 0), qe()) : Bt ? qe() : xe() }

    function nt(e, t) { this.diameter = 100, this.diameter2 = this.diameter / 2, this.thickness = 6, this.playing = !1, this.progress = 0, this.progressOffset = 1, this.container = e, this.progressCheck = t, this.canvas = document.createElement("canvas"), this.canvas.className = "playback", this.canvas.width = this.diameter, this.canvas.height = this.diameter, this.canvas.style.width = this.diameter2 + "px", this.canvas.style.height = this.diameter2 + "px", this.context = this.canvas.getContext("2d"), this.container.appendChild(this.canvas), this.render() } var it, ot, st, lt, ct, dt, ut, pt, ft, ht = ".slides section",
        vt = ".slides>section",
        gt = ".slides>section.present>section",
        mt = ".slides>section:first-of-type",
        bt = navigator.userAgent,
        yt = { width: 960, height: 700, margin: .04, minScale: .2, maxScale: 2, controls: !0, controlsTutorial: !0, controlsLayout: "bottom-right", controlsBackArrows: "faded", progress: !0, slideNumber: !1, showSlideNumber: "all", history: !1, keyboard: !0, keyboardCondition: null, overview: !0, center: !0, touch: !0, loop: !1, rtl: !1, shuffle: !1, fragments: !0, embedded: !1, help: !0, pause: !0, showNotes: !1, autoPlayMedia: null, autoSlide: 0, autoSlideStoppable: !0, autoSlideMethod: null, mouseWheel: !1, rollingLinks: !1, hideAddressBar: !0, previewLinks: !1, postMessage: !0, postMessageEvents: !1, focusBodyOnPageVisibilityChange: !0, transition: "slide", transitionSpeed: "default", backgroundTransition: "fade", parallaxBackgroundImage: "", parallaxBackgroundSize: "", parallaxBackgroundHorizontal: null, parallaxBackgroundVertical: null, pdfMaxPagesPerSlide: Number.POSITIVE_INFINITY, pdfPageHeightOffset: -1, viewDistance: 3, display: "block", dependencies: [] },
        wt = !1,
        At = !1,
        kt = !1,
        Lt = null,
        St = null,
        Et = !1,
        xt = !1,
        qt = [],
        Nt = 1,
        Mt = { layout: "", overview: "" },
        Tt = {},
        It = {},
        Pt = 0,
        Ct = 0,
        Ht = !1,
        Dt = 0,
        zt = 0,
        Rt = -1,
        Bt = !1,
        Wt = { startX: 0, startY: 0, startSpan: 0, startCount: 0, captured: !1, threshold: 40 },
        Ot = { "N  ,  SPACE": "Next slide", P: "Previous slide", "&#8592;  ,  H": "Navigate left", "&#8594;  ,  L": "Navigate right", "&#8593;  ,  K": "Navigate up", "&#8595;  ,  J": "Navigate down", Home: "First slide", End: "Last slide", "B  ,  .": "Pause", F: "Fullscreen", "ESC, O": "Slide overview" }; return nt.prototype.setPlaying = function(e) { var t = this.playing;
        this.playing = e, !t && this.playing ? this.animate() : this.render() }, nt.prototype.animate = function() { var e = this.progress;
        this.progress = this.progressCheck(), e > .8 && this.progress < .2 && (this.progressOffset = this.progress), this.render(), this.playing && It.requestAnimationFrameMethod.call(window, this.animate.bind(this)) }, nt.prototype.render = function() { var e = this.playing ? this.progress : 0,
            t = this.diameter2 - this.thickness,
            r = this.diameter2,
            a = this.diameter2;
        this.progressOffset += .1 * (1 - this.progressOffset); var n = -Math.PI / 2 + e * (2 * Math.PI),
            i = -Math.PI / 2 + this.progressOffset * (2 * Math.PI);
        this.context.save(), this.context.clearRect(0, 0, this.diameter, this.diameter), this.context.beginPath(), this.context.arc(r, a, t + 4, 0, 2 * Math.PI, !1), this.context.fillStyle = "rgba( 0, 0, 0, 0.4 )", this.context.fill(), this.context.beginPath(), this.context.arc(r, a, t, 0, 2 * Math.PI, !1), this.context.lineWidth = this.thickness, this.context.strokeStyle = "rgba( 255, 255, 255, 0.2 )", this.context.stroke(), this.playing && (this.context.beginPath(), this.context.arc(r, a, t, i, n, !1), this.context.lineWidth = this.thickness, this.context.strokeStyle = "#fff", this.context.stroke()), this.context.translate(r - 14, a - 14), this.playing ? (this.context.fillStyle = "#fff", this.context.fillRect(0, 0, 10, 28), this.context.fillRect(18, 0, 10, 28)) : (this.context.beginPath(), this.context.translate(4, 0), this.context.moveTo(0, 0), this.context.lineTo(24, 14), this.context.lineTo(0, 28), this.context.fillStyle = "#fff", this.context.fill()), this.context.restore() }, nt.prototype.on = function(e, t) { this.canvas.addEventListener(e, t, !1) }, nt.prototype.off = function(e, t) { this.canvas.removeEventListener(e, t, !1) }, nt.prototype.destroy = function() { this.playing = !1, this.canvas.parentNode && this.container.removeChild(this.canvas) }, it = { VERSION: "3.6.0", initialize: e, configure: i, sync: X, slide: Y, left: Ne, right: Me, up: Te, down: Ie, prev: Pe, next: Ce, navigateFragment: Ae, prevFragment: Le, nextFragment: ke, navigateTo: Y, navigateLeft: Ne, navigateRight: Me, navigateUp: Te, navigateDown: Ie, navigatePrev: Pe, navigateNext: Ce, layout: E, shuffle: j, availableRoutes: re, availableFragments: ae, toggleHelp: k, toggleOverview: H, togglePause: W, toggleAutoSlide: F, isOverview: D, isPaused: O, isAutoSliding: function() { return !(!Dt || Bt) }, isSpeakerNotes: de, loadSlide: ee, unloadSlide: te, addEventListeners: o, removeEventListeners: s, getState: ye, setState: function(e) { if ("object" == typeof e) { Y(d(e.indexh), d(e.indexv), d(e.indexf)); var t = d(e.paused),
                    r = d(e.overview); "boolean" == typeof t && t !== O() && W(t), "boolean" == typeof r && r !== D() && H(r) } }, getSlidePastCount: le, getProgress: ce, getIndices: fe, getSlides: he, getTotalSlides: ve, getSlide: ge, getSlideBackground: me, getSlideNotes: be, getPreviousSlide: function() { return lt }, getCurrentSlide: function() { return ct }, getScale: function() { return Nt }, getConfig: function() { return yt }, getQueryHash: function() { var e = {};
            location.search.replace(/[A-Z0-9]+?=([\w\.%-]*)/gi, function(t) { e[t.split("=").shift()] = t.split("=").pop() }); for (var t in e) { var r = e[t];
                e[t] = d(unescape(r)) } return e }, isFirstSlide: function() { return 0 === ot && 0 === st }, isLastSlide: function() { return !!ct && (!ct.nextElementSibling && (!z(ct) || !ct.parentNode.nextElementSibling)) }, isReady: function() { return At }, addEventListener: function(e, t, r) { "addEventListener" in window && (Tt.wrapper || document.querySelector(".reveal")).addEventListener(e, t, r) }, removeEventListener: function(e, t, r) { "addEventListener" in window && (Tt.wrapper || document.querySelector(".reveal")).removeEventListener(e, t, r) }, triggerKey: function(e) { Re({ keyCode: e }) }, registerKeyboardShortcut: function(e, t) { Ot[e] = t } } });