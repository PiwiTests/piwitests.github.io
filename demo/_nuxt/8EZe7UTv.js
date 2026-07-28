import{d as F,B as W,o,f as u,g as n,h as e,c,z as E,q as C,p as N,t as y,j as a,v as m,s as O,l as s,_ as R,F as V,i,r as I,m as g,A as G}from"./DJVQ4ewg.js";import{a as T,d as K,_ as L}from"./DsLUNwYp.js";import{_ as Y}from"./DTvYShOk.js";import{_ as q}from"./CEoJG6Aq.js";import{u as H}from"./DZUYzoBQ.js";const M={class:"flex items-center gap-3"},J={class:"p-2 bg-primary/10 rounded-lg shrink-0"},Q={class:"text-xl font-semibold inline-flex items-center gap-1"},X={class:"text-sm text-gray-500 dark:text-gray-400"},Z={class:"flex flex-col items-center shrink-0"},tt={key:1},et={key:0,class:"w-px flex-1 mt-2 min-h-6 bg-gray-200 dark:bg-gray-700"},st={class:"flex-1 pb-6"},rt={class:"flex items-center gap-2 mb-1"},ot={class:"font-medium"},it={class:"text-sm text-gray-600 dark:text-gray-400 mb-3"},nt={class:"border-t border-gray-200 dark:border-gray-700 pt-4 mt-2"},at={key:0,class:"mt-4 space-y-6"},lt={class:"text-sm text-gray-600 dark:text-gray-400 mb-3"},dt={class:"flex items-center justify-between text-sm text-gray-500 dark:text-gray-400"},pt=`// tests/fixtures.ts
import { test as base, expect } from '@playwright/test'
import { piwiFixtures } from '@piwitests/reporter'

export const test = base.extend(piwiFixtures)
export { expect }`,ut=`// your test file
import { test, expect } from './fixtures'

test('homepage loads', async ({ page }) => {
  await page.goto('/')
  // network requests, web vitals, console errors, and ARIA snapshots
  // are captured automatically and appear in the dashboard
})`,ct=`// tests/fixtures.ts
import { test as base } from '@playwright/test'
import { extendPiwiFixtures } from '@piwitests/reporter'

export const test = extendPiwiFixtures(base)
export { expect } from '@playwright/test'`,mt=F({__name:"GetStartedWizard",setup(gt){const P=G(),h=g(()=>!!P.public.authEnabled),b=H(),_=I("http://localhost:3000");W(()=>{_.value=window.location.origin});function w(d){const t=["projectName: 'my-project',"];return b||(t.unshift(`serverUrl: '${_.value}',`),h.value&&t.push("apiKey: process.env.PIWI_API_KEY,")),t.map(l=>`${d}${l}`).join(`
`)}const A=g(()=>`import { defineConfig } from '@playwright/test'

export default defineConfig({
  reporter: [
    ['list'],
    ['@piwitests/reporter', {
${w("      ")}
    }],
  ],
  use: {
    trace: 'retain-on-failure',
  },
})`),z=g(()=>`import { defineConfig } from '@playwright/test'
import PiwiDashboard from '@piwitests/reporter'

export default PiwiDashboard.wrapConfig(
  defineConfig({
    // your existing config
    use: {
      trace: 'retain-on-failure',
    },
  }),
  {
${w("    ")}
  },
)`),x=g(()=>{const d=[{title:"Start the dashboard",description:"You're already here — the dashboard is running.",done:!0},{title:"Install the reporter",description:"Add the Piwi reporter to your Playwright project.",code:"npm install --save-dev @piwitests/reporter",lang:"bash"}];return h.value&&d.push({title:"Create an API key",description:"Authentication is enabled on this instance, so the reporter needs a key to submit results. Create one, then set it as PIWI_API_KEY in your CI secrets (used by the snippet below).",action:"create-api-key"}),d.push({title:"Configure Playwright",description:b?"Add the reporter to your playwright.config.ts. While this app is running it needs no URL or token — the reporter finds it automatically.":"Add the reporter to your playwright.config.ts.",code:A.value,lang:"typescript"},{title:"Run your tests",description:"Results appear in the dashboard automatically. The project is created on first submit.",code:"npx playwright test",lang:"bash"}),d.map((t,l)=>({id:l+1,...t}))}),S=["zero","one","two","three","four","five","six"],j=g(()=>S[x.value.length]??String(x.value.length)),f=I(!1);return(d,t)=>{const l=N,U=L,$=O,k=R,p=Y,v=T,B=q;return o(),u(B,null,{header:n(()=>[e("div",M,[e("div",J,[i(l,{name:"i-lucide-rocket",class:"size-5 text-primary"})]),e("div",null,[e("h2",Q,[t[1]||(t[1]=s(" Get started in 60 seconds ",-1)),i(U,{topic:"home.get-started"})]),e("p",X,"Send your first test run in "+y(a(j))+" steps",1)])])]),footer:n(()=>[e("div",dt,[e("span",null,[t[18]||(t[18]=s("Need more options? See the ",-1)),i(v,{to:"reporter","no-icon":"",class:"text-primary hover:underline"},{default:n(()=>[...t[17]||(t[17]=[s("full reporter docs",-1)])]),_:1}),t[19]||(t[19]=s(".",-1))]),i(k,{to:a(K)("demo/"),target:"_blank",variant:"ghost",size:"sm",color:"neutral","trailing-icon":"i-lucide-external-link"},{default:n(()=>[...t[20]||(t[20]=[s(" View demo with sample data ",-1)])]),_:1},8,["to"])])]),default:n(()=>[e("div",null,[(o(!0),c(V,null,E(a(x),(r,D)=>(o(),c("div",{key:r.id,class:"flex gap-4"},[e("div",Z,[e("div",{class:C(["flex size-8 items-center justify-center rounded-full text-sm font-semibold",r.done?"bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400":"bg-primary/10 text-primary"])},[r.done?(o(),u(l,{key:0,name:"i-lucide-check",class:"size-4"})):(o(),c("span",tt,y(r.id),1))],2),D<a(x).length-1?(o(),c("div",et)):m("",!0)]),e("div",st,[e("div",rt,[e("h3",ot,y(r.title),1),r.done?(o(),u($,{key:0,color:"success",variant:"subtle",size:"xs"},{default:n(()=>[...t[2]||(t[2]=[s("Done",-1)])]),_:1})):m("",!0)]),e("p",it,y(r.description),1),r.action==="create-api-key"?(o(),u(k,{key:0,to:"/settings/users",icon:"i-lucide-key-round",size:"sm",variant:"soft"},{default:n(()=>[...t[3]||(t[3]=[s(" Create an API key ",-1)])]),_:1})):m("",!0),r.code?(o(),u(p,{key:1,code:r.code,lang:r.lang},null,8,["code","lang"])):m("",!0)])]))),128)),e("div",nt,[e("button",{class:"flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors w-full text-left",onClick:t[0]||(t[0]=r=>f.value=!a(f))},[i(l,{name:"i-lucide-chevron-right",class:C(["size-4 transition-transform duration-200",a(f)?"rotate-90":""])},null,8,["class"]),t[4]||(t[4]=s(" Go further — simpler config & capture fixtures ",-1))]),a(f)?(o(),c("div",at,[e("div",null,[t[5]||(t[5]=e("h4",{class:"font-medium text-sm mb-1"},[s(" Simpler config with "),e("code",{class:"text-primary text-xs"},"wrapConfig")],-1)),t[6]||(t[6]=e("p",{class:"text-sm text-gray-600 dark:text-gray-400 mb-3"},[s(" Instead of manually adding the reporter array entry, "),e("code",{class:"text-xs bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded"},"wrapConfig"),s(" auto-injects the reporter and chains the global setup in one call. It also registers the run on the dashboard "),e("em",null,"before"),s(" your "),e("code",{class:"text-xs bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded"},"globalSetup"),s(" runs, so the dashboard shows an initializing state during setup. ")],-1)),i(p,{code:a(z),lang:"typescript"},null,8,["code"])]),e("div",null,[t[14]||(t[14]=e("h4",{class:"font-medium text-sm mb-1"},[s(" Capture fixtures — network, Web Vitals, console & locator healing with "),e("code",{class:"text-primary text-xs"},"piwiFixtures")],-1)),e("p",lt,[t[8]||(t[8]=s(" Extend your Playwright ",-1)),t[9]||(t[9]=e("code",{class:"text-xs bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded"},"test",-1)),t[10]||(t[10]=s(" with ",-1)),t[11]||(t[11]=e("code",{class:"text-xs bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded"},"piwiFixtures",-1)),t[12]||(t[12]=s(" to automatically capture network timing, browser Web Vitals, console errors, ARIA snapshots on failure, and the locator snapshots that power locator healing. See the ",-1)),i(v,{to:"capture-fixtures","no-icon":"",class:"text-primary hover:underline"},{default:n(()=>[...t[7]||(t[7]=[s("capture fixtures guide",-1)])]),_:1}),t[13]||(t[13]=s(". ",-1))]),t[15]||(t[15]=e("p",{class:"text-xs font-semibold uppercase tracking-wide text-gray-400 dark:text-gray-500 mb-2"}," Option A — extend your existing fixtures ",-1)),i(p,{code:pt,lang:"typescript",class:"mb-3"}),i(p,{code:ut,lang:"typescript",class:"mb-4"}),t[16]||(t[16]=e("p",{class:"text-xs font-semibold uppercase tracking-wide text-gray-400 dark:text-gray-500 mb-2"}," Option B — one-line extend ",-1)),i(p,{code:ct,lang:"typescript"})])])):m("",!0)])])]),_:1})}}}),_t=Object.assign(mt,{__name:"GetStartedWizard"});export{_t as _};
