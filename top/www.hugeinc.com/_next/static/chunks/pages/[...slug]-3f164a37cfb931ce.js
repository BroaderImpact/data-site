(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[330], {
    4597: function(n, e, r) {
        "use strict";
        r.r(e),
        r.d(e, {
            __N_SSG: function() {
                return O
            },
            default: function() {
                return b
            }
        });
        var t = r(9499)
          , c = r(9008)
          , o = r.n(c)
          , i = r(3468)
          , u = r(9901)
          , a = r(5205)
          , s = r(1673)
          , f = r.n(s)
          , p = r(5893);
        function l(n, e) {
            var r = Object.keys(n);
            if (Object.getOwnPropertySymbols) {
                var t = Object.getOwnPropertySymbols(n);
                e && (t = t.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }
                ))),
                r.push.apply(r, t)
            }
            return r
        }
        function _(n) {
            for (var e = 1; e < arguments.length; e++) {
                var r = null != arguments[e] ? arguments[e] : {};
                e % 2 ? l(Object(r), !0).forEach((function(e) {
                    (0,
                    t.Z)(n, e, r[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : l(Object(r)).forEach((function(e) {
                    Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
                }
                ))
            }
            return n
        }
        var O = !0;
        function b(n) {
            var e = n.canonical
              , r = n.components
              , t = n.metadata
              , c = n.title
              , s = _(_({}, new u.Z(t)), {}, {
                canonical: e
            });
            return (0,
            p.jsxs)("div", {
                className: f().container,
                children: [(0,
                p.jsx)(o(), {
                    children: (0,
                    p.jsx)("title", {
                        children: "".concat(c, " ").concat(i.N)
                    })
                }), (0,
                p.jsx)(i.Z, _({}, s)), (0,
                a.renderComponents)(r)]
            })
        }
    },
    881: function(n, e, r) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/[...slug]", function() {
            return r(4597)
        }
        ])
    },
    1673: function(n) {
        n.exports = {
            grid: "Home_grid__npx0i",
            "grid-mobile-margin": "Home_grid-mobile-margin__3t6m2"
        }
    }
}, function(n) {
    n.O(0, [737, 605, 539, 774, 888, 179], (function() {
        return e = 881,
        n(n.s = e);
        var e
    }
    ));
    var e = n.O();
    _N_E = e
}
]);
