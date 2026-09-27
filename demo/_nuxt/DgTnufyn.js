function i(e){return n(e).some(t=>t.type==="verdict"||t.type==="narrative"&&t.blocks.some(r=>r.kind==="text"&&r.tone))}function n(e){return e.bands.flatMap(t=>t.widgets)}export{i as h,n as r};
