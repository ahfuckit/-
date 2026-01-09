import*as e from"../../../core/common/common.js";import*as t from"../../../core/host/host.js";import*as i from"../../../core/i18n/i18n.js";import*as o from"../../../core/root/root.js";import*as r from"../../../core/sdk/sdk.js";import"../../../models/issues_manager/issues_manager.js";import*as n from"../../../models/logs/logs.js";import*as s from"../../../models/workspace/workspace.js";import"../../network/forward/forward.js";import*as a from"../../../ui/components/helpers/helpers.js";import*as l from"../../../ui/lit/lit.js";import*as c from"../../network/network.js";var d=`:host{--issue-webhint-code:#fff;--issue-webhint-code-border:rgb(0 0 0/25%);--link-icon-width:14px;--link-icon-height:14px;--link-icon-margin:3px;width:100%}:host-context(.-theme-with-dark-background){--issue-webhint-code:#0f0f0f;--issue-webhint-code-border:rgb(0 0 0/25%)}.code-wrapper{background:var(--issue-webhint-code);border:1px solid var(--issue-webhint-code-border)}.code-wrapper pre{margin:0;padding:8px 12px;white-space:pre-wrap;word-break:break-all}.code-wrapper code{background:var(--issue-webhint-code);color:var(--color-text-primary);cursor:text;font-size:12px;user-select:text}.view-in{font-size:12px;line-height:16px;margin-top:2px}.devtools-link{color:var(--accent-foreground-rest)}.info-grid{display:block}.view-in + .info-grid{margin-top:12px}.title{font-size:inherit;font-weight:600;letter-spacing:0.1em;margin:0 0 4px;text-transform:uppercase}.info-grid .devtools-link,\n.info-grid .devtools-link-inactive{font-size:14px;margin:0;text-align:left;white-space:pre-wrap}.info-grid-further-reading{padding-right:calc(var(--link-icon-width) + var(--link-icon-margin))}.info-grid .devtools-link:not(.devtools-issues-documentation),\n.info-grid .devtools-link-inactive:not(.devtools-issues-documentation){word-break:break-all}.link-list{list-style-type:none;padding:0;margin:0}.devtools-request{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden;text-overflow:ellipsis}.devtools-issues-documentation::after{content:"";align-self:center;background-color:var(--accent-foreground-rest);height:var(--link-icon-height);margin-top:var(--link-icon-margin);margin-left:var(--link-icon-margin);position:absolute;-webkit-mask-image:url("Images/link_icon.svg");-webkit-mask-position:center;-webkit-mask-repeat:no-repeat;-webkit-mask-size:var(--link-icon-width) var(--link-icon-height);width:var(--link-icon-width)}@media (forced-colors: active){.devtools-issues-documentation::after{background-color:ButtonText}}@media all and (width >= 728px){.info-grid{display:grid;gap:20px;grid-template-columns:1fr 1fr;width:100%}.info-grid-request{grid-column:1}.info-grid-further-reading{grid-column:2;margin-top:0}}\n/*# sourceURL=${import.meta.resolve("./webhintResource.css")} */`;const u=new CSSStyleSheet;u.replaceSync(d);const h={furtherReadingS:"Further reading: {PH1}",viewInElementsPanel:"Open in: Elements",elements:"Elements",requestUrlS:"Request URL: {PH1}",network:"Network",viewInNetworkPanel:"Open In: Network",viewInSourcesPanel:"Open In: Sources",sources:"Sources",sourceCode:"Source Code",viewIn:"Open in",request:"Request",furtherReading:"Further Reading",learnWhyThisIsImportantAndHowTo:"Learn why this is important and how to fix it on webhint.io"},m=i.i18n.registerUIStrings("panels/edge_webhint/components/WebhintResource.ts",h),p=i.i18n.getLocalizedString.bind(void 0,m),{html:g,render:w}=l;let k=0;class f extends HTMLElement{static litTagName=l.StaticHtml.literal`devtools-webhint-resource`;#e;#t="Other";#i="";#o=[];#r=null;#n=null;#s=null;#a="";#l="";#c=0;#d="";constructor(){super(),this.#e=this.attachShadow({mode:"open"}),this.addEventListener("keydown",this.#u.bind(this))}set data(e){const{problem:t,request:i}=e.item;if(this.#t=e.category,this.#i=t.codeLanguage,this.#o=t.documentation||[],this.#r=t.location,this.#s=i?.requestId?n.NetworkLog.NetworkLog.instance().requestsForId(i.requestId)[0]:null,this.#a=t.resource,this.#l=t.sourceCode,this.#c=k++,this.#d=t.hintId,t.location.elementId){const e=r.TargetManager.TargetManager.instance().primaryPageTarget(),t=new r.DOMModel.DeferredDOMNode(e,this.#r.elementId);t?.resolve(e=>{this.#n=e,this.#h()})}this.#h()}connectedCallback(){this.#e.adoptedStyleSheets=[u]}focus(){this.#m()}#p(){return this.#e.querySelector('[tabindex="0"]')||null}#m(){this.#g(this.#e.querySelector("[tabindex]"))}#g(e){const t=this.#p();t&&(t.tabIndex=-1),e.focus(),this.#e.contains(e)&&(e.tabIndex=0)}#u(e){if(e.altKey||e.ctrlKey||e.metaKey||e.shiftKey)return;const t=this.#p();if(!t)return;let i=null;const o=Array.from(this.#e.querySelectorAll("[tabindex]")),r=o.indexOf(t);"ArrowLeft"===e.key?i=o[r-1]||this.parentElement:"ArrowRight"===e.key&&(i=o[r+1]||this.parentElement),i&&(this.#g(i),e.preventDefault(),e.stopPropagation())}#w(e,i=!1){return g`
      <li><a class='devtools-link devtools-issues-documentation' target="_blank" tabindex='-1' aria-label='${p(h.furtherReadingS,{PH1:e.text})}' href=${e.link} @click=${()=>{t.userMetrics.issuesPanelWebhintDocumenatationOpened(this.#t.toString(),i)}}>${e.text}<span class="devtools-issues-documentation-link"></span></a></li>
    `}#k(){const i=this.#n;if(!i)return null;return g`
      <a class='devtools-link' tabindex='-1' href='#' aria-label='${p(h.viewInElementsPanel)}' @click=${o=>{o.preventDefault(),t.userMetrics.issuesPanelWebhintPanelOpened(this.#t.toString(),"Element"),e.Revealer.reveal(i)}}>${p(h.elements)}</a>
    `}#f(e,i){const o=this.#s;if(!o)return null;return g`
      <a class='devtools-link devtools-request' tabindex='-1' aria-label='${i}' href='#' @click=${e=>{e.preventDefault(),t.userMetrics.issuesPanelWebhintPanelOpened(this.#t.toString(),"Network"),c.NetworkPanel.NetworkPanel.selectAndShowRequest(o,"headers-component")}}>${e}</a>
    `}#v(e){const t=this.#s,i=p(h.requestUrlS,{PH1:e});return t?this.#f(e,i):g`<span class='devtools-link-inactive devtools-request' tabindex='-1' aria-label='${i}'>${e}</span>`}#b(){return this.#s&&"http"===this.#i?this.#f(p(h.network),p(h.viewInNetworkPanel)):null}#x(){const i=this.#r;if(!i||-1===i.line)return null;const o=s.Workspace.WorkspaceImpl.instance().uiSourceCodeForURL(this.#a);if(!o)return null;return g`
      <a class='devtools-link' tabindex='-1' href='#' aria-label='${p(h.viewInSourcesPanel)}' @click=${r=>{r.preventDefault(),t.userMetrics.issuesPanelWebhintPanelOpened(this.#t.toString(),"Source"),e.Revealer.reveal(o.uiLocation(i.line,i.column))}}>${p(h.sources)}</a>
    `}#h(){const e=[this.#k(),this.#b(),this.#x()].filter(e=>e);w(g`
      <div>
        ${this.#l?g`
          <div class='source-code'>
            <div class='code-wrapper' tabindex='-1' aria-label='${p(h.sourceCode)}' aria-describedby='sc-${this.#c}'>
              <pre><code id='sc-${this.#c}'>${this.#l}</code></pre>
            </div>
          </div>
        `:""}
        ${e.length?g`
          <div class='view-in'>
            ${p(h.viewIn)} ${e}
          </div>
        `:""}
        <div class='info-grid'>
          <div class='info-grid-request'>
              <h2 class='title'>${p(h.request)}</h2>
              ${this.#v(this.#a)||this.#a}
          </div>
          ${!this.#o.length&&!this.#d||o.Runtime.experiments.isEnabled("ms-edge-issues-disable-external-links")?"":g`
            <div class='info-grid-further-reading'>
              <h2 class='title'>${p(h.furtherReading)}</h2>
              <ul class='link-list'>
                ${this.#o.map(e=>this.#w(e,!0))}
                ${this.#w({link:`https://edge_webhint.io/docs/user-guide/hints/hint-${this.#d}/?source=devtools`,text:p(h.learnWhyThisIsImportantAndHowTo)},!1)}
              </ul>
            </div>
          `}
        </div>
      </div>
    `,this.#e,{host:this})}}a.CustomElements.defineComponent("devtools-webhint-resource",f);var v=Object.freeze({__proto__:null,WebhintResource:f});export{v as WebhintResource};
//# sourceMappingURL=components.js.map
