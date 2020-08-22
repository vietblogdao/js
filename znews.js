/*! For license information please see znews.min.js.LICENSE */ ! function (t) {
  function e(e) {
    for (var n, r, o = e[0], a = e[1], s = 0, c = []; s < o.length; s++) r = o[s], Object.prototype.hasOwnProperty.call(i, r) && i[r] && c.push(i[r][0]), i[r] = 0;
    for (n in a) Object.prototype.hasOwnProperty.call(a, n) && (t[n] = a[n]);
    for (l && l(e); c.length;) c.shift()()
  }
  var n = {},
    i = {
      32: 0
    };

  function r(e) {
    if (n[e]) return n[e].exports;
    var i = n[e] = {
      i: e,
      l: !1,
      exports: {}
    };
    return t[e].call(i.exports, i, i.exports, r), i.l = !0, i.exports
  }
  r.e = function (t) {
    var e = [],
      n = i[t];
    if (0 !== n)
      if (n) e.push(n[2]);
      else {
        var o = new Promise((function (e, r) {
          n = i[t] = [e, r]
        }));
        e.push(n[2] = o);
        var a, s = document.createElement("script");
        s.charset = "utf-8", s.timeout = 120, r.nc && s.setAttribute("nonce", r.nc), s.src = function (t) {
          return r.p + "" + ({
            0: "article-scrollstory~article-timeline~article-timelinecv",
            2: "app-polls",
            3: "app-scrolltofixed",
            4: "article-before-after",
            5: "article-book",
            6: "article-chart",
            7: "article-cover",
            8: "article-gallery",
            9: "article-grid",
            10: "article-interview",
            11: "article-livestream",
            12: "article-pana360",
            13: "article-quizz",
            14: "article-scrollstory",
            15: "article-scrolltofixed",
            16: "article-sliding",
            17: "article-table",
            18: "article-timeline",
            19: "article-timelinecv",
            20: "comments",
            21: "communist-member-list",
            22: "communist-party",
            23: "corona-event",
            25: "plugin-tooltip",
            26: "search",
            28: "vendors~article-chart",
            29: "vendors~article-pana360",
            30: "vendors~article-scrollstory",
            31: "vendors~article-sliding"
          }[t] || t) + ".min.js"
        }(t);
        var l = new Error;
        a = function (e) {
          s.onerror = s.onload = null, clearTimeout(c);
          var n = i[t];
          if (0 !== n) {
            if (n) {
              var r = e && ("load" === e.type ? "missing" : e.type),
                o = e && e.target && e.target.src;
              l.message = "Loading chunk " + t + " failed.\n(" + r + ": " + o + ")", l.name = "ChunkLoadError", l.type = r, l.request = o, n[1](l)
            }
            i[t] = void 0
          }
        };
        var c = setTimeout((function () {
          a({
            type: "timeout",
            target: s
          })
        }), 12e4);
        s.onerror = s.onload = a, document.head.appendChild(s)
      }
    return Promise.all(e)
  }, r.m = t, r.c = n, r.d = function (t, e, n) {
    r.o(t, e) || Object.defineProperty(t, e, {
      enumerable: !0,
      get: n
    })
  }, r.r = function (t) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(t, "__esModule", {
      value: !0
    })
  }, r.t = function (t, e) {
    if (1 & e && (t = r(t)), 8 & e) return t;
    if (4 & e && "object" == typeof t && t && t.__esModule) return t;
    var n = Object.create(null);
    if (r.r(n), Object.defineProperty(n, "default", {
        enumerable: !0,
        value: t
      }), 2 & e && "string" != typeof t)
      for (var i in t) r.d(n, i, function (e) {
        return t[e]
      }.bind(null, i));
    return n
  }, r.n = function (t) {
    var e = t && t.__esModule ? function () {
      return t.default
    } : function () {
      return t
    };
    return r.d(e, "a", e), e
  }, r.o = function (t, e) {
    return Object.prototype.hasOwnProperty.call(t, e)
  }, r.p = "//static-znews.zadn.vn/releases/web/v1.1.82/js/", r.oe = function (t) {
    throw t
  };
  var o = window.webpackJsonp = window.webpackJsonp || [],
    a = o.push.bind(o);
  o.push = e, o = o.slice();
  for (var s = 0; s < o.length; s++) e(o[s]);
  var l = a;
  r(r.s = 77)
}([function (t, e, n) {
  "use strict";
  n.d(e, "t", (function () {
    return i
  })), n.d(e, "U", (function () {
    return r
  })), n.d(e, "c", (function () {
    return o
  })), n.d(e, "v", (function () {
    return s
  })), n.d(e, "q", (function () {
    return l
  })), n.d(e, "B", (function () {
    return c
  })), n.d(e, "C", (function () {
    return u
  })), n.d(e, "r", (function () {
    return h
  })), n.d(e, "i", (function () {
    return d
  })), n.d(e, "l", (function () {
    return f
  })), n.d(e, "m", (function () {
    return p
  })), n.d(e, "j", (function () {
    return v
  })), n.d(e, "n", (function () {
    return m
  })), n.d(e, "p", (function () {
    return g
  })), n.d(e, "o", (function () {
    return b
  })), n.d(e, "k", (function () {
    return y
  })), n.d(e, "R", (function () {
    return w
  })), n.d(e, "w", (function () {
    return E
  })), n.d(e, "F", (function () {
    return k
  })), n.d(e, "G", (function () {
    return T
  })), n.d(e, "H", (function () {
    return A
  })), n.d(e, "P", (function () {
    return C
  })), n.d(e, "L", (function () {
    return _
  })), n.d(e, "K", (function () {
    return O
  })), n.d(e, "M", (function () {
    return I
  })), n.d(e, "O", (function () {
    return P
  })), n.d(e, "J", (function () {
    return D
  })), n.d(e, "N", (function () {
    return S
  })), n.d(e, "I", (function () {
    return R
  })), n.d(e, "T", (function () {
    return L
  })), n.d(e, "u", (function () {
    return x
  })), n.d(e, "bb", (function () {
    return $
  })), n.d(e, "b", (function () {
    return M
  })), n.d(e, "Z", (function () {
    return H
  })), n.d(e, "ab", (function () {
    return N
  })), n.d(e, "fb", (function () {
    return z
  })), n.d(e, "gb", (function () {
    return j
  })), n.d(e, "y", (function () {
    return V
  })), n.d(e, "S", (function () {
    return B
  })), n.d(e, "A", (function () {
    return U
  })), n.d(e, "z", (function () {
    return G
  })), n.d(e, "h", (function () {
    return F
  })), n.d(e, "g", (function () {
    return Y
  })), n.d(e, "f", (function () {
    return W
  })), n.d(e, "e", (function () {
    return Z
  })), n.d(e, "d", (function () {
    return q
  })), n.d(e, "E", (function () {
    return K
  })), n.d(e, "cb", (function () {
    return X
  })), n.d(e, "V", (function () {
    return Q
  })), n.d(e, "W", (function () {
    return J
  })), n.d(e, "X", (function () {
    return tt
  })), n.d(e, "Y", (function () {
    return et
  })), n.d(e, "hb", (function () {
    return nt
  })), n.d(e, "Q", (function () {
    return it
  })), n.d(e, "eb", (function () {
    return rt
  })), n.d(e, "x", (function () {
    return ot
  })), n.d(e, "D", (function () {
    return at
  })), n.d(e, "s", (function () {
    return st
  })), n.d(e, "db", (function () {
    return lt
  })), n.d(e, "a", (function () {
    return ct
  }));
  var i = window.location.hostname.replace(/(stg|beta)./i, ""),
    r = "//static-znews.zadn.vn",
    o = "https://adtima.vn/rate-card",
    a = "https://".concat(i, "/interactive/bannerngang/mua-sach-tiki-post2.zing"),
    s = '<iframe src="'.concat(a, '" style="width: 100%;height: 850px;overflow: hidden;margin-top: 50px;"></iframe>'),
    l = (new RegExp("https*:\\/\\/(www\\.){0,1}(youtu\\.be\\/|youtube.com\\/(watch\\?v=|embed\\/))", "i"), r + "/images/avatar_silkhouse.gif"),
    c = r + "/images/logo-zing-home.svg",
    u = r + "/images/logo-zing-videopage_v3.svg",
    h = r + "/images/bg_poll.jpg",
    d = r + "/releases/web/docs/#/changelog",
    f = r + "/images/channels/lens-logo-white.png",
    p = r + "/images/channels/longform-logo-white.png",
    v = r + "/images/channels/infographic-logo-white.png",
    m = r + "/images/channels/review-logo-white.png",
    g = r + "/images/channels/voices-logo-white.png",
    b = r + "/images/channels/story-logo-white.png",
    y = r + "/images/channels/interactive-logo-white.png",
    w = "znews_sid",
    E = window.location.href.search("/preview/") >= 0,
    k = new RegExp("^(https*:)*//(beta.|dev.|stg.)*".concat(i), "ig"),
    T = /abtest=(test|control)/i,
    A = /-post\d+\.html/i,
    C = /^\/video-.*-post\d+\.html/i,
    _ = /\/.+-tin-tuc(\/|\.html)/i,
    O = /\/.+-tim-kiem(\/|\.html)/i,
    I = /\/series\/|\/tieu-diem\//i,
    P = /\/video\/?|\/video-.*(\/|\.html)/i,
    D = /\/pictures\//i,
    S = /\/trending\.html|\/trending\/trang\d+\.html/i,
    R = /\.html/i,
    L = "zing.vn",
    x = "https://" + i,
    $ = "//user." + i,
    M = "adtima.vn",
    H = "trithuctructuyen.vn",
    N = "trithuctructuyen.com.vn",
    z = "zingnews.com.vn",
    j = "zingnews.vn",
    V = "localhost",
    B = 25200,
    U = {
      HANOI: "hanoi",
      HCM: "tphochiminh",
      DA_NANG: "danang",
      AN_GIANG: "angiang",
      BAC_GIANG: "bacgiang",
      BAC_KAN: "backan"
    },
    G = {
      hanoi: "HĂ  Ná»™i",
      tphochiminh: "Tp. Há»“ ChĂ­ Minh",
      hochiminh: "Tp. Há»“ ChĂ­ Minh",
      danang: "ÄĂ  Náºµng",
      angiang: "An Giang",
      bacgiang: "Báº¯c Giang",
      backan: "Báº¯c Káº¡n",
      baclieu: "Báº¡c LiĂªu",
      bacninh: "Báº¯c Ninh",
      bentre: "Báº¿n Tre",
      binhdinh: "BĂ¬nh Äá»‹nh",
      binhduong: "BĂ¬nh DÆ°Æ¡ng",
      binhphuoc: "BĂ¬nh PhÆ°á»›c",
      binhthuan: "BĂ¬nh Thuáº­n",
      camau: "CĂ  Mau",
      cantho: "Cáº§n ThÆ¡",
      caobang: "Cao Báº±ng",
      daklak: "Äáº¯k Láº¯k",
      daknong: "Äáº¯k NĂ´ng",
      dienbien: "Äiá»‡n BiĂªn",
      dongnai: "Äá»“ng Nai",
      dongthap: "Äá»“ng ThĂ¡p",
      gialai: "Gia Lai",
      hagiang: "HĂ  Giang",
      hanam: "HĂ  Nam",
      hatinh: "HĂ  TÄ©nh",
      haiduong: "Háº£i DÆ°Æ¡ng",
      haiphong: "Háº£i PhĂ²ng",
      haugiang: "Háº­u Giang",
      hoabinh: "HĂ²a BĂ¬nh",
      hungyen: "HÆ°ng YĂªn",
      khanhhoa: "KhĂ¡nh HĂ²a",
      kiengiang: "KiĂªn Giang",
      kontum: "Kon Tum",
      laichau: "Lai ChĂ¢u",
      lamdong: "LĂ¢m Äá»“ng",
      langson: "Láº¡ng SÆ¡n",
      laocai: "LĂ o Cai",
      longan: "Long An",
      namdinh: "Nam Äá»‹nh",
      nghean: "Nghá»‡ An",
      ninhbinh: "Ninh BĂ¬nh",
      ninhthuan: "Ninh Thuáº­n",
      phutho: "PhĂº Thá»",
      phuyen: "PhĂº YĂªn",
      quangbinh: "Quáº£ng BĂ¬nh",
      quangnam: "Quáº£ng Nam",
      quangngai: "Quáº£ng NgĂ£i",
      quangninh: "Quáº£ng Ninh",
      quangtri: "Quáº£ng Trá»‹",
      soctrang: "SĂ³c TrÄƒng",
      sonla: "SÆ¡n La",
      tayninh: "TĂ¢y Ninh",
      thaibinh: "ThĂ¡i BĂ¬nh",
      thainguyen: "ThĂ¡i NguyĂªn",
      thanhhoa: "Thanh HĂ³a",
      thuathienhue: "Thá»«a ThiĂªn Huáº¿",
      hue: "Huáº¿",
      tiengiang: "Tiá»n Giang",
      travinh: "TrĂ  Vinh",
      tuyenquang: "TuyĂªn Quang",
      vinhlong: "VÄ©nh Long",
      vinhphuc: "VÄ©nh PhĂºc",
      vungtau: "VÅ©ng TĂ u",
      bariavungtau: "BĂ  Rá»‹a VÅ©ng TĂ u",
      yenbai: "YĂªn BĂ¡i",
      truongsa: "Quáº§n Äáº£o TrÆ°á»ng Sa",
      hoangsa: "Quáº§n Äáº£o HoĂ ng Sa",
      dacnong: "Äáº¯k NĂ´ng"
    },
    F = {
      "thoi-trang": 7,
      "am-nhac": 8,
      "phim-anh": 9,
      "song-tre": 104,
      "the-thao": 472,
      "oto-xe-may": 474,
      "cong-nghe": 476,
      "am-thuc": 478,
      "du-lich": 479,
      "giao-duc": 501,
      "the-gioi": 503,
      "nhip-song": 529,
      "kinh-doanh-tai-chinh": 572,
      "giai-tri": 585,
      "thoi-su": 605,
      "phap-luat": 609,
      "chuyen-trang": 624,
      "xuat-ban": 626,
      "suc-khoe": 645,
      "world-cup-2018": 717
    },
    Y = {
      XUAT_BAN: "xuat-ban"
    },
    W = {
      7: "Thá»i trang",
      8: "Ă‚m nháº¡c",
      9: "Phim áº£nh",
      104: "Sá»‘ng tráº»",
      472: "Thá»ƒ thao",
      474: "Xe 360",
      476: "CĂ´ng nghá»‡",
      478: "áº¨m thá»±c",
      479: "Du lá»‹ch",
      501: "GiĂ¡o dá»¥c",
      503: "Tháº¿ giá»›i",
      529: "Nhá»‹p sá»‘ng",
      572: "Kinh doanh",
      585: "Giáº£i trĂ­",
      605: "Thá»i sá»±",
      609: "PhĂ¡p luáº­t",
      624: "ChuyĂªn trang",
      626: "Xuáº¥t báº£n",
      645: "Sá»©c khá»e"
    },
    Z = {
      TEXT: "text",
      PICTURE: "picture",
      STREAM: "stream",
      SPECIAL: "special",
      VIDEO: "video",
      INFOGRAPHIC: "infographic",
      HASVIDEO: "hasvideo"
    },
    q = {
      REGULAR: "regular",
      NO_SIDEBAR: "no-sidebar",
      SPECICAL: "special"
    },
    K = {
      ARTICLE: "article",
      VIDEO: "video",
      CATEGORY: "category",
      SEARCH: "search",
      TAG: "tag",
      TOPIC: "topic",
      HOME: "home",
      TRENDING: "trending",
      AUTHOR: "author",
      PICTURE: "picture"
    },
    X = (window.TEXT_COMMENT_INPUT, window.TEXT_COMMENT_SUBMIT, window.TEXT_LIST_LABEL, ["1", "2", "3", "4", "5"]),
    Q = {
      4907: "qna",
      4885: "gallery",
      4413: "infographic",
      4305: "voices",
      4223: "infocus",
      3616: "lens",
      3613: "sliding",
      3568: "branchvoice",
      3546: "longform",
      3535: "quizz",
      3528: "kover",
      3483: "story",
      3478: "panorama",
      5682: "zingstory",
      5755: "cover",
      5771: "timelinecv",
      5802: "timeline"
    },
    J = {
      QNA: "qna",
      GALLERY: "gallery",
      INFOGRAPHIC: "infographic",
      VOICES: "voices",
      INFOCUS: "infocus",
      LENS: "lens",
      SLIDING: "sliding",
      BRANCHVOICE: "branchvoice",
      LONGFORM: "longform",
      QUIZZ: "quizz",
      KOVER: "kover",
      STORY: "story",
      PANORAMA: "panorama",
      ZINGSTORY: "zingstory",
      COVER: "cover",
      TIMELINECV: "timelinecv",
      TIMELINE: "timeline"
    },
    tt = {
      737: "seagame",
      742: "corona",
      750: "communist-party"
    },
    et = {
      SEAGAME: "seagame",
      CORONA: "corona",
      COMMUNIST_PARTY: "communist-party"
    },
    nt = {
      DEFAULT: "267866779927658906",
      FACEBOOK: "522366200923519947",
      GOOGLE: "2794372856483904451"
    },
    it = {
      PERCENT: "percentage",
      DETAIL: "detail"
    },
    rt = {
      DEFAULT: "default",
      THEATER: "theater",
      FULLSCREEN: "fullscreen"
    },
    ot = {
      1: 49,
      2: 50,
      K: 75,
      L: 76,
      M: 77,
      ESC: 27,
      ENTER: 13,
      V: 86,
      SPACE: 32,
      ARROW_LEFT: 37,
      ARROW_RIGHT: 39,
      ARROW_UP: 38,
      ARROW_DOWN: 40,
      SEMICOLON: 186
    },
    at = {
      VERTICAL: "vertical",
      HORIZONTAL: "horizontal"
    },
    st = {
      UP: "up",
      DOWN: "down",
      LEFT: "left",
      RIGHT: "right"
    },
    lt = {
      DESKTOP: 0,
      DESKTOP_AB: 2,
      WAP: 1,
      WAP_AB: 3
    },
    ct = {
      TEST: "test",
      CONTROL: "control"
    }
}, function (t, e) {
  function n(t, e) {
    for (var n = 0; n < e.length; n++) {
      var i = e[n];
      i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
    }
  }
  t.exports = function (t, e, i) {
    return e && n(t.prototype, e), i && n(t, i), t
  }
}, function (t, e) {
  t.exports = function (t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
  }
}, function (t, e, n) {
  "use strict";
  var i = function (t) {
      return null != t ? t.constructor : null
    },
    r = function (t, e) {
      return Boolean(t && e && t instanceof e)
    },
    o = function (t) {
      return null == t
    },
    a = function (t) {
      return i(t) === Object
    },
    s = function (t) {
      return i(t) === String
    },
    l = function (t) {
      return Array.isArray(t)
    },
    c = function (t) {
      return r(t, NodeList)
    },
    u = function (t) {
      return o(t) || (s(t) || l(t) || c(t)) && !t.length || a(t) && !Object.keys(t).length
    };
  e.a = {
    nullOrUndefined: o,
    object: a,
    number: function (t) {
      return i(t) === Number && !Number.isNaN(t)
    },
    string: s,
    boolean: function (t) {
      return i(t) === Boolean
    },
    function: function (t) {
      return i(t) === Function
    },
    array: l,
    weakMap: function (t) {
      return r(t, WeakMap)
    },
    nodeList: c,
    element: function (t) {
      return r(t, Element)
    },
    textNode: function (t) {
      return i(t) === Text
    },
    event: function (t) {
      return r(t, Event)
    },
    cue: function (t) {
      return r(t, window.TextTrackCue) || r(t, window.VTTCue)
    },
    track: function (t) {
      return r(t, TextTrack) || !o(t) && s(t.kind)
    },
    url: function (t) {
      if (r(t, window.URL)) return !0;
      var e = t;
      t.startsWith("http://") && t.startsWith("https://") || (e = "http://".concat(t));
      try {
        return !u(new URL(e).hostname)
      } catch (t) {
        return !1
      }
    },
    empty: u
  }
}, function (t, e, n) {
  "use strict";
  n.d(e, "k", (function () {
    return s
  })), n.d(e, "e", (function () {
    return l
  })), n.d(e, "b", (function () {
    return c
  })), n.d(e, "l", (function () {
    return u
  })), n.d(e, "a", (function () {
    return h
  })), n.d(e, "j", (function () {
    return d
  })), n.d(e, "c", (function () {
    return f
  })), n.d(e, "d", (function () {
    return p
  })), n.d(e, "f", (function () {
    return v
  })), n.d(e, "i", (function () {
    return m
  })), n.d(e, "p", (function () {
    return g
  })), n.d(e, "g", (function () {
    return b
  })), n.d(e, "h", (function () {
    return y
  })), n.d(e, "n", (function () {
    return w
  })), n.d(e, "o", (function () {
    return E
  })), n.d(e, "m", (function () {
    return k
  }));
  var i = n(26),
    r = n(9),
    o = n(7),
    a = n(3);

  function s(t) {
    return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
  }

  function l(t, e) {
    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "body";
    if (Element.prototype.closest) return t.closest(e);
    for (var i = t.parentNode; i && !i.matches(n) && !i.matches(e);) i = i.parentNode;
    return i.matches(n) && (i = null), i
  }

  function c(t) {
    var e = document.createElement("tbody");
    return e.innerHTML = t, e.firstChild
  }
  var u = function (t) {
      var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
      return e.forEach((function (e) {
        t.classList = t.classList.value.replace(e, "")
      })), t
    },
    h = function (t) {
      var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
      return e.forEach((function (e) {
        t.classList.add(e)
      })), t
    },
    d = function (t) {
      var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
      t = Object(i.a)(t);
      var n = window,
        r = Object(o.u)(),
        a = r + n.innerHeight,
        s = t.offset().top,
        l = s + t.height();
      return l >= r - e && s <= a + e
    };

  function f(t) {
    var e = t.getBoundingClientRect(),
      n = e.top,
      i = e.right,
      r = e.bottom,
      a = e.left,
      s = e.height,
      l = e.width;
    return {
      top: n += Object(o.u)(),
      right: i,
      bottom: r,
      left: a += Object(o.t)(),
      width: l,
      height: s
    }
  }

  function p(t, e) {
    return e ? Object(r.textContent)(t, e) : (t.textContent || t.innerText).trim()
  }

  function v(t) {
    for (var e = [], n = t; n;) n = n.previousSibling, e.push(n);
    return e
  }
  var m = function (t) {
    return t instanceof NodeList
  };

  function g(t, e) {
    var n = Object(r.createElFromHTML)(e);
    return t.parentNode.insertBefore(n, t), n.appendChild(t), n
  }

  function b(t, e) {
    t && e && (a.a.element(e) ? Element.prototype.after ? t.after(e) : t.insertAdjacentElement("afterend", e) : a.a.string(e) && t.insertAdjacentHTML("afterend", e))
  }

  function y(t, e) {
    t && e && (a.a.element(e) ? Element.prototype.before ? t.before(e) : t.parentNode.insertBefore(e, t) : a.a.string(e) && t.insertAdjacentHTML("beforebegin", e))
  }
  var w = function (t) {
      t && m(t) && t.forEach((function (t) {
        Object(r.removeFromDom)(t)
      }))
    },
    E = function (t) {
      var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "a";
      if (t) {
        var n = t.findAll(e);
        n.forEach((function (t) {
          t.on("mouseover", (function () {
            t.setAttribute("data-title", t.getAttribute("title")), t.removeAttribute("title")
          })), t.on("mouseout", (function () {
            t.setAttribute("title", t.getAttribute("data-title"))
          }))
        }))
      }
    },
    k = function (t) {
      for (var e = t.length, n = 0; n < e; n++) "" === t[n].textContent.trim() && t[n].parentNode.removeChild(t[n])
    }
}, function (t, e) {
  function n(e) {
    return t.exports = n = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
      return t.__proto__ || Object.getPrototypeOf(t)
    }, n(e)
  }
  t.exports = n
}, function (t, e, n) {
  "use strict";
  n.d(e, "f", (function () {
    return i
  })), n.d(e, "g", (function () {
    return r
  })), n.d(e, "e", (function () {
    return o
  })), n.d(e, "c", (function () {
    return a
  })), n.d(e, "d", (function () {
    return s
  })), n.d(e, "a", (function () {
    return l
  })), n.d(e, "b", (function () {
    return c
  }));
  var i = {
      tablet: "tablet",
      smartphone: "smartphone",
      desktop: "desktop"
    },
    r = "unknow",
    o = {
      standard: "standard",
      wide: "wide"
    },
    a = {
      ipad: "ipad",
      iphone: "iphone"
    },
    s = {
      ios: "ios",
      windows: "windows",
      android: "android"
    },
    l = {
      chrome: "chrome",
      firefox: "firefox",
      ie: "ie",
      safari: "safari"
    },
    c = {
      MINI_SCREEN: 1024
    }
}, function (t, e, n) {
  "use strict";
  n.d(e, "h", (function () {
    return p
  })), n.d(e, "i", (function () {
    return m
  })), n.d(e, "D", (function () {
    return g
  })), n.d(e, "E", (function () {
    return b
  })), n.d(e, "y", (function () {
    return y
  })), n.d(e, "w", (function () {
    return w
  })), n.d(e, "F", (function () {
    return E
  })), n.d(e, "C", (function () {
    return k
  })), n.d(e, "s", (function () {
    return T
  })), n.d(e, "z", (function () {
    return A
  })), n.d(e, "r", (function () {
    return C
  })), n.d(e, "B", (function () {
    return _
  })), n.d(e, "x", (function () {
    return O
  })), n.d(e, "k", (function () {
    return I
  })), n.d(e, "m", (function () {
    return D
  })), n.d(e, "l", (function () {
    return S
  })), n.d(e, "o", (function () {
    return R
  })), n.d(e, "I", (function () {
    return L
  })), n.d(e, "a", (function () {
    return x
  })), n.d(e, "A", (function () {
    return $
  })), n.d(e, "e", (function () {
    return M
  })), n.d(e, "v", (function () {
    return H
  })), n.d(e, "j", (function () {
    return N
  })), n.d(e, "b", (function () {
    return z
  })), n.d(e, "q", (function () {
    return j
  })), n.d(e, "n", (function () {
    return B
  })), n.d(e, "p", (function () {
    return U
  })), n.d(e, "u", (function () {
    return G
  })), n.d(e, "t", (function () {
    return F
  })), n.d(e, "H", (function () {
    return Y
  })), n.d(e, "G", (function () {
    return W
  })), n.d(e, "d", (function () {
    return Z
  })), n.d(e, "c", (function () {
    return q
  })), n.d(e, "f", (function () {
    return K
  })), n.d(e, "J", (function () {
    return X
  })), n.d(e, "g", (function () {
    return Q
  }));
  var i = n(29),
    r = n.n(i),
    o = n(16),
    a = n.n(o),
    s = n(12),
    l = n(22),
    c = n(19),
    u = (n(13), n(23), n(0)),
    h = n(4);

  function d(t, e) {
    var n = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(t);
      e && (i = i.filter((function (e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable
      }))), n.push.apply(n, i)
    }
    return n
  }

  function f(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = null != arguments[e] ? arguments[e] : {};
      e % 2 ? d(n, !0).forEach((function (e) {
        a()(t, e, n[e])
      })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : d(n).forEach((function (e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
      }))
    }
    return t
  }
  var p = function (t) {
      var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        i = arguments.length > 3 ? arguments[3] : void 0,
        r = Object(s.a)({
          credentials: "include"
        }, n);
      return Object(l.b)(c.j + t, e, r, i)
    },
    v = function (t) {
      var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        r = arguments.length > 4 ? arguments[4] : void 0,
        o = f({
          credentials: "include"
        }, i),
        a = i.body ? i.body : new URLSearchParams;
      for (var s in n) a.append(s, n[s]);
      return o = f({}, o, {
        body: a
      }), Object(l.b)(t, e, o, r)
    },
    m = function (t) {
      var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        i = arguments.length > 3 ? arguments[3] : void 0,
        r = Object(s.a)({
          credentials: "include"
        }, n);
      return Object(l.b)(t, e, r, i)
    },
    g = function (t) {
      var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        r = arguments.length > 4 ? arguments[4] : void 0,
        o = Object(s.a)({
          method: "POST",
          credentials: "include"
        }, i);
      return v(c.j + t, e, n, o, r)
    },
    b = function (t) {
      var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        r = arguments.length > 4 ? arguments[4] : void 0,
        o = Object(s.a)({
          method: "POST",
          credentials: "include"
        }, i);
      return v(t, e, n, o, r)
    },
    y = function () {
      return window.location.hash.search("app") >= 0 || window.location.search.search("app") >= 0
    },
    w = function (t) {
      return window.location.hash.search(t) >= 0
    };

  function E() {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
      e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3;
    return Math.floor(Math.random() * (e - t + 1)) + t
  }
  var k = function (t) {
      return !!t.match(/^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/) && RegExp.$1
    },
    T = function () {
      return window.innerWidth - document.documentElement.clientWidth
    },
    A = function () {
      var t = window.getSelection();
      return t.anchorNode.parentNode.innerText === t.focusNode.parentNode.innerText
    },
    C = function () {
      return window.getSelection().getRangeAt(0).getBoundingClientRect()
    },
    _ = function () {
      if (window !== window.parent && window.top.location.hostname.indexOf(u.t) < 0) return !1;
      var t = window.location.hostname;
      return "" == t || t.search(u.T) > -1 || t.search(u.Z) > -1 || t.search(u.ab) > -1 || t.search(u.fb) > -1 || t.search(u.b) > -1 || t.search(u.y) > -1 || t.search(u.gb) > -1 || t.search("zingmp3.vn") > -1
    },
    O = function (t) {
      var e = (t || window.location.href).replace(/#.*|\?.*/gi, "").replace(u.F, "");
      return u.P.test(e)
    },
    I = function (t) {
      t || (t = window.location.href);
      var e = t.match(/post([0-9]+)\./i);
      return null != e && e.length > 1 ? e[1] : null != (e = t.match(/\?id=([0-9]+)/i)) && e.length > 1 ? e[1] : null
    },
    P = function (t) {
      var e = t.replace(/#.*|\?.*/gi, "").replace(u.F, "");
      return "/" == e || "" == e ? u.E.HOME : u.H.test(e) || u.P.test(e) ? u.E.ARTICLE : u.L.test(e) ? u.E.TAG : u.K.test(e) ? u.E.SEARCH : u.M.test(e) ? u.E.TOPIC : u.O.test(e) ? u.E.VIDEO : u.J.test(e) ? u.E.PICTURE : u.N.test(e) ? u.E.TRENDING : u.I.test(e) ? u.E.CATEGORY : u.E.AUTHOR
    },
    D = function (t) {
      var e = t || window.location.pathname;
      if ((e = String(e).toLowerCase()).indexOf(".html") < 0) return "";
      var n = e.replace(".html", "").split("/");
      return n[n.length - 1] || ""
    },
    S = function (t) {
      var e = t || window.location.href,
        n = I(e);
      return n ? window.location.protocol + "//".concat(u.t, "/zingnews-post").concat(n, ".html") : ""
    },
    R = function (t) {
      if (t) return P(t);
      var e = document.body && document.body.getAttribute("id");
      return e ? "page-homepage" === e ? "home" : e.replace("page-", "") : P(window.location.pathname)
    },
    L = function (t, e) {
      return t.sort((function (t, n) {
        return t[e] > n[e] ? -1 : t[e] < n[e] ? 1 : 0
      }))
    },
    x = function (t) {
      if (t) {
        var e = document.createElement("img");
        e.setAttribute("src", t), e.setAttribute("style", "position:absolute; top:-1px;left:-1px; width:1px;height:1px;"), e.setAttribute("width", 1), e.setAttribute("height", 1), e.setAttribute("alt", ""), document.body.appendChild(e)
      }
    },
    $ = function (t) {
      if (!t) return !1;
      if (t.trim().search(" ") >= 0) return !1;
      return /[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|museum)\b/i.test(t)
    },
    M = function () {
      var t = document.getId("input-clipboard");
      t || ((t = document.createElement("input")).id = "input-clipboard", t.setAttribute("value", window.location.href), document.body.append(t)), t.select(), document.execCommand("copy"), t.parentNode.removeChild(t)
    },
    H = function () {
      return (window.getSelection ? window.getSelection().toString() : document.selection ? document.selection.createRange().text : "").trim()
    };

  function N(t) {
    var e = t.zone,
      n = t.position,
      i = t.suffix,
      r = t.zappid;
    if (!t || !e || !n) throw Error("No tracking information provided");
    var o = r + "_" + R() + "_";
    return o += e.replace(/-/gi, "") + n, i && (o += "_" + i), o
  }

  function z(t) {
    if ("string" == typeof t) return t;
    var e = [];
    for (var n in t) t.hasOwnProperty(n) && e.push(encodeURIComponent(n) + "=" + encodeURIComponent(t[n]));
    return e.join("&")
  }

  function j(t) {
    return (e = window.location.search, e ? (/^[?#]/.test(e) && (e = e.slice(1)), e.split("&").reduce((function (t, e) {
      var n = e.split("="),
        i = r()(n, 2),
        o = i[0],
        a = i[1];
      return t[o] = a ? decodeURIComponent(a.replace(/\+/g, " ")) : "", t
    }), {})) : {})[t] || "";
    var e
  }
  var V = function () {
      return Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight)
    },
    B = function () {
      return (new Date).getTime()
    };

  function U(t) {
    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window.location.href;
    t = t.replace(/[\[\]]/g, "\\$&");
    var n = new RegExp("[?&]" + t + "(=([^&#]*)|&|#|$)").exec(e);
    if (!n) return null;
    if (!n[2]) return "";
    try {
      return decodeURIComponent(n[2].replace(/\+/g, ""))
    } catch (t) {
      return ""
    }
  }

  function G() {
    return void 0 !== window.pageYOffset ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop
  }

  function F() {
    return void 0 !== window.pageXOffset ? window.pageXOffset : (document.documentElement || document.body.parentNode || document.body).scrollLeft
  }
  var Y = function (t) {
      var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3;
      return new Promise((function (n) {
        var i = G(),
          r = B(),
          o = V(),
          a = Math.round(o - t < window.innerHeight ? o - window.innerHeight : t);
        ! function t() {
          var o = B(),
            s = Math.min(1, (o - r) / e);
          window.scroll(0, s * (a - i) + i), Math.abs(G() - a) < 1 ? n() : window.scrollY ? window.requestAnimationFrame(t) : n()
        }()
      }))
    },
    W = {
      rootHtml: document.documentElement,
      disabled: !1,
      enable: function () {
        this.disabled && (this.rootHtml.style.overflow = "", this.disabled = !1)
      },
      disable: function () {
        this.disabled || (this.rootHtml.style.overflow = "hidden", this.disabled = !0)
      }
    };

  function Z(t) {
    return Object(h.i)(t) ? Array.prototype.slice.call(t) : []
  }
  var q = function (t) {
    if (!t || "undefined" === t) return new Promise((function (t) {
      t(!1)
    }));
    var e = new Image;
    return e.src = t, new Promise((function (t) {
      e.onerror = function () {
        t(!1)
      }, e.onload = function () {
        t(!0)
      }
    }))
  };

  function K(t, e, n) {
    var i, r = null;
    return function () {
      var o = this,
        a = arguments,
        s = function () {
          r = null, n || (i = t.apply(o, a))
        },
        l = n && !r;
      return clearTimeout(r), r = setTimeout(s, e), l && (i = t.apply(o, a)), i
    }
  }

  function X(t, e, n) {
    var i, r, o, a = null,
      s = 0;
    n || (n = {});
    var l = function () {
      s = !1 === n.leading ? 0 : B(), a = null, o = t.apply(i, r)
    };
    return function () {
      var c = B();
      s || !1 !== n.leading || (s = c);
      var u = e - (c - s);
      return i = this, r = arguments, u <= 0 ? (clearTimeout(a), a = null, s = c, o = t.apply(i, r)) : a || !1 === n.trailing || (a = setTimeout(l, u)), o
    }
  }

  function Q(t) {
    return (t.indexOf("//") > -1 ? t.split("/")[2] : t.split("/")[0]).split(":")[0].split("?")[0].replace(/^www\./i, "")
  }
}, function (t, e, n) {
  var i = n(27),
    r = n(11);
  t.exports = function (t, e) {
    return !e || "object" !== i(e) && "function" != typeof e ? r(t) : e
  }
}, function (t, e, n) {
  "use strict";
  n.r(e), n.d(e, "hasClass", (function () {
    return o
  })), n.d(e, "addClass", (function () {
    return a
  })), n.d(e, "removeClass", (function () {
    return s
  })), n.d(e, "toggleClass", (function () {
    return l
  })), n.d(e, "setClass", (function () {
    return c
  })), n.d(e, "setStyles", (function () {
    return u
  })), n.d(e, "isEl", (function () {
    return h
  })), n.d(e, "isTextNode", (function () {
    return d
  })), n.d(e, "emptyEl", (function () {
    return f
  })), n.d(e, "normalizeContent", (function () {
    return p
  })), n.d(e, "appendContent", (function () {
    return v
  })), n.d(e, "insertContent", (function () {
    return m
  })), n.d(e, "textContent", (function () {
    return g
  })), n.d(e, "createEl", (function () {
    return b
  })), n.d(e, "createElFromHTML", (function () {
    return y
  })), n.d(e, "getAttribute", (function () {
    return w
  })), n.d(e, "setAttribute", (function () {
    return E
  })), n.d(e, "removeAttribute", (function () {
    return k
  })), n.d(e, "findPosition", (function () {
    return T
  })), n.d(e, "isOnViewport", (function () {
    return A
  })), n.d(e, "getPointerPosition", (function () {
    return C
  })), n.d(e, "isSingleLeftClick", (function () {
    return _
  })), n.d(e, "removeFromDom", (function () {
    return O
  }));
  var i = n(3);

  function r(t) {
    if (/\s/.test(t)) throw new Error("class has illegal whitespace characters")
  }

  function o(t, e) {
    return r(e), t.classList ? t.classList.contains(e) : (n = e, new RegExp("(^|\\s)" + n + "($|\\s)")).test(t.className);
    var n
  }

  function a(t, e) {
    return t.classList ? t.classList.add(e) : o(t, e) || (t.className = (t.className + " " + e).trim()), t
  }

  function s(t, e) {
    return t.classList ? t.classList.remove(e) : (r(e), t.className = t.className.split(/\s+/).filter((function (t) {
      return t !== e
    })).join(" ")), t
  }

  function l(t, e, n) {
    if (t.classList) return void 0 === n ? t.classList.toggle(e) : t.classList.toggle(e, n);
    var i = o(t, e);
    return "function" == typeof n && (n = n(t, e)), "boolean" != typeof n && (n = !i), n !== i ? (n ? a(t, e) : s(t, e), t) : void 0
  }

  function c(t, e) {
    return t.className = e, t
  }

  function u(t, e) {
    for (var n in e)
      if (null === e[n]) {
        var i = n.split(/(?=[A-Z])/).map((function (t) {
          return t.toLowerCase()
        })).join("-");
        t.style.removeProperty(i)
      } else t.style[n] = e[n];
    return t
  }

  function h(t) {
    return i.a.object(t) && 1 === t.nodeType
  }

  function d(t) {
    return i.a.object(t) && 3 === t.nodeType
  }

  function f(t) {
    for (; t.firstChild;) t.removeChild(t.firstChild);
    return t
  }

  function p(t) {
    return "function" == typeof t && (t = t()), (Array.isArray(t) ? t : [t]).map((function (t) {
      return "function" == typeof t && (t = t()), h(t) || d(t) ? t : "string" == typeof t && /\S/.test(t) ? document.createTextNode(t) : void 0
    })).filter((function (t) {
      return t
    }))
  }

  function v(t, e) {
    return p(e).forEach((function (e) {
      return t.appendChild(e)
    })), t
  }

  function m(t, e) {
    return v(f(t), e)
  }

  function g(t, e) {
    return void 0 === t.textContent ? t.innerText = e : t.textContent = e, t
  }

  function b() {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "div",
      e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
      i = arguments.length > 3 ? arguments[3] : void 0,
      r = document.createElement(t);
    return Object.getOwnPropertyNames(e).forEach((function (t) {
      var n = e[t]; - 1 !== t.indexOf("aria-") || "role" === t || "type" === t ? r.setAttribute(t, n) : r[t] = n
    })), Object.getOwnPropertyNames(n).forEach((function (t) {
      r.setAttribute(t, n[t])
    })), i && v(r, i), r
  }

  function y(t) {
    var e = document.createElement("div");
    return e.innerHTML = t, e.firstChild
  }

  function w(t, e) {
    return t.getAttribute(e)
  }

  function E(t, e, n) {
    t.setAttribute(e, n)
  }

  function k(t, e) {
    t.removeAttribute(e)
  }

  function T(t) {
    var e;
    if (t.getBoundingClientRect && t.parentNode && (e = t.getBoundingClientRect()), !e) return {
      left: 0,
      top: 0
    };
    var n = document.documentElement,
      i = document.body,
      r = n.clientLeft || i.clientLeft || 0,
      o = window.pageXOffset || i.scrollLeft,
      a = e.left + o - r,
      s = n.clientTop || i.clientTop || 0,
      l = window.pageYOffset || i.scrollTop,
      c = e.top + l - s;
    return {
      left: Math.round(a),
      top: Math.round(c)
    }
  }

  function A(t) {
    if (t) {
      var e = t.getBoundingClientRect();
      return e.height / 2 <= window.innerHeight - e.top && e.bottom >= e.height / 2
    }
  }

  function C(t, e) {
    var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
      i = {},
      r = T(t),
      o = n ? t.offsetHeight : t.offsetWidth,
      a = n ? t.offsetWidth : t.offsetHeight,
      s = r.top,
      l = r.left,
      c = e.pageY,
      u = e.pageX;
    return e.changedTouches && (u = e.changedTouches[0].pageX, c = e.changedTouches[0].pageY), i.y = Math.max(0, Math.min(1, (s - c + a) / a)), i.x = Math.max(0, Math.min(1, (u - l) / o)), i
  }

  function _(t) {
    return void 0 === t.button && void 0 === t.buttons || 0 === t.button && void 0 === t.buttons || 0 === t.button && 1 === t.buttons
  }

  function O(t) {
    t && t.parentNode && t.parentNode.removeChild(t)
  }
}, function (t, e, n) {
  var i = n(39);
  t.exports = function (t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(e && e.prototype, {
      constructor: {
        value: t,
        writable: !0,
        configurable: !0
      }
    }), e && i(t, e)
  }
}, function (t, e) {
  t.exports = function (t) {
    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t
  }
}, function (t, e, n) {
  "use strict";
  n.d(e, "b", (function () {
    return i
  })), n.d(e, "a", (function () {
    return r
  }));
  n(3);

  function i(t, e) {
    return e.split(".").reduce((function (t, e) {
      return t && t[e]
    }), t)
  }

  function r(t) {
    t = t || {};
    for (var e = 1, n = arguments.length; e < n; ++e) {
      var i = arguments[e];
      if (i)
        for (var o in i) i.hasOwnProperty(o) && ("[object Object]" !== Object.prototype.toString.call(i[o]) ? t[o] = i[o] : t[o] = r(t[o], i[o]))
    }
    return t
  }
}, function (t, e, n) {
  "use strict";
  n.d(e, "b", (function () {
    return i
  })), n.d(e, "c", (function () {
    return r
  })), n.d(e, "a", (function () {
    return o
  }));
  var i = {
      USER_ZID: "zid",
      USER_HIDE_READ: "hideRead",
      USER_HISTORY: "znHistory",
      USER_CATE_HISTORY: "znCateHistory",
      USER_BEHAVIOR: "znGroups",
      VIDEO_TIME_USER_WATCHED: "timevids",
      POLL: "poll-",
      PLAYER_NO_SIDEBAR: "zplayer_no_sidebar",
      NO_SIDEBAR_EXPAND_MODE: "no_sidebar_expand_mode"
    },
    r = {
      USER_LOGGED: "znews_logged",
      USER_SESSION_HISTORY: "znSyncHistory",
      USER_BEHAVIOR_TRACKING: "znEvent",
      ANALYTIC_SUID: "znews_znsid",
      VIDEO_WATCHED: "video_watched",
      VIDEO_MODE: "video_mode",
      SEARCH_FILTER_MORE: "znews_filter_more",
      PAIDVIEW_PR_ARTICLE: "zn_paidview"
    },
    o = {
      USER_ZID: "zid",
      USER_GROUP: "znews_group",
      USER_CONTROL: "znews_control",
      USER_CATEGORY_TARGET: "znews_cate",
      VERSION: "znews_mobile",
      ZOANID: "zoanid",
      ZCONFIG: "zconfig",
      THEATER_MODE: "znews_expand_mode",
      THEATER_MODE_TABLET: "znews_expand_mode_tablets"
    }
}, function (t, e, n) {
  "use strict";
  var i = {};
  ["PLAYER_PLAY", "PLAYER_PAUSE", "PLAYER_STOP", "PLAYER_ENDED", "PLAYER_READY", "PLAYER_MOUSE_ENTER", "PLAYER_MOUSE_LEAVE", "PLAYER_OUT_VIEW_PORT", "TRACKING_BEHAVIOR", "TRACKING_PAGEVIEW", "TRACKING_TIME_PLAYER", "LOGGED_IN", "LOGIN_FAIL", "REQUIRE_LOGIN", "USER_INITED", "INFINITE_DONE", "USER_INFO_CHANE", "VIEW_MORE_COMMENTS", "RENDERED_COMMENTS", "RENDERED_ADS_NATIVE", "LIVE_TAB_CLICK", "LIVE_FORMAT_CONTENT"].forEach((function (t) {
    i[t] = t
  })), e.a = i
}, function (t, e, n) {
  "use strict";
  n.d(e, "a", (function () {
    return m
  }));
  var i = n(2),
    r = n.n(i),
    o = n(8),
    a = n.n(o),
    s = n(5),
    l = n.n(s),
    c = n(1),
    u = n.n(c),
    h = n(10),
    d = n.n(h),
    f = n(9),
    p = n(25),
    v = n(12),
    m = function (t) {
      function e(t) {
        var n, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return r()(this, e), (n = a()(this, l()(e).call(this))).app = t, n.options = Object(v.a)(n.defaultOptions, i), n.Dom = f, n
      }
      return d()(e, t), u()(e, [{
        key: "defaultOptions",
        get: function () {
          return {}
        }
      }]), e
    }(p.a)
}, function (t, e) {
  t.exports = function (t, e, n) {
    return e in t ? Object.defineProperty(t, e, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[e] = n, t
  }
}, function (t, e) {
  t.exports = zPlayer
}, function (t, e, n) {
  "use strict";
  n.d(e, "a", (function () {
    return b
  }));
  var i = n(2),
    r = n.n(i),
    o = n(1),
    a = n.n(o),
    s = n(8),
    l = n.n(s),
    c = n(5),
    u = n.n(c),
    h = n(10),
    d = n.n(h),
    f = n(25),
    p = n(12),
    v = n(3),
    m = n(9),
    g = n(4),
    b = function (t) {
      function e() {
        var t;
        return r()(this, e), (t = l()(this, u()(e).call(this))).Dom = m, t
      }
      return d()(e, t), a()(e, [{
        key: "find",
        value: function (t) {
          return this.$el.find(t)
        }
      }, {
        key: "findAll",
        value: function (t) {
          return this.$el.findAll(t)
        }
      }, {
        key: "getAttribute",
        value: function (t) {
          return m.getAttribute(this.$el, t)
        }
      }, {
        key: "setAttribute",
        value: function (t, e) {
          return m.setAttribute(this.$el, t, e), this
        }
      }, {
        key: "removeAttribute",
        value: function (t) {
          return m.removeAttribute(this.$el, t), this
        }
      }, {
        key: "setStyles",
        value: function (t) {
          return m.setStyles(this.$el, t), this
        }
      }, {
        key: "hasClass",
        value: function (t) {
          return m.hasClass(this.$el, t)
        }
      }, {
        key: "addClass",
        value: function (t) {
          var e = this;
          return t.split(" ").forEach((function (t) {
            m.addClass(e.$el, t)
          })), this
        }
      }, {
        key: "removeClass",
        value: function (t) {
          var e = this;
          return t.split(" ").forEach((function (t) {
            e.Dom.removeClass(e.$el, t)
          })), this
        }
      }, {
        key: "toggleClass",
        value: function (t, e) {
          return m.toggleClass(this.$el, t, e), this
        }
      }, {
        key: "show",
        value: function () {
          return this.setStyles({
            display: "block"
          }), this
        }
      }, {
        key: "hide",
        value: function () {
          return this.setStyles({
            display: "none"
          }), this
        }
      }, {
        key: "append",
        value: function (t) {
          var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          if (v.a.string(t)) {
            var n = document.createElement("div");
            n.innerHTML = t, t = n.firstChild
          }
          return e ? this.$el.appendChild(t) : this.$el.prepend(t), this
        }
      }, {
        key: "prepend",
        value: function (t) {
          return this.append(t, !1), this
        }
      }, {
        key: "insertAfter",
        value: function (t) {
          return Object(g.g)(this.$el, t), this
        }
      }, {
        key: "insertBefore",
        value: function (t) {
          return Object(g.h)(this.$el, t), this
        }
      }, {
        key: "remove",
        value: function () {
          return m.removeFromDom(this.$el), this
        }
      }, {
        key: "html",
        value: function (t) {
          return this.$el.innerHTML = t, this
        }
      }, {
        key: "render",
        value: function () {
          var t = Object(p.a)({}, this.attributes);
          this.id && (t.id = this.id);
          var e = Object(p.a)({}, this.properties);
          return this.$el = m.createEl(this.tagName, e, t), this.$el
        }
      }, {
        key: "properties",
        get: function () {
          return {}
        }
      }], [{
        key: "tagName",
        get: function () {
          return "div"
        }
      }, {
        key: "events",
        get: function () {
          return {}
        }
      }, {
        key: "attributes",
        get: function () {
          return {}
        }
      }]), e
    }(f.a)
}, function (t, e, n) {
  "use strict";
  n.d(e, "i", (function () {
    return o
  })), n.d(e, "e", (function () {
    return a
  })), n.d(e, "d", (function () {
    return s
  })), n.d(e, "j", (function () {
    return l
  })), n.d(e, "k", (function () {
    return c
  })), n.d(e, "h", (function () {
    return u
  })), n.d(e, "g", (function () {
    return h
  })), n.d(e, "a", (function () {
    return d
  })), n.d(e, "b", (function () {
    return f
  })), n.d(e, "c", (function () {
    return p
  })), n.d(e, "f", (function () {
    return v
  }));
  var i = n(0),
    r = "//log." + i.t,
    o = "//api." + i.t,
    a = r + "/Counter2.aspx",
    s = o + "/public/v2/submit/feedback",
    l = o + "/public/v2",
    c = r + "/imps",
    u = r + "/collect",
    h = "//api.adtimaserver.vn/rtb/prepareRTB",
    d = "//api.adtimaserver.vn/zad/videoad",
    f = "//api.adtimaserver.vn/rendervideodemo",
    p = "//api.adtimaserver.vn/zad/zone/znewsPR3",
    v = {
      COMMENT_GET: "/getComments",
      COMMNET_POST: "/submit/comment",
      COMMENT_LIKE_POST: "/submit/likeComment",
      USER_HISTORY: "/history",
      POLL_GET: "/getPoll",
      POLL_POST: "/submit/poll",
      STATS_GET: "/trendctr",
      LIVE_GET: "/getLivestream",
      UTILITIES_GET: "/getUtilities",
      BOOK_CHAPTERS_GET: "/getArticles"
    }
}, function (t, e, n) {
  t.exports = n(69)
}, function (t, e, n) {
  var i = n(44);

  function r(e, n, o) {
    return "undefined" != typeof Reflect && Reflect.get ? t.exports = r = Reflect.get : t.exports = r = function (t, e, n) {
      var r = i(t, e);
      if (r) {
        var o = Object.getOwnPropertyDescriptor(r, e);
        return o.get ? o.get.call(n) : o.value
      }
    }, r(e, n, o || e)
  }
  t.exports = r
}, function (t, e, n) {
  "use strict";

  function i() {
    var t = Array.prototype.slice.call(arguments);
    if (window.fetch) return window.fetch.apply(window, t);

    function e(t) {
      if ("string" != typeof t && (t = t.toString()), /[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t)) throw new TypeError("Invalid character in header field name");
      return t.toLowerCase()
    }

    function n(t) {
      return "string" != typeof t && (t = t.toString()), t
    }

    function i(t) {
      var e = this;
      this.map = {}, t instanceof i ? t.forEach((function (t, n) {
        n.forEach((function (n) {
          e.append(t, n)
        }))
      })) : t && Object.getOwnPropertyNames(t).forEach((function (n) {
        e.append(n, t[n])
      }))
    }

    function r(t) {
      if (t.bodyUsed) return fetch.Promise.reject(new TypeError("Already read"));
      t.bodyUsed = !0
    }

    function o(t) {
      return new fetch.Promise((function (e, n) {
        t.onload = function () {
          e(t.result)
        }, t.onerror = function () {
          n(t.error)
        }
      }))
    }

    function a(t) {
      var e = new FileReader;
      return e.readAsArrayBuffer(t), o(e)
    }
    i.prototype.append = function (t, i) {
      t = e(t), i = n(i);
      var r = this.map[t];
      r || (r = [], this.map[t] = r), r.push(i)
    }, i.prototype.delete = function (t) {
      delete this.map[e(t)]
    }, i.prototype.get = function (t) {
      var n = this.map[e(t)];
      return n ? n[0] : null
    }, i.prototype.getAll = function (t) {
      return this.map[e(t)] || []
    }, i.prototype.has = function (t) {
      return this.map.hasOwnProperty(e(t))
    }, i.prototype.set = function (t, i) {
      this.map[e(t)] = [n(i)]
    }, i.prototype.forEach = function (t) {
      var e = this;
      Object.getOwnPropertyNames(this.map).forEach((function (n) {
        t(n, e.map[n])
      }))
    };
    var s = {
      blob: "FileReader" in window && "Blob" in window && function () {
        try {
          return new Blob, !0
        } catch (t) {
          return !1
        }
      }(),
      formData: "FormData" in window
    };

    function l() {
      return this.bodyUsed = !1, this._initBody = function (t) {
        if (this._bodyInit = t, "string" == typeof t) this._bodyText = t;
        else if (s.blob && Blob.prototype.isPrototypeOf(t)) this._bodyBlob = t;
        else if (s.formData && FormData.prototype.isPrototypeOf(t)) this._bodyFormData = t;
        else {
          if (t) throw new Error("unsupported BodyInit type");
          this._bodyText = ""
        }
      }, s.blob ? (this.blob = function () {
        var t = r(this);
        if (t) return t;
        if (this._bodyBlob) return fetch.Promise.resolve(this._bodyBlob);
        if (this._bodyFormData) throw new Error("could not read FormData body as blob");
        return fetch.Promise.resolve(new Blob([this._bodyText]))
      }, this.arrayBuffer = function () {
        return this.blob().then(a)
      }, this.text = function () {
        var t, e, n = r(this);
        if (n) return n;
        if (this._bodyBlob) return t = this._bodyBlob, (e = new FileReader).readAsText(t), o(e);
        if (this._bodyFormData) throw new Error("could not read FormData body as text");
        return fetch.Promise.resolve(this._bodyText)
      }) : this.text = function () {
        return r(this) || fetch.Promise.resolve(this._bodyText)
      }, s.formData && (this.formData = function () {
        return this.text().then(h)
      }), this.json = function () {
        return this.text().then((function (t) {
          return JSON.parse(t)
        }))
      }, this
    }
    var c = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];

    function u(t, e) {
      var n, r;
      if (e = e || {}, this.url = t, this.credentials = e.credentials || "omit", this.headers = new i(e.headers), this.method = (r = (n = e.method || "GET").toUpperCase(), c.indexOf(r) > -1 ? r : n), this.mode = e.mode || null, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && e.body) throw new TypeError("Body not allowed for GET or HEAD requests");
      this._initBody(e.body)
    }

    function h(t) {
      var e = new FormData;
      return t.trim().split("&").forEach((function (t) {
        if (t) {
          var n = t.split("="),
            i = n.shift().replace(/\+/g, " "),
            r = n.join("=").replace(/\+/g, " ");
          e.append(decodeURIComponent(i), decodeURIComponent(r))
        }
      })), e
    }

    function d(t) {
      var e = new i;
      return t.getAllResponseHeaders().trim().split("\n").forEach((function (t) {
        var n = t.trim().split(":"),
          i = n.shift().trim(),
          r = n.join(":").trim();
        e.append(i, r)
      })), e
    }
    var f = !("undefined" == typeof window || !window.ActiveXObject || window.XMLHttpRequest && (new XMLHttpRequest).dispatchEvent);

    function p(t, e) {
      e || (e = {}), this._initBody(t), this.type = "default", this.url = null, this.status = e.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = e.statusText, this.headers = e.headers instanceof i ? e.headers : new i(e.headers), this.url = e.url || ""
    }
    return l.call(u.prototype), l.call(p.prototype), window.Headers = i, window.Request = u, window.Response = p, window.fetch = function (t, e) {
      var n;
      return n = u.prototype.isPrototypeOf(t) && !e ? t : new u(t, e), new fetch.Promise((function (t, e) {
        var i = function () {
          return f && !/^(get|post|head|put|delete|options)$/i.test(this.method) ? (this.usingActiveXhr = !0, new window.ActiveXObject("Microsoft.XMLHTTP")) : new XMLHttpRequest
        }.call(this);

        function r() {
          if (4 === i.readyState) {
            var n = 1223 === i.status ? 204 : i.status;
            if (n < 100 || n > 599) e(new TypeError("Network request failed"));
            else {
              var r = {
                  status: n,
                  statusText: i.statusText,
                  headers: d(i),
                  url: "responseURL" in i ? i.responseURL : /^X-Request-URL:/m.test(i.getAllResponseHeaders()) ? i.getResponseHeader("X-Request-URL") : void 0
                },
                o = "response" in i ? i.response : i.responseText;
              t(new p(o, r))
            }
          }
        }
        "cors" === n.credentials && (i.withCredentials = !0), i.onreadystatechange = r, this.usingActiveXhr || (i.onload = r, i.onerror = function () {
          e(new TypeError("Network request failed"))
        }), i.open(n.method, n.url, !0), "responseType" in i && s.blob && (i.responseType = "blob"), n.headers.forEach((function (t, e) {
          e.forEach((function (e) {
            i.setRequestHeader(t, e)
          }))
        })), i.send(void 0 === n._bodyInit ? null : n._bodyInit)
      }))
    }, fetch.Promise = window.Promise, window.fetch.polyfill = !0, window.fetch.apply(window, t)
  }
  var r = n(3);
  n.d(e, "a", (function () {
    return o
  })), n.d(e, "b", (function () {
    return a
  }));
  var o = function (t, e) {
      if (r.a.empty(e)) return t;
      var n = function (t) {
        return Object.keys(t).map((function (e) {
          return "undefined" !== t[e] && "null" !== t[e] && void 0 !== t[e] && null !== t[e] && "" !== t[e] ? "".concat(e, "=").concat(encodeURIComponent(t[e])) : void 0
        })).filter((function (t) {
          return void 0 !== t
        })).join("&")
      }(e);
      return t + (r.a.empty(n) ? "" : "?" + n)
    },
    a = function (t) {
      var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        r = arguments.length > 3 ? arguments[3] : void 0;
      return i(o(t, e), n, r).then((function (t) {
        return t.json()
      })).catch((function (t) {
        return {
          error: t
        }
      }))
    }
}, function (t, e, n) {
  "use strict";
  n.d(e, "g", (function () {
    return r
  })), n.d(e, "e", (function () {
    return o
  })), n.d(e, "c", (function () {
    return a
  })), n.d(e, "d", (function () {
    return s
  })), n.d(e, "b", (function () {
    return l
  })), n.d(e, "a", (function () {
    return c
  })), n.d(e, "f", (function () {
    return u
  }));
  var i = n(6),
    r = navigator.userAgent.toLowerCase(),
    o = window.location.href.match(/https*:\/\/beta\.|\?mode=test/i),
    a = navigator.platform.toUpperCase().indexOf("MAC") >= 0,
    s = /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(r),
    l = ["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"].includes(navigator.platform) || navigator.userAgent.includes("Mac") && "ontouchend" in document || a;

  function c() {
    var t = {
        platform: i.g,
        name: i.g,
        type: i.g,
        screen: i.g,
        browser: i.g,
        screenWidth: screen.width,
        screenHeight: screen.height
      },
      e = t.screenWidth;
    return t.screen = e && e > 1200 ? i.e.wide : i.e.standard, s ? (t.platform = i.d.ios, t.name = i.c.ipad, t.type = i.f.tablet) : r.indexOf("iphone") > -1 ? (t.platform = i.d.ios, t.name = i.c.iphone, t.type = i.f.smartphone) : r.indexOf(i.d.android) > -1 ? (t.platform = i.d.android, t.type = r.indexOf("mobile") > -1 ? i.f.smartphone : i.f.tablet) : r.indexOf("windows phone") > -1 ? (t.platform = i.d.windows, t.type = i.f.smartphone) : t.type = i.f.desktop, r.indexOf(i.a.chrome) > -1 ? t.browser = i.a.chrome : r.indexOf(i.a.firefox) > -1 ? t.browser = i.a.firefox : r.indexOf("msie") > -1 || /Trident\/7.0/i.test(r) ? t.browser = i.a.ie : r.indexOf(i.a.safari) > -1 && r.indexOf(i.a.chrome) < 0 && (t.browser = i.a.safari), t
  }

  function u() {
    var t = document.createElement("canvas");
    return !!window.WebGLRenderingContext && (t.getContext("webgl") || t.getContext("experimental-webgl"))
  }
}, function (t, e, n) {
  "use strict";

  function i(t) {
    var e = document.body || document.documentElement;
    if ("string" == typeof e.style[t]) return t;
    for (var n = ["Moz", "Webkit", "Khtml", "O", "ms"], i = n.length, r = t.charAt(0).toUpperCase() + t.substr(1), o = 0; o < i; ++o) {
      var a = n[o] + r;
      if (a in e.style) return a
    }
    return !1
  }

  function r(t, e) {
    return window.getComputedStyle(t).getPropertyValue(e)
  }
  n.d(e, "b", (function () {
    return i
  })), n.d(e, "a", (function () {
    return r
  }))
}, function (t, e, n) {
  "use strict";
  n.d(e, "a", (function () {
    return u
  }));
  var i = n(2),
    r = n.n(i),
    o = n(1),
    a = n.n(o),
    s = n(28),
    l = n.n(s),
    c = n(40).default,
    u = function () {
      function t() {
        r()(this, t), this.log = l.a, this._emitter = c()
      }
      return a()(t, [{
        key: "on",
        value: function (t, e) {
          this._emitter.on(t, e)
        }
      }, {
        key: "off",
        value: function (t, e) {
          this._emitter.off(t, e)
        }
      }, {
        key: "trigger",
        value: function (t, e) {
          this._emitter.emit(t, e)
        }
      }]), t
    }()
}, function (t, e, n) {
  "use strict";
  n.d(e, "a", (function () {
    return w
  }));
  var i = n(2),
    r = n.n(i),
    o = n(8),
    a = n.n(o),
    s = n(5),
    l = n.n(s),
    c = n(21),
    u = n.n(c),
    h = n(1),
    d = n.n(h),
    f = n(10),
    p = n.n(f),
    v = n(18),
    m = n(3),
    g = n(4),
    b = n(31),
    y = function (t) {
      function e(t) {
        var n;
        return r()(this, e), (n = a()(this, l()(e).call(this))).$el = t, n
      }
      return p()(e, t), d()(e, [{
        key: "name",
        get: function () {
          return "ZDom"
        }
      }, {
        key: "isVisible",
        get: function () {
          return Object(g.k)(this.$el)
        }
      }, {
        key: "isHidden",
        get: function () {
          return !this.isVisible
        }
      }, {
        key: "computedStyleEl",
        get: function () {
          return window.getComputedStyle(this.$el)
        }
      }, {
        key: "padding",
        get: function () {
          var t = this,
            e = function (e) {
              return parseInt(t.computedStyleEl.getPropertyValue("padding-".concat(e)), 10)
            };
          return {
            top: e("top"),
            right: e("right"),
            bottom: e("bottom"),
            left: e("left")
          }
        }
      }, {
        key: "border",
        get: function () {
          var t = this,
            e = function (e) {
              return parseInt(t.computedStyleEl.getPropertyValue("border-".concat(e, "-width")), 10)
            };
          return {
            top: e("top"),
            right: e("right"),
            bottom: e("bottom"),
            left: e("left")
          }
        }
      }, {
        key: "innerWidth",
        get: function () {
          var t = this.padding,
            e = t.left,
            n = t.right;
          return this.width() + e + n
        }
      }, {
        key: "innerHeight",
        get: function () {
          var t = this.padding,
            e = t.top,
            n = t.bottom;
          return this.height() + e + n
        }
      }, {
        key: "outerWidth",
        get: function () {
          return this.$el.offsetWidth || parseInt(this.computedStyleEl.width)
        }
      }, {
        key: "outerHeight",
        get: function () {
          return this.$el.offsetHeight || parseInt(this.computedStyleEl.height)
        }
      }]), d()(e, [{
        key: "show",
        value: function () {
          return this.setStyles({
            display: "block"
          }), this
        }
      }, {
        key: "hide",
        value: function () {
          return this.setStyles({
            display: "none"
          }), this
        }
      }, {
        key: "on",
        value: function () {
          return this.$el.on.apply(this.$el, arguments), this
        }
      }, {
        key: "off",
        value: function () {
          return this.$el.off.apply(this.$el, arguments), this
        }
      }, {
        key: "parent",
        value: function () {
          return this.$el.parentElement || this.$el.parentNode
        }
      }, {
        key: "parents",
        value: function (t) {
          return Object(g.e)(this.$el, t)
        }
      }, {
        key: "width",
        value: function (t) {
          if (t) return this.setStyles({
            width: t + "px"
          }), this.$el;
          var e = this.padding,
            n = e.left,
            i = e.right,
            r = this.border,
            o = r.left,
            a = r.right;
          return this.outerWidth - n - i - o - a
        }
      }, {
        key: "height",
        value: function (t) {
          if (t) return this.setStyles({
            height: t + "px"
          }), this.$el;
          var e = this.padding,
            n = e.top,
            i = e.bottom,
            r = this.border,
            o = r.top,
            a = r.bottom;
          return this.outerHeight - n - i - o - a
        }
      }, {
        key: "attr",
        value: function (t, e) {
          return e ? this.setAttribute(t, e) : this.getAttribute(t)
        }
      }, {
        key: "findAll",
        value: function (t) {
          var e = this.$el.findAll(t);
          return Array.prototype.slice.call(e)
        }
      }, {
        key: "html",
        value: function (t) {
          return t ? u()(l()(e.prototype), "html", this).call(this, t) : this.$el.innerHTML
        }
      }, {
        key: "text",
        value: function (t) {
          return Object(g.d)(this.$el, t)
        }
      }, {
        key: "data",
        value: function (t, e) {
          if (!e) return this.$el.dataset[t];
          this.$el.dataset[t] = e
        }
      }, {
        key: "transition",
        value: function (t, e, n, i) {
          return Object(b.a)(this.$el, t, e, n, i), this
        }
      }, {
        key: "wrap",
        value: function (t) {
          return Object(g.p)(this.$el, t)
        }
      }, {
        key: "is",
        value: function (t) {
          return this.$el.tagName.toLowerCase() == t
        }
      }, {
        key: "offset",
        value: function () {
          return Object(g.c)(this.$el)
        }
      }, {
        key: "getStyleValue",
        value: function (t) {
          return this.computedStyleEl.getPropertyValue(t)
        }
      }, {
        key: "render",
        value: function () {}
      }]), e
    }(v.a);

  function w(t) {
    var e = function (t) {
      return t.length ? t : null
    };
    if (m.a.element(t)) return new y(t);
    if (m.a.string(t)) {
      var n = document.findAll(t),
        i = [];
      return n.forEach((function (t) {
        i.push(new y(t))
      })), e(i)
    }
    if (m.a.array(t) || t instanceof NodeList) {
      var r = [];
      return t.forEach((function (t) {
        m.a.element(t) && r.push(new y(t))
      })), e(r)
    }
    return null
  }
}, function (t, e) {
  function n(t) {
    return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
      return typeof t
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    })(t)
  }

  function i(e) {
    return "function" == typeof Symbol && "symbol" === n(Symbol.iterator) ? t.exports = i = function (t) {
      return n(t)
    } : t.exports = i = function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : n(t)
    }, i(e)
  }
  t.exports = i
}, function (t, e) {
  t.exports = {
    log: function () {},
    warn: function () {},
    info: function () {},
    error: function () {}
  }
}, function (t, e, n) {
  var i = n(41),
    r = n(42),
    o = n(43);
  t.exports = function (t, e) {
    return i(t) || r(t, e) || o()
  }
}, function (t, e, n) {
  "use strict";
  n.d(e, "c", (function () {
    return o
  })), n.d(e, "g", (function () {
    return a
  })), n.d(e, "b", (function () {
    return s
  })), n.d(e, "e", (function () {
    return l
  })), n.d(e, "d", (function () {
    return c
  })), n.d(e, "f", (function () {
    return u
  })), n.d(e, "a", (function () {
    return h
  }));
  var i = n(26),
    r = n(4),
    o = function (t, e, n) {
      var i = (t = t.replace(/\s+/g, " ")).split(/\s/);
      return n && i.length < n ? [t] : [i.slice(0, e).join(" "), " " + i.slice(e).join(" ")]
    },
    a = function (t) {
      return t && "" != t.trim() ? t.trim().split(/\s+/gi).length : 0
    },
    s = function (t) {
      return t = (t = (t = (t = (t = (t = (t = (t = t.toLowerCase()).replace(/Ă |Ă¡|áº¡|áº£|Ă£|Ă¢|áº§|áº¥|áº­|áº©|áº«|Äƒ|áº±|áº¯|áº·|áº³|áºµ/g, "a")).replace(/Ă¨|Ă©|áº¹|áº»|áº½|Ăª|á»|áº¿|á»‡|á»ƒ|á»…/g, "e")).replace(/Ă¬|Ă­|á»‹|á»‰|Ä©/g, "i")).replace(/Ă²|Ă³|á»|á»|Ăµ|Ă´|á»“|á»‘|á»™|á»•|á»—|Æ¡|á»|á»›|á»£|á»Ÿ|á»¡/g, "o")).replace(/Ă¹|Ăº|á»¥|á»§|Å©|Æ°|á»«|á»©|á»±|á»­|á»¯/g, "u")).replace(/á»³|Ă½|á»µ|á»·|á»¹/g, "y")).replace(/Ä‘/g, "d")
    },
    l = function (t) {
      return t.toLowerCase().split(" ").map((function (t) {
        return t[0].toUpperCase() + t.substr(1)
      })).join(" ")
    };

  function c(t) {
    if (t && "string" == typeof t && t.trim()) return t.replace(/\s+/g, "-")
  }

  function u(t, e) {
    var n = t.parentNode,
      o = Object(i.a)(n).width() - e,
      a = Object(r.d)(t),
      s = a.split(/\s+/g),
      l = a,
      c = Object(i.a)(document.createElement("span"));
    c.setStyles({
      position: "absolute",
      top: 0,
      visibility: "hidden"
    }), Object(r.g)(t, c.$el);
    for (var u = 0, h = s.length; u < h; u++) {
      var d = s.slice(0, u + 1);
      if (c.text(d.join(" ")), c.width() > o) {
        l = s.slice(0, u).join(" ");
        break
      }
    }
    return c.remove(), l + "..."
  }

  function h(t, e) {
    var n, i, r, o = "<span>".concat("â€¦", "</span>"),
      a = t.style,
      s = e * (n = t, (r = document.createElement(n.nodeName)).setAttribute("style", "margin:0; padding:0; font-family:" + (n.style.fontFamily || "inherit") + "; font-size:" + (n.style.fontSize || "inherit")), r.innerHTML = "A", n.parentNode.appendChild(r), i = r.clientHeight, r.parentNode.removeChild(r), i),
      l = t.textContent.split(" "),
      c = a.height;
    a.height = "auto";
    var u = a.maxHeight;
    if (a.maxHeight = "none", t.offsetHeight <= s) return a.height = c, void(a.maxHeight = u);
    for (var h, d = l.length - 1, f = 0; f < d;) h = f + d + 1 >> 1, t.textContent = l.slice(0, h).join(" "), t.insertAdjacentHTML("beforeend", o), t.offsetHeight > s ? d = h - 1 : f = h;
    t.textContent = l.slice(0, d).join(" "), t.insertAdjacentHTML("beforeend", o), a.height = c, a.maxHeight = u
  }
}, function (t, e, n) {
  "use strict";
  var i = n(27),
    r = n.n(i),
    o = n(12);

  function a() {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
      e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
      n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
    return t.replace(new RegExp(e.toString().replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1"), "g"), n.toString())
  }

  function s() {
    var t = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "").toString();
    return (t = function () {
      var t = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "").toString();
      return t = a(t, "-", " "), t = a(t, "_", " "), a(t = function () {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "").toString().replace(/\w\S*/g, (function (t) {
          return t.charAt(0).toUpperCase() + t.substr(1).toLowerCase()
        }))
      }(t), " ", "")
    }(t)).charAt(0).toLowerCase() + t.slice(1)
  }
  var l = n(9),
    c = n(24);

  function u(t, e, n, i, a) {
    var u = "400",
      h = "ease",
      d = {
        propertyMap: {
          marginLeft: "margin",
          marginRight: "margin",
          marginBottom: "margin",
          marginTop: "margin",
          paddingLeft: "padding",
          paddingRight: "padding",
          paddingBottom: "padding",
          paddingTop: "padding"
        },
        enabled: !0,
        useTransitionEnd: !1
      },
      f = document.createElement("div"),
      p = {};
    p.transition = Object(c.b)("transition"), p.transitionDelay = Object(c.b)("transitionDelay"), p.transform = Object(c.b)("transform"), p.transformOrigin = Object(c.b)("transformOrigin"), p.filter = Object(c.b)("Filter"), p.transform3d = (f.style[p.transform] = "", f.style[p.transform] = "rotateY(90deg)", "" !== f.style[p.transform]);
    var v = p.transitionEnd = {
      transition: "transitionend",
      MozTransition: "transitionend",
      OTransition: "oTransitionEnd",
      WebkitTransition: "webkitTransitionEnd",
      msTransition: "MSTransitionEnd"
    }[p.transition] || null;
    f = null;
    var m = {
      ease: "ease",
      in: "ease-in",
      out: "ease-out",
      "in-out": "ease-in-out",
      snap: "cubic-bezier(0,1,.5,1)",
      easeInCubic: "cubic-bezier(.550,.055,.675,.190)",
      easeOutCubic: "cubic-bezier(.215,.61,.355,1)",
      easeInOutCubic: "cubic-bezier(.645,.045,.355,1)",
      easeInCirc: "cubic-bezier(.6,.04,.98,.335)",
      easeOutCirc: "cubic-bezier(.075,.82,.165,1)",
      easeInOutCirc: "cubic-bezier(.785,.135,.15,.86)",
      easeInExpo: "cubic-bezier(.95,.05,.795,.035)",
      easeOutExpo: "cubic-bezier(.19,1,.22,1)",
      easeInOutExpo: "cubic-bezier(1,0,0,1)",
      easeInQuad: "cubic-bezier(.55,.085,.68,.53)",
      easeOutQuad: "cubic-bezier(.25,.46,.45,.94)",
      easeInOutQuad: "cubic-bezier(.455,.03,.515,.955)",
      easeInQuart: "cubic-bezier(.895,.03,.685,.22)",
      easeOutQuart: "cubic-bezier(.165,.84,.44,1)",
      easeInOutQuart: "cubic-bezier(.77,0,.175,1)",
      easeInQuint: "cubic-bezier(.755,.05,.855,.06)",
      easeOutQuint: "cubic-bezier(.23,1,.32,1)",
      easeInOutQuint: "cubic-bezier(.86,0,.07,1)",
      easeInSine: "cubic-bezier(.47,0,.745,.715)",
      easeOutSine: "cubic-bezier(.39,.575,.565,1)",
      easeInOutSine: "cubic-bezier(.445,.05,.55,.95)",
      easeInBack: "cubic-bezier(.6,-.28,.735,.045)",
      easeOutBack: "cubic-bezier(.175, .885,.32,1.275)",
      easeInOutBack: "cubic-bezier(.68,-.55,.265,1.55)"
    };

    function g(t, e, n, i) {
      var r = function (t) {
        var e = [];
        for (var n in t) n = s(n), n = b(n = d.propertyMap[n] || n), p[n] && (n = b(p[n])), -1 === e.indexOf(n) && e.push(n);
        return e
      }(t);
      n = m[n];
      var o = y(e) + " " + n;
      parseInt(i, 10) > 0 && (o += " " + y(i));
      var a = [];
      return r.forEach((function (t) {
        a.push(t + " " + o)
      })), a.join(", ")
    }

    function b(t) {
      return t.replace(/([A-Z])/g, (function (t) {
        return "-" + t.toLowerCase()
      }))
    }

    function y(t) {
      var e = t;
      return "string" != typeof e || e.match(/^[\-0-9\.]+/) || (e = u),
        function (t, e) {
          return "string" != typeof t || t.match(/^[\-0-9\.]+$/) ? "" + t + e : t
        }(e, "ms")
    }
    return function (t, e, n, i, a) {
      var s = t,
        c = 0,
        f = Object(o.a)({}, e);
      "function" == typeof n && (a = n, n = void 0), "object" === r()(n) && (i = n.easing, c = n.delay || 0, a = n.complete, n = n.duration), "function" == typeof i && (a = i, i = void 0), void 0 !== f.easing && (i = f.easing, delete f.easing), void 0 !== f.duration && (n = f.duration, delete f.duration), void 0 !== f.complete && (a = f.complete, delete f.complete), void 0 !== f.delay && (c = f.delay, delete f.delay), void 0 === n && (n = u), void 0 === i && (i = h), n = y(n);
      var m, b, w = g(f, n, i, c),
        E = p.transition ? parseInt(n, 10) + parseInt(c, 10) : 0;
      return 0 === E ? (a && a.apply(s), s) : (m = !1, b = function t() {
        m && s.off(v, t), E > 0 && (s.style[p.transition] = null), "function" == typeof a && a.apply(s)
      }, E > 0 && v && d.useTransitionEnd ? (m = !0, s.on(v, b)) : window.setTimeout(b, E), E > 0 && (s.style[p.transition] = w), Object(l.setStyles)(s, f), s)
    }(t, e, n, i, a)
  }
  n.d(e, "a", (function () {
    return u
  }))
}, function (t, e, n) {
  "use strict";
  n.d(e, "a", (function () {
    return E
  }));
  var i = n(2),
    r = n.n(i),
    o = n(8),
    a = n.n(o),
    s = n(5),
    l = n.n(s),
    c = n(11),
    u = n.n(c),
    h = n(1),
    d = n.n(h),
    f = n(10),
    p = n.n(f),
    v = n(18),
    m = n(0),
    g = n(12),
    b = n(7),
    y = n(4),
    w = {
      SHOW: "SHOW",
      HIDE: "HIDE",
      OK: "OK"
    },
    E = function (t) {
      function e() {
        var t, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return r()(this, e), (t = a()(this, l()(e).call(this))).options = Object(g.a)(t.defaultOptions, n), t.render(), t.$btnConfirmEl = t.$el.find(".btn-confirm"), t.$btnCloseEl = t.$el.find(".btn-close"), t.$title = t.$el.find(".dialog-title"), t.$content = t.$el.find(".dialog-content"), t.handleKeydown = t.handleKeydown.bind(u()(t)), t.handleBtnOkClick = t.handleBtnOkClick.bind(u()(t)), t.handleBtnCloseClick = t.handleBtnCloseClick.bind(u()(t)), t.bindEvents(), t
      }
      return p()(e, t), d()(e, [{
        key: "name",
        get: function () {
          return "Dialog"
        }
      }, {
        key: "defaultOptions",
        get: function () {
          return {
            customClass: "",
            title: "",
            icon: "",
            htmlContent: "",
            btnCloseLabel: "ÄĂ³ng",
            btnOkLabel: ""
          }
        }
      }], [{
        key: "EVENTS",
        get: function () {
          return w
        }
      }]), d()(e, [{
        key: "render",
        value: function () {
          this.$el = this.Dom.createEl("div", {
            className: "dialog"
          }), this.$el.innerHTML = "<div class='dialog-inner ".concat(this.options.customClass, "'>\n                ").concat(this.options.icon ? "<div class='dialog-icon'>\n                                            <span class='".concat(this.options.icon, "'></span>\n                                        </div>") : "", "\n                <h3 class='dialog-title'>").concat(this.options.title, "</h3>\n                <div class='dialog-content'>\n                    ").concat(this.options.htmlContent, "\n                </div>\n                <div class=\"dialog-actions\">\n                    <a class='btn-close default'>").concat(this.options.btnCloseLabel, "</a>\n                    ").concat(this.options.btnOkLabel ? "<a class='btn-confirm'>".concat(this.options.btnOkLabel, "</a>") : "", "\n                    ").concat(this.options.btnOk ? "<a class='btn-confirm'>\n                        ".concat(this.options.btnOk.label, "\n                        <span class='").concat(this.options.btnOk.icon, "'></span>\n                    </a>") : "", "\n                </div>\n            </div>"), document.body.appendChild(this.$el)
        }
      }, {
        key: "bindEvents",
        value: function () {
          this.$btnConfirmEl && this.$btnConfirmEl.on("click", this.handleBtnOkClick), this.$btnCloseEl.on("click", this.handleBtnCloseClick), window.on("keydown", this.handleKeydown)
        }
      }, {
        key: "handleKeydown",
        value: function (t) {
          t.keyCode == m.x.ESC && this.close()
        }
      }, {
        key: "handleBtnCloseClick",
        value: function () {
          this.close()
        }
      }, {
        key: "handleBtnOkClick",
        value: function () {
          this.trigger(w.OK)
        }
      }, {
        key: "hideScroll",
        value: function () {
          var t = document.documentElement.style,
            e = Object(b.s)();
          t.boxSizing = "content-box", t.paddingRight = e + "px", b.G.disable(), this.keepStaticHeader(e)
        }
      }, {
        key: "showScroll",
        value: function () {
          var t = document.documentElement.style;
          t.boxSizing = "", t.paddingRight = "", b.G.enable(), this.keepStaticHeader()
        }
      }, {
        key: "setTitle",
        value: function (t) {
          this.$title.innerHTML = t
        }
      }, {
        key: "setContent",
        value: function (t) {
          this.$content.innerHTML = t
        }
      }, {
        key: "setClass",
        value: function (t) {
          var e = this.$el.find(".dialog-inner");
          Object(y.a)(e, t.split(" "))
        }
      }, {
        key: "setIcon",
        value: function (t) {
          var e = this.$el.find(".dialog-icon span");
          this.Dom.addClass(e, t)
        }
      }, {
        key: "show",
        value: function () {
          this.Dom.addClass(this.$el, "dialog-show"), this.hideScroll(), this.trigger(w.SHOW)
        }
      }, {
        key: "hideLoader",
        value: function () {
          var t = this.$el.find(".loader");
          t && this.Dom.addClass(t, "hide")
        }
      }, {
        key: "close",
        value: function () {
          this.Dom.removeClass(this.$el, "dialog-show"), this.showScroll(), this.trigger(w.HIDE)
        }
      }, {
        key: "destroy",
        value: function () {
          this.Dom.removeFromDom(this.$el)
        }
      }, {
        key: "keepStaticHeader",
        value: function (t) {
          var e = t ? t + "px" : "",
            n = document.find(".sticky-header");
          n && (n.style.right = e)
        }
      }]), e
    }(v.a)
}, function (t, e, n) {
  "use strict";
  n.d(e, "a", (function () {
    return y
  }));
  var i = n(2),
    r = n.n(i),
    o = n(8),
    a = n.n(o),
    s = n(11),
    l = n.n(s),
    c = n(5),
    u = n.n(c),
    h = n(21),
    d = n.n(h),
    f = n(1),
    p = n.n(f),
    v = n(10),
    m = n.n(v),
    g = n(18),
    b = n(12),
    y = function (t) {
      function e() {
        var t, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return r()(this, e), (t = a()(this, u()(e).call(this))).options = Object(b.a)(t.defaultOptions, i), t.app = n, t.handleClick = t.handleClick.bind(l()(t)), t.render(), t.bindEvents(), t
      }
      return m()(e, t), p()(e, [{
        key: "tagName",
        get: function () {
          return "a"
        }
      }, {
        key: "defaultOptions",
        get: function () {
          return {}
        }
      }]), p()(e, [{
        key: "handleClick",
        value: function (t) {
          t.preventDefault()
        }
      }, {
        key: "render",
        value: function () {
          return d()(u()(e.prototype), "render", this).call(this), this.$el
        }
      }, {
        key: "bindEvents",
        value: function () {
          this.$el.on("click", this.handleClick)
        }
      }, {
        key: "unbindEvents",
        value: function () {
          this.$el.off("click", this.handleClick)
        }
      }]), e
    }(g.a)
}, function (t, e, n) {
  "use strict";
  var i = n(9),
    r = n(4),
    o = function () {
      var t = document.createElement("video");
      if (t.canPlayType) {
        var e = t.canPlayType('video/webm; codecs="vp8, vorbis"').toLocaleLowerCase();
        if ("probably" === e || "maybe" === e) return Object(i.addClass)(document.body, "has-support-webm"), !0
      }
      return !1
    };
  n.d(e, "a", (function () {
    return s
  }));
  var a = function (t) {
    var e = window.devicePixelRatio > 1 ? 1.5 * t : t,
      n = 480;
    return e > 1024 ? n = 1200 : e > 860 ? n = 1024 : e > 660 ? n = 860 : e > 480 && (n = 660), n
  };

  function s(t) {
    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    if (t && t instanceof Element) {
      var n = window,
        s = t.getBoundingClientRect().width,
        l = e.threshold,
        c = function () {
          if (Object(r.k)(t) && Object(r.j)(t, l)) {
            var n = t.getAttribute("data-src");
            if (n) {
              var c = n.search(/\.gif$/) > -1;
              if (e.autoscale && !c) {
                var u = /\/w\d+\//gi;
                n.search(u) < 0 && (n = n.replace(/\/Uploaded\//g, "/w480/Uploaded/")), n = n.replace(u, "/w" + a(s) + "/")
              }
              var h = function (e) {
                t.parentNode && (t.src = n, Object(i.addClass)(t, "unveil"), t.removeAttribute("data-src"), Object(i.removeFromDom)(e))
              };
              if (Object(r.e)(t, ".article-thumbnail"))
                if (c && o() && window.AB_MODE) {
                  var d = Object(i.createEl)("video", {}, {
                    playsinline: !0,
                    muted: !0,
                    loop: "loop",
                    autoplay: !0,
                    src: "".concat(n, ".webm")
                  });
                  Object(r.h)(t, d), Object(i.removeFromDom)(t)
                } else {
                  var f = new Image;
                  f.src = n, "decode" in f ? f.decode().then((function () {
                    h(f)
                  })).catch((function () {
                    Object(i.removeFromDom)(t)
                  })) : h(f)
                }
              else Object(i.addClass)(t, "unveil"), t.setAttribute("src", n), t.removeAttribute("data-src")
            }
          }
        };
      n.on("scroll", c), n.on("resize", c), c()
    }
  }
}, function (t, e, n) {
  "use strict";

  function i() {
    var t = {};
    return t.promise = new Promise((function (e, n) {
      t.resolve = e, t.reject = n
    })), t
  }
  n.d(e, "a", (function () {
    return i
  }))
}, function (t, e, n) {
  "use strict";
  n.d(e, "a", (function () {
    return u
  })), n.d(e, "b", (function () {
    return l
  })), n.d(e, "c", (function () {
    return c
  }));
  var i = n(2),
    r = n.n(i),
    o = n(1),
    a = n.n(o),
    s = function () {
      function t() {
        r()(this, t), this.data = []
      }
      return a()(t, [{
        key: "getItem",
        value: function (t) {
          return this.data[t]
        }
      }, {
        key: "setItem",
        value: function (t, e) {
          this.data[t] = String(e)
        }
      }, {
        key: "removeItem",
        value: function (t) {
          delete this.data[t]
        }
      }]), t
    }(),
    l = u() ? window.localStorage : new s,
    c = function () {
      try {
        return "sessionStorage" in window && (window.sessionStorage.setItem("__test__", "__test__"), window.sessionStorage.removeItem("__test__"), !0)
      } catch (t) {
        return !1
      }
    }() ? window.sessionStorage : new s;

  function u() {
    try {
      return "localStorage" in window && (window.localStorage.setItem("__test__", "__test__"), window.localStorage.removeItem("__test__"), !0)
    } catch (t) {
      return !1
    }
  }
}, function (t, e, n) {
  "use strict";

  function i(t, e) {
    if (!t || isNaN(+e)) return e;
    var n, i, r, o, a, s, l, c, u, h, d, f, p = t.length,
      v = t.search(/[0-9\-\+#]/),
      m = v > 0 ? t.substring(0, v) : "",
      g = t.split("").reverse().join(""),
      b = g.search(/[0-9\-\+#]/),
      y = p - b,
      w = t.substring(y, y + 1),
      E = y + ("." === w || "," === w ? 1 : 0),
      k = b > 0 ? t.substring(E, p) : "";
    if (d = "-" === (t = t.substring(v, E)).charAt(0), f = "+" === t.charAt(0), n = e < 0 ? e = -e : 0, r = (i = t.match(/[^\d\-\+#]/g)) && i[i.length - 1] || ".", o = i && i[1] && i[0] || ",", t = t.split(r), e = +(e = (+e).toFixed(t[1] && t[1].length)) + "", s = t[1] && t[1].lastIndexOf("0"), (!(c = e.split("."))[1] || c[1] && c[1].length <= s) && (e = (+e).toFixed(s + 1)), u = t[0].split(o), t[0] = u.join(""), (a = t[0] && t[0].indexOf("0")) > -1)
      for (; c[0].length < t[0].length - a;) c[0] = "0" + c[0];
    else 0 == +c[0] && (c[0] = "");
    if ((e = e.split("."))[0] = c[0], l = u[1] && u[u.length - 1].length) {
      for (g = "", y = (h = e[0]).length % l, p = h.length, E = 0; E < p; E++) g += h.charAt(E), !((E - y + 1) % l) && E < p - l && (g += o);
      e[0] = g
    }
    return e[1] = t[1] && e[1] ? r + e[1] : "", "0" !== (i = e.join("")) && "" !== i || (n = !1), m + (!n && f ? "+" : n && f ? "-" : n && d ? "-" : "") + i + k
  }

  function r(t, e) {
    var n, i = [{
      value: 1,
      symbol: ""
    }, {
      value: 1e3,
      symbol: "k"
    }, {
      value: 1e6,
      symbol: "M"
    }, {
      value: 1e9,
      symbol: "G"
    }];
    for (n = i.length - 1; n > 0 && !(t >= i[n].value); n--);
    return (t / i[n].value).toFixed(e).replace(/\.0+$|(\.[0-9]*[1-9])0+$/, "$1") + i[n].symbol
  }
  n.d(e, "a", (function () {
    return i
  })), n.d(e, "b", (function () {
    return r
  }))
}, function (t, e, n) {
  "use strict";
  n.d(e, "a", (function () {
    return k
  }));
  var i = n(2),
    r = n.n(i),
    o = n(8),
    a = n.n(o),
    s = n(5),
    l = n.n(s),
    c = n(11),
    u = n.n(c),
    h = n(1),
    d = n.n(h),
    f = n(10),
    p = n.n(f),
    v = n(25),
    m = n(9),
    g = n(3),
    b = n(4),
    y = n(7),
    w = {
      CHANGE: "CHANGE"
    },
    E = {
      UP: "up",
      DOWN: "down"
    },
    k = function (t) {
      function e(t) {
        var n;
        if (r()(this, e), n = a()(this, l()(e).call(this)), !t || !g.a.element(t)) throw Error("InviewPortPlugin: ele isnt supplied or input isnot element type");
        return n.direction = null, n.$el = t, n.targetElName = "".concat(n.$el.tagName, " | Id: ").concat(n.$el.id), n.timer = !1, n.scrollY = 0, n.handleScoll = n.handleScoll.bind(u()(n)), n.handleInviewPort = n.handleInviewPort.bind(u()(n)), n.handleInviewPort(), n.bindEvents(), n
      }
      return p()(e, t), d()(e, [{
        key: "name",
        get: function () {
          return "InviewPortPlugin"
        }
      }], [{
        key: "EVENTS",
        get: function () {
          return w
        }
      }, {
        key: "DIRECTION",
        get: function () {
          return E
        }
      }]), d()(e, [{
        key: "handleScoll",
        value: function () {
          var t = this;
          this.timer || (this.timer = !0, window.requestAnimationFrame((function () {
            var e = Object(y.u)();
            t.direction = e > t.scrollY ? E.DOWN : E.UP, t.handleInviewPort(), t.scrollY = e, t.timer = !1
          })))
        }
      }, {
        key: "handleInviewPort",
        value: function () {
          var t = Object(b.k)(this.$el) && Object(m.isOnViewport)(this.$el);
          this.isInViewPort !== t && (this.trigger(w.CHANGE, {
            isInViewPort: t,
            direction: this.direction
          }), this.isInViewPort = t)
        }
      }, {
        key: "bindEvents",
        value: function () {
          window.on("scroll", this.handleScoll)
        }
      }, {
        key: "unbindEvents",
        value: function () {
          window.off("scroll", this.handleScoll)
        }
      }, {
        key: "destroy",
        value: function () {
          this.unbindEvents()
        }
      }]), e
    }(v.a)
}, function (t, e) {
  function n(e, i) {
    return t.exports = n = Object.setPrototypeOf || function (t, e) {
      return t.__proto__ = e, t
    }, n(e, i)
  }
  t.exports = n
}, function (t, e, n) {
  "use strict";
  n.r(e), e.default = function (t) {
    return t = t || Object.create(null), {
      on: function (e, n) {
        (t[e] || (t[e] = [])).push(n)
      },
      off: function (e, n) {
        t[e] && t[e].splice(t[e].indexOf(n) >>> 0, 1)
      },
      emit: function (e, n) {
        (t[e] || []).slice().map((function (t) {
          t(n)
        })), (t["*"] || []).slice().map((function (t) {
          t(e, n)
        }))
      }
    }
  }
}, function (t, e) {
  t.exports = function (t) {
    if (Array.isArray(t)) return t
  }
}, function (t, e) {
  t.exports = function (t, e) {
    if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) {
      var n = [],
        i = !0,
        r = !1,
        o = void 0;
      try {
        for (var a, s = t[Symbol.iterator](); !(i = (a = s.next()).done) && (n.push(a.value), !e || n.length !== e); i = !0);
      } catch (t) {
        r = !0, o = t
      } finally {
        try {
          i || null == s.return || s.return()
        } finally {
          if (r) throw o
        }
      }
      return n
    }
  }
}, function (t, e) {
  t.exports = function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance")
  }
}, function (t, e, n) {
  var i = n(5);
  t.exports = function (t, e) {
    for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = i(t)););
    return t
  }
}, function (t, e, n) {
  "use strict";
  var i = n(2),
    r = n.n(i),
    o = n(8),
    a = n.n(o),
    s = n(11),
    l = n.n(s),
    c = n(5),
    u = n.n(c),
    h = n(21),
    d = n.n(h),
    f = n(1),
    p = n.n(f),
    v = n(10),
    m = n.n(v),
    g = n(17),
    b = n(18),
    y = n(38),
    w = n(14),
    E = n(12),
    k = n(3),
    T = {
      product: "zingnews",
      playInline: "playsinline",
      width: "100%",
      height: "100%",
      autoPlay: !1,
      loop: !1,
      volume: 70,
      pluginsOptions: {
        ControlsPlugin: {
          layout: {
            left: ["playpause", "volume", "time"],
            right: ["settings", "fullscreen"],
            default: ["seekbar"]
          },
          alwaysShowControl: !1,
          time: {
            delimiter: "|"
          },
          theme: g.Constant.MediaControlConst.THEME.LIGHT_BLUE
        },
        BigPlayButtonPlugin: {
          disable: !1,
          buttonStyles: {
            width: "6em",
            height: "6em",
            borderRadius: "10px",
            backgroundColor: "rgba(0, 85, 138, .73)",
            border: 0
          }
        },
        PlayPauseFaceoutPlugin: {
          disable: !1,
          buttonStyles: {
            borderRadius: "10px",
            backgroundColor: "rgba(0, 85, 138, .73)",
            border: 0
          }
        },
        ads: {
          loadTimeout: 3e3,
          startTimeout: 5e3,
          skipTimeout: 3e3,
          poster: !0,
          noCountdownPlay: !0,
          showSlideBlack: !1,
          minDurationShowAd: 60
        },
        AutoPlayCountDownPlugin: {
          messageCountdown: "Video sáº½ cháº¡y sau",
          timeOut: 3e3,
          messageUnmute: "Nháº¥n Ä‘á»ƒ báº­t tiáº¿ng"
        },
        WatermarkPlugin: {
          sourceImg: "http://static-znews.zadn.vn/images/logo-watermark.png",
          styles: {
            width: "6%",
            height: "6%",
            top: "5%",
            left: "5%",
            right: "auto",
            bottom: "auto"
          }
        },
        QualityPlugin: {
          displayName: {
            highp: "Cao",
            lowp: "Tháº¥p",
            "very-highp": "Ráº¥t Cao",
            standardp: "TiĂªu Chuáº©n"
          },
          autoText: "(Tá»± Äá»™ng)",
          autoTextItem: "Tá»± Äá»™ng"
        }
      },
      playback: {
        hls: {
          startLevel: window.location.search.search("hlsquality") >= 0 ? 2 : -1,
          capLevelToPlayerSize: !0,
          maxBufferLength: 90,
          maxMaxBufferLength: 120,
          maxBufferSize: 104857600
        }
      },
      controls: {
        theaterMode: {
          buttonTooltip: {
            on: "Má»Ÿ rá»™ng",
            off: "Thu láº¡i"
          }
        }
      }
    };
  var A = n(16),
    C = n.n(A),
    _ = n(7),
    O = n(22),
    I = n(19),
    P = n(6),
    D = n(0);

  function S(t, e) {
    var n = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(t);
      e && (i = i.filter((function (e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable
      }))), n.push.apply(n, i)
    }
    return n
  }

  function R(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = null != arguments[e] ? arguments[e] : {};
      e % 2 ? S(n, !0).forEach((function (e) {
        C()(t, e, n[e])
      })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : S(n).forEach((function (e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
      }))
    }
    return t
  }
  var L = function () {
      return Object(_.q)("zoneid") || D.hb.DEFAULT
    },
    x = n(4),
    $ = n(30);
  n.d(e, "a", (function () {
    return N
  }));
  var M = 326,
    H = 184,
    N = function (t) {
      function e(t, n) {
        var i, o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        return r()(this, e), (i = a()(this, u()(e).call(this))).options = Object(E.a)(i.defaultOptions, o), i.app = t, i.$videoEl = n, i.id = "video-".concat(Object(_.F)()), i.adPlaying = !1, i.hadCountdown = !1, i.trackedPageView = !1, i.isMiniMode = !1, i.listenUserAction = i.options.listenUserAction, i.allowMiniMode = i.canMiniMode, i.allowInview = i.options.allowInview, i.allowInviewPlay = !0, i.isLiveVideo = !k.a.empty(n.getAttribute("streamId")), i.handleReady = i.handleReady.bind(l()(i)), i.handlePlay = i.handlePlay.bind(l()(i)), i.handlePause = i.handlePause.bind(l()(i)), i.handleTimeUpdate = i.handleTimeUpdate.bind(l()(i)), i.handleEnded = i.handleEnded.bind(l()(i)), i.handleMouseEnter = i.handleMouseEnter.bind(l()(i)), i.handleMouseLeave = i.handleMouseLeave.bind(l()(i)), i.handleAdStarted = i.handleAdStarted.bind(l()(i)), i.handleAdStop = i.handleAdStop.bind(l()(i)), i.handleInViewChange = i.handleInViewChange.bind(l()(i)), i.handleBtnMiniModeClick = i.handleBtnMiniModeClick.bind(l()(i)), i.handlePlayerClick = i.handlePlayerClick.bind(l()(i)), i.handleClick = i.handleClick.bind(l()(i)), i.pause = i.pause.bind(l()(i)), i.handleAds(), i.render(), i
      }
      return m()(e, t), p()(e, [{
        key: "name",
        get: function () {
          return "Player"
        }
      }, {
        key: "properties",
        get: function () {
          return {
            className: "player"
          }
        }
      }, {
        key: "canCountdown",
        get: function () {
          return !this.options.allowAutoplay && this.options.allowCountdown
        }
      }, {
        key: "canMiniMode",
        get: function () {
          return !this.app.disablePopupVideo && !this.listenUserAction && this.options.allowMiniMode
        }
      }, {
        key: "canAutoPlay",
        get: function () {
          return this.options.allowAutoplay
        }
      }, {
        key: "defaultOptions",
        get: function () {
          return {
            articleId: "",
            allowInview: !1,
            allowCountdown: !1,
            allowAutoplay: !1,
            allowMiniMode: !1,
            theaterMode: !1,
            listenUserAction: !1,
            tracking: {
              url: "",
              title: "",
              cateid: "",
              catename: "",
              hash: ""
            },
            ads: {
              allowAds: !0,
              data: {
                pageid: "",
                cate: "",
                postid: "",
                topicid: ""
              }
            },
            zplayerOptions: {},
            title: "",
            pageUrl: ""
          }
        }
      }], [{
        key: "INVIEW_EVENTS",
        get: function () {
          return y.a.EVENTS
        }
      }]), p()(e, [{
        key: "handleAds",
        value: function () {
          if (this.adsUrl = "", function (t) {
              var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              if (t.disableBanner || !e.ads.allowAds) return !1;
              var n = t.zaConfig.pageid,
                i = t.DEVICE.type,
                r = t.disableVideoAds,
                o = L();
              return !(!o || r || i != P.f.desktop || !n)
            }(this.app, this.options)) {
            var t = function (t) {
              var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = e.ads.data,
                i = n.pageid,
                r = n.cate,
                o = n.postid,
                a = n.topicid,
                s = t.adtimaData.bid,
                l = i || t.zaConfig.pageid,
                c = r || t.catePath,
                u = o || t.articleId,
                h = t.zaConfig.topicid;
              a && (h = a.replace(/system-|event-|person-|location-|seo-|company-/gi, ""));
              var d = {
                mid: [C()({}, s, {})]
              };
              return {
                videodata: s ? JSON.stringify(d) : "",
                uid: t.ZAPP.getVisitorID ? t.ZAPP.getVisitorID() : "",
                ver: t.ZAPP.version ? "za_version=".concat(t.ZAPP.version) : "",
                contentId: t.adtimaConfig.contentId,
                zid: L(),
                vast: 4,
                vs: "pageid=".concat(l, ";cate=").concat(c, ";postid=").concat(u, ";topicid=").concat(h)
              }
            }(this.app, this.options);
            this.adsUrl = function (t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (k.a.empty(e)) return "";
                var n = t.adtimaData.bid,
                  i = n ? I.b : I.a;
                return Object(O.a)(i, e)
              }(this.app, t),
              function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (k.a.empty(t)) return "";
                var e = R({}, t);
                e.zones = e.zid, delete e.zid, Object(_.i)(I.g, e)
              }(t)
          }
        }
      }, {
        key: "handleReady",
        value: function () {
          var t = this.zplayer.el.find(".--z--player-poster"),
            e = this.zplayer.el.find(".--z--big-play-button");
          t.on("click", this.handlePlayerClick), e.on("click", this.handlePlayerClick), this.app.trigger(w.a.PLAYER_READY, this)
        }
      }, {
        key: "handlePlay",
        value: function () {
          this.app.trigger(w.a.PLAYER_PLAY, this.id), this.Dom.addClass(this.$wrapper, "playing"), this.Dom.removeClass(this.$wrapper, "ended")
        }
      }, {
        key: "handleClick",
        value: function () {
          this.enableMiniMode()
        }
      }, {
        key: "enableMiniMode",
        value: function () {
          this.listenUserAction = !1, this.allowMiniMode = this.canMiniMode
        }
      }, {
        key: "handlePlayerClick",
        value: function () {
          this.enableMiniMode(), this.options.allowAutoplay && this.canCountdown || this.trackedPageView || (this.trackedPageView = !0, this.app.trigger(w.a.TRACKING_PAGEVIEW, this.options.tracking))
        }
      }, {
        key: "handlePause",
        value: function () {
          this.app.trigger(w.a.PLAYER_PAUSE, this.id), this.Dom.removeClass(this.$wrapper, "playing"), this.isMiniMode && (this.allowInviewPlay = !1)
        }
      }, {
        key: "handleEnded",
        value: function () {
          this.app.trigger(w.a.PLAYER_ENDED, this.id), this.Dom.removeClass(this.$wrapper, "playing"), this.Dom.addClass(this.$wrapper, "ended"), this.zplayer.isFullscreen() && this.zplayer._toggleFullScreenNative(), this.isMiniMode && this.hideMiniMode(), this.allowMiniMode = !1, this.allowInviewPlay = !1
        }
      }, {
        key: "handleMouseEnter",
        value: function () {
          this.Dom.toggleClass(this.$wrapper, "hover")
        }
      }, {
        key: "handleMouseLeave",
        value: function () {
          this.Dom.toggleClass(this.$wrapper, "hover")
        }
      }, {
        key: "handleTimeUpdate",
        value: function () {
          var t = Math.floor(this.zplayer.getCurrentTime());
          t >= 10 && !this.trackedPageView && (this.trackedPageView = !0, this.app.trigger(w.a.TRACKING_PAGEVIEW, this.options.tracking)), this.options.articleId && t % 5 == 0 && this.app.trigger(w.a.TRACKING_TIME_PLAYER, {
            id: this.options.articleId,
            time: t
          })
        }
      }, {
        key: "handleVolumeUpdate",
        value: function () {
          !this.trackedPageView && this.zplayer.getCurrentTime() > 0 && this.zplayer.getVolume() > 0 && this.app.trigger(w.a.TRACKING_PAGEVIEW, this.options.tracking)
        }
      }, {
        key: "handleAdStarted",
        value: function () {
          this.adPlaying = !0
        }
      }, {
        key: "handleAdStop",
        value: function () {
          this.adPlaying = !1
        }
      }, {
        key: "handleBtnMiniModeClick",
        value: function (t) {
          t.preventDefault(), this.zplayer && this.pause(), this.allowMiniMode = !1, this.allowInviewPlay = !1, this.hideMiniMode()
        }
      }, {
        key: "handleInViewChange",
        value: function (t) {
          t.isInViewPort ? (this.zplayer ? this.allowInviewPlay && this.play() : this.initZPLayer(), this.isMiniMode && this.hideMiniMode()) : (this.app.trigger(w.a.PLAYER_OUT_VIEW_PORT, this), this.allowMiniMode && !this.isMiniMode ? this.showMiniMode(t.direction) : this.pause())
        }
      }, {
        key: "initZPLayer",
        value: function () {
          var t = function (t) {
            var e = t.$videoEl,
              n = t.adsUrl,
              i = t.canCountdown,
              r = t.options,
              o = r.theaterMode,
              a = r.zplayerOptions,
              s = Object(E.a)({}, T, a),
              l = function (t) {
                var e = t.findAll("source");
                return 0 == e.length ? t.getAttribute("src") : e[0].getAttribute("src")
              }(e),
              c = !k.a.empty(e.getAttribute("streamId"));
            if (s.source = l, s.mimeType = function (t) {
                return t && t.search(".m3u8") > 0 ? "application/x-mpegurl" : "video/mp4"
              }(l), s.poster = e.getAttribute("poster") || "", s.loop = e.getAttribute("loop") || !1, s.autoPlay = t.canAutoPlay, s.pluginsOptions.ads.source = n, o) {
              var u = s.pluginsOptions.ControlsPlugin.layout.right,
                h = u.indexOf("fullscreen");
              u.splice(h, 0, "theatermode")
            }
            return i && (s.plugins = [window.AutoPlayCountDownPlugin]), c && (s.plugins = [window.WatermarkPlugin]), s
          }(this);
          this.zplayer = new g.Player(t), this.zplayer.attachTo(this.$wrapper), this.bindEvents(), this.Dom.removeFromDom(this.$videoEl), delete this.$videoEl
        }
      }, {
        key: "render",
        value: function () {
          d()(u()(e.prototype), "render", this).call(this), this.$wrapper = this.Dom.createEl("div", {}, {
            id: this.id,
            class: "video"
          }), this.$btnHide = this.Dom.createElFromHTML("<a class='btnHidePopup' href='#btnHidePopup'>\n                <span class=\"ti-close\"></span>\n            </a>"), this.$wrapper.appendChild(this.$btnHide), this.renderMiniPlayerTitle(), this.append(this.$wrapper), Object(x.h)(this.$videoEl, this.$el);
          var t = Object(x.e)(this.$videoEl, ".video-container");
          t && t.removeAttribute("style"), this.options.allowInview ? (this.inViewPort = new y.a(this.$el), this.bindIniewEvents(), this.inViewPort.isInViewPort && this.initZPLayer()) : this.initZPLayer()
        }
      }, {
        key: "renderMiniPlayerTitle",
        value: function () {
          var t = this.options,
            e = t.title,
            n = t.pageUrl;
          if (e) {
            var i = "<span>".concat(e, "</span>"),
              r = "";
            r = n ? '<a class="'.concat("mini-title", '" href="').concat(n, '">').concat(i, "</a>") : '<span class="'.concat("mini-title", '">').concat(i, "</span>");
            var o = this.Dom.createElFromHTML('<span class="marquee-wrapper"></span>');
            this.$miniModeTitle = this.Dom.createElFromHTML(r), this.isLiveVideo && o.append(this.Dom.createElFromHTML('<i class="live-animate"></i>')), o.append(this.$miniModeTitle), this.$wrapper.append(o), this.$title = e, this.$miniTitleContent = this.$miniModeTitle.find("span")
          }
        }
      }, {
        key: "initTitleRunning",
        value: function () {
          var t = this,
            e = this.$wrapper.offsetWidth,
            n = this.$miniTitleContent.offsetWidth,
            i = this.isLiveVideo ? 50 : 20;
          if (!(n <= e - i)) {
            var r = Object($.f)(this.$miniTitleContent, 10);
            Object(x.d)(this.$miniTitleContent, r);
            var o = e - n - i,
              a = '<style id="marquee-animate">\n                @keyframes marquee {\n                    0% {\n                        left: 0;\n                    }\n                    50% {\n                        left: '.concat(o, "px;\n                    }\n                    75% {\n                        left: ").concat(o, "px;\n                    }\n                    100% {\n                        left: 0;\n                    }\n                }\n            </style>"),
              s = n / 80 * 1e3;
            clearTimeout(this.textRunTimeout), this.textRunTimeout = setTimeout((function () {
              document.head.append(t.Dom.createElFromHTML(a)), t.Dom.addClass(t.$miniModeTitle, "marquee"), t.Dom.setStyles(t.$miniTitleContent, {
                animationDuration: "".concat(s, "ms")
              }), Object(x.d)(t.$miniTitleContent, t.$title)
            }), 3e3), clearTimeout(this.textStopTimeout), this.textStopTimeout = setTimeout((function () {
              t.Dom.removeClass(t.$miniModeTitle, "marquee"), Object(x.d)(t.$miniTitleContent, r)
            }), s + 3e3)
          }
        }
      }, {
        key: "destroyTitleRunning",
        value: function () {
          clearTimeout(this.textRunTimeout), clearTimeout(this.textStopTimeout), this.Dom.removeFromDom(document.getId("marquee-animate")), this.Dom.removeClass(this.$miniModeTitle, "marquee"), Object(x.d)(this.$miniTitleContent, this.$title)
        }
      }, {
        key: "play",
        value: function () {
          this.zplayer.getCurrentTime() > 0 && (this.adPlaying ? this.zplayer.resumeAd() : this.zplayer.play())
        }
      }, {
        key: "pause",
        value: function () {
          this.adPlaying ? this.zplayer.pauseAd() : this.zplayer.pause()
        }
      }, {
        key: "showMiniMode",
        value: function (t) {
          var e = document.getId("advBalloon");
          e && this.Dom.addClass(e, "hide");
          var n = M,
            i = H;
          this.zplayer.updateSize(n, i), this.Dom.addClass(this.$el, "popped"), Object(x.a)(this.$wrapper, ["popup", t]), this.isMiniMode = !0, this.initTitleRunning()
        }
      }, {
        key: "hideMiniMode",
        value: function () {
          this.zplayer && this.zplayer.updateSize(100, 100, "%"), this.isMiniMode = !1, this.Dom.removeClass(this.$el, "popped"), Object(x.l)(this.$wrapper, ["popup", "up", "down"]), this.destroyTitleRunning()
        }
      }, {
        key: "bindEvents",
        value: function () {
          this.zplayer.once(g.Events.PLAYER_READY, this.handleReady), this.zplayer.on(g.Events.PLAYER_PLAY, this.handlePlay), this.zplayer.on(g.Events.PLAYER_CLICK, this.handleClick), this.zplayer.on(g.Events.PLAYER_MEDIACONTROL_CLICK, this.handleClick), this.zplayer.on(g.Events.PLAYER_PAUSE, this.handlePause), this.zplayer.on(g.Events.PLAYER_ENDED, this.handleEnded), this.zplayer.on(g.Events.PLAYER_TIMEUPDATE, this.handleTimeUpdate), this.zplayer.on(g.Events.PLAYER_VOLUMEUPDATE, this.handleVolumeUpdate), this.zplayer.on(g.Events.PLAYER_MOUSE_ENTER, this.handleMouseEnter), this.zplayer.on(g.Events.PLAYER_MOUSE_LEAVE, this.handleMouseLeave), this.zplayer.on(g.Events.PLAYER_AD_STARTED, this.handleAdStarted), this.zplayer.on(g.Events.PLAYER_AD_STOPPED, this.handleAdStop), this.$btnHide.on("click", this.handleBtnMiniModeClick)
        }
      }, {
        key: "bindIniewEvents",
        value: function () {
          this.inViewPort.on(y.a.EVENTS.CHANGE, this.handleInViewChange)
        }
      }, {
        key: "unbindIniewEvents",
        value: function () {
          this.inViewPort.off(y.a.EVENTS.CHANGE, this.handleInViewChange)
        }
      }, {
        key: "unbindEvents",
        value: function () {
          this.zplayer.off(g.Events.PLAYER_READY, this.handleReady), this.zplayer.off(g.Events.PLAYER_PLAY, this.handlePlay), this.zplayer.off(g.Events.PLAYER_CLICK, this.handleClick), this.zplayer.on(g.Events.PLAYER_MEDIACONTROL_CLICK, this.handleClick), this.zplayer.off(g.Events.PLAYER_PAUSE, this.handlePause), this.zplayer.off(g.Events.PLAYER_ENDED, this.handleEnded), this.zplayer.off(g.Events.PLAYER_TIMEUPDATE, this.handleTimeUpdate), this.zplayer.off(g.Events.PLAYER_VOLUMEUPDATE, this.handleVolumeUpdate), this.zplayer.off(g.Events.PLAYER_MOUSE_ENTER, this.handleMouseEnter), this.zplayer.off(g.Events.PLAYER_MOUSE_LEAVE, this.handleMouseLeave), this.zplayer.off(g.Events.PLAYER_AD_STARTED, this.handleAdStarted), this.zplayer.off(g.Events.PLAYER_AD_STOPPED, this.handleAdStop), this.$btnHide.off("click", this.handleBtnMiniModeClick)
        }
      }]), e
    }(b.a)
}, function (t, e, n) {
  "use strict";
  var i = n(2),
    r = n.n(i),
    o = n(1),
    a = n.n(o),
    s = n(8),
    l = n.n(s),
    c = n(5),
    u = n.n(c),
    h = n(10),
    d = n.n(h),
    f = n(25),
    p = n(3),
    v = n(12),
    m = n(7),
    g = function (t) {
      function e() {
        var t, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "znews_storage",
          i = arguments.length > 1 ? arguments[1] : void 0;
        if (r()(this, e), t = l()(this, u()(e).call(this)), !i) throw new Error("Driver is localStorage or sessionStorage");
        return t.key = n, t.driver = i, t
      }
      return d()(e, t), a()(e, [{
        key: "get",
        value: function () {
          var t, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.key,
            n = this.driver.getItem(e);
          if (p.a.empty(n)) return {};
          try {
            t = JSON.parse(n)
          } catch (t) {
            return this.clean(e), {}
          }
          if (!p.a.object(t)) return this.clean(e), {};
          var i = this.driver.getItem(e + "-expire");
          return i && Object(m.n)() > parseInt(i) ? (this.driver.removeItem(e), this.driver.removeItem(e + "-expire"), {}) : t
        }
      }, {
        key: "set",
        value: function () {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.key,
            e = arguments.length > 1 ? arguments[1] : void 0,
            n = arguments.length > 2 ? arguments[2] : void 0;
          if (p.a.object(e)) {
            var i = this.get();
            p.a.empty(i) && (i = {}), Object(v.a)(i, e), this.driver.setItem(t, JSON.stringify(i)), n ? this.driver.setItem(t + "-expire", Object(m.n)() + 1e3 * n) : this.driver.removeItem(t + "-expire")
          }
        }
      }, {
        key: "clean",
        value: function (t) {
          t && this.driver.removeItem(t)
        }
      }]), e
    }(f.a);
  e.a = g
}, function (t, e, n) {
  "use strict";
  n.d(e, "a", (function () {
    return r
  })), n.d(e, "c", (function () {
    return o
  })), n.d(e, "e", (function () {
    return a
  })), n.d(e, "f", (function () {
    return s
  })), n.d(e, "b", (function () {
    return l
  })), n.d(e, "d", (function () {
    return c
  }));
  var i = n(58),
    r = {
      icon: "ti-stats-up",
      title: "ThĂ´ng tin vĂ  bĂ¡o giĂ¡",
      customClass: "centered",
      htmlContent: '\n        <p>Zing cung cáº¥p nhiá»u hĂ¬nh thá»©c cho phĂ©p doanh nghiá»‡p tiáº¿p cáº­n Ä‘áº¿n báº¡n Ä‘á»c má»™t cĂ¡ch hiá»‡u quáº£ nháº¥t. Äá»ƒ tĂ¬m hiá»ƒu, vui lĂ²ng liĂªn há»‡ theo 1 trong cĂ¡c cĂ¡ch sau:</p>\n        <div style="padding-top:10px">\n            <h3>Hotline</h3>\n            <p> TP.HCM: (+84) 028.3962.3888 (ext. 6416)<br/>HN: (+84) 024.3212.3232 (ext. 2933)</p>\n        </div>\n        <div style="padding-top:10px">\n            <h3>Email</h3>\n            <p>\n                <a href="mailto:contact@adtima.vn">quangcao@zing.vn</a>\n            </p>\n        </div>\n    ',
      btnOkLabel: "ThĂ´ng tin vĂ  bĂ¡o giĂ¡"
    },
    o = {
      customClass: "centered infopage",
      htmlContent: '\n        <h2>Äá»‹a chá»‰</h2>\n        <p>TP HĂ  Ná»™i: Táº§ng 7, D29 Pháº¡m VÄƒn Báº¡ch, Quáº­n Cáº§u Giáº¥y</p>\n        <p>VÄƒn phĂ²ng TP.HCM: Táº§ng 2, TĂ²a nhĂ  Sarimi B2, 72 Nguyá»…n CÆ¡ Tháº¡ch, Quáº­n 2</p>\n        <p>Hotline: 0931.222.666</p>\n        <p>Email: <a href="mailto:toasoan@zing.vn">toasoan@zing.vn</a></p>\n    '
    },
    a = {
      customClass: "centered infopage",
      htmlContent: "\n        <h2>BĂ¡o Ä‘iá»‡n tá»­ Zing <br/> \n            <span>Tri thá»©c trá»±c tuyáº¿n</span>\n        </h2>\n        <p>Tá»•ng BiĂªn táº­p: NgĂ´ Viá»‡t Anh</p>\n        <p>Giáº¥y phĂ©p bĂ¡o Ä‘iá»‡n tá»­ sá»‘ 236/GP-BTTTT</p>\n        <p>CÆ¡ quan chá»§ quáº£n Há»™i Xuáº¥t báº£n Viá»‡t Nam</p>\n    "
    },
    s = {
      customClass: "success-sent-error",
      icon: "ti-check",
      title: "ÄĂ£ gá»­i bĂ¡o lá»—i",
      htmlContent: "<p>CĂ¡m Æ¡n báº¡n Ä‘Ă£ gá»­i bĂ¡o lá»—i. TĂ²a soáº¡n sáº½ kiá»ƒm tra vĂ  kháº¯c phá»¥c lá»—i trong thá»i gian sá»›m nháº¥t.</p>"
    },
    l = {
      customClass: "centered",
      title: "Äang káº¿t ná»‘i vá»›i Zalo",
      icon: "ti-alert",
      htmlContent: "<p>Zing khĂ´ng tá»± Ä‘Äƒng báº¥t ká»³ thĂ´ng tin gĂ¬ lĂªn Zalo cá»§a báº¡n. Viá»‡c káº¿t ná»‘i chá»‰ Ä‘á»ƒ hiá»ƒn thá»‹ bĂ¬nh luáº­n cá»§a báº¡n tá»‘t hÆ¡n.</p>\n                    ".concat(i.b),
      btnCloseLabel: "ÄĂ³ng",
      btnOk: {
        label: "ÄÄƒng nháº­p áº©n danh",
        icon: "ti-arrow-right"
      }
    },
    c = {
      customClass: "centered",
      icon: "ti-user",
      title: "ThĂ´ng tin báº¡n Ä‘á»c",
      htmlContent: "\n        <form>\n            <p>TĂªn hiá»ƒn thá»‹ vĂ  Ä‘á»‹a chá»‰ email liĂªn há»‡ (Ä‘á»‹a chá»‰ email sáº½ khĂ´ng hiá»ƒn thá»‹ vĂ  chá»‰ Ä‘Æ°á»£c sá»­ dá»¥ng Ä‘á»ƒ tĂ²a soáº¡n liĂªn há»‡ khi cáº§n thĂªm thĂ´ng tin).</p>\n            <input type='text' class='inputName' placeholder='TĂªn hiá»ƒn thá»‹' />\n            <input type='text' class='inputEmail' placeholder='Email' />\n            <p class='note error'></p>\n        </form>\n    ",
      btnOkLabel: "LÆ°u thĂ´ng tin"
    }
}, function (t, e, n) {
  "use strict";
  t.exports = function (t) {
    var e = [];
    return e.toString = function () {
      return this.map((function (e) {
        var n = function (t, e) {
          var n = t[1] || "",
            i = t[3];
          if (!i) return n;
          if (e && "function" == typeof btoa) {
            var r = (a = i, s = btoa(unescape(encodeURIComponent(JSON.stringify(a)))), l = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s), "/*# ".concat(l, " */")),
              o = i.sources.map((function (t) {
                return "/*# sourceURL=".concat(i.sourceRoot).concat(t, " */")
              }));
            return [n].concat(o).concat([r]).join("\n")
          }
          var a, s, l;
          return [n].join("\n")
        }(e, t);
        return e[2] ? "@media ".concat(e[2], "{").concat(n, "}") : n
      })).join("")
    }, e.i = function (t, n) {
      "string" == typeof t && (t = [
        [null, t, ""]
      ]);
      for (var i = {}, r = 0; r < this.length; r++) {
        var o = this[r][0];
        null != o && (i[o] = !0)
      }
      for (var a = 0; a < t.length; a++) {
        var s = t[a];
        null != s[0] && i[s[0]] || (n && !s[2] ? s[2] = n : n && (s[2] = "(".concat(s[2], ") and (").concat(n, ")")), e.push(s))
      }
    }, e
  }
}, function (t, e, n) {
  "use strict";
  var i, r = {},
    o = function () {
      return void 0 === i && (i = Boolean(window && document && document.all && !window.atob)), i
    },
    a = function () {
      var t = {};
      return function (e) {
        if (void 0 === t[e]) {
          var n = document.querySelector(e);
          if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement) try {
            n = n.contentDocument.head
          } catch (t) {
            n = null
          }
          t[e] = n
        }
        return t[e]
      }
    }();

  function s(t, e) {
    for (var n = [], i = {}, r = 0; r < t.length; r++) {
      var o = t[r],
        a = e.base ? o[0] + e.base : o[0],
        s = {
          css: o[1],
          media: o[2],
          sourceMap: o[3]
        };
      i[a] ? i[a].parts.push(s) : n.push(i[a] = {
        id: a,
        parts: [s]
      })
    }
    return n
  }

  function l(t, e) {
    for (var n = 0; n < t.length; n++) {
      var i = t[n],
        o = r[i.id],
        a = 0;
      if (o) {
        for (o.refs++; a < o.parts.length; a++) o.parts[a](i.parts[a]);
        for (; a < i.parts.length; a++) o.parts.push(m(i.parts[a], e))
      } else {
        for (var s = []; a < i.parts.length; a++) s.push(m(i.parts[a], e));
        r[i.id] = {
          id: i.id,
          refs: 1,
          parts: s
        }
      }
    }
  }

  function c(t) {
    var e = document.createElement("style");
    if (void 0 === t.attributes.nonce) {
      var i = n.nc;
      i && (t.attributes.nonce = i)
    }
    if (Object.keys(t.attributes).forEach((function (n) {
        e.setAttribute(n, t.attributes[n])
      })), "function" == typeof t.insert) t.insert(e);
    else {
      var r = a(t.insert || "head");
      if (!r) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
      r.appendChild(e)
    }
    return e
  }
  var u, h = (u = [], function (t, e) {
    return u[t] = e, u.filter(Boolean).join("\n")
  });

  function d(t, e, n, i) {
    var r = n ? "" : i.css;
    if (t.styleSheet) t.styleSheet.cssText = h(e, r);
    else {
      var o = document.createTextNode(r),
        a = t.childNodes;
      a[e] && t.removeChild(a[e]), a.length ? t.insertBefore(o, a[e]) : t.appendChild(o)
    }
  }

  function f(t, e, n) {
    var i = n.css,
      r = n.media,
      o = n.sourceMap;
    if (r && t.setAttribute("media", r), o && btoa && (i += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o)))), " */")), t.styleSheet) t.styleSheet.cssText = i;
    else {
      for (; t.firstChild;) t.removeChild(t.firstChild);
      t.appendChild(document.createTextNode(i))
    }
  }
  var p = null,
    v = 0;

  function m(t, e) {
    var n, i, r;
    if (e.singleton) {
      var o = v++;
      n = p || (p = c(e)), i = d.bind(null, n, o, !1), r = d.bind(null, n, o, !0)
    } else n = c(e), i = f.bind(null, n, e), r = function () {
      ! function (t) {
        if (null === t.parentNode) return !1;
        t.parentNode.removeChild(t)
      }(n)
    };
    return i(t),
      function (e) {
        if (e) {
          if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) return;
          i(t = e)
        } else r()
      }
  }
  t.exports = function (t, e) {
    (e = e || {}).attributes = "object" == typeof e.attributes ? e.attributes : {}, e.singleton || "boolean" == typeof e.singleton || (e.singleton = o());
    var n = s(t, e);
    return l(n, e),
      function (t) {
        for (var i = [], o = 0; o < n.length; o++) {
          var a = n[o],
            c = r[a.id];
          c && (c.refs--, i.push(c))
        }
        t && l(s(t, e), e);
        for (var u = 0; u < i.length; u++) {
          var h = i[u];
          if (0 === h.refs) {
            for (var d = 0; d < h.parts.length; d++) h.parts[d]();
            delete r[h.id]
          }
        }
      }
  }
}, function (t, e, n) {
  "use strict";
  n.d(e, "b", (function () {
    return r
  })), n.d(e, "c", (function () {
    return o
  })), n.d(e, "a", (function () {
    return a
  }));
  var i = n(3);

  function r(t, e) {
    var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
    if (i.a.array(t) && e) return t.sort((function (t, i) {
      return n ? t[e] - i[e] : i[e] - t[e]
    }))
  }

  function o(t, e, n) {
    if (i.a.array(t)) return t.filter((function (t) {
      return t[e] === n
    })).shift()
  }

  function a(t, e, n) {
    for (var i = t.length, r = 0; r < i; r++)
      if (t[r][e] === n) return r;
    return -1
  }
}, function (t, e, n) {
  "use strict";
  var i = n(2),
    r = n.n(i),
    o = n(1),
    a = n.n(o),
    s = n(16),
    l = n.n(s),
    c = (n(54), {
      type: "slider",
      startAt: 0,
      perView: 1,
      focusAt: 0,
      gap: 10,
      autoplay: !1,
      hoverpause: !0,
      keyboard: !0,
      bound: !1,
      swipeThreshold: 80,
      dragThreshold: 120,
      perTouch: !1,
      touchRatio: .5,
      touchAngle: 45,
      animationDuration: 400,
      rewind: !0,
      rewindDuration: 800,
      animationTimingFunc: "cubic-bezier(.165, .840, .440, 1)",
      throttle: 10,
      direction: "ltr",
      peek: 0,
      breakpoints: {},
      classes: {
        direction: {
          ltr: "glide--ltr",
          rtl: "glide--rtl"
        },
        slider: "glide--slider",
        carousel: "glide--carousel",
        swipeable: "glide--swipeable",
        dragging: "glide--dragging",
        cloneSlide: "glide__slide--clone",
        activeNav: "glide__bullet--active",
        activeSlide: "glide__slide--active",
        disabledArrow: "glide__arrow--disabled"
      }
    });
  var u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
      return typeof t
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    },
    h = function (t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    },
    d = function () {
      function t(t, e) {
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
      }
      return function (e, n, i) {
        return n && t(e.prototype, n), i && t(e, i), e
      }
    }(),
    f = Object.assign || function (t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = arguments[e];
        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
      }
      return t
    },
    p = function t(e, n, i) {
      null === e && (e = Function.prototype);
      var r = Object.getOwnPropertyDescriptor(e, n);
      if (void 0 === r) {
        var o = Object.getPrototypeOf(e);
        return null === o ? void 0 : t(o, n, i)
      }
      if ("value" in r) return r.value;
      var a = r.get;
      return void 0 !== a ? a.call(i) : void 0
    },
    v = function (t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !e || "object" != typeof e && "function" != typeof e ? t : e
    };

  function m(t) {
    return parseInt(t)
  }

  function g(t) {
    return "string" == typeof t
  }

  function b(t) {
    var e = void 0 === t ? "undefined" : u(t);
    return "function" === e || "object" === e && !!t
  }

  function y(t) {
    return "function" == typeof t
  }

  function w(t) {
    return void 0 === t
  }

  function E(t) {
    return t.constructor === Array
  }

  function k(t, e, n) {
    var i = {};
    for (var r in e) y(e[r]) && (i[r] = e[r](t, i, n));
    for (var o in i) y(i[o].mount) && i[o].mount();
    return i
  }

  function T(t, e, n) {
    Object.defineProperty(t, e, n)
  }

  function A(t, e) {
    var n = f({}, t, e);
    return e.hasOwnProperty("classes") && (n.classes = f({}, t.classes, e.classes), e.classes.hasOwnProperty("direction") && (n.classes.direction = f({}, t.classes.direction, e.classes.direction))), e.hasOwnProperty("breakpoints") && (n.breakpoints = f({}, t.breakpoints, e.breakpoints)), n
  }
  var C = function () {
      function t() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        h(this, t), this.events = e, this.hop = e.hasOwnProperty
      }
      return d(t, [{
        key: "on",
        value: function (t, e) {
          if (E(t))
            for (var n = 0; n < t.length; n++) this.on(t[n], e);
          this.hop.call(this.events, t) || (this.events[t] = []);
          var i = this.events[t].push(e) - 1;
          return {
            remove: function () {
              delete this.events[t][i]
            }
          }
        }
      }, {
        key: "emit",
        value: function (t, e) {
          if (E(t))
            for (var n = 0; n < t.length; n++) this.emit(t[n], e);
          this.hop.call(this.events, t) && this.events[t].forEach((function (t) {
            t(e || {})
          }))
        }
      }]), t
    }(),
    _ = function () {
      function t(e) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        h(this, t), this._c = {}, this._t = [], this._e = new C, this.disabled = !1, this.selector = e, this.settings = A(c, n), this.index = this.settings.startAt
      }
      return d(t, [{
        key: "mount",
        value: function () {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return this._e.emit("mount.before"), b(t) && (this._c = k(this, t, this._e)), this._e.emit("mount.after"), this
        }
      }, {
        key: "mutate",
        value: function () {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          return E(t) && (this._t = t), this
        }
      }, {
        key: "update",
        value: function () {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return this.settings = A(this.settings, t), t.hasOwnProperty("startAt") && (this.index = t.startAt), this._e.emit("update"), this
        }
      }, {
        key: "go",
        value: function (t) {
          return this._c.Run.make(t), this
        }
      }, {
        key: "move",
        value: function (t) {
          return this._c.Transition.disable(), this._c.Move.make(t), this
        }
      }, {
        key: "destroy",
        value: function () {
          return this._e.emit("destroy"), this
        }
      }, {
        key: "play",
        value: function () {
          var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          return t && (this.settings.autoplay = t), this._e.emit("play"), this
        }
      }, {
        key: "pause",
        value: function () {
          return this._e.emit("pause"), this
        }
      }, {
        key: "disable",
        value: function () {
          return this.disabled = !0, this
        }
      }, {
        key: "enable",
        value: function () {
          return this.disabled = !1, this
        }
      }, {
        key: "on",
        value: function (t, e) {
          return this._e.on(t, e), this
        }
      }, {
        key: "isType",
        value: function (t) {
          return this.settings.type === t
        }
      }, {
        key: "settings",
        get: function () {
          return this._o
        },
        set: function (t) {
          b(t) && (this._o = t)
        }
      }, {
        key: "index",
        get: function () {
          return this._i
        },
        set: function (t) {
          this._i = m(t)
        }
      }, {
        key: "type",
        get: function () {
          return this.settings.type
        }
      }, {
        key: "disabled",
        get: function () {
          return this._d
        },
        set: function (t) {
          this._d = !!t
        }
      }]), t
    }();

  function O() {
    return (new Date).getTime()
  }

  function I(t, e, n) {
    var i = void 0,
      r = void 0,
      o = void 0,
      a = void 0,
      s = 0;
    n || (n = {});
    var l = function () {
        s = !1 === n.leading ? 0 : O(), i = null, a = t.apply(r, o), i || (r = o = null)
      },
      c = function () {
        var c = O();
        s || !1 !== n.leading || (s = c);
        var u = e - (c - s);
        return r = this, o = arguments, u <= 0 || u > e ? (i && (clearTimeout(i), i = null), s = c, a = t.apply(r, o), i || (r = o = null)) : i || !1 === n.trailing || (i = setTimeout(l, u)), a
      };
    return c.cancel = function () {
      clearTimeout(i), s = 0, i = r = o = null
    }, c
  }
  var P = {
    ltr: ["marginLeft", "marginRight"],
    rtl: ["marginRight", "marginLeft"]
  };

  function D(t) {
    if (t && t.parentNode) {
      for (var e = t.parentNode.firstChild, n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
      return n
    }
    return []
  }

  function S(t) {
    return !!(t && t instanceof window.HTMLElement)
  }
  var R = '[data-glide-el="track"]';
  var L = function () {
    function t() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      h(this, t), this.listeners = e
    }
    return d(t, [{
      key: "on",
      value: function (t, e, n) {
        var i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        g(t) && (t = [t]);
        for (var r = 0; r < t.length; r++) this.listeners[t[r]] = n, e.addEventListener(t[r], this.listeners[t[r]], i)
      }
    }, {
      key: "off",
      value: function (t, e) {
        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        g(t) && (t = [t]);
        for (var i = 0; i < t.length; i++) e.removeEventListener(t[i], this.listeners[t[i]], n)
      }
    }, {
      key: "destroy",
      value: function () {
        delete this.listeners
      }
    }]), t
  }();
  var x = ["ltr", "rtl"],
    $ = {
      ">": "<",
      "<": ">",
      "=": "="
    };

  function M(t, e) {
    return {
      modify: function (t) {
        return e.Direction.is("rtl") ? -t : t
      }
    }
  }

  function H(t, e) {
    return {
      modify: function (n) {
        return n + e.Gaps.value * t.index
      }
    }
  }

  function N(t, e) {
    return {
      modify: function (t) {
        return t + e.Clones.grow / 2
      }
    }
  }

  function z(t, e) {
    return {
      modify: function (n) {
        if (t.settings.focusAt >= 0) {
          var i = e.Peek.value;
          return b(i) ? n - i.before : n - i
        }
        return n
      }
    }
  }

  function j(t, e) {
    return {
      modify: function (n) {
        var i = e.Gaps.value,
          r = e.Sizes.width,
          o = t.settings.focusAt,
          a = e.Sizes.slideWidth;
        return "center" === o ? n - (r / 2 - a / 2) : n - a * o - i * o
      }
    }
  }
  var V = !1;
  try {
    var B = Object.defineProperty({}, "passive", {
      get: function () {
        V = !0
      }
    });
    window.addEventListener("testPassive", null, B), window.removeEventListener("testPassive", null, B)
  } catch (t) {}
  var U = V,
    G = ["touchstart", "mousedown"],
    F = ["touchmove", "mousemove"],
    Y = ["touchend", "touchcancel", "mouseup", "mouseleave"],
    W = ["mousedown", "mousemove", "mouseup", "mouseleave"];
  var Z = '[data-glide-el="controls[nav]"]',
    q = '[data-glide-el^="controls"]';

  function K(t) {
    return b(t) ? (e = t, Object.keys(e).sort().reduce((function (t, n) {
      return t[n] = e[n], t[n], t
    }), {})) : {};
    var e
  }
  var X = {
      Html: function (t, e) {
        var n = {
          mount: function () {
            this.root = t.selector, this.track = this.root.querySelector(R), this.slides = Array.prototype.slice.call(this.wrapper.children).filter((function (e) {
              return !e.classList.contains(t.settings.classes.cloneSlide)
            }))
          }
        };
        return T(n, "root", {
          get: function () {
            return n._r
          },
          set: function (t) {
            g(t) && (t = document.querySelector(t)), S(t) && (n._r = t)
          }
        }), T(n, "track", {
          get: function () {
            return n._t
          },
          set: function (t) {
            S(t) && (n._t = t)
          }
        }), T(n, "wrapper", {
          get: function () {
            return n.track.children[0]
          }
        }), n
      },
      Translate: function (t, e, n) {
        var i = {
          set: function (n) {
            var i = function (t, e, n) {
              var i = [H, N, z, j].concat(t._t, [M]);
              return {
                mutate: function (r) {
                  for (var o = 0; o < i.length; o++) {
                    var a = i[o];
                    y(a) && y(a().modify) && (r = a(t, e, n).modify(r))
                  }
                  return r
                }
              }
            }(t, e).mutate(n);
            e.Html.wrapper.style.transform = "translate3d(" + -1 * i + "px, 0px, 0px)"
          },
          remove: function () {
            e.Html.wrapper.style.transform = ""
          }
        };
        return n.on("move", (function (r) {
          var o = e.Gaps.value,
            a = e.Sizes.length,
            s = e.Sizes.slideWidth;
          return t.isType("carousel") && e.Run.isOffset("<") ? (e.Transition.after((function () {
            n.emit("translate.jump"), i.set(s * (a - 1))
          })), i.set(-s - o * a)) : t.isType("carousel") && e.Run.isOffset(">") ? (e.Transition.after((function () {
            n.emit("translate.jump"), i.set(0)
          })), i.set(s * a + o * a)) : i.set(r.movement)
        })), n.on("destroy", (function () {
          i.remove()
        })), i
      },
      Transition: function (t, e, n) {
        var i = !1,
          r = {
            compose: function (e) {
              var n = t.settings;
              return i ? e + " 0ms " + n.animationTimingFunc : e + " " + this.duration + "ms " + n.animationTimingFunc
            },
            set: function () {
              var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "transform";
              e.Html.wrapper.style.transition = this.compose(t)
            },
            remove: function () {
              e.Html.wrapper.style.transition = ""
            },
            after: function (t) {
              setTimeout((function () {
                t()
              }), this.duration)
            },
            enable: function () {
              i = !1, this.set()
            },
            disable: function () {
              i = !0, this.set()
            }
          };
        return T(r, "duration", {
          get: function () {
            var n = t.settings;
            return t.isType("slider") && e.Run.offset ? n.rewindDuration : n.animationDuration
          }
        }), n.on("move", (function () {
          r.set()
        })), n.on(["build.before", "resize", "translate.jump"], (function () {
          r.disable()
        })), n.on("run", (function () {
          r.enable()
        })), n.on("destroy", (function () {
          r.remove()
        })), r
      },
      Direction: function (t, e, n) {
        var i = {
          mount: function () {
            this.value = t.settings.direction
          },
          resolve: function (t) {
            var e = t.slice(0, 1);
            return this.is("rtl") ? t.split(e).join($[e]) : t
          },
          is: function (t) {
            return this.value === t
          },
          addClass: function () {
            e.Html.root.classList.add(t.settings.classes.direction[this.value])
          },
          removeClass: function () {
            e.Html.root.classList.remove(t.settings.classes.direction[this.value])
          }
        };
        return T(i, "value", {
          get: function () {
            return i._v
          },
          set: function (t) {
            x.indexOf(t) > -1 && (i._v = t)
          }
        }), n.on(["destroy", "update"], (function () {
          i.removeClass()
        })), n.on("update", (function () {
          i.mount()
        })), n.on(["build.before", "update"], (function () {
          i.addClass()
        })), i
      },
      Peek: function (t, e, n) {
        var i = {
          mount: function () {
            this.value = t.settings.peek
          }
        };
        return T(i, "value", {
          get: function () {
            return i._v
          },
          set: function (t) {
            b(t) ? (t.before = m(t.before), t.after = m(t.after)) : t = m(t), i._v = t
          }
        }), T(i, "reductor", {
          get: function () {
            var e = i.value,
              n = t.settings.perView;
            return b(e) ? e.before / n + e.after / n : 2 * e / n
          }
        }), n.on(["resize", "update"], (function () {
          i.mount()
        })), i
      },
      Sizes: function (t, e, n) {
        var i = {
          setupSlides: function () {
            for (var t = this.slideWidth + "px", n = e.Html.slides, i = 0; i < n.length; i++) n[i].style.width = t
          },
          setupWrapper: function (t) {
            e.Html.wrapper.style.width = this.wrapperSize + "px"
          },
          remove: function () {
            for (var t = e.Html.slides, n = 0; n < t.length; n++) t[n].style.width = "";
            e.Html.wrapper.style.width = ""
          }
        };
        return T(i, "length", {
          get: function () {
            return e.Html.slides.length
          }
        }), T(i, "width", {
          get: function () {
            return e.Html.root.offsetWidth
          }
        }), T(i, "wrapperSize", {
          get: function () {
            return i.slideWidth * i.length + e.Gaps.grow + e.Clones.grow
          }
        }), T(i, "slideWidth", {
          get: function () {
            return i.width / t.settings.perView - e.Peek.reductor - e.Gaps.reductor
          }
        }), n.on(["build.before", "resize", "update"], (function () {
          i.setupSlides(), i.setupWrapper()
        })), n.on("destroy", (function () {
          i.remove()
        })), i
      },
      Gaps: function (t, e, n) {
        var i = {
          apply: function (t) {
            for (var n = 0, i = t.length; n < i; n++) {
              var r = t[n].style,
                o = e.Direction.value;
              r[P[o][0]] = 0 !== n ? this.value / 2 + "px" : "", n !== t.length - 1 ? r[P[o][1]] = this.value / 2 + "px" : r[P[o][1]] = ""
            }
          },
          remove: function (t) {
            for (var e = 0, n = t.length; e < n; e++) {
              var i = t[e].style;
              i.marginLeft = "", i.marginRight = ""
            }
          }
        };
        return T(i, "value", {
          get: function () {
            return m(t.settings.gap)
          }
        }), T(i, "grow", {
          get: function () {
            return i.value * (e.Sizes.length - 1)
          }
        }), T(i, "reductor", {
          get: function () {
            var e = t.settings.perView;
            return i.value * (e - 1) / e
          }
        }), n.on(["build.after", "update"], I((function () {
          i.apply(e.Html.wrapper.children)
        }), 30)), n.on("destroy", (function () {
          i.remove(e.Html.wrapper.children)
        })), i
      },
      Move: function (t, e, n) {
        var i = {
          mount: function () {
            this._o = 0
          },
          make: function () {
            var t = this,
              i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
            this.offset = i, n.emit("move", {
              movement: this.value
            }), e.Transition.after((function () {
              n.emit("move.after", {
                movement: t.value
              })
            }))
          }
        };
        return T(i, "offset", {
          get: function () {
            return i._o
          },
          set: function (t) {
            i._o = w(t) ? 0 : m(t)
          }
        }), T(i, "translate", {
          get: function () {
            return e.Sizes.slideWidth * t.index
          }
        }), T(i, "value", {
          get: function () {
            var t = this.offset,
              n = this.translate;
            return e.Direction.is("rtl") ? n + t : n - t
          }
        }), n.on(["build.before", "run"], (function () {
          i.make()
        })), i
      },
      Clones: function (t, e, n) {
        var i = {
          mount: function () {
            this.items = [], t.isType("carousel") && (this.items = this.collect())
          },
          collect: function () {
            for (var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], i = e.Html.slides, r = t.settings, o = r.perView, a = r.classes, s = +!!t.settings.peek, l = o + s, c = i.slice(0, l), u = i.slice(-l), h = 0; h < Math.max(1, Math.floor(o / i.length)); h++) {
              for (var d = 0; d < c.length; d++) {
                var f = c[d].cloneNode(!0);
                f.classList.add(a.cloneSlide), n.push(f)
              }
              for (var p = 0; p < u.length; p++) {
                var v = u[p].cloneNode(!0);
                v.classList.add(a.cloneSlide), n.unshift(v)
              }
            }
            return n
          },
          append: function () {
            for (var t = this.items, n = e.Html, i = n.wrapper, r = n.slides, o = Math.floor(t.length / 2), a = t.slice(0, o).reverse(), s = t.slice(o, t.length), l = e.Sizes.slideWidth + "px", c = 0; c < s.length; c++) i.appendChild(s[c]);
            for (var u = 0; u < a.length; u++) i.insertBefore(a[u], r[0]);
            for (var h = 0; h < t.length; h++) t[h].style.width = l
          },
          remove: function () {
            for (var t = this.items, n = 0; n < t.length; n++) e.Html.wrapper.removeChild(t[n])
          }
        };
        return T(i, "grow", {
          get: function () {
            return (e.Sizes.slideWidth + e.Gaps.value) * i.items.length
          }
        }), n.on("update", (function () {
          i.remove(), i.mount(), i.append()
        })), n.on("build.before", (function () {
          t.isType("carousel") && i.append()
        })), n.on("destroy", (function () {
          i.remove()
        })), i
      },
      Resize: function (t, e, n) {
        var i = new L,
          r = {
            mount: function () {
              this.bind()
            },
            bind: function () {
              i.on("resize", window, I((function () {
                n.emit("resize")
              }), t.settings.throttle))
            },
            unbind: function () {
              i.off("resize", window)
            }
          };
        return n.on("destroy", (function () {
          r.unbind(), i.destroy()
        })), r
      },
      Build: function (t, e, n) {
        var i = {
          mount: function () {
            n.emit("build.before"), this.typeClass(), this.activeClass(), n.emit("build.after")
          },
          typeClass: function () {
            e.Html.root.classList.add(t.settings.classes[t.settings.type])
          },
          activeClass: function () {
            var n = t.settings.classes,
              i = e.Html.slides[t.index];
            i && (i.classList.add(n.activeSlide), D(i).forEach((function (t) {
              t.classList.remove(n.activeSlide)
            })))
          },
          removeClasses: function () {
            var n = t.settings.classes;
            e.Html.root.classList.remove(n[t.settings.type]), e.Html.slides.forEach((function (t) {
              t.classList.remove(n.activeSlide)
            }))
          }
        };
        return n.on(["destroy", "update"], (function () {
          i.removeClasses()
        })), n.on(["resize", "update"], (function () {
          i.mount()
        })), n.on("move.after", (function () {
          i.activeClass()
        })), i
      },
      Run: function (t, e, n) {
        var i = {
          mount: function () {
            this._o = !1
          },
          make: function (i) {
            var r = this;
            t.disabled || (t.disable(), this.move = i, n.emit("run.before", this.move), this.calculate(), n.emit("run", this.move), e.Transition.after((function () {
              r.isStart() && n.emit("run.start", r.move), r.isEnd() && n.emit("run.end", r.move), (r.isOffset("<") || r.isOffset(">")) && (r._o = !1, n.emit("run.offset", r.move)), n.emit("run.after", r.move), t.enable()
            })))
          },
          calculate: function () {
            var e = this.move,
              n = this.length,
              i = e.steps,
              r = e.direction,
              o = "number" == typeof m(i) && 0 !== m(i);
            switch (r) {
              case ">":
                ">" === i ? t.index = n : this.isEnd() ? t.isType("slider") && !t.settings.rewind || (this._o = !0, t.index = 0) : o ? t.index += Math.min(n - t.index, -m(i)) : t.index++;
                break;
              case "<":
                "<" === i ? t.index = 0 : this.isStart() ? t.isType("slider") && !t.settings.rewind || (this._o = !0, t.index = n) : o ? t.index -= Math.min(t.index, m(i)) : t.index--;
                break;
              case "=":
                t.index = i
            }
          },
          isStart: function () {
            return 0 === t.index
          },
          isEnd: function () {
            return t.index === this.length
          },
          isOffset: function (t) {
            return this._o && this.move.direction === t
          }
        };
        return T(i, "move", {
          get: function () {
            return this._m
          },
          set: function (t) {
            var e = t.substr(1);
            this._m = {
              direction: t.substr(0, 1),
              steps: e ? m(e) ? m(e) : e : 0
            }
          }
        }), T(i, "length", {
          get: function () {
            var n = t.settings,
              i = e.Html.slides.length;
            return t.isType("slider") && "center" !== n.focusAt && n.bound ? i - 1 - (m(n.perView) - 1) + m(n.focusAt) : i - 1
          }
        }), T(i, "offset", {
          get: function () {
            return this._o
          }
        }), i
      },
      Swipe: function (t, e, n) {
        var i = new L,
          r = 0,
          o = 0,
          a = 0,
          s = !1,
          l = !!U && {
            passive: !0
          },
          c = {
            mount: function () {
              this.bindSwipeStart()
            },
            start: function (e) {
              if (!s && !t.disabled) {
                this.disable();
                var i = this.touches(e);
                r = null, o = m(i.pageX), a = m(i.pageY), this.bindSwipeMove(), this.bindSwipeEnd(), n.emit("swipe.start")
              }
            },
            move: function (i) {
              if (!t.disabled) {
                var s = t.settings,
                  l = s.touchAngle,
                  c = s.touchRatio,
                  u = s.classes,
                  h = this.touches(i),
                  d = m(h.pageX) - o,
                  f = m(h.pageY) - a,
                  p = Math.abs(d << 2),
                  v = Math.abs(f << 2),
                  g = Math.sqrt(p + v),
                  b = Math.sqrt(v);
                if (!(180 * (r = Math.asin(b / g)) / Math.PI < l)) return !1;
                i.stopPropagation(), e.Move.make(d * parseFloat(c)), e.Html.root.classList.add(u.dragging), n.emit("swipe.move")
              }
            },
            end: function (i) {
              if (!t.disabled) {
                var a = t.settings,
                  s = this.touches(i),
                  l = this.threshold(i),
                  c = s.pageX - o,
                  u = 180 * r / Math.PI,
                  h = Math.round(c / e.Sizes.slideWidth);
                this.enable(), c > l && u < a.touchAngle ? (a.perTouch && (h = Math.min(h, m(a.perTouch))), e.Direction.is("rtl") && (h = -h), e.Run.make(e.Direction.resolve("<" + h))) : c < -l && u < a.touchAngle ? (a.perTouch && (h = Math.max(h, -m(a.perTouch))), e.Direction.is("rtl") && (h = -h), e.Run.make(e.Direction.resolve(">" + h))) : e.Move.make(), e.Html.root.classList.remove(a.classes.dragging), this.unbindSwipeMove(), this.unbindSwipeEnd(), n.emit("swipe.end")
              }
            },
            bindSwipeStart: function () {
              var n = this,
                r = t.settings;
              r.swipeThreshold && i.on(G[0], e.Html.wrapper, (function (t) {
                n.start(t)
              }), l), r.dragThreshold && i.on(G[1], e.Html.wrapper, (function (t) {
                n.start(t)
              }), l)
            },
            unbindSwipeStart: function () {
              i.off(G[0], e.Html.wrapper, l), i.off(G[1], e.Html.wrapper, l)
            },
            bindSwipeMove: function () {
              var n = this;
              i.on(F, e.Html.wrapper, I((function (t) {
                n.move(t)
              }), t.settings.throttle), l)
            },
            unbindSwipeMove: function () {
              i.off(F, e.Html.wrapper, l)
            },
            bindSwipeEnd: function () {
              var t = this;
              i.on(Y, e.Html.wrapper, (function (e) {
                t.end(e)
              }))
            },
            unbindSwipeEnd: function () {
              i.off(Y, e.Html.wrapper)
            },
            touches: function (t) {
              return W.indexOf(t.type) > -1 ? t : t.touches[0] || t.changedTouches[0]
            },
            threshold: function (e) {
              var n = t.settings;
              return W.indexOf(e.type) > -1 ? n.dragThreshold : n.swipeThreshold
            },
            enable: function () {
              return s = !1, e.Transition.enable(), this
            },
            disable: function () {
              return s = !0, e.Transition.disable(), this
            }
          };
        return n.on("build.after", (function () {
          e.Html.root.classList.add(t.settings.classes.swipeable)
        })), n.on("destroy", (function () {
          c.unbindSwipeStart(), c.unbindSwipeMove(), c.unbindSwipeEnd(), i.destroy()
        })), c
      },
      Images: function (t, e, n) {
        var i = new L,
          r = {
            mount: function () {
              this.bind()
            },
            bind: function () {
              i.on("dragstart", e.Html.wrapper, this.dragstart)
            },
            unbind: function () {
              i.off("dragstart", e.Html.wrapper)
            },
            dragstart: function (t) {
              t.preventDefault()
            }
          };
        return n.on("destroy", (function () {
          r.unbind(), i.destroy()
        })), r
      },
      Anchors: function (t, e, n) {
        var i = new L,
          r = !1,
          o = !1,
          a = {
            mount: function () {
              this._a = e.Html.wrapper.querySelectorAll("a"), this.bind()
            },
            bind: function () {
              i.on("click", e.Html.wrapper, this.click)
            },
            unbind: function () {
              i.off("click", e.Html.wrapper)
            },
            click: function (t) {
              o && (t.stopPropagation(), t.preventDefault())
            },
            detach: function () {
              if (o = !0, !r) {
                for (var t = 0; t < this.items.length; t++) this.items[t].draggable = !1, this.items[t].setAttribute("data-href", this.items[t].getAttribute("href")), this.items[t].removeAttribute("href");
                r = !0
              }
              return this
            },
            attach: function () {
              if (o = !1, r) {
                for (var t = 0; t < this.items.length; t++) this.items[t].draggable = !0, this.items[t].setAttribute("href", this.items[t].getAttribute("data-href"));
                r = !1
              }
              return this
            }
          };
        return T(a, "items", {
          get: function () {
            return a._a
          }
        }), n.on("swipe.move", (function () {
          a.detach()
        })), n.on("swipe.end", (function () {
          e.Transition.after((function () {
            a.attach()
          }))
        })), n.on("destroy", (function () {
          a.attach(), a.unbind(), i.destroy()
        })), a
      },
      Controls: function (t, e, n) {
        var i = new L,
          r = !!U && {
            passive: !0
          },
          o = {
            mount: function () {
              this._n = e.Html.root.querySelectorAll(Z), this._c = e.Html.root.querySelectorAll(q), this.addBindings()
            },
            setActive: function () {
              for (var t = 0; t < this._n.length; t++) this.addClass(this._n[t].children)
            },
            removeActive: function () {
              for (var t = 0; t < this._n.length; t++) this.removeClass(this._n[t].children)
            },
            addClass: function (e) {
              var n = t.settings,
                i = e[t.index];
              i && (i.classList.add(n.classes.activeNav), D(i).forEach((function (t) {
                t.classList.remove(n.classes.activeNav)
              })))
            },
            removeClass: function (e) {
              var n = e[t.index];
              n && n.classList.remove(t.settings.classes.activeNav)
            },
            addBindings: function () {
              for (var t = 0; t < this._c.length; t++) this.bind(this._c[t].children)
            },
            removeBindings: function () {
              for (var t = 0; t < this._c.length; t++) this.unbind(this._c[t].children)
            },
            bind: function (t) {
              for (var e = 0; e < t.length; e++) i.on("click", t[e], this.click), i.on("touchstart", t[e], this.click, r)
            },
            unbind: function (t) {
              for (var e = 0; e < t.length; e++) i.off(["click", "touchstart"], t[e])
            },
            click: function (t) {
              t.preventDefault(), e.Run.make(e.Direction.resolve(t.currentTarget.getAttribute("data-glide-dir")))
            }
          };
        return T(o, "items", {
          get: function () {
            return o._c
          }
        }), n.on(["mount.after", "move.after"], (function () {
          o.setActive()
        })), n.on("destroy", (function () {
          o.removeBindings(), o.removeActive(), i.destroy()
        })), o
      },
      Keyboard: function (t, e, n) {
        var i = new L,
          r = {
            mount: function () {
              t.settings.keyboard && this.bind()
            },
            bind: function () {
              i.on("keyup", document, this.press)
            },
            unbind: function () {
              i.off("keyup", document)
            },
            press: function (t) {
              39 === t.keyCode && e.Run.make(e.Direction.resolve(">")), 37 === t.keyCode && e.Run.make(e.Direction.resolve("<"))
            }
          };
        return n.on(["destroy", "update"], (function () {
          r.unbind()
        })), n.on("update", (function () {
          r.mount()
        })), n.on("destroy", (function () {
          i.destroy()
        })), r
      },
      Autoplay: function (t, e, n) {
        var i = new L,
          r = {
            mount: function () {
              this.start(), t.settings.hoverpause && this.bind()
            },
            start: function () {
              var n = this;
              t.settings.autoplay && w(this._i) && (this._i = setInterval((function () {
                n.stop(), e.Run.make(">"), n.start()
              }), this.time))
            },
            stop: function () {
              this._i = clearInterval(this._i)
            },
            bind: function () {
              var t = this;
              i.on("mouseover", e.Html.root, (function () {
                t.stop()
              })), i.on("mouseout", e.Html.root, (function () {
                t.start()
              }))
            },
            unbind: function () {
              i.off(["mouseover", "mouseout"], e.Html.root)
            }
          };
        return T(r, "time", {
          get: function () {
            var n = e.Html.slides[t.index].getAttribute("data-glide-autoplay");
            return m(n || t.settings.autoplay)
          }
        }), n.on(["destroy", "update"], (function () {
          r.unbind()
        })), n.on(["run.before", "pause", "destroy", "swipe.start", "update"], (function () {
          r.stop()
        })), n.on(["run.after", "play", "swipe.end"], (function () {
          r.start()
        })), n.on("update", (function () {
          r.mount()
        })), n.on("destroy", (function () {
          i.destroy()
        })), r
      },
      Breakpoints: function (t, e, n) {
        var i = new L,
          r = t.settings,
          o = K(r.breakpoints),
          a = f({}, r),
          s = {
            match: function (t) {
              if (void 0 !== window.matchMedia)
                for (var e in t)
                  if (t.hasOwnProperty(e) && window.matchMedia("(max-width: " + e + "px)").matches) return t[e];
              return a
            }
          };
        return f(r, s.match(o)), i.on("resize", window, I((function () {
          t.settings = A(r, s.match(o))
        }), t.settings.throttle)), n.on("update", (function () {
          o = K(o), a = f({}, r)
        })), n.on("destroy", (function () {
          i.off("resize", window)
        })), s
      }
    },
    Q = function (t) {
      function e() {
        return h(this, e), v(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
      }
      return function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
      }(e, t), d(e, [{
        key: "mount",
        value: function () {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return p(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "mount", this).call(this, f({}, X, t))
        }
      }]), e
    }(_),
    J = n(9),
    tt = n(12),
    et = n(7),
    nt = "disabled";

  function it(t, e) {
    return {
      mount: function () {
        t.settings.rewind || t.on(["mount.after", "run"], (function () {
          var n = !0,
            i = !1,
            r = void 0;
          try {
            for (var o, a = e.Controls.items[Symbol.iterator](); !(n = (o = a.next()).done); n = !0) {
              var s = o.value;
              if ("glide__arrows" === s.className) {
                var l = s.find(".glide__arrow--left");
                l && (0 === t.index ? l.setAttribute(nt, "") : l.removeAttribute(nt));
                var c = s.find(".glide__arrow--right");
                c && (t.index === e.Sizes.length - t.settings.perView ? c.setAttribute(nt, "") : c.removeAttribute(nt))
              }
            }
          } catch (t) {
            i = !0, r = t
          } finally {
            try {
              n || null == a.return || a.return()
            } finally {
              if (i) throw r
            }
          }
        }))
      }
    }
  }
  n(59);
  n.d(e, "a", (function () {
    return rt
  }));
  var rt = function () {
    function t(e) {
      var n = this,
        i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      r()(this, t), l()(this, "onRunBefore", (function (t) {
        var e = t.direction;
        if (!(e.indexOf("=") > -1)) {
          var i = n.glide.settings,
            r = i.perScroll,
            o = i.perView,
            a = r || o;
          t.steps = ">" == e ? -a : a
        }
      })), l()(this, "onMountAfter", (function () {
        Object(J.addClass)(n.$slider, "glide-mounted")
      })), this.options = Object(tt.a)(this.defaultOptions, i), this.slidesTotal = 0, this.setupMarkup(e), this.render()
    }
    return a()(t, [{
      key: "defaultOptions",
      get: function () {
        return {
          type: "carousel",
          autoplay: !1,
          bound: !0,
          animationDuration: 400,
          bullets: !1,
          perScroll: null,
          arrows: !1,
          arrowsConfig: {
            prev: "",
            next: ""
          }
        }
      }
    }]), a()(t, [{
      key: "setupMarkup",
      value: function (t) {
        var e = Object(et.d)(t.findAll(":scope > *")),
          n = Object(J.createEl)("ul", {
            className: "glide__slides"
          });
        this.slidesTotal = e.length, e.forEach((function (t) {
          var e = Object(J.createEl)("li", {
            className: "glide__slide"
          });
          e.append(t), n.append(e)
        }));
        var i = Object(J.createEl)("div", {
            className: "glide"
          }),
          r = Object(J.createEl)("div", {
            className: "glide__track"
          }, {
            "data-glide-el": "track"
          });
        r.append(n), i.append(r), this.options.bullets && i.append(this.createBullets()), this.options.arrows && i.append(this.createNextPrevButtons()), t.append(i), this.$slider = i
      }
    }, {
      key: "createBullets",
      value: function () {
        for (var t = Object(J.createEl)("div", {
            className: "glide__bullets"
          }, {
            "data-glide-el": "controls[nav]"
          }), e = 0, n = this.slidesTotal; e < n; e++) {
          var i = Object(J.createEl)("button", {
            className: "glide__bullet"
          }, {
            "data-glide-dir": "=" + e
          });
          t.append(i)
        }
        return t
      }
    }, {
      key: "createNextPrevButtons",
      value: function () {
        var t = this.options.arrowsConfig,
          e = t.next,
          n = t.prev;
        return Object(J.createElFromHTML)('<div class="glide__arrows" data-glide-el="controls">\n                <button class="glide__arrow glide__arrow--left" data-glide-dir="<">\n                    '.concat(n, '\n                </button>\n                <button class="glide__arrow glide__arrow--right" data-glide-dir=">">\n                    ').concat(e, "\n                </button>\n            </div>"))
      }
    }, {
      key: "render",
      value: function () {
        this.glide = new Q(this.$slider, this.options), this.bindSldieEvents(), this.glide.mount({
          ArrowDisabler: it
        })
      }
    }, {
      key: "bindSldieEvents",
      value: function () {
        this.glide.on("mount.after", this.onMountAfter), this.glide.on("run.before", this.onRunBefore)
      }
    }]), t
  }()
}, function (t, e, n) {
  "use strict";
  n.d(e, "a", (function () {
    return c
  }));
  var i = n(67),
    r = n.n(i),
    o = n(12),
    a = n(3),
    s = n(9),
    l = n(23);
  n(70), n(72);

  function c(t, e) {
    if (!a.a.element(t)) throw new TypeError("Element is require for initializing CustomScrollbar");
    e = Object(o.a)({
      autoshow: !0,
      forceGemini: !0
    }, e, {
      element: t
    });
    var n = new r.a(e);
    return l.c && Object(s.addClass)(n._viewElement, "mac-os"), n.create(), n
  }
}, function (t, e, n) {
  "use strict";
  n.d(e, "a", (function () {
    return A
  }));
  var i = n(20),
    r = n.n(i),
    o = n(2),
    a = n.n(o),
    s = n(8),
    l = n.n(s),
    c = n(5),
    u = n.n(c),
    h = n(11),
    d = n.n(h),
    f = n(1),
    p = n.n(f),
    v = n(10),
    m = n.n(v),
    g = n(18),
    b = n(19),
    y = n(7),
    w = n(32),
    E = n(47),
    k = n(14),
    T = {
      FEEDBACK: "FEEDBACK",
      REPORT: "REPORT"
    },
    A = function (t) {
      function e(t) {
        var n;
        return a()(this, e), (n = l()(this, u()(e).call(this, t))).app = t, n.handleBtnSubmit = n.handleBtnSubmit.bind(d()(n)), n.trackEvent = n.trackEvent.bind(d()(n)), n.selectedText, n.data = {
          articleid: Object(y.k)() || "",
          type: "content",
          error: "",
          feedback: ""
        }, n
      }
      return m()(e, t), p()(e, null, [{
        key: "DIALOG_TYPE",
        get: function () {
          return T
        }
      }]), p()(e, [{
        key: "renderDialog",
        value: function (t) {
          var e;
          t === T.FEEDBACK && (e = this.buildFeedbackDlOpts()), t === T.REPORT && (e = this.buildErrorDlOpts()), e && (this.dl = new w.a(e), this.dl.on(w.a.EVENTS.OK, this.handleBtnSubmit))
        }
      }, {
        key: "showDialog",
        value: function () {
          this.updateErrorText(), this.dl.show(), this.focusInput()
        }
      }, {
        key: "focusInput",
        value: function () {
          this.$inputEl || (this.$inputEl = this.dl.$el.find("textarea")), this.$inputEl.value = "", this.$inputEl.focus()
        }
      }, {
        key: "updateErrorText",
        value: function () {
          this.selectedText = Object(y.v)();
          var t = this.dl.$el.find(".selected-text");
          t && this.Dom.textContent(t, this.selectedText)
        }
      }, {
        key: "handleBtnSubmit",
        value: function () {
          var t, e, n, i;
          return r.a.async((function (o) {
            for (;;) switch (o.prev = o.next) {
              case 0:
                if (t = this.dl.$el, e = t.find("textarea"), n = t.find(".note"), i = e.value) {
                  o.next = 9;
                  break
                }
                return this.Dom.addClass(e, "error"), this.Dom.removeClass(n, "hide"), e.focus(), o.abrupt("return");
              case 9:
                return this.Dom.removeClass(e, "error"), this.Dom.addClass(n, "hide"), this.data.feedback = i, this.selectedText && (this.data.error = this.selectedText), o.next = 15, r.a.awrap(this.submit());
              case 15:
                this.successDl || (this.successDl = new w.a(E.f)), this.dl.close(), this.successDl.show();
              case 18:
              case "end":
                return o.stop()
            }
          }), null, this)
        }
      }, {
        key: "submit",
        value: function () {
          return Object(y.E)(b.d, {}, this.data)
        }
      }, {
        key: "trackEvent",
        value: function (t) {
          this.app.trigger(k.a.TRACKING_BEHAVIOR, {
            action: "Report Error",
            label: t
          })
        }
      }, {
        key: "buildFeedbackDlOpts",
        value: function () {
          return {
            title: "GĂ³p Ă½ bĂ i viáº¿t",
            icon: "ti-marker-alt",
            customClass: "feedback-error",
            btnOkLabel: "Gá»¬I GĂ“P Ă",
            htmlContent: "<h5>GĂ³p Ă½</h5>\n                            <form>\n                                <textarea placeholder='Äiá»n ná»™i dung gĂ³p Ă½ ...'></textarea>\n                                <p class=\"note error hide\">Vui lĂ²ng nháº­p thĂ´ng tin lá»—i chi tiáº¿t.</p>\n                            </form>",
            btnCloseLabel: "Há»¦Y"
          }
        }
      }, {
        key: "buildErrorDlOpts",
        value: function () {
          return {
            title: "BĂ¡o lá»—i bĂ i viáº¿t",
            icon: "ti-alert",
            customClass: "feedback-error",
            btnOkLabel: "Gá»¬I BĂO Lá»–I",
            htmlContent: '<h5>Ná»™i dung lá»—i:</h5>\n                            <div class="selected-text">\n                                '.concat(this.selectedText, '\n                            </div>\n                            <h5>Sá»­a lá»—i</h5>\n                            <form>\n                                <textarea placeholder="Äiá»n ná»™i dung bĂ¡o lá»—i ..."></textarea>\n                                <p class="note error hide">Vui lĂ²ng nháº­p thĂ´ng tin lá»—i chi tiáº¿t.</p>\n                            </form>'),
            btnCloseLabel: "Há»¦Y"
          }
        }
      }]), e
    }(g.a)
}, function (t, e) {
  function n(t, e) {
    t.forEach((function (t) {
      t.hasOwnProperty(e) || Object.defineProperty(t, e, {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        value: function () {
          var t = Array.prototype.slice.call(arguments),
            n = document.createDocumentFragment();
          t.forEach((function (t) {
            var e = t instanceof Node;
            n.appendChild(e ? t : document.createTextNode(String(t)))
          })), "append" == e ? this.appendChild(n) : this.insertBefore(n, this.firstChild)
        }
      })
    }))
  }
  window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (t) {
      window.setTimeout(t, 16)
    },
    function (t, e) {
      try {
        t.querySelector(":scope body")
      } catch (n) {
        ["querySelector", "querySelectorAll"].forEach((function (n) {
          var i = e[n];
          e[n] = function (e) {
            if (/(^|,)\s*:scope/.test(e)) {
              var r = this.id;
              this.id = "ID_" + Date.now(), e = e.replace(/((^|,)\s*):scope/g, "$1#" + this.id);
              var o = t[n](e);
              return this.id = r, o
            }
            return i.call(this, e)
          }
        }))
      }
    }(window.document, Element.prototype);
  var i, r = [Element.prototype, Document.prototype, DocumentFragment.prototype];

  function o(t, e) {
    t.forEach((function (t) {
      t[e] = "findAll" == e ? t.querySelectorAll : t.querySelector
    }))
  }
  n(r, "append"), n(r, "prepend"), window.NodeList && !NodeList.prototype.forEach && (NodeList.prototype.forEach = Array.prototype.forEach), window.NodeList && !NodeList.prototype.filter && (NodeList.prototype.filter = Array.prototype.filter), o(r, "find"), o(r, "findAll"), i = "getId", r.forEach((function (t) {
    t[i] = t.getElementById
  })), Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector)
}, function (t, e, n) {
  "use strict";
  var i = n(2),
    r = n.n(i),
    o = n(8),
    a = n.n(o),
    s = n(5),
    l = n.n(s),
    c = n(10),
    u = n.n(c),
    h = n(46),
    d = n(36),
    f = function (t) {
      function e() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "znews_sstorage";
        return r()(this, e), a()(this, l()(e).call(this, t, d.c))
      }
      return u()(e, t), e
    }(h.a);
  e.a = f
}, function (t, e, n) {
  "use strict";
  n.d(e, "a", (function () {
    return p
  }));
  var i = n(16),
    r = n.n(i),
    o = n(2),
    a = n.n(o),
    s = n(1),
    l = n.n(s),
    c = n(12);

  function u(t, e) {
    var n = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(t);
      e && (i = i.filter((function (e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable
      }))), n.push.apply(n, i)
    }
    return n
  }

  function h(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = null != arguments[e] ? arguments[e] : {};
      e % 2 ? u(n, !0).forEach((function (e) {
        r()(t, e, n[e])
      })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : u(n).forEach((function (e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
      }))
    }
    return t
  }
  var d = {
    path: "/"
  };

  function f(t) {
    return t.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
  }
  var p = function () {
    function t() {
      a()(this, t)
    }
    return l()(t, null, [{
      key: "set",
      value: function (t, e) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        if ("undefined" != typeof document) {
          var i = Object(c.a)({}, d, n);
          "number" == typeof i.expires && (i.expires = new Date(Date.now() + 864e5 * i.expires)), i.expires && (i.expires = i.expires.toUTCString()), e = encodeURIComponent(String(e)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), t = encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
          var r = "";
          for (var o in i) i[o] && (r += "; " + o, !0 !== i[o] && (r += "=" + i[o].split(";")[0]));
          return document.cookie = t + "=" + e + r
        }
      }
    }, {
      key: "get",
      value: function (t) {
        if ("undefined" != typeof document && (!arguments.length || t)) {
          for (var e = document.cookie ? document.cookie.split("; ") : [], n = {}, i = 0; i < e.length; i++) {
            var r = e[i].split("="),
              o = r.slice(1).join("=");
            '"' === o.charAt(0) && (o = o.slice(1, -1));
            try {
              var a = f(r[0]);
              if (n[a] = f(o), t === a) break
            } catch (t) {}
          }
          return t ? n[t] : n
        }
      }
    }, {
      key: "remove",
      value: function (t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.set(t, null, h({}, e, {
          expires: -1
        }))
      }
    }]), t
  }()
}, function (t, e, n) {
  "use strict";
  var i = n(2),
    r = n.n(i),
    o = n(8),
    a = n.n(o),
    s = n(5),
    l = n.n(s),
    c = n(1),
    u = n.n(c),
    h = n(10),
    d = n.n(h),
    f = n(15),
    p = n(21),
    v = n.n(p),
    m = n(33),
    g = n(7),
    b = function (t) {
      function e() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return r()(this, e), a()(this, l()(e).call(this, t, n))
      }
      return d()(e, t), u()(e, [{
        key: "name",
        get: function () {
          return "Clipboard"
        }
      }, {
        key: "properties",
        get: function () {
          return {
            title: "Copy link",
            innerHTML: '<span class="znews-ic-copy-link"></span>'
          }
        }
      }]), u()(e, [{
        key: "render",
        value: function () {
          return v()(l()(e.prototype), "render", this).call(this), this.$message = this.Dom.createElFromHTML('<span class="copy-link-label">ÄĂ£ copy link</span>'), this.$el
        }
      }, {
        key: "handleClick",
        value: function (t) {
          var n = this;
          v()(l()(e.prototype), "handleClick", this).call(this, t), Object(g.e)();
          var i = this.$el.parentNode;
          this.Dom.addClass(i, "copy-sucess"), setTimeout((function () {
            n.Dom.removeClass(i, "copy-sucess")
          }), 1e3)
        }
      }]), e
    }(m.a),
    y = n(4),
    w = function (t) {
      function e() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return r()(this, e), a()(this, l()(e).call(this, t, n))
      }
      return d()(e, t), u()(e, [{
        key: "name",
        get: function () {
          return "Comment"
        }
      }, {
        key: "properties",
        get: function () {
          return {
            title: "BĂ¬nh luáº­n",
            innerHTML: '<span class="ti-comment"></span>'
          }
        }
      }]), u()(e, [{
        key: "handleClick",
        value: function (t) {
          v()(l()(e.prototype), "handleClick", this).call(this, t);
          var n = document.find("#divComment .comment-input");
          if (n) {
            var i = Object(y.c)(n).top - Math.floor(window.innerHeight / 4);
            Object(g.H)(i).then((function () {
              setTimeout((function () {
                n.focus()
              }), 300)
            }))
          }
        }
      }]), e
    }(m.a),
    E = n(11),
    k = n.n(E),
    T = n(18),
    A = n(32),
    C = n(47),
    _ = n(53),
    O = function (t) {
      function e(t) {
        var n;
        return r()(this, e), (n = a()(this, l()(e).call(this))).behavior = t.behavior, n.handleBtnReportClick = n.handleBtnReportClick.bind(k()(n)), n.handleBtnContactClick = n.handleBtnContactClick.bind(k()(n)), n.render(), n.bindEvents(), n
      }
      return d()(e, t), u()(e, [{
        key: "bindEvents",
        value: function () {
          this.$btnReportError.on("click", this.handleBtnReportClick), this.$btnContact.on("click", this.handleBtnContactClick)
        }
      }, {
        key: "handleBtnReportClick",
        value: function () {
          this.errReport || (this.errReport = new _.a(this), this.errReport.renderDialog(_.a.DIALOG_TYPE.FEEDBACK)), this.errReport.showDialog()
        }
      }, {
        key: "handleBtnContactClick",
        value: function () {
          this.contactDl || (this.contactDl = new A.a(C.c)), this.contactDl.show()
        }
      }, {
        key: "toggle",
        value: function () {
          this.toggleClass("hide")
        }
      }, {
        key: "render",
        value: function () {
          this.$el = this.Dom.createEl("ul", {
            className: "sticky-header__more-list js-more-list hide"
          }), this.$btnReportError = this.Dom.createEl("li", {}, {}, "GĂ³p Ă½ bĂ i viáº¿t"), this.$btnContact = this.Dom.createEl("li", {}, {}, "LiĂªn há»‡ tĂ²a soáº¡n"), this.$el.appendChild(this.$btnReportError), this.$el.appendChild(this.$btnContact)
        }
      }]), e
    }(T.a),
    I = function (t) {
      function e() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return r()(this, e), a()(this, l()(e).call(this, t, n))
      }
      return d()(e, t), u()(e, [{
        key: "name",
        get: function () {
          return "MoreOptionsComponent"
        }
      }, {
        key: "properties",
        get: function () {
          return {
            title: "More",
            innerHTML: '<span class="znews-ic-more-vertical"></span>'
          }
        }
      }]), u()(e, [{
        key: "render",
        value: function () {
          v()(l()(e.prototype), "render", this).call(this), this.dropDown = new O(this.app), this.$dropDownEl = this.dropDown.$el
        }
      }, {
        key: "handleClick",
        value: function (t) {
          v()(l()(e.prototype), "handleClick", this).call(this, t), t.stopPropagation(), this.dropDown.toggle()
        }
      }]), e
    }(m.a),
    P = n(65),
    D = n(12),
    S = n(64),
    R = function (t) {
      function e(t) {
        var n, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return r()(this, e), (n = a()(this, l()(e).call(this))).app = t, n.options = Object(D.a)(n.defaultOptions, i), n.render(), n
      }
      return d()(e, t), u()(e, [{
        key: "name",
        get: function () {
          return "FBShareWrapper"
        }
      }, {
        key: "tagName",
        get: function () {
          return "li"
        }
      }, {
        key: "defaultOptions",
        get: function () {
          return {
            customClass: ""
          }
        }
      }, {
        key: "properties",
        get: function () {
          return {
            className: "btnFacebook " + this.options.customClass
          }
        }
      }]), u()(e, [{
        key: "render",
        value: function () {
          v()(l()(e.prototype), "render", this).call(this);
          var t = new S.a(this.app);
          return this.append(t.$el), this.$el
        }
      }]), e
    }(T.a);
  n.d(e, "a", (function () {
    return L
  }));
  var L = function (t) {
    function e(t, n) {
      return r()(this, e), a()(this, l()(e).call(this, t, n))
    }
    return d()(e, t), u()(e, [{
      key: "defaultOptions",
      get: function () {
        return {
          zalo: !0,
          fb: !0,
          clipboard: !1,
          comment: !1,
          more: !1
        }
      }
    }]), u()(e, [{
      key: "render",
      value: function () {
        if (this.$el = this.Dom.createEl("ul", {
            className: "the-article-share"
          }), this.options.zalo) {
          var t = new P.a({
            shareUrl: "".concat(window.location.href, "?utm_source=zalo&utm_medium=zalomsg&utm_campaign=zingdesktop")
          });
          this.$el.appendChild(t.$el)
        }
        if (this.options.fb) {
          var e = new R(this.app);
          this.$el.appendChild(e.$el)
        }
        if (this.options.clipboard) {
          var n = this.Dom.createElFromHTML('<li class="btnCopyLink"></li>'),
            i = new b;
          n.appendChild(i.$el), n.appendChild(i.$message), this.$el.appendChild(n)
        }
        if (this.options.comment) {
          var r = this.Dom.createElFromHTML('<li class="btnComments"></li>'),
            o = new w;
          r.appendChild(o.$el), this.$el.appendChild(r)
        }
        if (this.options.more) {
          var a = this.Dom.createElFromHTML('<li class="btnMoreList"></li>'),
            s = new I(this.app);
          a.appendChild(s.$el), a.appendChild(s.$dropDownEl), this.$el.appendChild(a)
        }
        return this.$el
      }
    }]), e
  }(f.a)
}, function (t, e, n) {
  "use strict";
  n.d(e, "a", (function () {
    return i
  })), n.d(e, "b", (function () {
    return r
  }));
  var i = '<div class="ellipsis"><div></div><div></div><div></div><div></div></div>',
    r = '<div class="loader loader-inner ball-pulse-sync"><div></div><div></div><div></div></div>'
}, function (t, e, n) {
  var i = n(60);
  "string" == typeof i && (i = [
    [t.i, i, ""]
  ]);
  var r = {
    insert: "head",
    singleton: !1
  };
  n(49)(i, r);
  i.locals && (t.exports = i.locals)
}, function (t, e, n) {
  (t.exports = n(48)(!1)).push([t.i, ".glide{position:relative;width:100%;box-sizing:border-box}.glide *{box-sizing:inherit}.glide__track{overflow:hidden}.glide__slides{position:relative;width:100%;list-style:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;touch-action:pan-Y;overflow:hidden;padding:0;white-space:nowrap;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:nowrap;flex-wrap:nowrap;will-change:transform}.glide__slides--dragging{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.glide__slide{width:100%;height:100%;-webkit-flex-shrink:0;flex-shrink:0;white-space:normal;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-touch-callout:none;-webkit-tap-highlight-color:transparent}.glide__slide a{-webkit-user-select:none;user-select:none;-webkit-user-drag:none;-moz-user-select:none;-ms-user-select:none}.glide__arrows{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.glide__bullets{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.glide--rtl{direction:rtl}\n", ""])
}, function (t, e, n) {
  "use strict";

  function i(t) {
    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
    return t.map((function (t) {
      return e.forEach((function (e) {
        var n;
        t[e] = parseInt((n = t[e], String(n).replace(/\.|,/g, "")))
      })), t
    }))
  }
  n.d(e, "a", (function () {
    return i
  }))
}, , function (t, e, n) {
  "use strict";
  n.d(e, "a", (function () {
    return i
  }));
  n(3);

  function i() {
    return (new Date).getTime() / 1e3
  }
}, function (t, e, n) {
  "use strict";
  n.d(e, "a", (function () {
    return w
  }));
  var i = n(20),
    r = n.n(i),
    o = n(2),
    a = n.n(o),
    s = n(8),
    l = n.n(s),
    c = n(5),
    u = n.n(c),
    h = n(21),
    d = n.n(h),
    f = n(1),
    p = n.n(f),
    v = n(10),
    m = n.n(v),
    g = n(33),
    b = n(7),
    y = n(14),
    w = function (t) {
      function e(t) {
        var n, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return a()(this, e), (n = l()(this, u()(e).call(this, t, i))).shareUrl = n.options.shareUrl, n
      }
      return m()(e, t), p()(e, [{
        key: "name",
        get: function () {
          return "Facebook"
        }
      }, {
        key: "properties",
        get: function () {
          return {
            className: this.options.customClass,
            title: "Chia sáº» Facebook",
            innerHTML: '<span class="ti-facebook"></span>\n                        <span>Facebook</span>'
          }
        }
      }, {
        key: "defaultOptions",
        get: function () {
          return {
            shareUrl: window.location.href,
            customClass: ""
          }
        }
      }]), p()(e, [{
        key: "buildUrl",
        value: function () {
          this.shareUrl += "?utm_source=facebook&utm_campaign=articlebottom&utm_medium=desktop_sharebutton#bottom"
        }
      }, {
        key: "share",
        value: function () {
          var t, e, n, i;
          return r.a.async((function (o) {
            for (;;) switch (o.prev = o.next) {
              case 0:
                return t = this.app.pageType, e = Object(b.k)(), o.next = 4, r.a.awrap(this.app.facebook.share(this.shareUrl));
              case 4:
                n = o.sent, i = n ? "Share Facebook Success" : "Share Facebook Fail", this.app.trigger(y.a.TRACKING_BEHAVIOR, {
                  action: i,
                  category: t,
                  label: e
                });
              case 7:
              case "end":
                return o.stop()
            }
          }), null, this)
        }
      }, {
        key: "handleClick",
        value: function (t) {
          d()(u()(e.prototype), "handleClick", this).call(this, t), this.buildUrl(), this.share()
        }
      }]), e
    }(g.a)
}, function (t, e, n) {
  "use strict";
  n.d(e, "a", (function () {
    return b
  }));
  var i = n(2),
    r = n.n(i),
    o = n(8),
    a = n.n(o),
    s = n(5),
    l = n.n(s),
    c = n(21),
    u = n.n(c),
    h = n(1),
    d = n.n(h),
    f = n(10),
    p = n.n(f),
    v = n(18),
    m = n(12),
    g = n(66),
    b = function (t) {
      function e() {
        var t, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return r()(this, e), (t = a()(this, l()(e).call(this))).options = Object(m.a)(t.defaultOptions, n), t.render(), t
      }
      return p()(e, t), d()(e, [{
        key: "name",
        get: function () {
          return "ZaloShareWrapperCom"
        }
      }, {
        key: "tagName",
        get: function () {
          return "li"
        }
      }, {
        key: "defaultOptions",
        get: function () {
          return {
            oaId: "4564080408575020426",
            shareUrl: window.location.href,
            layout: "icon-text",
            customize: "true",
            customClass: "",
            customZaloCom: null
          }
        }
      }, {
        key: "properties",
        get: function () {
          return {
            className: "btnZalo blue zalo-share-button " + this.options.customClass
          }
        }
      }, {
        key: "attributes",
        get: function () {
          return {
            "data-oaid": this.options.oaId,
            "data-layout": this.options.layout,
            "data-customize": this.options.customize,
            "data-href": this.options.shareUrl
          }
        }
      }]), d()(e, [{
        key: "render",
        value: function () {
          u()(l()(e.prototype), "render", this).call(this);
          var t = this.options.customZaloCom,
            n = new g.a;
          return t && (n = new t), this.append(n.$el), this.$el
        }
      }]), e
    }(v.a)
}, function (t, e, n) {
  "use strict";
  n.d(e, "a", (function () {
    return v
  }));
  var i = n(2),
    r = n.n(i),
    o = n(8),
    a = n.n(o),
    s = n(5),
    l = n.n(s),
    c = n(21),
    u = n.n(c),
    h = n(1),
    d = n.n(h),
    f = n(10),
    p = n.n(f),
    v = function (t) {
      function e() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return r()(this, e), a()(this, l()(e).call(this, t, n))
      }
      return p()(e, t), d()(e, [{
        key: "name",
        get: function () {
          return "Zalo"
        }
      }, {
        key: "properties",
        get: function () {
          return {
            title: "Chia sáº» Zalo",
            innerHTML: '<span class="ti-zalo"></span>\n                        <span>Zalo</span>'
          }
        }
      }]), d()(e, [{
        key: "handleClick",
        value: function (t) {
          u()(l()(e.prototype), "handleClick", this).call(this, t)
        }
      }]), e
    }(n(33).a)
}, function (t, e, n) {
  ! function () {
    var e, n, i;

    function r(t, e) {
      if (t.classList) return e.forEach((function (e) {
        t.classList.add(e)
      }));
      t.className += " " + e.join(" ")
    }

    function o(t, e) {
      if (t.classList) return e.forEach((function (e) {
        t.classList.remove(e)
      }));
      t.className = t.className.replace(new RegExp("(^|\\b)" + e.join("|") + "(\\b|$)", "gi"), " ")
    }

    function a() {
      var t = navigator.userAgent.toLowerCase();
      return -1 !== t.indexOf("msie") || -1 !== t.indexOf("trident") || -1 !== t.indexOf(" edge/")
    }

    function s(t) {
      var i, r;
      this.element = null, this.autoshow = !1, this.createElements = !0, this.forceGemini = !1, this.onResize = null, this.minThumbSize = 20, Object.keys(t || {}).forEach((function (e) {
        this[e] = t[e]
      }), this), (r = document.createElement("div")).style.position = "absolute", r.style.top = "-9999px", r.style.width = "100px", r.style.height = "100px", r.style.overflow = "scroll", r.style.msOverflowStyle = "scrollbar", document.body.appendChild(r), i = r.offsetWidth - r.clientWidth, document.body.removeChild(r), n = 0 === (e = i) && !1 === this.forceGemini, this._cache = {
        events: {}
      }, this._created = !1, this._cursorDown = !1, this._prevPageX = 0, this._prevPageY = 0, this._document = null, this._viewElement = this.element, this._scrollbarVerticalElement = null, this._thumbVerticalElement = null, this._scrollbarHorizontalElement = null, this._scrollbarHorizontalElement = null
    }
    i = {
      element: "gm-scrollbar-container",
      verticalScrollbar: "gm-scrollbar -vertical",
      horizontalScrollbar: "gm-scrollbar -horizontal",
      thumb: "thumb",
      view: "gm-scroll-view",
      autoshow: "gm-autoshow",
      disable: "gm-scrollbar-disable-selection",
      prevented: "gm-prevented",
      resizeTrigger: "gm-resize-trigger"
    }, s.prototype.create = function () {
      if (n) {
        if (r(this.element, [i.prevented]), this.onResize) {
          if (!0 === this.createElements) {
            for (this._viewElement = document.createElement("div"); this.element.childNodes.length > 0;) this._viewElement.appendChild(this.element.childNodes[0]);
            this.element.appendChild(this._viewElement)
          } else this._viewElement = this.element.querySelector("." + i.view);
          r(this.element, [i.element]), r(this._viewElement, [i.view]), this._createResizeTrigger()
        }
        return this
      }
      if (!0 === this._created) return this;
      if (this.autoshow && r(this.element, [i.autoshow]), this._document = document, !0 === this.createElements) {
        for (this._viewElement = document.createElement("div"), this._scrollbarVerticalElement = document.createElement("div"), this._thumbVerticalElement = document.createElement("div"), this._scrollbarHorizontalElement = document.createElement("div"), this._thumbHorizontalElement = document.createElement("div"); this.element.childNodes.length > 0;) this._viewElement.appendChild(this.element.childNodes[0]);
        this._scrollbarVerticalElement.appendChild(this._thumbVerticalElement), this._scrollbarHorizontalElement.appendChild(this._thumbHorizontalElement), this.element.appendChild(this._scrollbarVerticalElement), this.element.appendChild(this._scrollbarHorizontalElement), this.element.appendChild(this._viewElement)
      } else this._viewElement = this.element.querySelector("." + i.view), this._scrollbarVerticalElement = this.element.querySelector("." + i.verticalScrollbar.split(" ").join(".")), this._thumbVerticalElement = this._scrollbarVerticalElement.querySelector("." + i.thumb), this._scrollbarHorizontalElement = this.element.querySelector("." + i.horizontalScrollbar.split(" ").join(".")), this._thumbHorizontalElement = this._scrollbarHorizontalElement.querySelector("." + i.thumb);
      return r(this.element, [i.element]), r(this._viewElement, [i.view]), r(this._scrollbarVerticalElement, i.verticalScrollbar.split(/\s/)), r(this._scrollbarHorizontalElement, i.horizontalScrollbar.split(/\s/)), r(this._thumbVerticalElement, [i.thumb]), r(this._thumbHorizontalElement, [i.thumb]), this._scrollbarVerticalElement.style.display = "", this._scrollbarHorizontalElement.style.display = "", this._createResizeTrigger(), this._created = !0, this._bindEvents().update()
    }, s.prototype._createResizeTrigger = function () {
      var t = document.createElement("object");
      r(t, [i.resizeTrigger]), t.type = "text/html", t.setAttribute("tabindex", "-1");
      var e = this._resizeHandler.bind(this);
      t.onload = function () {
        t.contentDocument.defaultView.addEventListener("resize", e)
      }, a() || (t.data = "about:blank"), this.element.appendChild(t), a() && (t.data = "about:blank"), this._resizeTriggerElement = t
    }, s.prototype.update = function () {
      return n ? this : !1 === this._created ? this : (this._viewElement.style.width = (this.element.offsetWidth + e).toString() + "px", this._viewElement.style.height = (this.element.offsetHeight + e).toString() + "px", this._naturalThumbSizeX = this._scrollbarHorizontalElement.clientWidth / this._viewElement.scrollWidth * this._scrollbarHorizontalElement.clientWidth, this._naturalThumbSizeY = this._scrollbarVerticalElement.clientHeight / this._viewElement.scrollHeight * this._scrollbarVerticalElement.clientHeight, this._scrollTopMax = this._viewElement.scrollHeight - this._viewElement.clientHeight, this._scrollLeftMax = this._viewElement.scrollWidth - this._viewElement.clientWidth, this._naturalThumbSizeY < this.minThumbSize ? this._thumbVerticalElement.style.height = this.minThumbSize + "px" : this._scrollTopMax ? this._thumbVerticalElement.style.height = this._naturalThumbSizeY + "px" : this._thumbVerticalElement.style.height = "0px", this._naturalThumbSizeX < this.minThumbSize ? this._thumbHorizontalElement.style.width = this.minThumbSize + "px" : this._scrollLeftMax ? this._thumbHorizontalElement.style.width = this._naturalThumbSizeX + "px" : this._thumbHorizontalElement.style.width = "0px", this._thumbSizeY = this._thumbVerticalElement.clientHeight, this._thumbSizeX = this._thumbHorizontalElement.clientWidth, this._trackTopMax = this._scrollbarVerticalElement.clientHeight - this._thumbSizeY, this._trackLeftMax = this._scrollbarHorizontalElement.clientWidth - this._thumbSizeX, this._scrollHandler(), this)
    }, s.prototype.destroy = function () {
      if (this._resizeTriggerElement && (this.element.removeChild(this._resizeTriggerElement), this._resizeTriggerElement = null), n) return this;
      if (!1 === this._created) return this;
      if (this._unbinEvents(), o(this.element, [i.element, i.autoshow]), !0 === this.createElements) {
        for (this.element.removeChild(this._scrollbarVerticalElement), this.element.removeChild(this._scrollbarHorizontalElement); this._viewElement.childNodes.length > 0;) this.element.appendChild(this._viewElement.childNodes[0]);
        this.element.removeChild(this._viewElement)
      } else this._viewElement.style.width = "", this._viewElement.style.height = "", this._scrollbarVerticalElement.style.display = "none", this._scrollbarHorizontalElement.style.display = "none";
      return this._created = !1, this._document = null, null
    }, s.prototype.getViewElement = function () {
      return this._viewElement
    }, s.prototype._bindEvents = function () {
      return this._cache.events.scrollHandler = this._scrollHandler.bind(this), this._cache.events.clickVerticalTrackHandler = this._clickVerticalTrackHandler.bind(this), this._cache.events.clickHorizontalTrackHandler = this._clickHorizontalTrackHandler.bind(this), this._cache.events.clickVerticalThumbHandler = this._clickVerticalThumbHandler.bind(this), this._cache.events.clickHorizontalThumbHandler = this._clickHorizontalThumbHandler.bind(this), this._cache.events.mouseUpDocumentHandler = this._mouseUpDocumentHandler.bind(this), this._cache.events.mouseMoveDocumentHandler = this._mouseMoveDocumentHandler.bind(this), this._viewElement.addEventListener("scroll", this._cache.events.scrollHandler), this._scrollbarVerticalElement.addEventListener("mousedown", this._cache.events.clickVerticalTrackHandler), this._scrollbarHorizontalElement.addEventListener("mousedown", this._cache.events.clickHorizontalTrackHandler), this._thumbVerticalElement.addEventListener("mousedown", this._cache.events.clickVerticalThumbHandler), this._thumbHorizontalElement.addEventListener("mousedown", this._cache.events.clickHorizontalThumbHandler), this._document.addEventListener("mouseup", this._cache.events.mouseUpDocumentHandler), this
    }, s.prototype._unbinEvents = function () {
      return this._viewElement.removeEventListener("scroll", this._cache.events.scrollHandler), this._scrollbarVerticalElement.removeEventListener("mousedown", this._cache.events.clickVerticalTrackHandler), this._scrollbarHorizontalElement.removeEventListener("mousedown", this._cache.events.clickHorizontalTrackHandler), this._thumbVerticalElement.removeEventListener("mousedown", this._cache.events.clickVerticalThumbHandler), this._thumbHorizontalElement.removeEventListener("mousedown", this._cache.events.clickHorizontalThumbHandler), this._document.removeEventListener("mouseup", this._cache.events.mouseUpDocumentHandler), this._document.removeEventListener("mousemove", this._cache.events.mouseMoveDocumentHandler), this
    }, s.prototype._scrollHandler = function () {
      var t = this._viewElement.scrollLeft * this._trackLeftMax / this._scrollLeftMax || 0,
        e = this._viewElement.scrollTop * this._trackTopMax / this._scrollTopMax || 0;
      this._thumbHorizontalElement.style.msTransform = "translateX(" + t + "px)", this._thumbHorizontalElement.style.webkitTransform = "translate3d(" + t + "px, 0, 0)", this._thumbHorizontalElement.style.transform = "translate3d(" + t + "px, 0, 0)", this._thumbVerticalElement.style.msTransform = "translateY(" + e + "px)", this._thumbVerticalElement.style.webkitTransform = "translate3d(0, " + e + "px, 0)", this._thumbVerticalElement.style.transform = "translate3d(0, " + e + "px, 0)"
    }, s.prototype._resizeHandler = function () {
      this.update(), this.onResize && this.onResize()
    }, s.prototype._clickVerticalTrackHandler = function (t) {
      if (t.target === t.currentTarget) {
        var e = 100 * (t.offsetY - .5 * this._naturalThumbSizeY) / this._scrollbarVerticalElement.clientHeight;
        this._viewElement.scrollTop = e * this._viewElement.scrollHeight / 100
      }
    }, s.prototype._clickHorizontalTrackHandler = function (t) {
      if (t.target === t.currentTarget) {
        var e = 100 * (t.offsetX - .5 * this._naturalThumbSizeX) / this._scrollbarHorizontalElement.clientWidth;
        this._viewElement.scrollLeft = e * this._viewElement.scrollWidth / 100
      }
    }, s.prototype._clickVerticalThumbHandler = function (t) {
      this._startDrag(t), this._prevPageY = this._thumbSizeY - t.offsetY
    }, s.prototype._clickHorizontalThumbHandler = function (t) {
      this._startDrag(t), this._prevPageX = this._thumbSizeX - t.offsetX
    }, s.prototype._startDrag = function (t) {
      this._cursorDown = !0, r(document.body, [i.disable]), this._document.addEventListener("mousemove", this._cache.events.mouseMoveDocumentHandler), this._document.onselectstart = function () {
        return !1
      }
    }, s.prototype._mouseUpDocumentHandler = function () {
      this._cursorDown = !1, this._prevPageX = this._prevPageY = 0, o(document.body, [i.disable]), this._document.removeEventListener("mousemove", this._cache.events.mouseMoveDocumentHandler), this._document.onselectstart = null
    }, s.prototype._mouseMoveDocumentHandler = function (t) {
      var e, n;
      if (!1 !== this._cursorDown) return this._prevPageY ? (e = t.clientY - this._scrollbarVerticalElement.getBoundingClientRect().top, n = this._thumbSizeY - this._prevPageY, void(this._viewElement.scrollTop = this._scrollTopMax * (e - n) / this._trackTopMax)) : void(this._prevPageX && (e = t.clientX - this._scrollbarHorizontalElement.getBoundingClientRect().left, n = this._thumbSizeX - this._prevPageX, this._viewElement.scrollLeft = this._scrollLeftMax * (e - n) / this._trackLeftMax))
    }, t.exports = s
  }()
}, function (t) {
  t.exports = JSON.parse('{"name":"@znews/frontend","version":"1.1.82","description":"Frontend skeleton for Zing News","main":"index.js","scripts":{"dev":"gulp build:dev","prod":"gulp build:production","build-dev-js":"webpack --progress --mode development --config ./gulp/config/webpack.dev.js","build-prod-js":"webpack --progress --mode production --config ./gulp/config/webpack.prod.js","lint":"eslint *.js src/js/","build-demo":"rm dest -rf && gulp build:demo-dev","deploy-dev":"rm dest -rf && gulp build:demo-dev","clear-cache":"cat links-static.txt | while read line ; do curl \\"api.clearcache.zalo.so/php/znews.php?txtLink=$line\\"; done","deploy-stg-local":"export ASSET_PATH=//static-znews.zadn.vn/releases/web/dev/js/ && npm run deploy-dev && gulp deploy-stg"},"runtimeepository":{"type":"git","url":"ssh://git@zalogit2.zing.vn:8022/zmjs/znews/frontend.git"},"keywords":[],"author":"Media Frontend Team","license":"ISC","dependencies":{"@glidejs/glide":"^3.4.1","@zjs/common":"0.0.17","@zjs/zmodal":"0.0.19","@zplayer/core":"^1.0.20","autosize":"^4.0.2","d3":"^5.15.1","fullpage.js":"^3.0.8","gemini-scrollbar":"^1.5.3","highcharts":"^8.0.0","mitt":"^1.1.3","photo-sphere-viewer":"^3.5.1","postcss-loader":"^3.0.0","three":"^0.110.0","uevent":"^2.0.0","whatwg-fetch":"^3.0.0"},"devDependencies":{"@babel/core":"^7.6.4","@babel/plugin-proposal-class-properties":"^7.5.5","@babel/plugin-transform-runtime":"^7.6.2","@babel/preset-env":"^7.6.3","@babel/runtime":"^7.6.3","babel-eslint":"^10.0.3","babel-loader":"^8.0.6","babel-plugin-syntax-dynamic-import":"^6.18.0","babel-plugin-transform-flow-strip-types":"^6.22.0","browser-sync":"^2.26.7","cache-loader":"^4.1.0","css-loader":"^3.2.0","del":"^5.1.0","eslint":"^6.5.1","eslint-import-resolver-webpack":"^0.11.1","eslint-plugin-import":"^2.18.2","file-loader":"^4.2.0","generate-changelog":"^1.8.0","gulp":"^3.9.1","gulp-autoprefixer":"^7.0.1","gulp-concat-css":"^3.1.0","gulp-copy":"^4.0.1","gulp-cssmin":"^0.2.0","gulp-ftp":"^1.1.0","gulp-merge":"^0.1.1","gulp-nunjucks":"^5.0.1","gulp-sass":"^4.0.2","gulp-sequence":"^1.0.0","gulp-sourcemaps":"^2.6.5","gulp-strip-css-comments":"^2.0.0","gulp-util":"^3.0.8","module-replace-webpack-plugin":"0.0.12","node-bourbon":"^4.2.8","node-sass":"^4.12.0","nunjucks":"^3.2.0","require-dir":"^1.2.0","sass-loader":"^8.0.0","source-map-loader":"^0.2.4","style-loader":"^1.0.0","terser-webpack-plugin":"^2.2.1","url-loader":"^2.2.0","webpack":"^4.41.2","webpack-bundle-analyzer":"^3.6.0","webpack-cli":"^3.3.9","webpack-dev-server":"^3.9.0","webpack-merge":"^4.2.2","webpack-strip":"^0.1.0"},"browserslist":["cover 98%","not dead"]}')
}, function (t, e, n) {
  var i = function (t) {
    "use strict";
    var e, n = Object.prototype,
      i = n.hasOwnProperty,
      r = "function" == typeof Symbol ? Symbol : {},
      o = r.iterator || "@@iterator",
      a = r.asyncIterator || "@@asyncIterator",
      s = r.toStringTag || "@@toStringTag";

    function l(t, e, n, i) {
      var r = e && e.prototype instanceof v ? e : v,
        o = Object.create(r.prototype),
        a = new O(i || []);
      return o._invoke = function (t, e, n) {
        var i = u;
        return function (r, o) {
          if (i === d) throw new Error("Generator is already running");
          if (i === f) {
            if ("throw" === r) throw o;
            return P()
          }
          for (n.method = r, n.arg = o;;) {
            var a = n.delegate;
            if (a) {
              var s = A(a, n);
              if (s) {
                if (s === p) continue;
                return s
              }
            }
            if ("next" === n.method) n.sent = n._sent = n.arg;
            else if ("throw" === n.method) {
              if (i === u) throw i = f, n.arg;
              n.dispatchException(n.arg)
            } else "return" === n.method && n.abrupt("return", n.arg);
            i = d;
            var l = c(t, e, n);
            if ("normal" === l.type) {
              if (i = n.done ? f : h, l.arg === p) continue;
              return {
                value: l.arg,
                done: n.done
              }
            }
            "throw" === l.type && (i = f, n.method = "throw", n.arg = l.arg)
          }
        }
      }(t, n, a), o
    }

    function c(t, e, n) {
      try {
        return {
          type: "normal",
          arg: t.call(e, n)
        }
      } catch (t) {
        return {
          type: "throw",
          arg: t
        }
      }
    }
    t.wrap = l;
    var u = "suspendedStart",
      h = "suspendedYield",
      d = "executing",
      f = "completed",
      p = {};

    function v() {}

    function m() {}

    function g() {}
    var b = {};
    b[o] = function () {
      return this
    };
    var y = Object.getPrototypeOf,
      w = y && y(y(I([])));
    w && w !== n && i.call(w, o) && (b = w);
    var E = g.prototype = v.prototype = Object.create(b);

    function k(t) {
      ["next", "throw", "return"].forEach((function (e) {
        t[e] = function (t) {
          return this._invoke(e, t)
        }
      }))
    }

    function T(t) {
      var e;
      this._invoke = function (n, r) {
        function o() {
          return new Promise((function (e, o) {
            ! function e(n, r, o, a) {
              var s = c(t[n], t, r);
              if ("throw" !== s.type) {
                var l = s.arg,
                  u = l.value;
                return u && "object" == typeof u && i.call(u, "__await") ? Promise.resolve(u.__await).then((function (t) {
                  e("next", t, o, a)
                }), (function (t) {
                  e("throw", t, o, a)
                })) : Promise.resolve(u).then((function (t) {
                  l.value = t, o(l)
                }), (function (t) {
                  return e("throw", t, o, a)
                }))
              }
              a(s.arg)
            }(n, r, e, o)
          }))
        }
        return e = e ? e.then(o, o) : o()
      }
    }

    function A(t, n) {
      var i = t.iterator[n.method];
      if (i === e) {
        if (n.delegate = null, "throw" === n.method) {
          if (t.iterator.return && (n.method = "return", n.arg = e, A(t, n), "throw" === n.method)) return p;
          n.method = "throw", n.arg = new TypeError("The iterator does not provide a 'throw' method")
        }
        return p
      }
      var r = c(i, t.iterator, n.arg);
      if ("throw" === r.type) return n.method = "throw", n.arg = r.arg, n.delegate = null, p;
      var o = r.arg;
      return o ? o.done ? (n[t.resultName] = o.value, n.next = t.nextLoc, "return" !== n.method && (n.method = "next", n.arg = e), n.delegate = null, p) : o : (n.method = "throw", n.arg = new TypeError("iterator result is not an object"), n.delegate = null, p)
    }

    function C(t) {
      var e = {
        tryLoc: t[0]
      };
      1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
    }

    function _(t) {
      var e = t.completion || {};
      e.type = "normal", delete e.arg, t.completion = e
    }

    function O(t) {
      this.tryEntries = [{
        tryLoc: "root"
      }], t.forEach(C, this), this.reset(!0)
    }

    function I(t) {
      if (t) {
        var n = t[o];
        if (n) return n.call(t);
        if ("function" == typeof t.next) return t;
        if (!isNaN(t.length)) {
          var r = -1,
            a = function n() {
              for (; ++r < t.length;)
                if (i.call(t, r)) return n.value = t[r], n.done = !1, n;
              return n.value = e, n.done = !0, n
            };
          return a.next = a
        }
      }
      return {
        next: P
      }
    }

    function P() {
      return {
        value: e,
        done: !0
      }
    }
    return m.prototype = E.constructor = g, g.constructor = m, g[s] = m.displayName = "GeneratorFunction", t.isGeneratorFunction = function (t) {
      var e = "function" == typeof t && t.constructor;
      return !!e && (e === m || "GeneratorFunction" === (e.displayName || e.name))
    }, t.mark = function (t) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(t, g) : (t.__proto__ = g, s in t || (t[s] = "GeneratorFunction")), t.prototype = Object.create(E), t
    }, t.awrap = function (t) {
      return {
        __await: t
      }
    }, k(T.prototype), T.prototype[a] = function () {
      return this
    }, t.AsyncIterator = T, t.async = function (e, n, i, r) {
      var o = new T(l(e, n, i, r));
      return t.isGeneratorFunction(n) ? o : o.next().then((function (t) {
        return t.done ? t.value : o.next()
      }))
    }, k(E), E[s] = "Generator", E[o] = function () {
      return this
    }, E.toString = function () {
      return "[object Generator]"
    }, t.keys = function (t) {
      var e = [];
      for (var n in t) e.push(n);
      return e.reverse(),
        function n() {
          for (; e.length;) {
            var i = e.pop();
            if (i in t) return n.value = i, n.done = !1, n
          }
          return n.done = !0, n
        }
    }, t.values = I, O.prototype = {
      constructor: O,
      reset: function (t) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = !1, this.delegate = null, this.method = "next", this.arg = e, this.tryEntries.forEach(_), !t)
          for (var n in this) "t" === n.charAt(0) && i.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = e)
      },
      stop: function () {
        this.done = !0;
        var t = this.tryEntries[0].completion;
        if ("throw" === t.type) throw t.arg;
        return this.rval
      },
      dispatchException: function (t) {
        if (this.done) throw t;
        var n = this;

        function r(i, r) {
          return s.type = "throw", s.arg = t, n.next = i, r && (n.method = "next", n.arg = e), !!r
        }
        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
          var a = this.tryEntries[o],
            s = a.completion;
          if ("root" === a.tryLoc) return r("end");
          if (a.tryLoc <= this.prev) {
            var l = i.call(a, "catchLoc"),
              c = i.call(a, "finallyLoc");
            if (l && c) {
              if (this.prev < a.catchLoc) return r(a.catchLoc, !0);
              if (this.prev < a.finallyLoc) return r(a.finallyLoc)
            } else if (l) {
              if (this.prev < a.catchLoc) return r(a.catchLoc, !0)
            } else {
              if (!c) throw new Error("try statement without catch or finally");
              if (this.prev < a.finallyLoc) return r(a.finallyLoc)
            }
          }
        }
      },
      abrupt: function (t, e) {
        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
          var r = this.tryEntries[n];
          if (r.tryLoc <= this.prev && i.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
            var o = r;
            break
          }
        }
        o && ("break" === t || "continue" === t) && o.tryLoc <= e && e <= o.finallyLoc && (o = null);
        var a = o ? o.completion : {};
        return a.type = t, a.arg = e, o ? (this.method = "next", this.next = o.finallyLoc, p) : this.complete(a)
      },
      complete: function (t, e) {
        if ("throw" === t.type) throw t.arg;
        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), p
      },
      finish: function (t) {
        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
          var n = this.tryEntries[e];
          if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), _(n), p
        }
      },
      catch: function (t) {
        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
          var n = this.tryEntries[e];
          if (n.tryLoc === t) {
            var i = n.completion;
            if ("throw" === i.type) {
              var r = i.arg;
              _(n)
            }
            return r
          }
        }
        throw new Error("illegal catch attempt")
      },
      delegateYield: function (t, n, i) {
        return this.delegate = {
          iterator: I(t),
          resultName: n,
          nextLoc: i
        }, "next" === this.method && (this.arg = e), p
      }
    }, t
  }(t.exports);
  try {
    regeneratorRuntime = i
  } catch (t) {
    Function("r", "regeneratorRuntime = r")(i)
  }
}, function (t, e, n) {
  var i = n(71);
  "string" == typeof i && (i = [
    [t.i, i, ""]
  ]);
  var r = {
    insert: "head",
    singleton: !1
  };
  n(49)(i, r);
  i.locals && (t.exports = i.locals)
}, function (t, e, n) {
  (t.exports = n(48)(!1)).push([t.i, ".gm-scrollbar-disable-selection{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.gm-prevented{-webkit-overflow-scrolling:touch}.gm-prevented>.gm-scrollbar{display:none}.gm-scrollbar-container{position:relative;overflow:hidden !important;width:100%;height:100%}.gm-scrollbar{position:absolute;right:2px;bottom:2px;z-index:1;border-radius:3px}.gm-scrollbar.-vertical{width:6px;top:2px}.gm-scrollbar.-horizontal{height:6px;left:2px}.gm-scrollbar .thumb{position:relative;display:block;width:0;height:0;cursor:pointer;border-radius:inherit;background-color:rgba(0,0,0,0.2);-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0)}.gm-scrollbar .thumb:hover,.gm-scrollbar .thumb:active{background-color:rgba(0,0,0,0.3)}.gm-scrollbar.-vertical .thumb{width:100%}.gm-scrollbar.-horizontal .thumb{height:100%}.gm-scrollbar-container .gm-scroll-view{width:100%;height:100%;overflow:scroll;-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0);-webkit-overflow-scrolling:touch}.gm-scrollbar-container.gm-autoshow .gm-scrollbar{opacity:0;-webkit-transition:opacity 120ms ease-out;transition:opacity 120ms ease-out}.gm-scrollbar-container.gm-autoshow:hover>.gm-scrollbar,.gm-scrollbar-container.gm-autoshow:active>.gm-scrollbar,.gm-scrollbar-container.gm-autoshow:focus>.gm-scrollbar{opacity:1;-webkit-transition:opacity 340ms ease-out;transition:opacity 340ms ease-out}.gm-resize-trigger{position:absolute;display:block;top:0;left:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;opacity:0}\n", ""])
}, function (t, e, n) {
  var i = n(73);
  "string" == typeof i && (i = [
    [t.i, i, ""]
  ]);
  var r = {
    insert: "head",
    singleton: !1
  };
  n(49)(i, r);
  i.locals && (t.exports = i.locals)
}, function (t, e, n) {
  (t.exports = n(48)(!1)).push([t.i, ".gm-scrollbar.-vertical{width:4px;right:0;background-color:rgba(0,0,0,0.15)}.gm-scrollbar.-vertical .thumb{background-color:rgba(0,0,0,0.9)}.gm-scrollbar-container .gm-scroll-view{padding-right:20px}.gm-scrollbar-container .gm-scroll-view .listing-layout{padding-bottom:20px}.gm-scrollbar-container.mac-os .gm-scroll-view::-webkit-scrollbar{width:0}.gm-scrollbar-container.mac-os .gm-scroll-view::-webkit-scrollbar-thumb{background:transparent}.gm-scrollbar-container.mac-os .gm-scroll-view::-webkit-scrollbar-track{background:transparent}\n", ""])
}, function (t, e, n) {
  var i = n(75);
  "string" == typeof i && (i = [
    [t.i, i, ""]
  ]);
  var r = {
    insert: "head",
    singleton: !1
  };
  n(49)(i, r);
  i.locals && (t.exports = i.locals)
}, function (t, e, n) {
  (t.exports = n(48)(!1)).push([t.i, "a.z-version-info{position:absolute !important;top:0;right:-15px;font-size:10px;display:none !important;color:#444;text-indent:initial !important;width:initial !important;height:initial !important;background-image:none !important}a.z-version-info.show{display:block !important}#page-video a.z-version-info{color:#fff}\n", ""])
}, , function (t, e, n) {
  "use strict";
  n.r(e);
  n(28);
  var i = n(2),
    r = n.n(i),
    o = n(8),
    a = n.n(o),
    s = n(5),
    l = n.n(s),
    c = n(1),
    u = n.n(c),
    h = n(10),
    d = n.n(h),
    f = n(0),
    p = n(25),
    v = n(46),
    m = n(36),
    g = function (t) {
      function e() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "znews_lstorage";
        return r()(this, e), a()(this, l()(e).call(this, t, m.b))
      }
      return d()(e, t), e
    }(v.a),
    b = n(55),
    y = n(56),
    w = n(7),
    E = n(23),
    k = n(35),
    T = n(11),
    A = n.n(T),
    C = n(16),
    _ = n.n(C),
    O = n(15),
    I = function (t) {
      function e() {
        var t;
        return r()(this, e), t = a()(this, l()(e).call(this)), _()(A()(t), "onResize", (function () {
          t.updateChannelsPos()
        })), t.handleMoreClick = t.handleMoreClick.bind(A()(t)), t.handlePopupClick = t.handlePopupClick.bind(A()(t)), t.$cateMenu = document.find(".category-menu"), t.$zingHeader = document.getId("zing-header"), t.$btnMore = t.$cateMenu.find(".more"), t.bindEvents(), t
      }
      return d()(e, t), u()(e, [{
        key: "name",
        get: function () {
          return "MenuHeaderModule"
        }
      }]), u()(e, [{
        key: "bindEvents",
        value: function () {
          this.$btnMore.on("click", this.handleMoreClick), window.on("resize", this.onResize)
        }
      }, {
        key: "handleMoreClick",
        value: function (t) {
          if (t.preventDefault(), !this.$popup) {
            var e = "<div class='category-popup'>\n                            <div class='page-wrapper'>\n                                <nav class='category-menu'>\n                                    ".concat(this.$cateMenu.innerHTML, "\n                                </nav>\n                            </div>\n                        </div>");
            this.$popup = this.Dom.createElFromHTML(e), this.$zingHeader.appendChild(this.$popup), this.$popup.on("click", this.handlePopupClick)
          }
          if (!this.$channels) {
            var n = '<div class=\'channels-menu\'>\n                            <div class=\'page-wrapper\'>\n                                <nav>\n                                    <ul>\n                                        <li class="longform-logo">\n                                            <a href="/series/long-form.html">\n                                                <img src="'.concat(f.m, '" alt="Longform logo" />\n                                            </a>\n                                        </li>\n                                        <li class="chanels-story-logo">\n                                            <a href="/series/zingstory.html">\n                                                <img src="').concat(f.o, '" alt="Story logo" />\n                                            </a>\n                                        </li>\n                                        <li>\n                                            <a href="/series/voices-goc-nhin.html">\n                                                <img src="').concat(f.p, '" alt="Voices logo" />\n                                            </a>\n                                        </li>\n                                        <li class="infographic-logo">\n                                            <a href="/series/infographic.html">\n                                                <img src="').concat(f.j, '" alt="Infographic logo" />\n                                            </a>\n                                        </li>\n                                        <li class="lens-logo">\n                                            <a href="/series/lens.html">\n                                                <img src="').concat(f.l, '" alt="Lens logo" />\n                                            </a>\n                                        </li>\n                                        <li>\n                                            <a href="/series/the-review.html">\n                                                <img src="').concat(f.n, '" alt="Reiew logo" />\n                                            </a>\n                                        </li>\n                                        <li>\n                                            <a href="/series/interactive.html">\n                                                <img src="').concat(f.k, '" alt="Interactive logo" />\n                                            </a>\n                                        </li>\n                                    </ul>\n                                </nav>\n                            </div>\n                        </div>');
            this.$channels = this.Dom.createElFromHTML(n), this.updateChannelsPos(), this.$zingHeader.appendChild(this.$channels), this.$channels.on("click", this.handlePopupClick)
          }
          this.Dom.toggleClass(this.$btnMore, "active"), this.Dom.toggleClass(this.$popup, "active"), this.Dom.toggleClass(this.$channels, "active")
        }
      }, {
        key: "handlePopupClick",
        value: function () {
          this.Dom.toggleClass(this.$popup, "active"), this.Dom.toggleClass(this.$btnMore, "active"), this.Dom.toggleClass(this.$channels, "active")
        }
      }, {
        key: "updateChannelsPos",
        value: function () {
          this.$channels && this.Dom.setStyles(this.$channels, {
            top: "".concat(Math.ceil(this.$popup.offsetHeight + this.$zingHeader.offsetHeight), "px")
          })
        }
      }]), e
    }(O.a),
    P = n(30),
    D = function (t) {
      function e() {
        var t;
        return r()(this, e), (t = a()(this, l()(e).call(this))).handleBoxClick = t.handleBoxClick.bind(A()(t)), t.handleSubmit = t.handleSubmit.bind(A()(t)), t.handleKeydown = t.handleKeydown.bind(A()(t)), t.handleClick = t.handleClick.bind(A()(t)), t.$searchBox = document.getId("searchbox"), t.$searchInput = t.$searchBox.find("input[type=text]"), t.bindEvents(), t
      }
      return d()(e, t), u()(e, [{
        key: "name",
        get: function () {
          return "SeachHeaherModule"
        }
      }]), u()(e, [{
        key: "bindEvents",
        value: function () {
          this.$searchBox.on("click", this.handleBoxClick), this.$searchBox.on("submit", this.handleSubmit), this.$searchInput.on("keydown", this.handleKeydown), window.on("click", this.handleClick)
        }
      }, {
        key: "handleKeydown",
        value: function (t) {
          t.which == f.x.ESC && (this.$searchInput.blur(), this.$searchInput.value = "")
        }
      }, {
        key: "handleBoxClick",
        value: function (t) {
          t.stopPropagation()
        }
      }, {
        key: "handleClick",
        value: function () {
          this.Dom.removeClass(this.$searchBox, "active")
        }
      }, {
        key: "handleSubmit",
        value: function (t) {
          var e = this;
          if (t.preventDefault(), !this.Dom.hasClass(this.$searchBox, "active")) return this.Dom.addClass(this.$searchBox, "active"), void setTimeout((function () {
            e.$searchInput.focus()
          }), 500);
          var n = this.$searchInput.value.trim().replace(/%/g, "");
          if ("" != n) {
            var i = window.location.origin;
            i += "/".concat(Object(P.d)(n), "-tim-kiem.html"), window.location.href = i
          } else this.Dom.toggleClass(this.$searchBox, "active"), this.$searchInput.blur(), this.$searchInput.value = "";
          return !1
        }
      }]), e
    }(O.a),
    S = n(32),
    R = n(47),
    L = function () {
      function t() {
        r()(this, t), this.init(), this.handleIntro = this.handleIntro.bind(this), this.handleAds = this.handleAds.bind(this), this.bindEvents()
      }
      return u()(t, [{
        key: "name",
        get: function () {
          return "Footer"
        }
      }]), u()(t, [{
        key: "init",
        value: function () {
          var t = document.find("footer .links");
          this.$btnIntroEl = t.find(".link-intro"), this.$btnAdsEl = t.find(".link-ads")
        }
      }, {
        key: "bindEvents",
        value: function () {
          this.$btnIntroEl.on("click", this.handleIntro), this.$btnAdsEl.on("click", this.handleAds)
        }
      }, {
        key: "handleAds",
        value: function () {
          this.adsDl || (this.adsDl = new S.a(R.a), this.adsDl.on(S.a.EVENTS.OK, (function () {
            window.location.href = f.c
          }))), this.adsDl.show()
        }
      }, {
        key: "handleIntro",
        value: function () {
          this.introDl || (this.introDl = new S.a(R.e)), this.introDl.show()
        }
      }]), t
    }(),
    x = n(4),
    $ = n(34),
    M = n(19),
    H = n(22),
    N = n(3),
    z = function (t) {
      function e(t) {
        var n;
        return r()(this, e), (n = a()(this, l()(e).call(this, t))).zaConfig = t.zaConfig, n.isCategoryPage = t.isCategoryPage, n.isHomePage = t.isHomePage, n.PAGE_TYPES = t.PAGE_TYPES, n.init(), n
      }
      return d()(e, t), u()(e, [{
        key: "name",
        get: function () {
          return "TrackerModule"
        }
      }]), u()(e, [{
        key: "init",
        value: function () {
          if (this.isHomePage) {
            var t = document.findAll(".news-coverage");
            t.length && this.initTrackers(t)
          }
          if (this.isCategoryPage) {
            var e = document.findAll("#news-latest .section-sidebar .section.topic");
            e.length && this.initTrackers(e)
          }
          this.initTrackers()
        }
      }, {
        key: "initTrackers",
        value: function (t) {
          var e = this,
            n = t || document.findAll(".section"),
            i = this.PAGE_TYPES.TOPIC,
            r = this.PAGE_TYPES.CATEGORY;
          Object(x.i)(n) || N.a.array(n) || (n = [n]), n.forEach((function (t) {
            var n = t.findAll(".article-item[article-id]:not([data-tracker])");
            if (n.length) {
              var o = t.getAttribute("id") || "latest",
                a = t.dataset.count || 0;
              if (e.isCategoryPage) {
                var s = e.zaConfig.pageid,
                  l = "_",
                  c = [r, s, l].join("");
                if (-1 !== o.indexOf(r)) {
                  var u = o.split("-")[1] || "";
                  o = [c, u, l].join("")
                } else o = e.Dom.hasClass(t, i) ? [c, e.PAGE_TYPES.TOPIC, o, l].join("") : [c, o, l].join("")
              }
              n.forEach((function (t) {
                a++;
                var n = t.getAttribute("article-id");
                if (n) {
                  var i = Object(w.j)({
                      zone: o.replace(/-/gi, ""),
                      position: a,
                      zappid: e.app.ZAPPID
                    }),
                    r = t.findAll("a");
                  if (!r.length) {
                    var s = Object(x.e)(t, "a");
                    s && (r = [s])
                  }
                  r.forEach((function (t) {
                    t.on("click", (function () {
                      var e = t.getAttribute("href");
                      if (e) {
                        var n = (e = e.replace(/#.*/gi, "")) + "#" + i;
                        t.setAttribute("href", n)
                      }
                    }))
                  }));
                  var l = e.buildTrackUrl(n, i),
                    c = e.buidlTrackImage(l);
                  t.setAttribute("data-tracker", i), t.append(c), Object($.a)(c)
                }
              })), t.dataset.count = a
            }
          }))
        }
      }, {
        key: "buildTrackUrl",
        value: function (t, e) {
          return Object(H.a)(M.k, {
            type: "article",
            appid: this.app.ZAPPID,
            id: t,
            pos: e
          })
        }
      }, {
        key: "buidlTrackImage",
        value: function (t) {
          return this.Dom.createEl("img", {}, {
            "data-src": t,
            class: "tracking",
            alt: ""
          })
        }
      }]), e
    }(O.a),
    j = n(6),
    V = n(14),
    B = 15,
    U = 6e4,
    G = function (t) {
      function e(t) {
        var n;
        return r()(this, e), n = a()(this, l()(e).call(this, t)), _()(A()(n), "onBur", (function () {
          n.startTime = n.now
        })), _()(A()(n), "onFocus", (function () {
          var t = n.now;
          Math.floor((t - n.startTime) / U) >= B && window.location.reload(!0)
        })), _()(A()(n), "onResize", (function () {
          var t = document.getId("fullBg");
          t && (window.innerWidth < j.b.MINI_SCREEN ? t.style.display = "none" : t.style.display = "block")
        })), n.INIT_TIMER = t.INIT_TIMER, n.pageType = t.pageType, n.znAnalytic = t.znAnalytic, n.handleLoaded = n.handleLoaded.bind(A()(n)), n.adtimaUpdateLayout = n.adtimaUpdateLayout.bind(A()(n)), n.handleDomContentLoaded = n.handleDomContentLoaded.bind(A()(n)), n.init(), n
      }
      return d()(e, t), u()(e, [{
        key: "name",
        get: function () {
          return "MicsModule"
        }
      }, {
        key: "now",
        get: function () {
          return parseInt(performance.now())
        }
      }]), u()(e, [{
        key: "init",
        value: function () {
          var t;
          this.validOrigin(), this.bindEvents(), window.adtimaUpdateLayout = this.adtimaUpdateLayout(), this.app.isVideoPage || (t = document.findAll(".article-item.type-video")).length && t.forEach((function (t) {
            var e = t.getAttribute("serie-id");
            if (e) {
              var n = t.find(".article-thumbnail a"),
                i = t.find(".article-title a"),
                r = n.getAttribute("href");
              r = "".concat(r, "?series=").concat(e), n.setAttribute("href", r), i.setAttribute("href", r)
            }
          }))
        }
      }, {
        key: "bindEvents",
        value: function () {
          window.on("DOMContentLoaded", this.handleDomContentLoaded), window.on("load", this.handleLoaded), window.on("blur", this.onBur), window.on("focus", this.onFocus), window.on("resize", this.onResize)
        }
      }, {
        key: "adtimaUpdateLayout",
        value: function () {
          var t = this;
          this.adRenderTimer && clearTimeout(this.adRenderTimer), this.INIT_TIMER && (this.adRenderTimer = setTimeout((function () {
            t.triggerEvent("Advertising rendered")
          }), 5e3))
        }
      }, {
        key: "triggerEvent",
        value: function (t, e) {
          this.app.trigger(V.a.TRACKING_BEHAVIOR, {
            action: t,
            category: this.pageType,
            value: e || this.getLoadTime()
          })
        }
      }, {
        key: "handleDomContentLoaded",
        value: function () {
          this.INIT_TIMER && this.triggerEvent("DOM Content Loaded")
        }
      }, {
        key: "handleLoaded",
        value: function () {
          var t = this.getLoadTime(),
            e = "";
          t < 15e3 ? (e = "Page Loaded", this.znAnalytic.trackEvent("ldts", t)) : e = "Page Failed to Loaded (>15s)", this.triggerEvent(e, t), this.cleanUrl()
        }
      }, {
        key: "getLoadTime",
        value: function () {
          return Object(w.n)() - this.INIT_TIMER.getTime()
        }
      }, {
        key: "validOrigin",
        value: function () {
          if (!Object(w.B)()) {
            var t = window.top.location.host,
              e = window.location.pathname;
            window.top.location.href = "//".concat(f.t, "/").concat(e, "#redirected_").concat(t)
          }
        }
      }, {
        key: "cleanUrl",
        value: function () {
          if (!0 !== window.disableCleanURL && !Object(w.y)() && window.history && window.history.replaceState) {
            var t = window.location.href.replace(/#.*$/, "");
            window.history.replaceState({}, null, t)
          }
        }
      }]), e
    }(O.a),
    F = n(20),
    Y = n.n(F),
    W = n(13),
    Z = function () {
      var t = (new Date).getTime();
      return "znw" + (t = t.toString() + Math.round(1e4 * Math.random()))
    },
    q = function () {
      function t(e) {
        r()(this, t), this.ZaloLoginWidget = e.app.ZaloLoginWidget
      }
      return u()(t, [{
        key: "name",
        get: function () {
          return "AuthtUser"
        }
      }]), u()(t, [{
        key: "doAuth",
        value: function () {
          var t = this;
          return new Promise((function (e) {
            t.ZaloLoginWidget || e(!1), t.ZaloLoginWidget.init({
              sessionName: f.R,
              showName: !0,
              onLoad: function (t) {
                var n = t.data,
                  i = n.logged,
                  r = n.info;
                e(!!i && r)
              }
            })
          }))
        }
      }, {
        key: "login",
        value: function () {
          var t = this;
          return new Promise((function (e) {
            t.ZaloLoginWidget || e(!1), t.ZaloLoginWidget.login((function (t) {
              if (0 === t.error_code) {
                var n = t.data,
                  i = n.logged,
                  r = n.info;
                e(!!i && r)
              } else e(!1)
            }))
          }))
        }
      }, {
        key: "logout",
        value: function () {
          this.ZaloLoginWidget && this.ZaloLoginWidget.logout && this.ZaloLoginWidget.logout()
        }
      }]), t
    }(),
    K = function () {
      function t(e) {
        r()(this, t), this.app = e.app, this.userInfo = e.userInfo, this.log = this.app.log, this.lstorage = this.app.lstorage, this.cookies = this.app.cookies, this.sstorage = this.app.sstorage, this.isArticlePage = this.app.isArticlePage, this.cateId = this.app.zaConfig.pageid, this.catePath = this.app.catePath, this.groupId = this.app.znewsGroups, this.pageType = this.app.pageType, this.bestCate = null, this.mostCates = [], this.topHistory = null, this.userGroup = this.getBehaviorGroup()
      }
      return u()(t, [{
        key: "name",
        get: function () {
          return "TrackingUser"
        }
      }]), u()(t, [{
        key: "isRead",
        value: function (t) {
          if (!t) return !1;
          var e = this.lstorage.get(W.b.USER_HISTORY).history;
          return !N.a.empty(e) && e.some((function (e) {
            return e.id === t
          }))
        }
      }, {
        key: "buildArtilceInfo",
        value: function () {
          if (!this.isArticlePage) return {};
          var t = window.location.href,
            e = document.find('meta[property="og:title"]').getAttribute("content"),
            n = document.find('meta[property="og:image"]').getAttribute("content").replace("w720", "w480"),
            i = "",
            r = document.find(".the-article-category");
          return r && (i = Object(x.d)(r)), {
            url: t,
            title: e,
            thumbnail: n,
            cateid: this.cateId,
            catepath: this.catePath,
            groupid: this.groupId,
            category: i
          }
        }
      }, {
        key: "markRead",
        value: function (t) {
          var e = N.a.empty(t) ? this.buildArtilceInfo() : t;
          if (!N.a.empty(e) && e.url && e.title && e.thumbnail) {
            var n = this.lstorage.get(W.b.USER_HISTORY).history;
            n = N.a.empty(n) ? [] : n;
            var i = e.id || Object(w.k)(e.url),
              r = n.some((function (t) {
                return t.id == i
              })),
              o = Object(w.l)(e.url);
            if (r) {
              for (var a = 0; a < n.length; a++)
                if (n[a].id == i && 0 !== a) {
                  var s = n[a];
                  n.splice(a, 1), n.unshift(s);
                  break
                }
            } else n.unshift({
              id: i,
              title: e.title,
              url: o,
              thumb: e.thumbnail,
              cate: e.category,
              track_cate: e.cateid,
              time: Object(w.n)()
            }), e.groupid && this.trackBehavior(e.groupid), this.handleMostCates(n);
            this.lstorage.set(W.b.USER_HISTORY, {
              history: n
            })
          }
        }
      }, {
        key: "handleMostCates",
        value: function () {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            e = N.a.empty(t) ? this.lstorage.get(W.b.USER_HISTORY).history : t;
          if (!N.a.empty(e)) {
            var n = {
                trackCate: 0,
                number: 1
              },
              i = e.reduce((function (t, e) {
                var i = e.track_cate;
                return t[i] ? (t[i] += 1, t[i] > n.number && (n.number += 1, n.trackCate = i)) : t[i] = 1, t
              }), {}),
              r = [];
            Object.keys(i).forEach((function (t) {
              i[t] < 2 || f.f[t] && r.push({
                cate: f.f[t],
                number: i[t]
              })
            }));
            var o = 0 === (r = Object(w.I)(r, "number").slice(0, 3)).length ? e[0].track_cate : n.trackCate;
            this.mostCates = r, this.bestCate = o, this.cookies.set(W.a.USER_CATEGORY_TARGET, o, {
              expires: 365
            }), this.lstorage.set(W.b.USER_CATE_HISTORY, r)
          }
        }
      }, {
        key: "trackLogin",
        value: function () {
          this.sstorage.get(W.c.USER_LOGGED).tracked || (this.sstorage.set(W.c.USER_LOGGED, {
            tracked: !0
          }), this.app.trigger(V.a.TRACKING_BEHAVIOR, {
            action: "User have logged in Zalo",
            label: "LOGIN"
          }))
        }
      }, {
        key: "trackBehavior",
        value: function (t) {
          if (t) {
            var e = this.lstorage.get(W.b.USER_BEHAVIOR);
            e.value && (e = "" + t + e.value.substr(0, 14), this.lstorage.set(W.b.USER_BEHAVIOR, {
              value: e
            }), e = this.getBehaviorGroup(), this.cookies.set(W.a.USER_GROUP, e, {
              expires: 7
            }))
          }
        }
      }, {
        key: "getBehaviorGroup",
        value: function () {
          var t = "1",
            e = 0,
            n = this.lstorage.get(W.b.USER_BEHAVIOR);
          return N.a.empty(n) ? this.lstorage.set(W.b.USER_BEHAVIOR, {
            value: t
          }) : f.cb.forEach((function (i) {
            var r = n.value && n.value.match(new RegExp(i, "ig"));
            r && r.length > e && (e = r.length, t = i)
          })), t
        }
      }, {
        key: "handleUserHistory",
        value: function () {
          var t, e, n, i, r;
          return Y.a.async((function (o) {
            for (;;) switch (o.prev = o.next) {
              case 0:
                if (t = this.sstorage.get(W.c.USER_SESSION_HISTORY), !N.a.empty(t)) {
                  o.next = 6;
                  break
                }
                return o.next = 4, Y.a.awrap(this.fetchUserHistory());
              case 4:
                n = o.sent, N.a.empty(n.data) || (e = n.data.map((function (t) {
                  var e = t.category.find((function (e) {
                    return e.id == t.track_cate
                  }));
                  return {
                    id: t.id,
                    url: t.url,
                    cate: e ? e.name : "",
                    track_cate: t.track_cate,
                    title: t.title,
                    thumb: t.thumb && t.thumb.default,
                    time: t.published
                  }
                })), this.lstorage.set(W.b.USER_HISTORY, {
                  history: e
                }), this.sstorage.set(W.c.USER_SESSION_HISTORY, {
                  sync: !0
                }));
              case 6:
                e || (i = this.lstorage.get(W.b.USER_HISTORY), r = i.history, e = N.a.empty(r) ? [] : r), this.topHistory = e.slice(0, 5), this.handleMostCates(e);
              case 9:
              case "end":
                return o.stop()
            }
          }), null, this)
        }
      }, {
        key: "fetchUserHistory",
        value: function () {
          var t = this.userInfo.userId;
          return Object(w.h)(M.f.USER_HISTORY, {
            uid: t
          }, {
            withCredentials: !0
          })
        }
      }]), t
    }(),
    X = function () {
      function t(e) {
        r()(this, t), this.module = e, this.userInfo = e.userInfo, this.auth = e.auth, this.tracking = e.tracking, this.Dom = e.Dom, this.app = e.app, this.lstorage = e.lstorage, this.btnLogoutHandler = this.btnLogoutHandler.bind(this), this.btnUserHandler = this.btnUserHandler.bind(this), this.update = this.update.bind(this), this.$btnUserEl = document.find("#zing-header .notification"), this.Dom.addClass(this.$btnUserEl, "zalo-init"), this.bindEvents()
      }
      return u()(t, [{
        key: "name",
        get: function () {
          return "HeaderUser"
        }
      }]), u()(t, [{
        key: "bindEvents",
        value: function () {
          this.$btnUserEl.on("click", this.btnUserHandler)
        }
      }, {
        key: "btnUserHandler",
        value: function (t) {
          var e, n, i, r;
          return Y.a.async((function (o) {
            for (;;) switch (o.prev = o.next) {
              case 0:
                if (t.preventDefault(), !this.Dom.hasClass(this.$btnUserEl, "logged-in")) {
                  o.next = 4;
                  break
                }
                return this.Dom.toggleClass(this.$popupUserEl, "hide"), o.abrupt("return");
              case 4:
                return e = this.lstorage.get(W.b.USER_ZID), n = this.app.ZAPP.getVisitorID ? this.app.ZAPP.getVisitorID() : Z(), o.next = 8, Y.a.awrap(this.auth.login());
              case 8:
                (r = o.sent) && (i = e.name && n === e.userId ? e.name : r.name ? r.name : "", this.userInfo.avatar = r.avatar, this.userInfo.name = i, this.module.isLogged = !0, this.update());
              case 10:
              case "end":
                return o.stop()
            }
          }), null, this)
        }
      }, {
        key: "update",
        value: function () {
          var t, e;
          return Y.a.async((function (n) {
            for (;;) switch (n.prev = n.next) {
              case 0:
                this.userInfo = this.module.userInfo, t = this.Dom.createEl("img", {}, {
                  src: this.userInfo.avatar,
                  class: "avatar fadeIn"
                }), this.Dom.addClass(this.$btnUserEl, "logged-in"), this.Dom.removeFromDom(this.$btnUserEl.find("span")), this.$btnUserEl.append(t), this.$popupUserEl = this.renderUserPopup(), e = this.$popupUserEl.find(".btnLogout"), document.find("#zing-header .toolbox").append(this.$popupUserEl), e.on("click", this.btnLogoutHandler);
              case 10:
              case "end":
                return n.stop()
            }
          }), null, this)
        }
      }, {
        key: "btnLogoutHandler",
        value: function (t) {
          t.preventDefault(), this.auth.logout()
        }
      }, {
        key: "renderUserPopup",
        value: function () {
          var t = this.Dom.createElFromHTML('<div id="user-popup" class="hide"></div>'),
            e = this.renderListHistory();
          return t.append(this.renderUserProfile()), e && t.append(e), t
        }
      }, {
        key: "renderUserProfile",
        value: function () {
          return this.Dom.createElFromHTML("<div class='user-info'>\n                <img src='".concat(this.userInfo.avatar, '\' alt="" />\n                <h3>').concat(this.userInfo.name, "</h3>\n                <a href='#' class='btnLogout'>ÄÄƒng xuáº¥t</a>\n            </div>"))
        }
      }, {
        key: "renderListHistory",
        value: function () {
          var t = this,
            e = this.tracking.topHistory;
          if (!N.a.empty(e)) {
            var n = document.createElement("ul"),
              i = this.Dom.createEl("div", {
                className: "user-history history-inited"
              });
            return i.append(n), e.forEach((function (e) {
              var i = t.Dom.createElFromHTML("<li>\n                    <a href='".concat(e.url.replace(f.F, ""), "'>\n                        <img src='").concat(e.thumb, "' alt=\"\" />\n                        <p class='title'>").concat(e.title, "</p>\n                    </a>\n                </li>"));
              n.append(i)
            })), i
          }
        }
      }]), t
    }(),
    Q = function () {
      function t(e) {
        r()(this, t), this.Dom = e.Dom, this.tracking = e.tracking, this.auth = e.auth, this.isLogged = e.isLogged, this.$titleEl = document.find("#section-latest > .section-title"), this.btnLoginHandler = this.btnLoginHandler.bind(this), this.handlePartForY()
      }
      return u()(t, [{
        key: "name",
        get: function () {
          return "HomeUser"
        }
      }]), u()(t, [{
        key: "showCates",
        value: function () {
          if (this.$titleEl && this.isLogged) {
            var t = this.renderMostCates();
            this.removeSubHeading(), t && this.$titleEl.appendChild(this.Dom.createElFromHTML(t))
          }
        }
      }, {
        key: "removeSubHeading",
        value: function () {
          var t = this.$titleEl.find(".sub-heading");
          t && this.Dom.removeFromDom(t)
        }
      }, {
        key: "renderMostCates",
        value: function () {
          var t = this.tracking.mostCates;
          if (t) {
            var e = t.reduce((function (t, e) {
              return t + "<a href='#' title='".concat(e.number, "'>").concat(e.cate, "</a>")
            }), "");
            return "<p class='sub-heading' style='display:none;'>Dá»±a trĂªn lá»‹ch sá»­ cá»§a báº¡n Ä‘á»c nhiá»u ".concat(e, "</p>")
          }
        }
      }, {
        key: "handlePartForY",
        value: function () {
          var t = this;
          this.$titleEl && (this.isLogged ? this.removeSubHeading() : (this.$titleEl.appendChild(this.Dom.createElFromHTML('<p class="sub-heading"><a href="#login" class="btnLogin">ÄÄƒng nháº­p</a> Ä‘á»ƒ xem tin tá»©c dĂ nh riĂªng cho báº¡n</p>')), this.$titleEl.find(".btnLogin").on("click", (function (e) {
            return t.btnLoginHandler(e)
          }))))
        }
      }, {
        key: "btnLoginHandler",
        value: function (t) {
          return Y.a.async((function (e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return t.preventDefault(), e.next = 3, Y.a.awrap(this.auth.login());
              case 3:
                e.sent && window.location.reload(!0);
              case 5:
              case "end":
                return e.stop()
            }
          }), null, this)
        }
      }]), t
    }(),
    J = function (t) {
      function e(t) {
        var n;
        return r()(this, e), (n = a()(this, l()(e).call(this, t))).isHomePage = t.isHomePage, n.isArticlePage = t.isArticlePage, n.isVideoPage = t.isVideoPage, n.ZAPPID = t.ZAPPID, n.ZAPP = t.ZAPP, n.lstorage = t.lstorage, n.cookies = t.cookies, n.handleRequireLogin = n.handleRequireLogin.bind(A()(n)), n.handleChangeUserInfo = n.handleChangeUserInfo.bind(A()(n)), n.userInfo = {}, n.isLogged = !1, n.init(), n
      }
      return d()(e, t), u()(e, [{
        key: "name",
        get: function () {
          return "UserModule"
        }
      }], [{
        key: "EVENTS",
        get: function () {
          return V.a
        }
      }]), u()(e, [{
        key: "init",
        value: function () {
          var t;
          return Y.a.async((function (e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return this.auth = new q(this), e.next = 3, Y.a.awrap(this.auth.doAuth());
              case 3:
                return t = e.sent, this.isLogged = !!t, this.buildUser(t), this.tracking = new K(this), e.next = 9, Y.a.awrap(this.tracking.handleUserHistory());
              case 9:
                this.header = new X(this), this.isLogged && (this.header.update(), this.tracking.trackLogin(), this.app.trigger(V.a.LOGGED_IN)), this.isHomePage && (this.home = new Q(this), this.isLogged && this.home.showCates()), this.bindEvents(), this.app.trigger(V.a.USER_INITED);
              case 14:
              case "end":
                return e.stop()
            }
          }), null, this)
        }
      }, {
        key: "bindEvents",
        value: function () {
          this.app.on(V.a.REQUIRE_LOGIN, this.handleRequireLogin), this.app.on(V.a.USER_INFO_CHANE, this.handleChangeUserInfo)
        }
      }, {
        key: "handleChangeUserInfo",
        value: function (t) {
          this.userInfo.name = t.name, this.userInfo.email = t.email, this.isLogged = !0, this.saveUserInfo()
        }
      }, {
        key: "handleRequireLogin",
        value: function () {
          var t;
          return Y.a.async((function (e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return e.next = 2, Y.a.awrap(this.auth.login());
              case 2:
                if (t = e.sent) {
                  e.next = 6;
                  break
                }
                return this.app.trigger(V.a.LOGIN_FAIL), e.abrupt("return");
              case 6:
                return this.isLogged = !0, this.buildUser(t), e.next = 10, Y.a.awrap(this.tracking.handleUserHistory());
              case 10:
                this.header.update(), this.tracking.trackLogin(), this.app.trigger(V.a.LOGGED_IN), this.isHomePage && this.home.showCates();
              case 14:
              case "end":
                return e.stop()
            }
          }), null, this)
        }
      }, {
        key: "buildUser",
        value: function (t) {
          var e, n, i, r, o = this.lstorage.get(W.b.USER_ZID);
          e = this.ZAPP.getVisitorID ? this.app.ZAPP.getVisitorID() : Z(), n = o.name && e === o.userId ? o.name : t && t.name ? t.name : "", t && t.avatar && (i = t.avatar), r = o.email ? o.email : "", this.userInfo = {
            userId: e,
            appid: this.ZAPPID,
            avatar: i,
            name: n,
            email: r
          }, this.saveUserInfo()
        }
      }, {
        key: "saveUserInfo",
        value: function () {
          this.cookies.set(W.a.USER_ZID, this.userInfo.userId, {
            expires: 365
          }), this.lstorage.set(W.b.USER_ZID, this.userInfo)
        }
      }]), e
    }(O.a),
    tt = function (t) {
      function e(t) {
        var n;
        return r()(this, e), (n = a()(this, l()(e).call(this, t))).handleKeydown = n.handleKeydown.bind(A()(n)), n.bindEvents(), n
      }
      return d()(e, t), u()(e, [{
        key: "name",
        get: function () {
          return "Stats"
        }
      }]), u()(e, [{
        key: "handleKeydown",
        value: function (t) {
          this.app.user.isLogged && t.ctrlKey && t.shiftKey && (t.keyCode == f.x.K && this.updateStats(!1), t.keyCode != f.x.L && t.keyCode != f.x.SEMICOLON || this.updateStats(!0))
        }
      }, {
        key: "fetchData",
        value: function () {
          return Object(w.h)(M.f.STATS_GET)
        }
      }, {
        key: "updateStats",
        value: function () {
          var t, e, n, i, r, o = arguments;
          return Y.a.async((function (a) {
            for (;;) switch (a.prev = a.next) {
              case 0:
                if (t = !(o.length > 0 && void 0 !== o[0]) || o[0], (e = document.findAll(".ctr")).length && Object(x.n)(e), (n = document.findAll(".ctr-mask")).length && Object(x.n)(n), i = document.body, t ? (this.Dom.removeClass(i, "mode-ghost"), this.Dom.toggleClass(i, "god-mode")) : (this.Dom.toggleClass(i, "mode-ghost"), this.Dom.removeClass(i, "god-mode")), !(this.Dom.hasClass(i, "god-mode") && t || this.Dom.hasClass(i, "mode-ghost") && !t)) {
                  a.next = 12;
                  break
                }
                return a.next = 10, Y.a.awrap(this.fetchData());
              case 10:
                (r = a.sent) && 0 === r.err && r.data && this.updateItems(r.data, t);
              case 12:
              case "end":
                return a.stop()
            }
          }), null, this)
        }
      }, {
        key: "updateItems",
        value: function (t, e) {
          var n = this;
          if (!e) {
            document.findAll("#section-featured .article-item, \n                #section-multimedia .article-item, \n                #section-publish .article-item,\n                #section-magazine .article-item").forEach((function (e) {
              var i = e.getAttribute("data-tracker") + "_" + e.getAttribute("article-id");
              if (i && t[i]) {
                var r = t[i],
                  o = "210,0,0,".concat(.9 * r / 10);
                e.append(n.Dom.createElFromHTML('<div class="ctr-mask" style="background-color:rgba('.concat(o, ')"> ').concat(t[i], " %</div>")))
              }
            })), document.findAll(".article-item").forEach((function (e) {
              var i = e.getAttribute("article-id"),
                r = t["all_" + i];
              if (r) {
                var o = e.find(".article-thumbnail") || e;
                o && o.append(n.Dom.createElFromHTML('<span class="ctr"> '.concat(r, " %</span>")))
              }
            }))
          }
          if (e) {
            document.findAll(".article-item").forEach((function (e) {
              var i = e.getAttribute("data-tracker");
              if (i && t[i]) {
                var r = t[i],
                  o = "0, 47, 117, ".concat(.9 * r / 20);
                e.append(n.Dom.createElFromHTML('<div class="ctr-mask" style="background-color:rgba('.concat(o, ');"> ').concat(r, " %</div>")))
              }
            }))
          }
        }
      }, {
        key: "bindEvents",
        value: function () {
          document.on("keydown", this.handleKeydown)
        }
      }, {
        key: "unbindEvents",
        value: function () {
          document.off("keydown", this.handleKeydown)
        }
      }]), e
    }(O.a),
    et = W.c.USER_BEHAVIOR_TRACKING,
    nt = function (t) {
      function e(t) {
        var n;
        return r()(this, e), (n = a()(this, l()(e).call(this, t))).trackCount = -1, n.sstorage = t.sstorage, n.TESTGROUP = t.TESTGROUP, n.ZAPPID = t.ZAPPID, n.init(), n
      }
      return d()(e, t), u()(e, [{
        key: "name",
        get: function () {
          return "BehaviorTracking"
        }
      }]), u()(e, [{
        key: "init",
        value: function () {
          var t = this.app.sstorage.get(et);
          N.a.empty(t) ? (Object(w.F)(1, 1e4) < 10 || E.e || this.app.TESTGROUP && (this.TESTGROUP.isControlGroup || this.TESTGROUP.isTestGroup)) && (this.trackCount = 0, this.sstorage.set(et, {
            times: 0
          })) : this.trackCount = t.times
        }
      }, {
        key: "track",
        value: function (t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (!(this.trackCount < 0)) {
            if (!t) throw Error("No action or label provided");
            if (window.gtag) {
              var n = e.category,
                i = e.label,
                r = e.value,
                o = e.isInteraction,
                a = {},
                s = n || this.ZAPPID;
              this.TESTGROUP.isTestGroup ? s = "ABTest:" + s : this.TESTGROUP.isControlGroup && (s = "ABControl:" + s), a.event_category = s, i && (a.event_label = i), r && (a.value = r), o && (a.non_interaction = !o), window.gtag("event", t, a), this.trackCount++, this.sstorage.set(et, {
                times: this.trackCount
              })
            }
          }
        }
      }]), e
    }(O.a),
    it = function () {
      function t(e) {
        r()(this, t), this.TESTGROUP = e.TESTGROUP, this.znAnalytic = e.znAnalytic, this.AdtimaZingNews = e.requestAdtimaZingNews, this.GA = e.GA
      }
      return u()(t, [{
        key: "track",
        value: function () {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            e = t.url ? t.url : window.location.href,
            n = Object(w.k)(e),
            i = t.title ? t.title : document.title,
            r = t.hash ? t.hash : "",
            o = t.topicid ? t.topicid : "",
            a = t.catename ? t.catename : "";
          e = e.replace(f.F, f.u), e += r, this.znAnalytic && this.znAnalytic.trackPageview({
            url: e,
            catename: a,
            topicid: o
          }), this.GA && this.GA("send", "pageview", {
            title: i,
            page: e
          }), this.TESTGROUP && this.TESTGROUP.trackPageview(e, i), n && this.AdtimaZingNews.then((function (t) {
            t && N.a.function(t.UpdateViewCount) && t.UpdateViewCount(n)
          }))
        }
      }]), t
    }(),
    rt = n(63),
    ot = W.b.VIDEO_TIME_USER_WATCHED,
    at = "watch",
    st = "watch-seek",
    lt = function () {
      function t(e) {
        r()(this, t), this.app = e, this.log = e.log, this.stats = {
          lastTime: -1,
          consume: 0
        }, this.submit()
      }
      return u()(t, [{
        key: "name",
        get: function () {
          return "TrackingTimeModule"
        }
      }]), u()(t, [{
        key: "submit",
        value: function () {
          var t = this,
            e = this.app.lstorage.get(ot);
          N.a.empty(e) || (Object.keys(e).forEach((function (n) {
            var i = e[n],
              r = i.c,
              o = i.d,
              a = {
                appid: t.app.ZAPPID,
                page: "article",
                event: at,
                vid: t.app.ZAPP.getVisitorID ? t.app.ZAPP.getVisitorID() : "",
                value: r,
                postid: n
              },
              s = Object(H.a)(M.h, a);
            Object(w.a)(s), r !== o && (a.value = o, a.event = st, s = Object(H.a)(M.h, a), Object(w.a)(s))
          })), this.app.lstorage.clean(ot))
        }
      }, {
        key: "save",
        value: function (t, e) {
          if (e % 5 == 0 && this.stats.lastTime < e) {
            var n = this.app.lstorage.get(ot);
            this.stats.lastTime = e, 0 !== e && e - this.stats.lastTime <= 5 && e - this.stats.lastTime >= 0 && (this.stats.consume += 5), n[t] = {
              d: e,
              c: this.stats.consume,
              ts: Object(rt.a)()
            }, this.app.lstorage.set(ot, n)
          }
        }
      }]), t
    }(),
    ct = function (t) {
      function e(t) {
        var n;
        return r()(this, e), (n = a()(this, l()(e).call(this, t))).behavior = new nt(t), n.pageView = new it(t), n.time = new lt(t), n.handleBehavior = n.handleBehavior.bind(A()(n)), n.handlePageView = n.handlePageView.bind(A()(n)), n.handleTimePlayer = n.handleTimePlayer.bind(A()(n)), n.bindEvents(), n
      }
      return d()(e, t), u()(e, [{
        key: "name",
        get: function () {
          return "TrackingModule"
        }
      }]), u()(e, [{
        key: "handleBehavior",
        value: function (t) {
          !N.a.empty(t) && t.action && this.behavior.track(t.action, t)
        }
      }, {
        key: "handlePageView",
        value: function (t) {
          N.a.empty(t) || this.pageView.track(t)
        }
      }, {
        key: "handleTimePlayer",
        value: function (t) {
          N.a.empty(t) || this.time.save(t.id, t.time)
        }
      }, {
        key: "bindEvents",
        value: function () {
          this.app.on(V.a.TRACKING_BEHAVIOR, this.handleBehavior), this.app.on(V.a.TRACKING_PAGEVIEW, this.handlePageView), this.app.on(V.a.TRACKING_TIME_PLAYER, this.handleTimePlayer)
        }
      }, {
        key: "unbindEvents",
        value: function () {
          this.app.off(V.a.TRACKING_BEHAVIOR, this.handleBehavior), this.app.off(V.a.TRACKING_PAGEVIEW, this.handlePageView), this.app.off(V.a.TRACKING_TIME_PLAYER, this.handleTimePlayer)
        }
      }]), e
    }(O.a),
    ut = n(12),
    ht = "version.test",
    dt = "version.test.id",
    ft = "version.live.id",
    pt = "version.test.size",
    vt = function (t) {
      function e(t) {
        var n;
        if (r()(this, e), (n = a()(this, l()(e).call(this))).config = t.CONFIG, !n.config) throw new Error("".concat(n.name, ": No config defined"));
        return Object(ut.b)(n.config, ht) ? (n.cookies = t.cookies, n.GA = t.GA, n.trackedUrl = t.trackedUrl, n.pageType = t.pageType, n.isTestGroup = !1, n.isControlGroup = !1, n.hasOverideTestGroup = !1, n.configGroup = {}, n.versionTest = Object(ut.b)(n.config, dt), n.versionLive = Object(ut.b)(n.config, ft), n.testSize = Object(ut.b)(n.config, pt), n.init(), n) : a()(n)
      }
      return d()(e, t), u()(e, [{
        key: "name",
        get: function () {
          return "ABTestModule"
        }
      }]), u()(e, [{
        key: "init",
        value: function () {
          this.handleReset(), this.handleOverrideTestGroup(), this.hasOverideTestGroup || this.handleRecentGroup();
          var t = this.configGroup,
            e = t.tracking,
            n = t.name;
          this.GA && !N.a.empty(e) && this.GA("create", e, f.T, n), this.trackPageview(this.trackedUrl)
        }
      }, {
        key: "handleOverrideTestGroup",
        value: function () {
          var t = Object(w.w)("abtest"),
            e = window.location.search.match(f.G),
            n = e ? e[1] : "";
          (n == f.a.TEST || t) && (this.setTestGroup(!1), this.hasOverideTestGroup = !0), n == f.a.CONTROL && (this.setControlGroup(!1), this.hasOverideTestGroup = !0)
        }
      }, {
        key: "handleReset",
        value: function () {
          var t = this.cookies.get(W.a.ZCONFIG);
          t && t == this.config.id || (this.cookies.remove(W.a.USER_CONTROL), this.cookies.remove(W.a.ZCONFIG))
        }
      }, {
        key: "handleRecentGroup",
        value: function () {
          var t = this.cookies.get(W.a.VERSION),
            e = this.cookies.get(W.a.USER_CONTROL);
          t != this.versionTest ? e != this.versionTest ? Object(w.y)() || null != e || this.randomTestGroup() : this.setControlGroup(!1) : this.setTestGroup(!1)
        }
      }, {
        key: "randomTestGroup",
        value: function () {
          var t = this.config.duration;
          this.cookies.set(W.a.ZCONFIG, this.config.id, {
            expires: t
          });
          var e = Object(w.F)(1, 1e3),
            n = 10 * this.testSize;
          e <= n ? this.setTestGroup() : e > n && e <= 2 * n ? this.setControlGroup() : this.cookies.set(W.a.USER_CONTROL, this.versionLive, {
            expires: t
          })
        }
      }, {
        key: "setControlGroup",
        value: function () {
          var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          this.isControlGroup = !0, this.configGroup = Object(ut.b)(this.config, "version.test.control"), t && this.cookies.set(W.a.USER_CONTROL, this.versionTest, {
            expires: this.config.duration
          })
        }
      }, {
        key: "setTestGroup",
        value: function () {
          var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          this.isTestGroup = !0, this.configGroup = Object(ut.b)(this.config, "version.test.experiment"), t && (this.cookies.remove(W.a.USER_CONTROL), this.cookies.set(W.a.VERSION, this.versionTest, {
            expires: this.config.duration
          }))
        }
      }, {
        key: "trackPageview",
        value: function (t, e) {
          if (t && this.GA && !N.a.empty(this.configGroup.tracking) && (this.isTestGroup || this.isControlGroup)) {
            var n = this.configGroup.prefix || "/",
              i = "/".concat(n, "/").concat(t).replace(/\/\/+/i, "/");
            this.GA("".concat(this.configGroup.name, ".send"), "pageview", {
              page: i,
              title: e || document.title
            })
          }
        }
      }]), e
    }(O.a),
    mt = n(18),
    gt = function (t) {
      function e(t, n) {
        var i, o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        return r()(this, e), (i = a()(this, l()(e).call(this))).module = t, i.options = Object(ut.a)(i.defaultOptions, o), i.data = i.filterData(n), i.items = [], i.totalItem = i.data.length, i.indexActive = 0, i.slide = i.slide.bind(A()(i)), i.render(), i.totalItem > 0 && (i.intervalTimer = setInterval(i.slide, 3e3)), i
      }
      return d()(e, t), u()(e, [{
        key: "name",
        get: function () {
          return "WeatherWidget"
        }
      }, {
        key: "defaultOptions",
        get: function () {
          return {
            locations: [f.A.HCM, f.A.HANOI]
          }
        }
      }]), u()(e, [{
        key: "filterData",
        value: function (t) {
          var e = this;
          return t.filter((function (t) {
            if (e.options.locations.indexOf(t.Code.toLowerCase()) >= 0) return t
          }))
        }
      }, {
        key: "increaseIndex",
        value: function () {
          this.indexActive >= this.totalItem - 1 ? this.indexActive = 0 : this.indexActive++
        }
      }, {
        key: "slide",
        value: function () {
          var t = this.items[this.indexActive];
          this.Dom.removeClass(t, "active"), this.increaseIndex(), t = this.items[this.indexActive], this.Dom.addClass(t, "active")
        }
      }, {
        key: "renderItem",
        value: function (t) {
          return this.Dom.createElFromHTML('<li city="'.concat(t.Code, '">\n                <strong>').concat(t.City, "</strong>\n                <em>").concat(t.CT, "Â°C</em> / <span>").concat(t.MinT, "-").concat(t.MaxT, 'Â°C</span>\n                <img src="').concat(t.CP, '" alt="">\n            </li>'))
        }
      }, {
        key: "renderItems",
        value: function () {
          var t = this;
          this.data.forEach((function (e, n) {
            var i = t.renderItem(e);
            t.indexActive === n && t.Dom.addClass(i, "active"), t.append(i), t.items.push(i)
          }))
        }
      }, {
        key: "render",
        value: function () {
          if (this.data) return this.$el = this.Dom.createEl("ul", {
            id: "widget-weather"
          }), this.renderItems(), this.$el
        }
      }]), e
    }(mt.a),
    bt = n(37),
    yt = function (t) {
      function e(t, n, i) {
        var o;
        return r()(this, e), (o = a()(this, l()(e).call(this))).module = t, o.stock = n, o.exchange = i, o.render(), o
      }
      return d()(e, t), u()(e, [{
        key: "name",
        get: function () {
          return "FinanceWidget"
        }
      }]), u()(e, [{
        key: "renderExchange",
        value: function () {
          var t = this.Dom.createEl("ul", {
            className: "exchange"
          });
          if (this.exchange.length) {
            var e = this.exchange[0],
              n = "<li>\n                            <strong>BĂ¡n ra</strong>\n                            <span>".concat(Object(bt.a)("#,###.", e.sell), "</span>\n                        </li>"),
              i = "<li>\n                            <strong>Mua vĂ o</strong>\n                            <span>".concat(Object(bt.a)("#,###.", e.buy), "</span>\n                        </li>"),
              r = this.Dom.createElFromHTML(n),
              o = this.Dom.createElFromHTML(i);
            return t.appendChild(o), t.appendChild(r), t
          }
        }
      }, {
        key: "renderStock",
        value: function () {
          var t = this,
            e = this.Dom.createEl("ul", {
              className: "stock"
            });
          return this.stock.forEach((function (n) {
            var i = parseFloat(n.percent) >= 0 ? "positive" : "negative",
              r = "<li>\n                            <strong>".concat(n.name, "</strong>\n                            <span>").concat(n.index, "</span> \n                            <em class='").concat(i, "'>").concat(n.change, "</em>\n                        </li>"),
              o = t.Dom.createElFromHTML(r);
            e.appendChild(o)
          })), e
        }
      }, {
        key: "render",
        value: function () {
          return this.$el = this.Dom.createEl("div", {
            id: "widget-finance"
          }), N.a.empty(this.stock) || this.append(this.renderStock()), N.a.empty(this.exchange) || this.append(this.renderExchange()), this.$el
        }
      }]), e
    }(mt.a),
    wt = function (t) {
      function e(t) {
        var n;
        return r()(this, e), (n = a()(this, l()(e).call(this))).module = t, n.slide = n.slide.bind(A()(n)), n.init(), n
      }
      return d()(e, t), u()(e, [{
        key: "name",
        get: function () {
          return "HotNewsWidget"
        }
      }]), u()(e, [{
        key: "init",
        value: function () {
          this.$el = document.find("#widget-ticker .latest-news"), this.$el && (this.items = this.findAll("li"), this.items.length && (this.totalItem = this.items.length, this.indexActive = 0, this.Dom.addClass(this.items[this.indexActive], "active"), this.intervalTimer = setInterval(this.slide, 2500)))
        }
      }, {
        key: "increaseIndex",
        value: function () {
          this.indexActive >= this.totalItem - 1 ? this.indexActive = 0 : this.indexActive++
        }
      }, {
        key: "slide",
        value: function () {
          var t = this.items[this.indexActive];
          this.Dom.removeClass(t, "active"), this.increaseIndex(), t = this.items[this.indexActive], this.Dom.addClass(t, "active")
        }
      }]), e
    }(mt.a),
    Et = function (t) {
      function e(t) {
        var n;
        return r()(this, e), (n = a()(this, l()(e).call(this, t))).$el = document.find("#widget-ticker"), n.$sectionSidebar = document.find("#section-latest .section-sidebar"), N.a.element(n.$el) ? n.fetchAndRender() : n.render(), n
      }
      return d()(e, t), u()(e, [{
        key: "name",
        get: function () {
          return "UtilitiesWidget"
        }
      }]), u()(e, [{
        key: "fetchData",
        value: function () {
          return Object(w.h)(M.f.UTILITIES_GET)
        }
      }, {
        key: "fetchAndRender",
        value: function () {
          var t;
          return Y.a.async((function (e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return e.next = 2, Y.a.awrap(this.fetchData());
              case 2:
                (t = e.sent) && 0 === t.err && t.data && (this.data = t.data), this.render();
              case 5:
              case "end":
                return e.stop()
            }
          }), null, this)
        }
      }, {
        key: "render",
        value: function () {
          this.data && (N.a.empty(this.data.weather) || this.$el.append(new gt(this, this.data.weather).$el), this.$sectionSidebar && (N.a.empty(this.data.stock) && N.a.empty(this.data.exchange) || this.$sectionSidebar.prepend(new yt(this, this.data.stock, this.data.exchange).$el))), new wt(this)
        }
      }]), e
    }(O.a),
    kt = function () {
      function t(e) {
        r()(this, t), f.w || (this.app = e, this.initialized = !1, this.init())
      }
      return u()(t, [{
        key: "name",
        get: function () {
          return "Facebook"
        }
      }]), u()(t, [{
        key: "init",
        value: function () {
          var t = this,
            e = Object(k.a)();
          return this.app.requestFB.then((function (n) {
            n ? (window.fbAsyncInit = function () {
              t.app.FB.init({
                appId: t.app.FBAPPID,
                logging: !1,
                status: !0,
                cookie: !0
              }), document.body.classList += " fbonline", t.app.FB.XFBML.parse(), t.initialized = !0, e.resolve(!0)
            }, window.fbAsyncInit()) : e.resolve(!1)
          })), e.promise
        }
      }, {
        key: "generateMainHashtag",
        value: function () {
          var t = document.find(".the-article .the-article-tags");
          if (t) {
            var e = t.findAll(".tag-item");
            if (e.length) {
              var n, i = !0,
                r = !1,
                o = void 0;
              try {
                for (var a, s = e[Symbol.iterator](); !(i = (a = s.next()).done); i = !0) {
                  var l = a.value;
                  n = Object(P.e)(l.textContent).replace(/\s+/g, "")
                }
              } catch (t) {
                r = !0, o = t
              } finally {
                try {
                  i || null == s.return || s.return()
                } finally {
                  if (r) throw o
                }
              }
              return n ? "#" + n : null
            }
          }
        }
      }, {
        key: "share",
        value: function (t) {
          var e = this,
            n = Object(k.a)(),
            i = Object(w.v)() || "",
            r = this.generateMainHashtag(),
            o = function () {
              var o = {
                method: "share",
                href: t,
                display: "popup",
                mobile_iframe: !0
              };
              i && (o.quote = i), r && (o.hashtag = r), e.app.FB.ui(o, (function (t) {
                t && !t.error_message ? n.resolve(!0) : n.resolve(!1)
              }))
            };
          return this.initialized ? o() : this.init().then((function (t) {
            t ? o() : n.resolve(!1)
          })), n.promise
        }
      }]), t
    }(),
    Tt = n(58),
    At = function (t) {
      function e() {
        var t;
        return r()(this, e), (t = a()(this, l()(e).call(this))).articleMap = {}, t
      }
      return d()(e, t), u()(e, [{
        key: "name",
        get: function () {
          return "DupplicateHandler"
        }
      }]), u()(e, [{
        key: "checkAndRemove",
        value: function (t) {
          var e = this,
            n = t.findAll(".article-item");
          n.length && n.forEach((function (t) {
            var n = t.getAttribute("article-id");
            n && (e.articleMap[n] ? e.Dom.removeFromDom(t) : e.articleMap[n] = !0)
          }))
        }
      }]), e
    }(O.a),
    Ct = {
      searchParams: "URLSearchParams" in self,
      iterable: "Symbol" in self && "iterator" in Symbol,
      blob: "FileReader" in self && "Blob" in self && function () {
        try {
          return new Blob, !0
        } catch (t) {
          return !1
        }
      }(),
      formData: "FormData" in self,
      arrayBuffer: "ArrayBuffer" in self
    };
  if (Ct.arrayBuffer) var _t = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
    Ot = ArrayBuffer.isView || function (t) {
      return t && _t.indexOf(Object.prototype.toString.call(t)) > -1
    };

  function It(t) {
    if ("string" != typeof t && (t = String(t)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t)) throw new TypeError("Invalid character in header field name");
    return t.toLowerCase()
  }

  function Pt(t) {
    return "string" != typeof t && (t = String(t)), t
  }

  function Dt(t) {
    var e = {
      next: function () {
        var e = t.shift();
        return {
          done: void 0 === e,
          value: e
        }
      }
    };
    return Ct.iterable && (e[Symbol.iterator] = function () {
      return e
    }), e
  }

  function St(t) {
    this.map = {}, t instanceof St ? t.forEach((function (t, e) {
      this.append(e, t)
    }), this) : Array.isArray(t) ? t.forEach((function (t) {
      this.append(t[0], t[1])
    }), this) : t && Object.getOwnPropertyNames(t).forEach((function (e) {
      this.append(e, t[e])
    }), this)
  }

  function Rt(t) {
    if (t.bodyUsed) return Promise.reject(new TypeError("Already read"));
    t.bodyUsed = !0
  }

  function Lt(t) {
    return new Promise((function (e, n) {
      t.onload = function () {
        e(t.result)
      }, t.onerror = function () {
        n(t.error)
      }
    }))
  }

  function xt(t) {
    var e = new FileReader,
      n = Lt(e);
    return e.readAsArrayBuffer(t), n
  }

  function $t(t) {
    if (t.slice) return t.slice(0);
    var e = new Uint8Array(t.byteLength);
    return e.set(new Uint8Array(t)), e.buffer
  }

  function Mt() {
    return this.bodyUsed = !1, this._initBody = function (t) {
      var e;
      this._bodyInit = t, t ? "string" == typeof t ? this._bodyText = t : Ct.blob && Blob.prototype.isPrototypeOf(t) ? this._bodyBlob = t : Ct.formData && FormData.prototype.isPrototypeOf(t) ? this._bodyFormData = t : Ct.searchParams && URLSearchParams.prototype.isPrototypeOf(t) ? this._bodyText = t.toString() : Ct.arrayBuffer && Ct.blob && ((e = t) && DataView.prototype.isPrototypeOf(e)) ? (this._bodyArrayBuffer = $t(t.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : Ct.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(t) || Ot(t)) ? this._bodyArrayBuffer = $t(t) : this._bodyText = t = Object.prototype.toString.call(t) : this._bodyText = "", this.headers.get("content-type") || ("string" == typeof t ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : Ct.searchParams && URLSearchParams.prototype.isPrototypeOf(t) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
    }, Ct.blob && (this.blob = function () {
      var t = Rt(this);
      if (t) return t;
      if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
      if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
      if (this._bodyFormData) throw new Error("could not read FormData body as blob");
      return Promise.resolve(new Blob([this._bodyText]))
    }, this.arrayBuffer = function () {
      return this._bodyArrayBuffer ? Rt(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(xt)
    }), this.text = function () {
      var t = Rt(this);
      if (t) return t;
      if (this._bodyBlob) return function (t) {
        var e = new FileReader,
          n = Lt(e);
        return e.readAsText(t), n
      }(this._bodyBlob);
      if (this._bodyArrayBuffer) return Promise.resolve(function (t) {
        for (var e = new Uint8Array(t), n = new Array(e.length), i = 0; i < e.length; i++) n[i] = String.fromCharCode(e[i]);
        return n.join("")
      }(this._bodyArrayBuffer));
      if (this._bodyFormData) throw new Error("could not read FormData body as text");
      return Promise.resolve(this._bodyText)
    }, Ct.formData && (this.formData = function () {
      return this.text().then(zt)
    }), this.json = function () {
      return this.text().then(JSON.parse)
    }, this
  }
  St.prototype.append = function (t, e) {
    t = It(t), e = Pt(e);
    var n = this.map[t];
    this.map[t] = n ? n + ", " + e : e
  }, St.prototype.delete = function (t) {
    delete this.map[It(t)]
  }, St.prototype.get = function (t) {
    return t = It(t), this.has(t) ? this.map[t] : null
  }, St.prototype.has = function (t) {
    return this.map.hasOwnProperty(It(t))
  }, St.prototype.set = function (t, e) {
    this.map[It(t)] = Pt(e)
  }, St.prototype.forEach = function (t, e) {
    for (var n in this.map) this.map.hasOwnProperty(n) && t.call(e, this.map[n], n, this)
  }, St.prototype.keys = function () {
    var t = [];
    return this.forEach((function (e, n) {
      t.push(n)
    })), Dt(t)
  }, St.prototype.values = function () {
    var t = [];
    return this.forEach((function (e) {
      t.push(e)
    })), Dt(t)
  }, St.prototype.entries = function () {
    var t = [];
    return this.forEach((function (e, n) {
      t.push([n, e])
    })), Dt(t)
  }, Ct.iterable && (St.prototype[Symbol.iterator] = St.prototype.entries);
  var Ht = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];

  function Nt(t, e) {
    var n, i, r = (e = e || {}).body;
    if (t instanceof Nt) {
      if (t.bodyUsed) throw new TypeError("Already read");
      this.url = t.url, this.credentials = t.credentials, e.headers || (this.headers = new St(t.headers)), this.method = t.method, this.mode = t.mode, this.signal = t.signal, r || null == t._bodyInit || (r = t._bodyInit, t.bodyUsed = !0)
    } else this.url = String(t);
    if (this.credentials = e.credentials || this.credentials || "same-origin", !e.headers && this.headers || (this.headers = new St(e.headers)), this.method = (n = e.method || this.method || "GET", i = n.toUpperCase(), Ht.indexOf(i) > -1 ? i : n), this.mode = e.mode || this.mode || null, this.signal = e.signal || this.signal, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && r) throw new TypeError("Body not allowed for GET or HEAD requests");
    this._initBody(r)
  }

  function zt(t) {
    var e = new FormData;
    return t.trim().split("&").forEach((function (t) {
      if (t) {
        var n = t.split("="),
          i = n.shift().replace(/\+/g, " "),
          r = n.join("=").replace(/\+/g, " ");
        e.append(decodeURIComponent(i), decodeURIComponent(r))
      }
    })), e
  }

  function jt(t, e) {
    e || (e = {}), this.type = "default", this.status = void 0 === e.status ? 200 : e.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in e ? e.statusText : "OK", this.headers = new St(e.headers), this.url = e.url || "", this._initBody(t)
  }
  Nt.prototype.clone = function () {
    return new Nt(this, {
      body: this._bodyInit
    })
  }, Mt.call(Nt.prototype), Mt.call(jt.prototype), jt.prototype.clone = function () {
    return new jt(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new St(this.headers),
      url: this.url
    })
  }, jt.error = function () {
    var t = new jt(null, {
      status: 0,
      statusText: ""
    });
    return t.type = "error", t
  };
  var Vt = [301, 302, 303, 307, 308];
  jt.redirect = function (t, e) {
    if (-1 === Vt.indexOf(e)) throw new RangeError("Invalid status code");
    return new jt(null, {
      status: e,
      headers: {
        location: t
      }
    })
  };
  var Bt = self.DOMException;
  try {
    new Bt
  } catch (t) {
    (Bt = function (t, e) {
      this.message = t, this.name = e;
      var n = Error(t);
      this.stack = n.stack
    }).prototype = Object.create(Error.prototype), Bt.prototype.constructor = Bt
  }

  function Ut(t, e) {
    return new Promise((function (n, i) {
      var r = new Nt(t, e);
      if (r.signal && r.signal.aborted) return i(new Bt("Aborted", "AbortError"));
      var o = new XMLHttpRequest;

      function a() {
        o.abort()
      }
      o.onload = function () {
        var t, e, i = {
          status: o.status,
          statusText: o.statusText,
          headers: (t = o.getAllResponseHeaders() || "", e = new St, t.replace(/\r?\n[\t ]+/g, " ").split(/\r?\n/).forEach((function (t) {
            var n = t.split(":"),
              i = n.shift().trim();
            if (i) {
              var r = n.join(":").trim();
              e.append(i, r)
            }
          })), e)
        };
        i.url = "responseURL" in o ? o.responseURL : i.headers.get("X-Request-URL");
        var r = "response" in o ? o.response : o.responseText;
        n(new jt(r, i))
      }, o.onerror = function () {
        i(new TypeError("Network request failed"))
      }, o.ontimeout = function () {
        i(new TypeError("Network request failed"))
      }, o.onabort = function () {
        i(new Bt("Aborted", "AbortError"))
      }, o.open(r.method, r.url, !0), "include" === r.credentials ? o.withCredentials = !0 : "omit" === r.credentials && (o.withCredentials = !1), "responseType" in o && Ct.blob && (o.responseType = "blob"), r.headers.forEach((function (t, e) {
        o.setRequestHeader(e, t)
      })), r.signal && (r.signal.addEventListener("abort", a), o.onreadystatechange = function () {
        4 === o.readyState && r.signal.removeEventListener("abort", a)
      }), o.send(void 0 === r._bodyInit ? null : r._bodyInit)
    }))
  }
  Ut.polyfill = !0, self.fetch || (self.fetch = Ut, self.Headers = St, self.Request = Nt, self.Response = jt);
  var Gt = function () {
      function t(e, n) {
        r()(this, t), this.app = e.app, this.Dom = e.Dom, this.log = e.log, this.$el = n, this.loading = !1, this.pageType = this.app.pageType, this.isArticlePage = this.app.isArticlePage, this.onScroll = this.onScroll.bind(this), this.init()
      }
      return u()(t, [{
        key: "name",
        get: function () {
          return "InfiniteLoad"
        }
      }]), u()(t, [{
        key: "layzyLoadImg",
        value: function () {
          this.$section.findAll(".article-thumbnail img[data-src]").forEach((function (t) {
            Object($.a)(t, {
              threshold: 400,
              autoscale: !0
            })
          }))
        }
      }, {
        key: "initTracker",
        value: function () {
          this.app.tracker.initTrackers(this.$section)
        }
      }, {
        key: "init",
        value: function () {
          this.$section = Object(x.e)(this.$el, ".section"), this.sectionId = this.$section.getAttribute("id"), this.$moreWrapper = this.$el.find(".btnMore"), this.$moreWrapper && (this.dupplicateHandler = new At, this.dupplicateHandler.checkAndRemove(this.$section), this.$more = this.$moreWrapper.find("a"), this.bindEvents())
        }
      }, {
        key: "bindEvents",
        value: function () {
          window.on("scroll", this.onScroll)
        }
      }, {
        key: "unBindEvents",
        value: function () {
          window.off("scroll", this.onScroll)
        }
      }, {
        key: "canLoad",
        value: function () {
          return Object(x.j)(this.$moreWrapper, 800)
        }
      }, {
        key: "reloadBannerR4",
        value: function () {
          this.isArticlePage && this.app.requestAdtimaZingNews.then((function (t) {
            if (t) {
              var e = t.Helpers.reloadBanner,
                n = t.position.r4;
              e && n && e(n)
            }
          }))
        }
      }, {
        key: "trackPageView",
        value: function (t) {
          this.app.trigger(V.a.TRACKING_PAGEVIEW, {
            url: t
          })
        }
      }, {
        key: "onScroll",
        value: function () {
          !this.loading && this.canLoad() && this.loadMore()
        }
      }, {
        key: "unLoadMore",
        value: function () {
          this.unBindEvents(), this.Dom.removeFromDom(this.$moreWrapper), this.loading = !1
        }
      }, {
        key: "loadMore",
        value: function () {
          var t = this;
          this.loading = !0;
          var e = this.$more.getAttribute("href");
          e ? (this.$more.innerHTML = Tt.a, this.$more.removeAttribute("href"), Ut(e).then((function (t) {
            return t.text()
          })).then((function (n) {
            if (n) {
              var i = document.createElement("div");
              i.innerHTML = n;
              var r = i.find("#" + t.sectionId),
                o = document.createElement("div");
              o.appendChild(r), t.app.isArticlePage || t.dupplicateHandler.checkAndRemove(r);
              var a = o.findAll(".section-content > .article-list .article-item");
              if (a.length) {
                a.forEach((function (e) {
                  Object(x.h)(t.$moreWrapper, e)
                }));
                var s = o.find(".section-content > .article-list .btnMore a");
                s ? (t.$more.innerHTML = "", t.$more.setAttribute("href", s.getAttribute("href"))) : t.unLoadMore(), t.loading = !1, t.layzyLoadImg(), t.initTracker(), t.reloadBannerR4(), t.trackPageView(e), t.app.trigger(V.a.INFINITE_DONE)
              } else t.unLoadMore()
            } else t.unLoadMore()
          }))) : this.unBindEvents()
        }
      }]), t
    }(),
    Ft = function (t) {
      function e(t) {
        var n;
        return r()(this, e), (n = a()(this, l()(e).call(this, t))).init(), n
      }
      return d()(e, t), u()(e, [{
        key: "name",
        get: function () {
          return "Infinite"
        }
      }]), u()(e, [{
        key: "init",
        value: function () {
          if (this.$el = document.find(".infinite-load"), this.$el) {
            var t = document.find(".the-article");
            if (t && this.Dom.hasClass(t, "layout-special")) {
              var e = document.getId("article-nextreads");
              if (e) return void this.Dom.removeFromDom(e)
            }
            new Gt(this, this.$el)
          }
        }
      }]), e
    }(O.a),
    Yt = n(9),
    Wt = function () {
      function t(e) {
        r()(this, t), this.app = e, this.log = e.log, this.init()
      }
      return u()(t, [{
        key: "name",
        get: function () {
          return "ContentIds"
        }
      }]), u()(t, [{
        key: "init",
        value: function () {
          this.app.adtimaConfig = this.app.adtimaConfig || {};
          var t = "",
            e = this.app.pageType,
            n = {
              home: "v1_web_other_home",
              cate: "v1_web_other_cate-" + this.app.zaConfig.pageid,
              topic: "v1_web_other_topic-" + Object(w.m)(),
              article: "v1_web_article_",
              video: "v1_web_video_",
              picture: "v1_web_picture_"
            };
          switch (e) {
            case f.E.HOME:
              t = n.home;
              break;
            case f.E.CATEGORY:
              t = n.cate;
              break;
            case f.E.TOPIC:
              t = n.topic;
              break;
            case f.E.ARTICLE:
              var i = document.find(".the-article"),
                r = i.getAttribute("article-id") || "";
              t = (Object(Yt.hasClass)(i, "type-picture") ? n.picture : n.article) + r;
              break;
            case f.E.VIDEO:
              var o = "",
                a = document.find(".video-player");
              a && (o = a.getAttribute("article-id") || ""), t = n.video + o
          }
          this.app.adtimaConfig.contentId = t
        }
      }]), t
    }(),
    Zt = function () {
      function t(e, n, i) {
        r()(this, t), this.ad = n, this.Dom = e.Dom, this.zoneId = i, this.timer = null, this.pushLogView = !1, this.activeViewUrlAd = null, this.render()
      }
      return u()(t, [{
        key: "name",
        get: function () {
          return "AdNativeItem"
        }
      }]), u()(t, [{
        key: "bindEvents",
        value: function (t) {
          var e = this;
          this.checkLogFirst = setTimeout((function () {
            return e.checkLogNative(t)
          }), 3e3), window.on("scroll", (function () {
            return e.checkLogNative(t)
          }))
        }
      }, {
        key: "unbindEvents",
        value: function (t) {
          var e = this;
          window.off("scroll", (function () {
            return e.checkLogNative(t)
          }))
        }
      }, {
        key: "destroy",
        value: function () {
          this.unbindEvents()
        }
      }, {
        key: "cleanText",
        value: function (t) {
          return t ? t = (t = (t = t.replace(/\+|\?|!/gi, "")).replace(/\s,/gi, ",")).replace(/\s\./gi, ".") : ""
        }
      }, {
        key: "checkLogNative",
        value: function (t) {
          var e = this;
          this.pushLogView || this.isInViewport(t) && (clearTimeout(this.timer), clearTimeout(this.checkLogFirst), this.timer = setTimeout((function () {
            e.isInViewport(t) && (e.pushLog(), e.pushLogView = !0)
          }), 1e3))
        }
      }, {
        key: "pushLog",
        value: function () {
          return Object(w.i)(this.activeViewUrlAd)
        }
      }, {
        key: "isInViewport",
        value: function (t) {
          var e = t.getBoundingClientRect(),
            n = e.top + e.height / 2 >= 0 && e.left >= 0 && e.bottom - e.height / 2 <= (window.innerHeight || document.documentElement.clientHeight) && e.right <= (window.innerWidth || document.documentElement.clientWidth);
          return n
        }
      }, {
        key: "buildTPL",
        value: function (t) {
          var e = t.tracking.click[0],
            n = t.tracking.impression[0];
          this.activeViewUrlAd = t.tracking.activeView[0];
          var i = -1 !== e.indexOf(f.t),
            r = !0 === t.hidePrTag ? "" : "ads",
            o = !0 === t.hidePrTag ? t.title : this.cleanText(t.title),
            a = r && !i ? 'target="_blank"' : "",
            s = "";
          return t.thirdPartyImpressionUrl && t.thirdPartyImpressionUrl.forEach((function (t) {
            s += "<img src='".concat(t, '\' width="1" height="1" style="width: 1px; height: 1px; position: absolute; top: -1px; height: -1px;" alt="" />')
          })), "<article class='article-item pr ".concat(r, "' zone-id='").concat(this.zoneId, "' >\n                <p class='article-thumbnail'>\n                    <a href='").concat(e, "' title='").concat(t.title, "'  ").concat(a, ">\n                        <img src='").concat(t.mediaurls[0], "' alt='").concat(t.title, "' alt=\"\">\n                    </a>\n                </p>\n                <header>\n                    <h1 class='article-title'>\n                        <a href='").concat(e, "' title='").concat(o, "' ").concat(a, ">").concat(o, "</a>\n                    </h1>\n                    <div class='article-meta'>\n                        <span class='sponsor'>").concat(t.displayUrl, "</span>\n                    </div>\n                </header>\n\n                ").concat(t.hidePrTag && t.description ? "<p class='article-summary'>".concat(t.description, "</p>") : "", "\n                \n                <img src='").concat(n, "' width='1' height='1' style='width: 1px; height: 1px; position: absolute; top: -1px; height: -1px;' alt=\"\" />\n\n                ").concat(s, "\n            </article>")
        }
      }, {
        key: "render",
        value: function () {
          var t = this.buildTPL(this.ad);
          this.$el = this.Dom.createElFromHTML(t), this.bindEvents(this.$el)
        }
      }]), t
    }(),
    qt = function (t) {
      function e(t) {
        var n;
        return r()(this, e), (n = a()(this, l()(e).call(this, t))).canInit() ? (n.$adsEl = document.findAll(".znews-native"), n.zoneIds = [], n.ads = [], n.adsToken = null, n.$mostView = document.getId("mostview-articles"), n.buildZoneIds(), n.fetchAndRender(), n) : (n.triggerRendered(), a()(n))
      }
      return d()(e, t), u()(e, [{
        key: "name",
        get: function () {
          return "AdNativeModule"
        }
      }]), u()(e, [{
        key: "buildZoneIds",
        value: function () {
          var t = this;
          this.$adsEl.forEach((function (e) {
            var n = e.getAttribute("zone");
            n && t.zoneIds.push(n)
          }))
        }
      }, {
        key: "canInit",
        value: function () {
          return !this.app.isArticlePage || !(this.app.zaConfig.contentFilter.search(/19/gi) >= 0 || this.app.disableAdtimaBanner || this.app.disableNativeAds || this.app.disableBanner)
        }
      }, {
        key: "buildParams",
        value: function () {
          var t = {
            zones: this.zoneIds.join(","),
            count: 1,
            vs: "curl=".concat(window.location.href),
            uid: this.app.ZAPP.getVisitorID ? this.app.ZAPP.getVisitorID() : "",
            ver: "za_version=".concat(this.app.ZAPP.version),
            contentId: this.app.adtimaConfig.contentId
          };
          return this.app.isArticlePage && (t.articleid = Object(w.k)(), t.catename = this.app.catePath, t.cateid = this.app.zaConfig.pageid, t.topicid = this.app.zaConfig.topicid), t
        }
      }, {
        key: "fetchAds",
        value: function () {
          var t, e;
          return Y.a.async((function (n) {
            for (;;) switch (n.prev = n.next) {
              case 0:
                return t = this.buildParams(), n.next = 3, Y.a.awrap(Object(w.i)(M.c, t));
              case 3:
                return e = n.sent, n.abrupt("return", e && e.data || []);
              case 5:
              case "end":
                return n.stop()
            }
          }), null, this)
        }
      }, {
        key: "triggerRendered",
        value: function () {
          this.app.trigger(V.a.RENDERED_ADS_NATIVE)
        }
      }, {
        key: "fetchAndRender",
        value: function () {
          return Y.a.async((function (t) {
            for (;;) switch (t.prev = t.next) {
              case 0:
                return t.next = 2, Y.a.awrap(this.fetchAds());
              case 2:
                this.ads = t.sent, this.render(), this.triggerRendered();
              case 5:
              case "end":
                return t.stop()
            }
          }), null, this)
        }
      }, {
        key: "render",
        value: function () {
          var t = this;
          this.$adsEl.forEach((function (e) {
            t.Dom.removeClass(e, "znews-native");
            var n = e.getAttribute("zone"),
              i = e.getAttribute("zone-ad-name") || n,
              r = t.ads[i];
            if (r && r[0]) {
              var o = r[0],
                a = new Zt(t, o, n).$el;
              o.ext && o.ext.sourceId && t.bindEvent(a, o);
              var s = !0,
                l = Object(x.e)(e, "#mostview-articles", ".sidebar");
              if (l) l.findAll(".article-item").length < 4 && (s = !1);
              s ? Object(x.h)(e, a) : Object(x.g)(e, a)
            }
          }))
        }
      }, {
        key: "handleClick",
        value: function (t) {
          var e = decodeURIComponent(t.clickurl),
            n = Object(w.k)(e);
          n && this.app.sstorage.set(W.c.PAIDVIEW_PR_ARTICLE, {
            value: Object(w.b)({
              postid: n,
              srcid: t.ext.sourceId
            })
          })
        }
      }, {
        key: "bindEvent",
        value: function (t, e) {
          var n = this;
          t && t.on("click", (function () {
            return n.handleClick(e)
          }))
        }
      }]), e
    }(O.a),
    Kt = function (t) {
      function e(t) {
        var n;
        return r()(this, e), (n = a()(this, l()(e).call(this, t))).players = {}, n.idActive = null, n.handleReady = n.handleReady.bind(A()(n)), n.handlePlay = n.handlePlay.bind(A()(n)), n.handlePause = n.handlePause.bind(A()(n)), n.handleEnded = n.handleEnded.bind(A()(n)), n.handleOutViewPort = n.handleOutViewPort.bind(A()(n)), n.bindEvents(), n
      }
      return d()(e, t), u()(e, [{
        key: "name",
        get: function () {
          return "PlayerManager"
        }
      }]), u()(e, [{
        key: "add",
        value: function (t) {
          this.players[t.id] = t
        }
      }, {
        key: "remove",
        value: function (t) {
          delete this.players[t]
        }
      }, {
        key: "handleReady",
        value: function (t) {
          this.add(t)
        }
      }, {
        key: "handlePlay",
        value: function (t) {
          var e = this;
          this.idActive = t, this.toggleIconPlayPause(), Object.keys(this.players).forEach((function (t) {
            if (t !== e.idActive) {
              var n = e.players[t];
              n.pause(), n.isMiniMode && n.hideMiniMode()
            }
          }))
        }
      }, {
        key: "handlePause",
        value: function (t) {
          this.toggleIconPlayPause(!1)
        }
      }, {
        key: "handleEnded",
        value: function (t) {
          this.toggleIconPlayPause(!1)
        }
      }, {
        key: "handleOutViewPort",
        value: function (t) {
          var e = this,
            n = !1;
          Object.keys(this.players).forEach((function (t) {
            e.players[t].isMiniMode && (n = !0)
          })), n && (t.allowMiniMode = !1)
        }
      }, {
        key: "bindEvents",
        value: function () {
          this.app.on(V.a.PLAYER_READY, this.handleReady), this.app.on(V.a.PLAYER_PLAY, this.handlePlay), this.app.on(V.a.PLAYER_PAUSE, this.handlePause), this.app.on(V.a.PLAYER_ENDED, this.handleEnded), this.app.on(V.a.PLAYER_OUT_VIEW_PORT, this.handleOutViewPort)
        }
      }, {
        key: "unbindEvents",
        value: function () {
          this.app.off(V.a.PLAYER_READY, this.handleReady), this.app.off(V.a.PLAYER_PLAY, this.handlePlay), this.app.off(V.a.PLAYER_PAUSE, this.handlePause), this.app.off(V.a.PLAYER_ENDED, this.handleEnded), this.app.off(V.a.PLAYER_OUT_VIEW_PORT, this.handleOutViewPort)
        }
      }, {
        key: "toggleIconPlayPause",
        value: function () {
          var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
            e = document.getId("section-video");
          if (e) {
            var n = e.find(".article-item");
            this.Dom.removeClass(n, t ? "pause" : "playing"), this.Dom.addClass(n, t ? "playing" : "pause")
          }
        }
      }]), e
    }(O.a),
    Xt = n(45),
    Qt = n(52),
    Jt = function (t) {
      function e(t) {
        var n;
        return r()(this, e), n = a()(this, l()(e).call(this, t)), _()(A()(n), "onResize", (function () {
          n.cusSrollBar && n.cusSrollBar.destroy(), n.handleSidebar()
        })), n.log = t.log, n.init(), n
      }
      return d()(e, t), u()(e, [{
        key: "name",
        get: function () {
          return "VideoBoxModule"
        }
      }]), u()(e, [{
        key: "init",
        value: function () {
          this.$boxVideo = document.find(".videobox"), this.$boxVideo && (this.$sidebar = this.$boxVideo.find(".section-sidebar"), this.initZplayer(), this.handleSidebar(), this.bindEvents())
        }
      }, {
        key: "handleSidebar",
        value: function () {
          window.innerWidth >= j.b.MINI_SCREEN && (this.cusSrollBar = Object(Qt.a)(this.$sidebar))
        }
      }, {
        key: "bindEvents",
        value: function () {
          window.on("resize", this.onResize)
        }
      }, {
        key: "initZplayer",
        value: function () {
          var t = this.$boxVideo.find(".video-player"),
            e = this.$sidebar.find(".article-item"),
            n = t.find("video");
          if (n) {
            var i = e.find(".article-title a"),
              r = e.getAttribute("topic-id"),
              o = {
                articleId: e.getAttribute("article-id"),
                allowCountdown: !0,
                allowInview: !0,
                tracking: {
                  url: i.getAttribute("href") || "",
                  title: Object(x.d)(i),
                  topicid: r,
                  hash: "#boxvideo"
                },
                ads: {
                  allowAds: !0,
                  data: {
                    topicid: r
                  }
                }
              };
            new Xt.a(this.app, n, o)
          }
        }
      }]), e
    }(O.a),
    te = n(17),
    ee = n(57),
    ne = function (t) {
      function e(t) {
        var n;
        return r()(this, e), n = a()(this, l()(e).call(this)), _()(A()(n), "onTransitionEnd", (function () {
          n.autoRedirect()
        })), n.sstorage = t.app.sstorage, n.$sidebarR = t.$sidebarR, n.$el = t.$el, n.seriesId = t.series.id, n.$activeArticle = t.$activeArticle, n.stoped = !1, n.handleClose = n.handleClose.bind(A()(n)), n.autoRedirect = n.autoRedirect.bind(A()(n)), n.videosWatched = n.sstorage.get(W.c.VIDEO_WATCHED), n
      }
      return d()(e, t), u()(e, [{
        key: "name",
        get: function () {
          return "NextVideo"
        }
      }, {
        key: "$nextVideo",
        get: function () {
          if (this._$nextVideo) return this._$nextVideo;
          if (this.seriesId) {
            var t = this.$activeArticle;
            if (t) {
              var e = t.nextElementSibling;
              e && (this._$nextVideo = e)
            }
          } else {
            var n, i = document.findAll(".article-item"),
              r = !0,
              o = !1,
              a = void 0;
            try {
              for (var s, l = i[Symbol.iterator](); !(r = (s = l.next()).done); r = !0) {
                var c = s.value,
                  u = c.getAttribute("article-id");
                if (!this.videosWatched[u]) {
                  n = c;
                  break
                }
              }
            } catch (t) {
              o = !0, a = t
            } finally {
              try {
                r || null == l.return || l.return()
              } finally {
                if (o) throw a
              }
            }
            this._$nextVideo = n || i[0]
          }
          return this._$nextVideo
        }
      }, {
        key: "nextVideo",
        get: function () {
          if (this._nextVideo) return this._nextVideo;
          if (this.$nextVideo) {
            var t = this.$nextVideo.find(".article-title a"),
              e = this.$nextVideo.find(".article-thumbnail img"),
              n = Object(x.d)(t),
              i = t.getAttribute("href"),
              r = e.getAttribute("data-src");
            r || (r = e.getAttribute("src")), this._nextVideo = {
              link: i,
              thumb: r,
              title: n
            }
          }
          return this._nextVideo || null
        }
      }]), u()(e, [{
        key: "appendToSidebar",
        value: function () {
          var t = this.Dom.createElFromHTML('<section id="next-video" class="section">\n                <header class="section-title">\n                    <h3>Tiáº¿p theo</h3>\n                </header>\n                <div class="article-list listing-layout"></div>\n            </section>');
          t.find(".article-list").appendChild(this.$nextVideo), this.$sidebarR.prepend(t)
        }
      }, {
        key: "appendToPlayer",
        value: function () {
          if (!this.nextVideo) return !1;
          this.$inPlayer = this.Dom.createElFromHTML('<div class="next-video-bar" tabindex="-1">\n                <div class="'.concat("next-video-bar-background", '"></div>\n                <img src="').concat(this.nextVideo.thumb, '" alt="" />\n                <div class="next-video-title">\n                    <a tabindex="-1" href="').concat(this.nextVideo.link, '">').concat(this.nextVideo.title, '</a>\n                    <p>Tiáº¿p theo sau: <span></span> s</p>\n                </div>\n                <a href="').concat(this.nextVideo.link, '" class="znews-ic-play-video"></a>\n                <a class="ti-close"></a>\n            </div>')), this.$el.find(".video-player").prepend(this.$inPlayer), this.$btnClose = this.$inPlayer.find(".ti-close"), this.$countdown = this.$inPlayer.find(".next-video-title p span"), this.$transitBar = this.$inPlayer.find(".".concat("next-video-bar-background")), this.bindTransitionEvent()
        }
      }, {
        key: "bindTransitionEvent",
        value: function () {
          this.$transitBar.on("transitionend", this.onTransitionEnd)
        }
      }, {
        key: "slide",
        value: function () {
          var t = this;
          if (this.stoped = !1, this.nextVideo && this.$inPlayer) {
            var e = 5;
            Object(x.d)(this.$countdown, String(e)), this.bindTransitionEvent(), clearInterval(this.timerIntervalId), this.timerIntervalId = setInterval((function () {
              e--, Object(x.d)(t.$countdown, String(e)), e < 0 && (clearInterval(t.timerIntervalId), t.timerIntervalId = null)
            }), 1e3), this.Dom.addClass(this.$inPlayer, "animation-slide")
          }
        }
      }, {
        key: "autoRedirect",
        value: function () {
          this.stoped || (window.location.href = this.nextVideo.link)
        }
      }, {
        key: "handleClose",
        value: function (t) {
          t.preventDefault(), this.stop()
        }
      }, {
        key: "stop",
        value: function () {
          this.hideVideoInPlayer(), clearInterval(this.timerIntervalId), this.timerIntervalId = null, this.stoped = !0, this.$transitBar.off("transitionend", this.onTransitionEnd)
        }
      }, {
        key: "hideVideoInPlayer",
        value: function () {
          this.Dom.removeClass(this.$inPlayer, "animation-slide")
        }
      }, {
        key: "bindEvents",
        value: function () {
          this.$btnClose && this.$btnClose.on("click", this.handleClose)
        }
      }, {
        key: "unbindEvents",
        value: function () {
          this.$btnClose && this.$btnClose.off("click", this.handleClose)
        }
      }]), e
    }(mt.a),
    ie = function () {
      function t(e) {
        r()(this, t), this.$el = e.$el, this.$sidebarR = e.$sidebarR, this.$activeArticle = e.$activeArticle, this.id = Object(w.p)("series"), this.rebuildArticlesLink()
      }
      return u()(t, [{
        key: "name",
        get: function () {
          return "Series"
        }
      }]), u()(t, [{
        key: "rebuildArticlesLink",
        value: function () {
          var t = this;
          if (document.findAll(".section-more .section[series-id]").forEach((function (e) {
              var n = e.getAttribute("series-id");
              n > 0 && t.setArticlesLink(e, n)
            })), this.id > 0) {
            var e = this.$sidebarR.find(".video-series");
            e && this.setArticlesLink(e, this.id)
          }
        }
      }, {
        key: "setArticlesLink",
        value: function (t, e) {
          t.findAll(".article-item").forEach((function (t) {
            var n = t.find(".article-title a"),
              i = t.find(".article-thumbnail a"),
              r = n.getAttribute("href") + "?series=" + e;
            n.setAttribute("href", r), i.setAttribute("href", r)
          }))
        }
      }, {
        key: "scrollToActiveVideo",
        value: function () {
          if (this.$activeArticle.scrollIntoView) this.$activeArticle.scrollIntoView({
            behavior: "smooth",
            block: "center"
          });
          else {
            var t = this.$el.find(".video-series .article-list"),
              e = t.scrollHeight,
              n = Object(x.c)(this.$activeArticle).top;
            if (n > 400) {
              var i = n / e * (e - 500);
              t.scrollTop = i
            }
          }
        }
      }]), t
    }(),
    re = function (t) {
      function e(t) {
        var n;
        r()(this, e), n = a()(this, l()(e).call(this, t)), _()(A()(n), "onScroll", (function () {
          !n.timer && n.zplayer && (n.timer = !0, window.requestAnimationFrame((function () {
            var t = window.pageYOffset || window.scrollTop,
              e = t > n.lastScrollTop,
              i = n.zplayer.playback;
            i && i.ended && (e && !n.nextVideo.stoped ? n.nextVideo.stop() : Object(Yt.isOnViewport)(n.$featured) && n.nextVideo.slide()), n.lastScrollTop = t <= 0 ? 0 : t, n.timer = !1
          })))
        })), _()(A()(n), "bindZplayerEvents", (function () {
          n.zplayer && (n.zplayer.once(te.Events.PLAYER_READY, n.handlePlayerReady), n.zplayer.on(te.Events.PLAYER_PLAY, n.handlePlayerPlay), n.zplayer.on(te.Events.PLAYER_PAUSE, n.handlePlayerPause), n.zplayer.on(te.Events.PLAYER_ENDED, n.handlePlayerEnded), n.zplayer.on(te.Events.PLAYER_FULLSCREEN, n.handlePlayerFullScreen), n.zplayer.on(te.Events.PLAYER_THEATER_MODE_CHANGE, n.handlePlayerTheaterMode))
        })), n.cookies = n.app.cookies, n.lstorage = n.app.lstorage, n.sstorage = n.app.sstorage, n.isTablet = n.app.DEVICE.type == j.f.tablet, n.handleMenuClick = n.handleMenuClick.bind(A()(n)), n.handleOverlayClick = n.handleOverlayClick.bind(A()(n)), n.handlePlayerReady = n.handlePlayerReady.bind(A()(n)), n.handlePlayerPlay = n.handlePlayerPlay.bind(A()(n)), n.handlePlayerPause = n.handlePlayerPause.bind(A()(n)), n.handlePlayerEnded = n.handlePlayerEnded.bind(A()(n)), n.handlePlayerFullScreen = n.handlePlayerFullScreen.bind(A()(n)), n.handlePlayerTheaterMode = n.handlePlayerTheaterMode.bind(A()(n)), n.updateSidebarR = n.updateSidebarR.bind(A()(n)), n.onViewMoreComments = n.onViewMoreComments.bind(A()(n));
        var i = Object(w.f)(n.onScroll, 10, !0);
        return n.debounceScroll = i.bind(A()(n)), n.init(), n
      }
      return d()(e, t), u()(e, [{
        key: "name",
        get: function () {
          return "VideoModule"
        }
      }, {
        key: "serieId",
        get: function () {
          return this.series.id
        }
      }, {
        key: "hasVideoSeries",
        get: function () {
          return !!this.serieId
        }
      }, {
        key: "isTheaterMode",
        get: function () {
          return "1" === this.cookies.get(W.a.THEATER_MODE)
        }
      }, {
        key: "zplayer",
        get: function () {
          return this.player.zplayer
        }
      }, {
        key: "initExpandMode",
        get: function () {
          return !!this.isTablet || this.detectExpandMode
        }
      }, {
        key: "detectExpandMode",
        get: function () {
          return this.Dom.hasClass(this.$body, "theater-mode") || this.Dom.hasClass(this.$body, "theater-mode-content")
        }
      }, {
        key: "cookieKey",
        get: function () {
          return this.isTablet ? W.a.THEATER_MODE_TABLET : W.a.THEATER_MODE
        }
      }]), u()(e, [{
        key: "init",
        value: function () {
          this.lastScrollTop = 0, this.$body = document.body, this.$el = document.find(".video-container"), this.$navContainer = this.$el.find(".video-nav-container"), this.$nav = this.$el.find(".video-nav-header"), this.$sidebarL = this.$el.find("#video-featured .left-side"), this.$sidebarR = this.$el.find("#video-featured .right-side"), this.$mostview = this.$sidebarR.find("#video-mostview"), this.$btnMenu = this.$nav.find(".btn-menu"), this.$overlay = this.$el.find(".video-nav-header-overlay"), this.$video = this.$el.find(".video-player > video"), this.$iframe = this.$el.find(".video-player > iframe"), this.$videoInfo = this.$el.find(".video-info"), this.$sectionMoreContainer = document.find(".section-more > .video-container");
          var t, e = this.$el.find(".video-player");
          this.articleId = e.getAttribute("article-id"), this.$activeArticle = document.find(".article-item[article-id='".concat(this.articleId, "']")), this.$featured = document.find("#video-featured .video-player"), this.series = new ie(this), this.nextVideo = new ne(this), this.render(), this.bindEvents(), this.bindIniewEvents(), this.addIconActive(), this.initSateVideoMode(), (t = this.$sidebarR) && t.findAll(".article-item .article-thumbnail img").forEach((function (t) {
            var e = t.getAttribute("src");
            e && -1 !== e.indexOf(".gif") && t.setAttribute("src", e.replace(".gif", ".gif.jpg"))
          })), this.replaceFooterLogo(), this.hasVideoSeries && this.$activeArticle && this.series.scrollToActiveVideo(), !N.a.empty(this.$video.getAttribute("streamId")) && this.Dom.addClass(document.body, "page-video-live")
        }
      }, {
        key: "replaceFooterLogo",
        value: function () {
          document.find("footer .logo img").src = f.C
        }
      }, {
        key: "handleMenuClick",
        value: function (t) {
          t.preventDefault(), this.Dom.toggleClass(this.$nav, "video-nav-header-show-menu"), this.Dom.toggleClass(this.$body, "hide-scroll")
        }
      }, {
        key: "handleOverlayClick",
        value: function (t) {
          t.preventDefault(), this.Dom.removeClass(this.$nav, "video-nav-header-show-menu"), this.Dom.removeClass(this.$body, "hide-scroll")
        }
      }, {
        key: "handlePlayerReady",
        value: function () {
          this.nextVideo.appendToPlayer(), this.nextVideo.bindEvents()
        }
      }, {
        key: "handlePlayerPlay",
        value: function () {
          this.nextVideo.stop(), this.saveVideo(), this.removeIconPause()
        }
      }, {
        key: "handlePlayerEnded",
        value: function () {
          this.addIconPause(), this.overrideIconZPlayer(), Object(Yt.isOnViewport)(this.$featured) && this.nextVideo.slide()
        }
      }, {
        key: "handlePlayerPause",
        value: function () {
          this.addIconPause()
        }
      }, {
        key: "handlePlayerFullScreen",
        value: function (t) {
          this.sstorage.set(W.c.VIDEO_MODE, {
            value: t ? f.eb.FULLSCREEN : this.isTheaterMode ? f.eb.THEATER : f.eb.DEFAULT
          })
        }
      }, {
        key: "handlePlayerTheaterMode",
        value: function (t) {
          var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          e && (this.setTheaterModeCookie(t), this.sstorage.set(W.c.VIDEO_MODE, {
            value: t ? f.eb.THEATER : f.eb.DEFAULT
          })), this.Dom.toggleClass(this.$body, "theater-mode", t), this.Dom.toggleClass(this.$body, "theater-mode-content", t), this.$videoFooterInTheater || (this.$videoFooterInTheater = this.Dom.createEl("div", {
            className: "video-featured-foorter-section"
          })), t ? (Object(x.h)(this.$videoInfo, this.$videoFooterInTheater), this.$videoFooterInTheater.append(this.$videoInfo)) : (Object(x.h)(this.$videoFooterInTheater, this.$videoInfo), Object(x.g)(this.$sidebarL, this.$sidebarR)), this.hasVideoSeries ? this.theaterModeInVideoSeries(t) : this.theaterModeInNormal(t)
        }
      }, {
        key: "initSateVideoMode",
        value: function () {
          this.app.isVideoPage || this.sstorage.get(W.c.VIDEO_MODE).value || this.sstorage.set(W.c.VIDEO_MODE, {
            value: this.isTheaterMode ? f.eb.THEATER : f.eb.DEFAULT
          })
        }
      }, {
        key: "theaterModeInVideoSeries",
        value: function (t) {
          var e = this.$mostview.find(".article-list");
          if (this.Dom.toggleClass(this.$mostview, "list-series", t), this.Dom.toggleClass(e, "video-grid-layout", t), this.Dom.toggleClass(e, "listing-layout", !t), t) {
            this.$videoFooterInTheater.append(this.$sidebarR);
            var n = Object(x.p)(e, '<div class="video-browser"></div>');
            this.$mostview.append(n), this.$sectionMoreContainer.prepend(this.$mostview)
          } else {
            var i = e.parentNode;
            this.$mostview.append(e), this.$sidebarR.append(this.$mostview), this.Dom.removeFromDom(i)
          }
        }
      }, {
        key: "theaterModeInNormal",
        value: function (t) {
          var e = this;
          if (t) {
            var n = this.$videoInfo.offsetHeight,
              i = 95 * Math.ceil((n - 30) / 95) + 30;
            if (this.$videoFooterInTheater.append(this.$sidebarR), n > 1e3) return;
            setTimeout((function () {
              e.Dom.setStyles(e.$sidebarR, {
                maxHeight: i + "px"
              }), e.sidebarRCustomScroll = new Qt.a(e.$sidebarR)
            }))
          } else this.destroyCustomScroll()
        }
      }, {
        key: "onViewMoreComments",
        value: function () {
          var t = this;
          setTimeout((function () {
            t.$videoInfo.offsetHeight > t.$sidebarR.offsetHeight && t.destroyCustomScroll()
          }))
        }
      }, {
        key: "destroyCustomScroll",
        value: function () {
          this.Dom.setStyles(this.$sidebarR, {
            maxHeight: null
          }), this.sidebarRCustomScroll && this.sidebarRCustomScroll.destroy()
        }
      }, {
        key: "saveVideo",
        value: function () {
          var t = this.app.sstorage.get(W.c.VIDEO_WATCHED);
          t[this.articleId] = !0, this.app.sstorage.set(W.c.VIDEO_WATCHED, t)
        }
      }, {
        key: "renderVideo",
        value: function () {
          var t = this.$el.find(".video-title"),
            e = Object(x.d)(t),
            n = t.find("a").getAttribute("href"),
            i = Object(w.k)() ? null : {
              url: n,
              title: e,
              hash: "#videopage"
            },
            r = {
              articleId: this.articleId,
              allowAutoplay: !0,
              allowMiniMode: !0,
              allowInview: !0,
              tracking: i,
              ads: {
                allowAds: !0
              },
              theaterMode: !0,
              zplayerOptions: {
                storageKey: "zplayer_video_page",
                theaterMode: this.initExpandMode,
                setStorageTheaterMode: !1
              },
              title: e
            };
          this.player = new Xt.a(this.app, this.$video, r)
        }
      }, {
        key: "syncCookie",
        value: function () {
          var t = this.getInitTheaterModeState();
          this.setTheaterModeCookie(t)
        }
      }, {
        key: "getTheaterModeCookie",
        value: function () {
          return this.cookies.get(this.cookieKey)
        }
      }, {
        key: "setTheaterModeCookie",
        value: function (t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          this.isTablet && (e = 7), this.cookies.set(this.cookieKey, Number(t), {
            expires: e
          })
        }
      }, {
        key: "getInitTheaterModeState",
        value: function () {
          var t = this.getTheaterModeCookie();
          return !!(this.isTablet ? !!N.a.nullOrUndefined(t) || !!parseInt(t) : this.detectExpandMode)
        }
      }, {
        key: "initTheaterMode",
        value: function () {
          var t = this.getInitTheaterModeState();
          t && this.handlePlayerTheaterMode(t, !1)
        }
      }, {
        key: "updateSidebarR",
        value: function () {
          if (this.initTheaterMode(), !(this.$sidebarR.clientHeight <= this.$sidebarL.clientHeight)) {
            var t = this.$sidebarR.clientHeight - this.$sidebarL.clientHeight,
              e = Number(t / 80).toFixed(0);
            if (e > 0)
              for (var n = this.$mostview.findAll(".article-item"), i = n.length - 1, r = 0; r < e - 1; r++) {
                var o = n.item(i--);
                this.Dom.removeFromDom(o)
              }
            this.$mostview.findAll(".article-item").length || this.Dom.removeFromDom(this.$mostview), this.unBindEventsComment()
          }
        }
      }, {
        key: "addIconActive",
        value: function () {
          this.$activeArticle && this.Dom.addClass(this.$activeArticle, "active")
        }
      }, {
        key: "removeIconActive",
        value: function () {
          this.$activeArticle && this.Dom.removeClass(this.$activeArticle, "active")
        }
      }, {
        key: "addIconPause",
        value: function () {
          this.$activeArticle && this.Dom.addClass(this.$activeArticle, "pause")
        }
      }, {
        key: "removeIconPause",
        value: function () {
          this.$activeArticle && this.Dom.removeClass(this.$activeArticle, "pause")
        }
      }, {
        key: "renderComments",
        value: function () {
          var t = this,
            e = this.Dom.createElFromHTML("<div id='video-comments'>\n                <section class=\"the-article-comment\"></section>\n            </div>");
          if (this.$videoInfo) {
            var i = e.find(".the-article-comment");
            this.$videoInfo.append(e), n.e(20).then(n.bind(null, 149)).then((function (e) {
              new(0, e.default)(t.app, i, {
                articleId: t.articleId
              })
            })), this.bindEventsComment()
          }
        }
      }, {
        key: "renderShare",
        value: function () {
          var t = new ee.a(this.app, {
              clipboard: !0
            }),
            e = this.Dom.createEl("div", {
              className: "video-share"
            }),
            n = this.$el.find(".video-title");
          e.appendChild(t.render()), n && n.appendChild(e)
        }
      }, {
        key: "overrideIconZPlayer",
        value: function () {
          var t = document.find(".--z--player .--z--big-play-button span");
          t && (this.Dom.removeClass(t, "pl-ic-play_arrow"), this.Dom.addClass(t, "znews-ic-replay"))
        }
      }, {
        key: "render",
        value: function () {
          this.$video && this.renderVideo(), this.$iframe && function (t) {
            if (t) {
              var e = t.getAttribute("src");
              e && Object(w.C)(e) && (e = e.replace(/\?.*/i, "") + "?autoplay=1&amp;rel=0&amp;showinfo=0", t.setAttribute("src", e))
            }
          }(this.$iframe), this.hasVideoSeries || this.nextVideo.appendToSidebar(), this.renderShare(), this.renderComments()
        }
      }, {
        key: "bindEventsComment",
        value: function () {
          this.app.on(V.a.RENDERED_COMMENTS, this.updateSidebarR), this.app.on(V.a.VIEW_MORE_COMMENTS, this.onViewMoreComments)
        }
      }, {
        key: "unBindEventsComment",
        value: function () {
          this.app.off(V.a.RENDERED_COMMENTS, this.updateSidebarR), this.app.on(V.a.VIEW_MORE_COMMENTS, this.onViewMoreComments)
        }
      }, {
        key: "bindIniewEvents",
        value: function () {
          this.player.inViewPort.on(Xt.a.INVIEW_EVENTS.CHANGE, this.bindZplayerEvents)
        }
      }, {
        key: "bindEvents",
        value: function () {
          this.$btnMenu && this.$btnMenu.on("click", this.handleMenuClick), this.$overlay && this.$overlay.on("click", this.handleOverlayClick), this.bindZplayerEvents(), window.on("scroll.video", this.debounceScroll)
        }
      }, {
        key: "unbindEvents",
        value: function () {
          this.$btnMenu && this.$btnMenu.off("click", this.handleMenuClick), this.$overlay && this.$overlay.off("click", this.handleOverlayClick), this.zplayer && (this.zplayer.off(te.Events.PLAYER_READY, this.handlePlayerReady), this.zplayer.off(te.Events.PLAYER_PLAY, this.handlePlayerPlay), this.zplayer.off(te.Events.PLAYER_PAUSE, this.handlePlayerPause), this.zplayer.off(te.Events.PLAYER_ENDED, this.handlePlayerEnded), this.zplayer.off(te.Events.PLAYER_FULLSCREEN, this.handlePlayerFullScreen), this.zplayer.off(te.Events.PLAYER_THEATER_MODE_CHANGE, this.handlePlayerTheaterMode)), window.off("scroll.video", this.debounceScroll)
        }
      }]), e
    }(O.a),
    oe = function () {
      function t(e) {
        r()(this, t), this.$articleEl = e.$articleEl, this.artInfo = e.artInfo, this.app = e.app, this.Dom = e.Dom, this.log = e.log, this.user = this.app.user
      }
      return u()(t, [{
        key: "name",
        get: function () {
          return "ArticleUtils"
        }
      }]), u()(t, [{
        key: "markReadArticle",
        value: function () {
          var t = this;
          f.w || this.app.on(V.a.USER_INITED, (function () {
            t.user.tracking.markRead()
          }))
        }
      }, {
        key: "buildAuthorUrl",
        value: function (t) {
          return this.buildUrl(t, 3)
        }
      }, {
        key: "buildTagsUrl",
        value: function (t) {
          return this.buildUrl(t, 2)
        }
      }, {
        key: "buildUrl",
        value: function (t, e) {
          return "".concat(f.u, "/").concat(Object(P.d)(t), "-tim-kiem.html?type=").concat(e)
        }
      }, {
        key: "markPublishedByZing",
        value: function () {
          this.$articleEl.find(".the-article-credit .source") && this.Dom.addClass(this.$articleEl, "zing")
        }
      }, {
        key: "formatExternalLink",
        value: function () {
          var t = this,
            e = this.$articleEl.findAll(".the-article-body a");
          e.length && e.forEach((function (e) {
            var n = e.getAttribute("href");
            n && "#" !== n && -1 !== n.indexOf("http") && -1 === n.indexOf(f.t) && -1 === n.indexOf("zdn.vn") && -1 === n.indexOf("zadn.vn") && -1 === n.indexOf("[name]") && (e.setAttribute("target", "_blank"), t.Dom.addClass(e, "external-link"))
          }))
        }
      }, {
        key: "removeMetaRefreshLive",
        value: function () {
          if (this.artInfo.isLive) {
            var t = document.find('meta[http-equiv="REFRESH"]');
            t && this.Dom.removeFromDom(t)
          }
        }
      }, {
        key: "formatContent",
        value: function () {
          var t = this;
          if (this.$articleEl.findAll("img.mobile").forEach((function (e) {
              t.Dom.removeFromDom(e)
            })), this.artInfo.articleLayout !== f.d.SPECICAL && !this.app.disableAutoFormat) {
            var e = this.getArticleBody();
            e.findAll("*:not(.formatted):not(.widget):not(.bg-poll)").forEach((function (t) {
              t.removeAttribute("style")
            })), e.findAll(":scope > p ~ br").forEach((function (e) {
              t.Dom.removeFromDom(e)
            })), this.artInfo.isPRArticle || e.findAll(":scope > *:not([class*=widget]):not([class*=formatted])").forEach((function (e) {
              var n = e.tagName.toLowerCase();
              "iframe" == n || "img" == n || "video" == n || "audio" == n || e.findAll("img, iframe, audio, video").length || e.textContent.replace(/[ \n\r]/g, "") || t.Dom.removeFromDom(e)
            })), e.findAll(":scope > *").forEach((function (e) {
              if (t.Dom.isTextNode(e) && Object(x.d)(e).replace(/[ \n\r]/g, "")) {
                var n = '<p class="auto-wrapped">'.concat(e.textContent, "</p>"),
                  i = t.Dom.createElFromHTML(n);
                Object(x.h)(e, i), t.Dom.removeFromDom(e)
              }
            }))
          }
        }
      }, {
        key: "getArticleSidebar",
        value: function () {
          return this.$articleEl.find(".main .sidebar")
        }
      }, {
        key: "getArticleCate",
        value: function () {
          return this.$articleEl.find(".the-article-category")
        }
      }, {
        key: "getMostViewArticles",
        value: function () {
          return document.getId("mostview-articles")
        }
      }, {
        key: "getArticleRecommend",
        value: function () {
          return this.$articleEl.find(".recommendation")
        }
      }, {
        key: "getArticleBody",
        value: function () {
          return this.$articleEl.find(".the-article-body")
        }
      }, {
        key: "getArticleComments",
        value: function () {
          return this.$articleEl.find(".the-article-comment")
        }
      }, {
        key: "getArticleCreadit",
        value: function () {
          return this.$articleEl.find(".the-article-credit")
        }
      }, {
        key: "getArticleMeta",
        value: function () {
          return this.$articleEl.find(".the-article-meta")
        }
      }, {
        key: "getArticleTags",
        value: function () {
          return this.$articleEl.find(".the-article-tags")
        }
      }, {
        key: "getArticleSumary",
        value: function () {
          return this.$articleEl.find(".the-article-summary")
        }
      }, {
        key: "getArticleTitle",
        value: function () {
          return this.$articleEl.find(".the-article-title")
        }
      }, {
        key: "getArticleSource",
        value: function () {
          return this.$articleEl.find(".the-article-source-url")
        }
      }, {
        key: "getTrendingArticles",
        value: function () {
          return document.getId("news-latest")
        }
      }, {
        key: "getRelatedArticles",
        value: function () {
          return document.getId("innerarticle")
        }
      }, {
        key: "getArticleNextRead",
        value: function () {
          return document.getId("article-nextreads")
        }
      }]), t
    }(),
    ae = function () {
      function t(e) {
        r()(this, t), this.$articleEl = e.$articleEl, this.$articleBody = this.$articleEl.find(".the-article-body"), this.isPr = !!e.app.isPr, this.Dom = e.Dom, this.cateName = e.app.cateName, this.catePath = e.app.catePath
      }
      return u()(t, [{
        key: "isPRArticle",
        get: function () {
          return this.Dom.hasClass(this.$articleEl, "pr") || this.isPr
        }
      }, {
        key: "isLive",
        get: function () {
          return this.Dom.hasClass(this.$articleEl, "status-live")
        }
      }, {
        key: "isLiveArticle",
        get: function () {
          return !!this.$liveElement
        }
      }, {
        key: "$liveElement",
        get: function () {
          return this.$articleBody && this.$articleBody.find('[id*="livestream"]')
        }
      }, {
        key: "isInterview",
        get: function () {
          return this.$articleBody && this.$articleBody.findAll("#interview, .interview").length
        }
      }, {
        key: "isUpdatingArticle",
        get: function () {
          return this.Dom.hasClass(this.$articleEl, "status-ongoing")
        }
      }, {
        key: "isCommentLive",
        get: function () {
          var t = this.articleLayout,
            e = this.articleType;
          return !(!this.isLive || t === f.d.NO_SIDEBAR || t === f.d.SPECICAL || e !== f.e.STREAM)
        }
      }, {
        key: "isComlicatedLayout",
        get: function () {
          return !!this.$articleBody && this.$articleBody.findAll("table.picture[align*=left], table.picture[align*=right]").length
        }
      }, {
        key: "hasComments",
        get: function () {
          return !!document.getId("divComment")
        }
      }, {
        key: "articleType",
        get: function () {
          return this.Dom.hasClass(this.$articleEl, "type-picture") ? f.e.PICTURE : this.Dom.hasClass(this.$articleEl, "type-video") ? f.e.VIDEO : this.Dom.hasClass(this.$articleEl, "type-stream") ? f.e.STREAM : this.Dom.hasClass(this.$articleEl, "type-special") ? f.e.SPECICAL : this.Dom.hasClass(this.$articleEl, "type-infographic") ? f.e.INFOGRAPHIC : this.Dom.hasClass(this.$articleEl, "type-hasvideo") ? f.e.HASVIDEO : f.e.TEXT
        }
      }, {
        key: "articleLayout",
        get: function () {
          return this.Dom.hasClass(this.$articleEl, "layout-no-sidebar") ? f.d.NO_SIDEBAR : this.Dom.hasClass(this.$articleEl, "layout-special") ? f.d.SPECICAL : f.d.REGULAR
        }
      }, {
        key: "getArticleUrl",
        get: function () {
          var t = this.$articleEl.getAttribute("article-url");
          return t || window.location.origin + window.location.pathname
        }
      }, {
        key: "articleId",
        get: function () {
          var t = this.$articleEl.getAttribute("article-id");
          return t || Object(w.k)(this.articleUrl)
        }
      }, {
        key: "articleCateId",
        get: function () {
          var t = this.$articleEl.getAttribute("cate-id");
          return t || this.cateName
        }
      }, {
        key: "articleCateName",
        get: function () {
          var t = this.$articleEl.getAttribute("cate-name");
          return t || this.catePath
        }
      }]), t
    }(),
    se = "native",
    le = "size_masthead",
    ce = "body-banner",
    ue = "advMiddle",
    he = function () {
      function t(e) {
        r()(this, t), this.module = e, this.log = e.log, this.$articleEl = e.$articleEl, this.artInfo = e.artInfo, this.artUtils = e.artUtils, this.app = e.app, this.Dom = e.Dom, this.isLongformTopic = this.app.isLongformTopic, this.isLensTopic = this.app.isLensTopic, this.isVoicesTopic = this.app.isVoicesTopic, this.isBranchvoiceTopic = this.app.isBranchvoiceTopic, this.isGalleryTopic = this.app.isGalleryTopic, !0 === this.app.disableBanner || this.app.disableAdtimaBanner ? this.removeAdsPlaceholders() : this.render()
      }
      return u()(t, [{
        key: "name",
        get: function () {
          return "ArticleAds"
        }
      }]), u()(t, [{
        key: "removeAdsPlaceholders",
        value: function () {
          var t = this;
          document.findAll("#advR3, #advR4, #site-header, #advHalfPage").forEach((function (e) {
            t.Dom.removeFromDom(e)
          }))
        }
      }, {
        key: "render",
        value: function () {
          this.renderAdsBook(), this.renderAdsInread(), this.renderAdsMiddle()
        }
      }, {
        key: "renderAdsBook",
        value: function () {
          if (this.app.catePath === f.g.XUAT_BAN) {
            var t = this.Dom.createElFromHTML(f.v);
            Object(x.g)(this.$articleEl, t)
          }
        }
      }, {
        key: "canShowAdsMiddle",
        value: function () {
          return !(this.isGalleryTopic || this.isBranchvoiceTopic || this.isLongformTopic || this.isVoicesTopic || this.isLensTopic)
        }
      }, {
        key: "renderAdsMiddle",
        value: function () {
          var t = this;
          if (this.app.DEVICE.type !== j.f.tablet && this.canShowAdsMiddle()) {
            var e = 0,
              n = this.getBannerAdsTypeAndId(),
              i = n.adsType,
              r = n.adsId,
              o = this.artUtils.getArticleBody();
            if (this.artInfo.isComlicatedLayout) {
              o.findAll("h3").forEach((function (n) {
                if (e < 4 && Object(x.f)(n).length > 3) {
                  e++;
                  var o = "<div class='banner ".concat(i, "' id='").concat(r + e, "'></div>"),
                    a = t.Dom.createElFromHTML(o);
                  Object(x.h)(n, a)
                }
              }))
            } else {
              var a = o.findAll(":scope >p, :scope >table.picture, :scope >.notebox, :scope >.video"),
                s = Math.floor((a.length - 2) / 4);
              s < 5 && (s = 5);
              for (var l = 3; l < a.length - 2 && e < 4; l += s) {
                e++;
                var c = "<div class='banner ".concat(i, "' id='").concat(r + e, "'></div>"),
                  u = this.Dom.createElFromHTML(c),
                  h = a.item(l);
                Object(x.g)(h, u)
              }
            }
          }
        }
      }, {
        key: "renderAdsInread",
        value: function () {
          var t = this;
          if (this.artInfo.articleType !== f.e.HASVIDEO && this.artInfo.articleLayout !== f.d.NO_SIDEBAR && !this.artInfo.isComlicatedLayout) {
            var e = this.artUtils.getArticleBody(),
              n = this.$articleEl.find(".notebox"),
              i = e.findAll(":scope >p, .picture td");
            if (i = Array.prototype.filter.call(i, (function (e) {
                var n = Object(x.d)(e).split(" ").length > 10,
                  i = t.Dom.hasClass(e, "pic");
                return n || i
              })), (n ? i.length + 1 : i.length) < 12) return;
            var r = i[8],
              o = this.Dom.createElFromHTML('<div class="banner" id="advArticleInread"></div>');
            if (this.Dom.hasClass(r, "caption") || this.Dom.hasClass(r, "pic")) {
              var a = Object(x.e)(r, ".picture");
              Object(x.g)(a, o)
            } else Object(x.g)(r, o)
          }
        }
      }, {
        key: "getBannerAdsTypeAndId",
        value: function () {
          var t = se,
            e = ce;
          return this.artInfo.articleLayout !== f.d.NO_SIDEBAR || this.artInfo.articleType !== f.e.TEXT && this.artInfo.articleType !== f.e.HASVIDEO && this.artInfo.articleType !== f.e.PICTURE || (t = le, e = ue), {
            adsType: t,
            adsId: e
          }
        }
      }]), t
    }(),
    de = n(53),
    fe = function (t) {
      function e(t) {
        var n;
        return r()(this, e), (n = a()(this, l()(e).call(this))).behavior = t.behavior, n.facebook = t.facebook, n.errReport = new de.a(t), n.trackEvent = n.errReport.trackEvent, n.handleMouseUp = n.handleMouseUp.bind(A()(n)), n.handleShare = n.handleShare.bind(A()(n)), n.handleReportError = n.handleReportError.bind(A()(n)), n.data = {}, n.selectedText = "", n.$selectedEl = document.findAll(".the-article-title, .the-article-summary, .the-article-body"), n.render(), n.bindEvents(), n
      }
      return d()(e, t), u()(e, [{
        key: "name",
        get: function () {
          return "ContentMenu"
        }
      }]), u()(e, [{
        key: "handleMouseUp",
        value: function () {
          var t = this;
          this.selectedText = Object(w.v)(), this.selectedText && Object(w.z)() ? setTimeout((function () {
            var e = Object(w.r)();
            t.trackEvent("Show Error Popup"), t.removeClass("hide"), t.setStyles({
              top: e.top + Object(w.u)() - 50 + "px",
              left: e.left + e.width / 2 + "px"
            })
          }), 50) : this.addClass("hide")
        }
      }, {
        key: "handleShare",
        value: function () {
          var t = window.location.href + "?utm_source=facebook&utm_campaign=article&utm_medium=desktop_float_menu";
          this.facebook.share(t), this.addClass("hide"), this.trackEvent("Click Share Button")
        }
      }, {
        key: "handleReportError",
        value: function () {
          this.errReport.dl || this.errReport.renderDialog(de.a.DIALOG_TYPE.REPORT), this.errReport.showDialog(), this.addClass("hide"), this.trackEvent("Click Report Button")
        }
      }, {
        key: "bindEvents",
        value: function () {
          var t = this;
          this.$selectedEl.forEach((function (e) {
            e.on("mouseup", t.handleMouseUp)
          })), this.$btnShareEl.on("click", this.handleShare), this.$btnErrorReportEl.on("click", this.handleReportError)
        }
      }, {
        key: "render",
        value: function () {
          this.$el = this.Dom.createEl("div", {
            id: "error-report",
            className: "hide"
          }), this.$btnShareEl = this.Dom.createEl("button", {
            id: "btn-report-share"
          }, {}, "Chia sáº»"), this.$btnErrorReportEl = this.Dom.createEl("button", {
            id: "btn-report-error"
          }, {}, "BĂ¡o lá»—i"), this.$el.appendChild(this.$btnErrorReportEl), this.$el.appendChild(this.$btnShareEl), document.body.appendChild(this.$el)
        }
      }]), e
    }(mt.a),
    pe = function (t) {
      function e(t, n) {
        var i;
        return r()(this, e), (i = a()(this, l()(e).call(this))).options = Object(ut.a)(i.defaultOptions, n), i.app = t.app, i.artInfo = t.artInfo, i.app.DEVICE.type, j.f.desktop, i.handleScroll = i.handleScroll.bind(A()(i)), i.handleScrollWithDebounce = i.handleScrollWithDebounce.bind(A()(i)), i.handleTitleClick = i.handleTitleClick.bind(A()(i)), i.handleCateClick = i.handleCateClick.bind(A()(i)), i.handleWindowClick = i.handleWindowClick.bind(A()(i)), i.distance = 0, i.timeDelay = !1, i.articleLayout = i.artInfo.articleLayout, i.init(), i.render(), i.bindEvents(), i.computeGoalDistance(), i.distanceTop = i.getDistanceTop(), i
      }
      return d()(e, t), u()(e, [{
        key: "name",
        get: function () {
          return "StickyMenu"
        }
      }, {
        key: "defaultOptions",
        get: function () {
          return {
            shareTools: {
              zalo: !0,
              fb: !0,
              comment: !0,
              more: !0
            }
          }
        }
      }, {
        key: "$categoryPopup",
        get: function () {
          return this.$zingHeaderEl.find(".category-popup")
        }
      }, {
        key: "$chanelsMenu",
        get: function () {
          return this.$zingHeaderEl.find(".channels-menu")
        }
      }]), u()(e, [{
        key: "init",
        value: function () {
          this.$zingHeaderEl = document.getId("zing-header"), this.$cateMenu = this.$zingHeaderEl.find(".category-menu"), this.$articleEl = document.find(".the-article"), this.$articleBodyEl = this.$articleEl.find(".the-article-body"), this.$articleTitleEl = this.$articleEl.find(".the-article-title"), this.title = Object(x.d)(this.$articleTitleEl), this.cate = this.app.cateName || "", this.catePath = this.getCatePath(), this.linkCate = "".concat(window.location.origin, "/").concat(this.catePath, ".html")
        }
      }, {
        key: "getCatePath",
        value: function () {
          var t = this.app.catePath;
          return t.indexOf("/") > -1 ? t.split("/")[1] || "" : t
        }
      }, {
        key: "render",
        value: function () {
          var t = new ee.a(this.app, this.options.shareTools),
            e = "";
          this.artInfo.isLive ? e = "sticky-header__title--live" : this.artInfo.isUpdatingArticle && (e = "sticky-header__title--ongoing");
          var n = "<div class='sticky-header'>\n                        <div class='sticky-header__container'>\n                            <a href='/' class='sticky-header__logo'>\n                                <img src='".concat(f.B, "' alt='ZingNews' />\n                                <span>Tri thá»©c trá»±c tuyáº¿n</span>\n                            </a>\n                            <div class='sticky-header__title js-title ").concat(e, "'>\n                                <p>\n                                    ").concat(this.cate ? "<a href='".concat(this.linkCate, "'>").concat(this.cate, "</a>") : "", "\n                                    ").concat(this.artInfo.isLive ? '<i class="live-animate"></i>' : "", "\n                                    <span>").concat(this.title, "</span>\n                                </p>\n                            </div>\n                            <div class='sticky-header__share js-share'></div>\n                        </div>\n                    </div>");
          this.$el = this.Dom.createElFromHTML(n), this.$shareEl = this.$el.find(".js-share"), this.$shareEl.appendChild(t.render()), this.$dropDownEl = this.$shareEl.find(".js-more-list"), this.$stickyTitleEl = this.$el.find(".js-title"), this.$stickyCateEl = this.$stickyTitleEl.find("a"), document.body.appendChild(this.$el)
        }
      }, {
        key: "handleTitleClick",
        value: function () {
          var t = this;
          this.timerDelay = !0, Object(w.H)(this.distanceTop).then((function () {
            setTimeout((function () {
              t.timerDelay = !1
            }), 300)
          }))
        }
      }, {
        key: "handleScrollWithDebounce",
        value: function () {
          this.Dom.hasClass(this.$dropDownEl, "hide") || this.Dom.addClass(this.$dropDownEl, "hide"), this.timerDelay || (this.timerDelay = !0, window.requestAnimationFrame(this.handleScroll))
        }
      }, {
        key: "handleCateClick",
        value: function (t) {
          t.stopPropagation()
        }
      }, {
        key: "handleScroll",
        value: function () {
          var t = Object(w.u)(),
            e = t > this.distance && t > this.goalDistance;
          this.toggleStickyHeader(e), this.Dom.toggleClass(this.$zingHeaderEl, "zing-header-hide", e), this.$categoryPopup && this.Dom.removeClass(this.$categoryPopup, "active"), this.$chanelsMenu && this.Dom.removeClass(this.$chanelsMenu, "active");
          var n = this.$cateMenu.find(".more");
          n && this.Dom.removeClass(n, "active"), this.timerDelay = !1, this.distance = t
        }
      }, {
        key: "toggleStickyHeader",
        value: function (t) {
          this.toggleClass("sticky-header--show", t)
        }
      }, {
        key: "handleWindowClick",
        value: function () {
          this.Dom.addClass(this.$dropDownEl, "hide")
        }
      }, {
        key: "bindEvents",
        value: function () {
          window.on("scroll", this.handleScrollWithDebounce), window.on("click", this.handleWindowClick), this.$stickyTitleEl.on("click", this.handleTitleClick), this.$stickyCateEl && this.$stickyCateEl.on("click", this.handleCateClick)
        }
      }, {
        key: "unbindScrollEvent",
        value: function () {
          window.off("scroll", this.handleScrollWithDebounce)
        }
      }, {
        key: "computeGoalDistance",
        value: function () {
          if (this.articleLayout === f.d.SPECICAL) {
            var t = this.$articleBodyEl.find(":scope >h1");
            if (t)
              if (t.findAll("img, video").length) this.goalDistance = window.innerHeight;
              else {
                var e = Object(x.c)(t);
                this.goalDistance = e.top
              }
          }
          if (this.$articleTitleEl && !this.goalDistance) {
            var n = Object(x.c)(this.$articleTitleEl);
            this.goalDistance = n.top
          }
          this.goalDistance <= 0 && (this.goalDistance = 500)
        }
      }, {
        key: "getDistanceTop",
        value: function () {
          var t = 0;
          if (this.articleLayout === f.d.SPECICAL) t = this.goalDistance;
          else {
            var e = this.$articleEl.find(".the-article-meta");
            t = Object(x.c)(e).top
          }
          return t - 70
        }
      }]), e
    }(mt.a),
    ve = n(26),
    me = n(50);
  var ge = function (t) {
      function e(t) {
        var n;
        return r()(this, e), (n = a()(this, l()(e).call(this))).$articleEl = t.$articleEl, n.handleCollapse = n.handleCollapse.bind(A()(n)), n.init(), n
      }
      return d()(e, t), u()(e, [{
        key: "init",
        value: function () {
          var t = this;
          this.$articleEl.findAll("table.article").forEach((function (e) {
            var n = e.find(".inner-body");
            if (n && (t.Dom.addClass(e, "show"), Object(x.c)(n).height > 398)) {
              var i = t.Dom.createElFromHTML("<button class='btn-collapse'>\n                            <span>Má»Ÿ rá»™ng</span>\n                            <i class='ti-angle-down'></i>\n                        </button>");
              Object(x.g)(n, i), t.Dom.addClass(n, "collapse"), t.Dom.setStyles(n, {
                maxHeight: "398px"
              }), i.on("click", (function () {
                return t.handleCollapse(n, i)
              }))
            }
          }))
        }
      }, {
        key: "handleCollapse",
        value: function (t, e) {
          this.Dom.toggleClass(t, "collapse");
          var n = this.Dom.hasClass(t, "collapse");
          this.Dom.setStyles(t, {
            maxHeight: n ? "".concat(398, "px") : null
          });
          var i = e.find("span"),
            r = e.find("i");
          if (Object(x.d)(i, n ? "Má»Ÿ rá»™ng" : "Thu gá»n"), this.Dom.setClass(r, n ? "ti-angle-down" : "ti-angle-up"), n) {
            var o = t.getBoundingClientRect().top + Object(w.u)() - 60;
            Object(w.H)(o, 300)
          }
        }
      }]), e
    }(mt.a),
    be = n(38),
    ye = "expanded-mode",
    we = function (t) {
      function e(t, n, i, o) {
        var s;
        return r()(this, e), s = a()(this, l()(e).call(this, t.app)), _()(A()(s), "handlePlayerTheaterMode", (function (t) {
          t ? (s.resertExpandedClass(), s.lstorage.set(W.b.NO_SIDEBAR_EXPAND_MODE, {
            articleId: s.options.articleId,
            videoIndex: s.index
          })) : s.lstorage.clean(W.b.NO_SIDEBAR_EXPAND_MODE), s.Dom.toggleClass(s.$section, ye, t)
        })), _()(A()(s), "handleInViewChange", (function () {
          s.zplayer = s.player.zplayer, s.bindPlayerEvents(), s.inViewPort.off(be.a.EVENTS.CHANGE, s.handleInViewChange)
        })), s.options = o, s.lstorage = s.app.lstorage, s.$section = Object(x.e)(n, "figure.video"), s.player = new Xt.a(s.app, n, o), s.inViewPort = s.player.inViewPort, s.$articleEl = t.$articleEl, s.index = i, s.$articleBody = t.artUtils.getArticleBody(), s.options.theaterMode ? (s.bindIniewEvents(), s.init(), s) : a()(s)
      }
      return d()(e, t), u()(e, [{
        key: "name",
        get: function () {
          return "ArticlePlayer"
        }
      }]), u()(e, [{
        key: "init",
        value: function () {
          this.inViewPort.isInViewPort && this.handleInViewChange();
          var t = this.lstorage.get(W.b.PLAYER_NO_SIDEBAR).theaterMode;
          if (t) {
            var e = this.lstorage.get(W.b.NO_SIDEBAR_EXPAND_MODE),
              n = e.articleId,
              i = e.videoIndex,
              r = this.$articleBody.findAll("video");
            n == this.options.articleId && i <= r - 1 && i === this.index ? this.handlePlayerTheaterMode(t) : 0 === this.index && this.handlePlayerTheaterMode(t)
          }
        }
      }, {
        key: "bindPlayerEvents",
        value: function () {
          this.zplayer.on(te.Events.PLAYER_THEATER_MODE_CHANGE, this.handlePlayerTheaterMode)
        }
      }, {
        key: "bindIniewEvents",
        value: function () {
          this.inViewPort && this.inViewPort.on(be.a.EVENTS.CHANGE, this.handleInViewChange)
        }
      }, {
        key: "resertExpandedClass",
        value: function () {
          var t = this;
          this.$articleEl.findAll("figure.video.".concat(ye)).forEach((function (e) {
            t.Dom.removeClass(e, ye)
          }))
        }
      }]), e
    }(O.a),
    Ee = function (t) {
      function e(t) {
        var n;
        return r()(this, e), (n = a()(this, l()(e).call(this, t))).$articleEl = document.find(".the-article"), n.$articleEl ? (n.handleInfinite = n.handleInfinite.bind(A()(n)), n.handleSections = n.handleSections.bind(A()(n)), n.handleReadMoreBackground = n.handleReadMoreBackground.bind(A()(n)), n.hadHandleAdsNative = !1, n.init(), n) : a()(n)
      }
      return d()(e, t), u()(e, [{
        key: "name",
        get: function () {
          return "ArticleModule"
        }
      }, {
        key: "$articleBody",
        get: function () {
          return this.artUtils.getArticleBody()
        }
      }]), u()(e, [{
        key: "init",
        value: function () {
          this.artInfo = new ae(this), this.artUtils = new oe(this), this.articleMap = {}, this.articleMap[this.artInfo.articleId] = !0, this.artUtils.markReadArticle(), this.artUtils.markPublishedByZing(), this.artUtils.formatExternalLink(), this.artUtils.removeMetaRefreshLive(), this.artUtils.formatContent(), new he(this), this.handleArticleTags(), this.handleCmtsCount(), this.renderRelatedArticles(), this.renderAuthorProfile(), this.handleArticleSource(), this.renderQuickView(), this.renderComments(), this.renderAudioWidget(), this.renderInnerVideo(), this.renderCharts(), this.renderTables(), this.handleBackground(), this.app.disableArticleWidget || (this.renderInterview(), this.renderLiveStream()), new ge(this), new fe(this.app), this.stickyMenu = new pe(this, {
            shareTools: {
              comment: this.artInfo.hasComments
            }
          }), this.isQuizzTopic = this.app.isQuizzTopic, this.bindEvents(), this.handlePlugins(), this.removeImageTitle()
        }
      }, {
        key: "handleSections",
        value: function () {
          this.handleOnMostView(), this.handleOnRecommend(), this.unBindEvents()
        }
      }, {
        key: "handlePlugins",
        value: function () {
          var t = this;
          this.app.isSlidingTopic && window.innerWidth > j.b.MINI_SCREEN && Promise.all([n.e(31), n.e(16)]).then(n.bind(null, 138)).then((function (e) {
            new(0, e.default)(t)
          })), this.app.isScrollStoryTopic && Promise.all([n.e(30), n.e(0), n.e(14)]).then(n.bind(null, 139)).then((function (e) {
            new(0, e.default)(t)
          })), this.isQuizzTopic && n.e(13).then(n.bind(null, 140)).then((function (e) {
            new(0, e.default)(t)
          })), this.app.isCoverTopic && n.e(7).then(n.bind(null, 141)).then((function (e) {
            new(0, e.default)(t)
          })), this.app.isTimelineCVTopic && Promise.all([n.e(0), n.e(19)]).then(n.bind(null, 142)).then((function (e) {
            new(0, e.default)(t)
          })), this.app.isTimelineTopic && Promise.all([n.e(0), n.e(18)]).then(n.bind(null, 143)).then((function (e) {
            new(0, e.default)(t)
          })), this.app.isBookTopic && n.e(5).then(n.bind(null, 157)).then((function (e) {
            new(0, e.default)(t)
          })), n.e(15).then(n.bind(null, 144)).then((function (e) {
            var n = e.default;
            setTimeout((function () {
              t.scrollFixed = new n(t)
            }), 2e3)
          })), this.handleImagesPlugins()
        }
      }, {
        key: "handleImagesPlugins",
        value: function () {
          var t = this,
            e = Object(k.a)();
          this.app.disablePhotoZoom || this.isQuizzTopic ? e.resolve() : n.e(8).then(n.bind(null, 151)).then((function (n) {
            new(0, n.default)(t), e.resolve()
          })), this.isQuizzTopic || e.promise.then((function () {
            n.e(9).then(n.bind(null, 155)).then((function (e) {
              new(0, e.default)(t)
            }))
          })), this.app.isPanoramaTopic && Promise.all([n.e(29), n.e(12)]).then(n.bind(null, 158)).then((function (e) {
            new(0, e.default)(t)
          }));
          var i = this.$articleBody;
          i && i.findAll(".twentytwenty-container").length && n.e(4).then(n.bind(null, 159)).then((function (e) {
            new(0, e.default)(t)
          }))
        }
      }, {
        key: "renderInterview",
        value: function () {
          var t = this;
          this.artInfo.isInterview && n.e(10).then(n.bind(null, 154)).then((function (e) {
            new(0, e.default)(t)
          }))
        }
      }, {
        key: "renderLiveStream",
        value: function () {
          var t = this,
            e = this.artInfo.$liveElement;
          e && n.e(11).then(n.bind(null, 148)).then((function (n) {
            new(0, n.default)(t, e)
          }))
        }
      }, {
        key: "renderInnerVideo",
        value: function () {
          var t = this;
          this.app.disableVideoPlayer || this.$articleBody.findAll("video").forEach((function (e, n) {
            var i = Object(x.e)(e, '[id*="livestream"]'),
              r = Object(x.e)(e, ".interview"),
              o = Object(x.e)(e, ".picture") || !t.artInfo.isLiveArticle && !t.artInfo.isLive && !e.getAttribute("controls");
            if (!(i || r || o)) {
              var a = {},
                s = {
                  pageid: t.app.zaConfig.pageid,
                  cate: t.app.catePath,
                  postid: t.artInfo.articleId,
                  topicid: t.app.zaConfig.topid
                },
                l = Object(x.e)(e, ".cms-video"),
                c = "",
                u = "";
              if (l) {
                var h = l.find("a");
                if (h) {
                  var d = h.getAttribute("cate-id"),
                    p = h.getAttribute("cate-name"),
                    v = h.getAttribute("topic-id");
                  u = h.getAttribute("href"), c = Object(x.d)(h), d && (s.pageid = d), p && (s.cate = p), v && (s.topicid = v), s.postid = Object(w.k)(u), a.url = f.u + u, a.title = c, a.cateid = d, a.catename = p, a.hash = "#inlinevideo"
                }
              }
              var m = !0;
              (Object(x.e)(e, "h1") || t.artInfo.articleLayout === f.d.SPECICAL || "false" === e.getAttribute("allowads") || "false" == t.$articleEl.getAttribute("allowads")) && (m = !1);
              var g = 0 === n,
                b = {
                  articleId: t.artInfo.articleId,
                  allowInview: !0,
                  allowCountdown: g,
                  allowMiniMode: !0,
                  listenUserAction: !0,
                  tracking: a,
                  ads: {
                    allowAds: m,
                    data: s
                  },
                  title: c,
                  pageUrl: u
                };
              t.artInfo.articleLayout === f.d.NO_SIDEBAR && Object(ut.a)(b, {
                theaterMode: !0,
                zplayerOptions: {
                  storageKey: W.b.PLAYER_NO_SIDEBAR
                }
              }), new we(t, e, n, b)
            }
          }))
        }
      }, {
        key: "handleOnMostView",
        value: function () {
          var t = this.artUtils.getMostViewArticles();
          if (t) {
            for (var e = t.findAll(".article-item"), n = e.length, i = 0; i < n; i++) {
              var r = e.item(i),
                o = r.getAttribute("article-id");
              o && (this.articleMap[o] ? this.Dom.removeFromDom(r) : this.articleMap[o] = !0)
            }(e = t.findAll(".article-item:not(.ads)")).length || this.Dom.removeFromDom(t)
          }
        }
      }, {
        key: "handleOnRecommend",
        value: function () {
          var t = this,
            e = this.artUtils.getArticleRecommend();
          if (e) {
            var n = e.findAll(".article-item");
            n.length && n.forEach((function (e) {
              var n = e.getAttribute("article-id");
              n && (t.articleMap[n] ? t.Dom.removeFromDom(e) : t.articleMap[n] = !0)
            }));
            var i = e.find(".banner");
            if (n.length < 4) return void this.Dom.removeFromDom(i);
            n.length || this.Dom.removeFromDom(e)
          }
        }
      }, {
        key: "handleInfinite",
        value: function () {
          var t = this.artUtils.getArticleNextRead(),
            e = t.getAttribute("start-index") || 0;
          if (this.hadHandleAdsNative || (this.hadHandleAdsNative = !0, new qt(this.app)), t) {
            var n = t.findAll(".article-item"),
              i = n.length - 1;
            if (n.length) {
              for (var r = e; r < n.length; r++) {
                var o = n.item(r),
                  a = o.getAttribute("article-id");
                a && (this.articleMap[a] ? (i--, this.Dom.removeFromDom(o)) : this.articleMap[a] = !0)
              }
              t.setAttribute("start-index", i)
            }
          }
        }
      }, {
        key: "renderComments",
        value: function () {
          var t = this;
          if (this.artInfo.hasComments) {
            if (this.artInfo.isCommentLive) {
              var e = this.artUtils.getArticleSidebar(),
                i = this.artUtils.getArticleComments();
              e.findAll(":scope > *:not(.pr-articles)").forEach((function (e) {
                t.Dom.removeFromDom(e)
              })), i.setAttribute("status", "live"), e.appendChild(i)
            }
            var r = this.artUtils.getArticleComments(),
              o = {
                articleId: this.artInfo.articleId,
                isLive: this.artInfo.isCommentLive
              };
            n.e(20).then(n.bind(null, 149)).then((function (e) {
              new(0, e.default)(t.app, r, o)
            }))
          }
        }
      }, {
        key: "renderAudioWidget",
        value: function () {
          var t = this,
            e = this.$articleBody.findAll("div.audio");
          e.length && e.forEach((function (e) {
            var n = e.find('a[href*="mp3"], a[href*="wav"]');
            if (n.length > 0) {
              var i = n.item(0),
                r = Object(x.d)(i),
                o = i.getAttribute("href") || "";
              o = o.replace(/w\d+\//i, "");
              var a = t.Dom.createElFromHTML('<table class="audio" align="center">\n                            <tr>\n                                <td>\n                                    <audio controls="" style="width: 100%;">\n                                        <source src="'.concat(o, '" type="audio/mpeg">\n                                    </audio>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td class="caption">').concat(r, "</td>\n                            </tr>\n                        </table>"));
              Object(x.g)(i, a), t.Dom.removeFromDom(n)
            }
          }))
        }
      }, {
        key: "handleCmtsCount",
        value: function () {
          var t = this.$articleEl.find(".comment-count");
          t && t.setAttribute("title", "BĂ¬nh luáº­n")
        }
      }, {
        key: "handleArticleSource",
        value: function () {
          var t = this.artUtils.getArticleCreadit(),
            e = t && t.find(".source"),
            n = t && t.find(".support"),
            i = this.artUtils.getArticleSource();
          if (n) {
            var r = this.$articleEl.find(".the-article-author"),
              o = t && t.find(".author");
            if (r && r.append(n), o) {
              var a = n.cloneNode(!0);
              o.append(a)
            }
          }
          if (!i) {
            if (!e) return;
            i = this.Dom.createElFromHTML('<p class="the-article-source-url"></p>'), Object(x.g)(this.$articleBody, i)
          }
          var s = i.find(":scope > a"),
            l = s && s.getAttribute("href"),
            c = e && Object(x.d)(e) || "",
            u = "",
            h = this.Dom.createElFromHTML('<div class="source-wrapper"></div>'),
            d = new RegExp("^(((https*:)*//)|(www.))", "ig"),
            f = c,
            p = function (t) {
              return t.replace(/theo/gi, "").trim()
            };
          c && d.test(c) && (f = Object(w.g)(c)), l ? (f || (f = Object(w.g)(l)), u = '<a href="'.concat(l, '" title="Xem bĂ i gá»‘c" target="_blank" rel="nofollow noreferrer">').concat(p(f)).concat('<i class="ti-new-window icon-new-win"></i>', "</a>")) : u = "<span>".concat(p(f), "</span>");
          var v = this.Dom.createElFromHTML(u);
          h.append(v), i.append(h)
        }
      }, {
        key: "handleArticleTags",
        value: function () {
          var t = this,
            e = this.$articleEl.findAll(".the-article-tags *");
          if (e.length) {
            var n = this.artUtils.getArticleTags();
            if (n) {
              var i = this.Dom.createElFromHTML('<i class="znews-ic-tag-1"></i>');
              if (n.prepend(i), e.length > 3) {
                var r = this.Dom.createElFromHTML('<span class="more-icon" title="'.concat("Xem thĂªm", '"><i class="ti-plus"></i></span>'));
                n.append(r), this.moreTagsExpanded = !1, r.on("click", (function (e) {
                  e.preventDefault(), t.moreTagsExpanded = !t.moreTagsExpanded;
                  var i = r.find("i");
                  t.Dom.toggleClass(i, "ti-plus"), t.Dom.toggleClass(i, "ti-minus"), t.Dom.toggleClass(n, "expanded"), r.setAttribute("title", t.moreTagsExpanded ? "RĂºt gá»n" : "Xem thĂªm")
                }))
              }
            }
            e.forEach((function (e) {
              e.textContent ? (e.on("click", (function (n) {
                n.preventDefault();
                var i = Object(x.d)(e);
                window.location.href = t.artUtils.buildTagsUrl(i)
              })), t.Dom.addClass(e, "tag-item")) : t.Dom.removeFromDom(e)
            }))
          }
        }
      }, {
        key: "renderAuthorProfile",
        value: function () {
          var t = this,
            e = "",
            n = this.artUtils.getArticleSidebar();
          if (n) {
            var i = n.findAll(".topics .author");
            i.length && i.forEach((function (t) {
              var n = t.find("h3 a");
              if (n) {
                var i = "<a href='".concat(n.getAttribute("href"), "'>").concat(Object(x.d)(n), "</a>");
                e += i
              }
            }))
          }
          var r = this.artUtils.getArticleCreadit();
          if (r) {
            var o = r.findAll(".author");
            o.length && o.forEach((function (n) {
              var i = Object(x.d)(n);
              i && (i = i.replace(/\(.*\)/i, "").split(/\s+-\s+/i)).forEach((function (n) {
                var i = "<a href='".concat(t.artUtils.buildAuthorUrl(n), "'>").concat(n.trim(), "</a>");
                e += i
              }))
            }))
          }
          if (e) {
            var a = this.artUtils.getArticleMeta(),
              s = this.Dom.createElFromHTML("<li class='".concat("the-article-author", "'>\n                    ").concat(e, "\n                </li>"));
            a.prepend(s)
          }
        }
      }, {
        key: "renderRelatedArticles",
        value: function () {
          var t = this,
            e = this.artInfo.isLiveArticle,
            n = this.$articleBody,
            i = n.findAll(".inner-article"),
            r = this.Dom.createEl("div", {
              id: "innerarticle"
            });
          i.forEach((function (n) {
            var i = Object(ve.a)(n),
              o = i.find("a").getAttribute("href"),
              a = Object(w.k)(o);
            if (o += "#inner-article", !t.articleMap[a]) {
              if (t.articleMap[a] = !0, e) {
                var s = i.parents("li");
                s && t.Dom.addClass(s, "hide")
              }
              var l = i.find(".cover"),
                c = Object(ve.a)(l).getStyleValue("background-image").match(/https:\/\/.+\.(gif|jpe?g|tiff?|png|webp|bmp)/i),
                u = i.find(".title").textContent,
                h = i.find(".summary").textContent;
              if (c && u && o) {
                i.remove();
                var d = i.parents(".comment");
                d && (d.style.display = "none");
                var f = t.Dom.createElFromHTML("<article class='article-item related' article-id='".concat(a, "'>\n                        <p class=\"article-thumbnail\">\n                            <a href='").concat(o, "'>\n                                <img data-src=\"").concat(c[0], "\" alt=\"\">\n                            </a>\n                        </p>\n                        <h3 class='article-title'>\n                            <a href='").concat(o, "'>").concat(u, "</a>\n                        </h3>\n                        <p class='article-summary'>").concat(h, "</p>\n                    </article>"));
                r.append(f)
              }
            }
          })), r.findAll(".article-item").length && (n.append(r), r.findAll(".article-thumbnail img[data-src]").forEach((function (t) {
            Object($.a)(t, {
              threshold: 400,
              autoscale: !0
            })
          })), this.app.tracker.initTrackers(r))
        }
      }, {
        key: "renderQuickViewUSDRate",
        value: function () {
          var t = this;
          this.$articleBody.findAll("p abbr, .caption abbr").forEach((function (e) {
            var n = Object(ve.a)(e);
            if (!(n.parents("a") || n.parents("h1") || n.parents("h3")) && n.hasClass("rate-usd")) {
              var i = n.text().trim();
              if (n.attr("data-content")) return;
              n.attr("data-content", i),
                function (t) {
                  var e, n, i, r, o, a, s = arguments;
                  return Y.a.async((function (l) {
                    for (;;) switch (l.prev = l.next) {
                      case 0:
                        if (e = s.length > 1 && void 0 !== s[1] ? s[1] : "USD", n = Object(k.a)(), !(i = t.match(/\d+([.,]\d+)*/gi))) {
                          l.next = 22;
                          break
                        }
                        return i = (i = i[0]).replace(/\./gi, "").replace(/,/gi, "."), i = parseFloat(i), t.search(/triá»‡u/gi) >= 0 && (i *= 1e6), t.search(/nghĂ¬n|ngĂ n/gi) >= 0 && (i *= 1e3), t.search(/tá»·|tá»‰/gi) >= 0 && (i *= 1e9), l.next = 12, Y.a.awrap(Object(w.h)(M.f.UTILITIES_GET));
                      case 12:
                        if (r = l.sent, o = Object(me.c)(r.data.exchange, "code", e)) {
                          l.next = 17;
                          break
                        }
                        return n.resolve(null), l.abrupt("return");
                      case 17:
                        a = (a = Math.round(i * o.buy)) > 1e12 ? null : a > 1e9 ? Object(bt.a)("#,###.#", a / 1e9) + " tá»· Ä‘á»“ng" : a > 1e6 ? Object(bt.a)("#,###.#", a / 1e6) + " triá»‡u Ä‘á»“ng" : Object(bt.a)("#,###.", a) + " Ä‘á»“ng", n.resolve(a), l.next = 23;
                        break;
                      case 22:
                        n.resolve(null);
                      case 23:
                        return l.abrupt("return", n.promise);
                      case 24:
                      case "end":
                        return l.stop()
                    }
                  }))
                }(i, "USD").then((function (e) {
                  e && (n.addClass("quickview"), t.renderTooltip(n.$el, {
                    content: e,
                    theme: ["zing-info-card", "currency"],
                    animation: "fade",
                    trigger: "hover",
                    contentAsHTML: !0
                  }))
                }))
            }
          }))
        }
      }, {
        key: "renderTooltip",
        value: function (t, e) {
          n.e(25).then(n.bind(null, 145)).then((function (n) {
            new(0, n.default)(t, e)
          }))
        }
      }, {
        key: "renderQuickView",
        value: function () {
          var t = this;
          this.renderQuickViewUSDRate();
          var e = this.artUtils.getArticleSidebar(),
            n = this.$articleBody;
          e && e.findAll("ul.topics li").forEach((function (e) {
            var i = e.getAttribute("topic-id");
            if (i) {
              var r = e.getAttribute("class") || "",
                o = 'a.autolink[topic-id="'.concat(i, '"]'),
                a = n.findAll("p ".concat(o, ", .caption ").concat(o));
              a.length > 0 && a.forEach((function (n) {
                var i = '<p class="logo-quicklook"><span class="znews-ic-flash"></span> Xem nhanh</p>';
                i += e.innerHTML, t.Dom.addClass(n, "quickview"), t.renderTooltip(n, {
                  content: i,
                  theme: ["zing-info-card", "profile"].concat(r.split(" ")),
                  animation: "fade",
                  trigger: "hover",
                  contentAsHTML: !0
                })
              }))
            }
          }))
        }
      }, {
        key: "renderCharts",
        value: function () {
          var t = this,
            e = this.$articleBody.findAll(".chart");
          e.length && Promise.all([n.e(28), n.e(6)]).then(n.bind(null, 146)).then((function (n) {
            var i = n.default;
            e.forEach((function (e) {
              return new i(t.app, e)
            }))
          }))
        }
      }, {
        key: "renderTables",
        value: function () {
          var t = this,
            e = this.$articleBody.findAll("table:not([class])");
          e.length && n.e(17).then(n.bind(null, 147)).then((function (n) {
            var i = n.default;
            e.forEach((function (e) {
              return new i(t.app, e)
            }))
          }))
        }
      }, {
        key: "removeImageTitle",
        value: function () {
          this.$articleBody.findAll("img").forEach((function (t) {
            t.on("mouseover", (function () {
              t.setAttribute("data-title", t.getAttribute("title")), t.removeAttribute("title")
            })), t.on("mouseout", (function () {
              t.setAttribute("title", t.getAttribute("data-title"))
            }))
          }))
        }
      }, {
        key: "handleBackground",
        value: function () {
          if (this.$backgroundSection = document.find("#article-news-background"), this.$backgroundSection) {
            this.$backgroundTitle = this.$backgroundSection.find(".section-title h3 a");
            var t = this.$backgroundSection.find(".article-list");
            this.$backgroundItemList = t.findAll(".article-item");
            var e = this.$backgroundItemList[0].find(".article-publish .date").innerHTML;
            if (this.$backgroundTitle.setAttribute("data-update", e), this.$backgroundItemList.forEach((function (t) {
                var e = t.find(".article-summary");
                Object(P.a)(e, 3)
              })), this.$backgroundItemList.length > 3) this.$actionButton = this.Dom.createEl("a", {
              className: "btnAction btnMore",
              innerHTML: "Xem thĂªm ".concat(this.$backgroundItemList.length - 3, ' bĂ i<i class="ti-angle-down"></>')
            }), this.bindReadMoreBackground();
            else {
              this.$actionButton = this.Dom.createEl("a", {
                className: "btnAction btnMore",
                innerHTML: "xem toĂ n bá»™"
              });
              var n = this.$backgroundTitle.getAttribute("href");
              this.$actionButton.setAttribute("href", n)
            }
            this.$backgroundSection.appendChild(this.$actionButton)
          }
        }
      }, {
        key: "handleReadMoreBackground",
        value: function (t) {
          if (t.preventDefault(), this.Dom.addClass(this.$backgroundSection, "expanded"), this.Dom.hasClass(this.$backgroundSection, "expanded")) {
            var e = this.$backgroundTitle.getAttribute("href");
            this.$actionButton.textContent = "xem toĂ n bá»™", this.$actionButton.setAttribute("href", e), this.$backgroundItemList.forEach((function (t) {
              var e = t.find(".article-summary");
              Object(P.a)(e, 3)
            })), this.$actionButton.off("click", this.handleReadMoreBackground)
          }
        }
      }, {
        key: "bindReadMoreBackground",
        value: function () {
          this.$actionButton && this.$actionButton.on("click", this.handleReadMoreBackground)
        }
      }, {
        key: "bindEvents",
        value: function () {
          this.app.on(V.a.RENDERED_ADS_NATIVE, this.handleSections), this.app.on(V.a.INFINITE_DONE, this.handleInfinite)
        }
      }, {
        key: "unBindEvents",
        value: function () {
          this.app.off(V.a.RENDERED_ADS_NATIVE, this.handleSections)
        }
      }]), e
    }(O.a),
    ke = n(29),
    Te = n.n(ke),
    Ae = n(61),
    Ce = "VIá»†T NAM",
    _e = "CĂ™NG VÆ¯á»¢T QUA COVID-19",
    Oe = {
      VN: "tab-vn",
      WORLD: "tab-world"
    },
    Ie = function (t) {
      function e(t) {
        var n;
        return r()(this, e), n = a()(this, l()(e).call(this, t)), _()(A()(n), "onTabClick", (function (t) {
          t.preventDefault();
          var e = t.currentTarget.getAttribute("data-tab"),
            i = n.$el.find(".flex-table"),
            r = e == Oe.VN;
          n.Dom.toggleClass(i, Oe.VN, r), n.Dom.toggleClass(i, Oe.WORLD, !r), n.totalRows = r ? n.vnRows : n.worldRows, n.renderCustomScrollbar(!0)
        })), n.totalRows = 0, n.data ? (n.app.isHomePage && n.renderCounterHome(), n.app.isArticlePage && n.renderCounterArticle(), n) : a()(n)
      }
      return d()(e, t), u()(e, [{
        key: "name",
        get: function () {
          return "CoronaEvent"
        }
      }, {
        key: "data",
        get: function () {
          return window.coronaData
        }
      }, {
        key: "vnData",
        get: function () {
          var t = Object(me.c)(this.data.countries, "country", "vn");
          return t && "viá»‡t nam" == t.title.toLowerCase() ? t : null
        }
      }]), u()(e, [{
        key: "renderCounterHome",
        value: function () {
          var t = document.getId("widget-ticker");
          if (t) {
            var e = Object(ut.a)(this.vnData, {
                title: Ce,
                tooltip: this.data.tooltip,
                source: this.data.source
              }),
              n = this.renderCoronaStat(e);
            t.append(n);
            var i = Object(ut.a)(this.data, {
                title: "THáº¾ GIá»I",
                recover: this.data.total_recovered,
                cases: this.data.total_cases,
                deaths: this.data.total_deaths
              }),
              r = this.renderCoronaStat(i);
            t.append(r);
            var o = r.offsetWidth;
            this.Dom.setStyles(n, {
              width: o + "px"
            }), this.Dom.addClass(n, "visible"), this.Dom.addClass(n, "vn"), this.Dom.addClass(n.find(".stats-info"), "vn"), this.initViewCycle(n, r)
          }
        }
      }, {
        key: "initViewCycle",
        value: function (t, e) {
          var n = this;
          setInterval((function () {
            n.Dom.toggleClass(t, "visible"), n.Dom.toggleClass(e, "visible")
          }), 1e4)
        }
      }, {
        key: "renderCoronaStat",
        value: function (t) {
          var e = t.tooltip,
            n = t.title,
            i = t.source,
            r = t.recover,
            o = t.cases,
            a = t.deaths;
          return this.Dom.createElFromHTML('<a title="'.concat(e || "", '" class="corona-event" href="').concat(i || "#", '">\n                <strong>').concat(_e, '</strong>\n                <span class="corona-event__country">').concat(n, '</span>\n                <span class="stats-info">\n                    <span class="corona-event__recover">CA PHá»¤C Há»’I: <span>').concat(this.formatNumber(r), '</span></span>\n                    <span class="corona-event__case">CA NHIá»„M: <span>').concat(this.formatNumber(o), '</span></span>\n                    <span class="corona-event__death">CA Tá»¬ VONG: <span>').concat(this.formatNumber(a), "</span></span>\n                </span>\n            </a>"))
        }
      }, {
        key: "renderCounterArticle",
        value: function () {
          var t = this,
            e = document.getId("corona-counter");
          if (e && this.data.countries) {
            var n = this.vnData;
            if (!n) return;
            this.Dom.removeClass(e, "hide");
            var i = this.Dom.createElFromHTML('<a title="'.concat("Xem thĂªm thĂ´ng tin vá» COVID-19", '" href="').concat(this.data.source_article || "#", '">\n                    <strong class="title">').concat(_e, "</strong>\n                    <div class=\"content\">\n                        <div class='info'>\n                            <div class='info-item' data-tab=\"").concat(Oe.VN, '">\n                                <span class="info-item__title">').concat(Ce, '</span>\n                                <div>\n                                    <span class="recover"> <span>').concat(this.formatNumber(n.recover), '</span> CA PHá»¤C Há»’I</span>\n                                    <span class="cases"> <span>').concat(this.formatNumber(n.cases), '</span> CA NHIá»„M</span>\n                                    <span class="death"> <span>').concat(this.formatNumber(n.deaths), "</span> CA Tá»¬ VONG</span>\n                                </div>\n                            </div>\n                            <div class='info-item' data-tab=\"").concat(Oe.WORLD, '">\n                                <span class="info-item__title">').concat("THáº¾ GIá»I", '</span>\n                                <div>\n                                    <span class="recover"> <span>').concat(this.formatNumber(this.data.total_recovered), '</span> CA PHá»¤C Há»’I</span>\n                                    <span class="cases"> <span>').concat(this.formatNumber(this.data.total_cases), '</span> CA NHIá»„M</span>\n                                    <span class="death"> <span>').concat(this.formatNumber(this.data.total_deaths), '</span> CA Tá»¬ VONG</span>\n                                </div>\n                            </div>\n                        </div>\n                        <div class="flex-table">\n                            <div class="flex-row header">\n                                <div class="flex-cell">NÆ¡i khá»Ÿi bá»‡nh</div>\n                                <div class="flex-cell">Phá»¥c há»“i</div>\n                                <div class="flex-cell">Nhiá»…m bá»‡nh</div>\n                                <div class="flex-cell">Tá»­ vong</div>\n                            </div>\n                            <div class="flex-table-body"></div>\n                        </div>\n                    </div>\n                    <p>').concat(this.data.tooltip || "", "</p>\n                </a>"));
            this.$el = i, e.append(i), this.renderTableBody(), setTimeout((function () {
              t.renderCustomScrollbar()
            }), 500), this.bindDomEvents()
          }
        }
      }, {
        key: "formatNumber",
        value: function (t) {
          return 0 == t ? 0 : Object(bt.a)("#,###.#", t).replace(/,/g, ".")
        }
      }, {
        key: "renderRow",
        value: function (t) {
          var e = t.location,
            n = t.recover,
            i = t.cases,
            r = t.deaths,
            o = t.rowClass,
            a = void 0 === o ? "" : o;
          return this.Dom.createElFromHTML('<div class="flex-row '.concat(a, '">\n                <div class="flex-cell">').concat(e, '</div>\n                <div class="flex-cell">').concat(this.formatNumber(n), '</div>\n                <div class="flex-cell">').concat(this.formatNumber(i), '</div>\n                <div class="flex-cell">').concat(this.formatNumber(r), "</div>\n            </div>"))
        }
      }, {
        key: "renderTableBody",
        value: function () {
          var t = this,
            e = this.data,
            n = e.chart,
            i = e.countries;
          this.$tableBody = this.$el.find(".flex-table .flex-table-body"), this.vnRows = n.length, this.worldRows = i.length, this.totalRows = this.vnRows, n = Object(Ae.a)(n, [1, 2, 3]), (n = Object(me.b)(n, 1, !1)).forEach((function (e) {
            var n = Te()(e, 4),
              i = n[0],
              r = n[1],
              o = n[2],
              a = n[3],
              s = t.renderRow({
                location: f.z[i],
                recover: a,
                cases: r,
                deaths: o,
                rowClass: "vn"
              });
            t.$tableBody.append(s)
          })), i = Object(Ae.a)(i, ["cases", "deaths", "recover"]), (i = Object(me.b)(i, "cases", !1)).forEach((function (e) {
            var n = e.title,
              i = e.recover,
              r = e.cases,
              o = e.deaths,
              a = t.renderRow({
                location: n,
                recover: i,
                cases: r,
                deaths: o
              });
            t.$tableBody.append(a)
          }))
        }
      }, {
        key: "bindDomEvents",
        value: function () {
          var t = this;
          this.$el.findAll(".info .info-item").forEach((function (e) {
            e.on("click", t.onTabClick)
          }))
        }
      }, {
        key: "renderCustomScrollbar",
        value: function () {
          var t = this,
            e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (this.totalRows > 5) {
            this.scrollbar && this.scrollbar.destroy();
            var n = function () {
              t.scrollbar = Object(Qt.a)(t.$tableBody, {
                autoshow: !1
              })
            };
            e ? n() : setTimeout((function () {
              n()
            }), 100)
          }
        }
      }]), e
    }(O.a),
    Pe = n(68),
    De = (n(74), function (t) {
      function e(t) {
        var n;
        return r()(this, e), n = a()(this, l()(e).call(this, t)), _()(A()(n), "onKeydown", (function (t) {
          var e = t.keyCode;
          t.shiftKey && t.altKey && e == f.x.V && n.toggle()
        })), n.$versions = [], n.init(), n.bindEvents(), n
      }
      return d()(e, t), u()(e, [{
        key: "init",
        value: function () {
          var t = this;
          document.findAll(".logo a, a.sticky-header__logo").forEach((function (e) {
            var n = t.Dom.createElFromHTML('<a href="'.concat(f.i, '" target="_bank" class="z-version-info">\n                    v').concat(Pe.version, "\n                </a>"));
            t.$versions.push(n), e.append(n)
          }))
        }
      }, {
        key: "bindEvents",
        value: function () {
          window.on("keydown", this.onKeydown)
        }
      }, {
        key: "toggle",
        value: function () {
          var t = this;
          this.$versions.forEach((function (e) {
            t.Dom.toggleClass(e, "show")
          }))
        }
      }]), e
    }(O.a)),
    Se = n(51),
    Re = function (t) {
      function e() {
        var t;
        return r()(this, e), (t = a()(this, l()(e).call(this))).initSliderPublish(), t.initSliderEditorChoice(), Object(x.o)(document.getId("section-magazine")), t
      }
      return d()(e, t), u()(e, [{
        key: "initSliderPublish",
        value: function () {
          var t = document.find("#section-publish .article-list");
          if (t) {
            new Se.a(t, {
              type: "slider",
              animationDuration: 1e3,
              bullets: !0,
              arrows: !0,
              arrowsConfig: {
                prev: '<i class="znews-ic-arrow-left"></i>',
                next: '<i class="znews-ic-arrow-right"></i>'
              },
              perView: 5,
              gap: 20,
              breakpoints: {
                768: {
                  perView: 3
                }
              }
            })
          }
        }
      }, {
        key: "initSliderEditorChoice",
        value: function () {
          var t = document.find("#section-magazine .album-list");
          if (t) {
            new Se.a(t, {
              type: "slider",
              animationDuration: 1e3,
              bullets: !0,
              arrows: !0,
              arrowsConfig: {
                prev: '<i class="znews-ic-arrow-left"></i>',
                next: '<i class="znews-ic-arrow-right"></i>'
              },
              perView: 4,
              gap: 0,
              rewind: !1,
              breakpoints: {
                834: {
                  perView: 3,
                  gap: 20
                }
              }
            })
          }
        }
      }]), e
    }(O.a),
    Le = function (t) {
      function e(t) {
        var n;
        return r()(this, e), (n = a()(this, l()(e).call(this, t))).init(), n
      }
      return d()(e, t), u()(e, [{
        key: "addIcon",
        value: function (t) {
          t.prepend(this.Dom.createElFromHTML('<i class="live-animate"></i>'))
        }
      }, {
        key: "init",
        value: function () {
          var t = this;
          document.findAll([".article-item.status-live .article-title a", ".the-article.status-live .the-article-title", ".page-video-live #video-featured .video-title > a"].join(",")).forEach((function (e) {
            t.addIcon(e)
          }))
        }
      }]), e
    }(O.a),
    xe = function (t) {
      function e() {
        var t;
        return r()(this, e), (t = a()(this, l()(e).call(this))).pageType = Object(w.o)(), t.PAGE_TYPES = f.E, t.DEVICE = Object(E.a)(), t.lstorage = new g, t.sstorage = new b.a, t.cookies = y.a, t.TESTGROUP = {}, t.FBAPPID = window.FBAPPID, t.INIT_TIMER = window.INIT_TIMER, t.GA = window.ga, t.ZAPP = window.ZA || {}, t.ZAPPID = window.ZAPPID || "zingweb", t.CONFIG = window.CONFIG, t.znAnalytic = window.znAnalytic, t.trackedUrl = window.tracked_url, t.zaConfig = window.zaConfig, t.isPr = "1" == window.is_pr, t.cateName = window.cate_name, t.catePath = window.cate_path, t.znewsGroups = window.znewsGroups, t.adtimaConfig = window.adtimaConfig, t.adtimaData = window.adtimaData || {}, t.ZaloLoginWidget = window.ZaloLoginWidget, t.disablePopupVideo = window.disablePopupVideo, t.disableBanner = window.disableBanner, t.disableVideoAds = window.disableVideoAds, t.disableGridLayout = window.disableGridLayout, t.disablePhotoZoom = window.disablePhotoZoom, t.disableAutoFormat = window.disableAutoFormat, t.$polls = document.findAll(".widget-poll"), t.topicArticleName = t.getTopicArticleName(), t.initModules(), t
      }
      return d()(e, t), u()(e, [{
        key: "getTopicArticleName",
        value: function () {
          var t = this.zaConfig.topicid;
          if (!t) {
            var e = document.find(".the-article");
            if (e) {
              var n = e.getAttribute("topic-id");
              n && (t = n)
            }
          }
          var i = t.split(/[-,]/g);
          return i = i.filter((function (t) {
            return !!f.V[t]
          })), f.V[i[0]]
        }
      }, {
        key: "requestWindowVariable",
        value: function (t) {
          var e = this,
            n = Object(k.a)(),
            i = 0;
          this.requestInterval = setInterval((function () {
            i < 5 ? (r(), i++) : n.resolve(null)
          }), 1e3);
          var r = function () {
            window[t] && (clearInterval(e.requestInterval), n.resolve(window[t]))
          };
          return r(), n.promise
        }
      }, {
        key: "name",
        get: function () {
          return "App"
        }
      }, {
        key: "topicCateId",
        get: function () {
          var t = this.zaConfig.pageid;
          return f.X[t]
        }
      }, {
        key: "isCategoryPage",
        get: function () {
          return this.pageType === this.PAGE_TYPES.CATEGORY
        }
      }, {
        key: "isArticlePage",
        get: function () {
          return this.pageType === this.PAGE_TYPES.ARTICLE
        }
      }, {
        key: "isVideoPage",
        get: function () {
          return this.pageType === this.PAGE_TYPES.VIDEO
        }
      }, {
        key: "isSearchPage",
        get: function () {
          return this.pageType === this.PAGE_TYPES.SEARCH
        }
      }, {
        key: "isHomePage",
        get: function () {
          return this.pageType === this.PAGE_TYPES.HOME
        }
      }, {
        key: "isQnaTopic",
        get: function () {
          return this.topicArticleName === f.W.QNA
        }
      }, {
        key: "isGalleryTopic",
        get: function () {
          return this.topicArticleName === f.W.GALLERY
        }
      }, {
        key: "isInfographicTopic",
        get: function () {
          return this.topicArticleName === f.W.INFOGRAPHIC
        }
      }, {
        key: "isVoicesTopic",
        get: function () {
          return this.topicArticleName === f.W.VOICES
        }
      }, {
        key: "isInfocusTopic",
        get: function () {
          return this.topicArticleName === f.W.INFOCUS
        }
      }, {
        key: "isLensTopic",
        get: function () {
          return this.topicArticleName === f.W.LENS
        }
      }, {
        key: "isSlidingTopic",
        get: function () {
          return this.topicArticleName === f.W.SLIDING
        }
      }, {
        key: "isScrollStoryTopic",
        get: function () {
          return this.topicArticleName === f.W.ZINGSTORY
        }
      }, {
        key: "isBranchvoiceTopic",
        get: function () {
          return this.topicArticleName === f.W.BRANCHVOICE
        }
      }, {
        key: "isLongformTopic",
        get: function () {
          return this.topicArticleName === f.W.LONGFORM
        }
      }, {
        key: "isQuizzTopic",
        get: function () {
          return this.topicArticleName === f.W.QUIZZ
        }
      }, {
        key: "isKoverTopic",
        get: function () {
          return this.topicArticleName === f.W.KOVER
        }
      }, {
        key: "isStoryTopic",
        get: function () {
          return this.topicArticleName === f.W.STORY
        }
      }, {
        key: "isPanoramaTopic",
        get: function () {
          return this.topicArticleName === f.W.PANORAMA
        }
      }, {
        key: "isCoverTopic",
        get: function () {
          return this.topicArticleName === f.W.COVER
        }
      }, {
        key: "isTimelineCVTopic",
        get: function () {
          return this.topicArticleName === f.W.TIMELINECV
        }
      }, {
        key: "isTimelineTopic",
        get: function () {
          return this.topicArticleName === f.W.TIMELINE
        }
      }, {
        key: "isBookTopic",
        get: function () {
          var t, e = document.find(".the-article");
          if (e) {
            var n = e.getAttribute("topic-id");
            n && (t = n)
          }
          if (t) {
            var i = t.split(/[-,]/g);
            return (i = i.filter((function (t) {
              return "books" === t
            }))).length > 0
          }
          return !1
        }
      }, {
        key: "isSeagameCate",
        get: function () {
          return this.topicCateId === f.Y.SEAGAME && this.isCategoryPage
        }
      }, {
        key: "isCoronaCate",
        get: function () {
          return this.topicCateId === f.Y.CORONA && this.isCategoryPage || document.find(".corona-category")
        }
      }, {
        key: "isCommunistPartyCate",
        get: function () {
          return this.topicCateId === f.Y.COMMUNIST_PARTY && this.isCategoryPage || document.find(".congress-category")
        }
      }, {
        key: "isCommunistMemberListCate",
        get: function () {
          return this.topicCateId === f.Y.COMMUNIST_MEMBER && this.isCategoryPage || document.find(".congress-member-list")
        }
      }, {
        key: "isLogged",
        get: function () {
          return this.user.isLogged
        }
      }, {
        key: "profile",
        get: function () {
          return this.user.userInfo
        }
      }, {
        key: "requestAdtimaZingNews",
        get: function () {
          return this.requestWindowVariable("AdtimaZingNews")
        }
      }, {
        key: "FB",
        get: function () {
          return window.FB
        }
      }, {
        key: "requestFB",
        get: function () {
          return this.requestWindowVariable("FB")
        }
      }, {
        key: "zaloSocialSDK",
        get: function () {
          return window.ZaloSocialSDK
        }
      }, {
        key: "renderSidebarLayout",
        get: function () {
          return window.renderSidebarLayout
        }
      }, {
        key: "disableAdtimaBanner",
        get: function () {
          return !!this.isVideoPage || window.disableAdtimaBanner
        }
      }, {
        key: "disableVideoPlayer",
        get: function () {
          return window.disableVideoPlayer || !1
        }
      }, {
        key: "disableNativeAds",
        get: function () {
          return window.disableNativeAds
        }
      }]), u()(e, [{
        key: "initModules",
        value: function () {
          var t = this;
          switch (this.TESTGROUP = new vt(this), this.tracking = new ct(this), new G(this), this.tracker = new z(this), this.facebook = new kt(this), this.user = new J(this), new L, new I, new D, new Ft(this), new Wt(this), new Kt(this), new Jt(this), this.isSlidingTopic || new Ie(this), this.$polls.length && n.e(2).then(n.bind(null, 153)).then((function (e) {
            new(0, e.default)(t)
          })), (this.isHomePage || this.isSeagameCate || this.isCoronaCate) && n.e(3).then(n.bind(null, 136)).then((function (e) {
            new(0, e.default)(t)
          })), this.isCoronaCate && n.e(23).then(n.bind(null, 150)).then((function (e) {
            new(0, e.default)(t)
          })), this.isCommunistPartyCate && n.e(22).then(n.bind(null, 156)).then((function (e) {
            new(0, e.default)(t)
          })), this.isCommunistMemberListCate && n.e(21).then(n.bind(null, 152)).then((function (e) {
            new(0, e.default)(t)
          })), this.pageType) {
            case f.E.HOME:
              new Re(this), new Et(this), new tt(this);
              break;
            case f.E.ARTICLE:
              new Ee(this);
              break;
            case f.E.SEARCH:
              n.e(26).then(n.bind(null, 137)).then((function (e) {
                new(0, e.default)(t)
              }));
              break;
            case f.E.VIDEO:
              new re(this)
          }
          new Le(this), new qt(this), new De(this)
        }
      }]), e
    }(p.a);
  window.znApp = new xe
}]);
