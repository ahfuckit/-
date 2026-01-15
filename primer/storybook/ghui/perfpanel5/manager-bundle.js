try {
    ( () => {
        var De = Object.create;
        var U = Object.defineProperty;
        var Me = Object.getOwnPropertyDescriptor;
        var Le = Object.getOwnPropertyNames;
        var we = Object.getPrototypeOf
          , Be = Object.prototype.hasOwnProperty;
        var H = (n, t) => () => (n && (t = n(n = 0)),
        t);
        var ue = (n, t) => () => (t || n((t = {
            exports: {}
        }).exports, t),
        t.exports)
          , We = (n, t) => {
            for (var r in t)
                U(n, r, {
                    get: t[r],
                    enumerable: !0
                })
        }
          , pe = (n, t, r, i) => {
            if (t && typeof t == "object" || typeof t == "function")
                for (let a of Le(t))
                    !Be.call(n, a) && a !== r && U(n, a, {
                        get: () => t[a],
                        enumerable: !(i = Me(t, a)) || i.enumerable
                    });
            return n
        }
        ;
        var Ge = (n, t, r) => (r = n != null ? De(we(n)) : {},
        pe(t || !n || !n.__esModule ? U(r, "default", {
            value: n,
            enumerable: !0
        }) : r, n))
          , Ue = n => pe(U({}, "__esModule", {
            value: !0
        }), n);
        var y = H( () => {}
        );
        var T = H( () => {}
        );
        var b = H( () => {}
        );
        var ge = {};
        We(ge, {
            Children: () => He,
            Component: () => $e,
            Fragment: () => ze,
            Profiler: () => Ve,
            PureComponent: () => Ye,
            StrictMode: () => je,
            Suspense: () => Ke,
            __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: () => qe,
            act: () => Je,
            cloneElement: () => Ze,
            createContext: () => Qe,
            createElement: () => Xe,
            createFactory: () => en,
            createRef: () => nn,
            default: () => S,
            forwardRef: () => tn,
            isValidElement: () => rn,
            lazy: () => on,
            memo: () => an,
            startTransition: () => ln,
            unstable_act: () => cn,
            useCallback: () => sn,
            useContext: () => dn,
            useDebugValue: () => un,
            useDeferredValue: () => pn,
            useEffect: () => mn,
            useId: () => hn,
            useImperativeHandle: () => In,
            useInsertionEffect: () => gn,
            useLayoutEffect: () => Sn,
            useMemo: () => fn,
            useReducer: () => yn,
            useRef: () => Tn,
            useState: () => bn,
            useSyncExternalStore: () => xn,
            useTransition: () => Rn,
            version: () => vn
        });
        var S, He, $e, ze, Ve, Ye, je, Ke, qe, Je, Ze, Qe, Xe, en, nn, tn, rn, on, an, ln, cn, sn, dn, un, pn, mn, hn, In, gn, Sn, fn, yn, Tn, bn, xn, Rn, vn, Z = H( () => {
            y();
            T();
            b();
            S = __REACT__,
            {Children: He, Component: $e, Fragment: ze, Profiler: Ve, PureComponent: Ye, StrictMode: je, Suspense: Ke, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: qe, act: Je, cloneElement: Ze, createContext: Qe, createElement: Xe, createFactory: en, createRef: nn, forwardRef: tn, isValidElement: rn, lazy: on, memo: an, startTransition: ln, unstable_act: cn, useCallback: sn, useContext: dn, useDebugValue: un, useDeferredValue: pn, useEffect: mn, useId: hn, useImperativeHandle: In, useInsertionEffect: gn, useLayoutEffect: Sn, useMemo: fn, useReducer: yn, useRef: Tn, useState: bn, useSyncExternalStore: xn, useTransition: Rn, version: vn} = __REACT__
        }
        );
        var ve = ue($ => {
            "use strict";
            y();
            T();
            b();
            var _n = (Z(),
            Ue(ge))
              , Cn = Symbol.for("react.element")
              , An = Symbol.for("react.fragment")
              , En = Object.prototype.hasOwnProperty
              , Fn = _n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
              , Pn = {
                key: !0,
                ref: !0,
                __self: !0,
                __source: !0
            };
            function Re(n, t, r) {
                var i, a = {}, s = null, l = null;
                r !== void 0 && (s = "" + r),
                t.key !== void 0 && (s = "" + t.key),
                t.ref !== void 0 && (l = t.ref);
                for (i in t)
                    En.call(t, i) && !Pn.hasOwnProperty(i) && (a[i] = t[i]);
                if (n && n.defaultProps)
                    for (i in t = n.defaultProps,
                    t)
                        a[i] === void 0 && (a[i] = t[i]);
                return {
                    $$typeof: Cn,
                    type: n,
                    key: s,
                    ref: l,
                    props: a,
                    _owner: Fn.current
                }
            }
            $.Fragment = An;
            $.jsx = Re;
            $.jsxs = Re
        }
        );
        var Ce = ue( (yd, _e) => {
            "use strict";
            y();
            T();
            b();
            _e.exports = ve()
        }
        );
        y();
        T();
        b();
        y();
        T();
        b();
        y();
        T();
        b();
        var Ct = __STORYBOOK_API__
          , {ActiveTabs: At, Consumer: Et, ManagerContext: Ft, Provider: Pt, RequestResponseError: Nt, addons: q, combineParameters: kt, controlOrMetaKey: Ot, controlOrMetaSymbol: Dt, eventMatchesShortcut: Mt, eventToShortcut: Lt, experimental_MockUniversalStore: wt, experimental_UniversalStore: Bt, experimental_getStatusStore: Wt, experimental_getTestProviderStore: Gt, experimental_requestResponse: Ut, experimental_useStatusStore: Ht, experimental_useTestProviderStore: $t, experimental_useUniversalStore: zt, internal_checklistStore: Vt, internal_fullStatusStore: Yt, internal_fullTestProviderStore: jt, internal_universalChecklistStore: Kt, internal_universalStatusStore: qt, internal_universalTestProviderStore: Jt, isMacLike: Zt, isShortcutTaken: Qt, keyToSymbol: Xt, merge: er, mockChannel: nr, optionOrAltSymbol: tr, shortcutMatchesShortcut: rr, shortcutToAriaKeyshortcuts: or, shortcutToHumanString: ir, types: me, useAddonState: ar, useArgTypes: lr, useArgs: cr, useChannel: he, useGlobalTypes: sr, useGlobals: dr, useParameter: ur, useSharedState: pr, useStoryPrepared: mr, useStorybookApi: hr, useStorybookState: J} = __STORYBOOK_API__;
        y();
        T();
        b();
        var yr = __STORYBOOK_ICONS__
          , {AccessibilityAltIcon: Tr, AccessibilityIcon: br, AccessibilityIgnoredIcon: xr, AddIcon: Rr, AdminIcon: vr, AlertAltIcon: _r, AlertIcon: Cr, AlignLeftIcon: Ar, AlignRightIcon: Er, AppleIcon: Fr, ArrowBottomLeftIcon: Pr, ArrowBottomRightIcon: Nr, ArrowDownIcon: kr, ArrowLeftIcon: Or, ArrowRightIcon: Dr, ArrowSolidDownIcon: Mr, ArrowSolidLeftIcon: Lr, ArrowSolidRightIcon: wr, ArrowSolidUpIcon: Br, ArrowTopLeftIcon: Wr, ArrowTopRightIcon: Gr, ArrowUpIcon: Ur, AzureDevOpsIcon: Hr, BackIcon: $r, BasketIcon: zr, BatchAcceptIcon: Vr, BatchDenyIcon: Yr, BeakerIcon: jr, BellIcon: Kr, BitbucketIcon: qr, BoldIcon: Jr, BookIcon: Zr, BookmarkHollowIcon: Qr, BookmarkIcon: Xr, BottomBarIcon: eo, BottomBarToggleIcon: no, BoxIcon: to, BranchIcon: ro, BrowserIcon: oo, BugIcon: io, ButtonIcon: ao, CPUIcon: lo, CalendarIcon: co, CameraIcon: so, CameraStabilizeIcon: uo, CategoryIcon: po, CertificateIcon: mo, ChangedIcon: ho, ChatIcon: Io, CheckIcon: go, ChevronDownIcon: So, ChevronLeftIcon: fo, ChevronRightIcon: yo, ChevronSmallDownIcon: To, ChevronSmallLeftIcon: bo, ChevronSmallRightIcon: xo, ChevronSmallUpIcon: Ro, ChevronUpIcon: vo, ChromaticIcon: _o, ChromeIcon: Co, CircleHollowIcon: Ao, CircleIcon: Eo, ClearIcon: Fo, CloseAltIcon: Po, CloseIcon: No, CloudHollowIcon: ko, CloudIcon: Oo, CogIcon: Do, CollapseIcon: Mo, CommandIcon: Lo, CommentAddIcon: wo, CommentIcon: Bo, CommentsIcon: Wo, CommitIcon: Go, CompassIcon: Uo, ComponentDrivenIcon: Ho, ComponentIcon: $o, ContrastIcon: zo, ContrastIgnoredIcon: Vo, ControlsIcon: Yo, CopyIcon: jo, CreditIcon: Ko, CrossIcon: qo, DashboardIcon: Jo, DatabaseIcon: Zo, DeleteIcon: Qo, DiamondIcon: Xo, DirectionIcon: ei, DiscordIcon: ni, DocChartIcon: ti, DocListIcon: ri, DocumentIcon: oi, DownloadIcon: ii, DragIcon: ai, EditIcon: li, EditorIcon: ci, EllipsisIcon: si, EmailIcon: di, ExpandAltIcon: ui, ExpandIcon: pi, EyeCloseIcon: mi, EyeIcon: hi, FaceHappyIcon: Ii, FaceNeutralIcon: gi, FaceSadIcon: Si, FacebookIcon: fi, FailedIcon: yi, FastForwardIcon: Ti, FigmaIcon: bi, FilterIcon: xi, FlagIcon: Ri, FolderIcon: vi, FormIcon: _i, GDriveIcon: Ci, GiftIcon: Ai, GithubIcon: Ei, GitlabIcon: Fi, GlobeIcon: Pi, GoogleIcon: Ni, GraphBarIcon: ki, GraphLineIcon: Oi, GraphqlIcon: Di, GridAltIcon: Mi, GridIcon: Li, GrowIcon: wi, HeartHollowIcon: Bi, HeartIcon: Wi, HomeIcon: Gi, HourglassIcon: Ui, InfoIcon: Hi, ItalicIcon: $i, JumpToIcon: zi, KeyIcon: Vi, LightningIcon: Yi, LightningOffIcon: ji, LinkBrokenIcon: Ki, LinkIcon: qi, LinkedinIcon: Ji, LinuxIcon: Zi, ListOrderedIcon: Qi, ListUnorderedIcon: Xi, LocationIcon: ea, LockIcon: na, MarkdownIcon: ta, MarkupIcon: ra, MediumIcon: oa, MemoryIcon: ia, MenuIcon: aa, MergeIcon: la, MirrorIcon: ca, MobileIcon: sa, MoonIcon: da, NutIcon: ua, OutboxIcon: pa, OutlineIcon: ma, PaintBrushAltIcon: ha, PaintBrushIcon: Ia, PaperClipIcon: ga, ParagraphIcon: Sa, PassedIcon: fa, PhoneIcon: ya, PhotoDragIcon: Ta, PhotoIcon: ba, PhotoStabilizeIcon: xa, PinAltIcon: Ra, PinIcon: va, PlayAllHollowIcon: _a, PlayBackIcon: Ca, PlayHollowIcon: Aa, PlayIcon: Ea, PlayNextIcon: Fa, PlusIcon: Pa, PointerDefaultIcon: Na, PointerHandIcon: ka, PowerIcon: Oa, PrintIcon: Da, ProceedIcon: Ma, ProfileIcon: La, PullRequestIcon: wa, QuestionIcon: Ba, RSSIcon: Wa, RedirectIcon: Ga, ReduxIcon: Ua, RefreshIcon: Ha, ReplyIcon: $a, RepoIcon: za, RequestChangeIcon: Va, RewindIcon: Ya, RulerIcon: ja, SaveIcon: Ka, SearchIcon: qa, ShareAltIcon: Ja, ShareIcon: Za, ShieldIcon: Qa, SideBySideIcon: Xa, SidebarAltIcon: el, SidebarAltToggleIcon: nl, SidebarIcon: tl, SidebarToggleIcon: rl, SortDownIcon: ol, SortUpIcon: il, SpeakerIcon: al, StackedIcon: ll, StarHollowIcon: cl, StarIcon: sl, StatusFailIcon: dl, StatusIcon: ul, StatusPassIcon: pl, StatusWarnIcon: ml, StickerIcon: hl, StopAltHollowIcon: Il, StopAltIcon: gl, StopIcon: Sl, StorybookIcon: fl, StructureIcon: yl, SubtractIcon: Tl, SunIcon: bl, SupportIcon: xl, SweepIcon: Rl, SwitchAltIcon: vl, SyncIcon: Ie, TabletIcon: _l, ThumbsUpIcon: Cl, TimeIcon: Al, TimerIcon: El, TransferIcon: Fl, TrashIcon: Pl, TwitterIcon: Nl, TypeIcon: kl, UbuntuIcon: Ol, UndoIcon: Dl, UnfoldIcon: Ml, UnlockIcon: Ll, UnpinIcon: wl, UploadIcon: Bl, UserAddIcon: Wl, UserAltIcon: Gl, UserIcon: Ul, UsersIcon: Hl, VSCodeIcon: $l, VerifiedIcon: zl, VideoIcon: Vl, WandIcon: Yl, WatchIcon: jl, WindowsIcon: Kl, WrenchIcon: ql, XIcon: Jl, YoutubeIcon: Zl, ZoomIcon: Ql, ZoomOutIcon: Xl, ZoomResetIcon: ec, iconList: nc} = __STORYBOOK_ICONS__;
        Z();
        y();
        T();
        b();
        var sc = __STORYBOOK_COMPONENTS__
          , {A: dc, AbstractToolbar: uc, ActionBar: pc, ActionList: mc, AddonPanel: Se, Badge: fe, Bar: hc, Blockquote: Ic, Button: ye, Card: gc, ClipboardCode: Sc, Code: k, Collapsible: fc, DL: yc, Div: Tc, DocumentWrapper: bc, EmptyTabContent: xc, ErrorFormatter: Rc, FlexBar: vc, Form: _c, H1: Cc, H2: Ac, H3: Ec, H4: Fc, H5: Pc, H6: Nc, HR: kc, IconButton: Oc, Img: Dc, LI: Mc, Link: Lc, ListItem: wc, Loader: Bc, Modal: Wc, ModalDecorator: Gc, OL: Uc, P: Hc, Placeholder: $c, Popover: Te, PopoverProvider: zc, Pre: Vc, ProgressSpinner: Yc, ResetWrapper: jc, ScrollArea: Kc, Select: qc, Separator: Jc, Spaced: Zc, Span: Qc, StatelessTab: Xc, StatelessTabList: es, StatelessTabPanel: ns, StatelessTabsView: ts, StorybookIcon: rs, StorybookLogo: os, SyntaxHighlighter: is, TT: as, TabBar: ls, TabButton: cs, TabList: ss, TabPanel: ds, TabWrapper: us, Table: ps, Tabs: ms, TabsState: hs, TabsView: Is, ToggleButton: gs, Toolbar: Ss, Tooltip: fs, TooltipLinkList: ys, TooltipMessage: Ts, TooltipNote: bs, TooltipProvider: xs, UL: Rs, WithTooltip: be, WithTooltipPure: vs, Zoom: _s, codeCommon: Cs, components: As, convertToReactAriaPlacement: Es, createCopyToClipboardFunction: Fs, getStoryHref: Ps, interleaveSeparators: Ns, nameSpaceClassNames: ks, resetComponents: Os, useTabsState: Ds, withReset: Ms} = __STORYBOOK_COMPONENTS__;
        y();
        T();
        b();
        var Gs = __STORYBOOK_THEMING__
          , {CacheProvider: Us, ClassNames: Hs, Global: $s, ThemeProvider: zs, background: Vs, color: Ys, convert: js, create: Ks, createCache: qs, createGlobal: Js, createReset: Zs, css: Qs, darken: Xs, ensure: ed, getPreferredColorScheme: nd, ignoreSsrWarning: td, isPropValid: rd, jsx: od, keyframes: id, lighten: ad, styled: p, themes: ld, tokens: cd, typography: sd, useTheme: xe, withTheme: dd} = __STORYBOOK_THEMING__;
        var e = Ge(Ce(), 1);
        function Nn(n, t) {
            if (n.length === 0)
                return 0;
            if (n.length === 1)
                return n[0];
            let r = [...n].sort( (d, c) => d - c)
              , i = t * (r.length - 1)
              , a = Math.floor(i)
              , s = Math.ceil(i)
              , l = i - a;
            return a === s ? r[a] : r[a] + l * (r[s] - r[a])
        }
        function kn(n) {
            let t = Nn(n, .95);
            return Math.round(t * 10) / 10
        }
        var On = p.div( ({theme: n}) => ({
            display: "flex",
            fontFamily: n.typography.fonts.mono,
            fontSize: "11px",
            lineHeight: 1.4,
            color: n.color.defaultText,
            height: "100%",
            background: n.background.content
        }))
          , Dn = p.div({
            flex: 1,
            overflow: "auto",
            padding: "4px"
        })
          , Mn = p.div( ({theme: n}) => ({
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "4px",
            padding: "4px",
            borderLeft: `1px solid ${n.appBorderColor}`,
            background: n.barBg
        }))
          , Ln = p.div({
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "4px"
        })
          , te = p.section( ({theme: n}) => ({
            background: n.background.app,
            borderRadius: n.appBorderRadius,
            border: `1px solid ${n.appBorderColor}`
        }))
          , re = p.header( ({theme: n}) => ({
            padding: "4px 8px",
            background: n.barBg,
            borderBottom: `1px solid ${n.appBorderColor}`,
            display: "flex",
            alignItems: "center",
            gap: "4px"
        }))
          , oe = p.h3( ({theme: n}) => ({
            margin: 0,
            fontSize: "10px",
            fontWeight: n.typography.weight.bold,
            textTransform: "uppercase",
            letterSpacing: "0.5px",
            color: n.color.defaultText
        }))
          , ie = p.span({
            fontSize: "12px"
        })
          , Fe = p.dl({
            margin: 0,
            padding: "2px 0"
        })
          , Pe = p.div( ({theme: n}) => ({
            display: "grid",
            gridTemplateColumns: "1fr auto",
            alignItems: "center",
            gap: "1px 6px",
            padding: "2px 8px",
            minHeight: "20px",
            borderBottom: `1px solid ${n.appBorderColor}`,
            position: "relative",
            "&:last-child": {
                borderBottom: "none"
            }
        }))
          , wn = p(Pe)({
            minHeight: "36px",
            alignItems: "start"
        })
          , Bn = p.dt( ({theme: n}) => ({
            display: "flex",
            alignItems: "center",
            gap: "4px",
            fontSize: "10px",
            color: n.color.mediumdark,
            margin: 0,
            gridColumn: "1",
            gridRow: "1 / -1",
            alignSelf: "center",
            minHeight: "16px"
        }))
          , Wn = p.dd( ({theme: n}) => ({
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            gap: "6px",
            fontSize: "11px",
            fontWeight: n.typography.weight.bold,
            fontFamily: n.typography.fonts.mono,
            color: n.color.defaultText,
            margin: 0,
            textAlign: "right",
            gridColumn: "2",
            minWidth: "60px",
            minHeight: "16px"
        }))
          , Gn = p.dd( ({theme: n}) => ({
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            gap: "4px",
            fontSize: "9px",
            fontWeight: "normal",
            fontFamily: n.typography.fonts.mono,
            color: n.color.mediumdark,
            margin: 0,
            textAlign: "right",
            gridColumn: "2",
            flexWrap: "wrap",
            minHeight: "14px",
            minWidth: "130px"
        }))
          , _ = p.span( ({theme: n}) => ({
            fontSize: "10px",
            fontWeight: "normal",
            color: n.color.mediumdark
        }))
          , Un = p.button( ({theme: n}) => ({
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: "11px",
            height: "11px",
            fontSize: "8px",
            fontWeight: 600,
            fontStyle: "italic",
            fontFamily: "Georgia, serif",
            borderRadius: "50%",
            border: `1px solid ${n.color.mediumdark}`,
            color: n.color.mediumdark,
            background: "transparent",
            padding: 0,
            userSelect: "none",
            lineHeight: 1,
            cursor: "help",
            "&:focus": {
                outline: "none",
                boxShadow: `0 0 0 1px ${n.color.secondary}`
            },
            "&:focus-visible": {
                outline: "none",
                boxShadow: `0 0 0 2px ${n.color.secondary}`
            }
        }))
          , Ae = p.div({
            display: "flex",
            alignItems: "center",
            height: "16px"
        })
          , Hn = p.div({
            gridColumn: "1 / -1",
            display: "flex",
            justifyContent: "flex-end",
            paddingBottom: "1px"
        })
          , L = p.div( ({theme: n}) => ({
            padding: "24px",
            textAlign: "center",
            color: n.color.mediumdark
        }))
          , w = p.p( ({theme: n}) => ({
            fontSize: "12px",
            color: n.color.defaultText,
            marginBottom: "8px"
        }))
          , W = p.p( ({theme: n}) => ({
            fontSize: "10px",
            color: n.color.mediumdark,
            opacity: .7,
            margin: 0
        }))
          , ee = p.p( ({theme: n}) => ({
            fontSize: "10px",
            color: n.color.mediumdark,
            margin: 0
        }))
          , Y = p(_)( () => ({
            fontStyle: "italic"
        }))
          , Q = p.button( ({theme: n}) => ({
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1px 4px",
            fontSize: "9px",
            fontFamily: n.typography.fonts.mono,
            borderRadius: "3px",
            border: `1px solid ${n.color.mediumdark}`,
            color: n.color.mediumdark,
            background: "transparent",
            cursor: "pointer",
            marginLeft: "4px",
            transition: "all 0.15s ease",
            "&:hover": {
                background: n.color.secondary,
                borderColor: n.color.secondary,
                color: n.color.lightest
            },
            "&:focus": {
                outline: "none",
                boxShadow: `0 0 0 1px ${n.color.secondary}`
            },
            "&:active": {
                transform: "scale(0.95)"
            }
        }))
          , $n = p.span( () => ({
            display: "inline-flex",
            alignItems: "center",
            gap: "1px",
            padding: "1px 4px",
            fontSize: "7px",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.3px",
            borderRadius: "3px",
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            color: "#fff",
            marginLeft: "4px",
            boxShadow: "0 1px 2px rgba(102, 126, 234, 0.3)",
            "&::before": {
                content: '"\u26A1"',
                fontSize: "7px"
            }
        }))
          , Ee = p.span( ({theme: n}) => ({
            display: "inline-flex",
            alignItems: "center",
            gap: "1px",
            fontSize: "8px",
            fontFamily: n.typography.fonts.mono
        }))
          , B = p.span( ({theme: n, phase: t}) => {
            let r = {
                delay: n.color.warning,
                process: n.color.secondary,
                paint: n.color.positive
            };
            return {
                display: "inline-flex",
                alignItems: "center",
                gap: "1px",
                padding: "0px 2px",
                borderRadius: "2px",
                background: `${r[t]}22`,
                color: r[t],
                minWidth: "36px",
                "& > abbr": {
                    textDecoration: "none",
                    fontWeight: 600,
                    fontSize: "7px",
                    textTransform: "uppercase",
                    marginRight: "1px",
                    opacity: .8
                },
                "&::after": {
                    content: '"ms"',
                    fontSize: "6px",
                    opacity: .7,
                    marginLeft: "1px"
                }
            }
        }
        )
          , z = p.span( ({theme: n}) => ({
            color: n.color.mediumdark,
            fontSize: "7px",
            padding: "0 1px"
        }));
        p.div( ({theme: n}) => ({
            display: "flex",
            alignItems: "center",
            gap: "2px",
            padding: "4px 8px",
            borderBottom: `1px solid ${n.appBorderColor}`,
            background: n.barBg,
            flexWrap: "wrap"
        }));
        var zn = p.button( ({theme: n, isSelected: t}) => ({
            display: "inline-flex",
            alignItems: "center",
            gap: "4px",
            padding: "3px 8px",
            fontSize: "9px",
            fontFamily: n.typography.fonts.mono,
            fontWeight: t ? n.typography.weight.bold : "normal",
            borderRadius: "3px",
            border: t ? `1px solid ${n.color.secondary}` : `1px solid ${n.appBorderColor}`,
            color: t ? n.color.secondary : n.color.mediumdark,
            background: t ? `${n.color.secondary}11` : "transparent",
            cursor: "pointer",
            transition: "all 0.15s ease",
            "&:hover": {
                borderColor: n.color.secondary,
                color: n.color.secondary,
                background: `${n.color.secondary}08`
            },
            "&:focus": {
                outline: "none",
                boxShadow: `0 0 0 1px ${n.color.secondary}`
            }
        }));
        p.span( ({theme: n}) => ({
            fontSize: "8px",
            fontWeight: n.typography.weight.bold,
            textTransform: "uppercase",
            letterSpacing: "0.5px",
            color: n.color.mediumdark,
            marginRight: "4px"
        }));
        p.span( ({theme: n}) => ({
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            minWidth: "16px",
            height: "14px",
            padding: "0 4px",
            fontSize: "9px",
            fontWeight: n.typography.weight.bold,
            borderRadius: "7px",
            background: n.color.secondary,
            color: n.color.lightest
        }));
        p(zn)({
            fontStyle: "italic"
        });
        var Vn = new Intl.NumberFormat("en-US",{
            style: "unit",
            unit: "millisecond",
            unitDisplay: "narrow",
            minimumFractionDigits: 1,
            maximumFractionDigits: 1
        })
          , D = n => Vn.format(n)
          , Yn = new Intl.NumberFormat("en-US",{
            style: "unit",
            unit: "megabyte",
            unitDisplay: "narrow",
            minimumFractionDigits: 1,
            maximumFractionDigits: 1
        })
          , V = n => Yn.format(n)
          , jn = new Intl.NumberFormat("en-US")
          , Kn = n => jn.format(n)
          , qn = new Intl.NumberFormat("en-US",{
            minimumFractionDigits: 3,
            maximumFractionDigits: 3
        })
          , X = n => qn.format(n)
          , Jn = n => `${Math.round(n)}%`
          , Zn = new Intl.NumberFormat("en-US",{
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        })
          , Qn = (n, t) => `${Zn.format(n)} ${t}`
          , M = "primer-performance-monitor"
          , Xn = `${M}/panel`
          , O = {
            METRICS_UPDATE: `${M}/metrics-update`,
            RESET: `${M}/reset`,
            REQUEST_METRICS: `${M}/request-metrics`,
            INSPECT_ELEMENT: `${M}/inspect-element`,
            PROFILER_UPDATE: `${M}/profiler-update`
        }
          , h = {
            FPS_GOOD: 55,
            FPS_WARNING: 30,
            FRAME_TIME_TARGET: 16.67,
            FRAME_TIME_WARNING: 32,
            DROPPED_FRAMES_WARNING: 10,
            INPUT_LATENCY_GOOD: 16,
            INPUT_LATENCY_WARNING: 50,
            INP_GOOD: 200,
            INP_WARNING: 500,
            LONG_TASKS_WARNING: 5,
            TBT_WARNING: 200,
            LOAF_COUNT_WARNING: 5,
            LOAF_DURATION_WARNING: 100,
            LOAF_BLOCKING_WARNING: 200,
            CLS_GOOD: .1,
            CLS_WARNING: .25,
            FORCED_REFLOW_WARNING: 5,
            DOM_MUTATIONS_WARNING: 50,
            CASCADE_WARNING: 3,
            SLOW_UPDATES_WARNING: 3,
            REACT_P95_WARNING: 8,
            MEMORY_DELTA_WARNING: 5,
            MEMORY_DELTA_DANGER: 20,
            GC_PRESSURE_WARNING: 1,
            LAYERS_WARNING: 20
        }
          , Ne = {
            fps: 0,
            frameTime: 0,
            maxFrameTime: 0,
            droppedFrames: 0,
            frameJitter: 0,
            frameStability: 100,
            inputLatency: 0,
            maxInputLatency: 0,
            inputJitter: 0,
            eventTimingSupported: !0,
            interactionCount: 0,
            inpMs: 0,
            firstInputDelay: null,
            firstInputType: null,
            lastInteraction: null,
            slowestInteraction: null,
            interactionsByType: {},
            paintTime: 0,
            maxPaintTime: 0,
            paintCount: 0,
            paintJitter: 0,
            memoryUsedMB: null,
            memoryDeltaMB: null,
            peakMemoryMB: null,
            gcPressure: 0,
            fpsHistory: [],
            frameTimeHistory: [],
            memoryHistory: [],
            longTasks: 0,
            longestTask: 0,
            totalBlockingTime: 0,
            loafSupported: !0,
            loafCount: 0,
            totalLoafBlockingDuration: 0,
            longestLoafDuration: 0,
            longestLoafBlockingDuration: 0,
            avgLoafDuration: 0,
            p95LoafDuration: 0,
            loafsWithScripts: 0,
            lastLoaf: null,
            worstLoaf: null,
            styleWrites: 0,
            thrashingScore: 0,
            layoutShiftScore: 0,
            layoutShiftCount: 0,
            currentSessionCLS: 0,
            forcedReflowCount: 0,
            domMutationsPerFrame: 0,
            cssVarChanges: 0,
            reactRenderCount: 0,
            reactMountCount: 0,
            reactMountDuration: 0,
            reactPostMountUpdateCount: 0,
            reactPostMountMaxDuration: 0,
            reactP95Duration: 0,
            slowReactUpdates: 0,
            renderCascades: 0,
            domElements: null,
            scriptEvalTime: 0,
            eventListenerCount: 0,
            observerCount: 0,
            compositorLayers: null,
            elementTimingSupported: !0,
            elementTimingCount: 0,
            largestElementRenderTime: 0,
            elementTimings: []
        };
        function et(n, t, r, i=!1) {
            return i ? n >= t ? "success" : n >= r ? "warning" : "error" : n <= t ? "success" : n <= r ? "warning" : "error"
        }
        function nt(n) {
            return n === 0 ? "success" : "error"
        }
        var tt = {
            success: "positive",
            warning: "warning",
            error: "negative",
            neutral: "neutral"
        }
          , m = S.memo(function({variant: t, children: r}) {
            return (0,
            e.jsx)(fe, {
                status: tt[t],
                children: r
            })
        })
          , ne = S.memo(function({data: t, width: r=80, height: i=20, goodThreshold: a, badThreshold: s, higherIsBetter: l=!1}) {
            let d = xe()
              , {pathData: c, min: o, max: I, currentValue: g, getY: R} = S.useMemo( () => {
                if (t.length < 2)
                    return {
                        pathData: "",
                        min: 0,
                        max: 0,
                        currentValue: 0,
                        getY: () => i / 2
                    };
                let A = 2
                  , ae = r - A * 2
                  , le = i - A * 2
                  , K = Math.min(...t)
                  , ce = Math.max(...t)
                  , ke = ce - K || 1
                  , Oe = G => A + G / (t.length - 1) * ae
                  , se = G => A + le - (G - K) / ke * le;
                return {
                    pathData: t.map( (G, de) => `${de === 0 ? "M" : "L"} ${Oe(de).toFixed(1)} ${se(G).toFixed(1)}`).join(" "),
                    min: K,
                    max: ce,
                    currentValue: t[t.length - 1] ?? NaN,
                    getY: se
                }
            }
            , [t, r, i]);
            if (t.length < 2)
                return (0,
                e.jsx)(Ae, {
                    children: (0,
                    e.jsx)("svg", {
                        width: r,
                        height: i,
                        "aria-hidden": "true",
                        children: (0,
                        e.jsx)("line", {
                            x1: 0,
                            y1: i / 2,
                            x2: r,
                            y2: i / 2,
                            stroke: d.color.medium,
                            strokeWidth: 1,
                            strokeDasharray: "3,3"
                        })
                    })
                });
            let x = 2
              , E = A => x + A / (t.length - 1) * (r - x * 2)
              , v = d.color.secondary;
            if (a !== void 0) {
                let A = l ? g >= a : g <= a;
                s !== void 0 && (l ? g < s : g > s) ? v = d.color.negative : A ? v = d.color.positive : v = d.color.warning
            }
            return (0,
            e.jsx)(Ae, {
                children: (0,
                e.jsxs)("svg", {
                    width: r,
                    height: i,
                    "aria-hidden": "true",
                    children: [a !== void 0 && a >= o && a <= I && (0,
                    e.jsx)("line", {
                        x1: x,
                        y1: R(a),
                        x2: r - x,
                        y2: R(a),
                        stroke: d.color.medium,
                        strokeWidth: 1,
                        strokeDasharray: "2,2",
                        opacity: .5
                    }), (0,
                    e.jsx)("path", {
                        d: c,
                        fill: "none",
                        stroke: v,
                        strokeWidth: 1.5,
                        strokeLinecap: "round"
                    }), (0,
                    e.jsx)("circle", {
                        cx: E(t.length - 1),
                        cy: R(g),
                        r: 2.5,
                        fill: v
                    })]
                })
            })
        })
          , f = et
          , j = nt
          , u = S.memo(function({label: t, tooltip: r, sparkline: i, isWebVital: a, detail: s, reserveDetailSpace: l, children: d}) {
            let c = s || l;
            return (0,
            e.jsxs)(c ? wn : Pe, {
                children: [i ? (0,
                e.jsx)(Hn, {
                    children: i
                }) : null, (0,
                e.jsxs)(Bn, {
                    children: [t, a && (0,
                    e.jsx)($n, {
                        children: "Vital"
                    }), r && (0,
                    e.jsx)(be, {
                        tooltip: (0,
                        e.jsx)(Te, {
                            hasChrome: !1,
                            children: r
                        }),
                        closeOnOutsideClick: !0,
                        children: (0,
                        e.jsx)(Un, {
                            type: "button",
                            "aria-label": `Info about ${t}`,
                            children: "i"
                        })
                    })]
                }), (0,
                e.jsx)(Wn, {
                    children: d
                }), c ? (0,
                e.jsx)(Gn, {
                    children: s
                }) : null]
            })
        })
          , C = S.memo(function({icon: t, title: r, children: i}) {
            return (0,
            e.jsxs)(te, {
                children: [(0,
                e.jsxs)(re, {
                    children: [(0,
                    e.jsx)(ie, {
                        children: t
                    }), (0,
                    e.jsx)(oe, {
                        children: r
                    })]
                }), (0,
                e.jsx)(Fe, {
                    children: i
                })]
            })
        })
          , rt = S.memo(function({fps: t, fpsHistory: r, frameTime: i, maxFrameTime: a, frameTimeHistory: s, droppedFrames: l, frameJitter: d, frameStability: c, paintTime: o, maxPaintTime: I, paintJitter: g}) {
            let R = f(t, h.FPS_GOOD, h.FPS_WARNING, !0)
              , x = l > h.DROPPED_FRAMES_WARNING ? "error" : l > 0 ? "warning" : "success"
              , E = j(d)
              , v = c >= 90 ? "success" : c >= 70 ? "warning" : "error"
              , A = j(g);
            return (0,
            e.jsxs)(C, {
                icon: "\u{1F4CA}",
                title: "Frame Timing",
                children: [(0,
                e.jsx)(u, {
                    label: "FPS",
                    tooltip: "Frames per second. Target: 60fps. Below 30 causes visible stuttering.",
                    sparkline: (0,
                    e.jsx)(ne, {
                        data: r,
                        goodThreshold: h.FPS_GOOD,
                        badThreshold: h.FPS_WARNING,
                        higherIsBetter: !0
                    }),
                    children: (0,
                    e.jsx)(m, {
                        variant: R,
                        children: t
                    })
                }), (0,
                e.jsx)(u, {
                    label: "Frame Time",
                    tooltip: "Average time per frame. Target: \u226416.67ms for 60fps.",
                    sparkline: (0,
                    e.jsx)(ne, {
                        data: s,
                        goodThreshold: h.FRAME_TIME_TARGET,
                        badThreshold: h.FRAME_TIME_WARNING
                    }),
                    detail: (0,
                    e.jsxs)(e.Fragment, {
                        children: ["max ", D(a)]
                    }),
                    children: D(i)
                }), (0,
                e.jsx)(u, {
                    label: "Dropped Frames",
                    tooltip: "Frames taking >2\xD7 expected time. High count indicates stuttering.",
                    children: (0,
                    e.jsxs)(m, {
                        variant: x,
                        children: [(0,
                        e.jsx)("span", {
                            children: l
                        }), l === 0 ? (0,
                        e.jsx)("span", {
                            children: " \u2728"
                        }) : (0,
                        e.jsx)("span", {
                            children: " \u{1F4A7}"
                        })]
                    })
                }), (0,
                e.jsx)(u, {
                    label: "Frame Jitter",
                    tooltip: "Sudden spikes in frame time vs recent baseline. Indicates inconsistent rendering.",
                    children: (0,
                    e.jsx)(m, {
                        variant: E,
                        children: d === 0 ? "\u2728 Smooth" : `\u26A1 ${d} spikes`
                    })
                }), (0,
                e.jsx)(u, {
                    label: "Frame Stability",
                    tooltip: "Frame time consistency (0-100%). 100% = perfectly smooth, lower = choppy/variable frame pacing.",
                    children: (0,
                    e.jsxs)(m, {
                        variant: v,
                        children: [(0,
                        e.jsx)("span", {
                            children: c >= 90 ? "\u{1F3AF} " : c >= 70 ? "\u{1F4CA} " : "\u{1F4C9} "
                        }), (0,
                        e.jsxs)("span", {
                            children: [c, "%"]
                        })]
                    })
                }), (0,
                e.jsxs)(u, {
                    label: "Paint Time",
                    tooltip: "Browser rendering time via double-RAF technique.",
                    children: [D(o), (0,
                    e.jsxs)(_, {
                        children: ["/ ", D(I), " max"]
                    })]
                }), (0,
                e.jsx)(u, {
                    label: "Paint Jitter",
                    tooltip: "Sudden spikes in paint time vs recent baseline. Indicates rendering inconsistency.",
                    children: (0,
                    e.jsx)(m, {
                        variant: A,
                        children: g === 0 ? "\u2728 None" : `\u{1F3A2} ${g} spikes`
                    })
                })]
            })
        })
          , ot = S.memo(function({inputLatency: t, maxInputLatency: r, eventTimingSupported: i, inpMs: a, interactionCount: s, firstInputDelay: l, firstInputType: d, lastInteraction: c, slowestInteraction: o, onInspectElement: I}) {
            let g = f(t, h.INPUT_LATENCY_GOOD, h.INPUT_LATENCY_WARNING)
              , R = f(a, h.INP_GOOD, h.INP_WARNING)
              , x = v => v ? f(v.duration, h.INP_GOOD, h.INP_WARNING) : "neutral"
              , E = v => {
                v && v !== "unknown" && I && I(v)
            }
            ;
            return (0,
            e.jsxs)(C, {
                icon: "\u{1F446}",
                title: "Input Responsiveness",
                children: [(0,
                e.jsx)(u, {
                    label: "INP",
                    isWebVital: !0,
                    tooltip: "Interaction to Next Paint - p98 worst click/key latency. Core Web Vital. Good: \u2264200ms, Poor: >500ms.",
                    reserveDetailSpace: !0,
                    detail: i && s > 0 ? (0,
                    e.jsxs)(e.Fragment, {
                        children: [s, " interactions", o && o.targetSelector !== "unknown" && (0,
                        e.jsxs)(e.Fragment, {
                            children: [(0,
                            e.jsx)("span", {
                                children: "\xB7"
                            }), (0,
                            e.jsx)("span", {
                                children: "worst:"
                            }), (0,
                            e.jsx)(k, {
                                children: o.targetSelector.slice(0, 20)
                            }), (0,
                            e.jsx)(Q, {
                                onClick: () => E(o.targetSelector),
                                title: "Inspect slowest interaction element",
                                children: "\u{1F50D}"
                            })]
                        })]
                    }) : null,
                    children: i ? s > 0 ? (0,
                    e.jsxs)(m, {
                        variant: R,
                        children: [Math.round(a), "ms"]
                    }) : (0,
                    e.jsx)(_, {
                        children: "\u2014"
                    }) : (0,
                    e.jsx)(Y, {
                        children: "Chrome/Edge only"
                    })
                }), (0,
                e.jsx)(u, {
                    label: "Last Interaction",
                    tooltip: "Most recent user interaction. Shows timing breakdown: input delay (waiting) \u2192 processing (JS) \u2192 paint (render).",
                    reserveDetailSpace: !0,
                    detail: i && c ? (0,
                    e.jsxs)(e.Fragment, {
                        children: [c.eventType, (0,
                        e.jsx)("span", {
                            children: "\xB7"
                        }), (0,
                        e.jsxs)(Ee, {
                            children: [(0,
                            e.jsxs)(B, {
                                phase: "delay",
                                children: [(0,
                                e.jsx)("abbr", {
                                    title: "Input delay - time waiting for main thread",
                                    children: "wait"
                                }), Math.round(c.inputDelay)]
                            }), (0,
                            e.jsx)(z, {
                                children: "\u2192"
                            }), (0,
                            e.jsxs)(B, {
                                phase: "process",
                                children: [(0,
                                e.jsx)("abbr", {
                                    title: "Processing time - event handler execution",
                                    children: "js"
                                }), Math.round(c.processingTime)]
                            }), (0,
                            e.jsx)(z, {
                                children: "\u2192"
                            }), (0,
                            e.jsxs)(B, {
                                phase: "paint",
                                children: [(0,
                                e.jsx)("abbr", {
                                    title: "Presentation delay - render and paint",
                                    children: "paint"
                                }), Math.round(c.presentationDelay)]
                            })]
                        }), c.targetSelector !== "unknown" && (0,
                        e.jsxs)(e.Fragment, {
                            children: [(0,
                            e.jsx)("span", {
                                children: "\xB7"
                            }), (0,
                            e.jsx)(k, {
                                children: c.targetSelector.slice(0, 18)
                            }), (0,
                            e.jsx)(Q, {
                                onClick: () => E(c.targetSelector),
                                title: "Highlight element in preview",
                                children: "\u{1F50D}"
                            })]
                        })]
                    }) : null,
                    children: i ? c ? (0,
                    e.jsxs)(m, {
                        variant: x(c),
                        children: [Math.round(c.duration), "ms"]
                    }) : (0,
                    e.jsx)(_, {
                        children: "\u2014"
                    }) : (0,
                    e.jsx)(Y, {
                        children: "Chrome/Edge only"
                    })
                }), (0,
                e.jsx)(u, {
                    label: "Slowest",
                    tooltip: "Slowest interaction observed during this session. Shows timing breakdown.",
                    reserveDetailSpace: !0,
                    detail: i && o ? (0,
                    e.jsxs)(e.Fragment, {
                        children: [o.eventType, (0,
                        e.jsx)("span", {
                            children: "\xB7"
                        }), (0,
                        e.jsxs)(Ee, {
                            children: [(0,
                            e.jsxs)(B, {
                                phase: "delay",
                                children: [(0,
                                e.jsx)("abbr", {
                                    title: "Input delay - time waiting for main thread",
                                    children: "wait"
                                }), Math.round(o.inputDelay)]
                            }), (0,
                            e.jsx)(z, {
                                children: "\u2192"
                            }), (0,
                            e.jsxs)(B, {
                                phase: "process",
                                children: [(0,
                                e.jsx)("abbr", {
                                    title: "Processing time - event handler execution",
                                    children: "js"
                                }), Math.round(o.processingTime)]
                            }), (0,
                            e.jsx)(z, {
                                children: "\u2192"
                            }), (0,
                            e.jsxs)(B, {
                                phase: "paint",
                                children: [(0,
                                e.jsx)("abbr", {
                                    title: "Presentation delay - render and paint",
                                    children: "paint"
                                }), Math.round(o.presentationDelay)]
                            })]
                        }), o.targetSelector !== "unknown" && (0,
                        e.jsxs)(e.Fragment, {
                            children: [(0,
                            e.jsx)("span", {
                                children: "\xB7"
                            }), (0,
                            e.jsx)(k, {
                                children: o.targetSelector.slice(0, 18)
                            }), (0,
                            e.jsx)(Q, {
                                onClick: () => E(o.targetSelector),
                                title: "Highlight element in preview",
                                children: "\u{1F50D}"
                            })]
                        })]
                    }) : null,
                    children: i ? o ? (0,
                    e.jsxs)(m, {
                        variant: x(o),
                        children: [Math.round(o.duration), "ms"]
                    }) : (0,
                    e.jsx)(_, {
                        children: "\u2014"
                    }) : (0,
                    e.jsx)(Y, {
                        children: "Chrome/Edge only"
                    })
                }), (0,
                e.jsx)(u, {
                    label: "FID",
                    isWebVital: !0,
                    tooltip: "First Input Delay - latency of the very first interaction. Core Web Vital. Good: \u2264100ms, Poor: >300ms.",
                    reserveDetailSpace: !0,
                    detail: d ? (0,
                    e.jsx)(e.Fragment, {
                        children: d
                    }) : null,
                    children: l !== null ? (0,
                    e.jsxs)(m, {
                        variant: f(l, 100, 300),
                        children: [Math.round(l), "ms"]
                    }) : (0,
                    e.jsx)(_, {
                        children: "\u2014"
                    })
                }), (0,
                e.jsxs)(u, {
                    label: "Pointer Latency",
                    tooltip: "Time from pointer move to next frame. High values indicate main thread contention.",
                    children: [(0,
                    e.jsx)(m, {
                        variant: g,
                        children: D(t)
                    }), (0,
                    e.jsxs)(_, {
                        children: ["/ ", D(r), " max"]
                    })]
                })]
            })
        })
          , it = S.memo(function({longTasks: t, longestTask: r, totalBlockingTime: i, thrashingScore: a, domMutationsPerFrame: s}) {
            let l = f(t, 0, h.LONG_TASKS_WARNING)
              , d = f(i, 0, h.TBT_WARNING)
              , c = j(a)
              , o = f(s, 0, h.DOM_MUTATIONS_WARNING);
            return (0,
            e.jsxs)(C, {
                icon: "\u23F1\uFE0F",
                title: "Main Thread",
                children: [(0,
                e.jsx)(u, {
                    label: "Long Tasks",
                    tooltip: "Tasks blocking main thread >50ms. Target: 0 during interactions.",
                    detail: r > 0 ? (0,
                    e.jsxs)(e.Fragment, {
                        children: ["longest: ", Math.round(r), "ms"]
                    }) : null,
                    children: (0,
                    e.jsxs)(m, {
                        variant: l,
                        children: [(0,
                        e.jsx)("span", {
                            children: t === 0 ? "\u2728 " : "\u{1F422} "
                        }), (0,
                        e.jsx)("span", {
                            children: t
                        })]
                    })
                }), (0,
                e.jsx)(u, {
                    label: "TBT",
                    isWebVital: !0,
                    tooltip: "Total Blocking Time - sum of time beyond 50ms for each long task. Correlates to TTI. Good: <200ms, Poor: >600ms.",
                    children: (0,
                    e.jsxs)(m, {
                        variant: d,
                        children: [(0,
                        e.jsx)("span", {
                            children: i === 0 ? "\u{1F680} " : i > 600 ? "\u{1F9F1} " : "\u23F3 "
                        }), (0,
                        e.jsxs)("span", {
                            children: [i, "ms"]
                        })]
                    })
                }), (0,
                e.jsx)(u, {
                    label: "Thrashing",
                    tooltip: "Frame blocking >50ms near style writes. Indicates forced synchronous layout.",
                    children: (0,
                    e.jsx)(m, {
                        variant: c,
                        children: a === 0 ? "\u2728 None" : `\u{1F504} ${a} stalls`
                    })
                }), (0,
                e.jsxs)(u, {
                    label: "DOM Churn",
                    tooltip: "DOM mutations per sample period. High values indicate excessive re-rendering.",
                    children: [(0,
                    e.jsxs)(m, {
                        variant: o,
                        children: [(0,
                        e.jsx)("span", {
                            children: s === 0 ? "\u2728 " : s > 10 ? "\u{1F32A}\uFE0F " : "\u{1F528} "
                        }), (0,
                        e.jsx)("span", {
                            children: s
                        })]
                    }), (0,
                    e.jsx)(_, {
                        children: "/period"
                    })]
                })]
            })
        })
          , at = S.memo(function({loafSupported: t, loafCount: r, totalLoafBlockingDuration: i, longestLoafDuration: a, longestLoafBlockingDuration: s, avgLoafDuration: l, p95LoafDuration: d, loafsWithScripts: c, worstLoaf: o}) {
            if (!t)
                return (0,
                e.jsx)(C, {
                    icon: "\u{1F39E}\uFE0F",
                    title: "Long Animation Frames",
                    children: (0,
                    e.jsx)(u, {
                        label: "Status",
                        tooltip: "Long Animation Frames API is only supported in Chrome 123+",
                        children: (0,
                        e.jsx)(m, {
                            variant: "neutral",
                            children: (0,
                            e.jsx)("span", {
                                children: "\u26A0\uFE0F Not supported"
                            })
                        })
                    })
                });
            let I = f(r, 0, h.LOAF_COUNT_WARNING)
              , g = f(i, 0, h.LOAF_BLOCKING_WARNING)
              , R = f(a, 0, h.LOAF_DURATION_WARNING);
            return (0,
            e.jsxs)(C, {
                icon: "\u{1F39E}\uFE0F",
                title: "Long Animation Frames",
                children: [(0,
                e.jsx)(u, {
                    label: "LoAF Count",
                    tooltip: "Count of animation frames exceeding 50ms. More detailed than Long Tasks - includes rendering attribution.",
                    detail: c > 0 ? (0,
                    e.jsxs)(e.Fragment, {
                        children: [c, " with scripts"]
                    }) : null,
                    children: (0,
                    e.jsxs)(m, {
                        variant: I,
                        children: [(0,
                        e.jsx)("span", {
                            children: r === 0 ? "\u2728 " : r > 10 ? "\u{1F422} " : "\u26A0\uFE0F "
                        }), (0,
                        e.jsx)("span", {
                            children: r
                        })]
                    })
                }), (0,
                e.jsx)(u, {
                    label: "Blocking",
                    tooltip: "Total blocking duration from all LoAFs (time beyond 50ms threshold). Good: <200ms, Poor: >500ms.",
                    detail: s > 0 ? (0,
                    e.jsxs)(e.Fragment, {
                        children: ["worst: ", s, "ms"]
                    }) : null,
                    children: (0,
                    e.jsxs)(m, {
                        variant: g,
                        children: [(0,
                        e.jsx)("span", {
                            children: i === 0 ? "\u{1F680} " : i > 500 ? "\u{1F9F1} " : "\u23F3 "
                        }), (0,
                        e.jsxs)("span", {
                            children: [i, "ms"]
                        })]
                    })
                }), (0,
                e.jsx)(u, {
                    label: "Longest",
                    tooltip: "Duration of the longest long animation frame. Good: <100ms, Poor: >200ms.",
                    detail: l > 0 ? (0,
                    e.jsxs)(e.Fragment, {
                        children: ["avg: ", l, "ms"]
                    }) : null,
                    children: (0,
                    e.jsxs)(m, {
                        variant: R,
                        children: [(0,
                        e.jsx)("span", {
                            children: a === 0 ? "\u2728 " : a > 200 ? "\u{1F40C} " : "\u23F1\uFE0F "
                        }), (0,
                        e.jsxs)("span", {
                            children: [a, "ms"]
                        })]
                    })
                }), (0,
                e.jsx)(u, {
                    label: "P95 Duration",
                    tooltip: "95th percentile LoAF duration. Shows worst-case frame times.",
                    children: (0,
                    e.jsxs)(m, {
                        variant: f(d, 0, h.LOAF_DURATION_WARNING),
                        children: [(0,
                        e.jsx)("span", {
                            children: d === 0 ? "\u2728 " : "\u{1F4CA} "
                        }), (0,
                        e.jsxs)("span", {
                            children: [d, "ms"]
                        })]
                    })
                }), o && o.topScript && (0,
                e.jsxs)(u, {
                    label: "Top Script",
                    tooltip: `Worst LoAF caused by: ${o.topScript.invokerType} (${o.topScript.invoker})`,
                    children: [(0,
                    e.jsx)(k, {
                        style: {
                            fontSize: "10px",
                            maxWidth: "150px",
                            overflow: "hidden",
                            textOverflow: "ellipsis"
                        },
                        children: o.topScript.sourceFunctionName || o.topScript.invoker
                    }), (0,
                    e.jsxs)(_, {
                        children: [Math.round(o.topScript.duration), "ms"]
                    })]
                })]
            })
        })
          , lt = S.memo(function({elementTimingSupported: t, elementTimingCount: r, largestElementRenderTime: i, elementTimings: a}) {
            if (!t)
                return (0,
                e.jsx)(C, {
                    icon: "\u{1F3AF}",
                    title: "Element Timing",
                    children: (0,
                    e.jsx)(u, {
                        label: "Status",
                        tooltip: "Element Timing API is only supported in Chromium browsers",
                        children: (0,
                        e.jsx)(m, {
                            variant: "neutral",
                            children: (0,
                            e.jsx)("span", {
                                children: "\u26A0\uFE0F Not supported"
                            })
                        })
                    })
                });
            if (r === 0)
                return (0,
                e.jsx)(C, {
                    icon: "\u{1F3AF}",
                    title: "Element Timing",
                    children: (0,
                    e.jsx)(u, {
                        label: "No elements tracked",
                        tooltip: "Add `elementtiming` attribute to elements to track their render time",
                        children: (0,
                        e.jsx)(k, {
                            style: {
                                fontSize: "10px"
                            },
                            children: 'elementtiming="name"'
                        })
                    })
                });
            let s = [...a].sort( (l, d) => d.renderTime - l.renderTime);
            return (0,
            e.jsxs)(C, {
                icon: "\u{1F3AF}",
                title: "Element Timing",
                children: [(0,
                e.jsx)(u, {
                    label: "Elements",
                    tooltip: "Number of elements with `elementtiming` attribute tracked",
                    detail: s.length > 3 ? (0,
                    e.jsxs)(e.Fragment, {
                        children: [s.length, " total"]
                    }) : null,
                    children: (0,
                    e.jsxs)(m, {
                        variant: "success",
                        children: [(0,
                        e.jsx)("span", {
                            children: "\u{1F4CD} "
                        }), (0,
                        e.jsx)("span", {
                            children: r
                        })]
                    })
                }), (0,
                e.jsx)(u, {
                    label: "Largest",
                    tooltip: "Slowest element to render. Similar concept to LCP but for tracked elements.",
                    children: (0,
                    e.jsxs)(m, {
                        variant: f(i, 100, 250),
                        children: [(0,
                        e.jsx)("span", {
                            children: i < 100 ? "\u26A1 " : i < 250 ? "\u23F1\uFE0F " : "\u{1F40C} "
                        }), (0,
                        e.jsxs)("span", {
                            children: [i, "ms"]
                        })]
                    })
                }), s.slice(0, 3).map( (l, d) => (0,
                e.jsx)(u, {
                    label: l.identifier,
                    tooltip: `Element: ${l.selector}
Render time: ${l.renderTime}ms`,
                    children: (0,
                    e.jsxs)(m, {
                        variant: f(l.renderTime, 100, 250),
                        children: [(0,
                        e.jsx)("span", {
                            children: d === 0 ? "\u{1F947} " : d === 1 ? "\u{1F948} " : "\u{1F949} "
                        }), (0,
                        e.jsxs)("span", {
                            children: [l.renderTime, "ms"]
                        })]
                    })
                }, l.identifier))]
            })
        })
          , ct = S.memo(function({layoutShiftScore: t, layoutShiftCount: r, currentSessionCLS: i, forcedReflowCount: a, styleWrites: s, cssVarChanges: l, inputJitter: d}) {
            let c = f(t, h.CLS_GOOD, h.CLS_WARNING)
              , o = f(a, 0, h.FORCED_REFLOW_WARNING)
              , I = j(d)
              , g = [];
            return r > 0 && g.push(`${r} shifts`),
            i > 0 && g.push(`session: ${X(i)}`),
            (0,
            e.jsxs)(C, {
                icon: "\u{1F4D0}",
                title: "Layout & Stability",
                children: [(0,
                e.jsx)(u, {
                    label: "CLS",
                    isWebVital: !0,
                    tooltip: "Cumulative Layout Shift (max session window). Core Web Vital. Good: <0.1, Poor: >0.25. Uses session windowing per spec.",
                    detail: g.length > 0 ? (0,
                    e.jsx)(e.Fragment, {
                        children: g.join(" \xB7 ")
                    }) : null,
                    children: (0,
                    e.jsx)(m, {
                        variant: c,
                        children: t === 0 ? "\u{1F3AF} 0" : t > .25 ? `\u{1F4E6} ${X(t)}` : X(t)
                    })
                }), (0,
                e.jsx)(u, {
                    label: "Forced Reflows",
                    tooltip: "Layout reads after style writes force synchronous layout. Major perf killer during drag.",
                    children: (0,
                    e.jsxs)(m, {
                        variant: o,
                        children: [(0,
                        e.jsx)("span", {
                            children: a === 0 ? "\u2728 " : "\u{1F4A5} "
                        }), (0,
                        e.jsx)("span", {
                            children: a
                        })]
                    })
                }), (0,
                e.jsx)(u, {
                    label: "Style Writes",
                    tooltip: "Inline style mutations observed via MutationObserver.",
                    detail: l > 0 ? (0,
                    e.jsxs)(e.Fragment, {
                        children: [l, " CSS var changes"]
                    }) : null,
                    children: (0,
                    e.jsxs)("span", {
                        children: ["\u{1F3A8} ", s]
                    })
                }), (0,
                e.jsx)(u, {
                    label: "Input Jitter",
                    tooltip: "Unexpected input latency spikes causing visible hitches during interaction.",
                    children: (0,
                    e.jsx)(m, {
                        variant: I,
                        children: d === 0 ? "\u2728 None" : `\u{1F635} ${d} hitches`
                    })
                })]
            })
        })
          , st = S.memo(function({id: t, reactMountCount: r, reactMountDuration: i, reactRenderCount: a, reactPostMountUpdateCount: s, slowReactUpdates: l, reactP95Duration: d, renderCascades: c, memoizationEfficiency: o}) {
            let I = f(l, 0, h.SLOW_UPDATES_WARNING)
              , g = f(d, 0, h.REACT_P95_WARNING)
              , R = f(c, 0, h.CASCADE_WARNING)
              , x = Math.max(0, Math.min(100, (1 - o) * 100))
              , E = x >= 20 ? "success" : x > 0 ? "neutral" : "warning";
            return (0,
            e.jsxs)(te, {
                children: [(0,
                e.jsxs)(re, {
                    children: [(0,
                    e.jsx)(ie, {
                        children: "\u269B\uFE0F"
                    }), (0,
                    e.jsx)(oe, {
                        children: "React Performance"
                    })]
                }), (0,
                e.jsxs)(Fe, {
                    children: [(0,
                    e.jsx)(u, {
                        label: "ID",
                        tooltip: "Profiler ID (React element ID or custom name)",
                        children: t
                    }), (0,
                    e.jsxs)(u, {
                        label: "Mount",
                        tooltip: "Initial render count and total duration.",
                        detail: i > 0 ? (0,
                        e.jsxs)(e.Fragment, {
                            children: [D(i), " total"]
                        }) : null,
                        children: [r, "\xD7"]
                    }), (0,
                    e.jsx)(u, {
                        label: "Slow Updates",
                        tooltip: "React updates taking >16ms (one frame budget). These cause visible jank.",
                        detail: a > 0 && s > 0 ? (0,
                        e.jsxs)(e.Fragment, {
                            children: [s, " total updates"]
                        }) : null,
                        children: a > 0 ? (0,
                        e.jsxs)(m, {
                            variant: I,
                            children: [(0,
                            e.jsx)("span", {
                                children: l === 0 ? "\u26A1 " : "\u{1F40C} "
                            }), (0,
                            e.jsx)("span", {
                                children: l
                            })]
                        }) : (0,
                        e.jsx)(Y, {
                            children: "No renders"
                        })
                    }), (0,
                    e.jsx)(u, {
                        label: "P95 Duration",
                        tooltip: "95th percentile React update duration. Represents worst-case user experience.",
                        children: d > 0 ? (0,
                        e.jsxs)(m, {
                            variant: g,
                            children: [(0,
                            e.jsx)("span", {
                                children: d < h.REACT_P95_WARNING ? "\u{1F3AF} " : "\u{1F422} "
                            }), (0,
                            e.jsx)("span", {
                                children: D(d)
                            })]
                        }) : (0,
                        e.jsx)(_, {
                            children: "\u2014"
                        })
                    }), (0,
                    e.jsx)(u, {
                        label: "Cascades",
                        tooltip: "Nested updates during commit phase. Often from setState in useLayoutEffect.",
                        children: (0,
                        e.jsxs)(m, {
                            variant: R,
                            children: [(0,
                            e.jsx)("span", {
                                children: c === 0 ? "\u2728 " : "\u{1F300} "
                            }), (0,
                            e.jsx)("span", {
                                children: c
                            })]
                        })
                    }), (0,
                    e.jsx)(u, {
                        label: "Work Saved",
                        tooltip: "How much render work is being skipped by memoization (React.memo, useMemo). Higher is better. 0% means everything re-renders every time.",
                        children: a > 0 ? (0,
                        e.jsxs)(m, {
                            variant: E,
                            children: [(0,
                            e.jsx)("span", {
                                children: x >= 20 ? "\u{1F3AF} " : x > 0 ? "" : "\u26A0\uFE0F "
                            }), (0,
                            e.jsx)("span", {
                                children: Jn(x)
                            })]
                        }) : (0,
                        e.jsx)(_, {
                            children: "\u2014"
                        })
                    })]
                })]
            })
        })
          , dt = []
          , ut = S.memo(function({profilers: t=dt}) {
            return t.length === 0 ? (0,
            e.jsxs)(te, {
                children: [(0,
                e.jsxs)(re, {
                    children: [(0,
                    e.jsx)(ie, {
                        children: "\u269B\uFE0F"
                    }), (0,
                    e.jsx)(oe, {
                        children: "React Performance"
                    })]
                }), (0,
                e.jsxs)(L, {
                    children: [(0,
                    e.jsx)(w, {
                        children: "Awaiting profiler data"
                    }), (0,
                    e.jsxs)(W, {
                        children: ["Wrap components with ", (0,
                        e.jsx)(k, {
                            children: "ProfiledComponent"
                        }), " or interact with the story to trigger renders."]
                    })]
                })]
            }) : (0,
            e.jsx)(e.Fragment, {
                children: t.map(r => (0,
                e.jsx)(st, {
                    id: r.id,
                    reactMountCount: r.metrics.reactMountCount,
                    reactMountDuration: r.metrics.reactMountDuration,
                    reactRenderCount: r.metrics.reactRenderCount,
                    reactPostMountUpdateCount: r.metrics.reactPostMountUpdateCount,
                    slowReactUpdates: r.metrics.slowReactUpdates,
                    reactP95Duration: kn(r.metrics.reactUpdateDurations),
                    renderCascades: r.metrics.nestedUpdateCount,
                    memoizationEfficiency: r.metrics.memoizationEfficiency
                }, r.id))
            })
        })
          , pt = S.memo(function({memoryUsedMB: t, memoryDeltaMB: r, peakMemoryMB: i, memoryHistory: a, gcPressure: s, domElements: l, paintCount: d, compositorLayers: c}) {
            let o = f(s, 0, h.GC_PRESSURE_WARNING)
              , I = c === null ? "neutral" : f(c, 0, h.LAYERS_WARNING)
              , g = r === null ? "neutral" : r > h.MEMORY_DELTA_DANGER ? "error" : r > h.MEMORY_DELTA_WARNING ? "warning" : "success"
              , R = r === null ? "" : r > .5 ? `+${V(r)}` : r < -.5 ? V(r) : "\xB10";
            return t === null ? (0,
            e.jsxs)(C, {
                icon: "\u{1F9E0}",
                title: "Memory & Rendering",
                children: [(0,
                e.jsx)(u, {
                    label: "Heap",
                    children: (0,
                    e.jsx)(_, {
                        children: "Not available (Chrome only)"
                    })
                }), (0,
                e.jsx)(u, {
                    label: "Paint Count",
                    tooltip: "Number of paint operations.",
                    children: d
                }), (0,
                e.jsx)(u, {
                    label: "Compositor Layers",
                    tooltip: "Elements promoted to GPU layers.",
                    children: c !== null ? (0,
                    e.jsx)(m, {
                        variant: I,
                        children: c
                    }) : "\u2014"
                })]
            }) : (0,
            e.jsxs)(C, {
                icon: "\u{1F9E0}",
                title: "Memory & Rendering",
                children: [(0,
                e.jsx)(u, {
                    label: "Heap",
                    tooltip: "Current JS heap size. Watch for sustained growth indicating leaks.",
                    sparkline: (0,
                    e.jsx)(ne, {
                        data: a
                    }),
                    children: (0,
                    e.jsxs)("span", {
                        children: [V(t), "MB", R && (0,
                        e.jsxs)(m, {
                            variant: g,
                            children: [" (", R, ")"]
                        })]
                    })
                }), (0,
                e.jsx)(u, {
                    label: "Peak",
                    tooltip: "Peak heap memory observed.",
                    children: i !== null ? `${V(i)}MB` : "\u2014"
                }), (0,
                e.jsx)(u, {
                    label: "DOM Nodes",
                    tooltip: "Current DOM element count in story container.",
                    children: l !== null ? Kn(l) : "\u2014"
                }), (0,
                e.jsx)(u, {
                    label: "GC Pressure",
                    tooltip: "Memory allocation rate. High values cause GC pauses.",
                    children: (0,
                    e.jsx)(m, {
                        variant: o,
                        children: s > .01 ? `\u{1F5D1}\uFE0F ${Qn(s, "MB/s")}` : "\u2728 Low"
                    })
                }), (0,
                e.jsxs)(u, {
                    label: "Paint / Layers",
                    tooltip: "Paint operations and compositor layer count.",
                    children: [(0,
                    e.jsx)("span", {
                        children: d
                    }), (0,
                    e.jsxs)(_, {
                        children: ["/", " ", c !== null ? (0,
                        e.jsxs)(m, {
                            variant: I,
                            children: [c, " layers"]
                        }) : (0,
                        e.jsx)("span", {
                            children: "\u2014"
                        })]
                    })]
                })]
            })
        })
          , mt = {
            status: "loading",
            metrics: Ne,
            profilersByStory: {},
            errorMessage: null
        };
        function ht(n, t) {
            switch (t.type) {
            case "METRICS_RECEIVED":
                return {
                    ...n,
                    status: "connected",
                    metrics: t.metrics,
                    errorMessage: null
                };
            case "PROFILER_UPDATE":
                {
                    let {storyId: r, id: i, metrics: a} = t, s = n.profilersByStory[r] ?? [], l = s.findIndex(o => o.id === i), d = {
                        id: i,
                        metrics: a,
                        lastUpdated: Date.now()
                    }, c;
                    return l >= 0 ? (c = [...s],
                    c[l] = d) : c = [...s, d],
                    {
                        ...n,
                        profilersByStory: {
                            ...n.profilersByStory,
                            [r]: c
                        }
                    }
                }
            case "CLEANUP_OLD_STORIES":
                {
                    let r = n.profilersByStory[t.currentStoryId];
                    return {
                        ...n,
                        profilersByStory: r ? {
                            [t.currentStoryId]: r
                        } : {}
                    }
                }
            case "STORY_ERROR":
                return {
                    ...n,
                    status: "error",
                    errorMessage: t.message
                };
            case "NO_DECORATOR":
                return n.status === "loading" ? {
                    ...n,
                    status: "no-decorator"
                } : n;
            case "RESET_METRICS":
                return {
                    ...n,
                    metrics: Ne
                };
            default:
                return n
            }
        }
        function It({storyId: n}) {
            let[t,r] = S.useReducer(ht, mt)
              , {previewInitialized: i} = J()
              , a = t.profilersByStory[n] ?? [];
            S.useEffect( () => {
                r({
                    type: "CLEANUP_OLD_STORIES",
                    currentStoryId: n
                })
            }
            , [n]);
            let s = () => t.status === "connected"
              , l = he({
                [O.METRICS_UPDATE]: I => {
                    r({
                        type: "METRICS_RECEIVED",
                        metrics: I
                    })
                }
                ,
                [O.PROFILER_UPDATE]: I => {
                    r({
                        type: "PROFILER_UPDATE",
                        storyId: I.storyId,
                        id: I.id,
                        metrics: I.metrics
                    })
                }
                ,
                storyRendered: () => {
                    l(O.REQUEST_METRICS)
                }
                ,
                storyFinished: () => {
                    l(O.REQUEST_METRICS)
                }
                ,
                storyErrored: () => r({
                    type: "STORY_ERROR",
                    message: "Story failed to render"
                }),
                storyMissing: () => r({
                    type: "STORY_ERROR",
                    message: "Story not found"
                }),
                storyThrewException: I => r({
                    type: "STORY_ERROR",
                    message: I?.message || "Story threw an exception"
                }),
                playFunctionThrewException: I => r({
                    type: "STORY_ERROR",
                    message: `Play function error: ${I?.message || "Unknown error"}`
                }),
                storyArgsUpdated: () => {
                    s() && (l(O.RESET),
                    r({
                        type: "RESET_METRICS"
                    }))
                }
            });
            S.useEffect( () => {
                i && l(O.REQUEST_METRICS)
            }
            , [i, l]),
            S.useEffect( () => {
                if (!i || t.status !== "loading")
                    return;
                let I = setTimeout( () => {
                    r({
                        type: "NO_DECORATOR"
                    })
                }
                , 500);
                return () => clearTimeout(I)
            }
            , [i, t.status]);
            let d = S.useCallback( () => {
                l(O.RESET),
                r({
                    type: "RESET_METRICS"
                })
            }
            , [l])
              , c = S.useCallback(I => {
                l(O.INSPECT_ELEMENT, I)
            }
            , [l]);
            if (t.status !== "connected")
                return t.status === "error" ? (0,
                e.jsxs)(L, {
                    children: [(0,
                    e.jsx)(w, {
                        children: "Story error"
                    }), (0,
                    e.jsx)(W, {
                        children: t.errorMessage
                    }), (0,
                    e.jsx)(ee, {
                        children: (0,
                        e.jsx)("span", {
                            children: "Fix the error in your story to see performance metrics."
                        })
                    })]
                }) : t.status === "no-decorator" ? (0,
                e.jsxs)(L, {
                    children: [(0,
                    e.jsx)(w, {
                        children: "Performance monitoring not active for this story"
                    }), (0,
                    e.jsxs)(ee, {
                        children: ["Add the ", (0,
                        e.jsx)(k, {
                            children: "withPerformanceMonitor"
                        }), " decorator to enable metrics collection."]
                    })]
                }) : (0,
                e.jsxs)(L, {
                    children: [(0,
                    e.jsx)(w, {
                        children: "Loading story\u2026"
                    }), (0,
                    e.jsx)(W, {
                        children: "Waiting for performance metrics"
                    })]
                });
            let {metrics: o} = t;
            return (0,
            e.jsxs)(On, {
                children: [(0,
                e.jsx)(Dn, {
                    children: (0,
                    e.jsxs)(Ln, {
                        children: [(0,
                        e.jsx)(rt, {
                            fps: o.fps,
                            fpsHistory: o.fpsHistory,
                            frameTime: o.frameTime,
                            maxFrameTime: o.maxFrameTime,
                            frameTimeHistory: o.frameTimeHistory,
                            droppedFrames: o.droppedFrames,
                            frameJitter: o.frameJitter,
                            frameStability: o.frameStability,
                            paintTime: o.paintTime,
                            maxPaintTime: o.maxPaintTime,
                            paintJitter: o.paintJitter
                        }), (0,
                        e.jsx)(ot, {
                            inputLatency: o.inputLatency,
                            maxInputLatency: o.maxInputLatency,
                            eventTimingSupported: o.eventTimingSupported,
                            inpMs: o.inpMs,
                            interactionCount: o.interactionCount,
                            firstInputDelay: o.firstInputDelay,
                            firstInputType: o.firstInputType,
                            lastInteraction: o.lastInteraction,
                            slowestInteraction: o.slowestInteraction,
                            onInspectElement: c
                        }), (0,
                        e.jsx)(it, {
                            longTasks: o.longTasks,
                            longestTask: o.longestTask,
                            totalBlockingTime: o.totalBlockingTime,
                            thrashingScore: o.thrashingScore,
                            domMutationsPerFrame: o.domMutationsPerFrame
                        }), (0,
                        e.jsx)(at, {
                            loafSupported: o.loafSupported,
                            loafCount: o.loafCount,
                            totalLoafBlockingDuration: o.totalLoafBlockingDuration,
                            longestLoafDuration: o.longestLoafDuration,
                            longestLoafBlockingDuration: o.longestLoafBlockingDuration,
                            avgLoafDuration: o.avgLoafDuration,
                            p95LoafDuration: o.p95LoafDuration,
                            loafsWithScripts: o.loafsWithScripts,
                            lastLoaf: o.lastLoaf,
                            worstLoaf: o.worstLoaf
                        }), (0,
                        e.jsx)(ut, {
                            profilers: a
                        }), (0,
                        e.jsx)(ct, {
                            layoutShiftScore: o.layoutShiftScore,
                            layoutShiftCount: o.layoutShiftCount,
                            currentSessionCLS: o.currentSessionCLS,
                            forcedReflowCount: o.forcedReflowCount,
                            styleWrites: o.styleWrites,
                            cssVarChanges: o.cssVarChanges,
                            inputJitter: o.inputJitter
                        }), (0,
                        e.jsx)(pt, {
                            memoryUsedMB: o.memoryUsedMB,
                            memoryDeltaMB: o.memoryDeltaMB,
                            peakMemoryMB: o.peakMemoryMB,
                            memoryHistory: o.memoryHistory,
                            gcPressure: o.gcPressure,
                            domElements: o.domElements,
                            paintCount: o.paintCount,
                            compositorLayers: o.compositorLayers
                        }), (0,
                        e.jsx)(lt, {
                            elementTimingSupported: o.elementTimingSupported,
                            elementTimingCount: o.elementTimingCount,
                            largestElementRenderTime: o.largestElementRenderTime,
                            elementTimings: o.elementTimings
                        })]
                    })
                }), (0,
                e.jsx)(Mn, {
                    children: (0,
                    e.jsx)(ye, {
                        variant: "ghost",
                        padding: "small",
                        onClick: d,
                        ariaLabel: "Reset all metrics",
                        children: (0,
                        e.jsx)(Ie, {})
                    })
                })]
            })
        }
        function gt({active: n}) {
            let {storyId: t, previewInitialized: r, viewMode: i} = J();
            return n ? t ? i === "docs" ? (0,
            e.jsxs)(L, {
                children: [(0,
                e.jsx)(w, {
                    children: "Docs mode"
                }), (0,
                e.jsx)(W, {
                    children: "Performance metrics are optimized for story view. Switch to Canvas view for accurate measurements."
                }), (0,
                e.jsx)(ee, {
                    children: (0,
                    e.jsx)("span", {
                        children: "Docs mode renders stories in iframes which affects timing accuracy."
                    })
                })]
            }) : r ? (0,
            e.jsx)(It, {
                storyId: t
            }) : (0,
            e.jsxs)(L, {
                children: [(0,
                e.jsx)(w, {
                    children: "Preview not initialized"
                }), (0,
                e.jsx)(W, {
                    children: "The preview is still initializing. Please wait..."
                })]
            }) : (0,
            e.jsxs)(L, {
                children: [(0,
                e.jsx)(w, {
                    children: "No story selected"
                }), (0,
                e.jsx)(W, {
                    children: "Select a story to view performance metrics"
                })]
            }) : null
        }
        function St({active: n}) {
            return (0,
            e.jsx)(Se, {
                active: n,
                children: (0,
                e.jsx)(gt, {
                    active: n
                })
            })
        }
        q.register(M, () => {
            q.add(Xn, {
                type: me.PANEL,
                title: "\u26A1 Performance",
                match: ({viewMode: n}) => n === "story",
                render: ({active: n}) => (0,
                e.jsx)(St, {
                    active: !!n
                })
            })
        }
        );
    }
    )();
} catch (e) {
    console.error("[Storybook] One of your manager-entries failed: " + import.meta.url, e);
}
