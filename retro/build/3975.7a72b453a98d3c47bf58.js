(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[3975],{43975:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>i});var n=a(78548),o=a(16015);const r={id:"@jupyterlab/mathjax2-extension:plugin",autoStart:!0,provides:a(34410).ILatexTypesetter,activate:()=>{const[t,e]=["fullMathjaxUrl","mathjaxConfig"],a=n.PageConfig.getOption(t),i=n.PageConfig.getOption(e);if(!a){const a=`${r.id} uses '${t}' and '${e}' in PageConfig to operate but '${t}' was not found.`;throw new Error(a)}return new o.MathJaxTypesetter({url:a,config:i})}},i=r}}]);
//# sourceMappingURL=3975.7a72b453a98d3c47bf58.js.map