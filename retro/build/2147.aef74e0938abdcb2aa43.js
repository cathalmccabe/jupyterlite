(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[2147],{2147:(t,e,s)=>{"use strict";s.r(e),s.d(e,{DocumentManager:()=>C,DocumentWidgetManager:()=>D,IDocumentManager:()=>E,PathStatus:()=>W,SaveHandler:()=>f,SavingStatus:()=>A,isValidFileName:()=>d,renameDialog:()=>l,renameFile:()=>h,shouldOverwrite:()=>c});var i,n=s(18477),r=s(78548),a=s(57630),o=s(77031);function l(t,e,s){const i=(s=s||a.nullTranslator).load("jupyterlab");return(0,n.showDialog)({title:i.__("Rename File"),body:new u(e),focusNodeSelector:"input",buttons:[n.Dialog.cancelButton({label:i.__("Cancel")}),n.Dialog.okButton({label:i.__("Rename")})]}).then((s=>{if(!s.value)return null;if(!d(s.value))return(0,n.showErrorMessage)(i.__("Rename Error"),Error(i.__('"%1" is not a valid name for a file. Names must have nonzero length, and cannot include "/", "\\", or ":"',s.value))),null;const a=r.PathExt.dirname(e),o=r.PathExt.join(a,s.value);return h(t,e,o)}))}function h(t,e,s){return t.rename(e,s).catch((i=>{if(-1===i.message.indexOf("409"))throw i;return c(s).then((i=>i?t.overwrite(e,s):Promise.reject("File not renamed")))}))}function c(t,e){const s=(e=e||a.nullTranslator).load("jupyterlab"),i={title:s.__("Overwrite file?"),body:s.__('"%1" already exists, overwrite?',t),buttons:[n.Dialog.cancelButton({label:s.__("Cancel")}),n.Dialog.warnButton({label:s.__("Overwrite")})]};return(0,n.showDialog)(i).then((t=>Promise.resolve(t.button.accept)))}function d(t){return t.length>0&&!/[\/\\:]/.test(t)}class u extends o.Widget{constructor(t){super({node:i.createRenameNode(t)}),this.addClass("jp-FileDialog");const e=r.PathExt.extname(t),s=this.inputNode.value=r.PathExt.basename(t);this.inputNode.setSelectionRange(0,s.length-e.length)}get inputNode(){return this.node.getElementsByTagName("input")[0]}getValue(){return this.inputNode.value}}!function(t){t.createRenameNode=function(t,e){const s=(e=e||a.nullTranslator).load("jupyterlab"),i=document.createElement("div"),n=document.createElement("label");n.textContent=s.__("File Path");const r=document.createElement("span");r.textContent=t;const o=document.createElement("label");o.textContent=s.__("New Name"),o.className="jp-new-name-title";const l=document.createElement("input");return i.appendChild(n),i.appendChild(r),i.appendChild(o),i.appendChild(l),i}}(i||(i={}));var g=s(64984),_=s(79028),p=s(66065),m=s(20337),v=s(58137);class f{constructor(t){this._autosaveTimer=-1,this._minInterval=-1,this._interval=-1,this._isActive=!1,this._inDialog=!1,this._isDisposed=!1,this._multiplier=10,this._context=t.context;const e=t.saveInterval||120;this._minInterval=1e3*e,this._interval=this._minInterval,this._context.fileChanged.connect(this._setTimer,this),this._context.disposed.connect(this.dispose,this)}get saveInterval(){return this._interval/1e3}set saveInterval(t){this._minInterval=this._interval=1e3*t,this._isActive&&this._setTimer()}get isActive(){return this._isActive}get isDisposed(){return this._isDisposed}dispose(){this.isDisposed||(this._isDisposed=!0,clearTimeout(this._autosaveTimer),v.Signal.clearData(this))}start(){this._isActive=!0,this._setTimer()}stop(){this._isActive=!1,clearTimeout(this._autosaveTimer)}_setTimer(){clearTimeout(this._autosaveTimer),this._isActive&&(this._autosaveTimer=window.setTimeout((()=>{this._save()}),this._interval))}_save(){const t=this._context;if(this._setTimer(),!t)return;if(!t.contentsModel||!t.contentsModel.writable||!t.model.dirty||this._inDialog)return;const e=(new Date).getTime();t.save().then((()=>{if(this.isDisposed)return;const t=(new Date).getTime()-e;this._interval=Math.max(this._multiplier*t,this._minInterval),this._setTimer()})).catch((t=>{"Cancel"!==t.message&&console.error("Error in Auto-Save",t.message)}))}}var y,w,P=s(98669),x=s(91884);class D{constructor(t){this._activateRequested=new v.Signal(this),this._isDisposed=!1,this._registry=t.registry,this.translator=t.translator||a.nullTranslator}get activateRequested(){return this._activateRequested}get isDisposed(){return this._isDisposed}dispose(){this.isDisposed||(this._isDisposed=!0,v.Signal.disconnectReceiver(this))}createWidget(t,e){const s=t.createNew(e);return this._initializeWidget(s,t,e),s}_initializeWidget(t,e,s){y.factoryProperty.set(t,e);const i=new P.DisposableSet;(0,_.each)(this._registry.widgetExtensions(e.name),(e=>{const n=e.createNew(t,s);n&&i.add(n)})),y.disposablesProperty.set(t,i),t.disposed.connect(this._onWidgetDisposed,this),this.adoptWidget(s,t),s.fileChanged.connect(this._onFileChanged,this),s.pathChanged.connect(this._onPathChanged,this),s.ready.then((()=>{this.setCaption(t)}))}adoptWidget(t,e){y.widgetsProperty.get(t).push(e),x.MessageLoop.installMessageHook(e,this),e.addClass("jp-Document"),e.title.closable=!0,e.disposed.connect(this._widgetDisposed,this),y.contextProperty.set(e,t)}findWidget(t,e){const s=y.widgetsProperty.get(t);if(s)return(0,_.find)(s,(t=>{const s=y.factoryProperty.get(t);return!!s&&s.name===e}))}contextForWidget(t){return y.contextProperty.get(t)}cloneWidget(t){const e=y.contextProperty.get(t);if(!e)return;const s=y.factoryProperty.get(t);if(!s)return;const i=s.createNew(e,t);return this._initializeWidget(i,s,e),i}closeWidgets(t){const e=y.widgetsProperty.get(t);return Promise.all((0,_.toArray)((0,_.map)(e,(t=>this.onClose(t))))).then((()=>{}))}deleteWidgets(t){const e=y.widgetsProperty.get(t);return Promise.all((0,_.toArray)((0,_.map)(e,(t=>this.onDelete(t))))).then((()=>{}))}messageHook(t,e){switch(e.type){case"close-request":return this.onClose(t),!1;case"activate-request":{const e=this.contextForWidget(t);e&&this._activateRequested.emit(e.path);break}}return!0}async setCaption(t){const e=this.translator.load("jupyterlab"),s=y.contextProperty.get(t);if(!s)return;const i=s.contentsModel;if(i)return s.listCheckpoints().then((n=>{if(t.isDisposed)return;const a=n[n.length-1],o=a?r.Time.format(a.last_modified):"None";let l=e.__("Name: %1\nPath: %2\n",i.name,i.path);s.model.readOnly?l+=e.__("Read-only"):l+=e.__("Last Saved: %1\n",r.Time.format(i.last_modified))+e.__("Last Checkpoint: %1",o),t.title.caption=l}));t.title.caption=""}async onClose(t){var e;const[s,i]=await this._maybeClose(t,this.translator);if(t.isDisposed)return!0;if(s){if(!i){const s=y.contextProperty.get(t);if(!s)return!0;(null===(e=s.contentsModel)||void 0===e?void 0:e.writable)?await s.save(!0):await s.saveAs()}if(t.isDisposed)return!0;t.dispose()}return s}onDelete(t){return t.dispose(),Promise.resolve(void 0)}_maybeClose(t,e){var s;const i=(e=e||a.nullTranslator).load("jupyterlab"),r=y.contextProperty.get(t);if(!r)return Promise.resolve([!0,!0]);let o=y.widgetsProperty.get(r);if(!o)return Promise.resolve([!0,!0]);o=(0,_.toArray)((0,_.filter)(o,(t=>{const e=y.factoryProperty.get(t);return!!e&&!1===e.readOnly})));const l=y.factoryProperty.get(t);if(!l)return Promise.resolve([!0,!0]);if(!r.model.dirty||o.length>1||l.readOnly)return Promise.resolve([!0,!0]);const h=t.title.label,c=(null===(s=r.contentsModel)||void 0===s?void 0:s.writable)?i.__("Save"):i.__("Save as");return(0,n.showDialog)({title:i.__("Save your work"),body:i.__('Save changes in "%1" before closing?',h),buttons:[n.Dialog.cancelButton({label:i.__("Cancel")}),n.Dialog.warnButton({label:i.__("Discard")}),n.Dialog.okButton({label:c})]}).then((t=>[t.button.accept,"warn"===t.button.displayType]))}_widgetDisposed(t){const e=y.contextProperty.get(t);if(!e)return;const s=y.widgetsProperty.get(e);s&&(_.ArrayExt.removeFirstOf(s,t),s.length||e.dispose())}_onWidgetDisposed(t){y.disposablesProperty.get(t).dispose()}_onFileChanged(t){const e=y.widgetsProperty.get(t);(0,_.each)(e,(t=>{this.setCaption(t)}))}_onPathChanged(t){const e=y.widgetsProperty.get(t);(0,_.each)(e,(t=>{this.setCaption(t)}))}}!function(t){t.contextProperty=new m.AttachedProperty({name:"context",create:()=>{}}),t.factoryProperty=new m.AttachedProperty({name:"factory",create:()=>{}}),t.widgetsProperty=new m.AttachedProperty({name:"widgets",create:()=>[]}),t.disposablesProperty=new m.AttachedProperty({name:"disposables",create:()=>new P.DisposableSet})}(y||(y={}));class C{constructor(t){this._activateRequested=new v.Signal(this),this._contexts=[],this._isDisposed=!1,this._autosave=!0,this._autosaveInterval=120,this.translator=t.translator||a.nullTranslator,this.registry=t.registry,this.services=t.manager,this._collaborative=!!t.collaborative,this._dialogs=t.sessionDialogs||n.sessionContextDialogs,this._docProviderFactory=t.docProviderFactory,this._opener=t.opener,this._when=t.when||t.manager.ready;const e=new D({registry:this.registry,translator:this.translator});e.activateRequested.connect(this._onActivateRequested,this),this._widgetManager=e,this._setBusy=t.setBusy}get activateRequested(){return this._activateRequested}get autosave(){return this._autosave}set autosave(t){this._autosave=t,this._contexts.forEach((e=>{const s=w.saveHandlerProperty.get(e);s&&(!0!==t||s.isActive?!1===t&&s.isActive&&s.stop():s.start())}))}get autosaveInterval(){return this._autosaveInterval}set autosaveInterval(t){this._autosaveInterval=t,this._contexts.forEach((e=>{const s=w.saveHandlerProperty.get(e);s&&(s.saveInterval=t||120)}))}get isDisposed(){return this._isDisposed}dispose(){this.isDisposed||(this._isDisposed=!0,v.Signal.clearData(this),this._contexts.forEach((t=>this._widgetManager.closeWidgets(t))),this._widgetManager.dispose(),this._contexts.length=0)}cloneWidget(t){return this._widgetManager.cloneWidget(t)}closeAll(){return Promise.all(this._contexts.map((t=>this._widgetManager.closeWidgets(t)))).then((()=>{}))}closeFile(t){const e=this._contextsForPath(t).map((t=>this._widgetManager.closeWidgets(t)));return Promise.all(e).then((t=>{}))}contextForWidget(t){return this._widgetManager.contextForWidget(t)}copy(t,e){return this.services.contents.copy(t,e)}createNew(t,e="default",s){return this._createOrOpenDocument("create",t,e,s)}deleteFile(t){return this.services.sessions.stopIfNeeded(t).then((()=>this.services.contents.delete(t))).then((()=>(this._contextsForPath(t).forEach((t=>this._widgetManager.deleteWidgets(t))),Promise.resolve(void 0))))}findWidget(t,e="default"){const s=r.PathExt.normalize(t);let i=[e];if("default"===e){const t=this.registry.defaultWidgetFactory(s);if(!t)return;i=[t.name]}else null===e&&(i=this.registry.preferredWidgetFactories(s).map((t=>t.name)));for(const t of this._contextsForPath(s))for(const e of i)if(null!==e){const s=this._widgetManager.findWidget(t,e);if(s)return s}}newUntitled(t){return"file"===t.type&&(t.ext=t.ext||".txt"),this.services.contents.newUntitled(t)}open(t,e="default",s,i){return this._createOrOpenDocument("open",t,e,s,i)}openOrReveal(t,e="default",s,i){const n=this.findWidget(t,e);return n?(this._opener.open(n,i||{}),n):this.open(t,e,s,i||{})}overwrite(t,e){const s=`${e}.${p.UUID.uuid4()}`,i=()=>this.rename(s,e);return this.rename(t,s).then((()=>this.deleteFile(e))).then(i,i)}rename(t,e){return this.services.contents.rename(t,e)}_findContext(t,e){const s=this.services.contents.normalize(t);return(0,_.find)(this._contexts,(t=>t.path===s&&t.factoryName===e))}_contextsForPath(t){const e=this.services.contents.normalize(t);return this._contexts.filter((t=>t.path===e))}_createContext(t,e,s){const i=this.services.contents.getModelDBFactory(t)||void 0,n=new g.Context({opener:(t,e)=>{this._widgetManager.adoptWidget(n,t),this._opener.open(t,e)},manager:this.services,factory:e,path:t,kernelPreference:s,modelDBFactory:i,setBusy:this._setBusy,sessionDialogs:this._dialogs,collaborative:this._collaborative,docProviderFactory:this._docProviderFactory}),r=new f({context:n,saveInterval:this.autosaveInterval});return w.saveHandlerProperty.set(n,r),n.ready.then((()=>{this.autosave&&r.start()})),n.disposed.connect(this._onContextDisposed,this),this._contexts.push(n),n}_onContextDisposed(t){_.ArrayExt.removeFirstOf(this._contexts,t)}_widgetFactoryFor(t,e){const{registry:s}=this;if("default"===e){const i=s.defaultWidgetFactory(t);if(!i)return;e=i.name}return s.getWidgetFactory(e)}_createOrOpenDocument(t,e,s="default",i,n){const r=this._widgetFactoryFor(e,s);if(!r)return;const a=r.modelName||"text",o=this.registry.getModelFactory(a);if(!o)return;const l=this.registry.getKernelPreference(e,r.name,i);let h,c=Promise.resolve(void 0);if("open"===t)h=this._findContext(e,o.name)||null,h||(h=this._createContext(e,o,l),c=this._when.then((()=>h.initialize(!1))));else{if("create"!==t)throw new Error(`Invalid argument 'which': ${t}`);h=this._createContext(e,o,l),c=this._when.then((()=>h.initialize(!0)))}const d=this._widgetManager.createWidget(r,h);return this._opener.open(d,n||{}),c.catch((t=>{d.close()})),d}_onActivateRequested(t,e){this._activateRequested.emit(e)}}!function(t){t.saveHandlerProperty=new m.AttachedProperty({name:"saveHandler",create:()=>{}})}(w||(w={}));var b=s(76150),T=s(96927),F=s.n(T);function M(t){return F().createElement(b.TextItem,{source:t.name,title:t.fullPath})}class W extends n.VDomRenderer{constructor(t){super(new W.Model(t.docManager)),this.node.title=this.model.path}render(){return F().createElement(M,{fullPath:this.model.path,name:this.model.name})}}function S(t){const e=(t.translator||a.nullTranslator).load("jupyterlab");return F().createElement(b.TextItem,{source:e.__("Saving %1",t.fileStatus)})}!function(t){class e extends n.VDomModel{constructor(t){super(),this._onTitleChange=t=>{const e=this._getAllState();this._name=t.label,this._triggerChange(e,this._getAllState())},this._onPathChange=(t,e)=>{const s=this._getAllState();this._path=e,this._name=r.PathExt.basename(e),this._triggerChange(s,this._getAllState())},this._path="",this._name="",this._widget=null,this._docManager=t}get path(){return this._path}get name(){return this._name}get widget(){return this._widget}set widget(t){const e=this._widget;if(null!==e){const t=this._docManager.contextForWidget(e);t?t.pathChanged.disconnect(this._onPathChange):e.title.changed.disconnect(this._onTitleChange)}const s=this._getAllState();if(this._widget=t,null===this._widget)this._path="",this._name="";else{const t=this._docManager.contextForWidget(this._widget);t?(this._path=t.path,this._name=r.PathExt.basename(t.path),t.pathChanged.connect(this._onPathChange)):(this._path="",this._name=this._widget.title.label,this._widget.title.changed.connect(this._onTitleChange))}this._triggerChange(s,this._getAllState())}_getAllState(){return[this._path,this._name]}_triggerChange(t,e){t[0]===e[0]&&t[1]===e[1]||this.stateChanged.emit(void 0)}}t.Model=e}(W||(W={}));class A extends n.VDomRenderer{constructor(t){super(new A.Model(t.docManager)),this.translator=t.translator||a.nullTranslator}render(){return null===this.model||null===this.model.status?null:F().createElement(S,{fileStatus:this.model.status,translator:this.translator})}}!function(t){class e extends n.VDomModel{constructor(t){super(),this._onStatusChange=(t,e)=>{this._status=e,"completed"===this._status?(setTimeout((()=>{this._status=null,this.stateChanged.emit(void 0)}),2e3),this.stateChanged.emit(void 0)):this.stateChanged.emit(void 0)},this._status=null,this._widget=null,this._status=null,this.widget=null,this._docManager=t}get status(){return this._status}get widget(){return this._widget}set widget(t){const e=this._widget;if(null!==e){const t=this._docManager.contextForWidget(e);t&&t.saveState.disconnect(this._onStatusChange)}if(this._widget=t,null===this._widget)this._status=null;else{const t=this._docManager.contextForWidget(this._widget);t&&t.saveState.connect(this._onStatusChange)}}}t.Model=e}(A||(A={}));const E=new p.Token("@jupyterlab/docmanager:IDocumentManager")}}]);
//# sourceMappingURL=2147.aef74e0938abdcb2aa43.js.map