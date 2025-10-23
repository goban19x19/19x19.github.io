const fs=require('fs');
const text=fs.readFileSync('..\\translation.tsv','utf8');
function parseTSV(text){
  const lines=text.split(/\r?\n/).map(l=>l.trim()).filter(l=>l.length>0);
  if(lines.length===0)return null;
  const headers=lines[0].split('\t').map(h=>h.trim());
  const out={};
  for(let i=1;i<lines.length;i++){
    const cols=lines[i].split('\t');
    const lang=(cols[0]||'').trim();
    if(!lang)continue;
    const obj={};
    for(let j=1;j<headers.length;j++){
      obj[headers[j].trim()]=(cols[j]||'').trim();
    }
    out[lang]=obj;
  }
  return out;
}
const parsed=parseTSV(text);
console.log(Object.keys(parsed).slice(0,10));
console.log(parsed['fr'].sgf_title_prefix);
console.log(Object.keys(parsed['fr']).filter(k=>k.includes('sgf')));
