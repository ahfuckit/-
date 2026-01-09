import*as e from"../../../core/host/host.js";import*as t from"../../../core/i18n/i18n.js";import*as o from"../../../ui/components/helpers/helpers.js";import*as i from"../../../ui/components/micro_feedback/forward/forward.js";import*as n from"../../../ui/legacy/legacy.js";import*as r from"../../../ui/lit/lit.js";var a=`.main-container{--grid-template-columns:1fr 1fr;--header-grid-column:1/2;--help-grid-column:1/2;--help-grid-row-start:2;--highlights-grid-column:2/3;--highlights-chromium-grid-column:2/3;--highlights-grid-row-start:1;display:grid;gap:20px;padding:24px;grid-template-columns:var(--grid-template-columns);grid-auto-rows:minmax(min-content,max-content)}.main-container.responsive-narrow-container,\n.main-container.responsive-medium-container{--grid-template-columns:1fr;--header-grid-column:1/2;--help-grid-column:1/2;--help-grid-row-start:2;--highlights-grid-column:1/2;--highlights-chromium-grid-column:1/2;--highlights-grid-row-start:4}.welcome-header{grid-column:var(--header-grid-column)}.welcome-header h1{font-size:20px;font-weight:600;line-height:24px;margin-bottom:0;margin-top:0}.highlights-container{min-height:fit-content;grid-row-start:var(--highlights-grid-row-start);grid-row-end:6;grid-column:var(--highlights-grid-column)}.highlights-chrome-container{grid-column:var(--highlights-chromium-grid-column)}.help-links-container{grid-column:var(--help-grid-column);grid-row-start:var(--help-grid-row-start);margin-top:-16px}.welcome-list-container h2{font-size:16px;font-weight:600;margin:0}.devtools-link,\n.devtools-link:visited{color:var(--accent-foreground-rest);text-decoration:none}.devtools-link:hover{color:var(--accent-foreground-hover);text-decoration:none}.devtools-link:active{color:var(--accent-foreground-active);text-decoration:none}.more-link-container{font-size:1.2em;white-space:nowrap}.more-link-container:hover,\n.more-link-container:active{text-decoration:underline}.title-container{display:flex;justify-content:space-between;align-items:center;padding-top:8px;flex-wrap:wrap}\n/*# sourceURL=${import.meta.resolve("./welcomeView.css")} */`,l=`ul{list-style:none;display:grid;padding:0;grid-template-columns:1fr;gap:12px}ul.matched-item-heights{grid-auto-rows:1fr}ul.double-columns{grid-template-columns:1fr 1fr}ul li{font-size:14px;width:100%;height:100%}ul li a{line-height:20px;display:block}a:hover{text-decoration:underline}.welcome-list-item{padding:10px 16px;line-height:20px;font-size:14px;text-decoration:none;color:var(--neutral-foreground-hint);display:flex}.welcome-list-item h3{font-size:14px;margin:0;font-weight:normal;color:var(--accent-foreground-rest)}.message{margin-top:4px}.devtools-link,\n.devtools-link:visited{color:var(--accent-foreground-rest);text-decoration:none}.devtools-link:hover{color:var(--accent-foreground-hover);text-decoration:none}.devtools-link:active{color:var(--accent-foreground-active);text-decoration:none}.devtools-help-link,\n.welcome-list-item{border-radius:4px;background:var(--neutral-fill-stealth-rest);border:1px solid var(--neutral-outline-rest);width:100%;height:100%;box-sizing:border-box}.devtools-help-link{text-decoration:none;color:var(--neutral-foreground-rest);padding:10px;display:flex;justify-content:flex-start;align-items:center}.devtools-help-link:hover,\n.welcome-list-item:hover{text-decoration:none;background:var(--neutral-fill-stealth-hover);border-color:var(--neutral-outline-hover)}.devtools-help-link:active,\n.welcome-list-item:active{text-decoration:none;background:var(--neutral-fill-stealth-active)}.devtools-help-link:focus,\n.welcome-list-item:focus{text-decoration:none;background:var(--neutral-fill-stealth-selected)}.devtools-help-link span{margin-left:12px}.show-more-button{font-size:14px;color:var(--accent-foreground-rest);cursor:pointer;text-align:center;width:100%;background:transparent;border-width:0}.show-more-button:hover{color:var(--accent-foreground-hover)}.show-more-button:active{color:var(--accent-foreground-active)}devtools-icon{color:var(--accent-fill-rest)}.welcome-list-image{margin-right:20px;height:97px;width:170px;object-fit:contain;object-position:top}@media (forced-colors: active){devtools-icon{color:ButtonText}}\n/*# sourceURL=${import.meta.resolve("./whatsNewList.css")} */`;const s=new CSSStyleSheet;s.replaceSync(l);const{html:c}=r,d={hideLabel:"Hide",showMoreLabel:"Show more ({PH1} items)..."},h=t.i18n.registerUIStrings("panels/edge_welcome/components/WhatsNewList.ts",d),m=t.i18n.getLocalizedString.bind(void 0,h);class g extends HTMLElement{static litTagName=r.StaticHtml.literal`devtools-welcome-whatsnewlist`;#e=this.attachShadow({mode:"open"});#t={list:[],columns:1,renderer:e=>c``};#o=!0;set data(e){this.#o=!0,this.#t=e,this.#i()}get data(){return this.#t}connectedCallback(){this.#e.adoptedStyleSheets=[s]}#n=e=>{if(e.preventDefault(),this.#o=!this.#o,this.#i(),!this.#o&&!e.pointerType){const e=this.#t.truncatedCount;if(void 0!==e){Array.from(this.#e.querySelectorAll("li > *"))[e].focus()}}};#i(){const{list:e,columns:t,matchedItemHeights:o,renderer:i,truncatedCount:n=0}=this.#t,a=(0!==n&&this.#o?e.slice(0,n):e).map(e=>c`<li>${i(e)}</li>`),l=e.length-n;let s=c``;if(0!==n&&l>0){const e=this.#o?m(d.showMoreLabel,{PH1:l}):m(d.hideLabel);s=c`
        <button class="show-more-button" @click=${this.#n} tabindex="0">
          ${e}
        </button>`}const h=r.Directives.classMap({"double-columns":2===t,"matched-item-heights":Boolean(o)}),g=c`
      <ul class=${h}>
        ${a}
      </ul>
      ${s}`;r.render(g,this.#e,{host:this})}}o.CustomElements.defineComponent("devtools-welcome-whatsnewlist",g);const u=new CSSStyleSheet;u.replaceSync(a);const{html:p}=r,k={helpTitle:"Learn",tabTitle:"Welcome to {PH1}",moreLinkTitle:"View all",chromiumHighlightsTitle:"Announcements from the `Chromium` project",microfeedbackFeedbackNessage:"Thank you! It will help us improve",microfeedbacklikePrompt:"Tell us what you like",microfeedbackldislikePrompt:"Help us improve",microfeedbackFeedbackLikeDocumentation:"I like the documentation links for beginners",microfeedbackFeedbackLikeTutorials:"I like the tutorials and task based documentation",microfeedbackFeedbackLikeDepth:"I like the in-depth documentation for each tool",microfeedbackFeedbackLikeUpdates:"I like the updates for each release (What's New)",microfeedbackFeedbackDislikeWelcome:"I don't like seeing Welcome after each update",microfeedbackFeedbackDislikeResources:"I want more help resources in DevTools",microfeedbackFeedbackDislikeDocumentation:"I want more documentation for getting started with DevTools",microfeedbackFeedbackDislikeTechnical:"I want more technical documentation",microfeedbackFeedbackWelcomeMessage:"Are you satisfied with Microsoft Edge Devtools Learning resources?"},w=t.i18n.registerUIStrings("panels/edge_welcome/components/WelcomeView.ts",k),v=t.i18n.getLocalizedString.bind(void 0,w),f=t.i18n.getLazilyComputedLocalizedString.bind(void 0,w),b={2:{containerClass:"",learn:{columns:1},edge:{style:0,columns:1},chromium:{style:0,columns:1}},1:{containerClass:"responsive-medium-container",learn:{columns:2,truncatedCount:4},edge:{style:0,columns:1,truncatedCount:5},chromium:{style:1,columns:1}},0:{containerClass:"responsive-narrow-container",learn:{columns:1,truncatedCount:4},edge:{style:1,columns:1},chromium:{style:1,columns:1}}},x="action://",y="welcome",$={itemId:0,mfbPrompt:f(k.microfeedbackFeedbackWelcomeMessage),feedbackMessage:f(k.microfeedbackFeedbackNessage),followUpThumbsUp:{prompt:f(k.microfeedbacklikePrompt),options:[f(k.microfeedbackFeedbackLikeDocumentation),f(k.microfeedbackFeedbackLikeTutorials),f(k.microfeedbackFeedbackLikeDepth),f(k.microfeedbackFeedbackLikeUpdates)]},followUpThumbsDown:{prompt:f(k.microfeedbackldislikePrompt),options:[f(k.microfeedbackFeedbackDislikeWelcome),f(k.microfeedbackFeedbackDislikeResources),f(k.microfeedbackFeedbackDislikeDocumentation),f(k.microfeedbackFeedbackDislikeTechnical)]}};i.Helper.registerData(y,$);class T extends HTMLElement{static litTagName=r.StaticHtml.literal`devtools-welcome`;#e=this.attachShadow({mode:"open"});#t={};#r=2;set data(e){this.#t=e,this.#i()}get data(){return this.#t}set layout(e){this.#r!==e&&(this.#r=e,this.#i())}get layout(){return this.#r}connectedCallback(){this.#e.adoptedStyleSheets=[u]}enforceCapitalization(e){return e.charAt(0).toUpperCase()+e.slice(1)}#a(t){const{title:o,link:i,iconName:r}=t,a=p`
      <devtools-icon
        .data=${{iconName:r||"edge-documentation_book_filled",color:"--accent-fill-rest",width:"20px"}}>
      </devtools-icon>
      <span>${this.enforceCapitalization(o())}</span>`,l=t=>{e.userMetrics.welcomeActionTaken(3),t?.pointerType&&t.currentTarget.blur(),e.InspectorFrontendHost.InspectorFrontendHostInstance.recordUserMetricsAction(e.InspectorFrontendHost.learnerCohortUMA)};if(i.startsWith(x)){const e=e=>{e.preventDefault();const t=i.replace(x,""),o=n.ActionRegistry.ActionRegistry.instance().getAction(t);o?.execute(),l(e)};return p`
        <a class="devtools-help-link" href=${i} @click=${e}>
          ${a}
        </a>`}return p`
      <a class="devtools-help-link" href=${i} target="_blank" @click=${l}>
        ${a}
      </a>`}#l(){return p`
      <devtools-microfeedback .configkey=${y}>
      </devtools-microfeedback>`}#s(t,o){const{title:i,subtitle:n,link:a,imageURL:l,imageAltText:s,isVideo:c}=o;return p`
      <a class="welcome-list-item" href=${a} target="_blank" @click=${t=>{c?e.userMetrics.welcomeActionTaken(5):e.userMetrics.welcomeActionTaken(4),e.InspectorFrontendHost.InspectorFrontendHostInstance.recordUserMetricsAction(e.InspectorFrontendHost.learnerCohortUMA),t.pointerType&&t.currentTarget.blur()}}>
        ${l&&(0===t||c)?p`<img class="welcome-list-image" src=${l} alt=${s??""}>`:r.nothing}
        <span class="welcome-list-text">
          <h3>${this.enforceCapitalization(i())}</h3>
          ${0===t?p`
            <p class="message">${this.enforceCapitalization(n())}</p>`:r.nothing}
        </span>
      </a>`}#i(){if(!this.#t.welcomeNote||!this.#t.setting)throw new Error("No welcome view data provided for rendering.");const{help:t,header:o,highlightsEdge:i,highlights:n,link:a,whatsNewVideo:l,learnHeader:s,allAnnouncementsLinkText:c}=this.#t.welcomeNote,d=b[this.#r],h={list:t.filter(e=>!e.hidden),matchedItemHeights:!0,columns:d.learn.columns,truncatedCount:d.learn.truncatedCount,renderer:e=>this.#a(e)},m={list:(l&&i?[l,...i]:i)||[],columns:d.edge.columns,truncatedCount:d.edge.truncatedCount,renderer:e=>this.#s(d.edge.style,e)},u={list:n,columns:d.chromium.columns,truncatedCount:d.chromium.truncatedCount,renderer:e=>this.#s(d.chromium.style,e)},w=c?c():v(k.moreLinkTitle),f=`${o()}, ${w}`,x=p`
      <div class="main-container" class="main-container ${d.containerClass}" aria-labelledby="welcome-title">
        <div class="welcome-header">
          <h1 id="welcome-title">${v(k.tabTitle,{PH1:"Microsoft Edge DevTools"})}</h1>
          ${this.#t?.setting?p`<setting-checkbox
            .data=${{setting:this.#t.setting}}>
          </setting-checkbox>`:r.nothing}
        </div>

        ${h?.list?p`<nav class="welcome-list-container help-links-container" aria-labelledby="help-links-title">
          <div class="title-container">
            <h2 id="help-links-title">${s?s():v(k.helpTitle)}</h2>
            <div>${this.#l()}</div>
          </div>
          <devtools-welcome-whatsnewlist .data=${h}></devtools-welcome-whatsnewlist>
        </nav>`:r.nothing}

        ${m?.list?p`<main class="welcome-list-container highlights-container" aria-labelledby="highlights-title">
          <div class="title-container">
            <h2 id="highlights-title">${o()}</h2>
            <div class="more-link-container">
              <a class="devtools-link" href=${a} target="_blank" @click=${()=>{e.userMetrics.welcomeActionTaken(6)}} aria-label=${f}>${w}</a>
            </div>
          </div>
          <devtools-welcome-whatsnewlist .data=${m}></devtools-welcome-whatsnewlist>
        </main>`:r.nothing}

        ${n.length>0?p`
          <section class="welcome-list-container highlights-chrome-container" aria-labelledby="highlights-chrome-title">
            <div class="title-container">
              <h2 id="highlights-chrome-title">${v(k.chromiumHighlightsTitle)}</h2>
            </div>
            <${g.litTagName} .data=${u}></${g.litTagName}>
          </section>
        `:r.nothing}
      </div>`;r.render(x,this.#e,{host:this})}}o.CustomElements.defineComponent("devtools-welcome",T);export{T as WelcomeView,g as WhatsNewList};
//# sourceMappingURL=components.js.map
