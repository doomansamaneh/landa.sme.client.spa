import{i as Ce,a4 as we,w as T,C as ee,g as H,f as b,h as y,r as I,a5 as Se,a6 as Me,a7 as qe,K as Re,L as K,a8 as Ve,a9 as _e,o as he,X as Fe,J as Q,S as Ae,aa as Be,R as Ee,H as oe}from"./index.8d5386c3.js";import{u as $e,a as Oe,Q as ue}from"./use-router-link.11c7a824.js";import{a as Pe}from"./QBtn.2183a8c1.js";import{c as be,u as Ie,a as Te,d as ze}from"./focus-manager.eaa59bf6.js";import{c as ye,f as je,h as W}from"./dom.21719d50.js";function Ne({validate:e,resetValidation:t,requiresQForm:l}){const u=Ce(we,!1);if(u!==!1){const{props:f,proxy:h}=H();Object.assign(h,{validate:e,resetValidation:t}),T(()=>f.disable,v=>{v===!0?(typeof t=="function"&&t(),u.unbindComponent(h)):u.bindComponent(h)}),f.disable!==!0&&u.bindComponent(h),ee(()=>{f.disable!==!0&&u.unbindComponent(h)})}else l===!0&&console.error("Parent QForm not found on useFormChild()!")}const ie=/^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,se=/^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,de=/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,J=/^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,X=/^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,ce={date:e=>/^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e),time:e=>/^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e),fulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e),timeOrFulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e),email:e=>/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e),hexColor:e=>ie.test(e),hexaColor:e=>se.test(e),hexOrHexaColor:e=>de.test(e),rgbColor:e=>J.test(e),rgbaColor:e=>X.test(e),rgbOrRgbaColor:e=>J.test(e)||X.test(e),hexOrRgbColor:e=>ie.test(e)||J.test(e),hexaOrRgbaColor:e=>se.test(e)||X.test(e),anyColor:e=>de.test(e)||J.test(e)||X.test(e)};"Boolean Number String Function Array Date RegExp Object".split(" ").forEach(e=>{e.toLowerCase()});const De={...$e,min:{type:Number,default:0},max:{type:Number,default:100},color:String,centerColor:String,trackColor:String,fontSize:String,thickness:{type:Number,default:.2,validator:e=>e>=0&&e<=1},angle:{type:Number,default:0},showValue:Boolean,reverse:Boolean,instantFeedback:Boolean};function Le(e,t,l){return l<=t?t:Math.min(l,Math.max(t,e))}function xt(e,t,l){if(l<=t)return t;const u=l-t+1;let f=t+(e-t)%u;return f<t&&(f=u+f),f===0?0:f}const ae=50,ke=2*ae,pe=ke*Math.PI,Ue=Math.round(pe*1e3)/1e3;ye({name:"QCircularProgress",props:{...De,value:{type:Number,default:0},animationSpeed:{type:[String,Number],default:600},indeterminate:Boolean},setup(e,{slots:t}){const{proxy:{$q:l}}=H(),u=Oe(e),f=b(()=>{const M=(l.lang.rtl===!0?-1:1)*e.angle;return{transform:e.reverse!==(l.lang.rtl===!0)?`scale3d(-1, 1, 1) rotate3d(0, 0, 1, ${-90-M}deg)`:`rotate3d(0, 0, 1, ${M-90}deg)`}}),h=b(()=>e.instantFeedback!==!0&&e.indeterminate!==!0?{transition:`stroke-dashoffset ${e.animationSpeed}ms ease 0s, stroke ${e.animationSpeed}ms ease`}:""),v=b(()=>ke/(1-e.thickness/2)),S=b(()=>`${v.value/2} ${v.value/2} ${v.value} ${v.value}`),p=b(()=>Le(e.value,e.min,e.max)),k=b(()=>pe*(1-(p.value-e.min)/(e.max-e.min))),F=b(()=>e.thickness/2*v.value);function R({thickness:M,offset:A,color:B,cls:D}){return y("circle",{class:"q-circular-progress__"+D+(B!==void 0?` text-${B}`:""),style:h.value,fill:"transparent",stroke:"currentColor","stroke-width":M,"stroke-dasharray":Ue,"stroke-dashoffset":A,cx:v.value,cy:v.value,r:ae})}return()=>{const M=[];e.centerColor!==void 0&&e.centerColor!=="transparent"&&M.push(y("circle",{class:`q-circular-progress__center text-${e.centerColor}`,fill:"currentColor",r:ae-F.value/2,cx:v.value,cy:v.value})),e.trackColor!==void 0&&e.trackColor!=="transparent"&&M.push(R({cls:"track",thickness:F.value,offset:0,color:e.trackColor})),M.push(R({cls:"circle",thickness:F.value,offset:k.value,color:e.color}));const A=[y("svg",{class:"q-circular-progress__svg",style:f.value,viewBox:S.value,"aria-hidden":"true"},M)];return e.showValue===!0&&A.push(y("div",{class:"q-circular-progress__text absolute-full row flex-center content-center",style:{fontSize:e.fontSize}},t.default!==void 0?t.default():[y("div",p.value)])),y("div",{class:`q-circular-progress q-circular-progress--${e.indeterminate===!0?"in":""}determinate`,style:u.value,role:"progressbar","aria-valuemin":e.min,"aria-valuemax":e.max,"aria-valuenow":e.indeterminate===!0?void 0:p.value},je(t.internal,A))}}});const Ze=["rejected"],Ke=[...Ze,"start","finish","added","removed"],He=()=>!0;function Qe(e){const t={};return e.forEach(l=>{t[l]=He}),t}Qe(Ke);let re,Y=0;const $=new Array(256);for(let e=0;e<256;e++)$[e]=(e+256).toString(16).substring(1);const We=(()=>{const e=typeof crypto!="undefined"?crypto:typeof window!="undefined"?window.crypto||window.msCrypto:void 0;if(e!==void 0){if(e.randomBytes!==void 0)return e.randomBytes;if(e.getRandomValues!==void 0)return t=>{const l=new Uint8Array(t);return e.getRandomValues(l),l}}return t=>{const l=[];for(let u=t;u>0;u--)l.push(Math.floor(Math.random()*256));return l}})(),fe=4096;function Je(){(re===void 0||Y+16>fe)&&(Y=0,re=We(fe));const e=Array.prototype.slice.call(re,Y,Y+=16);return e[6]=e[6]&15|64,e[8]=e[8]&63|128,$[e[0]]+$[e[1]]+$[e[2]]+$[e[3]]+"-"+$[e[4]]+$[e[5]]+"-"+$[e[6]]+$[e[7]]+"-"+$[e[8]]+$[e[9]]+"-"+$[e[10]]+$[e[11]]+$[e[12]]+$[e[13]]+$[e[14]]+$[e[15]]}const Xe=[!0,!1,"ondemand"],Ye={modelValue:{},error:{type:Boolean,default:null},errorMessage:String,noErrorIcon:Boolean,rules:Array,reactiveRules:Boolean,lazyRules:{type:[Boolean,String],validator:e=>Xe.includes(e)}};function Ge(e,t){const{props:l,proxy:u}=H(),f=I(!1),h=I(null),v=I(null);Ne({validate:B,resetValidation:A});let S=0,p;const k=b(()=>l.rules!==void 0&&l.rules!==null&&l.rules.length>0),F=b(()=>l.disable!==!0&&k.value===!0),R=b(()=>l.error===!0||f.value===!0),M=b(()=>typeof l.errorMessage=="string"&&l.errorMessage.length>0?l.errorMessage:h.value);T(()=>l.modelValue,()=>{D()}),T(()=>l.reactiveRules,P=>{P===!0?p===void 0&&(p=T(()=>l.rules,()=>{D(!0)})):p!==void 0&&(p(),p=void 0)},{immediate:!0}),T(e,P=>{P===!0?v.value===null&&(v.value=!1):v.value===!1&&(v.value=!0,F.value===!0&&l.lazyRules!=="ondemand"&&t.value===!1&&V())});function A(){S++,t.value=!1,v.value=null,f.value=!1,h.value=null,V.cancel()}function B(P=l.modelValue){if(F.value!==!0)return!0;const z=++S;t.value!==!0&&l.lazyRules!==!0&&(v.value=!0);const O=(q,a)=>{f.value!==q&&(f.value=q);const o=a||void 0;h.value!==o&&(h.value=o),t.value=!1},E=[];for(let q=0;q<l.rules.length;q++){const a=l.rules[q];let o;if(typeof a=="function"?o=a(P):typeof a=="string"&&ce[a]!==void 0&&(o=ce[a](P)),o===!1||typeof o=="string")return O(!0,o),!1;o!==!0&&o!==void 0&&E.push(o)}return E.length===0?(O(!1),!0):(t.value=!0,Promise.all(E).then(q=>{if(q===void 0||Array.isArray(q)===!1||q.length===0)return z===S&&O(!1),!0;const a=q.find(o=>o===!1||typeof o=="string");return z===S&&O(a!==void 0,a),a===void 0},q=>(z===S&&(console.error(q),O(!0)),!1)))}function D(P){F.value===!0&&l.lazyRules!=="ondemand"&&(v.value===!0||l.lazyRules!==!0&&P!==!0)&&V()}const V=Se(B,0);return ee(()=>{p!==void 0&&p(),V.cancel()}),Object.assign(u,{resetValidation:A,validate:B}),Me(u,"hasError",()=>R.value),{isDirtyModel:v,hasRules:k,hasError:R,errorMessage:M,validate:B,resetValidation:A}}const ve=/^on[A-Z]/;function et(e,t){const l={listeners:I({}),attributes:I({})};function u(){const f={},h={};for(const v in e)v!=="class"&&v!=="style"&&ve.test(v)===!1&&(f[v]=e[v]);for(const v in t.props)ve.test(v)===!0&&(h[v]=t.props[v]);l.attributes.value=f,l.listeners.value=h}return qe(u),u(),l}function le(e){return e===void 0?`f_${Je()}`:e}function ne(e){return e!=null&&(""+e).length>0}const tt={...Ie,...Ye,label:String,stackLabel:Boolean,hint:String,hideHint:Boolean,prefix:String,suffix:String,labelColor:String,color:String,bgColor:String,filled:Boolean,outlined:Boolean,borderless:Boolean,standout:[Boolean,String],square:Boolean,loading:Boolean,labelSlot:Boolean,bottomSlots:Boolean,hideBottomSpace:Boolean,rounded:Boolean,dense:Boolean,itemAligned:Boolean,counter:Boolean,clearable:Boolean,clearIcon:String,disable:Boolean,readonly:Boolean,autofocus:Boolean,for:String,maxlength:[Number,String]},rt=["update:modelValue","clear","focus","blur","popup-show","popup-hide"];function at(){const{props:e,attrs:t,proxy:l,vnode:u}=H();return{isDark:Te(e,l.$q),editable:b(()=>e.disable!==!0&&e.readonly!==!0),innerLoading:I(!1),focused:I(!1),hasPopupOpen:!1,splitAttrs:et(t,u),targetUid:I(le(e.for)),rootRef:I(null),targetRef:I(null),controlRef:I(null)}}function lt(e){const{props:t,emit:l,slots:u,attrs:f,proxy:h}=H(),{$q:v}=h;let S;e.hasValue===void 0&&(e.hasValue=b(()=>ne(t.modelValue))),e.emitValue===void 0&&(e.emitValue=r=>{l("update:modelValue",r)}),e.controlEvents===void 0&&(e.controlEvents={onFocusin:s,onFocusout:d}),Object.assign(e,{clearValue:i,onControlFocusin:s,onControlFocusout:d,focus:o}),e.computedCounter===void 0&&(e.computedCounter=b(()=>{if(t.counter!==!1){const r=typeof t.modelValue=="string"||typeof t.modelValue=="number"?(""+t.modelValue).length:Array.isArray(t.modelValue)===!0?t.modelValue.length:0,m=t.maxlength!==void 0?t.maxlength:t.maxValues;return r+(m!==void 0?" / "+m:"")}}));const{isDirtyModel:p,hasRules:k,hasError:F,errorMessage:R,resetValidation:M}=Ge(e.focused,e.innerLoading),A=e.floatingLabel!==void 0?b(()=>t.stackLabel===!0||e.focused.value===!0||e.floatingLabel.value===!0):b(()=>t.stackLabel===!0||e.focused.value===!0||e.hasValue.value===!0),B=b(()=>t.bottomSlots===!0||t.hint!==void 0||k.value===!0||t.counter===!0||t.error!==null),D=b(()=>t.filled===!0?"filled":t.outlined===!0?"outlined":t.borderless===!0?"borderless":t.standout?"standout":"standard"),V=b(()=>`q-field row no-wrap items-start q-field--${D.value}`+(e.fieldClass!==void 0?` ${e.fieldClass.value}`:"")+(t.rounded===!0?" q-field--rounded":"")+(t.square===!0?" q-field--square":"")+(A.value===!0?" q-field--float":"")+(z.value===!0?" q-field--labeled":"")+(t.dense===!0?" q-field--dense":"")+(t.itemAligned===!0?" q-field--item-aligned q-item-type":"")+(e.isDark.value===!0?" q-field--dark":"")+(e.getControl===void 0?" q-field--auto-height":"")+(e.focused.value===!0?" q-field--focused":"")+(F.value===!0?" q-field--error":"")+(F.value===!0||e.focused.value===!0?" q-field--highlighted":"")+(t.hideBottomSpace!==!0&&B.value===!0?" q-field--with-bottom":"")+(t.disable===!0?" q-field--disabled":t.readonly===!0?" q-field--readonly":"")),P=b(()=>"q-field__control relative-position row no-wrap"+(t.bgColor!==void 0?` bg-${t.bgColor}`:"")+(F.value===!0?" text-negative":typeof t.standout=="string"&&t.standout.length>0&&e.focused.value===!0?` ${t.standout}`:t.color!==void 0?` text-${t.color}`:"")),z=b(()=>t.labelSlot===!0||t.label!==void 0),O=b(()=>"q-field__label no-pointer-events absolute ellipsis"+(t.labelColor!==void 0&&F.value!==!0?` text-${t.labelColor}`:"")),E=b(()=>({id:e.targetUid.value,editable:e.editable.value,focused:e.focused.value,floatingLabel:A.value,modelValue:t.modelValue,emitValue:e.emitValue})),q=b(()=>{const r={for:e.targetUid.value};return t.disable===!0?r["aria-disabled"]="true":t.readonly===!0&&(r["aria-readonly"]="true"),r});T(()=>t.for,r=>{e.targetUid.value=le(r)});function a(){const r=document.activeElement;let m=e.targetRef!==void 0&&e.targetRef.value;m&&(r===null||r.id!==e.targetUid.value)&&(m.hasAttribute("tabindex")===!0||(m=m.querySelector("[tabindex]")),m&&m!==r&&m.focus({preventScroll:!0}))}function o(){be(a)}function c(){ze(a);const r=document.activeElement;r!==null&&e.rootRef.value.contains(r)&&r.blur()}function s(r){clearTimeout(S),e.editable.value===!0&&e.focused.value===!1&&(e.focused.value=!0,l("focus",r))}function d(r,m){clearTimeout(S),S=setTimeout(()=>{document.hasFocus()===!0&&(e.hasPopupOpen===!0||e.controlRef===void 0||e.controlRef.value===null||e.controlRef.value.contains(document.activeElement)!==!1)||(e.focused.value===!0&&(e.focused.value=!1,l("blur",r)),m!==void 0&&m())})}function i(r){Re(r),v.platform.is.mobile!==!0?(e.targetRef!==void 0&&e.targetRef.value||e.rootRef.value).focus():e.rootRef.value.contains(document.activeElement)===!0&&document.activeElement.blur(),t.type==="file"&&(e.inputRef.value.value=null),l("update:modelValue",null),l("clear",t.modelValue),K(()=>{M(),v.platform.is.mobile!==!0&&(p.value=!1)})}function x(){const r=[];return u.prepend!==void 0&&r.push(y("div",{class:"q-field__prepend q-field__marginal row no-wrap items-center",key:"prepend",onClick:Q},u.prepend())),r.push(y("div",{class:"q-field__control-container col relative-position row no-wrap q-anchor--skip"},g())),F.value===!0&&t.noErrorIcon===!1&&r.push(j("error",[y(ue,{name:v.iconSet.field.error,color:"negative"})])),t.loading===!0||e.innerLoading.value===!0?r.push(j("inner-loading-append",u.loading!==void 0?u.loading():[y(Pe,{color:t.color})])):t.clearable===!0&&e.hasValue.value===!0&&e.editable.value===!0&&r.push(j("inner-clearable-append",[y(ue,{class:"q-field__focusable-action",tag:"button",name:t.clearIcon||v.iconSet.field.clear,tabindex:0,type:"button","aria-hidden":null,role:null,onClick:i})])),u.append!==void 0&&r.push(y("div",{class:"q-field__append q-field__marginal row no-wrap items-center",key:"append",onClick:Q},u.append())),e.getInnerAppend!==void 0&&r.push(j("inner-append",e.getInnerAppend())),e.getControlChild!==void 0&&r.push(e.getControlChild()),r}function g(){const r=[];return t.prefix!==void 0&&t.prefix!==null&&r.push(y("div",{class:"q-field__prefix no-pointer-events row items-center"},t.prefix)),e.getShadowControl!==void 0&&e.hasShadow.value===!0&&r.push(e.getShadowControl()),e.getControl!==void 0?r.push(e.getControl()):u.rawControl!==void 0?r.push(u.rawControl()):u.control!==void 0&&r.push(y("div",{ref:e.targetRef,class:"q-field__native row",tabindex:-1,...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0},u.control(E.value))),z.value===!0&&r.push(y("div",{class:O.value},W(u.label,t.label))),t.suffix!==void 0&&t.suffix!==null&&r.push(y("div",{class:"q-field__suffix no-pointer-events row items-center"},t.suffix)),r.concat(W(u.default))}function w(){let r,m;F.value===!0?R.value!==null?(r=[y("div",{role:"alert"},R.value)],m=`q--slot-error-${R.value}`):(r=W(u.error),m="q--slot-error"):(t.hideHint!==!0||e.focused.value===!0)&&(t.hint!==void 0?(r=[y("div",t.hint)],m=`q--slot-hint-${t.hint}`):(r=W(u.hint),m="q--slot-hint"));const n=t.counter===!0||u.counter!==void 0;if(t.hideBottomSpace===!0&&n===!1&&r===void 0)return;const C=y("div",{key:m,class:"q-field__messages col"},r);return y("div",{class:"q-field__bottom row items-start q-field__bottom--"+(t.hideBottomSpace!==!0?"animated":"stale")},[t.hideBottomSpace===!0?C:y(Ae,{name:"q-transition--field-message"},()=>C),n===!0?y("div",{class:"q-field__counter"},u.counter!==void 0?u.counter():e.computedCounter.value):null])}function j(r,m){return m===null?null:y("div",{key:r,class:"q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"},m)}Object.assign(h,{focus:o,blur:c});let L=!1;return Ve(()=>{L=!0}),_e(()=>{L===!0&&t.autofocus===!0&&h.focus()}),he(()=>{Fe.value===!0&&t.for===void 0&&(e.targetUid.value=le()),t.autofocus===!0&&h.focus()}),ee(()=>{clearTimeout(S)}),function(){const m=e.getControl===void 0&&u.control===void 0?{...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0,...q.value}:q.value;return y("label",{ref:e.rootRef,class:[V.value,f.class],style:f.style,...m},[u.before!==void 0?y("div",{class:"q-field__before q-field__marginal row no-wrap items-center",onClick:Q},u.before()):null,y("div",{class:"q-field__inner relative-position col self-stretch"},[y("div",{ref:e.controlRef,class:P.value,tabindex:-1,...e.controlEvents},x()),B.value===!0?w():null]),u.after!==void 0?y("div",{class:"q-field__after q-field__marginal row no-wrap items-center",onClick:Q},u.after()):null])}}const me={date:"####/##/##",datetime:"####/##/## ##:##",time:"##:##",fulltime:"##:##:##",phone:"(###) ### - ####",card:"#### #### #### ####"},G={"#":{pattern:"[\\d]",negate:"[^\\d]"},S:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]"},N:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]"},A:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleUpperCase()},a:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleLowerCase()},X:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleUpperCase()},x:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleLowerCase()}},xe=Object.keys(G);xe.forEach(e=>{G[e].regex=new RegExp(G[e].pattern)});const nt=new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|(["+xe.join("")+"])|(.)","g"),ge=/[.*+?^${}()|[\]\\]/g,_=String.fromCharCode(1),ot={mask:String,reverseFillMask:Boolean,fillMask:[Boolean,String],unmaskedValue:Boolean};function ut(e,t,l,u){let f,h,v,S;const p=I(null),k=I(R());function F(){return e.autogrow===!0||["textarea","text","search","url","tel","password"].includes(e.type)}T(()=>e.type+e.autogrow,A),T(()=>e.mask,a=>{if(a!==void 0)B(k.value,!0);else{const o=E(k.value);A(),e.modelValue!==o&&t("update:modelValue",o)}}),T(()=>e.fillMask+e.reverseFillMask,()=>{p.value===!0&&B(k.value,!0)}),T(()=>e.unmaskedValue,()=>{p.value===!0&&B(k.value)});function R(){if(A(),p.value===!0){const a=z(E(e.modelValue));return e.fillMask!==!1?q(a):a}return e.modelValue}function M(a){if(a<f.length)return f.slice(-a);let o="",c=f;const s=c.indexOf(_);if(s>-1){for(let d=a-c.length;d>0;d--)o+=_;c=c.slice(0,s)+o+c.slice(s)}return c}function A(){if(p.value=e.mask!==void 0&&e.mask.length>0&&F(),p.value===!1){S=void 0,f="",h="";return}const a=me[e.mask]===void 0?e.mask:me[e.mask],o=typeof e.fillMask=="string"&&e.fillMask.length>0?e.fillMask.slice(0,1):"_",c=o.replace(ge,"\\$&"),s=[],d=[],i=[];let x=e.reverseFillMask===!0,g="",w="";a.replace(nt,(m,n,C,U,Z)=>{if(U!==void 0){const N=G[U];i.push(N),w=N.negate,x===!0&&(d.push("(?:"+w+"+)?("+N.pattern+"+)?(?:"+w+"+)?("+N.pattern+"+)?"),x=!1),d.push("(?:"+w+"+)?("+N.pattern+")?")}else if(C!==void 0)g="\\"+(C==="\\"?"":C),i.push(C),s.push("([^"+g+"]+)?"+g+"?");else{const N=n!==void 0?n:Z;g=N==="\\"?"\\\\\\\\":N.replace(ge,"\\\\$&"),i.push(N),s.push("([^"+g+"]+)?"+g+"?")}});const j=new RegExp("^"+s.join("")+"("+(g===""?".":"[^"+g+"]")+"+)?$"),L=d.length-1,r=d.map((m,n)=>n===0&&e.reverseFillMask===!0?new RegExp("^"+c+"*"+m):n===L?new RegExp("^"+m+"("+(w===""?".":w)+"+)?"+(e.reverseFillMask===!0?"$":c+"*")):new RegExp("^"+m));v=i,S=m=>{const n=j.exec(m);n!==null&&(m=n.slice(1).join(""));const C=[],U=r.length;for(let Z=0,N=m;Z<U;Z++){const te=r[Z].exec(N);if(te===null)break;N=N.slice(te.shift().length),C.push(...te)}return C.length>0?C.join(""):m},f=i.map(m=>typeof m=="string"?m:_).join(""),h=f.split(_).join(o)}function B(a,o,c){const s=u.value,d=s.selectionEnd,i=s.value.length-d,x=E(a);o===!0&&A();const g=z(x),w=e.fillMask!==!1?q(g):g,j=k.value!==w;s.value!==w&&(s.value=w),j===!0&&(k.value=w),document.activeElement===s&&K(()=>{if(w===h){const r=e.reverseFillMask===!0?h.length:0;s.setSelectionRange(r,r,"forward");return}if(c==="insertFromPaste"&&e.reverseFillMask!==!0){const r=d-1;V.right(s,r,r);return}if(["deleteContentBackward","deleteContentForward"].indexOf(c)>-1){const r=e.reverseFillMask===!0?d===0?w.length>g.length?1:0:Math.max(0,w.length-(w===h?0:Math.min(g.length,i)+1))+1:d;s.setSelectionRange(r,r,"forward");return}if(e.reverseFillMask===!0)if(j===!0){const r=Math.max(0,w.length-(w===h?0:Math.min(g.length,i+1)));r===1&&d===1?s.setSelectionRange(r,r,"forward"):V.rightReverse(s,r,r)}else{const r=w.length-i;s.setSelectionRange(r,r,"backward")}else if(j===!0){const r=Math.max(0,f.indexOf(_),Math.min(g.length,d)-1);V.right(s,r,r)}else{const r=d-1;V.right(s,r,r)}});const L=e.unmaskedValue===!0?E(w):w;String(e.modelValue)!==L&&l(L,!0)}function D(a,o,c){const s=z(E(a.value));o=Math.max(0,f.indexOf(_),Math.min(s.length,o)),a.setSelectionRange(o,c,"forward")}const V={left(a,o,c,s){const d=f.slice(o-1).indexOf(_)===-1;let i=Math.max(0,o-1);for(;i>=0;i--)if(f[i]===_){o=i,d===!0&&o++;break}if(i<0&&f[o]!==void 0&&f[o]!==_)return V.right(a,0,0);o>=0&&a.setSelectionRange(o,s===!0?c:o,"backward")},right(a,o,c,s){const d=a.value.length;let i=Math.min(d,c+1);for(;i<=d;i++)if(f[i]===_){c=i;break}else f[i-1]===_&&(c=i);if(i>d&&f[c-1]!==void 0&&f[c-1]!==_)return V.left(a,d,d);a.setSelectionRange(s?o:c,c,"forward")},leftReverse(a,o,c,s){const d=M(a.value.length);let i=Math.max(0,o-1);for(;i>=0;i--)if(d[i-1]===_){o=i;break}else if(d[i]===_&&(o=i,i===0))break;if(i<0&&d[o]!==void 0&&d[o]!==_)return V.rightReverse(a,0,0);o>=0&&a.setSelectionRange(o,s===!0?c:o,"backward")},rightReverse(a,o,c,s){const d=a.value.length,i=M(d),x=i.slice(0,c+1).indexOf(_)===-1;let g=Math.min(d,c+1);for(;g<=d;g++)if(i[g-1]===_){c=g,c>0&&x===!0&&c--;break}if(g>d&&i[c-1]!==void 0&&i[c-1]!==_)return V.leftReverse(a,d,d);a.setSelectionRange(s===!0?o:c,c,"forward")}};function P(a){if(Be(a)===!0)return;const o=u.value,c=o.selectionStart,s=o.selectionEnd;if(a.keyCode===37||a.keyCode===39){const d=V[(a.keyCode===39?"right":"left")+(e.reverseFillMask===!0?"Reverse":"")];a.preventDefault(),d(o,c,s,a.shiftKey)}else a.keyCode===8&&e.reverseFillMask!==!0&&c===s?V.left(o,c,s,!0):a.keyCode===46&&e.reverseFillMask===!0&&c===s&&V.rightReverse(o,c,s,!0)}function z(a){if(a==null||a==="")return"";if(e.reverseFillMask===!0)return O(a);const o=v;let c=0,s="";for(let d=0;d<o.length;d++){const i=a[c],x=o[d];if(typeof x=="string")s+=x,i===x&&c++;else if(i!==void 0&&x.regex.test(i))s+=x.transform!==void 0?x.transform(i):i,c++;else return s}return s}function O(a){const o=v,c=f.indexOf(_);let s=a.length-1,d="";for(let i=o.length-1;i>=0&&s>-1;i--){const x=o[i];let g=a[s];if(typeof x=="string")d=x+d,g===x&&s--;else if(g!==void 0&&x.regex.test(g))do d=(x.transform!==void 0?x.transform(g):g)+d,s--,g=a[s];while(c===i&&g!==void 0&&x.regex.test(g));else return d}return d}function E(a){return typeof a!="string"||S===void 0?typeof a=="number"?S(""+a):a:S(a)}function q(a){return h.length-a.length<=0?a:e.reverseFillMask===!0&&a.length>0?h.slice(0,-a.length)+a:a+h.slice(a.length)}return{innerValue:k,hasMask:p,moveCursorForPaste:D,updateMaskValue:B,onMaskedKeydown:P}}const it={name:String};function Ct(e={}){return(t,l,u)=>{t[l](y("input",{class:"hidden"+(u||""),...e.value}))}}function st(e){return b(()=>e.name||e.for)}function dt(e,t){function l(){const u=e.modelValue;try{const f="DataTransfer"in window?new DataTransfer:"ClipboardEvent"in window?new ClipboardEvent("").clipboardData:void 0;return Object(u)===u&&("length"in u?Array.from(u):[u]).forEach(h=>{f.items.add(h)}),{files:f.files}}catch{return{files:void 0}}}return t===!0?b(()=>{if(e.type==="file")return l()}):b(l)}const ct=/[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/,ft=/[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u,vt=/[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/,mt=/[a-z0-9_ -]$/i;function gt(e){return function(l){if(l.type==="compositionend"||l.type==="change"){if(l.target.qComposing!==!0)return;l.target.qComposing=!1,e(l)}else l.type==="compositionupdate"&&l.target.qComposing!==!0&&typeof l.data=="string"&&(Ee.is.firefox===!0?mt.test(l.data)===!1:ct.test(l.data)===!0||ft.test(l.data)===!0||vt.test(l.data)===!0)===!0&&(l.target.qComposing=!0)}}var wt=ye({name:"QInput",inheritAttrs:!1,props:{...tt,...ot,...it,modelValue:{required:!1},shadowText:String,type:{type:String,default:"text"},debounce:[String,Number],autogrow:Boolean,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...rt,"paste","change"],setup(e,{emit:t,attrs:l}){const u={};let f=NaN,h,v,S,p;const k=I(null),F=st(e),{innerValue:R,hasMask:M,moveCursorForPaste:A,updateMaskValue:B,onMaskedKeydown:D}=ut(e,t,x,k),V=dt(e,!0),P=b(()=>ne(R.value)),z=gt(i),O=at(),E=b(()=>e.type==="textarea"||e.autogrow===!0),q=b(()=>E.value===!0||["text","search","url","tel","password"].includes(e.type)),a=b(()=>{const n={...O.splitAttrs.listeners.value,onInput:i,onPaste:d,onChange:w,onBlur:j,onFocus:oe};return n.onCompositionstart=n.onCompositionupdate=n.onCompositionend=z,M.value===!0&&(n.onKeydown=D),e.autogrow===!0&&(n.onAnimationend=g),n}),o=b(()=>{const n={tabindex:0,"data-autofocus":e.autofocus===!0||void 0,rows:e.type==="textarea"?6:void 0,"aria-label":e.label,name:F.value,...O.splitAttrs.attributes.value,id:O.targetUid.value,maxlength:e.maxlength,disabled:e.disable===!0,readonly:e.readonly===!0};return E.value===!1&&(n.type=e.type),e.autogrow===!0&&(n.rows=1),n});T(()=>e.type,()=>{k.value&&(k.value.value=e.modelValue)}),T(()=>e.modelValue,n=>{if(M.value===!0){if(v===!0&&(v=!1,String(n)===f))return;B(n)}else R.value!==n&&(R.value=n,e.type==="number"&&u.hasOwnProperty("value")===!0&&(h===!0?h=!1:delete u.value));e.autogrow===!0&&K(g)}),T(()=>e.autogrow,n=>{n===!0?K(g):k.value!==null&&l.rows>0&&(k.value.style.height="auto")}),T(()=>e.dense,()=>{e.autogrow===!0&&K(g)});function c(){be(()=>{const n=document.activeElement;k.value!==null&&k.value!==n&&(n===null||n.id!==O.targetUid.value)&&k.value.focus({preventScroll:!0})})}function s(){k.value!==null&&k.value.select()}function d(n){if(M.value===!0&&e.reverseFillMask!==!0){const C=n.target;A(C,C.selectionStart,C.selectionEnd)}t("paste",n)}function i(n){if(!n||!n.target)return;if(e.type==="file"){t("update:modelValue",n.target.files);return}const C=n.target.value;if(n.target.qComposing===!0){u.value=C;return}if(M.value===!0)B(C,!1,n.inputType);else if(x(C),q.value===!0&&n.target===document.activeElement){const{selectionStart:U,selectionEnd:Z}=n.target;U!==void 0&&Z!==void 0&&K(()=>{n.target===document.activeElement&&C.indexOf(n.target.value)===0&&n.target.setSelectionRange(U,Z)})}e.autogrow===!0&&g()}function x(n,C){p=()=>{e.type!=="number"&&u.hasOwnProperty("value")===!0&&delete u.value,e.modelValue!==n&&f!==n&&(f=n,C===!0&&(v=!0),t("update:modelValue",n),K(()=>{f===n&&(f=NaN)})),p=void 0},e.type==="number"&&(h=!0,u.value=n),e.debounce!==void 0?(clearTimeout(S),u.value=n,S=setTimeout(p,e.debounce)):p()}function g(){const n=k.value;if(n!==null){const C=n.parentNode.style,{overflow:U}=n.style;C.marginBottom=n.scrollHeight-1+"px",n.style.height="1px",n.style.overflow="hidden",n.style.height=n.scrollHeight+"px",n.style.overflow=U,C.marginBottom=""}}function w(n){z(n),clearTimeout(S),p!==void 0&&p(),t("change",n.target.value)}function j(n){n!==void 0&&oe(n),clearTimeout(S),p!==void 0&&p(),h=!1,v=!1,delete u.value,e.type!=="file"&&setTimeout(()=>{k.value!==null&&(k.value.value=R.value!==void 0?R.value:"")})}function L(){return u.hasOwnProperty("value")===!0?u.value:R.value!==void 0?R.value:""}ee(()=>{j()}),he(()=>{e.autogrow===!0&&g()}),Object.assign(O,{innerValue:R,fieldClass:b(()=>`q-${E.value===!0?"textarea":"input"}`+(e.autogrow===!0?" q-textarea--autogrow":"")),hasShadow:b(()=>e.type!=="file"&&typeof e.shadowText=="string"&&e.shadowText.length>0),inputRef:k,emitValue:x,hasValue:P,floatingLabel:b(()=>P.value===!0||ne(e.displayValue)),getControl:()=>y(E.value===!0?"textarea":"input",{ref:k,class:["q-field__native q-placeholder",e.inputClass],style:e.inputStyle,...o.value,...a.value,...e.type!=="file"?{value:L()}:V.value}),getShadowControl:()=>y("div",{class:"q-field__native q-field__shadow absolute-bottom no-pointer-events"+(E.value===!0?"":" text-no-wrap")},[y("span",{class:"invisible"},L()),y("span",e.shadowText)])});const r=lt(O),m=H();return Object.assign(m.proxy,{focus:c,select:s,getNativeElement:()=>k.value}),r}});export{wt as Q,rt as a,lt as b,at as c,it as d,st as e,ne as f,gt as g,Ct as h,Le as i,xt as n,tt as u};
