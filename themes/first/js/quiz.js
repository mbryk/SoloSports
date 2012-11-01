/*
 * jQuery JavaScript Library v1.4.4
 * http://jquery.com/
 *
 * Copyright 2010, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 * Copyright 2010, The Dojo Foundation
 * Released under the MIT, BSD, and GPL Licenses.
 *
 * Date: Thu Nov 11 19:04:53 2010 -0500
 */

(function (aw, aA) {
    function j(t, c, E) {
        if (E === aA && t.nodeType === 1) {
            E = t.getAttribute("data-" + c);
            if (typeof E === "string") {
                try {
                    E = E === "true" ? true : E === "false" ? false : E === "null" ? null : !Q.isNaN(E) ? parseFloat(E) : R.test(E) ? Q.parseJSON(E) : E
                } catch(B) {}
                Q.data(t, c, E)
            } else {
                E = aA
            }
        }
        return E
    }
    function al() {
        return false
    }
    function J() {
        return true
    }
    function aY(t, c, B) {
        B[0].type = t;
        return Q.event.handle.apply(c, B)
    }
    function A(aa) {
        var X, W, V, U, T, P, S, E, Z, c, B, t = [];
        U = [];
        T = Q.data(this, this.nodeType ? "events" : "__events__");
        if (typeof T === "function") {
            T = T.events
        }
        if (! (aa.liveFired === this || !T || !T.live || aa.button && aa.type === "click")) {
            if (aa.namespace) {
                B = RegExp("(^|\\.)" + aa.namespace.split(".").join("\\.(?:.*\\.)?") + "(\\.|$)")
            }
            aa.liveFired = this;
            var Y = T.live.slice(0);
            for (S = 0; S < Y.length; S++) {
                T = Y[S];
                T.origType.replace(ai, "") === aa.type ? U.push(T.selector) : Y.splice(S--, 1)
            }
            U = Q(aa.target).closest(U, aa.currentTarget);
            E = 0;
            for (Z = U.length; E < Z; E++) {
                c = U[E];
                for (S = 0; S < Y.length; S++) {
                    T = Y[S];
                    if (c.selector === T.selector && (!B || B.test(T.namespace))) {
                        P = c.elem;
                        V = null;
                        if (T.preType === "mouseenter" || T.preType === "mouseleave") {
                            aa.type = T.preType;
                            V = Q(aa.relatedTarget).closest(T.selector)[0]
                        }
                        if (!V || V !== P) {
                            t.push({
                                elem: P,
                                handleObj: T,
                                level: c.level
                            })
                        }
                    }
                }
            }
            E = 0;
            for (Z = t.length; E < Z; E++) {
                U = t[E];
                if (W && U.level > W) {
                    break
                }
                aa.currentTarget = U.elem;
                aa.data = U.handleObj.data;
                aa.handleObj = U.handleObj;
                B = U.handleObj.origHandler.apply(U.elem, arguments);
                if (B === false || aa.isPropagationStopped()) {
                    W = U.level;
                    if (B === false) {
                        X = false
                    }
                    if (aa.isImmediatePropagationStopped()) {
                        break
                    }
                }
            }
            return X
        }
    }
    function ah(t, c) {
        return (t && t !== "*" ? t + "." : "") + c.replace(n, "`").replace(a2, "&")
    }
    function aL(t, c, E) {
        if (Q.isFunction(c)) {
            return Q.grep(t, function (S, P) {
                return !! c.call(S, P, S) === E
            })
        } else {
            if (c.nodeType) {
                return Q.grep(t, function (P) {
                    return P === c === E
                })
            } else {
                if (typeof c === "string") {
                    var B = Q.grep(t, function (P) {
                        return P.nodeType === 1
                    });
                    if (aQ.test(c)) {
                        return Q.filter(c, B, !E)
                    } else {
                        c = Q.filter(c, B)
                    }
                }
            }
        }
        return Q.grep(t, function (P) {
            return Q.inArray(P, c) >= 0 === E
        })
    }
    function ax(t, c) {
        var B = 0;
        c.each(function () {
            if (this.nodeName === (t[B] && t[B].nodeName)) {
                var T = Q.data(t[B++]),
                S = Q.data(this, T);
                if (T = T && T.events) {
                    delete S.handle;
                    S.events = {};
                    for (var P in T) {
                        for (var E in T[P]) {
                            Q.event.add(this, P, T[P][E], T[P][E].data)
                        }
                    }
                }
            }
        })
    }
    function aD(t, c) {
        c.src ? Q.ajax({
            url: c.src,
            async: false,
            dataType: "script"
        }) : Q.globalEval(c.text || c.textContent || c.innerHTML || "");
        c.parentNode && c.parentNode.removeChild(c)
    }
    function O(t, c, E) {
        var B = c === "width" ? t.offsetWidth : t.offsetHeight;
        if (E === "border") {
            return B
        }
        Q.each(c === "width" ? ae : F, function () {
            E || (B -= parseFloat(Q.css(t, "padding" + this)) || 0);
            if (E === "margin") {
                B += parseFloat(Q.css(t, "margin" + this)) || 0
            } else {
                B -= parseFloat(Q.css(t, "border" + this + "Width")) || 0
            }
        });
        return B
    }
    function u(t, c, E, B) {
        if (Q.isArray(c) && c.length) {
            Q.each(c, function (S, P) {
                E || q.test(t) ? B(t, P) : u(t + "[" + (typeof P === "object" || Q.isArray(P) ? S : "") + "]", P, E, B)
            })
        } else {
            if (!E && c != null && typeof c === "object") {
                Q.isEmptyObject(c) ? B(t, "") : Q.each(c, function (S, P) {
                    u(t + "[" + S + "]", P, E, B)
                })
            } else {
                B(t, c)
            }
        }
    }
    function an(t, c) {
        var B = {};
        Q.each(z.concat.apply([], z.slice(0, c)), function () {
            B[this] = t
        });
        return B
    }
    function m(t) {
        if (!g[t]) {
            var c = Q("<" + t + ">").appendTo("body"),
            B = c.css("display");
            c.remove();
            if (B === "none" || B === "") {
                B = "block"
            }
            g[t] = B
        }
        return g[t]
    }
    function aV(c) {
        return Q.isWindow(c) ? c : c.nodeType === 9 ? c.defaultView || c.parentWindow : false
    }
    var H = aw.document,
    Q = function () {
        function bi() {
            if (!bh.isReady) {
                try {
                    H.documentElement.doScroll("left")
                } catch(bj) {
                    setTimeout(bi, 1);
                    return
                }
                bh.ready()
            }
        }
        var bh = function (bj, bk) {
            return new bh.fn.init(bj, bk)
        },
        bg = aw.jQuery,
        bf = aw.$,
        be,
        bc = /^(?:[^<]*(<[\w\W]+>)[^>]*$|#([\w\-]+)$)/,
        a9 = /\S/,
        ba = /^\s+/,
        a6 = /\s+$/,
        V = /\W/,
        ab = /\d/,
        a5 = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
        aa = /^[\],:{}\s]*$/,
        T = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
        W = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
        U = /(?:^|:|,)(?:\s*\[)+/g,
        P = /(webkit)[ \/]([\w.]+)/,
        bd = /(opera)(?:.*version)?[ \/]([\w.]+)/,
        bb = /(msie) ([\w.]+)/,
        a7 = /(mozilla)(?:.*? rv:([\w.]+))?/,
        a8 = navigator.userAgent,
        a4 = false,
        a3 = [],
        Y,
        S = Object.prototype.toString,
        X = Object.prototype.hasOwnProperty,
        E = Array.prototype.push,
        B = Array.prototype.slice,
        t = String.prototype.trim,
        Z = Array.prototype.indexOf,
        c = {};
        bh.fn = bh.prototype = {
            init: function (bk, bm) {
                var bj, bn, bl;
                if (!bk) {
                    return this
                }
                if (bk.nodeType) {
                    this.context = this[0] = bk;
                    this.length = 1;
                    return this
                }
                if (bk === "body" && !bm && H.body) {
                    this.context = H;
                    this[0] = H.body;
                    this.selector = "body";
                    this.length = 1;
                    return this
                }
                if (typeof bk === "string") {
                    if ((bj = bc.exec(bk)) && (bj[1] || !bm)) {
                        if (bj[1]) {
                            bl = bm ? bm.ownerDocument || bm : H;
                            if (bn = a5.exec(bk)) {
                                if (bh.isPlainObject(bm)) {
                                    bk = [H.createElement(bn[1])];
                                    bh.fn.attr.call(bk, bm, true)
                                } else {
                                    bk = [bl.createElement(bn[1])]
                                }
                            } else {
                                bn = bh.buildFragment([bj[1]], [bl]);
                                bk = (bn.cacheable ? bn.fragment.cloneNode(true) : bn.fragment).childNodes
                            }
                            return bh.merge(this, bk)
                        } else {
                            if ((bn = H.getElementById(bj[2])) && bn.parentNode) {
                                if (bn.id !== bj[2]) {
                                    return be.find(bk)
                                }
                                this.length = 1;
                                this[0] = bn
                            }
                            this.context = H;
                            this.selector = bk;
                            return this
                        }
                    } else {
                        if (!bm && !V.test(bk)) {
                            this.selector = bk;
                            this.context = H;
                            bk = H.getElementsByTagName(bk);
                            return bh.merge(this, bk)
                        } else {
                            return !bm || bm.jquery ? (bm || be).find(bk) : bh(bm).find(bk)
                        }
                    }
                } else {
                    if (bh.isFunction(bk)) {
                        return be.ready(bk)
                    }
                }
                if (bk.selector !== aA) {
                    this.selector = bk.selector;
                    this.context = bk.context
                }
                return bh.makeArray(bk, this)
            },
            selector: "",
            jquery: "1.4.4",
            length: 0,
            size: function () {
                return this.length
            },
            toArray: function () {
                return B.call(this, 0)
            },
            get: function (bj) {
                return bj == null ? this.toArray() : bj < 0 ? this.slice(bj)[0] : this[bj]
            },
            pushStack: function (bk, bl, bj) {
                var bm = bh();
                bh.isArray(bk) ? E.apply(bm, bk) : bh.merge(bm, bk);
                bm.prevObject = this;
                bm.context = this.context;
                if (bl === "find") {
                    bm.selector = this.selector + (this.selector ? " " : "") + bj
                } else {
                    if (bl) {
                        bm.selector = this.selector + "." + bl + "(" + bj + ")"
                    }
                }
                return bm
            },
            each: function (bj, bk) {
                return bh.each(this, bj, bk)
            },
            ready: function (bj) {
                bh.bindReady();
                if (bh.isReady) {
                    bj.call(H, bh)
                } else {
                    a3 && a3.push(bj)
                }
                return this
            },
            eq: function (bj) {
                return bj === -1 ? this.slice(bj) : this.slice(bj, +bj + 1)
            },
            first: function () {
                return this.eq(0)
            },
            last: function () {
                return this.eq(-1)
            },
            slice: function () {
                return this.pushStack(B.apply(this, arguments), "slice", B.call(arguments).join(","))
            },
            map: function (bj) {
                return this.pushStack(bh.map(this, function (bl, bk) {
                    return bj.call(bl, bk, bl)
                }))
            },
            end: function () {
                return this.prevObject || bh(null)
            },
            push: E,
            sort: [].sort,
            splice: [].splice
        };
        bh.fn.init.prototype = bh.fn;
        bh.extend = bh.fn.extend = function () {
            var bj, br, bo, bl, bn, bp = arguments[0] || {},
            bm = 1,
            bk = arguments.length,
            bq = false;
            if (typeof bp === "boolean") {
                bq = bp;
                bp = arguments[1] || {};
                bm = 2
            }
            if (typeof bp !== "object" && !bh.isFunction(bp)) {
                bp = {}
            }
            if (bk === bm) {
                bp = this;
                --bm
            }
            for (; bm < bk; bm++) {
                if ((bj = arguments[bm]) != null) {
                    for (br in bj) {
                        bo = bp[br];
                        bl = bj[br];
                        if (bp !== bl) {
                            if (bq && bl && (bh.isPlainObject(bl) || (bn = bh.isArray(bl)))) {
                                if (bn) {
                                    bn = false;
                                    bo = bo && bh.isArray(bo) ? bo : []
                                } else {
                                    bo = bo && bh.isPlainObject(bo) ? bo : {}
                                }
                                bp[br] = bh.extend(bq, bo, bl)
                            } else {
                                if (bl !== aA) {
                                    bp[br] = bl
                                }
                            }
                        }
                    }
                }
            }
            return bp
        };
        bh.extend({
            noConflict: function (bj) {
                aw.$ = bf;
                if (bj) {
                    aw.jQuery = bg
                }
                return bh
            },
            isReady: false,
            readyWait: 1,
            ready: function (bk) {
                bk === true && bh.readyWait--;
                if (!bh.readyWait || bk !== true && !bh.isReady) {
                    if (!H.body) {
                        return setTimeout(bh.ready, 1)
                    }
                    bh.isReady = true;
                    if (! (bk !== true && --bh.readyWait > 0)) {
                        if (a3) {
                            var bl = 0,
                            bj = a3;
                            for (a3 = null; bk = bj[bl++];) {
                                bk.call(H, bh)
                            }
                            bh.fn.trigger && bh(H).trigger("ready").unbind("ready")
                        }
                    }
                }
            },
            bindReady: function () {
                if (!a4) {
                    a4 = true;
                    if (H.readyState === "complete") {
                        return setTimeout(bh.ready, 1)
                    }
                    if (H.addEventListener) {
                        H.addEventListener("DOMContentLoaded", Y, false);
                        aw.addEventListener("load", bh.ready, false)
                    } else {
                        if (H.attachEvent) {
                            H.attachEvent("onreadystatechange", Y);
                            aw.attachEvent("onload", bh.ready);
                            var bj = false;
                            try {
                                bj = aw.frameElement == null
                            } catch(bk) {}
                            H.documentElement.doScroll && bj && bi()
                        }
                    }
                }
            },
            isFunction: function (bj) {
                return bh.type(bj) === "function"
            },
            isArray: Array.isArray ||
            function (bj) {
                return bh.type(bj) === "array"
            },
            isWindow: function (bj) {
                return bj && typeof bj === "object" && "setInterval" in bj
            },
            isNaN: function (bj) {
                return bj == null || !ab.test(bj) || isNaN(bj)
            },
            type: function (bj) {
                return bj == null ? String(bj) : c[S.call(bj)] || "object"
            },
            isPlainObject: function (bj) {
                if (!bj || bh.type(bj) !== "object" || bj.nodeType || bh.isWindow(bj)) {
                    return false
                }
                if (bj.constructor && !X.call(bj, "constructor") && !X.call(bj.constructor.prototype, "isPrototypeOf")) {
                    return false
                }
                for (var bk in bj) {}
                return bk === aA || X.call(bj, bk)
            },
            isEmptyObject: function (bj) {
                for (var bk in bj) {
                    return false
                }
                return true
            },
            error: function (bj) {
                throw bj
            },
            parseJSON: function (bj) {
                if (typeof bj !== "string" || !bj) {
                    return null
                }
                bj = bh.trim(bj);
                if (aa.test(bj.replace(T, "@").replace(W, "]").replace(U, ""))) {
                    return aw.JSON && aw.JSON.parse ? aw.JSON.parse(bj) : (new Function("return " + bj))()
                } else {
                    bh.error("Invalid JSON: " + bj)
                }
            },
            noop: function () {},
            globalEval: function (bk) {
                if (bk && a9.test(bk)) {
                    var bl = H.getElementsByTagName("head")[0] || H.documentElement,
                    bj = H.createElement("script");
                    bj.type = "text/javascript";
                    if (bh.support.scriptEval) {
                        bj.appendChild(H.createTextNode(bk))
                    } else {
                        bj.text = bk
                    }
                    bl.insertBefore(bj, bl.firstChild);
                    bl.removeChild(bj)
                }
            },
            nodeName: function (bj, bk) {
                return bj.nodeName && bj.nodeName.toUpperCase() === bk.toUpperCase()
            },
            each: function (bl, bo, bk) {
                var bp, bm = 0,
                bn = bl.length,
                bj = bn === aA || bh.isFunction(bl);
                if (bk) {
                    if (bj) {
                        for (bp in bl) {
                            if (bo.apply(bl[bp], bk) === false) {
                                break
                            }
                        }
                    } else {
                        for (; bm < bn;) {
                            if (bo.apply(bl[bm++], bk) === false) {
                                break
                            }
                        }
                    }
                } else {
                    if (bj) {
                        for (bp in bl) {
                            if (bo.call(bl[bp], bp, bl[bp]) === false) {
                                break
                            }
                        }
                    } else {
                        for (bk = bl[0]; bm < bn && bo.call(bk, bm, bk) !== false; bk = bl[++bm]) {}
                    }
                }
                return bl
            },
            trim: t ?
            function (bj) {
                return bj == null ? "" : t.call(bj)
            } : function (bj) {
                return bj == null ? "" : bj.toString().replace(ba, "").replace(a6, "")
            },
            makeArray: function (bk, bl) {
                var bj = bl || [];
                if (bk != null) {
                    var bm = bh.type(bk);
                    bk.length == null || bm === "string" || bm === "function" || bm === "regexp" || bh.isWindow(bk) ? E.call(bj, bk) : bh.merge(bj, bk)
                }
                return bj
            },
            inArray: function (bk, bl) {
                if (bl.indexOf) {
                    return bl.indexOf(bk)
                }
                for (var bj = 0, bm = bl.length; bj < bm; bj++) {
                    if (bl[bj] === bk) {
                        return bj
                    }
                }
                return -1
            },
            merge: function (bk, bm) {
                var bj = bk.length,
                bn = 0;
                if (typeof bm.length === "number") {
                    for (var bl = bm.length; bn < bl; bn++) {
                        bk[bj++] = bm[bn]
                    }
                } else {
                    for (; bm[bn] !== aA;) {
                        bk[bj++] = bm[bn++]
                    }
                }
                bk.length = bj;
                return bk
            },
            grep: function (bl, bo, bk) {
                var bp = [],
                bm;
                bk = !!bk;
                for (var bn = 0, bj = bl.length; bn < bj; bn++) {
                    bm = !!bo(bl[bn], bn);
                    bk !== bm && bp.push(bl[bn])
                }
                return bp
            },
            map: function (bl, bo, bk) {
                for (var bp = [], bm, bn = 0, bj = bl.length; bn < bj; bn++) {
                    bm = bo(bl[bn], bn, bk);
                    if (bm != null) {
                        bp[bp.length] = bm
                    }
                }
                return bp.concat.apply([], bp)
            },
            guid: 1,
            proxy: function (bk, bl, bj) {
                if (arguments.length === 2) {
                    if (typeof bl === "string") {
                        bj = bk;
                        bk = bj[bl];
                        bl = aA
                    } else {
                        if (bl && !bh.isFunction(bl)) {
                            bj = bl;
                            bl = aA
                        }
                    }
                }
                if (!bl && bk) {
                    bl = function () {
                        return bk.apply(bj || this, arguments)
                    }
                }
                if (bk) {
                    bl.guid = bk.guid = bk.guid || bl.guid || bh.guid++
                }
                return bl
            },
            access: function (bl, bo, bk, bq, bm, bn) {
                var bj = bl.length;
                if (typeof bo === "object") {
                    for (var bp in bo) {
                        bh.access(bl, bp, bo[bp], bq, bm, bk)
                    }
                    return bl
                }
                if (bk !== aA) {
                    bq = !bn && bq && bh.isFunction(bk);
                    for (bp = 0; bp < bj; bp++) {
                        bm(bl[bp], bo, bq ? bk.call(bl[bp], bp, bm(bl[bp], bo)) : bk, bn)
                    }
                    return bl
                }
                return bj ? bm(bl[0], bo) : aA
            },
            now: function () {
                return (new Date).getTime()
            },
            uaMatch: function (bj) {
                bj = bj.toLowerCase();
                bj = P.exec(bj) || bd.exec(bj) || bb.exec(bj) || bj.indexOf("compatible") < 0 && a7.exec(bj) || [];
                return {
                    browser: bj[1] || "",
                    version: bj[2] || "0"
                }
            },
            browser: {}
        });
        bh.each("Boolean Number String Function Array Date RegExp Object".split(" "), function (bj, bk) {
            c["[object " + bk + "]"] = bk.toLowerCase()
        });
        a8 = bh.uaMatch(a8);
        if (a8.browser) {
            bh.browser[a8.browser] = true;
            bh.browser.version = a8.version
        }
        if (bh.browser.webkit) {
            bh.browser.safari = true
        }
        if (Z) {
            bh.inArray = function (bj, bk) {
                return Z.call(bk, bj)
            }
        }
        if (!/\s/.test("\u00a0")) {
            ba = /^[\s\xA0]+/;
            a6 = /[\s\xA0]+$/
        }
        be = bh(H);
        if (H.addEventListener) {
            Y = function () {
                H.removeEventListener("DOMContentLoaded", Y, false);
                bh.ready()
            }
        } else {
            if (H.attachEvent) {
                Y = function () {
                    if (H.readyState === "complete") {
                        H.detachEvent("onreadystatechange", Y);
                        bh.ready()
                    }
                }
            }
        }
        return aw.jQuery = aw.$ = bh
    } ();
    (function () {
        Q.support = {};
        var X = H.documentElement,
        V = H.createElement("script"),
        U = H.createElement("div"),
        T = "script" + Q.now();
        U.style.display = "none";
        U.innerHTML = "   <link/><table></table><a href='/a' style='color:red;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
        var S = U.getElementsByTagName("*"),
        P = U.getElementsByTagName("a")[0],
        B = H.createElement("select"),
        E = B.appendChild(H.createElement("option"));
        if (! (!S || !S.length || !P)) {
            Q.support = {
                leadingWhitespace: U.firstChild.nodeType === 3,
                tbody: !U.getElementsByTagName("tbody").length,
                htmlSerialize: !!U.getElementsByTagName("link").length,
                style: /red/.test(P.getAttribute("style")),
                hrefNormalized: P.getAttribute("href") === "/a",
                opacity: /^0.55$/.test(P.style.opacity),
                cssFloat: !!P.style.cssFloat,
                checkOn: U.getElementsByTagName("input")[0].value === "on",
                optSelected: E.selected,
                deleteExpando: true,
                optDisabled: false,
                checkClone: false,
                scriptEval: false,
                noCloneEvent: true,
                boxModel: null,
                inlineBlockNeedsLayout: false,
                shrinkWrapBlocks: false,
                reliableHiddenOffsets: true
            };
            B.disabled = true;
            Q.support.optDisabled = !E.disabled;
            V.type = "text/javascript";
            try {
                V.appendChild(H.createTextNode("window." + T + "=1;"))
            } catch(t) {}
            X.insertBefore(V, X.firstChild);
            if (aw[T]) {
                Q.support.scriptEval = true;
                delete aw[T]
            }
            try {
                delete V.test
            } catch(W) {
                Q.support.deleteExpando = false
            }
            X.removeChild(V);
            if (U.attachEvent && U.fireEvent) {
                U.attachEvent("onclick", function c() {
                    Q.support.noCloneEvent = false;
                    U.detachEvent("onclick", c)
                });
                U.cloneNode(true).fireEvent("onclick")
            }
            U = H.createElement("div");
            U.innerHTML = "<input type='radio' name='radiotest' checked='checked'/>";
            X = H.createDocumentFragment();
            X.appendChild(U.firstChild);
            Q.support.checkClone = X.cloneNode(true).cloneNode(true).lastChild.checked;
            Q(function () {
                var Z = H.createElement("div");
                Z.style.width = Z.style.paddingLeft = "1px";
                H.body.appendChild(Z);
                Q.boxModel = Q.support.boxModel = Z.offsetWidth === 2;
                if ("zoom" in Z.style) {
                    Z.style.display = "inline";
                    Z.style.zoom = 1;
                    Q.support.inlineBlockNeedsLayout = Z.offsetWidth === 2;
                    Z.style.display = "";
                    Z.innerHTML = "<div style='width:4px;'></div>";
                    Q.support.shrinkWrapBlocks = Z.offsetWidth !== 2
                }
                Z.innerHTML = "<table><tr><td style='padding:0;display:none'></td><td>t</td></tr></table>";
                var Y = Z.getElementsByTagName("td");
                Q.support.reliableHiddenOffsets = Y[0].offsetHeight === 0;
                Y[0].style.display = "";
                Y[1].style.display = "none";
                Q.support.reliableHiddenOffsets = Q.support.reliableHiddenOffsets && Y[0].offsetHeight === 0;
                Z.innerHTML = "";
                H.body.removeChild(Z).style.display = "none"
            });
            X = function (Z) {
                var Y = H.createElement("div");
                Z = "on" + Z;
                var aa = Z in Y;
                if (!aa) {
                    Y.setAttribute(Z, "return;");
                    aa = typeof Y[Z] === "function"
                }
                return aa
            };
            Q.support.submitBubbles = X("submit");
            Q.support.changeBubbles = X("change");
            X = V = U = S = P = null
        }
    })();
    var a1 = {},
    R = /^(?:\{.*\}|\[.*\])$/;
    Q.extend({
        cache: {},
        uuid: 0,
        expando: "jQuery" + Q.now(),
        noData: {
            embed: true,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: true
        },
        data: function (t, c, S) {
            if (Q.acceptData(t)) {
                t = t == aw ? a1 : t;
                var P = t.nodeType,
                E = P ? t[Q.expando] : null,
                B = Q.cache;
                if (! (P && !E && typeof c === "string" && S === aA)) {
                    if (P) {
                        E || (t[Q.expando] = E = ++Q.uuid)
                    } else {
                        B = t
                    }
                    if (typeof c === "object") {
                        if (P) {
                            B[E] = Q.extend(B[E], c)
                        } else {
                            Q.extend(B, c)
                        }
                    } else {
                        if (P && !B[E]) {
                            B[E] = {}
                        }
                    }
                    t = P ? B[E] : B;
                    if (S !== aA) {
                        t[c] = S
                    }
                    return typeof c === "string" ? t[c] : t
                }
            }
        },
        removeData: function (B, c) {
            if (Q.acceptData(B)) {
                B = B == aw ? a1 : B;
                var T = B.nodeType,
                S = T ? B[Q.expando] : B,
                P = Q.cache,
                E = T ? P[S] : S;
                if (c) {
                    if (E) {
                        delete E[c];
                        T && Q.isEmptyObject(E) && Q.removeData(B)
                    }
                } else {
                    if (T && Q.support.deleteExpando) {
                        delete B[Q.expando]
                    } else {
                        if (B.removeAttribute) {
                            B.removeAttribute(Q.expando)
                        } else {
                            if (T) {
                                delete P[S]
                            } else {
                                for (var t in B) {
                                    delete B[t]
                                }
                            }
                        }
                    }
                }
            }
        },
        acceptData: function (t) {
            if (t.nodeName) {
                var c = Q.noData[t.nodeName.toLowerCase()];
                if (c) {
                    return ! (c === true || t.getAttribute("classid") !== c)
                }
            }
            return true
        }
    });
    Q.fn.extend({
        data: function (B, c) {
            var U = null;
            if (typeof B === "undefined") {
                if (this.length) {
                    var T = this[0].attributes,
                    S;
                    U = Q.data(this[0]);
                    for (var P = 0, t = T.length; P < t; P++) {
                        S = T[P].name;
                        if (S.indexOf("data-") === 0) {
                            S = S.substr(5);
                            j(this[0], S, U[S])
                        }
                    }
                }
                return U
            } else {
                if (typeof B === "object") {
                    return this.each(function () {
                        Q.data(this, B)
                    })
                }
            }
            var E = B.split(".");
            E[1] = E[1] ? "." + E[1] : "";
            if (c === aA) {
                U = this.triggerHandler("getData" + E[1] + "!", [E[0]]);
                if (U === aA && this.length) {
                    U = Q.data(this[0], B);
                    U = j(this[0], B, U)
                }
                return U === aA && E[1] ? this.data(E[0]) : U
            } else {
                return this.each(function () {
                    var W = Q(this),
                    V = [E[0], c];
                    W.triggerHandler("setData" + E[1] + "!", V);
                    Q.data(this, B, c);
                    W.triggerHandler("changeData" + E[1] + "!", V)
                })
            }
        },
        removeData: function (c) {
            return this.each(function () {
                Q.removeData(this, c)
            })
        }
    });
    Q.extend({
        queue: function (t, c, E) {
            if (t) {
                c = (c || "fx") + "queue";
                var B = Q.data(t, c);
                if (!E) {
                    return B || []
                }
                if (!B || Q.isArray(E)) {
                    B = Q.data(t, c, Q.makeArray(E))
                } else {
                    B.push(E)
                }
                return B
            }
        },
        dequeue: function (t, c) {
            c = c || "fx";
            var E = Q.queue(t, c),
            B = E.shift();
            if (B === "inprogress") {
                B = E.shift()
            }
            if (B) {
                c === "fx" && E.unshift("inprogress");
                B.call(t, function () {
                    Q.dequeue(t, c)
                })
            }
        }
    });
    Q.fn.extend({
        queue: function (t, c) {
            if (typeof t !== "string") {
                c = t;
                t = "fx"
            }
            if (c === aA) {
                return Q.queue(this[0], t)
            }
            return this.each(function () {
                var B = Q.queue(this, t, c);
                t === "fx" && B[0] !== "inprogress" && Q.dequeue(this, t)
            })
        },
        dequeue: function (c) {
            return this.each(function () {
                Q.dequeue(this, c)
            })
        },
        delay: function (t, c) {
            t = Q.fx ? Q.fx.speeds[t] || t : t;
            c = c || "fx";
            return this.queue(c, function () {
                var B = this;
                setTimeout(function () {
                    Q.dequeue(B, c)
                },
                t)
            })
        },
        clearQueue: function (c) {
            return this.queue(c || "fx", [])
        }
    });
    var aP = /[\n\t]/g,
    at = /\s+/,
    d = /\r/g,
    aS = /^(?:href|src|style)$/,
    aF = /^(?:button|input)$/i,
    ag = /^(?:button|input|object|select|textarea)$/i,
    G = /^a(?:rea)?$/i,
    aC = /^(?:radio|checkbox)$/i;
    Q.props = {
        "for": "htmlFor",
        "class": "className",
        readonly: "readOnly",
        maxlength: "maxLength",
        cellspacing: "cellSpacing",
        rowspan: "rowSpan",
        colspan: "colSpan",
        tabindex: "tabIndex",
        usemap: "useMap",
        frameborder: "frameBorder"
    };
    Q.fn.extend({
        attr: function (t, c) {
            return Q.access(this, t, c, true, Q.attr)
        },
        removeAttr: function (c) {
            return this.each(function () {
                Q.attr(this, c, "");
                this.nodeType === 1 && this.removeAttribute(c)
            })
        },
        addClass: function (V) {
            if (Q.isFunction(V)) {
                return this.each(function (W) {
                    var X = Q(this);
                    X.addClass(V.call(this, W, X.attr("class")))
                })
            }
            if (V && typeof V === "string") {
                for (var U = (V || "").split(at), T = 0, S = this.length; T < S; T++) {
                    var P = this[T];
                    if (P.nodeType === 1) {
                        if (P.className) {
                            for (var E = " " + P.className + " ", t = P.className, B = 0, c = U.length; B < c; B++) {
                                if (E.indexOf(" " + U[B] + " ") < 0) {
                                    t += " " + U[B]
                                }
                            }
                            P.className = Q.trim(t)
                        } else {
                            P.className = V
                        }
                    }
                }
            }
            return this
        },
        removeClass: function (B) {
            if (Q.isFunction(B)) {
                return this.each(function (W) {
                    var V = Q(this);
                    V.removeClass(B.call(this, W, V.attr("class")))
                })
            }
            if (B && typeof B === "string" || B === aA) {
                for (var c = (B || "").split(at), U = 0, T = this.length; U < T; U++) {
                    var S = this[U];
                    if (S.nodeType === 1 && S.className) {
                        if (B) {
                            for (var P = (" " + S.className + " ").replace(aP, " "), t = 0, E = c.length; t < E; t++) {
                                P = P.replace(" " + c[t] + " ", " ")
                            }
                            S.className = Q.trim(P)
                        } else {
                            S.className = ""
                        }
                    }
                }
            }
            return this
        },
        toggleClass: function (t, c) {
            var E = typeof t,
            B = typeof c === "boolean";
            if (Q.isFunction(t)) {
                return this.each(function (S) {
                    var P = Q(this);
                    P.toggleClass(t.call(this, S, P.attr("class"), c), c)
                })
            }
            return this.each(function () {
                if (E === "string") {
                    for (var U, T = 0, P = Q(this), S = c, V = t.split(at); U = V[T++];) {
                        S = B ? S : !P.hasClass(U);
                        P[S ? "addClass" : "removeClass"](U)
                    }
                } else {
                    if (E === "undefined" || E === "boolean") {
                        this.className && Q.data(this, "__className__", this.className);
                        this.className = this.className || t === false ? "" : Q.data(this, "__className__") || ""
                    }
                }
            })
        },
        hasClass: function (t) {
            t = " " + t + " ";
            for (var c = 0, B = this.length; c < B; c++) {
                if ((" " + this[c].className + " ").replace(aP, " ").indexOf(t) > -1) {
                    return true
                }
            }
            return false
        },
        val: function (B) {
            if (!arguments.length) {
                var c = this[0];
                if (c) {
                    if (Q.nodeName(c, "option")) {
                        var U = c.attributes.value;
                        return !U || U.specified ? c.value : c.text
                    }
                    if (Q.nodeName(c, "select")) {
                        var T = c.selectedIndex;
                        U = [];
                        var S = c.options;
                        c = c.type === "select-one";
                        if (T < 0) {
                            return null
                        }
                        var P = c ? T : 0;
                        for (T = c ? T + 1 : S.length; P < T; P++) {
                            var t = S[P];
                            if (t.selected && (Q.support.optDisabled ? !t.disabled : t.getAttribute("disabled") === null) && (!t.parentNode.disabled || !Q.nodeName(t.parentNode, "optgroup"))) {
                                B = Q(t).val();
                                if (c) {
                                    return B
                                }
                                U.push(B)
                            }
                        }
                        return U
                    }
                    if (aC.test(c.type) && !Q.support.checkOn) {
                        return c.getAttribute("value") === null ? "on" : c.value
                    }
                    return (c.value || "").replace(d, "")
                }
                return aA
            }
            var E = Q.isFunction(B);
            return this.each(function (Y) {
                var W = Q(this),
                X = B;
                if (this.nodeType === 1) {
                    if (E) {
                        X = B.call(this, Y, W.val())
                    }
                    if (X == null) {
                        X = ""
                    } else {
                        if (typeof X === "number") {
                            X += ""
                        } else {
                            if (Q.isArray(X)) {
                                X = Q.map(X, function (Z) {
                                    return Z == null ? "" : Z + ""
                                })
                            }
                        }
                    }
                    if (Q.isArray(X) && aC.test(this.type)) {
                        this.checked = Q.inArray(W.val(), X) >= 0
                    } else {
                        if (Q.nodeName(this, "select")) {
                            var V = Q.makeArray(X);
                            Q("option", this).each(function () {
                                this.selected = Q.inArray(Q(this).val(), V) >= 0
                            });
                            if (!V.length) {
                                this.selectedIndex = -1
                            }
                        } else {
                            this.value = X
                        }
                    }
                }
            })
        }
    });
    Q.extend({
        attrFn: {
            val: true,
            css: true,
            html: true,
            text: true,
            data: true,
            width: true,
            height: true,
            offset: true
        },
        attr: function (t, c, S, P) {
            if (!t || t.nodeType === 3 || t.nodeType === 8) {
                return aA
            }
            if (P && c in Q.attrFn) {
                return Q(t)[c](S)
            }
            P = t.nodeType !== 1 || !Q.isXMLDoc(t);
            var E = S !== aA;
            c = P && Q.props[c] || c;
            var B = aS.test(c);
            if ((c in t || t[c] !== aA) && P && !B) {
                if (E) {
                    c === "type" && aF.test(t.nodeName) && t.parentNode && Q.error("type property can't be changed");
                    if (S === null) {
                        t.nodeType === 1 && t.removeAttribute(c)
                    } else {
                        t[c] = S
                    }
                }
                if (Q.nodeName(t, "form") && t.getAttributeNode(c)) {
                    return t.getAttributeNode(c).nodeValue
                }
                if (c === "tabIndex") {
                    return (c = t.getAttributeNode("tabIndex")) && c.specified ? c.value : ag.test(t.nodeName) || G.test(t.nodeName) && t.href ? 0 : aA
                }
                return t[c]
            }
            if (!Q.support.style && P && c === "style") {
                if (E) {
                    t.style.cssText = "" + S
                }
                return t.style.cssText
            }
            E && t.setAttribute(c, "" + S);
            if (!t.attributes[c] && t.hasAttribute && !t.hasAttribute(c)) {
                return aA
            }
            t = !Q.support.hrefNormalized && P && B ? t.getAttribute(c, 2) : t.getAttribute(c);
            return t === null ? aA : t
        }
    });
    var ai = /\.(.*)$/,
    L = /^(?:textarea|input|select)$/i,
    n = /\./g,
    a2 = / /g,
    r = /[^\w\s.|`]/g,
    e = function (c) {
        return c.replace(r, "\\$&")
    },
    ad = {
        focusin: 0,
        focusout: 0
    };
    Q.event = {
        add: function (Z, X, W, V) {
            if (! (Z.nodeType === 3 || Z.nodeType === 8)) {
                if (Q.isWindow(Z) && Z !== aw && !Z.frameElement) {
                    Z = aw
                }
                if (W === false) {
                    W = al
                } else {
                    if (!W) {
                        return
                    }
                }
                var U, T;
                if (W.handler) {
                    U = W;
                    W = U.handler
                }
                if (!W.guid) {
                    W.guid = Q.guid++
                }
                if (T = Q.data(Z)) {
                    var P = Z.nodeType ? "events" : "__events__",
                    S = T[P],
                    E = T.handle;
                    if (typeof S === "function") {
                        E = S.handle;
                        S = S.events
                    } else {
                        if (!S) {
                            Z.nodeType || (T[P] = T = function () {});
                            T.events = S = {}
                        }
                    }
                    if (!E) {
                        T.handle = E = function () {
                            return typeof Q !== "undefined" && !Q.event.triggered ? Q.event.handle.apply(E.elem, arguments) : aA
                        }
                    }
                    E.elem = Z;
                    X = X.split(" ");
                    for (var Y = 0, c; P = X[Y++];) {
                        T = U ? Q.extend({},
                        U) : {
                            handler: W,
                            data: V
                        };
                        if (P.indexOf(".") > -1) {
                            c = P.split(".");
                            P = c.shift();
                            T.namespace = c.slice(0).sort().join(".")
                        } else {
                            c = [];
                            T.namespace = ""
                        }
                        T.type = P;
                        if (!T.guid) {
                            T.guid = W.guid
                        }
                        var B = S[P],
                        t = Q.event.special[P] || {};
                        if (!B) {
                            B = S[P] = [];
                            if (!t.setup || t.setup.call(Z, V, c, E) === false) {
                                if (Z.addEventListener) {
                                    Z.addEventListener(P, E, false)
                                } else {
                                    Z.attachEvent && Z.attachEvent("on" + P, E)
                                }
                            }
                        }
                        if (t.add) {
                            t.add.call(Z, T);
                            if (!T.handler.guid) {
                                T.handler.guid = W.guid
                            }
                        }
                        B.push(T);
                        Q.event.global[P] = true
                    }
                    Z = null
                }
            }
        },
        global: {},
        remove: function (aa, X, W, V) {
            if (! (aa.nodeType === 3 || aa.nodeType === 8)) {
                if (W === false) {
                    W = al
                }
                var U, T, P = 0,
                S, E, Z, c, B, t, Y = aa.nodeType ? "events" : "__events__",
                a3 = Q.data(aa),
                ab = a3 && a3[Y];
                if (a3 && ab) {
                    if (typeof ab === "function") {
                        a3 = ab;
                        ab = ab.events
                    }
                    if (X && X.type) {
                        W = X.handler;
                        X = X.type
                    }
                    if (!X || typeof X === "string" && X.charAt(0) === ".") {
                        X = X || "";
                        for (U in ab) {
                            Q.event.remove(aa, U + X)
                        }
                    } else {
                        for (X = X.split(" "); U = X[P++];) {
                            c = U;
                            S = U.indexOf(".") < 0;
                            E = [];
                            if (!S) {
                                E = U.split(".");
                                U = E.shift();
                                Z = RegExp("(^|\\.)" + Q.map(E.slice(0).sort(), e).join("\\.(?:.*\\.)?") + "(\\.|$)")
                            }
                            if (B = ab[U]) {
                                if (W) {
                                    c = Q.event.special[U] || {};
                                    for (T = V || 0; T < B.length; T++) {
                                        t = B[T];
                                        if (W.guid === t.guid) {
                                            if (S || Z.test(t.namespace)) {
                                                V == null && B.splice(T--, 1);
                                                c.remove && c.remove.call(aa, t)
                                            }
                                            if (V != null) {
                                                break
                                            }
                                        }
                                    }
                                    if (B.length === 0 || V != null && B.length === 1) {
                                        if (!c.teardown || c.teardown.call(aa, E) === false) {
                                            Q.removeEvent(aa, U, a3.handle)
                                        }
                                        delete ab[U]
                                    }
                                } else {
                                    for (T = 0; T < B.length; T++) {
                                        t = B[T];
                                        if (S || Z.test(t.namespace)) {
                                            Q.event.remove(aa, c, t.handler, T);
                                            B.splice(T--, 1)
                                        }
                                    }
                                }
                            }
                        }
                        if (Q.isEmptyObject(ab)) {
                            if (X = a3.handle) {
                                X.elem = null
                            }
                            delete a3.events;
                            delete a3.handle;
                            if (typeof a3 === "function") {
                                Q.removeData(aa, Y)
                            } else {
                                Q.isEmptyObject(a3) && Q.removeData(aa)
                            }
                        }
                    }
                }
            }
        },
        trigger: function (X, V, U, T) {
            var S = X.type || X;
            if (!T) {
                X = typeof X === "object" ? X[Q.expando] ? X : Q.extend(Q.Event(S), X) : Q.Event(S);
                if (S.indexOf("!") >= 0) {
                    X.type = S = S.slice(0, -1);
                    X.exclusive = true
                }
                if (!U) {
                    X.stopPropagation();
                    Q.event.global[S] && Q.each(Q.cache, function () {
                        this.events && this.events[S] && Q.event.trigger(X, V, this.handle.elem)
                    })
                }
                if (!U || U.nodeType === 3 || U.nodeType === 8) {
                    return aA
                }
                X.result = aA;
                X.target = U;
                V = Q.makeArray(V);
                V.unshift(X)
            }
            X.currentTarget = U;
            (T = U.nodeType ? Q.data(U, "handle") : (Q.data(U, "__events__") || {}).handle) && T.apply(U, V);
            T = U.parentNode || U.ownerDocument;
            try {
                if (! (U && U.nodeName && Q.noData[U.nodeName.toLowerCase()])) {
                    if (U["on" + S] && U["on" + S].apply(U, V) === false) {
                        X.result = false;
                        X.preventDefault()
                    }
                }
            } catch(P) {}
            if (!X.isPropagationStopped() && T) {
                Q.event.trigger(X, V, T, true)
            } else {
                if (!X.isDefaultPrevented()) {
                    var B;
                    T = X.target;
                    var E = S.replace(ai, ""),
                    t = Q.nodeName(T, "a") && E === "click",
                    W = Q.event.special[E] || {};
                    if ((!W._default || W._default.call(U, X) === false) && !t && !(T && T.nodeName && Q.noData[T.nodeName.toLowerCase()])) {
                        try {
                            if (T[E]) {
                                if (B = T["on" + E]) {
                                    T["on" + E] = null
                                }
                                Q.event.triggered = true;
                                T[E]()
                            }
                        } catch(c) {}
                        if (B) {
                            T["on" + E] = B
                        }
                        Q.event.triggered = false
                    }
                }
            }
        },
        handle: function (B) {
            var c, U, T, S;
            U = [];
            var P = Q.makeArray(arguments);
            B = P[0] = Q.event.fix(B || aw.event);
            B.currentTarget = this;
            c = B.type.indexOf(".") < 0 && !B.exclusive;
            if (!c) {
                T = B.type.split(".");
                B.type = T.shift();
                U = T.slice(0).sort();
                T = RegExp("(^|\\.)" + U.join("\\.(?:.*\\.)?") + "(\\.|$)")
            }
            B.namespace = B.namespace || U.join(".");
            S = Q.data(this, this.nodeType ? "events" : "__events__");
            if (typeof S === "function") {
                S = S.events
            }
            U = (S || {})[B.type];
            if (S && U) {
                U = U.slice(0);
                S = 0;
                for (var t = U.length; S < t; S++) {
                    var E = U[S];
                    if (c || T.test(E.namespace)) {
                        B.handler = E.handler;
                        B.data = E.data;
                        B.handleObj = E;
                        E = E.handler.apply(this, P);
                        if (E !== aA) {
                            B.result = E;
                            if (E === false) {
                                B.preventDefault();
                                B.stopPropagation()
                            }
                        }
                        if (B.isImmediatePropagationStopped()) {
                            break
                        }
                    }
                }
            }
            return B.result
        },
        props: "altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),
        fix: function (t) {
            if (t[Q.expando]) {
                return t
            }
            var c = t;
            t = Q.Event(c);
            for (var E = this.props.length, B; E;) {
                B = this.props[--E];
                t[B] = c[B]
            }
            if (!t.target) {
                t.target = t.srcElement || H
            }
            if (t.target.nodeType === 3) {
                t.target = t.target.parentNode
            }
            if (!t.relatedTarget && t.fromElement) {
                t.relatedTarget = t.fromElement === t.target ? t.toElement : t.fromElement
            }
            if (t.pageX == null && t.clientX != null) {
                c = H.documentElement;
                E = H.body;
                t.pageX = t.clientX + (c && c.scrollLeft || E && E.scrollLeft || 0) - (c && c.clientLeft || E && E.clientLeft || 0);
                t.pageY = t.clientY + (c && c.scrollTop || E && E.scrollTop || 0) - (c && c.clientTop || E && E.clientTop || 0)
            }
            if (t.which == null && (t.charCode != null || t.keyCode != null)) {
                t.which = t.charCode != null ? t.charCode : t.keyCode
            }
            if (!t.metaKey && t.ctrlKey) {
                t.metaKey = t.ctrlKey
            }
            if (!t.which && t.button !== aA) {
                t.which = t.button & 1 ? 1 : t.button & 2 ? 3 : t.button & 4 ? 2 : 0
            }
            return t
        },
        guid: 100000000,
        proxy: Q.proxy,
        special: {
            ready: {
                setup: Q.bindReady,
                teardown: Q.noop
            },
            live: {
                add: function (c) {
                    Q.event.add(this, ah(c.origType, c.selector), Q.extend({},
                    c, {
                        handler: A,
                        guid: c.handler.guid
                    }))
                },
                remove: function (c) {
                    Q.event.remove(this, ah(c.origType, c.selector), c)
                }
            },
            beforeunload: {
                setup: function (t, c, B) {
                    if (Q.isWindow(this)) {
                        this.onbeforeunload = B
                    }
                },
                teardown: function (t, c) {
                    if (this.onbeforeunload === c) {
                        this.onbeforeunload = null
                    }
                }
            }
        }
    };
    Q.removeEvent = H.removeEventListener ?
    function (t, c, B) {
        t.removeEventListener && t.removeEventListener(c, B, false)
    } : function (t, c, B) {
        t.detachEvent && t.detachEvent("on" + c, B)
    };
    Q.Event = function (c) {
        if (!this.preventDefault) {
            return new Q.Event(c)
        }
        if (c && c.type) {
            this.originalEvent = c;
            this.type = c.type
        } else {
            this.type = c
        }
        this.timeStamp = Q.now();
        this[Q.expando] = true
    };
    Q.Event.prototype = {
        preventDefault: function () {
            this.isDefaultPrevented = J;
            var c = this.originalEvent;
            if (c) {
                if (c.preventDefault) {
                    c.preventDefault()
                } else {
                    c.returnValue = false
                }
            }
        },
        stopPropagation: function () {
            this.isPropagationStopped = J;
            var c = this.originalEvent;
            if (c) {
                c.stopPropagation && c.stopPropagation();
                c.cancelBubble = true
            }
        },
        stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = J;
            this.stopPropagation()
        },
        isDefaultPrevented: al,
        isPropagationStopped: al,
        isImmediatePropagationStopped: al
    };
    var D = function (t) {
        var c = t.relatedTarget;
        try {
            for (; c && c !== this;) {
                c = c.parentNode
            }
            if (c !== this) {
                t.type = t.data;
                Q.event.handle.apply(this, arguments)
            }
        } catch(B) {}
    },
    p = function (c) {
        c.type = c.data;
        Q.event.handle.apply(this, arguments)
    };
    Q.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    },
    function (t, c) {
        Q.event.special[t] = {
            setup: function (B) {
                Q.event.add(this, c, B && B.selector ? p : D, t)
            },
            teardown: function (B) {
                Q.event.remove(this, c, B && B.selector ? p : D)
            }
        }
    });
    if (!Q.support.submitBubbles) {
        Q.event.special.submit = {
            setup: function () {
                if (this.nodeName.toLowerCase() !== "form") {
                    Q.event.add(this, "click.specialSubmit", function (t) {
                        var c = t.target,
                        B = c.type;
                        if ((B === "submit" || B === "image") && Q(c).closest("form").length) {
                            t.liveFired = aA;
                            return aY("submit", this, arguments)
                        }
                    });
                    Q.event.add(this, "keypress.specialSubmit", function (t) {
                        var c = t.target,
                        B = c.type;
                        if ((B === "text" || B === "password") && Q(c).closest("form").length && t.keyCode === 13) {
                            t.liveFired = aA;
                            return aY("submit", this, arguments)
                        }
                    })
                } else {
                    return false
                }
            },
            teardown: function () {
                Q.event.remove(this, ".specialSubmit")
            }
        }
    }
    if (!Q.support.changeBubbles) {
        var ak, b = function (t) {
            var c = t.type,
            B = t.value;
            if (c === "radio" || c === "checkbox") {
                B = t.checked
            } else {
                if (c === "select-multiple") {
                    B = t.selectedIndex > -1 ? Q.map(t.options, function (E) {
                        return E.selected
                    }).join("-") : ""
                } else {
                    if (t.nodeName.toLowerCase() === "select") {
                        B = t.selectedIndex
                    }
                }
            }
            return B
        },
        af = function (t, c) {
            var P = t.target,
            E, B;
            if (! (!L.test(P.nodeName) || P.readOnly)) {
                E = Q.data(P, "_change_data");
                B = b(P);
                if (t.type !== "focusout" || P.type !== "radio") {
                    Q.data(P, "_change_data", B)
                }
                if (! (E === aA || B === E)) {
                    if (E != null || B) {
                        t.type = "change";
                        t.liveFired = aA;
                        return Q.event.trigger(t, c, P)
                    }
                }
            }
        };
        Q.event.special.change = {
            filters: {
                focusout: af,
                beforedeactivate: af,
                click: function (t) {
                    var c = t.target,
                    B = c.type;
                    if (B === "radio" || B === "checkbox" || c.nodeName.toLowerCase() === "select") {
                        return af.call(this, t)
                    }
                },
                keydown: function (t) {
                    var c = t.target,
                    B = c.type;
                    if (t.keyCode === 13 && c.nodeName.toLowerCase() !== "textarea" || t.keyCode === 32 && (B === "checkbox" || B === "radio") || B === "select-multiple") {
                        return af.call(this, t)
                    }
                },
                beforeactivate: function (c) {
                    c = c.target;
                    Q.data(c, "_change_data", b(c))
                }
            },
            setup: function () {
                if (this.type === "file") {
                    return false
                }
                for (var c in ak) {
                    Q.event.add(this, c + ".specialChange", ak[c])
                }
                return L.test(this.nodeName)
            },
            teardown: function () {
                Q.event.remove(this, ".specialChange");
                return L.test(this.nodeName)
            }
        };
        ak = Q.event.special.change.filters;
        ak.focus = ak.beforeactivate
    }
    H.addEventListener && Q.each({
        focus: "focusin",
        blur: "focusout"
    },
    function (t, c) {
        function B(E) {
            E = Q.event.fix(E);
            E.type = c;
            return Q.event.trigger(E, null, E.target)
        }
        Q.event.special[c] = {
            setup: function () {
                ad[c]++===0 && H.addEventListener(t, B, true)
            },
            teardown: function () {
                --ad[c] === 0 && H.removeEventListener(t, B, true)
            }
        }
    });
    Q.each(["bind", "one"], function (t, c) {
        Q.fn[c] = function (U, T, S) {
            if (typeof U === "object") {
                for (var P in U) {
                    this[c](P, T, U[P], S)
                }
                return this
            }
            if (Q.isFunction(T) || T === false) {
                S = T;
                T = aA
            }
            var B = c === "one" ? Q.proxy(S, function (V) {
                Q(this).unbind(V, B);
                return S.apply(this, arguments)
            }) : S;
            if (U === "unload" && c !== "one") {
                this.one(U, T, S)
            } else {
                P = 0;
                for (var E = this.length; P < E; P++) {
                    Q.event.add(this[P], U, B, T)
                }
            }
            return this
        }
    });
    Q.fn.extend({
        unbind: function (t, c) {
            if (typeof t === "object" && !t.preventDefault) {
                for (var E in t) {
                    this.unbind(E, t[E])
                }
            } else {
                E = 0;
                for (var B = this.length; E < B; E++) {
                    Q.event.remove(this[E], t, c)
                }
            }
            return this
        },
        delegate: function (t, c, E, B) {
            return this.live(c, E, B, t)
        },
        undelegate: function (t, c, B) {
            return arguments.length === 0 ? this.unbind("live") : this.die(c, null, B, t)
        },
        trigger: function (t, c) {
            return this.each(function () {
                Q.event.trigger(t, c, this)
            })
        },
        triggerHandler: function (t, c) {
            if (this[0]) {
                var B = Q.Event(t);
                B.preventDefault();
                B.stopPropagation();
                Q.event.trigger(B, c, this[0]);
                return B.result
            }
        },
        toggle: function (t) {
            for (var c = arguments, B = 1; B < c.length;) {
                Q.proxy(t, c[B++])
            }
            return this.click(Q.proxy(t, function (P) {
                var E = (Q.data(this, "lastToggle" + t.guid) || 0) % B;
                Q.data(this, "lastToggle" + t.guid, E + 1);
                P.preventDefault();
                return c[E].apply(this, arguments) || false
            }))
        },
        hover: function (t, c) {
            return this.mouseenter(t).mouseleave(c || t)
        }
    });
    var aR = {
        focus: "focusin",
        blur: "focusout",
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    };
    Q.each(["live", "die"], function (t, c) {
        Q.fn[c] = function (X, W, V, U) {
            var S, T = 0,
            P, Y, B = U || this.selector;
            U = U ? this : Q(this.context);
            if (typeof X === "object" && !X.preventDefault) {
                for (S in X) {
                    U[c](S, W, X[S], B)
                }
                return this
            }
            if (Q.isFunction(W)) {
                V = W;
                W = aA
            }
            for (X = (X || "").split(" ");
            (S = X[T++]) != null;) {
                P = ai.exec(S);
                Y = "";
                if (P) {
                    Y = P[0];
                    S = S.replace(ai, "")
                }
                if (S === "hover") {
                    X.push("mouseenter" + Y, "mouseleave" + Y)
                } else {
                    P = S;
                    if (S === "focus" || S === "blur") {
                        X.push(aR[S] + Y);
                        S += Y
                    } else {
                        S = (aR[S] || S) + Y
                    }
                    if (c === "live") {
                        Y = 0;
                        for (var E = U.length; Y < E; Y++) {
                            Q.event.add(U[Y], "live." + ah(S, B), {
                                data: W,
                                selector: B,
                                handler: V,
                                origType: S,
                                origHandler: V,
                                preType: P
                            })
                        }
                    } else {
                        U.unbind("live." + ah(S, B), V)
                    }
                }
            }
            return this
        }
    });
    Q.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(" "), function (t, c) {
        Q.fn[c] = function (E, B) {
            if (B == null) {
                B = E;
                E = null
            }
            return arguments.length > 0 ? this.bind(c, E, B) : this.trigger(c)
        };
        if (Q.attrFn) {
            Q.attrFn[c] = true
        }
    });
    aw.attachEvent && !aw.addEventListener && Q(aw).bind("unload", function () {
        for (var t in Q.cache) {
            if (Q.cache[t].handle) {
                try {
                    Q.event.remove(Q.cache[t].handle.elem)
                } catch(c) {}
            }
        }
    });
    (function () {
        function ab(ba, a9, a7, a8, a6, a5) {
            a6 = 0;
            for (var bc = a8.length; a6 < bc; a6++) {
                var bb = a8[a6];
                if (bb) {
                    var bd = false;
                    for (bb = bb[ba]; bb;) {
                        if (bb.sizcache === a7) {
                            bd = a8[bb.sizset];
                            break
                        }
                        if (bb.nodeType === 1 && !a5) {
                            bb.sizcache = a7;
                            bb.sizset = a6
                        }
                        if (bb.nodeName.toLowerCase() === a9) {
                            bd = bb;
                            break
                        }
                        bb = bb[ba]
                    }
                    a8[a6] = bd
                }
            }
        }
        function Y(ba, a9, a7, a8, a6, a5) {
            a6 = 0;
            for (var bc = a8.length; a6 < bc; a6++) {
                var bb = a8[a6];
                if (bb) {
                    var bd = false;
                    for (bb = bb[ba]; bb;) {
                        if (bb.sizcache === a7) {
                            bd = a8[bb.sizset];
                            break
                        }
                        if (bb.nodeType === 1) {
                            if (!a5) {
                                bb.sizcache = a7;
                                bb.sizset = a6
                            }
                            if (typeof a9 !== "string") {
                                if (bb === a9) {
                                    bd = true;
                                    break
                                }
                            } else {
                                if (S.filter(a9, [bb]).length > 0) {
                                    bd = bb;
                                    break
                                }
                            }
                        }
                        bb = bb[ba]
                    }
                    a8[a6] = bd
                }
            }
        }
        var W = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
        V = 0,
        U = Object.prototype.toString,
        T = false,
        P = true;
        [0, 0].sort(function () {
            P = false;
            return 0
        });
        var S = function (bc, bb, a8, a9) {
            a8 = a8 || [];
            var a7 = bb = bb || H;
            if (bb.nodeType !== 1 && bb.nodeType !== 9) {
                return []
            }
            if (!bc || typeof bc !== "string") {
                return a8
            }
            var a6, bh, bg, bi, bf, be = true,
            bd = S.isXML(bb),
            a5 = [],
            ba = bc;
            do {
                W.exec("");
                if (a6 = W.exec(ba)) {
                    ba = a6[3];
                    a5.push(a6[1]);
                    if (a6[2]) {
                        bi = a6[3];
                        break
                    }
                }
            } while (a6);
            if (a5.length > 1 && aa.exec(bc)) {
                if (a5.length === 2 && E.relative[a5[0]]) {
                    bh = X(a5[0] + a5[1], bb)
                } else {
                    for (bh = E.relative[a5[0]] ? [bb] : S(a5.shift(), bb); a5.length;) {
                        bc = a5.shift();
                        if (E.relative[bc]) {
                            bc += a5.shift()
                        }
                        bh = X(bc, bh)
                    }
                }
            } else {
                if (!a9 && a5.length > 1 && bb.nodeType === 9 && !bd && E.match.ID.test(a5[0]) && !E.match.ID.test(a5[a5.length - 1])) {
                    a6 = S.find(a5.shift(), bb, bd);
                    bb = a6.expr ? S.filter(a6.expr, a6.set)[0] : a6.set[0]
                }
                if (bb) {
                    a6 = a9 ? {
                        expr: a5.pop(),
                        set: t(a9)
                    } : S.find(a5.pop(), a5.length === 1 && (a5[0] === "~" || a5[0] === "+") && bb.parentNode ? bb.parentNode : bb, bd);
                    bh = a6.expr ? S.filter(a6.expr, a6.set) : a6.set;
                    if (a5.length > 0) {
                        bg = t(bh)
                    } else {
                        be = false
                    }
                    for (; a5.length;) {
                        a6 = bf = a5.pop();
                        if (E.relative[bf]) {
                            a6 = a5.pop()
                        } else {
                            bf = ""
                        }
                        if (a6 == null) {
                            a6 = bb
                        }
                        E.relative[bf](bg, a6, bd)
                    }
                } else {
                    bg = []
                }
            }
            bg || (bg = bh);
            bg || S.error(bf || bc);
            if (U.call(bg) === "[object Array]") {
                if (be) {
                    if (bb && bb.nodeType === 1) {
                        for (bc = 0; bg[bc] != null; bc++) {
                            if (bg[bc] && (bg[bc] === true || bg[bc].nodeType === 1 && S.contains(bb, bg[bc]))) {
                                a8.push(bh[bc])
                            }
                        }
                    } else {
                        for (bc = 0; bg[bc] != null; bc++) {
                            bg[bc] && bg[bc].nodeType === 1 && a8.push(bh[bc])
                        }
                    }
                } else {
                    a8.push.apply(a8, bg)
                }
            } else {
                t(bg, a8)
            }
            if (bi) {
                S(bi, a7, a8, a9);
                S.uniqueSort(a8)
            }
            return a8
        };
        S.uniqueSort = function (a6) {
            if (a4) {
                T = P;
                a6.sort(a4);
                if (T) {
                    for (var a5 = 1; a5 < a6.length; a5++) {
                        a6[a5] === a6[a5 - 1] && a6.splice(a5--, 1)
                    }
                }
            }
            return a6
        };
        S.matches = function (a6, a5) {
            return S(a6, null, null, a5)
        };
        S.matchesSelector = function (a6, a5) {
            return S(a5, null, null, [a6]).length > 0
        };
        S.find = function (ba, a9, a7) {
            var a8;
            if (!ba) {
                return []
            }
            for (var a6 = 0, a5 = E.order.length; a6 < a5; a6++) {
                var bc, bb = E.order[a6];
                if (bc = E.leftMatch[bb].exec(ba)) {
                    var bd = bc[1];
                    bc.splice(1, 1);
                    if (bd.substr(bd.length - 1) !== "\\") {
                        bc[1] = (bc[1] || "").replace(/\\/g, "");
                        a8 = E.find[bb](bc, a9, a7);
                        if (a8 != null) {
                            ba = ba.replace(E.match[bb], "");
                            break
                        }
                    }
                }
            }
            a8 || (a8 = a9.getElementsByTagName("*"));
            return {
                set: a8,
                expr: ba
            }
        };
        S.filter = function (bd, bc, a8, a9) {
            for (var a7, a6, bi = bd, bh = [], bj = bc, bg = bc && bc[0] && S.isXML(bc[0]); bd && bc.length;) {
                for (var bf in E.filter) {
                    if ((a7 = E.leftMatch[bf].exec(bd)) != null && a7[2]) {
                        var be, a5, bb = E.filter[bf];
                        a5 = a7[1];
                        a6 = false;
                        a7.splice(1, 1);
                        if (a5.substr(a5.length - 1) !== "\\") {
                            if (bj === bh) {
                                bh = []
                            }
                            if (E.preFilter[bf]) {
                                if (a7 = E.preFilter[bf](a7, bj, a8, bh, a9, bg)) {
                                    if (a7 === true) {
                                        continue
                                    }
                                } else {
                                    a6 = be = true
                                }
                            }
                            if (a7) {
                                for (var ba = 0;
                                (a5 = bj[ba]) != null; ba++) {
                                    if (a5) {
                                        be = bb(a5, a7, ba, bj);
                                        var bk = a9 ^ !!be;
                                        if (a8 && be != null) {
                                            if (bk) {
                                                a6 = true
                                            } else {
                                                bj[ba] = false
                                            }
                                        } else {
                                            if (bk) {
                                                bh.push(a5);
                                                a6 = true
                                            }
                                        }
                                    }
                                }
                            }
                            if (be !== aA) {
                                a8 || (bj = bh);
                                bd = bd.replace(E.match[bf], "");
                                if (!a6) {
                                    return []
                                }
                                break
                            }
                        }
                    }
                }
                if (bd === bi) {
                    if (a6 == null) {
                        S.error(bd)
                    } else {
                        break
                    }
                }
                bi = bd
            }
            return bj
        };
        S.error = function (a5) {
            throw "Syntax error, unrecognized expression: " + a5
        };
        var E = S.selectors = {
            order: ["ID", "NAME", "TAG"],
            match: {
                ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
                ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,
                TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
                CHILD: /:(only|nth|last|first)-child(?:\((even|odd|[\dn+\-]*)\))?/,
                POS : /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
                PSEUDO : /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
            },
            leftMatch : {},
            attrMap: {
                "class": "className",
                "for": "htmlFor"
            },
            attrHandle: {
                href: function (a5) {
                    return a5.getAttribute("href")
                }
            },
            relative: {
                "+": function (a7, a6) {
                    var ba = typeof a6 === "string",
                    a5 = ba && !/\W/.test(a6);
                    ba = ba && !a5;
                    if (a5) {
                        a6 = a6.toLowerCase()
                    }
                    a5 = 0;
                    for (var a9 = a7.length, a8; a5 < a9; a5++) {
                        if (a8 = a7[a5]) {
                            for (;
                            (a8 = a8.previousSibling) && a8.nodeType !== 1;) {}
                            a7[a5] = ba || a8 && a8.nodeName.toLowerCase() === a6 ? a8 || false : a8 === a6
                        }
                    }
                    ba && S.filter(a6, a7, true)
                },
                ">": function (a7, a6) {
                    var ba, a5 = typeof a6 === "string",
                    a9 = 0,
                    a8 = a7.length;
                    if (a5 && !/\W/.test(a6)) {
                        for (a6 = a6.toLowerCase(); a9 < a8; a9++) {
                            if (ba = a7[a9]) {
                                ba = ba.parentNode;
                                a7[a9] = ba.nodeName.toLowerCase() === a6 ? ba : false
                            }
                        }
                    } else {
                        for (; a9 < a8; a9++) {
                            if (ba = a7[a9]) {
                                a7[a9] = a5 ? ba.parentNode : ba.parentNode === a6
                            }
                        }
                        a5 && S.filter(a6, a7, true)
                    }
                },
                "": function (a7, a6, ba) {
                    var a5, a9 = V++,
                    a8 = Y;
                    if (typeof a6 === "string" && !/\W/.test(a6)) {
                        a5 = a6 = a6.toLowerCase();
                        a8 = ab
                    }
                    a8("parentNode", a6, a9, a7, a5, ba)
                },
                "~": function (a7, a6, ba) {
                    var a5, a9 = V++,
                    a8 = Y;
                    if (typeof a6 === "string" && !/\W/.test(a6)) {
                        a5 = a6 = a6.toLowerCase();
                        a8 = ab
                    }
                    a8("previousSibling", a6, a9, a7, a5, ba)
                }
            },
            find: {
                ID: function (a6, a5, a7) {
                    if (typeof a5.getElementById !== "undefined" && !a7) {
                        return (a6 = a5.getElementById(a6[1])) && a6.parentNode ? [a6] : []
                    }
                },
                NAME: function (a7, a6) {
                    if (typeof a6.getElementsByName !== "undefined") {
                        for (var ba = [], a5 = a6.getElementsByName(a7[1]), a9 = 0, a8 = a5.length; a9 < a8; a9++) {
                            a5[a9].getAttribute("name") === a7[1] && ba.push(a5[a9])
                        }
                        return ba.length === 0 ? null : ba
                    }
                },
                TAG: function (a6, a5) {
                    return a5.getElementsByTagName(a6[1])
                }
            },
            preFilter: {
                CLASS: function (a8, a7, bb, a5, ba, a9) {
                    a8 = " " + a8[1].replace(/\\/g, "") + " ";
                    if (a9) {
                        return a8
                    }
                    a9 = 0;
                    for (var a6;
                    (a6 = a7[a9]) != null; a9++) {
                        if (a6) {
                            if (ba ^ (a6.className && (" " + a6.className + " ").replace(/[\t\n]/g, " ").indexOf(a8) >= 0)) {
                                bb || a5.push(a6)
                            } else {
                                if (bb) {
                                    a7[a9] = false
                                }
                            }
                        }
                    }
                    return false
                },
                ID: function (a5) {
                    return a5[1].replace(/\\/g, "")
                },
                TAG: function (a5) {
                    return a5[1].toLowerCase()
                },
                CHILD: function (a6) {
                    if (a6[1] === "nth") {
                        var a5 = /(-?)(\d*)n((?:\+|-)?\d*)/.exec(a6[2] === "even" && "2n" || a6[2] === "odd" && "2n+1" || !/\D/.test(a6[2]) && "0n+" + a6[2] || a6[2]);
                        a6[2] = a5[1] + (a5[2] || 1) - 0;
                        a6[3] = a5[3] - 0
                    }
                    a6[0] = V++;
                    return a6
                },
                ATTR: function (a7, a6, ba, a5, a9, a8) {
                    a6 = a7[1].replace(/\\/g, "");
                    if (!a8 && E.attrMap[a6]) {
                        a7[1] = E.attrMap[a6]
                    }
                    if (a7[2] === "~=") {
                        a7[4] = " " + a7[4] + " "
                    }
                    return a7
                },
                PSEUDO: function (a7, a6, a9, a5, a8) {
                    if (a7[1] === "not") {
                        if ((W.exec(a7[3]) || "").length > 1 || /^\w/.test(a7[3])) {
                            a7[3] = S(a7[3], null, null, a6)
                        } else {
                            a7 = S.filter(a7[3], a6, a9, true ^ a8);
                            a9 || a5.push.apply(a5, a7);
                            return false
                        }
                    } else {
                        if (E.match.POS.test(a7[0]) || E.match.CHILD.test(a7[0])) {
                            return true
                        }
                    }
                    return a7
                },
                POS: function (a5) {
                    a5.unshift(true);
                    return a5
                }
            },
            filters: {
                enabled: function (a5) {
                    return a5.disabled === false && a5.type !== "hidden"
                },
                disabled: function (a5) {
                    return a5.disabled === true
                },
                checked: function (a5) {
                    return a5.checked === true
                },
                selected: function (a5) {
                    return a5.selected === true
                },
                parent: function (a5) {
                    return !! a5.firstChild
                },
                empty: function (a5) {
                    return !a5.firstChild
                },
                has: function (a6, a5, a7) {
                    return !! S(a7[3], a6).length
                },
                header: function (a5) {
                    return /h\d/i.test(a5.nodeName)
                },
                text: function (a5) {
                    return "text" === a5.type
                },
                radio: function (a5) {
                    return "radio" === a5.type
                },
                checkbox: function (a5) {
                    return "checkbox" === a5.type
                },
                file: function (a5) {
                    return "file" === a5.type
                },
                password: function (a5) {
                    return "password" === a5.type
                },
                submit: function (a5) {
                    return "submit" === a5.type
                },
                image: function (a5) {
                    return "image" === a5.type
                },
                reset: function (a5) {
                    return "reset" === a5.type
                },
                button: function (a5) {
                    return "button" === a5.type || a5.nodeName.toLowerCase() === "button"
                },
                input: function (a5) {
                    return /input|select|textarea|button/i.test(a5.nodeName)
                }
            },
            setFilters: {
                first: function (a6, a5) {
                    return a5 === 0
                },
                last: function (a7, a6, a8, a5) {
                    return a6 === a5.length - 1
                },
                even: function (a6, a5) {
                    return a5 % 2 === 0
                },
                odd: function (a6, a5) {
                    return a5 % 2 === 1
                },
                lt: function (a6, a5, a7) {
                    return a5 < a7[3] - 0
                },
                gt: function (a6, a5, a7) {
                    return a5 > a7[3] - 0
                },
                nth: function (a6, a5, a7) {
                    return a7[3] - 0 === a5
                },
                eq: function (a6, a5, a7) {
                    return a7[3] - 0 === a5
                }
            },
            filter: {
                PSEUDO: function (a7, a6, ba, a5) {
                    var a9 = a6[1],
                    a8 = E.filters[a9];
                    if (a8) {
                        return a8(a7, ba, a6, a5)
                    } else {
                        if (a9 === "contains") {
                            return (a7.textContent || a7.innerText || S.getText([a7]) || "").indexOf(a6[3]) >= 0
                        } else {
                            if (a9 === "not") {
                                a6 = a6[3];
                                ba = 0;
                                for (a5 = a6.length; ba < a5; ba++) {
                                    if (a6[ba] === a7) {
                                        return false
                                    }
                                }
                                return true
                            } else {
                                S.error("Syntax error, unrecognized expression: " + a9)
                            }
                        }
                    }
                },
                CHILD: function (a8, a7) {
                    var bc = a7[1],
                    a5 = a8;
                    switch (bc) {
                    case "only":
                        case "first":
                        for (; a5 = a5.previousSibling;) {
                            if (a5.nodeType === 1) {
                                return false
                            }
                        }
                        if (bc === "first") {
                            return true
                        }
                        a5 = a8;
                    case "last":
                        for (; a5 = a5.nextSibling;) {
                            if (a5.nodeType === 1) {
                                return false
                            }
                        }
                        return true;
                    case "nth":
                        bc = a7[2];
                        var ba = a7[3];
                        if (bc === 1 && ba === 0) {
                            return true
                        }
                        var a9 = a7[0],
                        a6 = a8.parentNode;
                        if (a6 && (a6.sizcache !== a9 || !a8.nodeIndex)) {
                            var bb = 0;
                            for (a5 = a6.firstChild; a5; a5 = a5.nextSibling) {
                                if (a5.nodeType === 1) {
                                    a5.nodeIndex = ++bb
                                }
                            }
                            a6.sizcache = a9
                        }
                        a5 = a8.nodeIndex - ba;
                        return bc === 0 ? a5 === 0 : a5 % bc === 0 && a5 / bc >= 0
                    }
                },
                ID: function (a6, a5) {
                    return a6.nodeType === 1 && a6.getAttribute("id") === a5
                },
                TAG: function (a6, a5) {
                    return a5 === "*" && a6.nodeType === 1 || a6.nodeName.toLowerCase() === a5
                },
                CLASS: function (a6, a5) {
                    return (" " + (a6.className || a6.getAttribute("class")) + " ").indexOf(a5) > -1
                },
                ATTR: function (a7, a6) {
                    var ba = a6[1];
                    ba = E.attrHandle[ba] ? E.attrHandle[ba](a7) : a7[ba] != null ? a7[ba] : a7.getAttribute(ba);
                    var a5 = ba + "",
                    a9 = a6[2],
                    a8 = a6[4];
                    return ba == null ? a9 === "!=" : a9 === "=" ? a5 === a8 : a9 === "*=" ? a5.indexOf(a8) >= 0 : a9 === "~=" ? (" " + a5 + " ").indexOf(a8) >= 0 : !a8 ? a5 && ba !== false : a9 === "!=" ? a5 !== a8 : a9 === "^=" ? a5.indexOf(a8) === 0 : a9 === "$=" ? a5.substr(a5.length - a8.length) === a8 : a9 === "|=" ? a5 === a8 || a5.substr(0, a8.length + 1) === a8 + "-" : false
                },
                POS: function (a7, a6, a9, a5) {
                    var a8 = E.setFilters[a6[2]];
                    if (a8) {
                        return a8(a7, a9, a6, a5)
                    }
                }
            }
        },
        aa = E.match.POS,
        c = function (a6, a5) {
            return "\\" + (a5 - 0 + 1)
        },
        B;
        for (B in E.match) {
            E.match[B] = RegExp(E.match[B].source + /(?![^\[]*\])(?![^\(]*\))/.source);
            E.leftMatch[B] = RegExp(/(^(?:.|\r|\n)*?)/.source + E.match[B].source.replace(/\\(\d+)/g, c))
        }
        var t = function (a6, a5) {
            a6 = Array.prototype.slice.call(a6, 0);
            if (a5) {
                a5.push.apply(a5, a6);
                return a5
            }
            return a6
        };
        try {
            Array.prototype.slice.call(H.documentElement.childNodes, 0)
        } catch(Z) {
            t = function (a7, a6) {
                var a9 = 0,
                a5 = a6 || [];
                if (U.call(a7) === "[object Array]") {
                    Array.prototype.push.apply(a5, a7)
                } else {
                    if (typeof a7.length === "number") {
                        for (var a8 = a7.length; a9 < a8; a9++) {
                            a5.push(a7[a9])
                        }
                    } else {
                        for (; a7[a9]; a9++) {
                            a5.push(a7[a9])
                        }
                    }
                }
                return a5
            }
        }
        var a4, a3;
        if (H.documentElement.compareDocumentPosition) {
            a4 = function (a6, a5) {
                if (a6 === a5) {
                    T = true;
                    return 0
                }
                if (!a6.compareDocumentPosition || !a5.compareDocumentPosition) {
                    return a6.compareDocumentPosition ? -1 : 1
                }
                return a6.compareDocumentPosition(a5) & 4 ? -1 : 1
            }
        } else {
            a4 = function (a8, a7) {
                var bb, a5, ba = [],
                a9 = [];
                bb = a8.parentNode;
                a5 = a7.parentNode;
                var a6 = bb;
                if (a8 === a7) {
                    T = true;
                    return 0
                } else {
                    if (bb === a5) {
                        return a3(a8, a7)
                    } else {
                        if (bb) {
                            if (!a5) {
                                return 1
                            }
                        } else {
                            return -1
                        }
                    }
                }
                for (; a6;) {
                    ba.unshift(a6);
                    a6 = a6.parentNode
                }
                for (a6 = a5; a6;) {
                    a9.unshift(a6);
                    a6 = a6.parentNode
                }
                bb = ba.length;
                a5 = a9.length;
                for (a6 = 0; a6 < bb && a6 < a5; a6++) {
                    if (ba[a6] !== a9[a6]) {
                        return a3(ba[a6], a9[a6])
                    }
                }
                return a6 === bb ? a3(a8, a9[a6], -1) : a3(ba[a6], a7, 1)
            };
            a3 = function (a6,a5,a7){if(a6===a5){return a7}for(a6=a6.nextSibling;a6;){if(a6===a5){return -1}a6=a6.nextSibling}return 1}}S.getText=function(a7){for(var a6="",a8,a5=0;a7[a5];a5++){a8=a7[a5];if(a8.nodeType===3||a8.nodeType===4){a6+=a8.nodeValue}else{if(a8.nodeType!==8){a6+=S.getText(a8.childNodes)}}}return a6};(function(){var a6=H.createElement("div"),a5="script"+(new Date).getTime(),a7=H.documentElement;a6.innerHTML="<a name='"+a5+"'/>";a7.insertBefore(a6,a7.firstChild);if(H.getElementById(a5)){E.find.ID=function(a8,ba,a9){if(typeof ba.getElementById!=="undefined"&&!a9){return(ba=ba.getElementById(a8[1]))?ba.id===a8[1]||typeof ba.getAttributeNode!=="undefined"&&ba.getAttributeNode("id").nodeValue===a8[1]?[ba]:aA:[]}};E.filter.ID=function(a8,ba){var a9=typeof a8.getAttributeNode!=="undefined"&&a8.getAttributeNode("id");return a8.nodeType===1&&a9&&a9.nodeValue===ba}}a7.removeChild(a6);a7=a6=null})();(function(){var a5=H.createElement("div");a5.appendChild(H.createComment(""));if(a5.getElementsByTagName("*").length>0){E.find.TAG=function(a7,ba){var a6=ba.getElementsByTagName(a7[1]);if(a7[1]==="*"){for(var a9=[],a8=0;a6[a8];a8++){a6[a8].nodeType===1&&a9.push(a6[a8])}a6=a9}return a6}}a5.innerHTML="<a href='#'></a>";if(a5.firstChild&&typeof a5.firstChild.getAttribute!=="undefined"&&a5.firstChild.getAttribute("href")!=="#"){E.attrHandle.href=function(a6){return a6.getAttribute("href",2)}}a5=null})();H.querySelectorAll&&function(){var a6=S,a5=H.createElement("div");a5.innerHTML="<p class='TEST'></p>";if(!(a5.querySelectorAll&&a5.querySelectorAll(".TEST").length===0)){S=function(a8,bc,bb,a9){bc=bc||H;a8=a8.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!a9&&!S.isXML(bc)){if(bc.nodeType===9){try{return t(bc.querySelectorAll(a8),bb)}catch(bf){}}else{if(bc.nodeType===1&&bc.nodeName.toLowerCase()!=="object"){var ba=bc.getAttribute("id"),be=ba||"__sizzle__";ba||bc.setAttribute("id",be);try{return t(bc.querySelectorAll("#"+be+" "+a8),bb)}catch(bd){}finally{ba||bc.removeAttribute("id")}}}}return a6(a8,bc,bb,a9)};for(var a7 in a6){S[a7]=a6[a7]}a5=null}}();(function(){var a7=H.documentElement,a6=a7.matchesSelector||a7.mozMatchesSelector||a7.webkitMatchesSelector||a7.msMatchesSelector,a8=false;try{a6.call(H.documentElement,"[test!='']:sizzle")}catch(a5){a8=true}if(a6){S.matchesSelector=function(bb,ba){ba=ba.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!S.isXML(bb)){try{if(a8||!E.match.PSEUDO.test(ba)&&!/!=/.test(ba)){return a6.call(bb,ba)}}catch(a9){}}return S(ba,null,null,[bb]).length>0}}})();(function(){var a5=H.createElement("div");a5.innerHTML="<div class='test e'></div><div class='test'></div>";if(!(!a5.getElementsByClassName||a5.getElementsByClassName("e").length===0)){a5.lastChild.className="e";if(a5.getElementsByClassName("e").length!==1){E.order.splice(1,0,"CLASS");E.find.CLASS=function(a7,a8,a6){if(typeof a8.getElementsByClassName!=="undefined"&&!a6){return a8.getElementsByClassName(a7[1])}};a5=null}}})();S.contains=H.documentElement.contains?function(a6,a5){return a6!==a5&&(a6.contains?a6.contains(a5):true)}:H.documentElement.compareDocumentPosition?function(a6,a5){return !!(a6.compareDocumentPosition(a5)&16)}:function(){return false};S.isXML=function(a5){return(a5=(a5?a5.ownerDocument||a5:0).documentElement)?a5.nodeName!=="HTML":false};var X=function(a8,a7){for(var bb,a5=[],ba="",a9=a7.nodeType?[a7]:a7;bb=E.match.PSEUDO.exec(a8);){ba+=bb[0];a8=a8.replace(E.match.PSEUDO,"")}a8=E.relative[a8]?a8+"*":a8;bb=0;for(var a6=a9.length;bb<a6;bb++){S(a8,a9[bb],a5)}return S.filter(ba,a5)};Q.find=S;Q.expr=S.selectors;Q.expr[":"]=Q.expr.filters;Q.unique=S.uniqueSort;Q.text=S.getText;Q.isXMLDoc=S.isXML;Q.contains=S.contains})();var aT=/Until$/,az=/^(?:parents|prevUntil|prevAll)/,aG=/,/,aQ=/^.[^:#\[\.,]*$/,ao=Array.prototype.slice,I=Q.expr.match.POS;Q.fn.extend({find:function(B){for(var c=this.pushStack("","find",B),T=0,S=0,P=this.length;S<P;S++){T=c.length;Q.find(B,this[S],c);if(S>0){for(var E=T;E<c.length;E++){for(var t=0;t<T;t++){if(c[t]===c[E]){c.splice(E--,1);break}}}}}return c},has:function(t){var c=Q(t);return this.filter(function(){for(var E=0,B=c.length;E<B;E++){if(Q.contains(this,c[E])){return true}}})},not:function(c){return this.pushStack(aL(this,c,false),"not",c)},filter:function(c){return this.pushStack(aL(this,c,true),"filter",c)},is:function(c){return !!c&&Q.filter(c,this).length>0},closest:function(V,U){var T=[],S,P,E=this[0];if(Q.isArray(V)){var t,B={},c=1;if(E&&V.length){S=0;for(P=V.length;S<P;S++){t=V[S];B[t]||(B[t]=Q.expr.match.POS.test(t)?Q(t,U||this.context):t)}for(;E&&E.ownerDocument&&E!==U;){for(t in B){S=B[t];if(S.jquery?S.index(E)>-1:Q(E).is(S)){T.push({selector:t,elem:E,level:c})}}E=E.parentNode;c++}}return T}t=I.test(V)?Q(V,U||this.context):null;S=0;for(P=this.length;S<P;S++){for(E=this[S];E;){if(t?t.index(E)>-1:Q.find.matchesSelector(E,V)){T.push(E);break}else{E=E.parentNode;if(!E||!E.ownerDocument||E===U){break}}}}T=T.length>1?Q.unique(T):T;return this.pushStack(T,"closest",V)},index:function(c){if(!c||typeof c==="string"){return Q.inArray(this[0],c?Q(c):this.parent().children())}return Q.inArray(c.jquery?c[0]:c,this)},add:function(t,c){var E=typeof t==="string"?Q(t,c||this.context):Q.makeArray(t),B=Q.merge(this.get(),E);return this.pushStack(!E[0]||!E[0].parentNode||E[0].parentNode.nodeType===11||!B[0]||!B[0].parentNode||B[0].parentNode.nodeType===11?B:Q.unique(B))},andSelf:function(){return this.add(this.prevObject)}});Q.each({parent:function(c){return(c=c.parentNode)&&c.nodeType!==11?c:null},parents:function(c){return Q.dir(c,"parentNode")},parentsUntil:function(t,c,B){return Q.dir(t,"parentNode",B)},next:function(c){return Q.nth(c,2,"nextSibling")},prev:function(c){return Q.nth(c,2,"previousSibling")},nextAll:function(c){return Q.dir(c,"nextSibling")},prevAll:function(c){return Q.dir(c,"previousSibling")},nextUntil:function(t,c,B){return Q.dir(t,"nextSibling",B)},prevUntil:function(t,c,B){return Q.dir(t,"previousSibling",B)},siblings:function(c){return Q.sibling(c.parentNode.firstChild,c)},children:function(c){return Q.sibling(c.firstChild)},contents:function(c){return Q.nodeName(c,"iframe")?c.contentDocument||c.contentWindow.document:Q.makeArray(c.childNodes)}},function(t,c){Q.fn[t]=function(P,E){var B=Q.map(this,c,P);aT.test(t)||(E=P);if(E&&typeof E==="string"){B=Q.filter(E,B)}B=this.length>1?Q.unique(B):B;if((this.length>1||aG.test(E))&&az.test(t)){B=B.reverse()}return this.pushStack(B,t,ao.call(arguments).join(","))}});Q.extend({filter:function(t,c,B){if(B){t=":not("+t+")"}return c.length===1?Q.find.matchesSelector(c[0],t)?[c[0]]:[]:Q.find.matches(t,c)},dir:function(t,c,E){var B=[];for(t=t[c];t&&t.nodeType!==9&&(E===aA||t.nodeType!==1||!Q(t).is(E));){t.nodeType===1&&B.push(t);t=t[c]}return B},nth:function(t,c,E){c=c||1;for(var B=0;t;t=t[E]){if(t.nodeType===1&&++B===c){break}}return t},sibling:function(t,c){for(var B=[];t;t=t.nextSibling){t.nodeType===1&&t!==c&&B.push(t)}return B}});var aE=/ jQuery\d+="(?:\d+|null)"/g,aN=/^\s+/,aW=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,aJ=/<([\w:]+)/,s=/<tbody/i,f=/<|&#?\w+;/,au=/<(?:script|object|embed|option|style)/i,M=/checked\s*(?:[^=]|=\s*.checked.)/i,aU=/\=([^="'>\s]+\/)>/g,ap={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]};ap.optgroup=ap.option;ap.tbody=ap.tfoot=ap.colgroup=ap.caption=ap.thead;ap.th=ap.td;if(!Q.support.htmlSerialize){ap._default=[1,"div<div>","</div>"]}Q.fn.extend({text:function(c){if(Q.isFunction(c)){return this.each(function(t){var B=Q(this);B.text(c.call(this,t,B.text()))})}if(typeof c!=="object"&&c!==aA){return this.empty().append((this[0]&&this[0].ownerDocument||H).createTextNode(c))}return Q.text(this)},wrapAll:function(t){if(Q.isFunction(t)){return this.each(function(B){Q(this).wrapAll(t.call(this,B))})}if(this[0]){var c=Q(t,this[0].ownerDocument).eq(0).clone(true);this[0].parentNode&&c.insertBefore(this[0]);c.map(function(){for(var B=this;B.firstChild&&B.firstChild.nodeType===1;){B=B.firstChild}return B}).append(this)}return this},wrapInner:function(c){if(Q.isFunction(c)){return this.each(function(t){Q(this).wrapInner(c.call(this,t))})}return this.each(function(){var t=Q(this),B=t.contents();B.length?B.wrapAll(c):t.append(c)})},wrap:function(c){return this.each(function(){Q(this).wrapAll(c)})},unwrap:function(){return this.parent().each(function(){Q.nodeName(this,"body")||Q(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,true,function(c){this.nodeType===1&&this.appendChild(c)})},prepend:function(){return this.domManip(arguments,true,function(c){this.nodeType===1&&this.insertBefore(c,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode){return this.domManip(arguments,false,function(t){this.parentNode.insertBefore(t,this)})}else{if(arguments.length){var c=Q(arguments[0]);c.push.apply(c,this.toArray());return this.pushStack(c,"before",arguments)}}},after:function(){if(this[0]&&this[0].parentNode){return this.domManip(arguments,false,function(t){this.parentNode.insertBefore(t,this.nextSibling)})}else{if(arguments.length){var c=this.pushStack(this,"after",arguments);c.push.apply(c,Q(arguments[0]).toArray());return c}}},remove:function(t,c){for(var E=0,B;(B=this[E])!=null;E++){if(!t||Q.filter(t,[B]).length){if(!c&&B.nodeType===1){Q.cleanData(B.getElementsByTagName("*"));Q.cleanData([B])}B.parentNode&&B.parentNode.removeChild(B)}}return this},empty:function(){for(var t=0,c;(c=this[t])!=null;t++){for(c.nodeType===1&&Q.cleanData(c.getElementsByTagName("*"));c.firstChild;){c.removeChild(c.firstChild)}}return this},clone:function(t){var c=this.map(function(){if(!Q.support.noCloneEvent&&!Q.isXMLDoc(this)){var E=this.outerHTML,B=this.ownerDocument;if(!E){E=B.createElement("div");E.appendChild(this.cloneNode(true));E=E.innerHTML}return Q.clean([E.replace(aE,"").replace(aU,'="$1">').replace(aN,"")],B)[0]}else{return this.cloneNode(true)}});if(t===true){ax(this,c);ax(this.find("*"),c.find("*"))}return c},html:function(t){if(t===aA){return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(aE,""):null}else{if(typeof t==="string"&&!au.test(t)&&(Q.support.leadingWhitespace||!aN.test(t))&&!ap[(aJ.exec(t)||["",""])[1].toLowerCase()]){t=t.replace(aW,"<$1></$2>");try{for(var c=0,E=this.length;c<E;c++){if(this[c].nodeType===1){Q.cleanData(this[c].getElementsByTagName("*"));this[c].innerHTML=t}}}catch(B){this.empty().append(t)}}else{Q.isFunction(t)?this.each(function(S){var P=Q(this);P.html(t.call(this,S,P.html()))}):this.empty().append(t)}}return this},replaceWith:function(c){if(this[0]&&this[0].parentNode){if(Q.isFunction(c)){return this.each(function(t){var E=Q(this),B=E.html();E.replaceWith(c.call(this,t,B))})}if(typeof c!=="string"){c=Q(c).detach()}return this.each(function(){var t=this.nextSibling,B=this.parentNode;Q(this).remove();t?Q(t).before(c):Q(B).append(c)})}else{return this.pushStack(Q(Q.isFunction(c)?c():c),"replaceWith",c)}},detach:function(c){return this.remove(c,true)},domManip:function(V,U,T){var S,P,E,t=V[0],B=[];if(!Q.support.checkClone&&arguments.length===3&&typeof t==="string"&&M.test(t)){return this.each(function(){Q(this).domManip(V,U,T,true)})}if(Q.isFunction(t)){return this.each(function(W){var X=Q(this);V[0]=t.call(this,W,U?X.html():aA);X.domManip(V,U,T)})}if(this[0]){S=t&&t.parentNode;S=Q.support.parentNode&&S&&S.nodeType===11&&S.childNodes.length===this.length?{fragment:S}:Q.buildFragment(V,this,B);E=S.fragment;if(P=E.childNodes.length===1?E=E.firstChild:E.firstChild){U=U&&Q.nodeName(P,"tr");P=0;for(var c=this.length;P<c;P++){T.call(U?Q.nodeName(this[P],"table")?this[P].getElementsByTagName("tbody")[0]||this[P].appendChild(this[P].ownerDocument.createElement("tbody")):this[P]:this[P],P>0||S.cacheable||this.length>1?E.cloneNode(true):E)}}B.length&&Q.each(B,aD)}return this}});Q.buildFragment=function(t,c,S){var P,E,B;c=c&&c[0]?c[0].ownerDocument||c[0]:H;if(t.length===1&&typeof t[0]==="string"&&t[0].length<512&&c===H&&!au.test(t[0])&&(Q.support.checkClone||!M.test(t[0]))){E=true;if(B=Q.fragments[t[0]]){if(B!==1){P=B}}}if(!P){P=c.createDocumentFragment();Q.clean(t,c,P,S)}if(E){Q.fragments[t[0]]=B?P:1}return{fragment:P,cacheable:E}};Q.fragments={};Q.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(t,c){Q.fn[t]=function(T){var S=[];T=Q(T);var P=this.length===1&&this[0].parentNode;if(P&&P.nodeType===11&&P.childNodes.length===1&&T.length===1){T[c](this[0]);return this}else{P=0;for(var E=T.length;P<E;P++){var B=(P>0?this.clone(true):this).get();Q(T[P])[c](B);S=S.concat(B)}return this.pushStack(S,t,T.selector)}}});Q.extend({clean:function(X,V,U,T){V=V||H;if(typeof V.createElement==="undefined"){V=V.ownerDocument||V[0]&&V[0].ownerDocument||H}for(var S=[],P=0,B;(B=X[P])!=null;P++){if(typeof B==="number"){B+=""}if(B){if(typeof B==="string"&&!f.test(B)){B=V.createTextNode(B)}else{if(typeof B==="string"){B=B.replace(aW,"<$1></$2>");var E=(aJ.exec(B)||["",""])[1].toLowerCase(),t=ap[E]||ap._default,W=t[0],c=V.createElement("div");for(c.innerHTML=t[1]+B+t[2];W--;){c=c.lastChild}if(!Q.support.tbody){W=s.test(B);E=E==="table"&&!W?c.firstChild&&c.firstChild.childNodes:t[1]==="<table>"&&!W?c.childNodes:[];for(t=E.length-1;t>=0;--t){Q.nodeName(E[t],"tbody")&&!E[t].childNodes.length&&E[t].parentNode.removeChild(E[t])}}!Q.support.leadingWhitespace&&aN.test(B)&&c.insertBefore(V.createTextNode(aN.exec(B)[0]),c.firstChild);B=c.childNodes}}if(B.nodeType){S.push(B)}else{S=Q.merge(S,B)}}}if(U){for(P=0;S[P];P++){if(T&&Q.nodeName(S[P],"script")&&(!S[P].type||S[P].type.toLowerCase()==="text/javascript")){T.push(S[P].parentNode?S[P].parentNode.removeChild(S[P]):S[P])}else{S[P].nodeType===1&&S.splice.apply(S,[P+1,0].concat(Q.makeArray(S[P].getElementsByTagName("script"))));U.appendChild(S[P])}}}return S},cleanData:function(V){for(var U,T,S=Q.cache,P=Q.event.special,E=Q.support.deleteExpando,t=0,B;(B=V[t])!=null;t++){if(!(B.nodeName&&Q.noData[B.nodeName.toLowerCase()])){if(T=B[Q.expando]){if((U=S[T])&&U.events){for(var c in U.events){P[c]?Q.event.remove(B,c):Q.removeEvent(B,c,U.handle)}}if(E){delete B[Q.expando]}else{B.removeAttribute&&B.removeAttribute(Q.expando)}delete S[T]}}}}});var x=/alpha\([^)]*\)/i,aI=/opacity=([^)]*)/,ar=/-([a-z])/ig,K=/([A-Z])/g,k=/^-?\d+(?:px)?$/i,v=/^-?\d/,h={position:"absolute",visibility:"hidden",display:"block"},ae=["Left","Right"],F=["Top","Bottom"],aj,aZ,aH,aX=function(t,c){return c.toUpperCase()};Q.fn.css=function(t,c){if(arguments.length===2&&c===aA){return this}return Q.access(this,t,c,true,function(P,E,B){return B!==aA?Q.style(P,E,B):Q.css(P,E)})};Q.extend({cssHooks:{opacity:{get:function(t,c){if(c){var B=aj(t,"opacity","opacity");return B===""?"1":B}else{return t.style.opacity}}}},cssNumber:{zIndex:true,fontWeight:true,opacity:true,zoom:true,lineHeight:true},cssProps:{"float":Q.support.cssFloat?"cssFloat":"styleFloat"},style:function(V,U,T,S){if(!(!V||V.nodeType===3||V.nodeType===8||!V.style)){var P,E=Q.camelCase(U),t=V.style,B=Q.cssHooks[E];U=Q.cssProps[E]||E;if(T!==aA){if(!(typeof T==="number"&&isNaN(T)||T==null)){if(typeof T==="number"&&!Q.cssNumber[E]){T+="px"}if(!B||!("set" in B)||(T=B.set(V,T))!==aA){try{t[U]=T}catch(c){}}}}else{if(B&&"get" in B&&(P=B.get(V,false,S))!==aA){return P}return t[U]}}},css:function(t,c,S){var P,E=Q.camelCase(c),B=Q.cssHooks[E];c=Q.cssProps[E]||E;if(B&&"get" in B&&(P=B.get(t,true,S))!==aA){return P}else{if(aj){return aj(t,c,E)}}},swap:function(t,c,P){var E={},B;for(B in c){E[B]=t.style[B];t.style[B]=c[B]}P.call(t);for(B in c){t.style[B]=E[B]}},camelCase:function(c){return c.replace(ar,aX)}});Q.curCSS=Q.css;Q.each(["height","width"],function(t,c){Q.cssHooks[c]={get:function(S,P,E){var B;if(P){if(S.offsetWidth!==0){B=O(S,c,E)}else{Q.swap(S,h,function(){B=O(S,c,E)})}if(B<=0){B=aj(S,c,c);if(B==="0px"&&aH){B=aH(S,c,c)}if(B!=null){return B===""||B==="auto"?"0px":B}}if(B<0||B==null){B=S.style[c];return B===""||B==="auto"?"0px":B}return typeof B==="string"?B:B+"px"}},set:function(E,B){if(k.test(B)){B=parseFloat(B);if(B>=0){return B+"px"}}else{return B}}}});if(!Q.support.opacity){Q.cssHooks.opacity={get:function(t,c){return aI.test((c&&t.currentStyle?t.currentStyle.filter:t.style.filter)||"")?parseFloat(RegExp.$1)/100+"":c?"1":""},set:function(t,c){var P=t.style;P.zoom=1;var E=Q.isNaN(c)?"":"alpha(opacity="+c*100+")",B=P.filter||"";P.filter=x.test(B)?B.replace(x,E):P.filter+" "+E}}}if(H.defaultView&&H.defaultView.getComputedStyle){aZ=function(t,c,E){var B;E=E.replace(K,"-$1").toLowerCase();if(!(c=t.ownerDocument.defaultView)){return aA}if(c=c.getComputedStyle(t,null)){B=c.getPropertyValue(E);if(B===""&&!Q.contains(t.ownerDocument.documentElement,t)){B=Q.style(t,E)}}return B}}if(H.documentElement.currentStyle){aH=function(t,c){var S,P,E=t.currentStyle&&t.currentStyle[c],B=t.style;if(!k.test(E)&&v.test(E)){S=B.left;P=t.runtimeStyle.left;t.runtimeStyle.left=t.currentStyle.left;B.left=c==="fontSize"?"1em":E||0;E=B.pixelLeft+"px";B.left=S;t.runtimeStyle.left=P}return E===""?"auto":E}}aj=aZ||aH;if(Q.expr&&Q.expr.filters){Q.expr.filters.hidden=function(t){var c=t.offsetHeight;return t.offsetWidth===0&&c===0||!Q.support.reliableHiddenOffsets&&(t.style.display||Q.css(t,"display"))==="none"};Q.expr.filters.visible=function(c){return !Q.expr.filters.hidden(c)}}var aK=Q.now(),av=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,N=/^(?:select|textarea)/i,y=/^(?:color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,l=/^(?:GET|HEAD)$/,q=/\[\]$/,am=/\=\?(&|$)/,w=/\?/,a0=/([?&])_=[^&]*/,aO=/^(\w+:)?\/\/([^\/?#]+)/,aB=/%20/g,ac=/#.*$/,aM=Q.fn.load;Q.fn.extend({load:function(t,c,S){if(typeof t!=="string"&&aM){return aM.apply(this,arguments)}else{if(!this.length){return this}}var P=t.indexOf(" ");if(P>=0){var E=t.slice(P,t.length);t=t.slice(0,P)}P="GET";if(c){if(Q.isFunction(c)){S=c;c=null}else{if(typeof c==="object"){c=Q.param(c,Q.ajaxSettings.traditional);P="POST"}}}var B=this;Q.ajax({url:t,type:P,dataType:"html",data:c,complete:function(T,U){if(U==="success"||U==="notmodified"){B.html(E?Q("<div>").append(T.responseText.replace(av,"")).find(E):T.responseText)}S&&B.each(S,[T.responseText,U,T])}});return this},serialize:function(){return Q.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?Q.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||N.test(this.nodeName)||y.test(this.type))}).map(function(t,c){var B=Q(this).val();return B==null?null:Q.isArray(B)?Q.map(B,function(E){return{name:c.name,value:E}}):{name:c.name,value:B}}).get()}});Q.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(t,c){Q.fn[c]=function(B){return this.bind(c,B)}});Q.extend({get:function(t,c,E,B){if(Q.isFunction(c)){B=B||E;E=c;c=null}return Q.ajax({type:"GET",url:t,data:c,success:E,dataType:B})},getScript:function(t,c){return Q.get(t,null,c,"script")},getJSON:function(t,c,B){return Q.get(t,c,B,"json")},post:function(t,c,E,B){if(Q.isFunction(c)){B=B||E;E=c;c={}}return Q.ajax({type:"POST",url:t,data:c,success:E,dataType:B})},ajaxSetup:function(c){Q.extend(Q.ajaxSettings,c)},ajaxSettings:{url:location.href,global:true,type:"GET",contentType:"application/x-www-form-urlencoded",processData:true,async:true,xhr:function(){return new aw.XMLHttpRequest},accepts:{xml:"application/xml, text/xml",html:"text/html",script:"text/javascript, application/javascript",json:"application/json, text/javascript",text:"text/plain",_default:"*/*"}},ajax:function(a7){var a6=Q.extend(true,{},Q.ajaxSettings,a7),a5,a4,a3,aa=a6.type.toUpperCase(),X=l.test(aa);a6.url=a6.url.replace(ac,"");a6.context=a7&&a7.context!=null?a7.context:a6;if(a6.data&&a6.processData&&typeof a6.data!=="string"){a6.data=Q.param(a6.data,a6.traditional)}if(a6.dataType==="jsonp"){if(aa==="GET"){am.test(a6.url)||(a6.url+=(w.test(a6.url)?"&":"?")+(a6.jsonp||"callback")+"=?")}else{if(!a6.data||!am.test(a6.data)){a6.data=(a6.data?a6.data+"&":"")+(a6.jsonp||"callback")+"=?"}}a6.dataType="json"}if(a6.dataType==="json"&&(a6.data&&am.test(a6.data)||am.test(a6.url))){a5=a6.jsonpCallback||"jsonp"+aK++;if(a6.data){a6.data=(a6.data+"").replace(am,"="+a5+"$1")}a6.url=a6.url.replace(am,"="+a5+"$1");a6.dataType="script";var Y=aw[a5];aw[a5]=function(a8){if(Q.isFunction(Y)){Y(a8)}else{aw[a5]=aA;try{delete aw[a5]}catch(a9){}}a3=a8;Q.handleSuccess(a6,P,a4,a3);Q.handleComplete(a6,P,a4,a3);T&&T.removeChild(U)}}if(a6.dataType==="script"&&a6.cache===null){a6.cache=false}if(a6.cache===false&&X){var V=Q.now(),E=a6.url.replace(a0,"$1_="+V);a6.url=E+(E===a6.url?(w.test(a6.url)?"&":"?")+"_="+V:"")}if(a6.data&&X){a6.url+=(w.test(a6.url)?"&":"?")+a6.data}a6.global&&Q.active++===0&&Q.event.trigger("ajaxStart");V=(V=aO.exec(a6.url))&&(V[1]&&V[1].toLowerCase()!==location.protocol||V[2].toLowerCase()!==location.host);if(a6.dataType==="script"&&aa==="GET"&&V){var T=H.getElementsByTagName("head")[0]||H.documentElement,U=H.createElement("script");if(a6.scriptCharset){U.charset=a6.scriptCharset}U.src=a6.url;if(!a5){var S=false;U.onload=U.onreadystatechange=function(){if(!S&&(!this.readyState||this.readyState==="loaded"||this.readyState==="complete")){S=true;Q.handleSuccess(a6,P,a4,a3);Q.handleComplete(a6,P,a4,a3);U.onload=U.onreadystatechange=null;T&&U.parentNode&&T.removeChild(U)}}}T.insertBefore(U,T.firstChild);return aA}var t=false,P=a6.xhr();if(P){a6.username?P.open(aa,a6.url,a6.async,a6.username,a6.password):P.open(aa,a6.url,a6.async);try{if(a6.data!=null&&!X||a7&&a7.contentType){P.setRequestHeader("Content-Type",a6.contentType)}if(a6.ifModified){Q.lastModified[a6.url]&&P.setRequestHeader("If-Modified-Since",Q.lastModified[a6.url]);Q.etag[a6.url]&&P.setRequestHeader("If-None-Match",Q.etag[a6.url])}V||P.setRequestHeader("X-Requested-With","XMLHttpRequest");P.setRequestHeader("Accept",a6.dataType&&a6.accepts[a6.dataType]?a6.accepts[a6.dataType]+", */*; q=0.01":a6.accepts._default)}catch(B){}if(a6.beforeSend&&a6.beforeSend.call(a6.context,P,a6)===false){a6.global&&Q.active--===1&&Q.event.trigger("ajaxStop");P.abort();return false}a6.global&&Q.triggerGlobal(a6,"ajaxSend",[P,a6]);var c=P.onreadystatechange=function(a8){if(!P||P.readyState===0||a8==="abort"){t||Q.handleComplete(a6,P,a4,a3);t=true;if(P){P.onreadystatechange=Q.noop}}else{if(!t&&P&&(P.readyState===4||a8==="timeout")){t=true;P.onreadystatechange=Q.noop;a4=a8==="timeout"?"timeout":!Q.httpSuccess(P)?"error":a6.ifModified&&Q.httpNotModified(P,a6.url)?"notmodified":"success";var ba;if(a4==="success"){try{a3=Q.httpData(P,a6.dataType,a6)}catch(a9){a4="parsererror";ba=a9}}if(a4==="success"||a4==="notmodified"){a5||Q.handleSuccess(a6,P,a4,a3)}else{Q.handleError(a6,P,a4,ba)}a5||Q.handleComplete(a6,P,a4,a3);a8==="timeout"&&P.abort();if(a6.async){P=null}}}};try{var ab=P.abort;P.abort=function(){P&&Function.prototype.call.call(ab,P);c("abort")}}catch(Z){}a6.async&&a6.timeout>0&&setTimeout(function(){P&&!t&&c("timeout")},a6.timeout);try{P.send(X||a6.data==null?null:a6.data)}catch(W){Q.handleError(a6,P,null,W);Q.handleComplete(a6,P,a4,a3)}a6.async||c();return P}},param:function(t,c){var P=[],E=function(T,S){S=Q.isFunction(S)?S():S;P[P.length]=encodeURIComponent(T)+"="+encodeURIComponent(S)};if(c===aA){c=Q.ajaxSettings.traditional}if(Q.isArray(t)||t.jquery){Q.each(t,function(){E(this.name,this.value)})}else{for(var B in t){u(B,t[B],c,E)}}return P.join("&").replace(aB,"+")}});Q.extend({active:0,lastModified:{},etag:{},handleError:function(t,c,E,B){t.error&&t.error.call(t.context,c,E,B);t.global&&Q.triggerGlobal(t,"ajaxError",[c,t,B])},handleSuccess:function(t,c,E,B){t.success&&t.success.call(t.context,B,E,c);t.global&&Q.triggerGlobal(t,"ajaxSuccess",[c,t])},handleComplete:function(t,c,B){t.complete&&t.complete.call(t.context,c,B);t.global&&Q.triggerGlobal(t,"ajaxComplete",[c,t]);t.global&&Q.active--===1&&Q.event.trigger("ajaxStop")},triggerGlobal:function(t,c,B){(t.context&&t.context.url==null?Q(t.context):Q.event).trigger(c,B)},httpSuccess:function(t){try{return !t.status&&location.protocol==="file:"||t.status>=200&&t.status<300||t.status===304||t.status===1223}catch(c){}return false},httpNotModified:function(t,c){var E=t.getResponseHeader("Last-Modified"),B=t.getResponseHeader("Etag");if(E){Q.lastModified[c]=E}if(B){Q.etag[c]=B}return t.status===304},httpData:function(t,c,P){var E=t.getResponseHeader("content-type")||"",B=c==="xml"||!c&&E.indexOf("xml")>=0;t=B?t.responseXML:t.responseText;B&&t.documentElement.nodeName==="parsererror"&&Q.error("parsererror");if(P&&P.dataFilter){t=P.dataFilter(t,c)}if(typeof t==="string"){if(c==="json"||!c&&E.indexOf("json")>=0){t=Q.parseJSON(t)}else{if(c==="script"||!c&&E.indexOf("javascript")>=0){Q.globalEval(t)}}}return t}});if(aw.ActiveXObject){Q.ajaxSettings.xhr=function(){if(aw.location.protocol!=="file:"){try{return new aw.XMLHttpRequest}catch(t){}}try{return new aw.ActiveXObject("Microsoft.XMLHTTP")}catch(c){}}}Q.support.ajax=!!Q.ajaxSettings.xhr();var g={},C=/^(?:toggle|show|hide)$/,o=/^([+\-]=)?([\d+.\-]+)(.*)$/,aq,z=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]];Q.fn.extend({show:function(t,c,E){if(t||t===0){return this.animate(an("show",3),t,c,E)}else{E=0;for(var B=this.length;E<B;E++){t=this[E];c=t.style.display;if(!Q.data(t,"olddisplay")&&c==="none"){c=t.style.display=""}c===""&&Q.css(t,"display")==="none"&&Q.data(t,"olddisplay",m(t.nodeName))}for(E=0;E<B;E++){t=this[E];c=t.style.display;if(c===""||c==="none"){t.style.display=Q.data(t,"olddisplay")||""}}return this}},hide:function(t,c,B){if(t||t===0){return this.animate(an("hide",3),t,c,B)}else{t=0;for(c=this.length;t<c;t++){B=Q.css(this[t],"display");B!=="none"&&Q.data(this[t],"olddisplay",B)}for(t=0;t<c;t++){this[t].style.display="none"}return this}},_toggle:Q.fn.toggle,toggle:function(t,c,E){var B=typeof t==="boolean";if(Q.isFunction(t)&&Q.isFunction(c)){this._toggle.apply(this,arguments)}else{t==null||B?this.each(function(){var P=B?t:Q(this).is(":hidden");Q(this)[P?"show":"hide"]()}):this.animate(an("toggle",3),t,c,E)}return this},fadeTo:function(t,c,E,B){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:c},t,E,B)},animate:function(t,c,P,E){var B=Q.speed(c,P,E);if(Q.isEmptyObject(t)){return this.each(B.complete)}return this[B.queue===false?"each":"queue"](function(){var V=Q.extend({},B),T,U=this.nodeType===1,X=U&&Q(this).is(":hidden"),S=this;for(T in t){var W=Q.camelCase(T);if(T!==W){t[W]=t[T];delete t[T];T=W}if(t[T]==="hide"&&X||t[T]==="show"&&!X){return V.complete.call(this)}if(U&&(T==="height"||T==="width")){V.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY];if(Q.css(this,"display")==="inline"&&Q.css(this,"float")==="none"){if(Q.support.inlineBlockNeedsLayout){if(m(this.nodeName)==="inline"){this.style.display="inline-block"}else{this.style.display="inline";this.style.zoom=1}}else{this.style.display="inline-block"}}}if(Q.isArray(t[T])){(V.specialEasing=V.specialEasing||{})[T]=t[T][1];t[T]=t[T][0]}}if(V.overflow!=null){this.style.overflow="hidden"}V.curAnim=Q.extend({},t);Q.each(t,function(Z,a5){var ab=new Q.fx(S,V,Z);if(C.test(a5)){ab[a5==="toggle"?X?"show":"hide":a5](t)}else{var aa=o.exec(a5),a3=ab.cur()||0;if(aa){var Y=parseFloat(aa[2]),a4=aa[3]||"px";if(a4!=="px"){Q.style(S,Z,(Y||1)+a4);a3=(Y||1)/ab.cur()*a3;Q.style(S,Z,a3+a4)}if(aa[1]){Y=(aa[1]==="-="?-1:1)*Y+a3}ab.custom(a3,Y,a4)}else{ab.custom(a3,a5,"")}}});return true})},stop:function(t,c){var B=Q.timers;t&&this.queue([]);this.each(function(){for(var E=B.length-1;E>=0;E--){if(B[E].elem===this){c&&B[E](true);B.splice(E,1)}}});c||this.dequeue();return this}});Q.each({slideDown:an("show",1),slideUp:an("hide",1),slideToggle:an("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(t,c){Q.fn[t]=function(P,E,B){return this.animate(c,P,E,B)}});Q.extend({speed:function(t,c,E){var B=t&&typeof t==="object"?Q.extend({},t):{complete:E||!E&&c||Q.isFunction(t)&&t,duration:t,easing:E&&c||c&&!Q.isFunction(c)&&c};B.duration=Q.fx.off?0:typeof B.duration==="number"?B.duration:B.duration in Q.fx.speeds?Q.fx.speeds[B.duration]:Q.fx.speeds._default;B.old=B.complete;B.complete=function(){B.queue!==false&&Q(this).dequeue();Q.isFunction(B.old)&&B.old.call(this)};return B},easing:{linear:function(t,c,E,B){return E+B*t},swing:function(t,c,E,B){return(-Math.cos(t*Math.PI)/2+0.5)*B+E}},timers:[],fx:function(t,c,B){this.options=c;this.elem=t;this.prop=B;if(!c.orig){c.orig={}}}});Q.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this);(Q.fx.step[this.prop]||Q.fx.step._default)(this)},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null)){return this.elem[this.prop]}var c=parseFloat(Q.css(this.elem,this.prop));return c&&c>-10000?c:0},custom:function(t,c,S){function P(T){return E.step(T)}var E=this,B=Q.fx;this.startTime=Q.now();this.start=t;this.end=c;this.unit=S||this.unit||"px";this.now=this.start;this.pos=this.state=0;P.elem=this.elem;if(P()&&Q.timers.push(P)&&!aq){aq=setInterval(B.tick,B.interval)}},show:function(){this.options.orig[this.prop]=Q.style(this.elem,this.prop);this.options.show=true;this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur());Q(this.elem).show()},hide:function(){this.options.orig[this.prop]=Q.style(this.elem,this.prop);this.options.hide=true;this.custom(this.cur(),0)},step:function(B){var c=Q.now(),T=true;if(B||c>=this.options.duration+this.startTime){this.now=this.end;this.pos=this.state=1;this.update();this.options.curAnim[this.prop]=true;for(var S in this.options.curAnim){if(this.options.curAnim[S]!==true){T=false}}if(T){if(this.options.overflow!=null&&!Q.support.shrinkWrapBlocks){var P=this.elem,E=this.options;Q.each(["","X","Y"],function(U,V){P.style["overflow"+V]=E.overflow[U]})}this.options.hide&&Q(this.elem).hide();if(this.options.hide||this.options.show){for(var t in this.options.curAnim){Q.style(this.elem,t,this.options.orig[t])}}this.options.complete.call(this.elem)}return false}else{B=c-this.startTime;this.state=B/this.options.duration;c=this.options.easing||(Q.easing.swing?"swing":"linear");this.pos=Q.easing[this.options.specialEasing&&this.options.specialEasing[this.prop]||c](this.state,B,0,1,this.options.duration);this.now=this.start+(this.end-this.start)*this.pos;this.update()}return true}};Q.extend(Q.fx,{tick:function(){for(var t=Q.timers,c=0;c<t.length;c++){t[c]()||t.splice(c--,1)}t.length||Q.fx.stop()},interval:13,stop:function(){clearInterval(aq);aq=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(c){Q.style(c.elem,"opacity",c.now)},_default:function(c){if(c.elem.style&&c.elem.style[c.prop]!=null){c.elem.style[c.prop]=(c.prop==="width"||c.prop==="height"?Math.max(0,c.now):c.now)+c.unit}else{c.elem[c.prop]=c.now}}}});if(Q.expr&&Q.expr.filters){Q.expr.filters.animated=function(c){return Q.grep(Q.timers,function(t){return c===t.elem}).length}}var a=/^t(?:able|d|h)$/i,ay=/^(?:body|html)$/i;Q.fn.offset="getBoundingClientRect" in H.documentElement?function(t){var c=this[0],S;if(t){return this.each(function(T){Q.offset.setOffset(this,t,T)})}if(!c||!c.ownerDocument){return null}if(c===c.ownerDocument.body){return Q.offset.bodyOffset(c)}try{S=c.getBoundingClientRect()}catch(P){}var E=c.ownerDocument,B=E.documentElement;if(!S||!Q.contains(B,c)){return S||{top:0,left:0}}c=E.body;E=aV(E);return{top:S.top+(E.pageYOffset||Q.support.boxModel&&B.scrollTop||c.scrollTop)-(B.clientTop||c.clientTop||0),left:S.left+(E.pageXOffset||Q.support.boxModel&&B.scrollLeft||c.scrollLeft)-(B.clientLeft||c.clientLeft||0)}}:function(V){var U=this[0];if(V){return this.each(function(W){Q.offset.setOffset(this,V,W)})}if(!U||!U.ownerDocument){return null}if(U===U.ownerDocument.body){return Q.offset.bodyOffset(U)}Q.offset.initialize();var T,S=U.offsetParent,P=U.ownerDocument,E=P.documentElement,t=P.body;T=(P=P.defaultView)?P.getComputedStyle(U,null):U.currentStyle;for(var B=U.offsetTop,c=U.offsetLeft;(U=U.parentNode)&&U!==t&&U!==E;){if(Q.offset.supportsFixedPosition&&T.position==="fixed"){break}T=P?P.getComputedStyle(U,null):U.currentStyle;B-=U.scrollTop;c-=U.scrollLeft;if(U===S){B+=U.offsetTop;c+=U.offsetLeft;if(Q.offset.doesNotAddBorder&&!(Q.offset.doesAddBorderForTableAndCells&&a.test(U.nodeName))){B+=parseFloat(T.borderTopWidth)||0;c+=parseFloat(T.borderLeftWidth)||0}S=U.offsetParent}if(Q.offset.subtractsBorderForOverflowNotVisible&&T.overflow!=="visible"){B+=parseFloat(T.borderTopWidth)||0;c+=parseFloat(T.borderLeftWidth)||0}T=T}if(T.position==="relative"||T.position==="static"){B+=t.offsetTop;c+=t.offsetLeft}if(Q.offset.supportsFixedPosition&&T.position==="fixed"){B+=Math.max(E.scrollTop,t.scrollTop);c+=Math.max(E.scrollLeft,t.scrollLeft)}return{top:B,left:c}};Q.offset={initialize:function(){var t=H.body,c=H.createElement("div"),S,P,E,B=parseFloat(Q.css(t,"marginTop"))||0;Q.extend(c.style,{position:"absolute",top:0,left:0,margin:0,border:0,width:"1px",height:"1px",visibility:"hidden"});c.innerHTML="<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";t.insertBefore(c,t.firstChild);S=c.firstChild;P=S.firstChild;E=S.nextSibling.firstChild.firstChild;this.doesNotAddBorder=P.offsetTop!==5;this.doesAddBorderForTableAndCells=E.offsetTop===5;P.style.position="fixed";P.style.top="20px";this.supportsFixedPosition=P.offsetTop===20||P.offsetTop===15;P.style.position=P.style.top="";S.style.overflow="hidden";S.style.position="relative";this.subtractsBorderForOverflowNotVisible=P.offsetTop===-5;this.doesNotIncludeMarginInBodyOffset=t.offsetTop!==B;t.removeChild(c);Q.offset.initialize=Q.noop},bodyOffset:function(t){var c=t.offsetTop,B=t.offsetLeft;Q.offset.initialize();if(Q.offset.doesNotIncludeMarginInBodyOffset){c+=parseFloat(Q.css(t,"marginTop"))||0;B+=parseFloat(Q.css(t,"marginLeft"))||0}return{top:c,left:B}},setOffset:function(W,U,T){var S=Q.css(W,"position");if(S==="static"){W.style.position="relative"}var P=Q(W),E=P.offset(),t=Q.css(W,"top"),B=Q.css(W,"left"),c=S==="absolute"&&Q.inArray("auto",[t,B])>-1;S={};var V={};if(c){V=P.position()}t=c?V.top:parseInt(t,10)||0;B=c?V.left:parseInt(B,10)||0;if(Q.isFunction(U)){U=U.call(W,T,E)}if(U.top!=null){S.top=U.top-E.top+t}if(U.left!=null){S.left=U.left-E.left+B}"using" in U?U.using.call(W,S):P.css(S)}};Q.fn.extend({position:function(){if(!this[0]){return null}var t=this[0],c=this.offsetParent(),E=this.offset(),B=ay.test(c[0].nodeName)?{top:0,left:0}:c.offset();E.top-=parseFloat(Q.css(t,"marginTop"))||0;E.left-=parseFloat(Q.css(t,"marginLeft"))||0;B.top+=parseFloat(Q.css(c[0],"borderTopWidth"))||0;B.left+=parseFloat(Q.css(c[0],"borderLeftWidth"))||0;return{top:E.top-B.top,left:E.left-B.left}},offsetParent:function(){return this.map(function(){for(var c=this.offsetParent||H.body;c&&!ay.test(c.nodeName)&&Q.css(c,"position")==="static";){c=c.offsetParent}return c})}});Q.each(["Left","Top"],function(t,c){var B="scroll"+c;Q.fn[B]=function(S){var P=this[0],E;if(!P){return null}if(S!==aA){return this.each(function(){if(E=aV(this)){E.scrollTo(!t?S:Q(E).scrollLeft(),t?S:Q(E).scrollTop())}else{this[B]=S}})}else{return(E=aV(P))?"pageXOffset" in E?E[t?"pageYOffset":"pageXOffset"]:Q.support.boxModel&&E.document.documentElement[B]||E.document.body[B]:P[B]}}});Q.each(["Height","Width"],function(t,c){var B=c.toLowerCase();Q.fn["inner"+c]=function(){return this[0]?parseFloat(Q.css(this[0],B,"padding")):null};Q.fn["outer"+c]=function(E){return this[0]?parseFloat(Q.css(this[0],B,E?"margin":"border")):null};Q.fn[B]=function(S){var P=this[0];if(!P){return S==null?null:this}if(Q.isFunction(S)){return this.each(function(T){var U=Q(this);U[B](S.call(this,T,U[B]()))})}if(Q.isWindow(P)){return P.document.compatMode==="CSS1Compat"&&P.document.documentElement["client"+c]||P.document.body["client"+c]}else{if(P.nodeType===9){return Math.max(P.documentElement["client"+c],P.body["scroll"+c],P.documentElement["scroll"+c],P.body["offset"+c],P.documentElement["offset"+c])}else{if(S===aA){P=Q.css(P,B);var E=parseFloat(P);return Q.isNaN(E)?P:E}else{return this.css(B,typeof S==="string"?S:S+"px")}}}}})})(window);if(!this.JSON){JSON={}}(function(){function d(f){return f<10?"0"+f:f}if(typeof Date.prototype.toJSON!=="function"){Date.prototype.toJSON=function(f){return this.getUTCFullYear()+"-"+d(this.getUTCMonth()+1)+"-"+d(this.getUTCDate())+"T"+d(this.getUTCHours())+":"+d(this.getUTCMinutes())+":"+d(this.getUTCSeconds())+"Z"};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(f){return this.valueOf()}}var c=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,g=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,h,b,k={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},j;function a(f){g.lastIndex=0;return g.test(f)?'"'+f.replace(g,function(l){var m=k[l];return typeof m==="string"?m:"\\u"+("0000"+l.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+f+'"'}function e(r,o){var m,l,s,f,p=h,n,q=o[r];if(q&&typeof q==="object"&&typeof q.toJSON==="function"){q=q.toJSON(r)}if(typeof j==="function"){q=j.call(o,r,q)}switch(typeof q){case"string":return a(q);case"number":return isFinite(q)?String(q):"null";case"boolean":case"null":return String(q);case"object":if(!q){return"null"}h+=b;n=[];if(Object.prototype.toString.apply(q)==="[object Array]"){f=q.length;for(m=0;m<f;m+=1){n[m]=e(m,q)||"null"}s=n.length===0?"[]":h?"[\n"+h+n.join(",\n"+h)+"\n"+p+"]":"["+n.join(",")+"]";h=p;return s}if(j&&typeof j==="object"){f=j.length;for(m=0;m<f;m+=1){l=j[m];if(typeof l==="string"){s=e(l,q);if(s){n.push(a(l)+(h?": ":":")+s)}}}}else{for(l in q){if(Object.hasOwnProperty.call(q,l)){s=e(l,q);if(s){n.push(a(l)+(h?": ":":")+s)}}}}s=n.length===0?"{}":h?"{\n"+h+n.join(",\n"+h)+"\n"+p+"}":"{"+n.join(",")+"}";h=p;return s}}if(typeof JSON.stringify!=="function"){JSON.stringify=function(n,l,m){var f;h="";b="";if(typeof m==="number"){for(f=0;f<m;f+=1){b+=" "}}else{if(typeof m==="string"){b=m}}j=l;if(l&&typeof l!=="function"&&(typeof l!=="object"||typeof l.length!=="number")){throw new Error("JSON.stringify")}return e("",{"":n})}}}());if(typeof(VDNA_LOADING)!="undefined"){VDNA_LOADING.updateStatus()}var VDNA_urls={live:"http://gateway-lite.visualdna.com/vdna_api.php",staging:"http://gateway-lite.staging.youniverse.com/vdna_api.php",deploytest:"http://gatewaylite.deploytest.dmz.youniverse.com/rest.php",vm:"http://lightgateway.vm.youniverse.com/vdna_api.php"};var VDNA_url=VDNA_urls.live;var VDNA_enableVDNABank=true;var VDNA_cookieName="vdnaUserId";var VDNA_permCookieName="vdnaUserPermission";var VDNA_userAskedCookieName="vdnaUserAskedAboutPermission";var xmlhttp;var VDNA_userPermission;var VDNA_lastUserResponse;var VDNA_userProfile;var VDNA_userFeedback;var VDNA_userID;var VDNA_safariNewUser=false;var VDNA_safariUpdateCookie=false;var VDNA_setComplete;var VDNA_error="";var VDNA_answer="";var VDNA_functionNameCalled=new Array();function VDNA_GetUserID(){if(VDNA_LocalCookieExists(VDNA_cookieName)){VDNA_userID=VDNA_GetInfoFromCookie(VDNA_cookieName);return VDNA_userID}else{if(VDNA_enableRemoteCookies){if(VDNA_RequestPeriodOver()){VDNA_GetUserIDRemote()}else{return 0}}else{if(!VDNA_LocalCookieExists(VDNA_permCookieName)){VDNA_SetUpInfoCookie(VDNA_permCookieName,"true")}}}}function VDNA_getClientPermission(){if(VDNA_functionNameCalled.length>0&&!VDNA_LocalCookieExists(VDNA_userAskedCookieName)&&VDNA_enableVDNABank==true){return false}if(!VDNA_LocalCookieExists(VDNA_userAskedCookieName)&&VDNA_enableVDNABank==true&&VDNA_LocalCookieExists(VDNA_cookieName)){callback="VDNA_processGetClientPermission";var c=VDNA_url+"?method=api.soa.us.getClientPermission&param1="+VDNA_config.userID+"&api_key="+VDNA_apiKey+"&sig="+VDNA_hash+"&callback="+callback+"&format=json&v=1";var a=document.getElementsByTagName("head")[0];var b=document.createElement("script");b.type="text/javascript";b.src=c;a.appendChild(b);return false}return true}function VDNA_processGetClientPermission(jsonObj){if(jsonObj["@attributes"].stat=="ok"){if(jsonObj.userPermission["@attributes"].permission=="0"){VDNA_show_modal()}else{if(jsonObj.userPermission["@attributes"].permission=="1"){VDNA_SetUpInfoCookie(VDNA_userAskedCookieName,"true");if(VDNA_functionNameCalled.length>0){for(var i=0;i<VDNA_functionNameCalled.length;i++){eval(VDNA_functionNameCalled[i])}VDNA_functionNameCalled=new Array()}}}}else{if(jsonObj["@attributes"].stat=="fail"){alert(jsonObj.err["@attributes"].msg)}}}function VDNA_processUserResponse(){if(VDNA_answer!=""){switch(VDNA_answer){case"true":VDNA_SetUpInfoCookie(VDNA_userAskedCookieName,"true");VDNA_setClientPermission(1);break;case"false":VDNA_SetUpInfoCookie(VDNA_userAskedCookieName,"false");break;default:VDNA_SetUpInfoCookie(VDNA_userAskedCookieName,"24h");break}}if(VDNA_functionNameCalled.length>0){for(var i=0;i<VDNA_functionNameCalled.length;i++){eval(VDNA_functionNameCalled[i])}VDNA_functionNameCalled=new Array()}}function VDNA_setClientPermission(d){callback="VDNA_processSetClientPermission";var c=VDNA_url+"?method=api.soa.us.setClientPermission&param1="+VDNA_config.userID+"&param2="+d+"&api_key="+VDNA_apiKey+"&sig="+VDNA_hash+"&format=json&v=1&callback="+callback;var a=document.getElementsByTagName("head")[0];var b=document.createElement("script");b.type="text/javascript";b.src=c;a.appendChild(b)}function VDNA_processSetClientPermission(a){if(a["@attributes"].stat=="fail"){alert(a.err["@attributes"].msg)}}function isInt(a){var b=parseInt(a);if(isNaN(b)){return false}return a==b&&a.toString()==b.toString()}function VDNA_getCookieDomain(){var d=document.domain;var a=d.split(".");var c=true;for(var b=0;b<a.length;b++){if(!isInt(a[b])){var c=false}}if(!c){d="."+a[a.length-2]+"."+a[a.length-1]}return d}function VDNA_LocalCookieExists(a){if(document.cookie.length>0){c_start=document.cookie.indexOf(a+"=");if(c_start!=-1){return true}}return false}function VDNA_GetInfoFromCookie(a){if(document.cookie.length>0){c_start=document.cookie.indexOf(a+"=");if(c_start!=-1){c_start=c_start+a.length+1;c_end=document.cookie.indexOf(";",c_start);if(c_end==-1){c_end=document.cookie.length}return unescape(document.cookie.substring(c_start,c_end))}}return false}function VDNA_SetUpInfoCookie(b,f){var e=1000*60*60*24*356*10;if(b=="vdnaTimestamp"){f=Math.round(new Date().getTime()/1000)}if(b==VDNA_cookieName||f=="24h"){if(f==0){return false}e=1000*60*60*24}var c=VDNA_getCookieDomain();var a=new Date();a.setTime(a.getTime());var d=new Date(a.getTime()+e);document.cookie=b+"="+escape(f)+";expires="+d.toGMTString()+";path=/;domain="+c}function VDNA_DeleteLocalCookie(a){var c=VDNA_getCookieDomain();var b="Thu, 01-Jan-1970 00:00:01 GMT";document.cookie=a+"=0;expires="+b+";path=/;domain="+c}function VDNA_RequestPeriodOver(){var b=VDNA_GetInfoFromCookie("vdnaTimestamp");if(!b){return true}var a=Math.round(new Date().getTime()/1000);if(a-b>60*60*24){return true}return false}function VDNA_GetUserIDRemote(){if((VDNA_userID===false||VDNA_userID==undefined||VDNA_userID=="false")&&VDNA_error==""){var a=document.getElementsByTagName("head")[0];var b=document.createElement("script");b.type="text/javascript";b.src=VDNA_url+"?format=json&method=api.vdna.getRemoteCookie&v=1&api_key="+VDNA_apiKey+"&sig="+VDNA_hash+"&callback=VDNA_GetUserIDRemoteValue";a.appendChild(b);setTimeout("VDNA_GetUserIDRemote()",300)}else{if(VDNA_error!=""){alert(VDNA_error);VDNA_error=""}else{VDNA_SetUpInfoCookie("vdnaTimestamp","");VDNA_SetUpInfoCookie(VDNA_cookieName,VDNA_userID);VDNA_SetUpInfoCookie(VDNA_permCookieName,VDNA_userPermission)}}}function VDNA_RefreshCookieValues(){var a=document.getElementsByTagName("head")[0];var b=document.createElement("script");b.type="text/javascript";b.src=VDNA_url+"?format=json&method=api.vdna.getRemoteCookie&v=1&api_key="+VDNA_apiKey+"&sig="+VDNA_hash+"&callback=VDNA_GetUserIDRemoteValue";a.appendChild(b)}function VDNA_GetUserIDRemoteValue(a){if(a["@attributes"].stat=="fail"){VDNA_error=a.err["@attributes"].msg;alert(VDNA_error)}else{VDNA_userID=a.data.vdnaUserId["@value"];VDNA_config.userID=VDNA_userID;VDNA_userPermission=a.data.vdnaUserPerm["@value"];VDNA_SetUpInfoCookie("vdnaTimestamp","");VDNA_SetUpInfoCookie(VDNA_permCookieName,VDNA_userPermission);if(VDNA_userID==0){VDNA_DeleteLocalCookie(VDNA_cookieName)}else{VDNA_SetUpInfoCookie(VDNA_cookieName,VDNA_userID)}}}function VDNA_GetLastResponse(d,f){if(!VDNA_getClientPermission()){var e="VDNA_GetLastResponse("+d+', "'+f+'")';VDNA_functionNameCalled[VDNA_functionNameCalled.length]=e;return false}if(f==null){f="VDNA_processLastUserResponse"}var c=VDNA_url+"?method=api.soa.us.getLastUserResponse&param1="+VDNA_config.userID+"&param2="+d+"&api_key="+VDNA_apiKey+"&sig="+VDNA_hash+"&callback="+f+"&format=json&v=1";var a=document.getElementsByTagName("head")[0];var b=document.createElement("script");b.type="text/javascript";b.src=c;a.appendChild(b)}function VDNA_GetUserResponse(b,f){if(!VDNA_getClientPermission()){var e="VDNA_GetUserResponse("+b+', "'+f+'")';VDNA_functionNameCalled[VDNA_functionNameCalled.length]=e;return false}if(f==null){f="VDNA_processResponse"}var d=VDNA_url+"?method=api.soa.us.getUserFullResponse&param1="+VDNA_config.userID+"&param2="+b+"&api_key="+VDNA_apiKey+"&sig="+VDNA_hash+"&callback="+f+"&format=json&v=1";var a=document.getElementsByTagName("head")[0];var c=document.createElement("script");c.type="text/javascript";c.src=d;a.appendChild(c)}function VDNA_GetSharedResponse(b,f){if(!VDNA_getClientPermission()){var e="VDNA_GetSharedResponse("+b+', "'+f+'")';VDNA_functionNameCalled[VDNA_functionNameCalled.length]=e;return false}if(f==null){f="VDNA_processSharedResponse"}var d=VDNA_url+"?method=api.soa.us.getFullResponse&param1="+b+"&api_key="+VDNA_apiKey+"&sig="+VDNA_hash+"&callback="+f+"&format=json&v=1";var a=document.getElementsByTagName("head")[0];var c=document.createElement("script");c.type="text/javascript";c.src=d;a.appendChild(c)}function VDNA_GetUserProfile(e){if(!VDNA_getClientPermission()){var d='VDNA_GetUserProfile("'+e+'")';VDNA_functionNameCalled[VDNA_functionNameCalled.length]=d;return false}if(e==null){e="VDNA_processUserProfile"}var c=VDNA_url+"?method=api.soa.us.getUserProfile&param1="+VDNA_config.userID+"&api_key="+VDNA_apiKey+"&sig="+VDNA_hash+"&callback="+e+"&format=json&v=1";var a=document.getElementsByTagName("head")[0];var b=document.createElement("script");b.type="text/javascript";b.src=c;a.appendChild(b)}function VDNA_GetUserFeedback(b,e,g){if(!VDNA_getClientPermission()){var f="VDNA_GetUserFeedback("+b+", "+e+', "'+g+'")';VDNA_functionNameCalled[VDNA_functionNameCalled.length]=f;return false}if(g==null){g="VDNA_processUserFeedback"}var d=VDNA_url+"?method=api.soa.us.getUserFeedback&param1="+b+"&param2="+escape("<applicationData></applicationData>")+"&param3="+e+"&api_key="+VDNA_apiKey+"&sig="+VDNA_hash+"&callback="+g+"&format=json&v=1";var a=document.getElementsByTagName("head")[0];var c=document.createElement("script");c.type="text/javascript";c.src=d;a.appendChild(c)}function VDNA_FlashGetUserID(b){VDNA_SetUpInfoCookie(VDNA_cookieName,b);VDNA_config.userID=b;VDNA_userID=b;if(/Safari/.test(navigator.userAgent)){VDNA_safariNewUser=true}var d=VDNA_url+"?format=json&method=api.vdna.setRemoteCookie&v=1&param1="+b+"&api_key="+VDNA_apiKey+"&sig="+VDNA_hash+"&callback=VDNA_SetCompleteRemoteValue";var a=document.getElementsByTagName("head")[0];var c=document.createElement("script");c.type="text/javascript";c.src=d;a.appendChild(c)}function VDNA_Redirect(a,c){var b=window.location.href;urlArray=b.split("/");if(urlArray[urlArray.length-1].indexOf(".")==-1){a=b+a}else{urlArray.splice(urlArray.length-1,1);b=urlArray.join("/");a=b+"/"+a}VDNA_userPerm=VDNA_GetInfoFromCookie(VDNA_permCookieName);if((VDNA_safariNewUser==true&&VDNA_safariUpdateCookie==false)){var d=VDNA_url+"?format=json&method=api.vdna.setRemoteCookie&v=1&param1="+VDNA_userID+"&param2=&param3="+escape(a)+"&api_key="+VDNA_apiKey+"&sig="+VDNA_hash;window.location=d;return false}if(VDNA_safariUpdateCookie==true){if(VDNA_userPerm=="true"){var d=VDNA_url+"?format=json&method=api.vdna.setRemoteCookie&v=1&param1=&param2=%22"+VDNA_userPerm+"%22&param3="+escape(a)+"&api_key="+VDNA_apiKey+"&sig="+VDNA_hash;window.location=d}if(VDNA_userPerm=="false"){var d=VDNA_url+"?format=json&method=api.vdna.deleteRemoteCookie&v=1&param1="+escape(a)+"&api_key="+VDNA_apiKey+"&sig="+VDNA_hash;window.location=d}return false}window.location=a}function VDNA_SetCompleteRemoteValue(a){if(a["@attributes"].stat=="fail"&&a.err["@attributes"].msg!="No vdnaUserId cookie set"){alert(a.err["@attributes"].msg)}else{VDNA_setComplete=true}}function VDNA_FlashSetVDNA(a){if(/Safari/.test(navigator.userAgent)){VDNA_safariUpdateCookie=true}if(a=="false"){var c="Saving your VisualDNA is recommended, as it allows you to have a more personalised web experience.\n\nWe respect your privacy and your VisualDNA is under your control at all times - simply go to my.visualdna.com to opt-out or manage your VisualDNA.\n\nAre you sure you want to change this setting?";var b=confirm(c);if(b){VDNA_SetUpInfoCookie(VDNA_permCookieName,"false");VDNA_DeleteCookie();return"false"}return"true"}else{if(a=="true"){VDNA_FlashGetUserPerm("true");return"true"}}}function VDNA_DeleteCookie(){VDNA_DeleteLocalCookie(VDNA_cookieName);VDNA_DeleteLocalCookie(VDNA_userAskedCookieName);if(!/Safari/.test(navigator.userAgent)){var a=document.getElementsByTagName("head")[0];var b=document.createElement("script");b.type="text/javascript";b.src=VDNA_url+"?format=json&method=api.vdna.deleteRemoteCookie&v=1&api_key="+VDNA_apiKey+"&sig="+VDNA_hash+"&callback=VDNA_SetCompleteRemoteValue";a.appendChild(b)}}function VDNA_FlashSendUserID(){VDNA_userID=VDNA_GetInfoFromCookie(VDNA_cookieName);return VDNA_userID}function VDNA_FlashGetUserPerm(b){VDNA_SetUpInfoCookie(VDNA_permCookieName,b);var a=document.getElementsByTagName("head")[0];var c=document.createElement("script");c.type="text/javascript";c.src=VDNA_url+"?format=json&method=api.vdna.setRemoteCookie&v=1&param1=&param2=%22"+b+"%22&api_key="+VDNA_apiKey+"&sig="+VDNA_hash+"&callback=VDNA_SetCompleteRemoteValue";a.appendChild(c)}function VDNA_FlashSendUserPerm(){VDNA_userPerm=VDNA_GetInfoFromCookie(VDNA_permCookieName);return VDNA_userPerm}function VDNA_FlashHasExternalInterface(){return true}var moduleStartDate=null;var eventServerLive="http://ev.visualdna.com/events";var eventServerTest="http://events.test.visualdna.com/events";sendEvent=function(c){var a=eventServerLive;if(document.location.href.toLowerCase().indexOf(".vm.")!=-1||document.location.href.toLowerCase().indexOf(".staging.")!=-1){a=eventServerTest}var b=cacheBustedEventUrl(a+"?b=GenericApp_v_0.1&enc=json&e="+encodeURIComponent(JSON.stringify(c)));createEventImage(b)};sendStandardEvent=function(c,b){c.Ba4=trackingData.Ba4;c.Ba5=document.location.href;c.Ba6=getReferrerFromQString();c.Ba20=trackingData.Ba20;var a={};a[b]=c;sendEvent(a)};cacheBustedEventUrl=function(a){return a+"&bust="+Math.round(Math.random()*99999999)};createEventImage=function(b){var a=new Image(1,1);a.onload=function(){a.onload=null;a.onerror=null;a.onreadystatechange=null};a.onerror=function(){a.onload=null;a.onerror=null;a.onreadystatechange=null};a.onreadystatechange=function(){a.onload=null;a.onerror=null;a.onreadystatechange=null};a.src=b};getReferrerFromQString=function(){var a=window.location.search.substring(1);var d=a.split("&");for(var c=0;c<d.length;c++){var b=d[c];if(b.slice(0,b.indexOf("="))=="ref"){return b.slice(b.indexOf("=")+1,b.length)}}return(document.referrer==""||document.referrer==null||document.referrer=="null")?((typeof(window.http_referrer)=="undefined"||window.http_referrer==null)?"":window.http_referrer):document.referrer};sendImpressionEvent=function(b){var a={Ba26:b};sendStandardEvent(a,"esVDNAAppImpressionEvent");VDNA_GAET.track(b,trackingData.Ba24,"");return true};sendStatementEvent=function(d,f,c,b,a){if(d==="finish"){return false}var e={Ba11:trackingData.Ba11,Ba13:d,Ba18:f};if("undefined"!==typeof c){e.choiceId=c}if("undefined"!==typeof b){e.choicePosition=b}if("undefined"!==typeof a){e.numberOfImages=a}sendStandardEvent(e,"esVDNAAppStatementEvent");VDNA_GAET.track(d,f,"");return true};sendModuleStartEvent=function(){moduleStartDate=new Date();var a={Ba11:trackingData.Ba11};sendStandardEvent(a,"esVDNAAppModuleStartEvent");VDNA_GAET.track(trackingData.Ba11,"VDNAAppModuleStartEvent","");return true};function sendModuleCompleteEvent(a,e){var c={Ba11:trackingData.Ba11,Ba23:a};if(moduleStartDate!==null){var b=new Date();var d=Math.round((b.getTime()-moduleStartDate.getTime())/1000);c.quizTime=d}sendStandardEvent(c,"esVDNAAppModuleCompleteEvent");VDNA_GAET.track(trackingData.Ba11,"VDNAAppModuleCompleteEvent","");if("undefined"===typeof e||true===e){setTimeout(function(){checkCookieComplete(exit_url+"response_id="+a,(typeof(VDNA_GetUserID)!="undefined")?VDNA_GetUserID():"0")},((window.ActiveXObject)?2000:1000))}return true}sendUserActionEvent=function(a,e,b,d){var c={Ba18:a,Ba26:e,Ba27:d,Ba28:b};sendStandardEvent(c,"esVDNAAppUserActionEvent");VDNA_GAET.track(a+" - "+e,b+" / "+d,"");return true};sendPageLoadEvent=function(f,h){var c=new Date();var b=c.getTime()-h.getTime();if(b<2000){lc="Very Fast"}else{if(b<5000){lc="Fast"}else{if(b<10000){lc="Medium"}else{if(b<30000){lc="Slow"}else{if(b<45000){lc="Very Slow"}else{lc="Extremely Slow"}}}}}var e=document.location.pathname;if(document.location.search){e+=document.location.search}var g=Math.round(b/1000);e=e.replace(/quiz.php[\s\S]*/gi,"quiz.php");e=e.replace(/brands.php[\s\S]*/gi,"brands.php");e=e.replace(/results.php[\s\S]*/gi,"results.php");e=e.replace(/[?]response_id=[0-9]*/gi,"");e=e.replace(/[?]ref=[\s\S]*/gi,"");e=e.replace(/[?]sds[\s\S]*/gi,"");var d="<page_load_speed>"+lc+"</page_load_speed><page_load_time_seconds>"+g+"</page_load_time_seconds>";var a={Ba26:f,Ba28:d};sendStandardEvent(a,"esVDNAPageLoadEvent");VDNA_GAET.track(lc+" Loading Pages",e,g)};trackUserClick=function(g,f,b,e){var h=f,c=b,a="CLICK";var d=(e)?e:g.href;sendUserActionEvent(a,h,c,d);return true};sendShareEvent=function(d){var c="CLICK";var a="SHARE";var b="";var e="";switch(d){case"vdna_share_em":e="EMAIL";break;case"vdna_share_fb":e="FACEBOOK";break;case"vdna_share_tw":e="TWITTER";break;case"vdna_share_my":e="MYSPACE";break;default:e="";break}sendUserActionEvent(c,a,b,e)};var VDNA_GAET={active:true,tries:0,limit:10,enabled:true,track:function(d,a,c){var b;if(VDNA_GAET.enabled){if(VDNA_GAET.active&&typeof(pageTracker)!="undefined"){b="Live";if(document.location.href.toLowerCase().indexOf(".vm.")!=-1||document.location.href.toLowerCase().indexOf(".staging.")!=-1){b="Dev + Staging"}if(c==null||c==""){pageTracker._trackEvent(b,trackingData.Ba4,d+" - "+a)}else{pageTracker._trackEvent(b,trackingData.Ba4,d+" - "+a,c)}}else{if(VDNA_GAET.active&&typeof(_gaq)!="undefined"){b="Live";if(document.location.href.toLowerCase().indexOf(".vm.")!=-1||document.location.href.toLowerCase().indexOf(".staging.")!=-1){b="Dev + Staging"}_gaq.push(["_trackEvent",b,trackingData.Ba4,d+" - "+a,c])}else{if(VDNA_GAET.tries<VDNA_GAET.limit){setTimeout(function(){VDNA_GAET.track(d,a,c)},500)}VDNA_GAET.tries++}}}}};if(typeof(VDNA_LOADING)!="undefined"){VDNA_LOADING.updateStatus()}var responses={};var extradata={};var responseimages={};var demographics={};var tStart=new Date();var modulename;var answer;var pageImpressionsSent=[];moduleStarted=false;var currentPage="";var redirectUrl="";var currentRrs="";var randomNo="";var optInValue="true";var VDNA_setComplete=false;function doRipple(h){var k,f,b,c,g,d;k=$(h).find(".q img");b=k.length;c=[];for(f=0;f<b;f=f+1){c.push(k[f])}function e(a){return function(){VDNA_QF.highlightImage(a)}}g=10;while(0<c.length){d=c.splice(Math.round(Math.random()*(c.length-1)),1);window.setTimeout(e(d),g);g=g+100}}function startQuiz(){var j,d,a,e,g,h;function f(){VDNA_QF.highlightImage(this,"over")}function k(){VDNA_QF.highlightImage(this,"out")}function b(m,c,l){if(m.addEventListener){return m.addEventListener(c,l,null)}else{if(m.attachEvent){var n=function(o){o=o||window.event;l.apply(m,[o])};return m.attachEvent("on"+c,n)}}return false}VDNA_QF.highlightImage.displayName="highlightImage";j=document.getElementById("c");if(j){d=j.getElementsByTagName("div")[0];b(j,"mouseover",function(l){var c=l.target||l.srcElement;if(c&&c.tagName==="IMG"){f.apply(c)}});b(j,"mouseout",function(l){var c=l.target||l.srcElement;if(c&&c.tagName==="IMG"){k.apply(c)}});h=d.id.replace(/^page/,"");VDNA_QF.randomizeImages(h);VDNA_IQ.addImageOnclicks(h);VDNA_IQ.nextpage(null,"","");sendStatementEvent(h,"IMPRESSION")}}function getUrlVars(){var a=window.location.href.split("?");if(a[1]!="undefined"){return a[1]}return false}function checkCookieComplete(b,c){var a;if(b.substr(0,11)=="response_id"){a=b.substr(12);document.cookie="vdnaResponseId="+window.encodeURIComponent(a)+"; path=/";b="./results/"+a+"/";if(urlParams=getUrlVars()){b+="?"+urlParams}}if(c==null){document.location.assign(b);return}if(!VDNA_setComplete){setTimeout(function(){checkCookieComplete(b)},200)}else{document.location.assign(b)}}function setOptinVal(a){if(a=="submit"){VDNA_QF.submitForm(currentRrs)}else{optInValue=a;VDNA_QF.submitForm(currentRrs)}}function sendOptinUserEvent(){sendUserActionEvent("CLICK","OPT_IN",extraDataXml({"opt-in":optInValue,dialog:randomNo}),1)}var VDNA_GLOBE=VDNA_GLOBE||{};VDNA_GLOBE={walkTheDOM:function(b,a){a(b);b=b.firstChild;while(b){this.walkTheDOM(b,a);b=b.nextSibling}},getElementsByClassName:function(b){var a=[];this.walkTheDOM(document.body,function(f){var d,g=f.className,e;if(g){d=g.split(" ");for(e=0;e<d.length;e+=1){if(d[e]===b){a.push(f);break}}}});return a},addEventHandler:function(b,a,c){if(b.addEventListener){b.addEventListener(a,c,false)}else{if(b.attachEvent){b.attachEvent("on"+a,c)}else{b["on"+a]=c}}}};var VDNA_IQ=VDNA_IQ||{};VDNA_IQ={page:"",fCallback:null,imageURLs:[],imageAssets:[],totalImages:0,imagesLoaded:0,moduleStarted:false,loadPageImages:function(f,j){var d,b,e,c,g,a,k;c=0;d=$("#page"+f+" li img");e=d.length;function l(m,n){return function(){n.onload=null;n.onreadystatechange=null;n.onerror=null;if(m.parentNode){m.parentNode.replaceChild(n,m)}c++;if(c>=e){if("function"===typeof j){j()}}}}function h(m){return function(){m()}}g=[];for(b=0;b<e;b=b+1){a=new Image();k=l(d[b],a);a.onload=k;a.onreadystatechange=h(k);a.onerror=k;a.src=d[b].parentNode.rel;g.push(a)}},addImageOnclicks:function(b){var a;function c(){a.css("display","none");answer=this.getAttribute("data-visualdna-choice");responses[b]=answer;responseimages[b]=this.src;position=$(this).parents("li").index()+1;numOfImages=a.find("img").length;VDNA_TRACKINGDATA.trackData(b,answer);sendStatementEvent(b,"CLICK",answer,position,numOfImages);if(!VDNA_IQ.moduleStarted){VDNA_IQ.moduleStarted=true;sendModuleStartEvent()}if(typeof(quiz_def[b][answer])!="undefined"){VDNA_IQ.page=quiz_def[b][answer]}else{VDNA_IQ.page=quiz_def[b].successor}VDNA_IQ.loadPageImages(VDNA_IQ.page,function(){VDNA_IQ.addImageOnclicks(VDNA_IQ.page)});VDNA_IQ.nextpage("","",VDNA_IQ.page)}a=$("#page"+b);a.delegate("a","click",c)},nextpage:function(a,d,h){var p;var e;var k=h?false:true;if(k){VDNA_GAET.track(trackingData.Ba4,"First statement completely loaded ("+VDNA_IQ.page+")",trackingData.Ba24,"");for(p in quiz_def){$("#page"+p).css("display","block");currentPage=p;VDNA_IQ.page=p;break}}else{if(h!="age"&&h!="gender"&&h!="where_travel"&&h!="children"){VDNA_QF.randomizeImages(h)}$("#page"+h).css("display","block");currentPage=h;if(h==="finish"){VDNA_QF.finishUp()}sendStatementEvent(h,"IMPRESSION")}if(k){h=VDNA_IQ.page}else{$("#flash-message").hide()}var o=$("#page"+h+" ul.ql");var l=$("#page"+h+" ul.ql li");var n=5;var f=new Array();for(var e=3;e<=n;e++){f.push(e)}var q=l;var b=$(q).children("div:first");var g=$(q).width();for(var c=0;c<f.length;c++){if((q.size()>=1)&&(q.size()<=n)){o.parent(".q").css("width",g*q.size()+2)}if(q.size()%f[c]===0){var m=parseInt(f[c]*g);o.parent(".q").css("width",m+2)}}}};var VDNA_QF=VDNA_QF||{};VDNA_QF={highlightImage:function(c,b){var f=$(c).parent().parent().children("div:first"),d=100,a=250;var e=f.css("color");if(b==="over"){f.css("background-color","#dd6666");f.animate({top:"0",width:"152px",height:"152px",left:"0"},d)}else{if(b==="out"){f.animate({top:"6px",width:"140px",height:"140px",left:"6px"},d,function(){f.css("background-color","#dd6666")})}else{f.css("background-color","#dd6666");f.css("overflow","hidden");f.animate({top:"0",width:"152px",height:"152px",left:"0"},a,function(){f.animate({top:"6px",width:"140px",height:"140px",left:"6px"},a,function(){f.css("background-color","#dd6666")})})}}},randomizeImages:function(c){var b=function(e,d){return Math.random()*(d-e)+e};var a=$("#page"+c).find("li");for(i=0;i<a.length*2;i++){el1=a[Math.round(b(0,a.length-1))];el2=a[Math.round(b(0,a.length-1))];el2.parentNode.insertBefore(el2,el1)}},arrangeStatementImages:function(){VDNA_QF.arrangeAgeStatementImages();VDNA_QF.arrangeChildrenStatementImages()},arrangeAgeStatementImages:function(){var e=new Array("choice_gs1","choice_gs2","choice_gs3","choice_gs4","choice_gs5","choice_gs6");var g=new Array("choice_gs1","choice_gs2","choice_gs3","choice_gs4","choice_gs5","choice_gs6");var j=$("#pageage").find("li");var h=$(j[0]).clone(true);var f=$(j[1]).clone(true);var d=$(j[2]).clone(true);var c=$(j[3]).clone(true);var b=$(j[4]).clone(true);var a=$(j[5]).clone(true);$(j[0]).replaceWith(a);$(j[1]).replaceWith(h);$(j[2]).replaceWith(f);$(j[3]).replaceWith(d);$(j[4]).replaceWith(c);$(j[5]).replaceWith(b)},arrangeChildrenStatementImages:function(){var b=new Array("choice_139497","choice_139498","choice_139499","choice_139500","choice_139739");var e=new Array("choice_139498","choice_139739","choice_139499","choice_139500","choice_139497");var c=$("#pagechildren").find("li");var f=$(c[0]).clone(true);var d=$(c[1]).clone(true);var a=$(c[4]).clone(true);$(c[0]).replaceWith(d);$(c[1]).replaceWith(a);$(c[4]).replaceWith(f)},cro:function(){var a=null;if(window.ActiveXObject){a=new ActiveXObject("Msxml2.XMLHTTP");if(!a){a=new ActiveXObject("Microsoft.XMLHTTP")}}else{if(window.XMLHttpRequest){a=new XMLHttpRequest()}}return a},rmp:function(c,d,b){var e=VDNA_QF.cro();e.open("GET","saveResponse.php?"+c,true);if(d){e.onreadystatechange=function(){if(e.readyState==4){b?d(b,e.responseText):d(e.responseText)}}}e.send(null)},finishUp:function(){var a=new Date();var b=a.getTime()-tStart.getTime();a.setTime(b);rrs="";for(i in responses){rrs+="&"+i+"="+responses[i]}for(i in quiz_def){if(rrs.indexOf("&"+i+"=")==-1&&i!="finish"){rrs+="&"+i+"=no_answer"}}for(i in extradata){rrs+="&extra_"+i+"="+extradata[i]}VDNA_QF.submitForm(rrs)},submitForm:function(a){ourDate=new Date();cachebreak=ourDate.getMilliseconds();VDNA_QF.rmp("ts="+cachebreak+a,VDNA_QF.formSubmitted)},formSubmitted:function(a){var responseId=null;var userId=null;eval(a);sendModuleCompleteEvent(responseId)}};if(typeof(VDNA_LOADING)!="undefined"){VDNA_LOADING.updateStatus()}jQuery.fn.swapWith=function(a){return this.each(function(){var b=$(a).clone(true);$(a).replaceWith(this);$(this).replaceWith(b)})};function escapeXml(a){return a.toString().replace(/</,"&lt;").replace("/>/","&gt;").replace(/&/,"&amp;").replace(/'/,"&#39;").replace(/"/,"&quot;")}function extraDataXml(a){var c,b;b="";for(c in a){if(a.hasOwnProperty(c)&&null!==a[c]&&"undefined"!==typeof a[c]){b+="<"+c+">"+escapeXml(a[c])+"</"+c+">"}}return"<extradata>"+b+"</extradata>"}function sendUserClick(a){trackUserClick(a,"SKY_OFFER",extraDataXml({type:$(a).attr("id")}));setTimeout('window.top.location.href = "'+$(a).attr("href")+'"',500)}var VDNA_config={userID:VDNA_GetUserID()};function setSaveVdna(a){if(a.value&&a.checked){VDNA_FlashSetVDNA("true")}else{if(VDNA_FlashSetVDNA("false")=="true"){a.checked=true}}}function setSaveVdnaOptin(){var a=document.getElementById("save-my-vdna");if(a.value&&a.checked){if(VDNA_FlashSetVDNA("false")=="true"){a.checked="true";if($(".boxy-content .checkbox").length>0){$(".boxy-content .checkbox").attr("checked","checked");optInValue="true"}}else{a.checked="";if($(".boxy-content .checkbox").length>0){$(".boxy-content .checkbox").attr("checked","");optInValue="false";return false}setOptinVal("false")}}else{VDNA_FlashSetVDNA("true");a.checked="true";if($(".boxy-content .checkbox").length>0){$(".boxy-content .checkbox").attr("checked","checked");optInValue="true"}}}function checkSaveVdna(a){save=VDNA_FlashSendUserPerm();if(save&&save!="false"&&save!="0"){a.checked=true}else{a.checked=false}return a}var VDNA_TRACKINGDATA=VDNA_TRACKINGDATA||{};VDNA_TRACKINGDATA={trackData:function(b,a){var c=trackingData;if(b=="age"){switch(a){case"choice_72787":c.Ba15="18-24";break;case"choice_72788":c.Ba15="25-34";break;case"choice_72789":c.Ba15="35-44";break;case"choice_72790":c.Ba15="45-54";break;case"choice_72791":c.Ba15="55+";break}return}if(b=="gender"){switch(a){case"choice_54204":c.Ba16="M";break;case"choice_54205":c.Ba16="F";break}
                                                                                            return}}};