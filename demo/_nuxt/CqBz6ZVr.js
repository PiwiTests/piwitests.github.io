import"./CL6h32p2.js";import"./CUnpNKzh.js";globalThis.process?.getBuiltinModule?.(`node:crypto`);function e(e,t){let n=e.search(/\n    at /);if(n===-1)return t!==void 0&&e.length>t?e.slice(0,t)+`
[truncated]`:e;let r=e.slice(0,n),i=e.slice(n).split(`
`),a=[],o=0,s=()=>{o>0&&(a.push(`\u2026 (${o} internal frame${o>1?`s`:``})`),o=0)};for(let e of i){let t=e.trimStart();t.startsWith(`at `)?e.includes(`node_modules`)||t.startsWith(`at node:`)?o++:(s(),a.push(e)):(t===``||s(),a.push(e))}s();let c=r+`
`+a.join(`
`);return t!==void 0&&c.length>t&&(c=c.slice(0,t)+`
[truncated]`),c}export{e as t};