! function(a, b, c) {
    function d() {
        if (b.spritz_sdk_root);
        else {
            var a = c.getElementById("spritzjs");
            if (null === a) b.spritz_sdk_root = "//sdk.spritzinc.com/js/2.0.7";
            else {
                var d = a.getAttribute("src"),
                    e = d.split("/"),
                    f = "";
                if (e.length < 3) f = ".";
                else
                    for (var g = 0; g < e.length - 2; g++) f += e[g], f += "/";
                b.spritz_sdk_root = f
            }
        }
    }

    function e() {
        if (!c.getElementById("spritz-css")) {
            var a = c.getElementsByTagName("head")[0],
                d = c.createElement("link");
            d.id = "spritz-css", d.rel = "stylesheet", d.type = "text/css", d.href = b.spritz_sdk_root, "/" !== d.href.substring(d.href.length - 1) && (d.href += "/"), d.href += "css/spritz.min.css", d.media = "all", a.appendChild(d)
        }
    }

    function f(a, b, c, d, e) {
        this.model = i.model, this.word = a, this.orp = b, this.multiplier = c, this.position = d, this.flags = e
    }

    function g(a, b, c, d, e, f, g) {
        this.seekType = i.model.SpritzText.SeekType, this.contentVersionId = a, this.words = b, this.duration = c, this.wordCount = d, this.rawWordCount = e, this.locale = f, this.version = g, this.index = 0, this.progressTracker = null
    }

    function h(a, c) {
        var d = "SpritzReadingPanel: ";
        i.utils.debug(3, d + " Created");
        var state = Object.freeze({
                ready: 0,
                running: 1,
                paused: 2,
                completed: 3
            }),
            f = Math.round(c.redicleWidth),
            g = Math.round(c.redicleHeight);
        console;
        var h = i.helper.createCanvas(i.constants.CSSClasses.CANVAS, f, g);
        a.appendChild(h), h.addEventListener("click", function() {
            i.helper.dispatchEvent(a, "redicleClick")
        });
        var j = h.getContext("2d"),
            l = c.redicle.fontName,
            m = "Arial, sans-serif",
            n = .5,
            o = c.redicle.redicleLine ? .01 : 0,
            p = 0,
            q = 0,
            r = 0,
            s = 0,
            t = 0,
            u = i.utils.isChrome(),
            v = i.utils.isFirefox(),
            w = i.utils.isTizen(),
            x = null,
            y = c.defaultSpeed,
            z = null,
            A = null,
            B = 0,
            timeoutInstance = null,
            D = 0,
            E = !0,
            readerState = state.ready,
            G = c.redicle.textHighlightPaintColor,
            H = c.redicle.countdownColor,
            I = 0,
            J = 0,
            K = c.redicle.sizeable,
            L = c.redicle.loadFonts,
            M = 0,
            N = 0,
            O = 0,
            P = 0,
            Q = 0,
            R = 0,
            S = 0,
            T = 0,
            U = 0,
            V = 0,
            W = 0,
            X = 0,
            Y = 0,
            Z = 0,
            $ = 0,
            _ = 0,
            aa = 0,
            ba = 0,
            ca = 0,
            da = "",
            ea = "",
            fa = "",
            ga = "",
            ha = function() {
                da = M + "px " + l, ea = "bold " + da, fa = da, ga = ea
            },
            ia = function() {
                if (I = h.width, J = h.height, j = h.getContext("2d"), j.save(), j.restore(), "devicePixelRatio" in b)
                    if (b.devicePixelRatio > 1) {
                        var a = b.devicePixelRatio,
                            e = Math.round(f * a),
                            k = Math.round(g * a);
                        h.width = e, h.height = k, h.style.width = f + "px", h.style.height = g + "px", console, I = e, J = k
                    } else console;
                M = Math.round(h.height * n), v || w ? ($ = 2, _ = 2, aa = 0) : ($ = 1, _ = 3, aa = -(.088 * J)), _ = _ * J / 60, N = Math.round(.56 * M + .5), O = Math.round(.44 * M + .5), P = N + O, Q = Math.round(J * c.redicle.crossHairHeight), R = Math.round(q + (I - q - r) * c.redicle.crossHairHorizontalPosition), S = Math.round((J - s - t) / 2), T = S - Math.round((N + O) / 2) + aa, U = 0, V = I, W = Math.round(I * p), X = Math.round(J * o), Y = R - q, Z = I - r - R, ba = X + Q, ca = J - s - t - 2 * ba, j.textBaseline = "top", j.textAlign = "left", ha();
                var l = 3;
                i.utils.debug(l, d + "dimensions: " + I + "x" + J), i.utils.debug(l, d + "fontSizeHeight: " + M), i.utils.debug(l, d + "ascent: " + N), i.utils.debug(l, d + "descent: " + O), i.utils.debug(l, d + "focus: " + R + "," + S), i.utils.debug(l, d + "textY: " + T), i.utils.debug(l, d + "fontRealHeight: " + P), i.utils.debug(l, d + "textOverflow, top: " + $ + ", bottom: " + _), i.utils.debug(l, d + "textNormalPaint: " + da), i.utils.debug(l, d + "textNormalBoldPaint: " + ea)
            },
            ja = function(a, b, c, d, e, f) {
                j.lineWidth = e, j.strokeStyle = f, j.beginPath(), j.moveTo(a, b), j.lineTo(c, d), j.stroke()
            },
            ka = function() {
                var a = q + W,
                    b = h.width - r - W,
                    d = s + X,
                    e = h.height - t - X;
                c.redicle.redicleLine && (ja(a, d, b, d, c.redicle.redicleLineWidth, c.redicle.redicleLineColor), ja(a, e, b, e, c.redicle.redicleLineWidth, c.redicle.redicleLineColor)), c.redicle.crossHair && (ja(R, d, R, d + Q, c.redicle.crossHairWidth, c.redicle.crossHairColor), ja(R, e - Q, R, e, c.redicle.crossHairWidth, c.redicle.crossHairColor))
            },
            la = function(a, b) {
                var c = u ? "" : "," + m;
                j.font = b + c;
                var d = j.measureText(a);
                return d.width
            },
            ma = function(a, b, c, d, e) {
                var f = u ? "" : "," + m;
                j.font = b + f, j.fillStyle = c, j.fillText(a, d, e)
            },
            na = function(a, b, c, d, e) {
                j.fillStyle = e, j.fillRect(a, b, c, d)
            },
            oa = function() {
                j.clearRect(q, s, h.width - r, h.height - t), na(q, s, h.width - r, h.height - t, c.redicle.backgroundColor)
            },
            pa = function() {
                G = E ? c.redicle.textHighlightPaintColor : c.redicle.textNormalPaintColor
            },
            qa = function() {
                return x
            },
            // ra = function() {
            showWord = function() {
                if (readerState === state.running) {
                    changeUi();
                    var a = qa().getNextWord();
                    if (null === a) {
                        if (readerState = state.completed, Ba(c.placeholderText.endText, c.placeholderText.endTextColor), z) {
                            var b = z;
                            z = null, b()
                        }
                    } else xa(a.word, a.orp, a.position, a.isBold()), timeoutInstance = setTimeout(function() {
                        timeoutInstance = null, showWord()
                    }, va(a.multiplier))
                } else i.utils.debug(2, d + "displayNextWord interrupted on word # " + qa().getCurrentIndex() + " because of state: " + readerState)
            },
            sa = function() {
                D = (new Date).getTime(), ta(this)
            },
            ta = function() {
                var a = (new Date).getTime() - D,
                    b = a / c.redicle.countdownTime,
                    d = Math.max(Y * b, 0),
                    e = Math.max(Z * b, 0),
                    f = h.height - s - t,
                    g = h.width - q - r;
                oa(), R >= d || e <= h.width - R ? (na(q + d, s, g - d - e, f, H), ka(), wa(), timeoutInstance = setTimeout(function() {
                    timeoutInstance = null, ta()
                }, c.redicle.countdownSlice)) : (ka(), wa(), showWord())
            },
            ua = function() {
                return y
            },
            va = function(a) {
                return (1 + a / 100) * B
            },
            wa = function() {
                var a = x.getCurrentWord();
                xa(a.word, a.orp, a.position, a.isBold())
            },
            xa = function(a, b, d, e) {
                if (null != a && 0 != a.length) {
                    var f, g, h = T;
                    e ? (f = ea, g = ga) : (f = da, g = fa);
                    var i, j, k, l, m, n, o = a.length;
                    0 === b ? (i = null, l = 0) : (i = a.substring(0, b), l = Math.round(la(i, f))), j = a.substring(b, b + 1), m = Math.round(la(j, g)), n = Math.round(m / 2), k = b == o - 1 ? null : a.substring(b + 1), null !== i && ma(i, f, c.redicle.textNormalPaintColor, R - l - n, h), ma(j, g, G, R - n, h), null !== k && ma(k, f, c.redicle.textNormalPaintColor, R + n, h)
                }
            },
            changeUi = function() {
                j.fillStyle = c.redicle.backgroundColor, j.clearRect(U, ba, V - U, ca), j.fillRect(U, ba, V - U, ca)
            },
            za = function() {
                var a = h.width,
                    b = h.height;
                a === I && b === J ? i.utils.debug(3, d + "dimensions unchanged: " + I + "x" + J) : (i.utils.debug(3, d + "dimensions changed: " + I + "x" + J + " -> " + a + "x" + b), h.width = a, h.height = b, ia())
            },
            Aa = function(a) {
                var b = P,
                    c = h.width - (20 + q + r) - 2 * Math.round(h.width * p);
                if (la(a, da) > c)
                    do b--, j.font = b + "px " + l + (v ? ", " + m : ""); while (j.measureText(a).width > c);
                return b
            },
            Ba = function(a, b) {
                if (a) {
                    changeUi(), ha();
                    var d = Aa(a),
                        e = d + "px " + l,
                        f = Math.round((h.height - s - t) / 2),
                        g = 0;
                    (v || w) && (g = 5);
                    var i;
                    i = w ? (h.width - la(a)) / 2 : Math.round(h.width * p) + q;
                    var j = la("M", e) + la("p", e) / 2,
                        k = f - j / 2 + g,
                        m = b || c.redicle.textNormalPaintColor;
                    ma(a, e, m, i, k)
                }
            };
        ! function() {
            var a = L ? [l] : [];
            k(a, function() {
                ia(), j.fillStyle = c.redicle.backgroundColor, j.fillRect(0, 0, h.width, h.height), ka(), x ? wa() : Ba(c.placeholderText.startText, c.placeholderText.startTextColor)
            })
        }(), this.getCurrentText = function() {
            return qa()
        }, this.setCurrentText = function(a) {
            null != a && (x = a, changeUi(), readerState === state.running && (this.pauseText(), wa()), readerState === state.paused && wa(), readerState === state.ready && Ba(c.placeholderText.startText, c.placeholderText.startTextColor), readerState === state.completed && (changeUi(), Ba(c.placeholderText.endText, c.placeholderText.endTextColor)), B = x.computeStandardDelay(y))
        }, this.getCurrentTextSpeed = function() {
            return ua()
        }, this.setCurrentTextSpeed = function(a) {
            y = a, null !== x && (B = x.computeStandardDelay(y))
        }, this.getCurrentPosition = function() {
            return null != x ? x.getCurrentIndex() : -1
        }, this.setCurrentPosition = function(a) {
            null != x && x.setCurrentIndex(a)
        }, this.getCurrentState = function() {
            return readerState
        }, this.setCurrentState = function(a) {
            readerState = a
        }, this.getHighlightBestLetter = function() {
            return E
        }, this.setHighlightBestLetter = function(a) {
            E = a, pa()
        }, this.getOnCompleteCallback = function() {
            return A
        }, this.setOnCompleteCallback = function(a) {
            A = a
        }, this.isPaused = function() {
            return readerState === state.paused
        }, this.isReady = function() {
            return readerState === state.ready
        }, this.isRunning = function() {
            return readerState === state.running
        }, this.isCompleted = function() {
            return readerState === state.completed
        }, this.displayWord = function(a, b, c) {
            xa(a, b, 0, c)
        }, this.eraseWord = function() {
            changeUi()
        }, this.displayText = function(a, b) {
            if (i.utils.debug(3, d + "Displaying text with " + a.size() + " words in " + y + " words/min"), x = a, A = b, null !== x && (B = x.computeStandardDelay(y)), x.hasNextWord()) z = A, readerState = state.running, K && za(), pa(), sa();
            else if (null != z) {
                var c = z;
                z = null, c()
            }
        }, this.displayPlaceholderText = function(a, b) {
            oa.call(this), ka.call(this), Ba(a, b)
        }, this.pauseText = function() {
            readerState == state.running && (null != timeoutInstance && (clearTimeout(timeoutInstance), timeoutInstance = null), x.getCurrentIndex() > 0 && x.setCurrentIndex(x.getCurrentIndex()), readerState = state.paused), readerState = state.paused
        }, this.resumeText = function(a) {
            x ? (z = A, x.hasNextWord() ? (i.utils.debug(3, d + "Resuming text with " + x.size() + " words at word # " + (x.getCurrentIndex() + 1)), readerState = state.running, K && za(), pa(), "undefined" == typeof a || a ? sa() : (oa(), ka(), 0 === x.getCurrentIndex() ? sa() : showWord())) : i.utils.debug(2, d + "Cannot resume Text because there are no more words")) : i.utils.debug(2, d + "Cannot resume Text because it is null")
        }, this.resetText = function() {
            this.pauseText(), x = null, readerState = state.ready, oa.call(this), ka.call(this)
        }, this.reset = function() {
            oa.call(this), ka.call(this), x && x.hasNextWord() ? wa() : x.hasNextWord() || (readerState = state.completed, Ba(c.placeholderText.endText, c.placeholderText.endTextColor))
        }
    }
    var i = a;
    i.readyState = "loading", i.initState = "uninitialized",
        function() {
            d(), e()
        }(), c.addEventListener("spritz_loaded_internal", function() {
        var a = function() {
            setTimeout(function() {
                i.spritzerInitState = "complete", i.helper.dispatchEvent(c, "spritz_initialized_internal")
            }, 0)
        };
        if ("SpritzSettings" in b && "object" == typeof b.SpritzSettings)
            if (b.SpritzSettings.hasOwnProperty("clientId")) {
                var d = "https://api.spritzinc.com/api-server/v1/",
                    e = location.href;
                b.SpritzSettings.hasOwnProperty("apiRoot") && (d = b.SpritzSettings.apiRoot), b.SpritzSettings.hasOwnProperty("redirectUri") && (e = b.SpritzSettings.redirectUri), "object" == typeof i && "object" == typeof i.client && (b.SpritzClient = new i.client.SpritzClient(b.SpritzSettings.clientId, d, e), b.SpritzSettings.hasOwnProperty("anonymousEnabled") && "boolean" == typeof b.SpritzSettings.anonymousEnabled && b.SpritzClient.setAnonymousEnabled(b.SpritzSettings.anonymousEnabled), "object" == typeof i.spritzinc && ("complete" === c.readyState ? (i.spritzinc.initSpritzers(b.SpritzClient), a()) : c.addEventListener("DOMContentLoaded", function() {
                    i.spritzinc.initSpritzers(b.SpritzClient), a()
                })))
            } else console, a();
        else a()
    }), i.utils = {}, i.utils.debugLevel = 0, i.utils.setDebugLevel = function(a) {
        i.utils.debugLevel = a
    }, i.namespace = function(a) {
        var b, c = a.split("."),
            d = i;
        for ("SPRITZ" === c[0] && (c = c.slice(1)), b = 0; b < c.length; b += 1) "undefined" == typeof d[c[b]] && (d[c[b]] = {}), d = d[c[b]];
        return d
    }, i.addToNamespace = function(a, b) {
        var c = b();
        for (var d in c) c.hasOwnProperty(d) && (a[d] = c[d])
    }, i.utils.supportsCanvas = function() {
        return !!c.createElement("canvas").getContext()
    }, i.utils.supportsCanvasText = function() {
        if (!i.utils.supportsCanvas()) return !1;
        var a = c.createElement("canvas"),
            b = a.getContext("2d");
        return "function" == typeof b.fillText
    }, i.utils.supportsHtmlStorage = function() {
        try {
            return "localStorage" in b && null !== b.localStorage
        } catch (a) {
            return !1
        }
    }, i.utils.getBrowser = function() {
        return i.utils.isOpera() ? "opr" : i.utils.isChrome() ? "chrome" : i.utils.isFirefox() ? "firefox" : i.utils.isMsie() ? "msie" : i.utils.isSafari() ? "safari" : !1
    }, i.utils.isChrome = function() {
        return b.navigator.userAgent.toLowerCase().indexOf("chrome") > -1
    }, i.utils.isFirefox = function() {
        return b.navigator.userAgent.toLowerCase().indexOf("firefox") > -1
    }, i.utils.isMobileSafari = function() {
        var a = b.navigator.userAgent.toLowerCase();
        return a.indexOf("chrome") < 0 && a.indexOf("safari") > -1 && a.match(/(ipod|iphone|ipad)/)
    }, i.utils.isMsie = function() {
        var a = b.navigator.userAgent.toLowerCase();
        return a.indexOf("msie") > -1 || a.indexOf("trident") > -1
    }, i.utils.isOpera = function() {
        return b.navigator.userAgent.toLowerCase().indexOf("opr") > -1
    }, i.utils.isSafari = function() {
        var a = b.navigator.userAgent.toLowerCase();
        return a.indexOf("chrome") < 0 && a.indexOf("safari") > -1
    }, i.utils.isTizen = function() {
        return b.navigator.userAgent.toLowerCase().indexOf("tizen") > -1
    }, i.utils.endsWith = function(a, b) {
        return -1 !== a.indexOf(b, a.length - b.length)
    }, i.utils.timestampToString = function(a, b) {
        "undefined" == typeof b && (b = new Date);
        var c = "",
            d = Math.round((b.getTime() - a) / 1e3);
        if (60 > d) c = d + "s ago";
        else {
            var e = Math.round((b.getTime() - a) / 6e4);
            if (60 > e) c = e + "m ago";
            else {
                var f, g, h = new Date(a);
                h.getHours() > 12 ? (f = h.getHours() - 12, g = "PM") : (f = h.getHours(), g = "AM");
                var i = f + ":";
                h.getMinutes() < 10 && (i += "0"), i = i + h.getMinutes() + " " + g, c = h.getDate() === b.getDate() && h.getMonth() === b.getMonth() && h.getFullYear() === b.getFullYear() ? i : h.getMonth() + 1 + "/" + h.getDate() + "/" + h.getFullYear().toString().substring(2, 4) + " " + i
            }
        }
        return c
    }, i.utils.timeToString = function(a) {
        var b, c = Math.round(a / 1e3),
            d = c / 60;
        if (d >= 60) {
            var e = Math.floor(d / 60);
            d = Math.round(d % 60), b = e + "hr" + (e > 1 ? "s " : " ") + d + "m"
        } else d = Math.floor(d), c = Math.round(c % 60), b = (d > 0 ? d + "m " : "") + c + "s";
        return b
    }, i.utils.debug = function(a) {
        var c = [].slice.call(arguments).splice(1, arguments.length - 1);
        if (b.console && console.log) {
            var d;
            switch (a) {
                case 1:
                    d = "error";
                    break;
                case 2:
                    d = "error";
                    break;
                default:
                    d = "log"
            }
            if (a <= i.utils.debugLevel) {
                for (var e = "", f = 0; f < c.length; f++) e += c[f] + " ";
                console[d] || (d = "log")
            }
        }
    };
    var j = j || function() {
        var a = function(a, b) {
                if ("function" != typeof b) throw new Error("method parameter is not a function [" + typeof b + "]");
                var c = function() {
                    return b.apply(a, arguments)
                };
                return c
            },
            b = function(a) {
                "complete" === c.readyState || "loaded" === c.readyState ? a() : c.addEventListener("DOMContentLoaded", a)
            };
        return {
            createDelegate: a,
            onDocumentReady: b
        }
    }();
    i.namespace("SPRITZ.constants"), i.addToNamespace(i.constants, function() {
        var a = "spritzer",
            b = "spritzer-control-",
            c = {
                ROOT: a,
                BTN_BASE: b,
                BTN_PLAY: b + "play",
                BTN_PAUSE: b + "pause",
                BTN_PAUSEPLAY: b + "pauseplay",
                BTN_REWIND: b + "rewind",
                BTN_BACK: b + "back",
                BTN_FORWARD: b + "forward",
                BTN_END: b + "end",
                BTN_DISABLED: b + "disabled",
                BTN_CLOSE: a + "-close",
                BTN_LOGIN: a + "-login-btn",
                BTN_LOGOUT: a + "-logout-btn",
                USER: a + "-user",
                USER_BTN: a + "-user-btn",
                USER_LIST: a + "-user-list",
                USER_TEXT: a + "-user_text",
                LOGGEDIN: a + "-isLoggedin",
                LOGGEDOUT: a + "-isLoggedout",
                SPEED_BTN: a + "-speed-btn",
                SPEED_LIST: a + "-speed-list",
                SPEED_CONTAINER: a + "-speed",
                SPEED_TEXT: a + "-speed_text",
                DROPDOWN_BTN: a + "-dropdown-toggle",
                DROPDOWN_LABEL: a + "-dropdown-label",
                DROPDOWN_CARET: a + "-dropdown-caret",
                DROPDOWN_LIST: a + "-dropdown-menu",
                SELECTED: a + "-selected",
                OPEN: a + "-open",
                DISABLED: a + "-disabled",
                CANVAS: a + "-canvas",
                CANVAS_CONTAINER: a + "-canvas-container",
                SPRITZER_CONTAINER: a + "-container",
                LOADING_OVERLAY: a + "-loading-overlay"
            },
            d = {
                MIN_SPEED: 200,
                MAX_SPEED: 450
            };
        return Object.freeze(d), {
            Constants: d,
            CSSClasses: c
        }
    }), i.namespace("SPRITZ.helper"), i.addToNamespace(i.helper, function() {
        function a(a, b, c, d) {
            a.onload = function() {
                if (this.status >= 200 && this.status < 400)
                    if ("json" === b) try {
                        c(JSON.parse(this.responseText))
                    } catch (a) {
                        i.utils.debug(3, "JSON parse failed", a.message), d(a.message)
                    } else c(this.responseText);
                else {
                    i.utils.debug(3, "status", this.status + ", [" + this.statusText + "]");
                    var e = f(this);
                    d(e)
                }
            }, a.onerror = function() {
                i.utils.debug(3, "status", this.status + ", [" + this.statusText + "]");
                var a = f(this);
                d(a)
            }, a.send()
        }

        function d(a, b, c, d, e, h) {
            a.onreadystatechange = function() {
                if (4 == this.readyState)
                    if (this.status >= 200 && this.status < 400)
                        if ("json" === c) try {
                            e(JSON.parse(this.responseText))
                        } catch (a) {
                            i.utils.debug(3, "JSON parse failed", a.message), h(a.message)
                        } else e(this.responseText);
                    else {
                        i.utils.debug(3, "status", this.status + ", [" + this.statusText + "]");
                        var b = f(this);
                        h(b)
                    }
            }, null !== d && "object" == typeof d ? (b ? a.setRequestHeader("Content-Type", b) : a.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8"), a.send(g(d))) : (b && a.setRequestHeader("Content-Type", b), a.send(d))
        }

        function e(a, b) {
            for (var c = !1, d = a.parentElement; !c && d;) d === b ? c = !0 : d = d.parentElement;
            return c
        }

        function f(a) {
            var b;
            try {
                var c = JSON.parse(a.response);
                b = "object" == typeof c ? c : null
            } catch (d) {
                b = null
            }
            return a.responseJSON = b, a
        }

        function g(a) {
            var b = "";
            for (var c in a) a.hasOwnProperty(c) && (b += encodeURIComponent(c) + "=" + encodeURIComponent(a[c]), b += "&");
            return b.length > 0 ? b.substring(0, b.length - 1) : b
        }
        var h = i.utils.isMsie(),
            j = function(a) {
                var b = c.createElement("BUTTON");
                return s(b, a), b.setAttribute("type", "button"), b
            },
            k = function(a, b, d) {
                var e = c.createElement("CANVAS");
                return s(e, a), e.width = b, e.height = d, e
            },
            l = function(a) {
                var b = c.createElement("DIV");
                return s(b, a), b
            },
            m = function(a, b, d) {
                var e = c.createElement("SPAN");
                return s(e, a), e.textContent = b ? b : "", d && e.setAttribute("value", d), e
            },
            n = function(a) {
                var b = c.createElement("UL");
                return s(b, a), b
            },
            o = function(a, b, d) {
                var e = c.createElement("LI");
                return s(e, a), e.textContent = b ? b : "", d && e.setAttribute("value", d), e
            },
            p = function(a, b) {
                a && (a.innerHTML = b ? b : "")
            },
            q = function(a, b) {
                a && (a.textContent = b ? b : "")
            },
            r = function(a) {
                var b = c.implementation.createHTMLDocument("");
                return b.body.innerHTML = a, b.body.children
            },
            s = function(a, b) {
                if (null !== a)
                    if (a.classList)
                        if (b.constructor === Array)
                            for (var c = 0; c < b.length; c += 1) a.classList.add(b[c]);
                        else a.classList.add(b);
                    else if ("[object NodeList]" === a)
                        for (var c = 0; c < a.length; c++) a[c].className += b;
                    else a.className += " " + b
            },
            t = function(a, b) {
                var c;
                if (null !== a)
                    if (a.classList) c = a.classList.contains(b);
                    else if ("[object NodeList]" == a) {
                        c = !1;
                        for (var d = 0; d < a.length; d++) {
                            c = a[d].className += b;
                            break
                        }
                    } else c = new RegExp("(^| )" + b + "( |$)", "gi").test(a.className);
                else c = !1;
                return c
            },
            u = function(a, b) {
                if (null !== a)
                    if (a.classList) a.classList.remove(b);
                    else if ("[object NodeList]" == a)
                        for (var c = 0; c < a.length; c++) a[c].className = a[c].className.replace(new RegExp("(^|\\b)" + b.split(" ").join("|") + "(\\b|$)", "gi"), " ");
                    else a.className = a.className.replace(new RegExp("(^|\\b)" + b.split(" ").join("|") + "(\\b|$)", "gi"), " ")
            },
            v = function(a) {
                null !== a && (a.style.display = "none")
            },
            w = function(a) {
                null !== a && (a.style.display = "block")
            },
            x = function(a, b) {
                var c;
                return c = null !== a ? a.title : null
            },
            y = function(a, b) {
                null !== a && (a.title = b)
            },
            z = function(a, d, e, f) {
                var g;
                e ? b.CustomEvent && !h ? g = new CustomEvent(d, {
                    bubbles: !0,
                    cancellable: !0,
                    detail: e
                }) : (g = c.createEvent("CustomEvent"), g.initCustomEvent(d, !0, !0, e)) : (g = c.createEvent("HTMLEvents"), g.initEvent(d, !0, !1)), f && (g.source = f), a.dispatchEvent(g)
            },
            A = function(a) {
                for (var b = 1; b < arguments.length; b++) {
                    var c = arguments[b];
                    for (var d in c) c.hasOwnProperty(d) && (null === c[d] ? a[d] = null : "object" == typeof c[d] ? c[d].constructor === Array ? a[d] = c[d].slice(0) : a[d] ? A(a[d], c[d]) : a[d] = A({}, c[d]) : a[d] = c[d])
                }
                return a
            },
            B = function(a) {
                C(a.type, a.url, a.async, a.xhrFields, a.headers, a.contentType, a.dataType, a.data, a.success, a.error)
            },
            C = function(b, c, e, f, g, h, j, k, l, m) {
                var n = new XMLHttpRequest;
                if (n.open(b, c, e), null !== f && "object" == typeof f)
                    for (var o in f) f.hasOwnProperty(o) && (o in n ? n[o] = f[o] : i.utils.debug(3, 'Invalid xhr property "' + o + '", unable to set'));
                for (var o in g) g.hasOwnProperty(o) && null !== g[o] && n.setRequestHeader(o, g[o]);
                "GET" === b ? a(n, j, l, m) : d(n, h, j, k, l, m)
            };
        return {
            createButton: j,
            createCanvas: k,
            createDiv: l,
            createSpan: m,
            createUl: n,
            createLi: o,
            setSpanHtml: p,
            setSpanText: q,
            parseHTML: r,
            addClass: s,
            hasClass: t,
            removeClass: u,
            hide: v,
            show: w,
            getTitle: x,
            setTitle: y,
            dispatchEvent: z,
            extend: A,
            ajax: B,
            isElementDescendantOf: e
        }
    }), i.namespace("SPRITZ.spritzinc"), i.addToNamespace(i.spritzinc, function() {
        function a(c, d, e, f, g, h) {
            return this instanceof a ? (this.parentContainer = c, this.onChangeHandler = h, void b.call(this, d, e, f, g)) : new a(c, d)
        }

        function b(a, b, c, h) {
            this.selectBox = g.call(this, a, b, c, h), this.parentContainer.appendChild(this.selectBox), this.selectOptions.children.length > 0 && (this.value = this.selectOptions.children[0].getAttribute("value"), this.selectValue.innerHTML = this.selectOptions.children[0].innerHTML), this.selectBox.addEventListener("click", d.bind(this)), this.selectOptions.addEventListener("click", e.bind(this)), this.documentClickHandler = f.bind(this)
        }

        function d(a) {
            a.target == this.selectOptions || k.isElementDescendantOf(a.target, this.selectOptions) || ("none" === getComputedStyle(this.selectOptions).display ? (k.show(this.selectOptions), c.addEventListener("click", this.documentClickHandler)) : k.hide(this.selectOptions))
        }

        function e(a) {
            var b;
            if (a.target === this.selectOptions) b = null;
            else {
                b = null;
                for (var c = a.target; null === b && null !== c;) c.parentElement === this.selectOptions ? b = c : c = c.parentElement
            }
            if (null === b);
            else if (!k.hasClass(b, j.DISABLED)) {
                k.hide(this.selectOptions);
                var d = b.getAttribute("value");
                d !== this.value && (this.setSelected(d), k.setSpanHtml(this.selectValue, this.options[d].innerHTML))
            }
        }

        function f(a) {
            a.target === this.selectBox || k.isElementDescendantOf(a.target, this.selectBox) || h.call(this)
        }

        function g(a, b, c, d) {
            var e = k.createDiv([j.DROPDOWN_BTN, b]);
            this.selectValue = k.createDiv([j.DROPDOWN_LABEL, c]), e.appendChild(this.selectValue);
            var f = k.createSpan(j.DROPDOWN_CARET);
            e.appendChild(f), this.selectOptions = k.createUl([j.DROPDOWN_LIST, d]), k.hide(this.selectOptions), e.appendChild(this.selectOptions), this.options = {};
            for (var g in a)
                if (a.hasOwnProperty(g)) {
                    var h = k.createLi("selectOption", null, g),
                        i = k.createSpan("selectOptionLabel", a[g], g);
                    h.appendChild(i), this.options[g] = h, this.selectOptions.appendChild(h)
                }
            return e
        }

        function h() {
            k.hide(this.selectOptions), c.removeEventListener("click", this.documentClickHandler)
        }
        var j = i.constants.CSSClasses,
            k = (i.constants.Constants, i.helper);
        return a.prototype.addOption = function(a) {
            this.selectOptions.appendChild(a), this.options[a.getAttribute("value")] = a
        }, a.prototype.getSelected = function() {
            return this.value
        }, a.prototype.setSelected = function(a) {
            var b, c = this.options[a];
            if (c) {
                var d = this.options[this.value];
                d && k.removeClass(d, j.SELECTED), k.addClass(c, j.SELECTED), a !== this.value && (this.value = a, this.onChangeHandler && this.onChangeHandler(a)), this.selectValue.innerHTML = c.innerHTML, b = !0
            } else b = !1;
            return b
        }, a.prototype.restrict = function(a) {
            var b, c = this.options[a];
            return c ? (k.addClass(c, j.DISABLED), b = !0) : b = !1, b
        }, a.prototype.unrestrict = function(a) {
            var b, c = this.options[a];
            return c ? (k.removeClass(c, j.DISABLED), b = !0) : b = !1, b
        }, {
            DropDownSelect: a
        }
    }), i.namespace("SPRITZ.spritzinc"), i.addToNamespace(i.spritzinc, function() {
        function a(c, d) {
            return this instanceof a ? (this.parentContainer = c, this.options = d, void b.call(this)) : new a(c, d)
        }

        function b() {
            if (this.options.speedItems.length > 0) {
                for (var a = c.call(this), b = {}, d = 0, g = a.length; g > d; d += 1) b[a[d].toString()] = a[d] + " wpm";
                this.dropDownSelect = new i.spritzinc.DropDownSelect(this.parentContainer, b, f.SPEED_BTN, f.SPEED_TEXT, f.SPEED_LIST, e.bind(this))
            }
        }

        function c() {
            var a = this.options.speedItems.sort(function(a, b) {
                return a - b
            });
            return a
        }

        function d(a) {
            null != this.parentContainer && h.dispatchEvent(this.parentContainer, "speedChange", {
                speed: a
            })
        }

        function e(a) {
            d.call(this, parseInt(a))
        }
        var f = i.constants.CSSClasses,
            g = i.constants.Constants,
            h = i.helper;
        return a.prototype.getSpeed = function() {
            return this.dropDownSelect ? parseInt(this.dropDownSelect.getSelected()) : void 0
        }, a.prototype.setSpeed = function(a) {
            var b;
            return b = this.dropDownSelect ? this.dropDownSelect.setSelected(a.toString()) : !1
        }, a.prototype.restrict = function() {
            for (var a, b, d = c.call(this), e = 0, f = d.length; f > e; e += 1) d[e] < g.MIN_SPEED ? this.dropDownSelect.restrict(d[e]) : (a || (a = d[e]), d[e] > g.MAX_SPEED ? this.dropDownSelect.restrict(d[e]) : b = d[e]);
            this.dropDownSelect.getSelected() < g.MIN_SPEED ? this.dropDownSelect.setSelected(a) : this.dropDownSelect.getSelected() > g.MAX_SPEED && this.dropDownSelect.setSelected(b)
        }, a.prototype.unrestrict = function() {
            for (var a = c.call(this), b = 0, d = a.length; d > b; b += 1)(a[b] < g.MIN_SPEED || a[b] > g.MAX_SPEED) && this.dropDownSelect.unrestrict(a[b])
        }, {
            DropDownSpeedSelector: a
        }
    }), i.namespace("SPRITZ.model"), i.model.TimedWord = f, i.model.TimedWord.FLAG_MASK = 7, i.model.TimedWord.FLAG_SENTENCE_START = 1, i.model.TimedWord.FLAG_BOLD = 2, i.model.TimedWord.FLAG_PARAGRAPH_START = 4, f.prototype = {
        isBold: function() {
            return 0 != (this.flags & this.model.TimedWord.FLAG_BOLD)
        },
        isSentenceStart: function() {
            return 0 != (this.flags & this.model.TimedWord.FLAG_SENTENCE_START)
        },
        isParagraphStart: function() {
            return 0 != (this.flags & this.model.TimedWord.FLAG_PARAGRAPH_START)
        },
        toString: function() {
            return '{"' + this.word + '", ' + this.orp + ", " + this.multiplier + ", " + this.position + (this.isParagraphStart() ? ", paragraphStart" : "") + (this.isSentenceStart() ? ", sentenceStart" : "") + (this.isBold() ? ", bold" : "") + "}"
        }
    }, i.model.TelemetryItem = function(a, b, c, d, e, f, g, h, i, j, k, l) {
        if (this.id = a, this.time = g, this.user = b, this.userType = c, this.sessionId = d, this.category = "ContentView", this.name = h, this.data = {
            viewingSessionId: e,
            contentVersionId: f,
            "char": i,
            speed: j
        }, "undefined" != typeof k && (this.data.interrupted = k), "undefined" != typeof l)
            for (var m in l) l.hasOwnProperty(m) && (this.data[m] = l[m])
    }, i.model.TelemetryBatch = function(a, b) {
        this.clientOS = a, this.clientEvents = b
    }, i.model.IllegalArgumentException = function(a) {
        this.name = "IllegalArgumentException", this.message = a
    }, i.model.IllegalArgumentException.prototype = new Error, i.model.IllegalArgumentException.prototype.constructor = i.model.IllegalArgumentException, i.model.ArrayIndexOutOfBoundsException = function(a) {
        this.name = "ArrayIndexOutOfBoundsException", this.message = a
    }, i.model.ArrayIndexOutOfBoundsException.prototype = new Error, i.model.ArrayIndexOutOfBoundsException.prototype.constructor = i.model.ArrayIndexOutOfBoundsException, i.namespace("SPRITZ.model"), i.model.SpritzText = g, g.prototype = {
        applySpeedOverrides: function(a) {
            for (var b = a.split(","), c = 0; c < b.length; c++) {
                var d = null,
                    e = b[c].split(":");
                if (e.length < 2) d = "Invalid speed override value: " + b[c];
                else {
                    var f = parseInt(e[0]),
                        g = parseInt(e[1]);
                    0 > g && (d = "Invalid speed override value, negative multiplier, falling back to zero: " + b[c], g = 0), 0 > f || f >= this.words.length ? d = "Invalid speed override value, word index out of bounds: " + b[c] : this.words[f].multiplier = g
                }
                null !== d && console && "function" == typeof console.log
            }
        },
        getContentVersionId: function() {
            return this.contentVersionId
        },
        setContentVersionId: function(a) {
            this.contentVersionId = a
        },
        getDuration: function() {
            return this.duration
        },
        getWords: function() {
            return this.words
        },
        getLocale: function() {
            return this.locale
        },
        getVersion: function() {
            return this.version
        },
        getWord: function(a) {
            return this.words[a]
        },
        getCurrentWord: function() {
            return this.words[this.index]
        },
        getNextWord: function() {
            if (this.words[this.index + 1]) {
                if (this.setCurrentIndex(++this.index), this.words[this.index]) {
                    var a = this.words[this.index];
                    return a
                }
                return null
            }
            return null
        },
        hasNextWord: function() {
            return this.index < this.words.length - 1
        },
        getCurrentIndex: function() {
            return this.index
        },
        setCurrentIndex: function(a) {
            var b;
            return this.words[a] ? (this.index = a, null != this.progressTracker && this.progressTracker(this.index + 1, this.words.length), b = !0) : b = !1, b
        },
        size: function() {
            return this.words.length
        },
        getWordCount: function() {
            return this.wordCount
        },
        isLoaded: function() {
            return this.words.length > 0 || this.words.length == this.wordCount
        },
        reset: function() {
            this.setCurrentIndex(0)
        },
        getPreviousSentenceStart: function(a, b) {
            var c = i.model;
            if (0 > a || a >= this.words.length) throw new c.ArrayIndexOutOfBoundsException(a);
            var d = a;
            if (b > 0)
                for (; d > 0 && b > 0 && (!this.words[d].isSentenceStart() || 0 != --b); d--);
            return d
        },
        getNextSentenceStart: function(a, b) {
            var c = i.model;
            if (0 > a || a > this.words.length) throw new c.ArrayIndexOutOfBoundsException(a);
            var d = a;
            if (b > 0)
                for (; d < this.words.length && (!this.words[d].isSentenceStart() || 0 != --b); d++);
            return d
        },
        calculateTime: function(a, index) {
            var c = 0 == this.words.length ? this.wordCount : this.words.length,
                d = this.rawWordCount > 0 ? this.rawWordCount : c;
            return 6e4 * d / a * (c - index) / c
        },
        computeStandardDelay: function(a) {
            var b = Math.round(this.rawWordCount / a * 60 * 1e3);
            return Math.round(b / this.duration)
        },
        getTotalTime: function(a) {
            return this.calculateTime(a, 0)
        },
        getRemainingTime: function(a) {
            return this.calculateTime(a, this.index)
        },
        getProgressTracker: function() {
            return this.progressTracker
        },
        setProgressTracker: function(a) {
            this.progressTracker = a
        },
        seek: function(a, b) {
            var c;
            return a >= 0 && a < this.words.length ? (c = !0, b === this.seekType.ABSOLUTE ? this.setCurrentIndex(a) : b === this.seekType.SENTENCE_START ? this.setCurrentIndex(this.getPreviousSentenceStart(a, 1)) : this.setCurrentIndex(a)) : c = !1, c
        },
        clone: function() {
            var a = new i.model.SpritzText(this.contentVersionId, this.words, this.duration, this.wordCount, this.rawWordCount, this.locale, this.version);
            return a.contentId = this.contentId, a.setProgressTracker(this.progressTracker), a
        }
    }, i.model.SpritzText.SeekType = Object.freeze({
        ABSOLUTE: "absolute",
        SENTENCE_START: "sentenceStart"
    }), i.model.SpritzText.autoIdCounter = 0, i.model.SpritzText.make = function(a) {
        if ("object" == typeof a) {
            if (a.content) {
                var b = a.content[0];
                return i.model.SpritzText.create(b.id, b.sd0, b.sd1, b.sd2, b.duration, b.rawWordCount)
            }
            return i.model.SpritzText.create(a.plainTextHash, a.sd0, a.sd1, a.sd2, a.duration, a.rawWordCount)
        }
    }, i.model.SpritzText.create = function(a, b, c, d, e, f) {
        var g = i.model,
            h = "V2",
            j = "AAAC",
            k = l.math.Long.fromInt(1073741823),
            m = l.math.Long.fromInt(15),
            n = l.math.Long.fromInt(16383),
            o = l.math.Long.fromInt(7),
            p = 1,
            q = 2,
            r = 4;
        if (b !== h) throw new Error("Unknown container format");
        if (!("object" == typeof c && c instanceof Array && "object" == typeof d && d instanceof Array)) throw new Error("Invalid data format: wrong types");
        if (0 == d.length) throw new Error("Invalid data format: data2");
        var s = d[0];
        if ("string" != typeof s) throw new g.IllegalArgumentException("Invalid preamble");
        var t = s.split(",");
        if (t.length < 4) throw new Error("Invalid preamble");
        if (t[0] != j) throw new Error("Unrecognized encoding");
        var u = parseInt(t[1]),
            v = [],
            w = 0,
            x = 0;
        if (0 == c.length) {
            if (1 != d.length) throw new Error("Invalid data format: Wrong data length")
        } else if (c.length != u || d.length - 1 != u) throw new Error("Invalid data format: Wrong data length");
        for (var y = 0; y < c.length; y++) {
            var z = c[y],
                A = d[y + 1],
                B = l.math.Long.fromString(A, 16),
                C = B.and(o).toInt(),
                D = 0;
            0 != (C & p) && (D |= g.TimedWord.FLAG_BOLD), 0 != (C & q) && (D |= g.TimedWord.FLAG_SENTENCE_START), 0 != (C & r) && (D |= g.TimedWord.FLAG_PARAGRAPH_START), B = B.shiftRight(3);
            var E = B.and(n).getLowBits();
            B = B.shiftRight(14);
            var F = B.and(m).getLowBits();
            B = B.shiftRight(4);
            var G = B.and(k).getLowBits();
            v.push(new g.TimedWord(z, F, E, G, D)), w = w + 1 + E / 100, "" !== z && x++
        }
        return ("undefined" == typeof e || null === e) && (e = w), f || (f = x), new i.model.SpritzText(a, v, e, u, f, t[2], t[3])
    }, i.model.SpritzText.createFromContainerV2 = function(a, b) {
        var c;
        return c = "object" == typeof b.sdRaw ? i.model.SpritzText.createFromFlashV1(a, b.sdRaw) : i.model.SpritzText.create(a, b.sd0, b.sd1, b.sd2, null, null)
    }, i.model.SpritzText.createFromFlashV1 = function(a, b) {
        for (var c = b.Locale, d = b.EngineVersion, e = new Array(b.Words.length), f = 0, g = 0, h = 0; h < b.Words.length; h++) {
            var j = b.Words[h],
                k = 0;
            null !== j.Flags && (-1 !== j.Flags.indexOf("bold") && (k |= i.model.TimedWord.FLAG_BOLD), -1 !== j.Flags.indexOf("sentenceStart") && (k |= i.model.TimedWord.FLAG_SENTENCE_START), -1 !== j.Flags.indexOf("paragraphStart") && (k |= i.model.TimedWord.FLAG_PARAGRAPH_START)), "" !== j.Segment && g++, e[h] = new i.model.TimedWord(j.Segment, j.ORP, j.Multiplier, j.CharPosition, k), f = f + 1 + j.Multiplier / 100
        }
        return new i.model.SpritzText(a, e, f, e.length, g, c, d)
    }, i.model.SpritzText.createFromString = function(a) {
        var b, c = JSON.parse(a),
            d = "spritzText" + i.model.SpritzText.autoIdCounter++;
        if ("string" != typeof c.sd0) throw new Error("Unable to parse data, missing container version field");
        if ("V2" === c.sd0) b = i.model.SpritzText.createFromContainerV2(d, c);
        else {
            if ("Flash1" !== c.sd0) throw new Error("Unable to parse data, unsupported container version: " + c.sd0);
            b = i.model.SpritzText.createFromFlashV1(d, c)
        }
        return b
    };
    var k = function() {
        function a(a, d) {
            for (var e = 0, f = a.length; f > e; ++e) ! function(e) {
                function f() {
                    return g && g.offsetWidth !== h && (++b, g.parentNode.removeChild(g), g = null), b >= a.length && (i && clearInterval(i), b === a.length) ? (d(), !0) : void 0
                }
                var g = c.createElement("span");
                g.innerHTML = "giItT1WQy@!-/#", g.style.position = "absolute", g.style.left = "-10000px", g.style.top = "-10000px", g.style.fontSize = "300px", g.style.fontFamily = "sans-serif", g.style.fontVariant = "normal", g.style.fontStyle = "normal", g.style.fontWeight = "normal", g.style.letterSpacing = "0", c.body.appendChild(g);
                var h = g.offsetWidth;
                g.style.fontFamily = e;
                var i = 0;
                f() || (i = setInterval(f, 50))
            }(a[e])
        }
        var b = 0;
        return function(c, d) {
            c.length > b ? a(c, d) : d()
        }
    }();
    i.namespace("SPRITZ.client"), i.addToNamespace(i.client, function() {
        var a = {
            name: "Spritz_JSSDK",
            version: "2.0.7",
            buildDate: "Fri Nov 13 2015 11:59:44 GMT-0700 (MST)"
        };
        return {
            VersionInfo: a
        }
    }), i.namespace("SPRITZ.client"), i.addToNamespace(i.client, function() {
        function a() {
            return "Microsoft Internet Explorer" === navigator.appName || "Netscape" === navigator.appName && null !== new RegExp("Trident/.*rv:([0-9]{1,}[.0-9]{0,})").exec(navigator.userAgent)
        }

        function c(a, b) {
            this.code = a, this.message = b
        }

        function d(a, b, c) {
            this.url = b + "/oauth/authorize?c=" + encodeURIComponent(i.client.VersionInfo.name + "_" + i.client.VersionInfo.version) + "&response_type=token&client_id=" + a + "&redirect_uri=" + encodeURIComponent(c), this.onSuccess = null, this.onError = null, this.storageHandler = new i.datastore.StorageHandler
        }
        var e = function(a) {
            "function" == typeof b.removeEventListener ? (b.removeEventListener("message", this.onMessageHandler, !1), i.utils.debug(3, "Registered listener via addEventListener")) : b.detachEvent("onmessage", this.onMessageHandler), this.storageHandler.remove("authResponse"), this.onSuccess && this.onSuccess(a.data), this.showing = !1, a.source.close()
        };
        return d.prototype.show = function(c, d) {
            this.onSuccess = c, this.onError = d, i.utils.debug(3, "opening auth popup with URL: ", this.url), this.storageHandler.remove("authResponse");
            var f = b.open(this.url, "SpritzLogin", "width=400,height=400,location=0,menubar=0,toolbar=0");
            if (f) {
                f.focus(), this.showing = !0, this.onMessageHandler = j.createDelegate(this, e), "function" == typeof b.addEventListener ? (b.addEventListener("message", this.onMessageHandler, !1), i.utils.debug(3, "Registered listener via addEventListener")) : b.attachEvent("onmessage", this.onMessageHandler);
                var g = a(),
                    h = this,
                    k = null;
                k = setInterval(function() {
                    var a = h.storageHandler.getString("authResponse");
                    if (null !== a && h.onMessageHandler({
                        data: a,
                        source: f
                    }), g) try {
                        f.name && -1 !== f.name.indexOf("#access_token") && h.onMessageHandler({
                            data: f.name,
                            source: f
                        })
                    } catch (b) {
                        i.utils.debug(2, b)
                    }
                    h.showing && f ? f.closed && (clearInterval(k), h.showing = !1, h.onError && h.onError(new Error("Login aborted"))) : clearInterval(k)
                }, 250)
            } else i.utils.debug(1, "SpritzClient: Unable to open auth popup."), this.onError && this.onError(new Error("Popup unable to open."))
        }, {
            APIError: c,
            AuthPopup: d
        }
    }), i.addToNamespace(i.client, function() {
        function a(a) {
            return "string" == typeof a && '"' === a.charAt(0) && '"' === a.charAt(a.length - 1) && (a = a.substr(1, a.length - 2)), a
        }

        function b(a, b, c) {
            this.clientId = a, this.apiRoot = b, this.redirectUri = c, this.initialized = !1, this.clientAccessToken = null, this.guestAccessToken = null, this.userAccessToken = null, this.apiHost = null, this.anonymousEnabled = !1, this.loginCallback = null, this.logoutCallback = null, this.storageHandler = new i.datastore.StorageHandler, h.call(this), g.call(this), this.clientAccessToken = v.call(this, d.CLIENT_TOKEN), this.guestId = j.call(this, d.GUEST_ID), this.guestAccessToken = v.call(this, d.GUEST_TOKEN), this.userId = j.call(this, d.USER_ID), this.userName = v.call(this, d.USER_NAME), this.userAccessToken = v.call(this, d.USER_TOKEN), this.registry = {
                loginStateChanged: []
            }
        }
        var c = i.helper,
            d = Object.freeze({
                CLIENT_TOKEN: "clientToken",
                USER_ID: "userId",
                USER_NAME: "userName",
                USER_TOKEN: "userToken",
                GUEST_ID: "guestId",
                GUEST_TOKEN: "guestToken"
            }),
            e = function(a) {
                var b = {};
                if (null === a || 0 === a.length) return b;
                var c = a.indexOf("#");
                c >= 0 && (a = a.substring(c + 1));
                for (var d = a.split("&"), e = 0; e < d.length; e++) {
                    var f, g, h = d[e],
                        i = h.indexOf("="); - 1 === i ? (f = decodeURIComponent(h), g = !0) : (f = decodeURIComponent(h.substring(0, i)), g = decodeURIComponent(h.substring(i + 1))), b[f] = g
                }
                return b
            },
            f = function(a, b, c) {
                return c + "." + a + "." + b
            },
            g = function() {
                var a = this.apiRoot.indexOf("//");
                if (-1 === a) this.apiHost = "api.spritzinc.com";
                else {
                    var b = this.apiRoot.indexOf("/", a + 2); - 1 === b ? this.apiHost = this.apiRoot.substring(a + 2) : this.apiHost = this.apiRoot.substring(a + 2, b)
                }
            },
            h = function() {
                "/" === this.apiRoot.substring(this.apiRoot.length - 1) && (this.apiRoot = this.apiRoot.substring(0, this.apiRoot.length - 1))
            },
            j = function(b) {
                var c = v.call(this, b);
                if (c) {
                    var d = a(c);
                    c !== d && (u.call(this, b, d), c = d)
                }
                return c
            },
            k = function(a) {
                var b, c;
                return (403 === a.status || 500 === a.status) && "object" == typeof a.responseJSON && a.responseJSON.code && a.responseJSON.message ? (b = a.responseJSON.code, c = "[" + a.responseJSON.code + "/" + a.responseJSON.message + "]") : (b = a.status, c = "HTTP call failed, status: " + a.status + ", message: " + a.statusText), new i.client.APIError(b, c)
            },
            l = function(a, b) {
                var d = this,
                    e = function(c) {
                        "access_token" in c && "token_type" in c && "bearer" === c.token_type ? "function" == typeof a && q.call(d, c.access_token, a, b) : "function" == typeof b && b(new Error("Client login failed, invalid response"))
                    },
                    f = function(a) {
                        var c = k.call(d, a);
                        if (403 === c.code && (i.utils.debug(2, "Client ID " + d.clientId + " is not authorized to use anonymous mode"), d.anonymousEnabled = !1), "function" == typeof b) {
                            var e = new Error("Unable to perform client login: " + c.message);
                            e.cause = c, b(e)
                        }
                    };
                c.ajax({
                    type: "GET",
                    url: this.apiRoot + "/oauth/clientToken?clientId=" + encodeURIComponent(this.clientId),
                    dataType: "json",
                    async: !0,
                    success: e,
                    error: f
                })
            },
            m = function(a, b) {
                var d = this,
                    e = function(c) {
                        "userid" in c && "token" in c ? c.audience === d.clientId ? (y.call(d, c.userid, c.token), a()) : "function" == typeof b && b(new Error("clientId mismatch")) : "function" == typeof b && b(new Error("Guest login failed, invalid response"))
                    },
                    f = function(a) {
                        var c = k.call(d, a);
                        if (403 === c.code && (i.utils.debug(1, "Client ID " + d.clientId + " is not authorized to use anonymous mode"), d.anonymousEnabled = !1), "function" == typeof b) {
                            var e = new Error("Unable to perform guest login: " + c.message);
                            e.cause = c, b(e)
                        }
                    };
                c.ajax({
                    type: "GET",
                    url: this.apiRoot + "/oauth/guestToken?clientId=" + encodeURIComponent(this.clientId),
                    xhrFields: {
                        withCredentials: !0
                    },
                    dataType: "json",
                    async: !0,
                    success: e,
                    error: f
                })
            },
            n = function(a, b, c, d, e) {
                var f = this,
                    g = 1,
                    h = {
                        url: a
                    },
                    j = !0;
                "undefined" != typeof b && (h.selector = b, "undefined" == typeof c ? h.selectorType = "CSS" : h.selectorType = c);
                var k = function() {
                    f.execute({
                        type: "POST",
                        contentType: "application/json",
                        url: "/content",
                        dataType: "json",
                        async: !0,
                        data: JSON.stringify(h)
                    }, j, !0, function(a) {
                        d && d(a)
                    }, function(a) {
                        !j && "code" in a && 403 === a.code && 1 === g ? (i.utils.debug(2, "Content retrieval in anonymous failed with 403, retrying with userRequired=true"), g++, j = !0, k()) : "function" == typeof e && e(new Error("Content retrieval failed: " + a.message))
                    })
                };
                k()
            },
            o = function(a, b, c, d, e, f) {
                var g = !0;
                this.execute({
                    type: "GET",
                    url: "/contentVersion?includeSpritzableText=" + b + "&includePlainText=" + c + "&sortColumn=createdDate&sortDirection=DESC&pageSize=1&contentId=" + encodeURIComponent(a),
                    dataType: "json",
                    async: !0
                }, g, !0, function(g) {
                    if (0 === g.content.length) f && f(new Error("No contentVersion returned"));
                    else {
                        var h = g.content[0];
                        if (e) {
                            var j, k;
                            if (d) {
                                var l = i.model.SpritzText.make(g);
                                c && (l.plainText = h.plainText), b || (l.contentId = a), j = l, k = g.media
                            } else j = {
                                id: h.id,
                                duration: h.duration,
                                locale: h.locale,
                                sd0: h.sd0,
                                sd1: h.sd1,
                                sd2: h.sd2,
                                sd3: h.sd3,
                                sd4: h.sd4
                            }, k = h.media;
                            e(j, k)
                        }
                    }
                }, function(b) {
                    f && f(new Error("Unable to retrieve contentVersion, contentId=" + a + ": " + b.message))
                })
            },
            p = function(a, b) {
                var c = null;
                try {
                    this.initialized = !0
                } catch (d) {
                    c = d
                }
                null === c ? a && a() : "function" == typeof b && b(new Error("Initialization failed: " + c.message))
            },
            q = function(a, b) {
                w.call(this, a), "function" == typeof b && b(a)
            },
            r = function(a, b, c) {
                var d = e(a);
                d.access_token && d.token_type ? "bearer" === d.token_type ? z.call(this, d.access_token, b, c) : this.onError && this.onError(new Error("Unexpected token type: " + d.token_type)) : this.onError && this.onError(new Error("No token data in response"))
            },
            s = function(a, b, c, d) {
                x.call(this, a, b, c), d && d(c), this.loginCallback && this.loginCallback()
            },
            t = function(a) {
                this.storageHandler.remove(f(this.apiHost, this.clientId, a))
            },
            u = function(a, b) {
                this.storageHandler.putString(f(this.apiHost, this.clientId, a), b)
            },
            v = function(a) {
                return this.storageHandler.getString(f(this.apiHost, this.clientId, a))
            },
            w = function(a) {
                if (this.clientAccessToken = a, null === a) t.call(this, d.CLIENT_TOKEN);
                else try {
                    u.call(this, d.CLIENT_TOKEN, a)
                } catch (b) {
                    i.utils.debug(1, "Error writing to localStorage: ", b)
                }
            },
            x = function(a, b, c) {
                if (this.userAccessToken = c, null === c) t.call(this, d.USER_ID), t.call(this, d.USER_NAME), t.call(this, d.USER_TOKEN);
                else {
                    this.setUserId(a), this.setUserName(b);
                    try {
                        u.call(this, d.USER_TOKEN, c)
                    } catch (e) {
                        i.utils.debug(1, "Error writing userToken to localStorage: ", e)
                    }
                }
            },
            y = function(a, b) {
                if (this.guestAccessToken = b, null === b) t.call(this, d.GUEST_ID), t.call(this, d.GUEST_TOKEN);
                else {
                    this.setGuestId(a);
                    try {
                        u.call(this, d.GUEST_TOKEN, b)
                    } catch (c) {
                        i.utils.debug(1, "Error writing guestToken to localStorage: ", c)
                    }
                }
            },
            z = function(a, b, d) {
                var e = function(a) {
                        d && d(new Error("Token validation failed: " + a.message + " Please make sure you are not using Internet Explorer 9 or less, as Spritz is unsupported in those browsers."))
                    },
                    f = this;
                c.ajax({
                    type: "GET",
                    url: this.apiRoot + "/oauth/tokeninfo?access_token=" + encodeURIComponent(a),
                    dataType: "json",
                    async: !0,
                    success: function(c) {
                        c.audience === f.clientId ? s.call(f, c.userid, c.username, a, b, d) : e(new Error("clientId mismatch"))
                    },
                    error: e
                })
            };
        b.prototype.execute = function(a, b, d, e, f) {
            var g, h, j = null,
                n = 1,
                o = this;
            if (a.url = this.apiRoot + a.url, g = function() {
                i.utils.debug(3, "Invoking " + a.type + " " + a.url);
                var b = function(a) {
                    if (401 === a.status && 1 === n) n++, "user" === j ? x.call(o, null, null, null) : "guest" === j ? y.call(o, null, null) : "client" === j && w.call(o, null), h();
                    else {
                        var b = k(a);
                        f ? f(b) : i.utils.debug(1, b.code + ": " + b.message)
                    }
                };
                "user" === j ? a.headers = {
                    Authorization: "Bearer " + o.userAccessToken
                } : "guest" === j ? a.headers = {
                    Authorization: "Bearer " + o.guestAccessToken
                } : "client" === j && (a.headers = {
                    Authorization: "Bearer " + o.clientAccessToken
                }), a.success = e, a.error = b, c.ajax(a)
            }, h = function() {
                if (b || null !== o.userAccessToken || null !== o.guestAccessToken)
                    if (b)
                        if (null !== o.userAccessToken) j = "user", g();
                        else if (d)
                            if (j = "guest", null === o.guestAccessToken) {
                                var a = function(a) {
                                    f && f(new Error("API call failed, guest login failed: " + a.message))
                                };
                                m.call(o, g, a)
                            } else g();
                        else f && f(new Error("No user login and no guest allowed"));
                    else j = o.userAccessToken ? "user" : "guest", g();
                else if (j = "client", null === o.clientAccessToken) {
                    var c = function(a) {
                        "cause" in a && a.cause instanceof i.client.APIError && 403 === a.cause.code ? (i.utils.debug(2, "Client login failed with status 403, retrying API call with userRequired"), b = !0, h()) : f && f(new Error("API call failed, client login failed: " + a.message))
                    };
                    l.call(o, g, c)
                } else g()
            }, o.initialized) h();
            else {
                var q = function(a) {
                    f && f(new Error("Execution failed, unable to get accessToken: " + a.message))
                };
                p.call(o, h, q)
            }
        }, b.prototype.userLogin = function(a, b) {
            var c = new i.client.AuthPopup(this.clientId, this.apiRoot, this.redirectUri),
                d = this,
                e = function() {
                    a(), A.call(d, "loginStateChanged", {
                        state: "login"
                    })
                },
                f = function(a) {
                    r.call(d, a, e, b)
                },
                g = function(a) {
                    "function" == typeof b && b(new Error("Login Failed: " + a.message))
                };
            c.show(f, g)
        }, b.prototype.userLogout = function() {
            x.call(this, null, null, null), this.logoutCallback && this.logoutCallback();
            try {
                A.call(this, "loginStateChanged", {
                    state: "logout"
                })
            } catch (a) {
                i.utils.debug(1, 'Failed to raise "loginStateChanged" event [' + a.message + "]")
            }
        }, b.prototype.fetchContents = function(a, b, c, d, e) {
            var f = this,
                g = function(a) {
                    o.call(f, a.id, !0, !1, !0, b, c)
                };
            n.call(this, a, d, e, g, c)
        }, b.prototype.fetchContents2 = function(a, b, c, d) {
            var e, f, g, h, i, j = this;
            "undefined" == typeof d ? (e = !0, f = null, g = null, h = !1, i = !0) : (e = "undefined" == typeof d.decode ? !0 : d.decode, f = "undefined" == typeof d.selector ? null : d.selector, g = "undefined" == typeof d.selectorType ? "CSS" : d.selectorType, h = "undefined" == typeof d.includePlainText ? !1 : d.includePlainText, i = "undefined" == typeof d.includeSpritzableText ? !0 : d.includeSpritzableText);
            var k = function(a) {
                o.call(j, a.id, i, h, e, b, c)
            };
            n.call(this, a, f, g, k, c)
        }, b.prototype.fetchContentsByContentId = function(a, b, c, d) {
            var e, f, g;
            "undefined" == typeof d ? (e = !0, f = !1, g = !0) : (e = "undefined" == typeof d.decode ? !0 : d.decode, f = "undefined" == typeof d.includePlainText ? !1 : d.includePlainText, g = "undefined" == typeof d.includeSpritzableText ? !0 : d.includeSpritzableText), o.call(this, a, g, f, e, b, c)
        }, b.prototype.isUserLoggedIn = function() {
            return "string" == typeof this.userAccessToken && this.userAccessToken.length > 0
        }, b.prototype.setAuthResponse = function(a, b, c) {
            r.call(this, a, b, c)
        }, b.prototype.spritzify = function(a, b, c, d) {
            this.execute({
                type: "POST",
                url: "/misc/spritzify",
                dataType: "json",
                async: !0,
                data: {
                    plainText: a,
                    locale: b
                }
            }, !0, !0, function(a) {
                try {
                    var b = i.model.SpritzText.make(a);
                    "function" == typeof c && c(b)
                } catch (e) {
                    "function" == typeof d && d(new Error("Invalid data received: " + e.message))
                }
            }, function(a) {
                if ("function" == typeof d) {
                    var b;
                    b = "undefined" != typeof a.message ? a.message : a.status + " [" + a.statusText + "]", d(new Error("Unable to retrive spritzableText: " + b))
                }
            })
        }, b.prototype.sendTelemetry = function(a, b, c) {
            var d = a.clientEvents[0].user,
                e = "g" === a.clientEvents[0].userType ? "guest" : "user",
                f = "g" === a.clientEvents[0].userType;
            this.execute({
                type: "POST",
                contentType: "application/json",
                url: "/" + e + "/" + d + "/event",
                dataType: "json",
                async: !0,
                data: JSON.stringify(a)
            }, !0, f, function(c) {
                "function" == typeof b && b(a, c)
            }, function(b) {
                if ("function" == typeof c) {
                    var d;
                    d = "undefined" != typeof b.message ? b.message : b.status + " [" + b.statusText + "]", c(a, new Error("Unable to send Telemetry: " + d))
                }
            })
        }, b.prototype.setAnonymousEnabled = function(a) {
            this.anonymousEnabled = a === !0
        }, b.prototype.getGuestId = function() {
            return this.guestId
        }, b.prototype.setGuestId = function(a) {
            this.guestId = a;
            try {
                u.call(this, d.GUEST_ID, a)
            } catch (b) {
                i.utils.debug(1, "Error writing guestId to localStorage: ", b)
            }
        }, b.prototype.getUserId = function() {
            return this.userId
        }, b.prototype.setUserId = function(a) {
            this.userId = a;
            try {
                u.call(this, d.USER_ID, a)
            } catch (b) {
                i.utils.debug(1, "Error writing userId to localStorage: ", b)
            }
        }, b.prototype.getUserName = function() {
            return this.userName
        }, b.prototype.setUserName = function(a) {
            this.userName = a;
            try {
                u.call(this, d.USER_NAME, a)
            } catch (b) {
                i.utils.debug(1, "Error writing userName to localStorage: ", b)
            }
        }, b.prototype.registerLoginCallback = function(a) {
            "function" == typeof a && (this.loginCallback = a)
        }, b.prototype.registerLogoutCallback = function(a) {
            "function" == typeof a && (this.logoutCallback = a)
        }, b.prototype.on = function(a, b) {
            if ("undefined" == typeof this.registry[a]) i.utils.debug(1, "Unsupported event: " + a);
            else {
                var c = this.registry[a],
                    d = c.indexOf(b); - 1 === d ? c.push(b) : i.utils.debug(1, "Already registered for " + a)
            }
        }, b.prototype.off = function(a, b) {
            if ("undefined" == typeof this.registry[a]) i.utils.debug(1, "Unsupported event: " + a);
            else {
                var c = this.registry[a],
                    d = c.indexOf(b); - 1 === d ? i.utils.debug(1, "Not registered for " + a) : c.splice(d, 1)
            }
        };
        var A = function() {
            var a = arguments[0];
            if (!this.registry.hasOwnProperty(a)) throw new Error("Unsupported event: " + a);
            for (var b = this.registry[a], c = Array.prototype.slice.call(arguments, 1, arguments.length), d = 0; d < b.length; d++) b[d].apply(null, c)
        };
        return {
            SpritzClient: b
        }
    }), i.namespace("SPRITZ.datastore"), i.addToNamespace(i.datastore, function() {
        function a(a) {
            "undefined" == typeof a ? this.prefix = "spritz." : this.prefix = a
        }
        a.prototype.bulkUpdate = function(a, f, g) {
            "undefined" == typeof f && (f = e);
            for (var h = 0, j = b.call(this, a), k = 0; k < localStorage.length; k++) {
                var l = localStorage.key(k);
                if (0 === l.indexOf(j)) {
                    var m = c(localStorage.getItem(l));
                    f(m) && (g(m), localStorage.setItem(l, d(m)), h++)
                }
            }
            return i.utils.debug(3, "StorageHandler: Bulk updated " + h + " item(s)"), h
        }, a.prototype.count = function(a, d) {
            "undefined" == typeof d && (d = e);
            for (var f = b.call(this, a), g = 0, h = 0; h < localStorage.length; h++) {
                var i = localStorage.key(h);
                if (0 === i.indexOf(f)) {
                    var j = c(localStorage.getItem(i));
                    d(j) && g++
                }
            }
            return g
        }, a.prototype.get = function(a) {
            var d = localStorage.getItem(b.call(this, a));
            return null == d ? (i.utils.debug(2, "StorageHandler: Item [" + a + "] does not exist"), null) : c(d)
        }, a.prototype.getDate = function(a) {
            var c, d = localStorage.getItem(b.call(this, a));
            return c = null === d || "" === d ? null : new Date(d)
        }, a.prototype.getString = function(a) {
            return localStorage.getItem(b.call(this, a))
        }, a.prototype.put = function(a, c) {
            localStorage.setItem(b.call(this, a), d(c))
        }, a.prototype.putDate = function(a, c) {
            localStorage.setItem(b.call(this, a), null === c ? "" : c.toISOString())
        }, a.prototype.putString = function(a, c) {
            localStorage.setItem(b.call(this, a), c)
        }, a.prototype["delete"] = function(a) {
            var c, d = b.call(this, a),
                e = localStorage.getItem(d);
            return null === e ? c = 0 : (localStorage.removeItem(d), c = 1), c
        }, a.prototype.remove = function(a) {
            for (var c = 0, d = b.call(this, a), e = 0, f = localStorage.length; f > e; e += 1) {
                var g = localStorage.key(e);
                null != g && 0 == g.indexOf(d) && (localStorage.removeItem(g), c += 1)
            }
            return c
        }, a.prototype.removeItem = function(a) {
            var c, d = b.call(this, a),
                e = localStorage.getItem(d);
            return null === e ? c = 0 : (localStorage.removeItem(d), c = 1), c
        }, a.prototype.select = function(a, d, f) {
            "undefined" == typeof d && (d = e), "undefined" == typeof f && (f = Number.MAX_VALUE);
            for (var g = 0, h = 0, j = [], k = b.call(this, a); g < localStorage.length && j.length < f; g++) {
                var l = localStorage.key(g);
                if (0 === l.indexOf(k)) {
                    h++;
                    var m = c(localStorage.getItem(l));
                    d(m) && j.push(m)
                }
            }
            return i.utils.debug(3, "StorageHandler: Select returning " + j.length + " item(s) after scanning " + g + " keys and inspecting " + h + " item(s)"), j
        };
        var b = function(a) {
                return this.prefix + a
            },
            c = function(a) {
                try {
                    return JSON.parse(a)
                } catch (b) {
                    return i.utils.debug(2, "StorageHandler: Failed to parse item, exception [" + b.name + "] msg[" + b.message + "]"), i.utils.debug(2, "StorageHandler: Item is not JSON - returning the raw value: [" + a + "]"), a
                }
            },
            d = function(a) {
                return JSON.stringify(a)
            },
            e = function(a) {
                return !0
            };
        return {
            StorageHandler: a,
            composeKey: b
        }
    }), i.namespace("SPRITZ.display"), i.addToNamespace(i.display, function() {
        function a(a, b, c) {
            this.name = "dp" + Math.random(), e[this.name] = new h(a, b), this.client = c, this.telemetryHandler = new i.spritzinc.TelemetryHandler(c), this.storageHandler = this.telemetryHandler.storageHandler, this.onCompleteCallback = function(a) {
                this.telemetryHandler.stop(e[this.name].getCurrentText(), e[this.name].getCurrentTextSpeed()), "function" == typeof a && a()
            }
        }

        function b(a) {
            return null != e[this.name].getCurrentText() && (this.telemetryHandler.changeSpeed(e[this.name].getCurrentText(), e[this.name].getCurrentTextSpeed(), a), e[this.name].isRunning() && this.telemetryHandler.start(e[this.name].getCurrentText(), a)), e[this.name].setCurrentTextSpeed(a), a
        }

        function c(a) {
            var b = a.getCurrentIndex();
            return b < a.size() - 1 && (b = a.getNextSentenceStart(b + 1, 1)), b
        }

        function d(a) {
            var b = a.getCurrentIndex();
            if (b >= 0) {
                var c;
                a.hasNextWord() ? c = 2 : (b--, c = 1), b = a.getPreviousSentenceStart(b, c), "" == a.getWord(b).word && b < a.size() - 1 && (b += 1)
            }
            return b
        }
        var e = {},
            f = i.constants.Constants;
        return a.prototype.reloadRedicle = function(a, b) {
            var c = e[this.name],
                d = c.getCurrentText(),
                f = c.getOnCompleteCallback(),
                g = c.getCurrentTextSpeed(),
                i = c.getHighlightBestLetter(),
                j = c.getCurrentState(),
                k = c.isRunning();
            for (k && c.pauseText(); a.firstChild;) a.removeChild(a.firstChild);
            var l = new h(a, b);
            e[this.name] = l, l.setOnCompleteCallback(f), l.setCurrentTextSpeed(g), l.setHighlightBestLetter(i), k || l.setCurrentState(j), d && l.setCurrentText(d), k && l.resumeText(!1)
        }, a.prototype.getCurrentText = function() {
            return e[this.name].getCurrentText()
        }, a.prototype.setCurrentText = function(a) {
            e[this.name].getCurrentText() && this.telemetryHandler.stop(e[this.name].getCurrentText(), e[this.name].getCurrentTextSpeed()), e[this.name].setCurrentText(a), this.telemetryHandler.viewStart(e[this.name].getCurrentText(), e[this.name].getCurrentTextSpeed())
        }, a.prototype.getCurrentTextSpeed = function() {
            return e[this.name].getCurrentTextSpeed()
        }, a.prototype.setCurrentTextSpeed = function(a) {
            var c = null === this.client || !(this.client.isUserLoggedIn() || this.client.anonymousEnabled),
                a = parseInt(a);
            if ("number" != typeof a) return i.utils.debug(2, "setSpeed accepts only numbers, you passed in: ", a, typeof a), !1;
            if (a % 1 !== 0 && (a = Math.round(a)), c) {
                var d = this.storageHandler.get("speedMinMax");
                if ((void 0 === d || null === d) && (d = {
                    min: f.MIN_SPEED,
                    max: f.MAX_SPEED
                }), a > d.max || a < d.min) {
                    var e = a > d.max ? "faster than maxUnregistered [" + d.max + "]" : "slower than minUnregistered [" + d.min + "]";
                    return i.utils.debug(0, "Attempt to set speed [" + a + "] " + e + " failed"), !1
                }
                return b.call(this, a)
            }
            return b.call(this, a)
        }, a.prototype.getCurrentPosition = function() {
            return null != this.getCurrentText() ? this.getCurrentText().getCurrentIndex() : -1
        }, a.prototype.setCurrentPosition = function(a) {
            null != this.getCurrentText() && (e[this.name].isRunning() && this.telemetryHandler.pause(e[this.name].getCurrentText(), e[this.name].getCurrentTextSpeed()), e[this.name].setCurrentPosition(a))
        }, a.prototype.getCurrentState = function() {
            return e[this.name].getCurrentState()
        }, a.prototype.setCurrentState = function(a) {
            return e[this.name].setCurrentState(a)
        }, a.prototype.getHighlightBestLetter = function() {
            return e[this.name].getHighlightBestLetter()
        }, a.prototype.setHighlightBestLetter = function(a) {
            e[this.name].setHighlightBestLetter(a)
        }, a.prototype.getOnCompleteCallback = function() {
            return e[this.name].getOnCompleteCallback()
        }, a.prototype.setOnCompleteCallback = function(a) {
            e[this.name].setOnCompleteCallback(this.onCompleteCallback.bind(this, a))
        }, a.prototype.setRedicle = function(a) {
            e[this.name] = a
        }, a.prototype.displayPlaceholderText = function(a, b) {
            return e[this.name].displayPlaceholderText(a, b)
        }, a.prototype.displayText = function(a, b) {
            e[this.name].getCurrentText() && this.telemetryHandler.stop(e[this.name].getCurrentText(), e[this.name].getCurrentTextSpeed()), e[this.name].displayText(a, this.onCompleteCallback.bind(this, b)), this.telemetryHandler.viewStart(e[this.name].getCurrentText(), e[this.name].getCurrentTextSpeed()), this.telemetryHandler.start(e[this.name].getCurrentText(), e[this.name].getCurrentTextSpeed())
        }, a.prototype.displayWord = function(a, b, c) {
            return e[this.name].displayWord(a, b, c)
        }, a.prototype.eraseWord = function() {
            return e[this.name].eraseWord()
        }, a.prototype.goToEnd = function() {
            var a = this.getCurrentText();
            if (a) {
                e[this.name].pauseText(), this.telemetryHandler.end(this.getCurrentText(), e[this.name].getCurrentTextSpeed()), a.setCurrentIndex(a.size() - 1), e[this.name].reset();
                var b = e[this.name].getOnCompleteCallback();
                b && this.onCompleteCallback(b)
            } else i.utils.debug(2, "SpritzDisplayProxy: no text loaded")
        }, a.prototype.goToFirstWord = function() {
            this.getCurrentText() && (e[this.name].pauseText(), this.telemetryHandler.rewind(this.getCurrentText(), e[this.name].getCurrentTextSpeed()), this.getCurrentText().reset(), e[this.name].reset())
        }, a.prototype.goToPreviousSentence = function() {
            this.getCurrentText() && (e[this.name].pauseText(), this.telemetryHandler.backup(this.getCurrentText(), e[this.name].getCurrentTextSpeed()), this.getCurrentText().setCurrentIndex(d(this.getCurrentText())), e[this.name].reset())
        }, a.prototype.goToNextSentence = function() {
            var a = this.getCurrentText();
            if (a) {
                e[this.name].pauseText(), this.telemetryHandler.forward(a, e[this.name].getCurrentTextSpeed());
                var b = a.setCurrentIndex(c(a));
                if (b || a.setCurrentIndex(a.size() - 1), e[this.name].reset(), !a.hasNextWord()) {
                    var d = e[this.name].getOnCompleteCallback();
                    d && this.onCompleteCallback(d)
                }
            }
        }, a.prototype.isCompleted = function() {
            return e[this.name].isCompleted()
        }, a.prototype.isPaused = function() {
            return e[this.name].isPaused()
        }, a.prototype.isReady = function() {
            return e[this.name].isReady()
        }, a.prototype.isRunning = function() {
            return e[this.name].isRunning()
        }, a.prototype.pauseText = function() {
            e[this.name].isRunning() && this.telemetryHandler.pause(e[this.name].getCurrentText(), e[this.name].getCurrentTextSpeed()), e[this.name].pauseText()
        }, a.prototype.resetDisplay = function() {
            e[this.name].reset()
        }, a.prototype.resetText = function() {
            null != e[this.name].getCurrentText() && (e[this.name].pauseText(), this.telemetryHandler.stop(e[this.name].getCurrentText(), e[this.name].getCurrentTextSpeed()), e[this.name].resetText())
        }, a.prototype.resetUser = function() {
            this.pauseText(), this.telemetryHandler.resetUser()
        }, a.prototype.resumeText = function(a) {
            (e[this.name].isReady() || e[this.name].isPaused()) && this.telemetryHandler.start(e[this.name].getCurrentText(), e[this.name].getCurrentTextSpeed()), e[this.name].resumeText(a)
        }, a.prototype.seek = function(a, b) {
            var c, d = this.getCurrentText();
            return d ? d.seek(a, b) ? (e[this.name].pauseText(), this.telemetryHandler.seek(this.getCurrentText(), e[this.name].getCurrentTextSpeed()), e[this.name].reset(), c = !0) : (i.utils.debug(2, name + "SpritzText.seek() failed"), c = !1) : (i.utils.debug(2, name + "Cannot seek because text is null"), c = !1), c
        }, {
            SpritzDisplayProxy: a
        }
    }), i.namespace("SPRITZ.spritzinc"), i.addToNamespace(i.spritzinc, function() {
        function a(a) {
            this.client = a, this.userAgent = navigator.userAgent, this.sessionId = o(), this.viewingSessionId = null, this.contentVersionId = null, this.items = [], this.eventId = 0, this.storageHandler = new i.datastore.StorageHandler, this.startTime = (new Date).getTime(), this.updateTime = this.startTime, this.inactivityTimeout = null, this.userId = null, this.userType = null, this.started = !1, this.batchDelay = v.BATCH_DELAY, b.call(this), p.call(this, this.startTime)
        }

        function b() {
            this.userType = null, null !== this.client && (this.userId = this.client.getUserId(), null !== this.userId ? this.userType = "u" : (this.userId = this.client.getGuestId(), null !== this.userId && (this.userType = "g")))
        }

        function c() {
            this.inactivityTimeout = setTimeout(j.createDelegate(this, e), v.BATCH_TIMEOUT)
        }

        function d() {
            null !== this.inactivityTimeout && (clearTimeout(this.inactivityTimeout), this.inactivityTimeout = null)
        }

        function e() {
            i.utils.debug(3, "Processing inactivity timeout with [" + this.items.length + "] item(s)"), this.items.length > 0 && f.call(this)
        }

        function f() {
            d.call(this), g.call(this, this.items), this.items = [], this.startTime = (new Date).getTime()
        }

        function g(a) {
            var b = new i.model.TelemetryBatch(this.userAgent, a);
            this.client.sendTelemetry(b, j.createDelegate(this, h), j.createDelegate(this, k))
        }

        function h(a, b) {
            var c = a.clientEvents[0].sessionId,
                d = a.clientEvents[0].data.contentVersionId;
            b.length < a.clientEvents.length && i.utils.debug(2, "Failed to process [" + (a.clientEvents.length - b.length) + "] item(s)");
            for (var e = 0, f = b.length; f > e; e += 1) 0 === this.storageHandler.remove(l(c, d, b[e])) && i.utils.debug(2, "Failed to remove item [" + b[e] + "]")
        }

        function k(a, b) {
            i.utils.debug(2, "Failed to send batch [" + b.message + "]"), s.call(this, a.clientEvents)
        }

        function l(a, b, c) {
            return v.TELEMETRY_KEY + "." + a + "." + b + "." + c
        }

        function m(a) {
            return "undefined" == typeof a ? new Date : a
        }

        function n(a) {
            return (new Date).getTime() - a
        }

        function o() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(a) {
                var b = 16 * Math.random() | 0,
                    c = "x" === a ? b : 3 & b | 8;
                return c.toString(16)
            })
        }

        function p(a) {
            for (var b = "", c = "", d = "", e = r.call(this, a), f = [], g = [], h = 0, i = e.length; i > h; h += 1) {
                var j = e[h];
                (j.user !== b || j.sessionId !== c || j.data.contentVersionId !== d || g.length >= v.BATCH_SIZE) && (g.length > 0 && (f.push(g), g = []), b = j.user, c = j.sessionId, d = j.data.contentVersionId), g.push(j)
            }
            g.length > 0 && f.push(g), f.length > 0 && q.call(this, f)
        }

        function q(a) {
            var b = a[0];
            b[0].user === this.getUserId() ? g.call(this, b) : s.call(this, b), a.length > 1 && (a.splice(0, 1), this.batchDelay > 0 ? setTimeout(j.createDelegate(this, function() {
                q.call(this, a)
            }), this.batchDelay) : q.call(this, a))
        }

        function r(a) {
            for (var b = this.storageHandler.select(v.TELEMETRY_KEY).sort(t), c = b.length - 1; c >= 0; c--) {
                var d = b[c],
                    e = "Date" == typeof d.time ? d.time : new Date(d.time);
                e.getTime() >= a && b.splice(c, 1)
            }
            return b
        }

        function s(a) {
            for (var b = 0, c = a.length; c > b; b += 1) {
                var d = a[b];
                n(new Date(d.time).getTime()) > v.HOLDING_PERIOD && 0 === this.storageHandler.remove(l(d.sessionId, d.data.contentVersionId, d.id)) && i.utils.debug(2, "Failed to remove item [" + d + "]")
            }
        }

        function t(a, b) {
            var c;
            return c = a.user > b.user ? 1 : a.user < b.user ? -1 : a.sessionId > b.sessionId ? 1 : a.sessionId < b.sessionId ? -1 : a.data.contentVersionId > b.data.contentVersionId ? 1 : a.data.contentVersionId < b.data.contentVersionId ? -1 : a.id > b.id ? 1 : a.id < b.id ? -1 : a.time > b.time ? 1 : a.time < b.time ? -1 : 0
        }
        var u = Object.freeze({
                VIEW_START: "SpritzViewStart",
                START: "SpritzStart",
                STOP: "SpritzStop",
                PAUSE: "SpritzPause",
                BACKUP: "SpritzBackup",
                FORWARD: "SpritzForward",
                REWIND: "SpritzRewind",
                SEEK: "SpritzSeek",
                SPEED: "SpritzSpeed",
                GOTOEND: "SpritzEnd"
            }),
            v = Object.freeze({
                ANONYMOUS: "anonymous",
                TELEMETRY_KEY: "telemetry",
                BATCH_SIZE: 50,
                BATCH_TIMEOUT: 6e4,
                BATCH_DELAY: 1e4,
                HOLDING_PERIOD: 6048e5
            });
        return a.prototype.resetUser = function() {
            this.items.length > 0 && f.call(this), this.userId = null, this.userType = null
        }, a.prototype.viewStart = function(a, b) {
            this.checkPreviousContent(a), this.viewingSessionId = o(), this.contentVersionId = a.getContentVersionId(), this.items = [];
            var c = new Date;
            this.startTime = c.getTime(), this.storeEvent(u.VIEW_START, a, b, c), this.started = !0
        }, a.prototype.start = function(a, b) {
            this.checkPreviousContent(a), this.storeEvent(u.START, a, b), this.started = !0
        }, a.prototype.stop = function(a, b) {
            this.started && (this.storeEvent(u.STOP, a, b, void 0, a.hasNextWord()), this.started = !1), this.items.length > 0 && f.call(this)
        }, a.prototype.pause = function(a, b) {
            this.checkPreviousContent(a), this.storeEvent(u.PAUSE, a, b), this.started = !0
        }, a.prototype.backup = function(a, b) {
            this.checkPreviousContent(a), this.storeEvent(u.BACKUP, a, b), this.started = !0
        }, a.prototype.forward = function(a, b) {
            this.checkPreviousContent(a), this.storeEvent(u.FORWARD, a, b), this.started = !0
        }, a.prototype.rewind = function(a, b) {
            this.checkPreviousContent(a), this.storeEvent(u.REWIND, a, b), this.started = !0
        }, a.prototype.end = function(a, b) {
            this.checkPreviousContent(a), this.storeEvent(u.GOTOEND, a, b), this.started = !0
        }, a.prototype.seek = function(a, b) {
            this.checkPreviousContent(a), this.storeEvent(u.SEEK, a, b), this.started = !0
        }, a.prototype.changeSpeed = function(a, b, c) {
            this.checkPreviousContent(a), this.storeEvent(u.SPEED, a, b, void 0, void 0, {
                newSpeed: c
            }), this.started = !0
        }, a.prototype.checkPreviousContent = function(a) {
            this.items.length > 0 && (null !== this.contentVersionId && this.contentVersionId !== a.getContentVersionId() || n(this.startTime) >= v.BATCH_TIMEOUT) && f.call(this)
        }, a.prototype.storeEvent = function(a, b, e, g, h, j) {
            if (null !== this.getUserId() && null !== this.client) {
                d.call(this), this.eventId += 1;
                var k = b.hasNextWord() ? b.getCurrentWord().position : -1,
                    n = l(this.sessionId, this.contentVersionId, this.eventId),
                    o = new i.model.TelemetryItem(this.eventId, this.getUserId(), this.userType, this.sessionId, this.viewingSessionId, this.contentVersionId, m(g), a, k, e, h, j);
                try {
                    this.storageHandler.put(n, o)
                } catch (p) {
                    i.utils.debug(3, "Error writing event to localStorage: ", p)
                }
                this.items.push(o), i.utils.debug(3, "Added item: " + JSON.stringify(o)), this.updateTime = (new Date).getTime(), this.items.length >= v.BATCH_SIZE && f.call(this), c.call(this)
            }
        }, a.prototype.getUserId = function() {
            return null === this.userId && b.call(this), this.userId
        }, {
            TelemetryHandler: a,
            batchTimeout: v.BATCH_TIMEOUT,
            batchSize: v.BATCH_SIZE,
            holdingPeriod: v.HOLDING_PERIOD,
            EventTypeEnum: u,
            submitPendingItems: p,
            sendBatchSuccess: h,
            sendBatchFailure: k
        }
    }), i.namespace("SPRITZ.template"), i.addToNamespace(i.template, function() {
        function a(a) {
            var b = a,
                c = b.match(/{{\s*[\w\.]+\s*}}/g);
            return null === c || c.map(function(a) {
                var c = a.match(/[\w\.]+/)[0];
                f[c] || i.utils.debug(1, "Can't find constant: ", f[c]), b = b.replace(new RegExp(a, "g"), f[c])
            }), b
        }

        function b(b) {
            var c = "";
            return c += d(b), c += a('<div class="{{LOADING_OVERLAY}}"></div>'), c += '<div class="spritzer-preloaded spritzer-btn-pause"></div>'
        }

        function c(b) {
            var c = "";
            return c += '<div class="spritzer-controls-container">', c += a('<div class="{{SPEED_CONTAINER}}" data-role="select"></div>'), c += e(b), c += '<div class="spritzer-force-font" style="font-family:SpritzMedienMedium">.</div>', c += "</div>"
        }

        function d(b) {
            var c = '<div class="spritzer-header">';
            return c += '<a class="spritzer-logo" href="http://www.spritzinc.com" target="_blank"></a>', b.header.login && (c += a('<a class="{{BTN_LOGIN}} {{LOGGEDIN}}">Login</a>'), c += a('<div class="{{USER}}"></div>')), b.header.close && (c += '<span class="spritzer-close">&#215</span>'), c += "</div>"
        }

        function e(a) {
            var b = "";
            b += '<div class="spritzer-preload spritzer-btn-pause">a</div>', b += '<div class="spritzer-button-container spritzer-btns-' + a.controlButtons.length + '">';
            for (var c = 0, d = a.controlButtons.length; d > c; c += 1) {
                var e = a.controlButtons[c],
                    f = a.controlTitles[e];
                b += '<div class="spritzer-control-' + e + '" title="' + f + '"></div>'
            }
            return b += "</div>"
        }
        var f = i.constants.CSSClasses;
        i.constants.Constants;
        return {
            buildHtml1: b,
            buildHtml2: c,
            interpolate: a
        }
    }), i.namespace("SPRITZ.spritzinc"), i.addToNamespace(i.spritzinc, function() {
        function a(c, e) {
            return this instanceof a ? (this.spritzClient = e ? e : b.SpritzClient || null, this.loading = !1, this.container = null, this.parentContainer = null, this.spritzPanel = null, this.loadingOverlay = null, this.pausePlayBtn = null, this.rewindBtn = null, this.backBtn = null, this.forwardBtn = null, this.pauseTitle = null, this.playTitle = null, this.progressReporter = null, this.seekPosition = null, this.seekMode = null, this.playOnFetchSuccess = !1, this.speedSelector = null, this.defaults = W, this.options, f.call(this, c), void d.call(this, !0)) : new a(c, e)
        }

        function d(a) {
            var b = this,
                c = this.options;
            this.container = e(c);
            var d = this.container.querySelector("." + U.CANVAS_CONTAINER);
            c.redicle.clickable && d.addEventListener("redicleClick", j.createDelegate(this, t)), null === this.spritzPanel ? this.spritzPanel = new i.display.SpritzDisplayProxy(d, c, b.spritzClient) : this.spritzPanel.reloadRedicle(d, c), this.loadingOverlay = this.container.querySelector("." + U.LOADING_OVERLAY), this.pausePlayBtn = this.container.querySelector("." + U.BTN_PAUSEPLAY), this.rewindBtn = this.container.querySelector("." + U.BTN_REWIND), this.backBtn = this.container.querySelector("." + U.BTN_BACK), this.forwardBtn = this.container.querySelector("." + U.BTN_FORWARD), this.endBtn = this.container.querySelector("." + U.BTN_END), c.header.close && (this.closeBtn = this.container.querySelector("." + U.BTN_CLOSE), c.header.closeHandler && (c.header.closeHandler = j.createDelegate(b, c.header.closeHandler)), this.closeBtn.addEventListener("click", c.header.closeHandler || this.hideSpritzer.bind(b)));
            for (var f = {
                pauseplay: l,
                rewind: m,
                back: n,
                forward: o,
                end: p,
                redicle: t
            }, g = (c.controlButtons, 0), h = c.controlButtons.length; h > g; g += 1) this.container.querySelector("." + U.BTN_BASE + c.controlButtons[g]).addEventListener("click", j.createDelegate(this, f[c.controlButtons[g]]));
            var k = this.container.querySelector("." + U.SPEED_CONTAINER);
            if ("DropDown" === c.speedSelector ? this.speedSelector = new i.spritzinc.DropDownSpeedSelector(k, c) : i.utils.debug(1, "Invalid speedSelector specified [" + c.speedSelector + "]"),
            this.speedSelector && (M.call(this) || this.speedSelector.restrict(), k.addEventListener("speedChange", j.createDelegate(this, v))), this.progressReporter = j.createDelegate(this, N), O.call(this), I.call(this, !1), this.pauseTitle = c.controlTitles.pause, this.playTitle = c.controlTitles.play, c.header.login) {
                this.container.querySelector("." + U.BTN_LOGIN).addEventListener("click", j.createDelegate(this, q));
                var u = this.container.querySelector("." + U.USER),
                    w = new i.spritzinc.DropDownSelect(u, {}, U.USER_BTN, U.USER_TEXT, U.USER_LIST),
                    x = V.createLi(U.BTN_LOGOUT, "Logout");
                w.addOption(x), x.addEventListener("click", j.createDelegate(this, s)), P.call(this, this.spritzClient.isUserLoggedIn())
            }
            b.spritzClient && null !== b.spritzClient && b.spritzClient.on("loginStateChanged", r.bind(this));
            var y;
            y = a ? c.defaultSpeed || (this.speedSelector ? this.speedSelector.getSpeed() : void 0) : this.speedSelector ? this.speedSelector.getSpeed() : c.defaultSpeed || c.defaultSpeed, y && this.setSpeed(y)
        }

        function e(a) {
            for (var b = V.createDiv(U.SPRITZER_CONTAINER), c = V.parseHTML(i.template.buildHtml1(a)); c.length > 0;) b.appendChild(c[0]);
            for (b.appendChild(V.createDiv(U.CANVAS_CONTAINER)), c = V.parseHTML(i.template.buildHtml2(a)); c.length > 0;) b.appendChild(c[0]);
            return b
        }

        function f(a, b) {
            var c = V.extend({}, this.defaults);
            if (b === !0 && (c = this.getOptions() || this.defaults), a && "object" == typeof a) {
                if (this.options = V.extend({}, c, a), i.utils.setDebugLevel(this.options.debugLevel), a && a.redicle) {
                    var d = V.extend(c.redicle, a.redicle);
                    this.options.redicle = d
                }
                if (a.redicle && (a.redicle.redicleLineWidth && !this.options.redicle.crossHairWidth && (this.options.redicle.crossHairWidth = a.redicle.redicleLineWidth), a.redicle.redicleLineColor && !this.options.redicle.crossHairColor && (this.options.redicle.crossHairColor = a.redicle.redicleLineColor)), a && a.placeholderText) {
                    var e = V.extend(c.placeholderText, a.placeholderText);
                    this.options.placeholderText = e
                }
            } else this.options = c;
            return this.options
        }

        function g() {
            this.responsiveAttached = !0, this.onResize(function(a) {
                console;
                var b = this,
                    c = function(a, c) {
                        console, b.applyOptions({
                            redicleWidth: Math.round(a),
                            redicleHeight: Math.round(c)
                        }, !0)
                    },
                    d = a.containerWidth - a.redicleWidth,
                    e = a.windowWidth - d;
                a.windowWidth <= a.containerWidth ? c(e, e * a.aspectRatio) : a.windowWidth > a.containerWidth && e <= a.originalRedicleWidth && c(e, e * a.aspectRatio)
            }, "resize.spritzInternal")
        }

        function h(a) {
            if (V.hide(this.loadingOverlay), this.loading = !1, V.removeClass(this.pausePlayBtn, U.BTN_DISABLED), null !== this.seekPosition && a.seek(this.seekPosition, this.seekMode), this.playOnFetchSuccess ? (this.startSpritzing(a), O.call(this, !0), I.call(this, !0)) : this.setSpritzText(a), i.utils.isMobileSafari()) {
                var b = this.container.querySelector("." + U.CANVAS_CONTAINER);
                this.spritzPanel.reloadRedicle(b, this.options)
            }
            this.playOnFetchSuccess = !1
        }

        function k(a) {
            V.hide(this.loadingOverlay), this.loading = !1, V.removeClass(this.pausePlayBtn, U.BTN_DISABLED), this.playOnFetchSuccess = !1, i.utils.debug(1, "Unable to spritz: " + a.message)
        }

        function l() {
            var pauseBtn = L(this.pausePlayBtn);
            if (null == this.spritzPanel.getCurrentText()) pauseBtn && T.call(this) && this.loadText(!0);
            else if (pauseBtn)
                if (this.spritzPanel.isPaused() || this.spritzPanel.isReady()) {
                    var b = this.spritzPanel.getCurrentText();
                    b && 0 === b.getCurrentIndex() && E.call(this), O.call(this, !0), this.resumeSpritzing()
                } else this.spritzPanel.pauseText(), O.call(this), I.call(this, !1), x.call(this, this.pauseTitle)
        }

        function m(a) {
            if (L(this.rewindBtn)) {
                this.spritzPanel.isRunning() && x.call(this, this.pauseTitle);
                var b = this.spritzPanel.getCurrentPosition();
                "undefined" == typeof this.rewindClickHandler ? this.spritzPanel.goToFirstWord() : this.rewindClickHandler(), O.call(this), I.call(this, !1), y.call(this, b)
            }
        }

        function n() {
            if (L(this.backBtn)) {
                this.spritzPanel.isRunning() && x.call(this, this.pauseTitle);
                var a = this.spritzPanel.getCurrentPosition();
                "undefined" == typeof this.backClickHandler ? this.spritzPanel.goToPreviousSentence() : this.backClickHandler(), O.call(this), I.call(this, !1), z.call(this, a)
            }
        }

        function o() {
            if (L(this.forwardBtn)) {
                this.spritzPanel.isRunning() && x.call(this, this.pauseTitle);
                var a = this.spritzPanel.getCurrentPosition();
                "undefined" == typeof this.forwardClickHandler ? this.spritzPanel.goToNextSentence() : this.forwardClickHandler(), O.call(this), I.call(this, !1), A.call(this, a)
            }
        }

        function p() {
            if (L(this.endBtn)) {
                this.spritzPanel.isRunning() && x.call(this, this.pauseTitle);
                var a = this.spritzPanel.getCurrentPosition();
                "undefined" == typeof this.endClickHandler ? this.spritzPanel.goToEnd() : this.endClickHandler(), O.call(this), I.call(this, !1), B.call(this, a)
            }
        }

        function q() {
            this.spritzPanel.resetUser(), this.spritzClient.userLogin(function() {
                i.utils.debug(3, "Login success")
            }, function(a) {
                i.utils.debug(1, "Login failure [" + a + "]")
            })
        }

        function r() {
            P.call(this, this.spritzClient.isUserLoggedIn()), O.call(this), I.call(this, !1), H.call(this, this.spritzClient.isUserLoggedIn() ? "login" : "logout")
        }

        function s() {
            this.spritzPanel.resetUser(), this.spritzClient.userLogout()
        }

        function t() {
            if (null == this.spritzPanel.getCurrentText()) L(this.pausePlayBtn) && T.call(this) && this.loadText(!0);
            else if (L(this.pausePlayBtn) && this.spritzPanel.getCurrentText().hasNextWord())
                if (this.spritzPanel.isPaused() || this.spritzPanel.isReady()) {
                    var a = this.spritzPanel.getCurrentText();
                    a && 0 === a.getCurrentIndex() && E.call(this), this.resumeSpritzing(), O.call(this, !0)
                } else this.spritzPanel.pauseText(), O.call(this), I.call(this, !1), C.call(this, this.pauseTitle);
            else this.spritzPanel.goToFirstWord(), this.resumeSpritzing(), O.call(this, !0)
        }

        function u() {
            O.call(this), I.call(this, !1), D.call(this)
        }

        function v(a) {
            var b = a.detail.speed;
            b && (this.spritzPanel.setCurrentTextSpeed(b), F.call(this))
        }

        function w(a, b) {
            var c = {
                position: this.spritzPanel.getCurrentPosition()
            };
            "undefined" != typeof b && (c.pausePosition = b), null != this.parentContainer && V.dispatchEvent(this.parentContainer, "onSpritz" + a, c)
        }

        function x(a) {
            w.call(this, a)
        }

        function y(a) {
            w.call(this, "Rewind", a)
        }

        function z(a) {
            w.call(this, "Back", a)
        }

        function A(a) {
            w.call(this, "Forward", a)
        }

        function B(a) {
            w.call(this, "GoToEnd", a)
        }

        function C(a) {
            w.call(this, a)
        }

        function D() {
            null != this.parentContainer && V.dispatchEvent(this.parentContainer, "onSpritzComplete")
        }

        function E() {
            null != this.parentContainer && V.dispatchEvent(this.parentContainer, "onSpritzStart")
        }

        function F() {
            null != this.parentContainer && V.dispatchEvent(this.parentContainer, "onSpritzSpeedChange", {
                speed: this.spritzPanel.getCurrentTextSpeed()
            })
        }

        function G(a) {
            null != this.parentContainer && V.dispatchEvent(this.parentContainer, "onSpritzProgressChange", {
                percentComplete: a
            })
        }

        function H(a) {
            null != this.parentContainer && V.dispatchEvent(this.parentContainer, "onSpritzAuthStateChange", {
                state: a
            }, this.spritzClient)
        }

        function I(a) {
            a ? (V.removeClass(this.pausePlayBtn, U.BTN_PLAY), V.addClass(this.pausePlayBtn, U.BTN_PAUSE), V.setTitle(this.pausePlayBtn, "Pause")) : (V.removeClass(this.pausePlayBtn, U.BTN_PAUSE), V.addClass(this.pausePlayBtn, U.BTN_PLAY), V.setTitle(this.pausePlayBtn, "Play"))
        }

        function J(a) {
            return a.jquery && (a = a[0]), a.SpritzerController
        }

        function K(a) {
            var b = c.querySelectorAll('[data-role="spritzer"]');
            Array.prototype.forEach.call(b, function(b, c) {
                var d = b.getAttribute("data-options");
                if (d) try {
                    d = JSON.parse(d), "object" != typeof d && (d = null)
                } catch (e) {
                    i.utils.debug(2, "Failed to parse options [" + e.message + "]"), d = null
                } else d = null;
                var f = new i.spritzinc.SpritzerController(d, a);
                f.attach(b)
            })
        }

        function L(a) {
            return !V.hasClass(a, U.BTN_DISABLED)
        }

        function M() {
            return this.spritzClient ? this.spritzClient.isUserLoggedIn() || this.spritzClient.anonymousEnabled : (i.utils.debug(2, "No SpritzClient defined."), !1)
        }

        function N(a, b) {
            var c = 100 * a,
                d = c / b;
            100 >= b ? G.call(this, d) : 100 > c % b && G.call(this, d)
        }

        function O(a) {
            null == this.spritzPanel.getCurrentText() || 0 == this.spritzPanel.getCurrentText().getWords().length ? (T.call(this) && this.hasSource() ? V.removeClass(this.pausePlayBtn, U.BTN_DISABLED) : V.addClass(this.pausePlayBtn, U.BTN_DISABLED), V.addClass(this.rewindBtn, U.BTN_DISABLED), V.addClass(this.backBtn, U.BTN_DISABLED), V.addClass(this.forwardBtn, U.BTN_DISABLED), V.addClass(this.endBtn, U.BTN_DISABLED)) : a || this.spritzPanel.getCurrentPosition() > 0 && this.spritzPanel.getCurrentText().hasNextWord() ? (V.removeClass(this.pausePlayBtn, U.BTN_DISABLED), V.removeClass(this.rewindBtn, U.BTN_DISABLED), V.removeClass(this.backBtn, U.BTN_DISABLED), V.removeClass(this.forwardBtn, U.BTN_DISABLED), V.removeClass(this.endBtn, U.BTN_DISABLED)) : 0 == this.spritzPanel.getCurrentPosition() ? (V.removeClass(this.pausePlayBtn, U.BTN_DISABLED), V.addClass(this.rewindBtn, U.BTN_DISABLED), V.addClass(this.backBtn, U.BTN_DISABLED), V.removeClass(this.forwardBtn, U.BTN_DISABLED), V.removeClass(this.endBtn, U.BTN_DISABLED)) : this.spritzPanel.getCurrentText().hasNextWord() || (V.addClass(this.pausePlayBtn, U.BTN_DISABLED), V.removeClass(this.rewindBtn, U.BTN_DISABLED), V.removeClass(this.backBtn, U.BTN_DISABLED), V.addClass(this.forwardBtn, U.BTN_DISABLED), V.addClass(this.endBtn, U.BTN_DISABLED))
        }

        function P(a) {
            var b = this.container.querySelector("." + U.BTN_LOGIN),
                c = this.container.querySelector("." + U.USER_BTN);
            V.removeClass(b, a ? U.LOGGEDOUT : U.LOGGEDIN), V.addClass(b, a ? U.LOGGEDIN : U.LOGGEDOUT), V.removeClass(c, a ? U.LOGGEDIN : U.LOGGEDOUT), V.addClass(c, a ? U.LOGGEDOUT : U.LOGGEDIN), a ? V.setSpanHtml(this.container.querySelector("." + U.USER_TEXT), this.spritzClient.getUserName()) : V.setSpanHtml(this.container.querySelector("." + U.USER_TEXT), ""), Q.call(this)
        }

        function Q() {
            M.call(this) ? this.speedSelector.unrestrict() : this.speedSelector.restrict()
        }

        function R(a) {
            return this.parentContainer.getAttribute("data-" + a)
        }

        function S(a, b) {
            return this.parentContainer.setAttribute("data-" + a, b)
        }

        function T() {
            var a;
            return this.parentContainer && (a = "spritzer" === R.call(this, "role") ? !0 : !1), a
        }
        var U = i.constants.CSSClasses,
            V = (i.constants.Constants, i.helper),
            W = {
                debugLevel: 1,
                redicleWidth: 340,
                redicleHeight: 70,
                responsive: !1,
                responsiveDebounce: 50,
                defaultSpeed: 250,
                speedItems: [250, 300, 350, 400, 450, 500, 550, 600],
                speedSelector: "DropDown",
                header: {
                    login: !0,
                    close: !1,
                    closeHandler: null
                },
                controlButtons: ["rewind", "back", "pauseplay", "forward"],
                controlTitles: {
                    pause: "Pause",
                    play: "Play",
                    rewind: "Back to Beginning",
                    back: "Previous Sentence",
                    forward: "Next Sentence",
                    end: "Go to End"
                },
                placeholderText: {
                    startText: "Click to spritz",
                    startTextColor: "#bababa",
                    endText: "",
                    endTextColor: "#bababa"
                },
                redicle: {
                    clickable: !0,
                    sizeable: !0,
                    loadFonts: !0,
                    fontName: "SpritzMedienMedium",
                    backgroundColor: "#ffffff",
                    textNormalPaintColor: "#333",
                    textHighlightPaintColor: "#cc0001",
                    redicleLine: !0,
                    redicleLineColor: "#000",
                    redicleLineWidth: 1,
                    crossHair: !0,
                    crossHairColor: "#000",
                    crossHairWidth: 1,
                    crossHairHeight: .1,
                    crossHairHorizontalPosition: .35,
                    countdownTime: 750,
                    countdownSlice: 5,
                    countdownColor: "rgba(0,0,0,0.1)"
                }
            };
        return a.prototype.attach = function(a) {
            return a.jquery && (a = a[0]), this.parentContainer = a, V.hasClass(a, U.ROOT) || V.addClass(a, U.ROOT), a.appendChild(this.container), a.SpritzerController = this, this.spritzClient && this.hasSource() && T.call(this) && (I.call(this, !1), V.removeClass(this.pausePlayBtn, U.BTN_DISABLED)), P.call(this, this.spritzClient.isUserLoggedIn()), this.options.responsive && !this.responsiveAttached && (b.removeEventListener("resize.spritzInternal"), g.call(this)), this
        }, a.prototype.detach = function() {
            var a = this.parentContainer;
            return a.removeChild(this.container), a.SpritzerController = null, this.parentContainer = null, a
        }, a.prototype.hasSource = function() {
            var a;
            if (null === this.spritzPanel.getCurrentText()) {
                var b = this.getUrl();
                a = null === b || "undefined" == typeof b || b.length > 0
            } else a = !0;
            return a
        }, a.prototype.loadText = function(a, b) {
            var c;
            if (!this.spritzClient || this.loading) c = !1;
            else {
                this.spritzPanel.isRunning() && this.pauseSpritzing(), b || (b = {});
                var d = this.getUrl() || b.url,
                    e = R.call(this, "selector") || b.selector,
                    f = R.call(this, "selectortype") || b.selectorType;
                d || (d = location.href), 0 == d.length ? c = !1 : (this.loading = !0, V.addClass(this.pausePlayBtn, U.BTN_DISABLED), this.playOnFetchSuccess = a, V.show(this.loadingOverlay), this.spritzClient.fetchContents(d, h.bind(this), k.bind(this), e, f), c = !0)
            }
            return c
        }, a.prototype.getSpritzText = function() {
            return this.spritzPanel.getCurrentText()
        }, a.prototype.setSpritzText = function(a) {
            null === a ? (O.call(this, !1), null != this.spritzClient && this.hasSource() && (I.call(this, !0), V.removeClass(this.pausePlayBtn, U.BTN_DISABLED))) : (null == a.getProgressTracker() && a.setProgressTracker(this.progressReporter), this.spritzPanel.setCurrentText(a), this.spritzPanel.setOnCompleteCallback(j.createDelegate(this, u)), O.call(this, !1))
        }, a.prototype.getUrl = function() {
            return R.call(this, "url")
        }, a.prototype.setUrl = function(a, b, c) {
            if (this.parentContainer) {
                var d = this.getUrl();
                d && d === a || (this.spritzPanel.resetText(), S.call(this, "url", a), "number" == typeof b ? (this.seekPosition = b, "undefined" == typeof c ? this.seekMode = i.model.SpritzText.SeekType.SENTENCE_START : c === i.model.SpritzText.SeekType.SENTENCE_START || c === i.model.SpritzText.SeekType.ABSOLUTE ? this.seekMode = c : this.seekMode = null) : this.seekPosition = null, O.call(this, !1), this.spritzClient && this.hasSource() && (I.call(this, !1), V.removeClass(this.pausePlayBtn, U.BTN_DISABLED)))
            } else i.utils.debug(1, "setUrl() failed. No parent container set for the controller. Make sure you have attached the controller to an element in the DOM first.")
        }, a.prototype.startSpritzing = function(a) {
            this.spritzPanel.pauseText(), !a && this.spritzPanel.getCurrentText() ? this.spritzPanel.resumeText(!0) : a && (null == a.getProgressTracker() && a.setProgressTracker(this.progressReporter), this.spritzPanel.displayText(a, j.createDelegate(this, u))), O.call(this, !0), I.call(this, !0), E.call(this)
        }, a.prototype.stopSpritzing = function() {
            w.call(this, "Stop"), this.spritzPanel.resetText(), O.call(this), I.call(this, !1)
        }, a.prototype.pauseSpritzing = function() {
            this.spritzPanel.pauseText(), I.call(this, !1), x.call(this, this.pauseTitle)
        }, a.prototype.resumeSpritzing = function() {
            this.spritzPanel.resumeText(), I.call(this, !0), x.call(this, this.playTitle)
        }, a.prototype.getSpeed = function() {
            return this.spritzPanel.getCurrentTextSpeed()
        }, a.prototype.setSpeed = function(a) {
            var b = this.spritzPanel.setCurrentTextSpeed(a);
            return b && this.speedSelector && this.speedSelector.setSpeed(b), b
        }, a.prototype.getHighlightBestLetter = function() {
            return this.spritzPanel.getHighlightBestLetter()
        }, a.prototype.setHighlightBestLetter = function(a) {
            this.spritzPanel.setHighlightBestLetter(a)
        }, a.prototype.getProgressReporter = function() {
            return this.progressReporter
        }, a.prototype.setProgressReporter = function(a) {
            this.progressReporter = a
        }, a.prototype.seek = function(a, b) {
            var c;
            return this.spritzPanel.seek(a, b) ? (O.call(this), I.call(this, !1), c = !0) : c = !1, c
        }, a.prototype.setButtonState = function(a, b) {
            b ? V.removeClass(a, U.BTN_DISABLED) : V.addClass(a, U.BTN_DISABLED)
        }, a.prototype.adjustButtonStates = function(a) {
            O.call(this, "undefined" == typeof a ? this.spritzPanel.isRunning() : a)
        }, a.prototype.adjustPausePlayButton = function(a) {
            I.call(this, "undefined" == typeof a ? this.spritzPanel.isRunning() : a)
        }, a.prototype.showSpritzer = function() {
            this.container.style.display = ""
        }, a.prototype.hideSpritzer = function() {
            this.pauseSpritzing(), this.container.style.display = "none"
        }, a.prototype.applyOptions = function(a, b) {
            var c = this.container,
                e = this.spritzPanel.getCurrentText(),
                g = this.spritzPanel.getOnCompleteCallback(),
                h = this.spritzPanel.getCurrentTextSpeed(),
                i = this.spritzPanel.getHighlightBestLetter(),
                j = this.spritzPanel.getCurrentState(),
                k = this.spritzPanel.isRunning();
            k && this.spritzPanel.pauseText();
            var l = this.parentContainer,
                m = this.getProgressReporter();
            f.call(this, a, b), d.call(this), this.setProgressReporter(m), this.spritzPanel.setOnCompleteCallback(g), this.spritzPanel.setCurrentTextSpeed(h), this.spritzPanel.setHighlightBestLetter(i), this.speedSelector && this.speedSelector.setSpeed(h, !0), c.parentNode && c.parentNode.removeChild(c), this.attach(l), k || this.spritzPanel.setCurrentState(j), e && this.spritzPanel.setCurrentText(e), k && this.spritzPanel.resumeText(!1), O.call(this, k), I.call(this, k)
        }, a.prototype.getProp = function(a) {
            var b = a.split("."),
                c = this.options[b[0]];
            return this.options[b[0]] ? (b.length > 1 && (c = this.options[b[0]][b[1]]), c) : void i.utils.debug(2, "SpritzOptions: the " + a + " property does not exist.")
        }, a.prototype.getOptions = function() {
            return this.options || i.utils.debug(2, "SpritzOptions: no options initialized yet."), this.options
        }, a.prototype.onResize = function(a, c) {
            var d = this,
                e = this.options.redicleWidth,
                f = this.options.redicleHeight,
                g = c || "resize.spritz",
                h = function() {
                    return {
                        aspectRatio: d.options.redicleHeight / d.options.redicleWidth,
                        originalRedicleWidth: e,
                        originalRedicleHeight: f,
                        redicleWidth: d.options.redicleWidth,
                        redicleHeight: d.options.redicleHeight,
                        containerWidth: d.parentContainer.width(),
                        containerHeight: d.parentContainer.height(),
                        windowWidth: b.offsetWidth,
                        windowHeight: b.offsetHeight()
                    }
                },
                i = function() {
                    var b;
                    return function() {
                        b || (b = setTimeout(function() {
                            b = null, a.call(d, h())
                        }, d.options.responsiveDebounce))
                    }
                };
            a && "function" == typeof a && (this.parentContainer && a.call(d, h()), b.addEventListener(g, i()))
        }, {
            SpritzerController: a,
            initSpritzers: K,
            adjustPausePlayButton: I,
            setButtonStates: O,
            getSpritzerController: J,
            init: d
        }
    }), i.namespace("SPRITZ.bookmark"), i.addToNamespace(i.bookmark, function() {
        function a(a, c) {
            this.spritzerController = a, this.bookStores = null, this.currentBookStore = null, this.currentChapterName = null, this.options = null, b.call(this, c)
        }

        function b(a) {
            this.options = F(a), this.bookStores = d.call(this, this.spritzerController)
        }

        function d(a) {
            for (var b = {}, d = c.querySelectorAll(this.options.book), f = 0, k = d.length; k > f; f += 1) {
                var l = d[f],
                    m = l.querySelector(this.options.bookTitle),
                    s = h(m.querySelector(this.options.bookName)),
                    u = m.querySelector(this.options.totalTime),
                    v = m.querySelector(this.options.remainingTime),
                    w = new i.bookmark.BookStore(s, g(u, v));
                b[s] = w, e.call(this, l, w);
                var x = a.parentContainer;
                x.addEventListener("onSpritzPause", j.createDelegate(this, n)), x.addEventListener("onSpritzRewind", j.createDelegate(this, q)), x.addEventListener("onSpritzBack", j.createDelegate(this, o)), x.addEventListener("onSpritzForward", j.createDelegate(this, p)), x.addEventListener("onSpritzComplete", j.createDelegate(this, r)), x.addEventListener("onSpritzSpeedChange", j.createDelegate(this, t))
            }
            return b
        }

        function e(a, b) {
            for (var d = c.querySelectorAll(this.options.bookChapter), e = 0, i = d.length; i > e; e += 1) {
                var j = d[e],
                    l = j.getAttribute("data-url"),
                    m = j.getAttribute("data-selector"),
                    n = j.querySelector(this.options.statusImage),
                    o = j.querySelector(this.options.chapterName),
                    p = h(o),
                    q = j.querySelector(this.options.totalTime),
                    r = j.querySelector(this.options.remainingTime),
                    s = f(l, m),
                    t = g(q, r, n, o);
                b.addChapter(p, s, t), k.call(this, b, p, s, t), n.addEventListener("click", u.bind(this, b, p)), o.addEventListener("click", v.bind(this, b, p))
            }
        }

        function f(a, b) {
            return {
                url: a,
                selector: b
            }
        }

        function g(a, b, c, d) {
            return {
                totalTime: a,
                remainingTime: b,
                bookmarkElement: c,
                chapterElement: d
            }
        }

        function h(a) {
            var b = a.getAttribute("data-name");
            return ("undefined" == typeof b || null === b || "" === b) && (b = a.textContent), b
        }

        function k(a, b, c) {
            var d = this,
                e = function(e) {
                    i.utils.debug(3, "BookController.onFetchInfoSuccess: " + e.getWordCount() + ", " + e.getDuration()), c.text = e, y.call(d, a, b)
                },
                f = function(a) {
                    i.utils.debug(1, "BookController.onFetchInfoError: " + a.message)
                };
            SpritzClient.fetchContents2(c.url, e, f, {
                selector: c.selector,
                selectorType: "CSS",
                includePlainText: !1,
                includeSpritzableText: !1
            })
        }

        function l(a, b, c) {
            var d = function(d) {
                    i.utils.debug(3, "BookController.fetchTextAndStartSpritzing"), c.text = d, m.call(this, a, b, c)
                },
                e = function(a) {
                    i.utils.debug(1, "BookController.fetchTextAndStartSpritzing: " + a.message)
                };
            SpritzClient.fetchContentsByContentId(c.text.contentId, j.createDelegate(this, d), e)
        }

        function m(a, b, c) {
            null != this.currentBookStore && null != this.currentChapterName && G.removeClass(this.currentBookStore.getControls(this.currentChapterName).chapterElement, this.options.textHighlighter), G.addClass(a.getControls(b).chapterElement, this.options.textHighlighter), this.currentBookStore = a, this.currentChapterName = b;
            var d = c.text.clone(),
                e = a.getPosition(b);
            null !== e && d.setCurrentIndex(e), d.hasNextWord() ? this.spritzerController.startSpritzing(d) : this.spritzerController.setSpritzText(d)
        }

        function n(a) {
            s.call(this, a.detail.position)
        }

        function o(a) {
            s.call(this, a.detail.position)
        }

        function p(a) {
            s.call(this, a.detail.position)
        }

        function q(a) {
            s.call(this, a.detail.position)
        }

        function r(a) {
            this.currentBookStore.setCompleted(this.currentChapterName), y.call(this, this.currentBookStore, this.currentChapterName)
        }

        function s(a) {
            var b = this.spritzerController.getSpritzText().getPreviousSentenceStart(a, 1);
            this.currentBookStore.setPosition(this.currentChapterName, b), y.call(this, this.currentBookStore, this.currentChapterName)
        }

        function t(a) {
            i.utils.debug(3, "BookController.onSpeedChange");
            var b = a.detail.speed;
            for (var c in this.bookStores)
                if (this.bookStores.hasOwnProperty(c)) {
                    var d = this.bookStores[c];
                    z(this.bookStores[c], b);
                    for (var e in d.getChapters()) A(d, e, b)
                }
        }

        function u(a, b) {
            i.utils.debug(3, "BookController.onBookmarkClick"), w.call(this, a, b, a.getContent(b))
        }

        function v(a, b) {
            i.utils.debug(3, "BookController.onChapterClick");
            w.call(this, a, b, a.getContent(b))
        }

        function w(a, b, c) {
            i.utils.debug(3, "BookController.handleContentClick");
            var d = this;
            if ("undefined" == typeof c.text) {
                var e = function(e) {
                        i.utils.debug(4, "BookController.handleContentClick"), c.text = e, y.call(d, a, b)
                    },
                    f = function(a) {
                        i.utils.debug(3, "BookController.handleContentClick: " + a.message)
                    };
                SpritzClient.fetchContents(c.url, e, f, c.selector)
            } else c.text.isLoaded() ? m.call(this, a, b, c) : l.call(this, a, b, c)
        }

        function x() {
            var a = this.spritzerController.getSpeed();
            return 0 >= a && (a = 250), a
        }

        function y(a, b) {
            var c = x.call(this);
            z(a, c), A(a, b, c), D.call(this, a, b), E.call(this, a, b)
        }

        function z(a, b) {
            B(a.controls.totalTime, i.utils.timeToString(a.getTotalTotalTime(b))), B(a.controls.remainingTime, i.utils.timeToString(a.getTotalRemainingTime(b)))
        }

        function A(a, b, c) {
            var d = a.getControls(b),
                e = i.utils.timeToString(a.getTotalTime(b, c));
            B(d.totalTime, e), C(d.chapterElement, "Total Time: " + e);
            var f = i.utils.timeToString(a.getRemainingTime(b, c));
            B(d.remainingTime, f), C(d.bookmarkElement, "Remaining Time: " + f)
        }

        function B(a, b) {
            null !== a && (a.textContent = b)
        }

        function C(a, b) {
            null !== a && (a.title = b)
        }

        function D(a, b) {
            a.hasBookmark(b) ? G.addClass(a.getControls(b).bookmarkElement, this.options.bookmarkImage) : G.removeClass(a.getControls(b).bookmarkElement, this.options.bookmarkImage)
        }

        function E(a, b) {
            var c = a.getControls(b);
            a.isCompleted(b) ? (G.addClass(c.bookmarkElement, this.options.checkmarkImage), G.addClass(c.chapterElement, this.options.chapterCompleted), G.addClass(c.totalTime, this.options.chapterCompleted), G.addClass(c.remainingTime, this.options.chapterCompleted)) : (G.removeClass(c.bookmarkElement, this.options.checkmarkImage), G.removeClass(c.chapterElement, this.options.chapterCompleted), G.removeClass(c.totalTime, this.options.chapterCompleted), G.removeClass(c.remainingTime, this.options.chapterCompleted))
        }

        function F(a) {
            var b = {},
                c = {
                    book: ".spritz-book",
                    bookTitle: ".book-title",
                    bookChapter: ".book-chapter",
                    bookName: ".book-name",
                    totalTime: ".total-time",
                    remainingTime: ".remaining-time",
                    statusImage: ".status-image",
                    chapterName: ".chapter-name",
                    bookmarkImage: "bookmark-image",
                    checkmarkImage: "checkmark-image",
                    chapterCompleted: "chapter-completed",
                    textHighlighter: "text-highlighter"
                };
            return b = "object" == typeof a ? G.extend({}, c, a) : c
        }
        var G = i.helper;
        return {
            BookController: a
        }
    }), i.addToNamespace(i.bookmark, function() {
        function a() {
            var a = localStorage.getItem(this.storageKey);
            null !== a && "undefined" != typeof a ? this.bookmarkData = JSON.parse(a) : this.bookmarkData = null
        }

        function b() {
            localStorage.setItem(this.storageKey, JSON.stringify(this.bookmarkData))
        }

        function c() {
            var a = {};
            return a.createTime = (new Date).getTime(), a.updateTime = null, a.chapterPositions = {}, a
        }
        var d = function(b, c) {
            this.bookmarkData = null, this.controls = c, this.storageKey = "spritz.bookmark." + b, this.chapters = {}, a.call(this)
        };
        return d.prototype.addChapter = function(a, b, c) {
            this.chapters[a] = {
                content: b,
                controls: c
            }
        }, d.prototype.getChapters = function() {
            return this.chapters
        }, d.prototype.getContent = function(a) {
            return this.chapters[a].content
        }, d.prototype.getControls = function(a) {
            return this.chapters[a].controls
        }, d.prototype.getPosition = function(a) {
            var b = null;
            return null != this.bookmarkData && (b = this.bookmarkData.chapterPositions[a], "undefined" == typeof b && (b = 0)), b
        }, d.prototype.setPosition = function(a, d) {
            null == this.bookmarkData && (this.bookmarkData = c()), this.bookmarkData.updateTime = (new Date).getTime(), this.bookmarkData.chapterPositions[a] = d, b.call(this)
        }, d.prototype.isCompleted = function(a) {
            var b = this.getContent(a).text;
            return null !== b && b.getWordCount() > 0 && this.getPosition(a) >= b.getWordCount()
        }, d.prototype.setCompleted = function(a) {
            this.setPosition(a, this.getContent(a).text.getWordCount())
        }, d.prototype.hasBookmark = function(a) {
            var b = this.getPosition(a),
                c = this.getContent(a);
            return b > 0 && b < c.text.getWordCount()
        }, d.prototype.getTotalTime = function(a, b) {
            var c = 0,
                d = this.getContent(a);
            if (null !== d) {
                var e = d.text;
                null !== e && "undefined" != typeof e && (c = e.getTotalTime(b))
            }
            return c
        }, d.prototype.getTotalTotalTime = function(a) {
            var b = 0;
            for (var c in this.chapters) this.chapters.hasOwnProperty(c) && (b += this.getTotalTime(c, a));
            return b
        }, d.prototype.getRemainingTime = function(a, b) {
            var c = 0,
                d = this.getContent(a);
            if (null !== d) {
                var e = d.text;
                null !== e && "undefined" != typeof e && (c = this.isCompleted(a) ? 0 : e.calculateTime(b, this.getPosition(a)))
            }
            return c
        }, d.prototype.getTotalRemainingTime = function(a) {
            var b = 0;
            for (var c in this.chapters) this.chapters.hasOwnProperty(c) && (b += this.getRemainingTime(c, a));
            return b
        }, {
            BookStore: d
        }
    });
    var l = {};
    l.math = {}, l.math.Long = function(a, b) {
        this.low_ = 0 | a, this.high_ = 0 | b
    }, l.math.Long.IntCache_ = {}, l.math.Long.fromInt = function(a) {
        if (a >= -128 && 128 > a) {
            var b = l.math.Long.IntCache_[a];
            if (b) return b
        }
        var c = new l.math.Long(0 | a, 0 > a ? -1 : 0);
        return a >= -128 && 128 > a && (l.math.Long.IntCache_[a] = c), c
    }, l.math.Long.fromNumber = function(a) {
        return isNaN(a) || !isFinite(a) ? l.math.Long.ZERO : a <= -l.math.Long.TWO_PWR_63_DBL_ ? l.math.Long.MIN_VALUE : a + 1 >= l.math.Long.TWO_PWR_63_DBL_ ? l.math.Long.MAX_VALUE : 0 > a ? l.math.Long.fromNumber(-a).negate() : new l.math.Long(a % l.math.Long.TWO_PWR_32_DBL_ | 0, a / l.math.Long.TWO_PWR_32_DBL_ | 0)
    }, l.math.Long.fromBits = function(a, b) {
        return new l.math.Long(a, b)
    }, l.math.Long.fromString = function(a, b) {
        if (0 == a.length) throw Error("number format error: empty string");
        var c = b || 10;
        if (2 > c || c > 36) throw Error("radix out of range: " + c);
        if ("-" == a.charAt(0)) return l.math.Long.fromString(a.substring(1), c).negate();
        if (a.indexOf("-") >= 0) throw Error('number format error: interior "-" character: ' + a);
        for (var d = l.math.Long.fromNumber(Math.pow(c, 8)), e = l.math.Long.ZERO, f = 0; f < a.length; f += 8) {
            var g = Math.min(8, a.length - f),
                h = parseInt(a.substring(f, f + g), c);
            if (8 > g) {
                var i = l.math.Long.fromNumber(Math.pow(c, g));
                e = e.multiply(i).add(l.math.Long.fromNumber(h))
            } else e = e.multiply(d), e = e.add(l.math.Long.fromNumber(h))
        }
        return e
    }, l.math.Long.TWO_PWR_16_DBL_ = 65536, l.math.Long.TWO_PWR_24_DBL_ = 1 << 24, l.math.Long.TWO_PWR_32_DBL_ = l.math.Long.TWO_PWR_16_DBL_ * l.math.Long.TWO_PWR_16_DBL_, l.math.Long.TWO_PWR_31_DBL_ = l.math.Long.TWO_PWR_32_DBL_ / 2, l.math.Long.TWO_PWR_48_DBL_ = l.math.Long.TWO_PWR_32_DBL_ * l.math.Long.TWO_PWR_16_DBL_, l.math.Long.TWO_PWR_64_DBL_ = l.math.Long.TWO_PWR_32_DBL_ * l.math.Long.TWO_PWR_32_DBL_, l.math.Long.TWO_PWR_63_DBL_ = l.math.Long.TWO_PWR_64_DBL_ / 2, l.math.Long.ZERO = l.math.Long.fromInt(0), l.math.Long.ONE = l.math.Long.fromInt(1), l.math.Long.NEG_ONE = l.math.Long.fromInt(-1), l.math.Long.MAX_VALUE = l.math.Long.fromBits(-1, 2147483647), l.math.Long.MIN_VALUE = l.math.Long.fromBits(0, -2147483648), l.math.Long.TWO_PWR_24_ = l.math.Long.fromInt(1 << 24), l.math.Long.prototype.toInt = function() {
        return this.low_
    }, l.math.Long.prototype.toNumber = function() {
        return this.high_ * l.math.Long.TWO_PWR_32_DBL_ + this.getLowBitsUnsigned()
    }, l.math.Long.prototype.toString = function(a) {
        var b = a || 10;
        if (2 > b || b > 36) throw Error("radix out of range: " + b);
        if (this.isZero()) return "0";
        if (this.isNegative()) {
            if (this.equals(l.math.Long.MIN_VALUE)) {
                var c = l.math.Long.fromNumber(b),
                    d = this.div(c),
                    e = d.multiply(c).subtract(this);
                return d.toString(b) + e.toInt().toString(b)
            }
            return "-" + this.negate().toString(b)
        }
        for (var f = l.math.Long.fromNumber(Math.pow(b, 6)), e = this, g = "";;) {
            var h = e.div(f),
                i = e.subtract(h.multiply(f)).toInt(),
                j = i.toString(b);
            if (e = h, e.isZero()) return j + g;
            for (; j.length < 6;) j = "0" + j;
            g = "" + j + g
        }
    }, l.math.Long.prototype.getHighBits = function() {
        return this.high_
    }, l.math.Long.prototype.getLowBits = function() {
        return this.low_
    }, l.math.Long.prototype.getLowBitsUnsigned = function() {
        return this.low_ >= 0 ? this.low_ : l.math.Long.TWO_PWR_32_DBL_ + this.low_
    }, l.math.Long.prototype.getNumBitsAbs = function() {
        if (this.isNegative()) return this.equals(l.math.Long.MIN_VALUE) ? 64 : this.negate().getNumBitsAbs();
        for (var a = 0 != this.high_ ? this.high_ : this.low_, b = 31; b > 0 && 0 == (a & 1 << b); b--);
        return 0 != this.high_ ? b + 33 : b + 1
    }, l.math.Long.prototype.isZero = function() {
        return 0 == this.high_ && 0 == this.low_
    }, l.math.Long.prototype.isNegative = function() {
        return this.high_ < 0
    }, l.math.Long.prototype.isOdd = function() {
        return 1 == (1 & this.low_)
    }, l.math.Long.prototype.equals = function(a) {
        return this.high_ == a.high_ && this.low_ == a.low_
    }, l.math.Long.prototype.notEquals = function(a) {
        return this.high_ != a.high_ || this.low_ != a.low_
    }, l.math.Long.prototype.lessThan = function(a) {
        return this.compare(a) < 0
    }, l.math.Long.prototype.lessThanOrEqual = function(a) {
        return this.compare(a) <= 0
    }, l.math.Long.prototype.greaterThan = function(a) {
        return this.compare(a) > 0
    }, l.math.Long.prototype.greaterThanOrEqual = function(a) {
        return this.compare(a) >= 0
    }, l.math.Long.prototype.compare = function(a) {
        if (this.equals(a)) return 0;
        var b = this.isNegative(),
            c = a.isNegative();
        return b && !c ? -1 : !b && c ? 1 : this.subtract(a).isNegative() ? -1 : 1
    }, l.math.Long.prototype.negate = function() {
        return this.equals(l.math.Long.MIN_VALUE) ? l.math.Long.MIN_VALUE : this.not().add(l.math.Long.ONE)
    }, l.math.Long.prototype.add = function(a) {
        var b = this.high_ >>> 16,
            c = 65535 & this.high_,
            d = this.low_ >>> 16,
            e = 65535 & this.low_,
            f = a.high_ >>> 16,
            g = 65535 & a.high_,
            h = a.low_ >>> 16,
            i = 65535 & a.low_,
            j = 0,
            k = 0,
            m = 0,
            n = 0;
        return n += e + i, m += n >>> 16, n &= 65535, m += d + h, k += m >>> 16, m &= 65535, k += c + g, j += k >>> 16, k &= 65535, j += b + f, j &= 65535, l.math.Long.fromBits(m << 16 | n, j << 16 | k)
    }, l.math.Long.prototype.subtract = function(a) {
        return this.add(a.negate())
    }, l.math.Long.prototype.multiply = function(a) {
        if (this.isZero()) return l.math.Long.ZERO;
        if (a.isZero()) return l.math.Long.ZERO;
        if (this.equals(l.math.Long.MIN_VALUE)) return a.isOdd() ? l.math.Long.MIN_VALUE : l.math.Long.ZERO;
        if (a.equals(l.math.Long.MIN_VALUE)) return this.isOdd() ? l.math.Long.MIN_VALUE : l.math.Long.ZERO;
        if (this.isNegative()) return a.isNegative() ? this.negate().multiply(a.negate()) : this.negate().multiply(a).negate();
        if (a.isNegative()) return this.multiply(a.negate()).negate();
        if (this.lessThan(l.math.Long.TWO_PWR_24_) && a.lessThan(l.math.Long.TWO_PWR_24_)) return l.math.Long.fromNumber(this.toNumber() * a.toNumber());
        var b = this.high_ >>> 16,
            c = 65535 & this.high_,
            d = this.low_ >>> 16,
            e = 65535 & this.low_,
            f = a.high_ >>> 16,
            g = 65535 & a.high_,
            h = a.low_ >>> 16,
            i = 65535 & a.low_,
            j = 0,
            k = 0,
            m = 0,
            n = 0;
        return n += e * i, m += n >>> 16, n &= 65535, m += d * i, k += m >>> 16, m &= 65535, m += e * h, k += m >>> 16, m &= 65535, k += c * i, j += k >>> 16, k &= 65535, k += d * h, j += k >>> 16, k &= 65535, k += e * g, j += k >>> 16, k &= 65535, j += b * i + c * h + d * g + e * f, j &= 65535, l.math.Long.fromBits(m << 16 | n, j << 16 | k)
    }, l.math.Long.prototype.div = function(a) {
        if (a.isZero()) throw Error("division by zero");
        if (this.isZero()) return l.math.Long.ZERO;
        if (this.equals(l.math.Long.MIN_VALUE)) {
            if (a.equals(l.math.Long.ONE) || a.equals(l.math.Long.NEG_ONE)) return l.math.Long.MIN_VALUE;
            if (a.equals(l.math.Long.MIN_VALUE)) return l.math.Long.ONE;
            var b = this.shiftRight(1),
                c = b.div(a).shiftLeft(1);
            if (c.equals(l.math.Long.ZERO)) return a.isNegative() ? l.math.Long.ONE : l.math.Long.NEG_ONE;
            var d = this.subtract(a.multiply(c)),
                e = c.add(d.div(a));
            return e
        }
        if (a.equals(l.math.Long.MIN_VALUE)) return l.math.Long.ZERO;
        if (this.isNegative()) return a.isNegative() ? this.negate().div(a.negate()) : this.negate().div(a).negate();
        if (a.isNegative()) return this.div(a.negate()).negate();
        for (var f = l.math.Long.ZERO, d = this; d.greaterThanOrEqual(a);) {
            for (var c = Math.max(1, Math.floor(d.toNumber() / a.toNumber())), g = Math.ceil(Math.log(c) / Math.LN2), h = 48 >= g ? 1 : Math.pow(2, g - 48), i = l.math.Long.fromNumber(c), j = i.multiply(a); j.isNegative() || j.greaterThan(d);) c -= h, i = l.math.Long.fromNumber(c), j = i.multiply(a);
            i.isZero() && (i = l.math.Long.ONE), f = f.add(i), d = d.subtract(j)
        }
        return f
    }, l.math.Long.prototype.modulo = function(a) {
        return this.subtract(this.div(a).multiply(a))
    }, l.math.Long.prototype.not = function() {
        return l.math.Long.fromBits(~this.low_, ~this.high_)
    }, l.math.Long.prototype.and = function(a) {
        return l.math.Long.fromBits(this.low_ & a.low_, this.high_ & a.high_)
    }, l.math.Long.prototype.or = function(a) {
        return l.math.Long.fromBits(this.low_ | a.low_, this.high_ | a.high_)
    }, l.math.Long.prototype.xor = function(a) {
        return l.math.Long.fromBits(this.low_ ^ a.low_, this.high_ ^ a.high_)
    }, l.math.Long.prototype.shiftLeft = function(a) {
        if (a &= 63, 0 == a) return this;
        var b = this.low_;
        if (32 > a) {
            var c = this.high_;
            return l.math.Long.fromBits(b << a, c << a | b >>> 32 - a)
        }
        return l.math.Long.fromBits(0, b << a - 32)
    }, l.math.Long.prototype.shiftRight = function(a) {
        if (a &= 63, 0 == a) return this;
        var b = this.high_;
        if (32 > a) {
            var c = this.low_;
            return l.math.Long.fromBits(c >>> a | b << 32 - a, b >> a)
        }
        return l.math.Long.fromBits(b >> a - 32, b >= 0 ? 0 : -1)
    }, l.math.Long.prototype.shiftRightUnsigned = function(a) {
        if (a &= 63, 0 == a) return this;
        var b = this.high_;
        if (32 > a) {
            var c = this.low_;
            return l.math.Long.fromBits(c >>> a | b << 32 - a, b >>> a)
        }
        return 32 == a ? l.math.Long.fromBits(b, 0) : l.math.Long.fromBits(b >>> a - 32, 0)
    }, i.helper.dispatchEvent(c, "spritz_loaded_internal"), i.readyState = "loaded", i.helper.dispatchEvent(c, "spritz_loaded"), "complete" === i.initState ? (i.readyState = "complete", i.helper.dispatchEvent(c, "spritz_ready")) : c.addEventListener("spritz_initialized_internal", function() {
        i.readyState = "complete", i.helper.dispatchEvent(c, "spritz_ready")
    })
}(window.SPRITZ = window.SPRITZ || {}, window, document);