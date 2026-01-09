import*as e from"../../core/i18n/i18n.js";import*as t from"../../core/sdk/sdk.js";import*as o from"../../core/common/common.js";import*as s from"../../core/root/root.js";import*as i from"../../ui/legacy/components/color_picker/color_picker.js";import"../../ui/components/buttons/buttons.js";import*as n from"../../ui/legacy/legacy.js";import{render as r,html as a,Directives as l,nothing as d}from"../../ui/lit/lit.js";import"../../ui/legacy/components/data_grid/data_grid.js";import"../../ui/components/icon_button/icon_button.js";import*as c from"../../core/platform/platform.js";import*as u from"../../models/geometry/geometry.js";import*as p from"../../models/text_utils/text_utils.js";import*as v from"../../ui/legacy/components/utils/utils.js";import*as h from"../../ui/visual_logging/visual_logging.js";import*as m from"../../core/host/host.js";import"../../ui/components/panel_feedback/panel_feedback.js";import"../../ui/components/panel_introduction_steps/panel_introduction_steps.js";const g={topAppliedToAStatically:"`Top` applied to a statically positioned element",leftAppliedToAStatically:"`Left` applied to a statically positioned element",rightAppliedToAStatically:"`Right` applied to a statically positioned element",bottomAppliedToAStatically:"`Bottom` applied to a statically positioned element",widthAppliedToAnInlineElement:"`Width` applied to an inline element",heightAppliedToAnInlineElement:"`Height` applied to an inline element",verticalAlignmentAppliedTo:"Vertical alignment applied to element which is neither `inline` nor `table-cell`"},f=e.i18n.registerUIStrings("panels/css_overview/CSSOverviewUnusedDeclarations.ts",g),w=e.i18n.getLocalizedString.bind(void 0,f);class b{static add(e,t,o){const s=e.get(t)||[];s.push(o),e.set(t,s)}static checkForUnusedPositionValues(e,t,o,s,i,n,r,a){if("static"===o[s]){if("auto"!==o[i]){const s=w(g.topAppliedToAStatically);this.add(e,s,{declaration:`top: ${o[i]}`,nodeId:t})}if("auto"!==o[n]){const s=w(g.leftAppliedToAStatically);this.add(e,s,{declaration:`left: ${o[n]}`,nodeId:t})}if("auto"!==o[r]){const s=w(g.rightAppliedToAStatically);this.add(e,s,{declaration:`right: ${o[r]}`,nodeId:t})}if("auto"!==o[a]){const s=w(g.bottomAppliedToAStatically);this.add(e,s,{declaration:`bottom: ${o[a]}`,nodeId:t})}}}static checkForUnusedWidthAndHeightValues(e,t,o,s,i,n){if("inline"===o[s]){if("auto"!==o[i]){const s=w(g.widthAppliedToAnInlineElement);this.add(e,s,{declaration:`width: ${o[i]}`,nodeId:t})}if("auto"!==o[n]){const s=w(g.heightAppliedToAnInlineElement);this.add(e,s,{declaration:`height: ${o[n]}`,nodeId:t})}}}static checkForInvalidVerticalAlignment(e,t,o,s,i){if(o[s]&&!o[s].startsWith("inline")&&!o[s].startsWith("table")&&"baseline"!==o[i]){const s=w(g.verticalAlignmentAppliedTo);this.add(e,s,{declaration:`vertical-align: ${o[i]}`,nodeId:t})}}}var S=Object.freeze({__proto__:null,CSSOverviewUnusedDeclarations:b});const y={};let C=class extends t.SDKModel.SDKModel{#e;#t;#o;constructor(e){super(e),this.#e=e.runtimeAgent(),this.#t=e.cssAgent(),this.#o=e.domsnapshotAgent()}async getNodeStyleStats(){const e=new Map,t=new Map,n=new Map,r=new Map,a=new Map,l=new Map,d=new Map,c=e=>e instanceof o.Color.Legacy?e.hasAlpha()?e.asString("hexa"):e.asString("hex"):e.asString(),u=(e,t,s)=>{if(-1===e)return;const i=f[e];if(!i)return;const n=o.Color.parse(i);if(!n||0===n.asLegacyColor().rgba()[3])return;const r=c(n);if(!r)return;const a=s.get(r)||new Set;return a.add(t),s.set(r,a),n},p=e=>new Set(["altglyph","circle","ellipse","path","polygon","polyline","rect","svg","text","textpath","tref","tspan"]).has(e.toLowerCase()),v=e=>new Set(["iframe","video","embed","img"]).has(e.toLowerCase()),h=(e,t)=>new Set(["tr","td","thead","tbody"]).has(e.toLowerCase())&&t.startsWith("table");let m=0;const{documents:g,strings:f}=await this.#o.invoke_captureSnapshot({computedStyles:["background-color","color","fill","border-top-width","border-top-color","border-bottom-width","border-bottom-color","border-left-width","border-left-color","border-right-width","border-right-color","font-family","font-size","font-weight","line-height","position","top","right","bottom","left","display","width","height","vertical-align"],includeTextColorOpacities:!0,includeBlendedBackgroundColors:!0});for(const{nodes:w,layout:S}of g){m+=S.nodeIndex.length;for(let m=0;m<S.styles.length;m++){const g=S.styles[m],y=S.nodeIndex[m];if(!w.backendNodeId||!w.nodeName)continue;const C=w.backendNodeId[y],x=w.nodeName[y],[$,k,I,A,M,T,O,U,R,L,z,_,E,V,D,P,j,N,W,q,F,H,B,Q]=g;u($,C,e);const G=u(k,C,t);if(p(f[x])&&u(I,C,r),"0px"!==f[A]&&u(M,C,a),"0px"!==f[T]&&u(O,C,a),"0px"!==f[U]&&u(R,C,a),"0px"!==f[L]&&u(z,C,a),_&&-1!==_){const e=f[_],t=l.get(e)||new Map,o="font-size",s="font-weight",i="line-height",n=t.get(o)||new Map,r=t.get(s)||new Map,a=t.get(i)||new Map;if(-1!==E){const e=f[E],t=n.get(e)||[];t.push(C),n.set(e,t)}if(-1!==V){const e=f[V],t=r.get(e)||[];t.push(C),r.set(e,t)}if(-1!==D){const e=f[D],t=a.get(e)||[];t.push(C),a.set(e,t)}t.set(o,n),t.set(s,r),t.set(i,a),l.set(e,t)}const K=G&&S.blendedBackgroundColors&&-1!==S.blendedBackgroundColors[m]?o.Color.parse(f[S.blendedBackgroundColors[m]]):null;if(G&&K){const e=new i.ContrastInfo.ContrastInfo({backgroundColors:[K.asString("hexa")],computedFontSize:-1!==E?f[E]:"",computedFontWeight:-1!==V?f[V]:""}),t=G.asLegacyColor().blendWithAlpha(S.textColorOpacities?S.textColorOpacities[m]:1);e.setColor(t);const o=`${c(t)}_${c(K.asLegacyColor())}`;if(s.Runtime.experiments.isEnabled("apca")){const s=e.contrastRatioAPCA(),i=e.contrastRatioAPCAThreshold();if(!(!(!s||!i)&&Math.abs(s)>=i)&&s){const e={nodeId:C,contrastRatio:s,textColor:t,backgroundColor:K,thresholdsViolated:{aa:!1,aaa:!1,apca:!0}};n.has(o)?n.get(o).push(e):n.set(o,[e])}}else{const s=e.contrastRatioThreshold("aa")||0,i=e.contrastRatioThreshold("aaa")||0,r=e.contrastRatio()||0;if(s>r||i>r){const e={nodeId:C,contrastRatio:r,textColor:t,backgroundColor:K,thresholdsViolated:{aa:s>r,aaa:i>r,apca:!1}};n.has(o)?n.get(o).push(e):n.set(o,[e])}}}b.checkForUnusedPositionValues(d,C,f,P,j,q,N,W),p(f[x])||v(f[x])||b.checkForUnusedWidthAndHeightValues(d,C,f,F,H,B),-1===Q||h(f[x],f[F])||b.checkForInvalidVerticalAlignment(d,C,f,F,Q)}}return{backgroundColors:e,textColors:t,textColorContrastIssues:n,fillColors:r,borderColors:a,fontInfo:l,unusedDeclarations:d,elementCount:m}}getComputedStyleForNode(e){return this.#t.invoke_getComputedStyleForNode({nodeId:e})}async getMediaQueries(){const e=await this.#t.invoke_getMediaQueries(),t=new Map;if(!e)return t;for(const o of e.medias){if("linkedSheet"===o.source)continue;const e=t.get(o.text)||[];e.push(o),t.set(o.text,e)}return t}async getGlobalStylesheetStats(){const{result:e}=await this.#e.invoke_evaluate({expression:"(function() {\n      let styleRules = 0;\n      let inlineStyles = 0;\n      let externalSheets = 0;\n      const stats = {\n        // Simple.\n        type: new Set(),\n        class: new Set(),\n        id: new Set(),\n        universal: new Set(),\n        attribute: new Set(),\n\n        // Non-simple.\n        nonSimple: new Set()\n      };\n\n      for (const styleSheet of document.styleSheets) {\n        if (styleSheet.href) {\n          externalSheets++;\n        } else {\n          inlineStyles++;\n        }\n\n        // Attempting to grab rules can trigger a DOMException.\n        // Try it and if it fails skip to the next stylesheet.\n        let rules;\n        try {\n          rules = styleSheet.rules;\n        } catch (err) {\n          continue;\n        }\n\n        for (const rule of rules) {\n          if ('selectorText' in rule) {\n            styleRules++;\n\n            // Each group that was used.\n            for (const selectorGroup of rule.selectorText.split(',')) {\n              // Each selector in the group.\n              for (const selector of selectorGroup.split(/[\\t\\n\\f\\r ]+/g)) {\n                if (selector.startsWith('.')) {\n                  // Class.\n                  stats.class.add(selector);\n                } else if (selector.startsWith('#')) {\n                  // Id.\n                  stats.id.add(selector);\n                } else if (selector.startsWith('*')) {\n                  // Universal.\n                  stats.universal.add(selector);\n                } else if (selector.startsWith('[')) {\n                  // Attribute.\n                  stats.attribute.add(selector);\n                } else {\n                  // Type or non-simple selector.\n                  const specialChars = /[#.:\\[\\]|\\+>~]/;\n                  if (specialChars.test(selector)) {\n                    stats.nonSimple.add(selector);\n                  } else {\n                    stats.type.add(selector);\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n\n      return {\n        styleRules,\n        inlineStyles,\n        externalSheets,\n        stats: {\n          // Simple.\n          type: stats.type.size,\n          class: stats.class.size,\n          id: stats.id.size,\n          universal: stats.universal.size,\n          attribute: stats.attribute.size,\n\n          // Non-simple.\n          nonSimple: stats.nonSimple.size\n        }\n      }\n    })()",returnByValue:!0});if("object"===e.type)return e.value}};y.CSSOverviewModel=C,t.SDKModel.SDKModel.register(C,{capabilities:2,autostart:!1});class x extends C{#s;constructor(e){super(e),this.#s=e.runtimeAgent()}async getGlobalStylesheetStats(){const{result:e}=await this.#s.invoke_evaluate({expression:"(function() {\n          let styleRules = 0;\n          let inlineStyles = 0;\n          let externalSheets = 0;\n          let filter = new Set(['+', '>', '~']);\n          const stats = {\n            // Simple.\n            type: new Set(),\n            class: new Set(),\n            id: new Set(),\n            universal: new Set(),\n            attribute: new Set(),\n    \n            // Non-simple.\n            nonSimple: new Set()\n          };\n    \n          for (const styleSheet of document.styleSheets) {\n            if (styleSheet.href) {\n              externalSheets++;\n            } else {\n              inlineStyles++;\n            }\n    \n            // Attempting to grab rules can trigger a DOMException.\n            // Try it and if it fails skip to the next stylesheet.\n            let rules;\n            try {\n              rules = styleSheet.rules;\n            } catch (err) {\n              continue;\n            }\n    \n            for (const rule of rules) {\n              if ('selectorText' in rule) {\n                styleRules++;\n    \n                // Each group that was used.\n                for (const selectorGroup of rule.selectorText.split(',')) {\n                  // Each selector in the group.\n                  for (const selector of selectorGroup.split(/[\\t\\n\\f\\r ]+/g)) {\n                    if (selector.startsWith('.')) {\n                      // Class.\n                      stats.class.add(selector);\n                    } else if (selector.startsWith('#')) {\n                      // Id.\n                      stats.id.add(selector);\n                    } else if (selector.startsWith('*')) {\n                      // Universal.\n                      stats.universal.add(selector);\n                    } else if (selector.startsWith('[')) {\n                      // Attribute.\n                      stats.attribute.add(selector);\n                    } else {\n                      // Type or non-simple selector.\n                      const specialChars = /[#.:\\[\\]|\\+>~]/;\n                      if (specialChars.test(selector)) {\n                        // Filter out +, > and ~ selectors\n                        if (!filter.has(selector)) {\n                          stats.nonSimple.add(selector);\n                        }\n                      } else {\n                        stats.type.add(selector);\n                      }\n                    }\n                  }\n                }\n              }\n            }\n          }\n    \n          return {\n            styleRules,\n            inlineStyles,\n            externalSheets,\n            stats: {\n              // Simple.\n              type: stats.type.size,\n              class: stats.class.size,\n              id: stats.id.size,\n              universal: stats.universal.size,\n              attribute: stats.attribute.size,\n    \n              // Non-simple.\n              nonSimple: stats.nonSimple.size,\n              nonSimpleSelectors: Array.from(stats.nonSimple).sort()\n            }\n          }\n        })()",returnByValue:!0});if("object"===e.type)return e.value}}y.CSSOverviewModel=x,t.SDKModel.SDKModel.register(x,{capabilities:2,autostart:!1});var $=Object.freeze({__proto__:null,CSSOverviewModel:x}),k=`.overview-processing-view{overflow:hidden;padding:16px;justify-content:center;align-items:center;height:100%}.overview-processing-view h1{font-size:16px;text-align:center;font-weight:normal;margin:0;padding:8px}.overview-processing-view h2{font-size:12px;text-align:center;font-weight:normal;margin:0;padding-top:32px}\n/*# sourceURL=${import.meta.resolve("./cssOverviewProcessingView.css")} */`;const I={cancel:"Cancel"},A=e.i18n.registerUIStrings("panels/css_overview/CSSOverviewProcessingView.ts",I),M=e.i18n.getLocalizedString.bind(void 0,A),T=(e,t,o)=>{r(a`
    <style>${k}</style>
    <div style="overflow:auto">
      <div class="vbox overview-processing-view">
        <h1>Processing page</h1>
        <div>
          <devtools-button
              @click=${e.onCancel}
              .jslogContext=${"css-overview.cancel-processing"}
              .variant=${"outlined"}>${M(I.cancel)}</devtools-button>
        </div>
      </div>
    </div>`,o)};class O extends n.Widget.Widget{#i=()=>{};#n;constructor(e,t=T){super(e),this.#n=t,this.requestUpdate()}set onCancel(e){this.#i=e,this.requestUpdate()}performUpdate(){this.#n({onCancel:this.#i},{},this.element)}}var U=Object.freeze({__proto__:null,CSSOverviewProcessingView:O,DEFAULT_VIEW:T}),R=`@scope to (devtools-widget > *){.overview-completed-view{overflow:auto;--overview-default-padding:28px;--overview-icon-padding:32px}.overview-completed-view .summary ul,\n  .overview-completed-view .colors ul{display:flex;flex-wrap:wrap;list-style:none;margin:0;padding:0}.overview-completed-view .summary ul{display:grid;grid-template-columns:repeat(auto-fill,140px);gap:16px}.overview-completed-view .colors ul li{display:inline-block;margin:0 0 16px;padding:0 8px 0 0}.overview-completed-view .summary ul li{display:flex;flex-direction:column;grid-column-start:auto}.overview-completed-view li .label{font-size:12px;padding-bottom:2px}.overview-completed-view li .value{font-size:17px}.overview-completed-view ul li span{font-weight:bold}.unused-rules-grid .header-container,\n  .unused-rules-grid .data-container,\n  .unused-rules-grid table.data{position:relative}.unused-rules-grid .data-container{top:0;max-height:350px}.unused-rules-grid{border-left:none;border-right:none}.unused-rules-grid .monospace{display:block;height:18px}.element-grid{flex:1;border-left:none;border-right:none;overflow:auto}.block{width:65px;height:25px;border-radius:3px;margin-right:16px}.block-title{padding-top:4px;font-size:12px;color:var(--sys-color-on-surface);letter-spacing:0;text-transform:uppercase}.block-title.color-text{text-transform:none;max-width:65px;text-overflow:ellipsis;white-space:nowrap;cursor:text;user-select:text;overflow:hidden}.results-section{flex-shrink:0;border-bottom:1px solid var(--sys-color-divider);padding:var(--overview-default-padding) 0 var(--overview-default-padding) 0}.horizontally-padded{padding-left:var(--overview-default-padding);padding-right:var(--overview-default-padding)}.results-section h1{font-size:15px;font-weight:normal;padding:0;margin:0 0 20px;padding-left:calc(var(--overview-default-padding) + var(--overview-icon-padding));position:relative;height:26px;line-height:26px}.results-section h1::before{content:"";display:block;position:absolute;left:var(--overview-default-padding);top:0;width:26px;height:26px;background-image:var(--image-file-cssoverview_icons_2x);background-size:104px 26px}.results-section.horizontally-padded h1{padding-left:var(--overview-icon-padding)}.results-section.horizontally-padded h1::before{left:0}.results-section.summary h1{padding-left:0}.results-section.summary h1::before{display:none}.results-section.colors h1::before{background-position:0 0}.results-section.font-info h1::before{background-position:-26px 0}.results-section.unused-declarations h1::before{background-position:-52px 0}.results-section.media-queries h1::before{background-position:-78px 0}.results-section.colors h2{margin-top:20px;font-size:13px;font-weight:normal}.overview-completed-view .font-info ul,\n  .overview-completed-view .media-queries ul,\n  .overview-completed-view .unused-declarations ul{width:100%;list-style:none;margin:0;padding:0 var(--overview-default-padding)}.overview-completed-view .font-info ul li,\n  .overview-completed-view .media-queries ul li,\n  .overview-completed-view .unused-declarations ul li{display:grid;grid-template-columns:2fr 3fr;gap:12px;margin-bottom:4px;align-items:center}.overview-completed-view .font-info button .details,\n  .overview-completed-view .media-queries button .details,\n  .overview-completed-view .unused-declarations button .details{min-width:100px;text-align:right;margin-right:8px;color:var(--sys-color-primary);pointer-events:none}.overview-completed-view .font-info button .bar-container,\n  .overview-completed-view .media-queries button .bar-container,\n  .overview-completed-view .unused-declarations button .bar-container{flex:1;pointer-events:none}.overview-completed-view .font-info button .bar,\n  .overview-completed-view .media-queries button .bar,\n  .overview-completed-view .unused-declarations button .bar{height:8px;background:var(--sys-color-primary-bright);border-radius:2px;min-width:2px}.overview-completed-view .font-info button,\n  .overview-completed-view .media-queries button,\n  .overview-completed-view .unused-declarations button{border:none;padding:0;padding-right:10px;margin:0;display:flex;align-items:center;border-radius:2px;cursor:pointer;height:28px;background:none;&:focus-visible{outline:2px solid var(--sys-color-state-focus-ring)}&:hover{border-radius:12px;background:var(--sys-color-state-hover-on-subtle)}&:hover .details,\n    &:focus .details{color:color-mix(in srgb,var(--sys-color-primary),var(--sys-color-state-hover-on-prominent) 6%)}&:hover .bar,\n    &:focus .bar{background-color:color-mix(in srgb,var(--sys-color-primary-bright),var(--sys-color-state-hover-on-prominent) 6%);color:var(--sys-color-on-primary)}}.overview-completed-view .font-info .font-metric{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:12px}.overview-completed-view .font-info ul{padding:0}.overview-completed-view .font-info ul li{grid-template-columns:1fr 4fr}.overview-completed-view .font-info h2{font-size:14px;font-weight:bold;margin:0 0 1em}.overview-completed-view .font-info h3{font-size:13px;font-weight:normal;font-style:italic;margin:0 0 0.5em}.overview-completed-view .font-info{padding-bottom:0}.overview-completed-view .font-family{padding:var(--overview-default-padding)}.overview-completed-view .font-family:nth-child(2n+1){background:var(--sys-color-cdt-base-container)}.overview-completed-view .font-family:first-of-type{padding-top:0}.contrast-warning{display:flex;align-items:center;margin-top:2px}.contrast-warning .threshold-label{font-weight:normal;width:30px}.contrast-warning devtools-icon{margin-left:2px}.contrast-preview{padding:0 5px}.contrast-container-in-grid{display:flex;align-items:center}.contrast-container-in-grid > *{margin-right:5px;min-width:initial}::part(node-id-column){align-items:center;height:20px;--show-element-display:none}::part(node-id-column):focus,\n  ::part(node-id-column):hover{--show-element-display:inline-block}::part(show-element){display:var(--show-element-display);height:16px;width:16px}.results-section.colors{forced-color-adjust:none}}.clickableLink{color:var(--color-link);text-decoration:underline;white-space:nowrap}.nonSimple-padding{padding:0 0 10px var(--overview-default-padding)}.overview-completed-view .non-simple-selectors ul{width:100%;list-style:none;margin:0;padding:0 var(--overview-default-padding)}.overview-completed-view .non-simple-selectors ul li{display:grid;grid-template-columns:2fr 3fr;gap:12px;margin-bottom:4px;align-items:center;height:28px}.focusable-item:focus-visible{outline-width:unset}@media (forced-colors: active){.clickableLink{color:linktext}}\n/*# sourceURL=${import.meta.resolve("./cssOverviewCompletedView.css")} */`,L=`@scope to (devtools-widget > *){.overview-sidebar-panel{display:flex;background:var(--sys-color-cdt-base-container);min-width:fit-content;flex-direction:column}.overview-sidebar-panel-item{height:30px;padding-left:30px;display:flex;align-items:center;color:var(--sys-color-on-surface);white-space:nowrap;&:hover{background:var(--sys-color-state-hover-on-subtle)}&:focus{background:var(--sys-color-state-focus-highlight)}&.selected{background:var(--sys-color-tonal-container);color:var(--sys-color-on-tonal-container)}}.overview-toolbar{border-bottom:1px solid var(--sys-color-divider);flex:0 0 auto}.overview-sidebar-panel-item:focus-visible{outline-width:unset}@media (forced-colors: active){.overview-sidebar-panel-item.selected{forced-color-adjust:none;background:Highlight;color:HighlightText}.overview-sidebar-panel-item:hover{forced-color-adjust:none;background:Highlight;color:HighlightText}}}\n/*# sourceURL=${import.meta.resolve("./cssOverviewSidebarPanel.css")} */`;const{classMap:z}=l,_={clearOverview:"Clear overview",cssOverviewPanelSidebar:"CSS overview panel sidebar"},E=e.i18n.registerUIStrings("panels/css_overview/CSSOverviewSidebarPanel.ts",_),V=e.i18n.getLocalizedString.bind(void 0,E),D=(e,t,o)=>{r(a`
      <style>${L}</style>
      <div class="overview-sidebar-panel" @click=${t=>{if(t.target instanceof HTMLElement){const o=t.target.dataset.id;o&&e.onItemClick(o)}}} @keydown=${t=>{if("Enter"===t.key||"ArrowUp"===t.key||"ArrowDown"===t.key){if(t.target instanceof HTMLElement){const o=t.target.dataset.id;o&&e.onItemKeyDown(o,t.key)}t.consume(!0)}}}
           aria-label=${V(_.cssOverviewPanelSidebar)} role="tree">
        <div class="overview-toolbar">
          <devtools-toolbar>
            <devtools-button title=${V(_.clearOverview)} @click=${e.onReset}
                .iconName=${"clear"} .variant=${"toolbar"}
                .jslogContext=${"css-overview.clear-overview"}></devtools-button>
          </devtools-toolbar>
        </div>
        ${e.items.map(({id:t,name:o})=>{const s=t===e.selectedId;return a`
            <div class="overview-sidebar-panel-item ${z({selected:s})}"
                ?autofocus=${s}
                role="treeitem" data-id=${t} tabindex="0"
                jslog=${h.item(`css-overview.${t}`).track({click:!0,keydown:"Enter|ArrowUp|ArrowDown"})}>
              ${o}
            </div>`})}
      </div>`,o)};class P extends n.Widget.VBox{#n;#r=[];#a;#l=(e,t)=>{};#d=()=>{};constructor(e,t=D){super(e,{useShadowDom:!0,delegatesFocus:!0}),this.#n=t}performUpdate(){const e={items:this.#r,selectedId:this.#a,onReset:this.#d,onItemClick:this.#c.bind(this),onItemKeyDown:this.#u.bind(this)};this.#n(e,{},this.contentElement)}set items(e){this.#r=e,this.requestUpdate()}get items(){return this.#r}set selectedId(e){this.#p(e)}set onItemSelected(e){this.#l=e,this.requestUpdate()}set onReset(e){this.#d=e,this.requestUpdate()}#p(e,t=!1){return this.#a=e,this.requestUpdate(),this.#l(e,t),this.updateComplete}#c(e){this.#p(e,!1)}#u(e,t){if("Enter"===t)this.#p(e,!0);else{let o=-1;for(let t=0;t<this.#r.length;t++)if(this.#r[t].id===e){o=t;break}if(o<0)return;const s=(o+("ArrowDown"===t?1:-1))%this.#r.length,i=this.#r[s].id;if(!i)return;this.#p(i,!1).then(()=>{this.element.blur(),this.element.focus()})}}}var j=Object.freeze({__proto__:null,CSSOverviewSidebarPanel:P,DEFAULT_VIEW:D});const N={},{styleMap:W,ref:q}=l,{widgetConfig:F}=n.Widget,H={overviewSummary:"Overview summary",colors:"Colors",fontInfo:"Font info",unusedDeclarations:"Unused declarations",mediaQueries:"Media queries",elements:"Elements",externalStylesheets:"External stylesheets",inlineStyleElements:"Inline style elements",styleRules:"Style rules",typeSelectors:"Type selectors",idSelectors:"ID selectors",classSelectors:"Class selectors",universalSelectors:"Universal selectors",attributeSelectors:"Attribute selectors",nonsimpleSelectors:"Non-simple selectors",backgroundColorsS:"Background colors: {PH1}",textColorsS:"Text colors: {PH1}",fillColorsS:"Fill colors: {PH1}",borderColorsS:"Border colors: {PH1}",thereAreNoFonts:"There are no fonts.",thereAreNoUnusedDeclarations:"There are no unused declarations.",thereAreNoMediaQueries:"There are no media queries.",contrastIssues:"Contrast issues",nOccurrences:"{n, plural, =1 {# occurrence} other {# occurrences}}",contrastIssuesS:"Contrast issues: {PH1}",textColorSOverSBackgroundResults:"Text color {PH1} over {PH2} background results in low contrast for {PH3} elements",aa:"AA",aaa:"AAA",apca:"APCA",element:"Element",declaration:"Declaration",source:"Source",contrastRatio:"Contrast ratio",cssOverviewElements:"CSS overview elements",showElement:"Show element",unableToLink:"(unable to link)",unableToLinkToInlineStyle:"(unable to link to inline style)"},B=e.i18n.registerUIStrings("panels/css_overview/CSSOverviewCompletedView.ts",H),Q=e.i18n.getLocalizedString.bind(void 0,B);function G(e){let{h:t,s:o,l:s}=e.as("hsl");return t=Math.round(360*t),o=Math.round(100*o),s=Math.round(100*s),s=Math.max(0,s-15),`1px solid hsl(${t}deg ${o}% ${s}%)`}const K=new Intl.NumberFormat("en-US"),J=(e,t,o)=>{function i(e,t){if(e&&(e.scrollIntoView(),t)){const t=e.querySelector('button, [tabindex="0"]');t?.focus()}}var l,d,c,p,v,m,g,f,w;r(a`
      <style>${R}</style>
      <devtools-split-view direction="column" sidebar-position="first" sidebar-initial-size="200">
        <devtools-widget slot="sidebar" .widgetConfig=${F(P,{minimumSize:new u.Size(100,25),items:[{name:Q(H.overviewSummary),id:"summary"},{name:Q(H.colors),id:"colors"},{name:Q(H.fontInfo),id:"font-info"},{name:Q(H.unusedDeclarations),id:"unused-declarations"},{name:Q(H.mediaQueries),id:"media-queries"},{name:Q(H.nonsimpleSelectors),id:"nonsimple-selectors"}],selectedId:e.selectedSection,onItemSelected:e.onSectionSelected,onReset:e.onReset})}>
        </devtools-widget>
        <devtools-split-view sidebar-position="second" slot="main" direction="row" sidebar-initial-size="minimized">
          <div class="vbox overview-completed-view" slot="main" @click=${e.onClick}>
            <!-- Dupe the styles into the main container because of the shadow root will prevent outer styles. -->
            <style>${R}</style>
            <div class="results-section horizontally-padded summary"
                  ${q(e=>{t.revealSection.set("summary",i.bind(null,e))})}>
              <h1>${Q(H.overviewSummary)}</h1>
              ${function(e,t,o){const s=(e,t)=>a`
    <li>
      <div class="label">${e}</div>
      <div class="value">${K.format(t)}</div>
    </li>`;return a`<ul>
    ${s(Q(H.elements),e)}
    ${s(Q(H.externalStylesheets),t.externalSheets)}
    ${s(Q(H.inlineStyleElements),t.inlineStyles)}
    ${s(Q(H.styleRules),t.styleRules)}
    ${s(Q(H.mediaQueries),o.length)}
    ${s(Q(H.typeSelectors),t.stats.type)}
    ${s(Q(H.idSelectors),t.stats.id)}
    ${s(Q(H.classSelectors),t.stats.class)}
    ${s(Q(H.universalSelectors),t.stats.universal)}
    ${s(Q(H.attributeSelectors),t.stats.attribute)}
    ${s(Q(H.nonsimpleSelectors),t.stats.nonSimple)}
  </ul>`}(e.elementCount,e.globalStyleStats,e.mediaQueries)}
            </div>
            <div class="results-section horizontally-padded colors"
                ${q(e=>{t.revealSection.set("colors",i.bind(null,e))})}>
                <h1>${Q(H.colors)}</h1>
                ${p=e.backgroundColors,v=e.textColors,m=e.textColorContrastIssues,g=e.fillColors,f=e.borderColors,a`
    <h2>${Q(H.backgroundColorsS,{PH1:p.length})}</h2>
    <ul>${p.map(e=>Y("background",e))}</ul>

    <h2>${Q(H.textColorsS,{PH1:v.length})}</h2>
    <ul>${v.map(e=>Y("text",e))}</ul>

    ${m.size>0?(w=m,a`
    <h2>${Q(H.contrastIssuesS,{PH1:w.size})}</h2>
    <ul>
      ${[...w.entries()].map(([e,t])=>function(e,t){console.assert(t.length>0);let o=t[0];for(const e of t)Math.abs(e.contrastRatio)<Math.abs(o.contrastRatio)&&(o=e);const i=o.textColor.asString("hexa"),n=o.backgroundColor.asString("hexa"),r=s.Runtime.experiments.isEnabled("apca"),l=Q(H.textColorSOverSBackgroundResults,{PH1:i,PH2:n,PH3:t.length}),d=G(o.backgroundColor.asLegacyColor());return a`<li>
    <button
      title=${l} aria-label=${l}
      data-type="contrast" data-key=${e} data-section="contrast" class="block"
      style=${W({color:i,backgroundColor:n,border:d})}
      jslog=${h.action("css-overview.contrast").track({click:!0})}>
      Text
    </button>
    <div class="block-title">
      ${r?a`
        <div class="contrast-warning hidden" $="apca">
          <span class="threshold-label">${Q(H.apca)}</span>
          ${o.thresholdsViolated.apca?oe():se()}
        </div>`:a`
        <div class="contrast-warning hidden">
          <span class="threshold-label">${Q(H.aa)}</span>
          ${o.thresholdsViolated.aa?oe():se()}
        </div>
        <div class="contrast-warning hidden" $="aaa">
          <span class="threshold-label">${Q(H.aaa)}</span>
          ${o.thresholdsViolated.aaa?oe():se()}
        </div>`}
    </div>
  </li>`}(e,t))}
    </ul>`):""}

    <h2>${Q(H.fillColorsS,{PH1:g.length})}</h2>
    <ul>${g.map(e=>Y("fill",e))}</ul>

    <h2>${Q(H.borderColorsS,{PH1:f.length})}</h2>
    <ul>${f.map(e=>Y("border",e))}</ul>`}
              </div>
              <div class="results-section font-info"
                    ${q(e=>{t.revealSection.set("font-info",i.bind(null,e))})}>
                <h1>${Q(H.fontInfo)}</h1>
                ${c=e.fontInfo,c.length>0?a`${c.map(({font:e,fontMetrics:t})=>a`
    <section class="font-family">
      <h2>${e}</h2>
      ${function(e,t){return a`
    <div class="font-metric">
      ${t.map(({label:t,values:o})=>a`
        <div>
          <h3>${t}</h3>
          ${X(o,"font-info",`${e}/${t}`)}
        </div>`)}
    </div>`}(e,t)}
    </section>`)}`:a`<div>${Q(H.thereAreNoFonts)}</div>`}
              </div>
              <div class="results-section unused-declarations"
                    ${q(e=>{t.revealSection.set("unused-declarations",i.bind(null,e))})}>
                <h1>${Q(H.unusedDeclarations)}</h1>
                ${d=e.unusedDeclarations,d.length>0?X(d,"unused-declarations"):a`<div class="horizontally-padded">${Q(H.thereAreNoUnusedDeclarations)}</div>`}
              </div>
              <div class="results-section media-queries"
                    ${q(e=>{t.revealSection.set("media-queries",i.bind(null,e))})}>
              <h1>${Q(H.mediaQueries)}</h1>
              ${l=e.mediaQueries,l.length>0?X(l,"media-queries"):a`<div class="horizontally-padded">${Q(H.thereAreNoMediaQueries)}</div>`}
            </div>
            <!-- Edge-only. Non-simple Selector Stats View -->
            <div class="results-section nonsimple-selectors"
                ${q(e=>{t.revealSection.set("nonsimple-selectors",i.bind(null,e))})}>
              <h1>${Q(H.nonsimpleSelectors)}</h1>
              ${N.renderNonSimpleSelectors(e.globalStyleStats)}
            </div>
            <!-- End Edge-only -->
          </div>
          <devtools-widget slot="sidebar" .widgetConfig=${F(e=>{const o=new n.TabbedPane.TabbedPane(e);return t.closeAllTabs=()=>{o.closeTabs(o.tabIds())},t.addTab=(e,t,s,i)=>{o.hasTab(e)||o.appendTab(e,t,s,void 0,void 0,!0,void 0,void 0,i),o.selectTab(e);o.parentWidget().setSidebarMinimized(!1)},o.addEventListener(n.TabbedPane.Events.TabClosed,e=>{if(0===o.tabIds().length){o.parentWidget().setSidebarMinimized(!0)}}),o})}>
          </devtools-widget>
        </devtools-split-view>
      </devtools-split-view>`,o)};function X(e,t,o=""){const s=e.reduce((e,t)=>e+t.nodes.length,0);return a`
      <ul aria-label=${t}>
        ${e.map(({title:e,nodes:i})=>{const n=100*i.length/s,r=Q(H.nOccurrences,{n:i.length});return a`<li>
            <div class="title">${e}</div>
            <button data-type=${t} data-path=${o} data-label=${e}
            jslog=${h.action().track({click:!0}).context(`css-overview.${t}`)}
            aria-label=${`${e}: ${r}`}>
              <div class="details">${r}</div>
              <div class="bar-container">
                <div class="bar" style=${W({width:n})}></div>
              </div>
            </button>
          </li>`})}
  </ul>`}function Y(e,t){const s=o.Color.parse(t)?.asLegacyColor();return s?a`<li>
    <button title=${t} data-type="color" data-color=${t}
      data-section=${e} class="block"
      style=${W({backgroundColor:t,border:G(s)})}
      jslog=${h.action("css-overview.color").track({click:!0})}>
    </button>
    <div class="block-title color-text">${t}</div>
  </li>`:d}N.DEFAULT_VIEW=J,N.renderNonSimpleSelectors=function(e){return a`${d}`};let Z=class extends n.Widget.VBox{onReset=()=>{};#v="summary";#h;#m;#g;#f;#w;#n;#b={revealSection:new Map,closeAllTabs:()=>{},addTab:(e,t,o,s)=>{}};constructor(e,t=N.DEFAULT_VIEW){super(e),this.#n=t,this.registerRequiredCSS(R),this.#g=new v.Linkifier.Linkifier(20,!0),this.#f=new Map,this.#w=null}set target(e){if(!e)return;const o=e.model(t.CSSModel.CSSModel),s=e.model(t.DOMModel.DOMModel);if(!o||!s)throw new Error("Target must provide CSS and DOM models");this.#h=o,this.#m=s}#S(e,t){const o=this.#b.revealSection.get(e);o&&o(t)}#d(){this.#y(),this.onReset()}#y(){this.#b.closeAllTabs(),this.#f=new Map,N.CSSOverviewCompletedView.pushedNodes.clear(),this.#v="summary",this.requestUpdate()}#C(e){if(!e.target)return;const t=e.target.dataset,o=t.type;if(!o||!this.#w)return;let s;switch(o){case"contrast":{const e=t.section,i=t.key;if(!i)return;s={type:o,key:i,nodes:this.#w.textColorContrastIssues.get(i)||[],section:e};break}case"color":{const e=t.color,i=t.section;if(!e)return;let n;switch(i){case"text":n=this.#w.textColors.get(e);break;case"background":n=this.#w.backgroundColors.get(e);break;case"fill":n=this.#w.fillColors.get(e);break;case"border":n=this.#w.borderColors.get(e)}if(!n)return;n=Array.from(n).map(e=>({nodeId:e})),s={type:o,color:e,nodes:n,section:i};break}case"unused-declarations":{const e=t.label;if(!e)return;const i=this.#w.unusedDeclarations.get(e);if(!i)return;s={type:o,declaration:e,nodes:i};break}case"media-queries":{const e=t.label;if(!e)return;const i=this.#w.mediaQueries.get(e);if(!i)return;s={type:o,text:e,nodes:i};break}case"font-info":{const e=t.label;if(!t.path)return;const[i,n]=t.path.split("/");if(!e)return;const r=this.#w.fontInfo.get(i);if(!r)return;const a=r.get(n);if(!a)return;const l=a.get(e);if(!l)return;s={type:o,name:`${e} (${i}, ${n})`,nodes:l.map(e=>({nodeId:e}))};break}default:return}e.consume(),this.#x(s),this.requestUpdate()}performUpdate(){if(!this.#w||!("backgroundColors"in this.#w)||!("textColors"in this.#w))return;const e={elementCount:this.#w.elementCount,backgroundColors:this.#$(this.#w.backgroundColors),textColors:this.#$(this.#w.textColors),textColorContrastIssues:this.#w.textColorContrastIssues,fillColors:this.#$(this.#w.fillColors),borderColors:this.#$(this.#w.borderColors),globalStyleStats:this.#w.globalStyleStats,mediaQueries:this.#k(this.#w.mediaQueries),unusedDeclarations:this.#k(this.#w.unusedDeclarations),fontInfo:this.#I(this.#w.fontInfo),selectedSection:this.#v,onClick:this.#C.bind(this),onSectionSelected:this.#S.bind(this),onReset:this.#d.bind(this)};this.#n(e,this.#b,this.element)}#x(e){let t="",o="";switch(e.type){case"contrast":{const{section:s,key:i}=e;t=`${s}-${i}`,o=Q(H.contrastIssues);break}case"color":{const{section:s,color:i}=e;t=`${s}-${i}`,o=`${i.toUpperCase()} (${s})`;break}case"unused-declarations":{const{declaration:s}=e;t=`${s}`,o=`${s}`;break}case"media-queries":{const{text:s}=e;t=`${s}`,o=`${s}`;break}case"font-info":{const{name:s}=e;t=`${s}`,o=`${s}`;break}}let s=this.#f.get(t);if(!s){if(!this.#m||!this.#h)throw new Error("Unable to initialize CSS overview, missing models");s=new te(this.#m,this.#h,this.#g),s.data=e.nodes,this.#f.set(t,s)}this.#b.addTab(t,o,s,e.type)}#$(e){return Array.from(e.keys()).sort((e,t)=>{const s=o.Color.parse(e)?.asLegacyColor(),i=o.Color.parse(t)?.asLegacyColor();return s&&i?o.ColorUtils.luminance(i.rgba())-o.ColorUtils.luminance(s.rgba()):0})}#I(e){return Array.from(e.entries()).map(([e,t])=>({font:e,fontMetrics:Array.from(t.entries()).map(([e,t])=>({label:e,values:this.#k(t)}))}))}#k(e){return Array.from(e.entries()).sort((e,t)=>{const o=e[1];return t[1].length-o.length}).map(([e,t])=>({title:e,nodes:t}))}set overviewData(e){this.#w=e,this.requestUpdate()}static pushedNodes=new Set};N.CSSOverviewCompletedView=Z;const ee=(e,t,o)=>{const{items:i,visibility:n}=e;r(a`
    <div>
      <devtools-data-grid class="element-grid" striped inline
         name=${Q(H.cssOverviewElements)}>
        <table>
          <tr>
            ${n.has("node-id")?a`
              <th id="node-id" weight="50" sortable>
                ${Q(H.element)}
              </th>`:d}
            ${n.has("declaration")?a`
              <th id="declaration" weight="50" sortable>
                ${Q(H.declaration)}
              </th>`:d}
            ${n.has("source-url")?a`
              <th id="source-url" weight="100">
                ${Q(H.source)}
              </th>`:d}
            ${n.has("contrast-ratio")?a`
              <th id="contrast-ratio" weight="25" width="150px" sortable fixed>
                ${Q(H.contrastRatio)}
              </th>`:d}
          </tr>
          ${i.map(({data:e,link:t,showNode:o})=>a`
            <tr>
              ${n.has("node-id")?function(e,t,o){if(!t)return d;return a`
    <td>
      ${t}
      <devtools-icon part="show-element" name="select-element"
          title=${Q(H.showElement)} tabindex="0"
          @click=${()=>o?.()}></devtools-icon>
    </td>`}(0,t,o):d}
              ${n.has("declaration")?function(e){if(!("declaration"in e))throw new Error("Declaration entry is missing a declaration.");return a`<td>${e.declaration}</td>`}(e):d}
              ${n.has("source-url")?function(e,t){if("range"in e&&e.range)return t?a`<td>${t}</td>`:a`<td>${Q(H.unableToLink)}</td>`;return a`<td>${Q(H.unableToLinkToInlineStyle)}</td>`}(e,t):d}
              ${n.has("contrast-ratio")?function(e){if(!("contrastRatio"in e))throw new Error("Contrast ratio entry is missing a contrast ratio.");const t=s.Runtime.experiments.isEnabled("apca"),o=c.NumberUtilities.floor(e.contrastRatio,2),i=t?o+"%":o,n=G(e.backgroundColor),r=e.textColor.asString(),l=e.backgroundColor.asString();return a`
    <td>
      <div class="contrast-container-in-grid">
          <span class="contrast-preview" style=${W({border:n,color:r,backgroundColor:l})}>Aa</span>
          <span>${i}</span>
          ${t?a`
            <span>${Q(H.apca)}</span>${e.thresholdsViolated.apca?oe():se()}`:a`
            <span>${Q(H.aa)}</span>${e.thresholdsViolated.aa?oe():se()}
            <span>${Q(H.aaa)}</span>${e.thresholdsViolated.aaa?oe():se()}`}
      </div>
    </td>`}(e):d}
            </tr>`)}
        </table>
      </devtools-data-grid>
    </div>`,o)};class te extends n.Widget.Widget{#m;#h;#g;#w;#n;constructor(e,t,o,s=ee){super(),this.#m=e,this.#h=t,this.#g=o,this.#n=s,this.#w=[]}set data(e){this.#w=e,this.requestUpdate()}async performUpdate(){const e=new Set;if(!this.#w.length)return void this.#n({items:[],visibility:e},{},this.element);const[s]=this.#w;let i;if("nodeId"in s&&s.nodeId&&e.add("node-id"),"declaration"in s&&s.declaration&&e.add("declaration"),"sourceURL"in s&&s.sourceURL&&e.add("source-url"),"contrastRatio"in s&&s.contrastRatio&&e.add("contrast-ratio"),"nodeId"in s&&e.has("node-id")){const e=this.#w.reduce((e,t)=>{const o=t.nodeId;return N.CSSOverviewCompletedView.pushedNodes.has(o)?e:(N.CSSOverviewCompletedView.pushedNodes.add(o),e.add(o))},new Set);i=await this.#m.pushNodesByBackendIdsToFrontend(e)}const n=await Promise.all(this.#w.map(async s=>{let n,r;if("nodeId"in s&&e.has("node-id")){const e=i?.get(s.nodeId)??null;e&&(n=await o.Linkifier.Linkifier.linkify(e),r=()=>e.scrollIntoView())}if("range"in s&&s.range&&s.styleSheetId&&e.has("source-url")){const e=p.TextRange.TextRange.fromObject(s.range),o=this.#h.styleSheetHeaderForId(s.styleSheetId);if(o){const s=o.lineNumberInSource(e.startLine),i=o.columnNumberInSource(e.startLine,e.startColumn),r=new t.CSSModel.CSSLocation(o,s,i);n=this.#g.linkifyCSSLocation(r)}}return{data:s,link:n,showNode:r}}));this.#n({items:n,visibility:e},{},this.element)}}function oe(){return a`
    <devtools-icon name="clear" class="small" style="color:var(--icon-error);"></devtools-icon>`}function se(){return a`
    <devtools-icon name="checkmark" class="small"
        style="color:var(--icon-checkmark-green);></devtools-icon>`}const ie={nonsimpleSelectors:"Non-simple selectors",learnMore:"Learn more",performance:"Performance",learnMoreSelectorStats:"Learn more about selector stats",nonSimpleSelectorList:"Non simple CSS selector list",copiedCssSelector:"Copied CSS Selector"},ne=e.i18n.registerUIStrings("panels/css_overview/CSSOverviewCompletedView_edge.ts",ie),re=e.i18n.getLocalizedString.bind(void 0,ne);class ae extends Z{constructor(e,t=J){super(e,t)}}N.DEFAULT_VIEW=J,N.renderNonSimpleSelectors=function(e){return e.stats.nonSimpleSelectors.length>0?a`
                  <div class="nonSimple-padding">Get CSS selector performance information from the
                    <button id="revealPerformancePanel" tabindex="0" class="focusable-item" @click=${()=>{n.ViewManager.ViewManager.instance().showView("timeline")}}>
                    ${re(ie.performance)}
                    </button> panel.
                    <x-link $="learn-more" href=${"https://learn.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/evaluate-performance/selector-stats"} class="clickableLink focusable-item" tabindex="0" aria-label=${re(ie.learnMoreSelectorStats)}>
                      ${re(ie.learnMore)}
                    </x-link>
                  </div>
                  <ul class="selector-list" aria-label=${re(ie.nonSimpleSelectorList)}>
                    ${e.stats.nonSimpleSelectors.map((e,t)=>a`
                      <li class="focusable-item" tabindex=${0===t?"0":"-1"} aria-label=${e.toString()}
                      @click=${()=>{navigator.clipboard.writeText(e.toString()),n.ARIAUtils.LiveAnnouncer.alert(re(ie.copiedCssSelector))}}
                      @keydown=${t=>{"Enter"===t.key&&(navigator.clipboard.writeText(e.toString()),n.ARIAUtils.LiveAnnouncer.alert(re(ie.copiedCssSelector)))}}
                        <div class="title">${e}</div>
                      </li>`)}
                  </ul>`:a`<div class="horizontally-padded">${re(ie.nonsimpleSelectors)}</div>`},N.CSSOverviewCompletedView=ae;var le=Object.freeze({__proto__:null,CSSOverviewCompletedView:ae}),de=`@scope to (devtools-widget > *){h1{font-weight:normal}.css-overview-start-view{padding:24px;display:flex;flex-direction:column;background-color:var(--sys-color-cdt-base-container);overflow:auto}.start-capture-wrapper{width:fit-content}.preview-feature{padding:12px 16px;border:1px solid var(--sys-color-neutral-outline);color:var(--sys-color-on-surface);font-size:13px;line-height:20px;border-radius:12px;margin:42px 0;letter-spacing:0.01em}.preview-header{color:var(--sys-color-primary);font-size:13px;line-height:20px;letter-spacing:0.01em;margin:9px 0 14px}.preview-icon{vertical-align:middle}.feedback-prompt{margin-bottom:24px}.feedback-prompt .devtools-link{color:-webkit-link;cursor:pointer;text-decoration:underline}.resources{display:flex;flex-direction:row}.thumbnail-wrapper{width:144px;height:92px;margin-right:20px}.video-doc-header{font-size:13px;line-height:20px;letter-spacing:0.04em;color:var(--sys-color-on-surface);margin-bottom:2px}devtools-feedback-button{align-self:flex-end}.resources .devtools-link{font-size:14px;line-height:22px;letter-spacing:0.04em;text-decoration-line:underline;color:var(--sys-color-primary)}}.preview-feature,\n.feedback-standalone{display:none}\n/*# sourceURL=${import.meta.resolve("./cssOverviewStartView.css")} */`;const ce={captureOverview:"Capture overview",identifyCSSImprovements:"Identify potential CSS improvements",capturePageCSSOverview:"Capture an overview of your page’s CSS",identifyCSSImprovementsWithExampleIssues:"Identify potential CSS improvements (e.g. low contrast issues, unused declarations, color or font mismatches)",locateAffectedElements:"Locate the affected elements in the Elements panel",quickStartWithCSSOverview:"Quick start: get started with the new CSS overview panel"},ue=e.i18n.registerUIStrings("panels/css_overview/CSSOverviewStartView.ts",ce),pe=e.i18n.getLocalizedString.bind(void 0,ue),ve="https://docs.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/",he=(e,t,o)=>{r(a`
    <style>${de}</style>
    <div class="css-overview-start-view">
      <devtools-panel-introduction-steps>
        <span slot="title">${pe(ce.identifyCSSImprovements)}</span>
        <span slot="step-1">${pe(ce.capturePageCSSOverview)}</span>
        <span slot="step-2">${pe(ce.identifyCSSImprovementsWithExampleIssues)}</span>
        <span slot="step-3">${pe(ce.locateAffectedElements)}</span>
      </devtools-panel-introduction-steps>
      <div class="start-capture-wrapper">
        <devtools-button
          class="start-capture"
          autofocus
          .variant=${"primary"}
          .jslogContext=${"css-overview.capture-overview"}
          @click=${e.onStartCapture}>
          ${pe(ce.captureOverview)}
        </devtools-button>
      </div>
      <devtools-panel-feedback .data=${{feedbackUrl:ve,quickStartUrl:"https://docs.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/",quickStartLinkText:pe(ce.quickStartWithCSSOverview)}}>
      </devtools-panel-feedback>
      <devtools-feedback-button .data=${{feedbackUrl:ve}}>
      </devtools-feedback-button>
    </div>`,o)};class me extends n.Widget.Widget{#n;onStartCapture=()=>{};constructor(e,t=he){super(e,{useShadowDom:!0,delegatesFocus:!0}),this.#n=t,this.performUpdate()}performUpdate(){this.#n({onStartCapture:this.onStartCapture},{},this.contentElement)}}const ge={},{widgetConfig:fe}=n.Widget,we=(e,t,o)=>{r("start"===e.state?a`
      <devtools-widget .widgetConfig=${fe(me,{onStartCapture:e.onStartCapture})}></devtools-widget>`:"processing"===e.state?a`
      <devtools-widget .widgetConfig=${fe(O,{onCancel:e.onCancel})}></devtools-widget>`:a`
      <devtools-widget .widgetConfig=${fe(ae,{onReset:e.onReset,overviewData:e.overviewData,target:e.target})}></devtools-widget>`,o)};let be,Se=class extends n.Panel.Panel{#A;#M;#T;#O;#U;#R;#L;#z;#_;#E;#V;#D;#P;#n;constructor(e=we){super("css-overview"),this.#A=t.TargetManager.TargetManager.instance().inspectedURL(),t.TargetManager.TargetManager.instance().addEventListener("InspectedURLChanged",this.#j,this),this.#n=e,t.TargetManager.TargetManager.instance().observeTargets(this),this.#y()}#N(){m.userMetrics.actionTaken(m.UserMetrics.Action.CaptureCssOverviewClicked),this.#W()}#j(){this.#A!==t.TargetManager.TargetManager.instance().inspectedURL()&&(this.#A=t.TargetManager.TargetManager.instance().inspectedURL(),this.#y())}targetAdded(e){e===t.TargetManager.TargetManager.instance().primaryPageTarget()&&(this.#M=e.model(x)??void 0)}targetRemoved(){}#q(){if(!this.#M)throw new Error("Did not retrieve model information yet.");return this.#M}#y(){this.#T=new Map,this.#O=new Map,this.#U=new Map,this.#R=new Map,this.#L=new Map,this.#z=new Map,this.#_=new Map,this.#E=0,this.#V={styleRules:0,inlineStyles:0,externalSheets:0,stats:{type:0,class:0,id:0,universal:0,attribute:0,nonSimple:0,nonSimpleSelectors:[]}},this.#D=new Map,this.#F()}#F(){this.#P="start",this.performUpdate()}#H(){this.#P="processing",this.performUpdate()}#B(){this.#P="completed",this.performUpdate()}performUpdate(){const e={state:this.#P,onStartCapture:this.#N.bind(this),onCancel:this.#y.bind(this),onReset:this.#y.bind(this),target:this.#M?.target(),overviewData:{backgroundColors:this.#T,textColors:this.#O,textColorContrastIssues:this.#D,fillColors:this.#U,borderColors:this.#R,globalStyleStats:this.#V,fontInfo:this.#L,elementCount:this.#E,mediaQueries:this.#z,unusedDeclarations:this.#_}};this.#n(e,{},this.contentElement)}async#W(){this.#H();const e=this.#q(),[t,{elementCount:o,backgroundColors:s,textColors:i,textColorContrastIssues:n,fillColors:r,borderColors:a,fontInfo:l,unusedDeclarations:d},c]=await Promise.all([e.getGlobalStylesheetStats(),e.getNodeStyleStats(),e.getMediaQueries()]);o&&(this.#E=o),t&&(this.#V=t),c&&(this.#z=c),s&&(this.#T=s),i&&(this.#O=i),n&&(this.#D=n),r&&(this.#U=r),a&&(this.#R=a),l&&(this.#L=l),d&&(this.#_=d),this.#B()}};ge.CSSOverviewPanel=Se;class ye extends Se{static instance(){return be||(be=new ye(we)),be}}ge.CSSOverviewPanel=ye;var Ce=Object.freeze({__proto__:null,CSSOverviewPanel:ye});export{le as CSSOverviewCompletedView,$ as CSSOverviewModel,Ce as CSSOverviewPanel,U as CSSOverviewProcessingView,j as CSSOverviewSidebarPanel,S as CSSOverviewUnusedDeclarations};
//# sourceMappingURL=css_overview.js.map
