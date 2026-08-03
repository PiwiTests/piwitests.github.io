import{x as U,y as g,z as q,A as Q,B as Z,D as ee,E as V,X as te,C as ne,c as R,d as ae,i as re,e as se,F as $,j as ie,G as B,f as Y,g as X,k as oe,r as O,n as P,s as T,l as W,H as z,I,J as le,K as ce,p as ue,t as de,P as he,v as ye}from"./BuXT_Rom.js";import{d as fe,an as pe,C as ve,K as ge,ad as me,a as K,o as ke,c as xe,x as be,r as Se}from"./BLCaUu0d.js";function Ae(p,n,e){var r=null,s=g(!0),l=null,o=q,c=null,m=U(a);p=typeof p=="function"?p:p===void 0?Q:g(+p),n=typeof n=="function"?n:n===void 0?g(0):g(+n),e=typeof e=="function"?e:e===void 0?Z:g(+e);function a(t){var u,x,d,h=(t=ee(t)).length,f,v=!1,b,i=new Array(h),y=new Array(h);for(l==null&&(c=o(b=m())),u=0;u<=h;++u){if(!(u<h&&s(f=t[u],u,t))===v)if(v=!v)x=u,c.areaStart(),c.lineStart();else{for(c.lineEnd(),c.lineStart(),d=u-1;d>=x;--d)c.point(i[d],y[d]);c.lineEnd(),c.areaEnd()}v&&(i[u]=+p(f,u,t),y[u]=+n(f,u,t),c.point(r?+r(f,u,t):i[u],e?+e(f,u,t):y[u]))}if(b)return c=null,b+""||null}function k(){return V().defined(s).curve(o).context(l)}return a.x=function(t){return arguments.length?(p=typeof t=="function"?t:g(+t),r=null,a):p},a.x0=function(t){return arguments.length?(p=typeof t=="function"?t:g(+t),a):p},a.x1=function(t){return arguments.length?(r=t==null?null:typeof t=="function"?t:g(+t),a):r},a.y=function(t){return arguments.length?(n=typeof t=="function"?t:g(+t),e=null,a):n},a.y0=function(t){return arguments.length?(n=typeof t=="function"?t:g(+t),a):n},a.y1=function(t){return arguments.length?(e=t==null?null:typeof t=="function"?t:g(+t),a):e},a.lineX0=a.lineY0=function(){return k().x(p).y(n)},a.lineY1=function(){return k().x(p).y(e)},a.lineX1=function(){return k().x(r).y(n)},a.defined=function(t){return arguments.length?(s=typeof t=="function"?t:g(!!t),a):s},a.curve=function(t){return arguments.length?(o=t,l!=null&&(c=o(l)),a):o},a.context=function(t){return arguments.length?(t==null?l=c=null:c=o(l=t),a):l},a}const De=Object.assign(Object.assign({},te),{color:void 0,curveType:ne.MonotoneX,baseline:()=>0,opacity:1,cursor:null,line:!1,lineColor:void 0,lineWidth:2,lineDashArray:void 0,minHeight1Px:!1,minHeight:void 0,stackMinHeight:!1}),J=R`
  label: area-component;
`,Ce=re`
  :root {
    --vis-area-cursor: default;
    --vis-area-fill-opacity: 1;
    --vis-area-stroke-color: none;
    --vis-area-stroke-width: 0px;
    --vis-area-stroke-dasharray: none;
    --vis-area-stroke-opacity: 1;
    --vis-area-hover-fill-opacity: none;
    --vis-area-hover-stroke-width: none;

    /* Dark Theme */
    --vis-dark-area-stroke-color: none;
  }

  ${ae} ${`.${J}`} {
    --vis-area-fill-opacity: 0.5;
    --vis-area-stroke-color: var(--vis-dark-area-stroke-color);
  }

`,w=R`
  label: area;
  cursor: var(--vis-area-cursor);
  fill-opacity: var(--vis-area-fill-opacity);
  stroke-width: var(--vis-area-stroke-width);
  stroke-dasharray: var(--vis-area-stroke-dasharray);
  stroke: var(--vis-area-stroke-color);
  stroke-opacity: var(--vis-area-stroke-opacity);

  &:hover {
    fill-opacity: var(--vis-area-hover-fill-opacity);
    stroke-width: var(--vis-area-hover-stroke-width);
  }
`,E=R`
  label: areaLinePath;
  fill: none;
  stroke-dasharray: var(--vis-line-stroke-dasharray);
  stroke-dashoffset: var(--vis-line-stroke-dashoffset);
`,Me=Object.freeze(Object.defineProperty({__proto__:null,area:w,areaLinePath:E,globalStyles:Ce,root:J},Symbol.toStringTag,{value:"Module"}));class H extends se{constructor(n){super(),this._defaultConfig=De,this.config=this._defaultConfig,this.stacked=!0,this.events={[H.selectors.area]:{}},n&&this.setConfig(n),this.stacked=Array.isArray(this.config.y)}get bleed(){const{config:{line:n,lineWidth:e}}=this;if(!n)return{top:0,bottom:0,left:0,right:0};const r=this.yScale.domain(),l=(this.yScale.range()[0]>this.yScale.range()[1]?$.North:$.South)===$.South,o=e>3,c=e>=10;return{top:!c&&(!l&&r[1]===0||l&&r[0]===0)?0:e/2,bottom:!c&&(!l&&r[0]===0||l&&r[1]===0)?0:e/2,left:o?e/2:0,right:o?e/2:0}}_render(n){super._render(n);const{config:e,datamodel:{data:r}}=this,s=ie(n)?n:e.duration,l=B[e.curveType];this._areaGen=Ae().x(i=>i.x).y0(i=>i.y0).y1(i=>i.y1).curve(l);const o=Y(e.y)?e.y:[e.y],c=r.map((i,y)=>this.xScale(X(i,e.x,y))),m=oe(r,e.baseline,o,this._prevNegative);this._prevNegative=m.map(i=>!!i.isMostlyNegative);const a=this.yScale.range(),k=Math.min(a[0],a[1]),t=Math.max(a[0],a[1]),u=[],x=m.map(i=>i.map((y,A)=>{var S,D;const F=c[A],j=O(this.yScale(y[0]),k,t),G=O(this.yScale(y[1]),k,t),L=G>j,C=e.stackMinHeight&&u[A]||0,N=L?j+C:j-C,M=L?G+C:G-C;let _=0;return(e.minHeight||e.minHeight1Px)&&Math.abs(M-N)<((S=e.minHeight)!==null&&S!==void 0?S:1)&&(_=((D=e.minHeight)!==null&&D!==void 0?D:1)-Math.abs(M-N),e.stackMinHeight&&(u[A]=C+_)),{x:F,y0:N,y1:L?M+_:M-_}})),d=x.length-1,h=[...x].reverse(),f=this.g.selectAll(`.${w}`).data(h),v=f.enter().append("path").attr("class",w).attr("d",i=>this._areaGen(i)||this._emptyPath()).style("opacity",0).style("fill",(i,y)=>P(r,e.color,d-y)),b=T(v.merge(f),s).style("opacity",(i,y)=>i.some(S=>S.y0-S.y1!==0)?X(r,e.opacity,d-y):0).style("fill",(i,y)=>P(r,e.color,d-y)).style("cursor",(i,y)=>W(r,e.cursor,d-y));s?b.attrTween("d",(y,A,S)=>{const D=z(S[A]).attr("d"),F=this._areaGen(y)||this._emptyPath();return I(D,F)}):b.attr("d",i=>this._areaGen(i)||this._emptyPath()),T(f.exit(),s).style("opacity",0).remove(),this._renderLines(s,e.line?x:[])}_renderLines(n,e){var r;const{config:s,datamodel:{data:l}}=this,o=e.length-1,c=[...e].reverse(),m=(r=s.lineColor)!==null&&r!==void 0?r:s.color,a=this.g.selectAll(`.${E}`).data(c),k=this.g.selectAll(`.${w}`).nodes(),t=a.enter().insert("path",(d,h)=>k[h+1]).attr("class",E).attr("stroke",(d,h)=>P(l,m,o-h)).attr("stroke-width",s.lineWidth).attr("stroke-opacity",0),u=T(t.merge(a),n).attr("stroke",(d,h)=>P(l,m,o-h)).attr("stroke-width",s.lineWidth).attr("stroke-opacity",1).attr("cursor",(d,h)=>W(l,s.cursor,o-h)).style("stroke-dasharray",(d,h)=>{var f,v;return(v=(f=le(l,s.lineDashArray,h))===null||f===void 0?void 0:f.join(" "))!==null&&v!==void 0?v:null}),x=B[s.curveType];this._lineGen=V().x(d=>d.x).y(d=>d.y1).curve(x),n?u.attrTween("d",(h,f,v)=>{const b=z(v[f]).attr("d")||this._emptyLinePath(),i=this._lineGen(h)||this._emptyLinePath();return I(b,i)}):u.attr("d",d=>this._lineGen(d)||this._emptyLinePath()),T(a.exit(),n).style("opacity",0).remove()}getYDataExtent(n){const{config:e,datamodel:r}=this,s=Y(e.y)?e.y:[e.y],l=this.xScale.domain(),o=n?ce(r.data,l,e.x,!0):r.data;return ue(o,e.baseline,...s)}_emptyPath(){const n=this.xScale.range(),e=this.yScale.domain(),r=this.yScale((e[0]+e[1])/2),s=r;return this._areaGen([{y0:r,y1:s,x:n[0]},{y0:r,y1:s,x:n[1]}])}_emptyLinePath(){const n=this.xScale.range(),e=this.yScale.range();return`M${n[0]},${e[0]} L${n[1]},${e[0]}`}}H.selectors=Me;const _e={"data-vis-component":""},we=fe({__name:"index",props:{color:{type:[Function,String,Array,null]},curveType:{},baseline:{type:[Function,Number,null]},opacity:{type:[Function,Number,null]},cursor:{type:[Function,String,null]},line:{type:Boolean},lineColor:{type:[Function,String,Array,null]},lineWidth:{},lineDashArray:{type:[Function,Array,null]},minHeight1Px:{type:Boolean},minHeight:{},stackMinHeight:{type:Boolean},x:{type:[Function,Number,null]},y:{type:[Function,Number,null,Array]},id:{type:Function},xScale:{type:[Object,Function]},yScale:{type:[Object,Function]},excludeFromDomainCalculation:{type:Boolean},duration:{},events:{},attributes:{},data:{}},setup(p,{expose:n}){const e=pe(de),r=p,s=be(()=>e.data.value??r.data),l=he(r),o=Se();return ve(()=>{ge(()=>{o.value=new H(l.value),o.value?.setData(s.value),e.update(o.value)})}),me(()=>{o.value?.destroy(),e.destroy()}),K(l,(c,m)=>{ye(c,m)||(o.value?.setConfig(l.value),o.value?.render())}),K(s,()=>{o.value?.setData(s.value)}),n({component:o}),(c,m)=>(ke(),xe("div",_e))}});export{we as N};
