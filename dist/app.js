/* A print-first, flat linguistic poster. Data and provenance remain editable JSON. */
(() => {
  'use strict';
  const W=1800,H=1100, $=id=>document.getElementById(id);
  const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const NS='http://www.w3.org/2000/svg';
  const textMeasure=document.createElement('canvas').getContext('2d');
  function textWidth(text,size,weight=400,family='Georgia'){if(!textMeasure)return [...text].length*size*.57;textMeasure.font=`${weight} ${size}px ${family}`;return textMeasure.measureText(text).width;}
  function reading(l){return [...l.word].some(c=>/\p{L}/u.test(c)&&!/\p{Script=Latin}/u.test(c))?(l.mapRomanization||l.romanization||'').split(' · ')[0]:'';}
  const aliases={surg1248:'kca',turo1239:'tru',kurd1259:'kmr',turk1304:'tuk',komi1268:'kpv',nene1249:'yrk',avar1256:'ava',darg1241:'dar',lezg1247:'lez',lakk1252:'lbe',ingu1240:'inh',kaba1278:'kbd',adyg1241:'ady',kara1465:'krc',kumy1244:'kum',kalm1243:'xal',east2304:'bal',nort2645:'lrc',sout2647:'luz',bakh1245:'bqi'};
  const anchors={
    eng:[-1.2,52.4],sco:[-2.8,56.4],deu:[10.4,51.2],nld:[5.2,52.1],fry:[5.5,53.25],ltz:[6.1,49.8],dan:[10,56.1],swe:[16,62],nor:[8,63],isl:[-19,65],fao:[-6.9,62.1],
    spa:[-3.7,39.2],por:[-8,39.4],glg:[-7.6,42.8],cat:[1.4,41.6],oci:[2.8,44.3],fra:[2.1,47.7],ita:[12.5,42.4],ron:[25,45.7],scn:[14.2,37.5],srd:[9,40.1],vec:[12.1,45.6],fur:[13.1,46.2],roh:[9.5,46.7],ast:[-5.8,43.3],arg:[-.1,42.6],
    rus:[40,61.6],ukr:[31,49],bel:[28.4,53.4],pol:[19.1,52],ces:[15.3,49.9],slk:[19.5,48.7],slv:[14.7,46.1],hbs:[18.7,44.3],bul:[25.2,42.7],mkd:[22.2,41.6],hsb:[14.4,51.3],dsb:[14.2,51.8],csb:[18,54.2],lit:[24,55.2],lav:[25,57],
    gle:[-8.4,53.5],gla:[-5.6,57.8],cym:[-3.8,52.3],bre:[-3.5,48.2],glv:[-4.53,54.2],cor:[-4.9,50.3],ell:[23.2,38.9],hye:[44.9,40.3],sqi:[19.7,41.2],pes:[55,32.1],kmr:[42,37.7],oss:[44.2,42.9],
    hun:[19.5,47.2],fin:[26,64.6],est:[25.5,58.7],sme:[23.5,69],krl:[32,64.9],vep:[34.9,61.2],mhr:[48.1,56.6],udm:[53,57.4],eus:[-1.8,43.05],
    arb:[8.8,28.9],apc:[37.3,34.7],acm:[44.1,32.6],heb:[35.1,31.7],mlt:[14.4,35.9],aeb:[9.4,34.3],arz:[29.8,27.9],tur:[33.4,39],aze:[48.2,40.3],kaz:[61,48.5],tat:[49.5,55.1],bak:[56.3,54.3],crh:[34.1,45.2],kir:[73,41.5],uzb:[64.5,40.8],
    kat:[43.1,42.1],kab:[4.8,36.4],tzm:[-4.3,32.8],shi:[-8.5,30.1],che:[45.6,43.25],tuk:[59.3,39.2],kpv:[53,64.9],yrk:[59,69],ava:[46.55,42.55],dar:[47.45,42.4],lez:[48.1,41.65],lbe:[47.05,42.05],inh:[45.05,43.15],kbd:[43.7,43.7],ady:[39.7,44.8],krc:[42.1,43.6],kum:[47.4,43.1],xal:[45.6,46.4],bal:[61,27.8],lrc:[48.6,33.5],luz:[51.1,30.9],bqi:[49.8,32.1],ckb:[45.6,35.6],kal:[-24.5,72.3],amw:[36.484,33.8162],aii:[43,36.75],tru:[41.5084,37.4768],myz:[47.78,30.51],gnc:[-17.85,28.68]
  };
  const offsets={'vls-fr':[-35,25],amw:[-15,8],aii:[-22,55],tru:[-55,-22],myz:[0,0],gnc:[15,-16],eus:[-43,-5],por:[-11,0],glg:[-29,-14],ast:[-8,-32],arg:[5,-23],cat:[9,9],oci:[2,-8],bre:[-18,-3],cym:[-31,2],cor:[-28,18],gla:[-20,-2],glv:[-43,0],fry:[-15,-24],nld:[-17,8],ltz:[-18,14],hsb:[12,-1],dsb:[16,-27],csb:[19,-9],roh:[-21,6],vec:[-2,14],fur:[21,-8],slv:[0,-2],hbs:[0,5],sqi:[-7,10],mkd:[4,11],mlt:[-13,19],heb:[-20,1],kat:[-11,-8],hye:[6,10],aze:[25,5],oss:[-9,-15],che:[18,-15],inh:[-20,-27],kbd:[-17,-34],krc:[-30,-17],ava:[29,-15],dar:[52,0],lbe:[11,26],lez:[42,21],kum:[51,-30],ady:[-31,-8]};
  const important=['eng','spa','fra','deu','ita','rus','ukr','pol','fin','swe','nor','tur','kaz','pes','arb','arz','tuk','kpv','yrk','cat','oci','eus','hun','ron','ell','hye','kat','bal','kmr','kal'];
  const localSizes={amw:18,aii:18,tru:18,myz:20,gnc:20,sqi:18,mkd:17,kat:20,hye:22,aze:20,oss:16,che:18,ava:16,dar:16,lez:18,lbe:15,inh:16,kbd:16,ady:16,krc:18,kum:17};
  const rootColors={};
  const branchColors={Germanic:'#96c8d4',Romance:'#e7b39f',Slavic:'#acb6d5',Baltic:'#c0ce95',Celtic:'#a5c49b',Uralic:'#e6cf87',Semitic:'#e8c69a',Turkic:'#b2d0ba',Kartvelian:'#bea1ca',Berber:'#e3b17f',Basque:'#dd9990',Hellenic:'#c9abd5',Armenian:'#baa8ce',Albanian:'#dcadaf',Iranian:'#d8ad97',Nakh:'#bda8a0',Circassian:'#9eb6bb',Mongolic:'#d9c59e',Eskimo:'#cadcdb'};
  let lex,metadata,coverage,lands,features,legendTitles,nativeWords,languages,byId,byRoot,variants,svg,world,labelsLayer,legendLayer,basePaths,areaPaths,countryLines,projection,path,zoom,transform;
  let mode='root',opacity=.90,labelScale=1,selected=null,search='',focused=null,exportBusy=false;
  const featureById=new Map(), labelPoints=new Map();
  function branch(l){
    // Prefer an exact, specific branch: "Balto-Slavic · Baltic" belongs to Baltic.
    const names=Object.keys(branchColors),parts=(l.branch||'').split('·').map(s=>s.trim()).reverse();
    const exact=parts.map(p=>names.find(k=>k.toLowerCase()===p.toLowerCase())).find(Boolean);
    const s=`${l.branch||''} ${l.family||''}`.toLowerCase();
    return exact||names.find(k=>s.includes(k.toLowerCase()))||l.branch||l.family;
  }
  function root(l){return byRoot.get(l.root)||{id:l.root,label:l.root,form:'',color:'#c5c6bf',description:'No deeper relationship is asserted.'};}
  function originRoute(l){return root(l).routes?.find(r=>r.id===l.etymologyBranch);}
  function key(l){return mode==='branch'?branch(l):originRoute(l)?.id||root(l).id;}
  function color(l){if(!l)return '#c5c6bf';return mode==='branch'?(branchColors[branch(l)]||root(l).color):originRoute(l)?.color||root(l).color;}
  function wordGroup(l){return l?(variants.get(l.variantOf||l.id)||[l]):[];}
  function mixedOrigins(l){return new Set(wordGroup(l).map(w=>originRoute(w)?.id||root(w).id)).size>1;}
  function areaMatches(l){return !focused||wordGroup(l).some(w=>key(w)===focused);}
  function areaFill(l){return l&&mode==='root'&&mixedOrigins(l)?`url(#word-origins-${l.variantOf||l.id})`:color(l);}
  function wordPatterns(defs){
    for(const [id,group]of variants){
      const origins=[...new Map(group.map(l=>[originRoute(l)?.id||root(l).id,l])).values()];
      if(origins.length<2)continue;
      const p=node(defs,'pattern',{id:`word-origins-${id}`,patternUnits:'userSpaceOnUse',width:14,height:14,patternTransform:'rotate(35)'});
      node(p,'rect',{width:14,height:14,fill:color(origins[0])});
      origins.slice(1).forEach((l,i)=>node(p,'rect',{x:i*5,y:0,width:4,height:14,fill:color(l)}));
    }
  }
  function idOf(f){return aliases[f.properties.id]||f.properties.id;}
  function normalize(f){const g=f.geometry;if(!g)return f;const ps=g.type==='Polygon'?[g.coordinates]:g.type==='MultiPolygon'?g.coordinates:[];ps.forEach(p=>p.forEach((r,i)=>{const a=d3.polygonArea(r);if((!i&&a<0)||(i&&a>0))r.reverse();}));return f;}
  function node(parent,tag,attrs={},text=''){const el=parent.append(tag);for(const [k,v]of Object.entries(attrs))el.attr(k,v);if(text!==undefined)el.text(text);return el;}
  function inRing([x,y],r){let inside=false;for(let i=0,j=r.length-1;i<r.length;j=i++){const[a,b]=r[i],[c,d]=r[j];if((b>y)!==(d>y)&&x<(c-a)*(y-b)/(d-b)+a)inside=!inside;}return inside;}
  function contains(f,p){const g=f.geometry,ps=g.type==='Polygon'?[g.coordinates]:g.type==='MultiPolygon'?g.coordinates:[];return ps.some(poly=>inRing(p,poly[0])&&!poly.slice(1).some(r=>inRing(p,r)));}
  function anchorsFor(l){if(l.mapAnchor)return l.mapAnchor;if(anchors[l.id])return anchors[l.id];const f=featureById.get(l.id)?.[0];if(f?.properties.label)return f.properties.label;const land=lands.find(f=>idOf(f)===l.id);return land?d3.geoCentroid(land):null;}
  function addText(parent,text,x,y,size=16,attrs={}){return node(parent,'text',{x,y,'font-family':'Georgia, Times New Roman, serif','font-size':size,fill:'#203b40',...attrs},text);}
  function legendShape(text,weight=400){
    const shape=legendTitles.texts[text]?.[weight>=600?'bold':'regular'];
    if(!shape)throw new Error(`Missing legend typography: ${text}`);
    return shape;
  }
  function legendWidth(text,size){return legendShape(text).width*size/legendTitles.unitsPerEm;}
  function legendText(parent,text,x,y,size=16,attrs={}){
    const shape=legendShape(text,+attrs['font-weight']||400),scale=size/legendTitles.unitsPerEm;
    const group=node(parent,'g',{'class':'legend-text','aria-label':text,'data-legend-text':text,'data-font':legendTitles.font,'data-font-size':size});
    node(group,'title',{},text);
    // Shaped font outlines retain accents and the chosen typeface in every export.
    node(group,'path',{d:shape.path,transform:`translate(${x},${y}) scale(${scale},${-scale})`,fill:attrs.fill||'#203b40'});
    return group;
  }
  function drawLegend(){
    legendLayer.selectAll('*').remove();
    const isBranch=mode==='branch';
    const rows=isBranch?[...new Set(languages.map(branch))].sort().map(b=>({id:b,label:b,legend:b,color:branchColors[b]||'#c5c6bf'})):lex.roots.filter(r=>r.id!=='pie-horse').flatMap(r=>r.routes?[{...r,groupHeading:true},...r.routes.map(route=>({...route,indented:true}))]:[r]);
    legendLayer.attr('transform','translate(34,168)');
    node(legendLayer,'rect',{width:306,height:825,fill:'#fbfaf4','fill-opacity':.97,stroke:'#cfcfc1','stroke-width':.8});
    legendText(legendLayer,isBranch?'Language branches':'Etymology',17,32,18,{'font-weight':700}).attr('class','legend-heading legend-text');
    if(!isBranch){
      legendText(legendLayer,'*h₁éḱwos',17,68,29);
      legendText(legendLayer,'Proto-Indo-European · “horse”',18,89,12,{fill:'#63706b'});
      byRoot.get('pie-horse').routes.forEach((r,i)=>legendRow(r,113+i*21));
      node(legendLayer,'line',{x1:17,x2:289,y1:171,y2:171,stroke:'#d3d7ca','stroke-width':.7});
    }
    const start=isBranch?61:196,step=isBranch?26:17;
    rows.forEach((r,i)=>legendRow(r,start+i*step));
    function legendRow(r,y){
      if(r.groupHeading){
        const g=node(legendLayer,'g',{'class':'legend-group-heading',transform:`translate(17,${y})`,'data-root':r.id});
        const text=r.legend||r.label,size=Math.min(12,272*legendTitles.unitsPerEm/legendShape(text,700).width);
        legendText(g,text,0,1,size,{'font-weight':700});
        node(g,'title',{},r.description||r.label);
        return;
      }
      const g=node(legendLayer,'g',{'class':'poster-legend-row',transform:`translate(17,${y})`,'data-key':r.id,role:'button',tabindex:0,'aria-label':`Highlight ${r.label}`});
      node(g,'rect',{x:-4,y:-12,width:280,height:18,fill:focused===r.id?'#e8eddf':'transparent'});
      const indent=r.indented?8:0;
      node(g,'rect',{x:indent,y:-8,width:10,height:10,fill:r.color,stroke:'#56726d','stroke-width':.2});
      const text=r.legend||r.label,size=isBranch?12.5:Math.min(12,(253-indent)*legendTitles.unitsPerEm/legendShape(text).width);
      legendText(g,text,19+indent,1,size);
      node(g,'title',{},r.description||r.label);
      g.on('click',()=>{focused=focused===r.id?null:r.id;drawLegend();paint();}).on('keydown',e=>{if(e.key==='Enter'){focused=focused===r.id?null:r.id;drawLegend();paint();}});
    }
    legendLayer.attr('data-height',825);
  }
  function labelLayout(){
    if(!labelsLayer)return;
    labelsLayer.selectAll('*').remove();labelPoints.clear();
    if(!$('labels-toggle').checked)return;
    const legendHeight=+legendLayer.attr('data-height')||800;
    const occupied=[[22,150,348,168+legendHeight+12],[30,17,470,143],[22,1041,1775,1090]];
    // Reserve the narrow Balkan placements before the automatic collision pass.
    const balkanOrder=['slv','hbs','sqi','mkd','amw','aii','tru','myz','nld-flemish','vls-fr','kca','hun-ro','srd-cuaddu','ell-hippos','arq'];
    const rank=id=>balkanOrder.includes(id)?balkanOrder.indexOf(id)-10:important.includes(id)?important.indexOf(id):100;
    const list=languages.filter(l=>anchorsFor(l)).sort((a,b)=>rank(a.id)-rank(b.id));
    const candidates=[[0,0],[0,-20],[0,20],[-22,0],[22,0],[-29,-22],[29,-22],[-29,22],[29,22],[0,-40],[0,40],[-48,-15],[48,-15],[-48,20],[48,20],[-65,-30],[65,-30],[-65,30],[65,30],[0,-60],[0,60],[-80,0],[80,0],[-80,-50],[80,-50],[-80,50],[80,50],[0,-90],[0,90],[-105,0],[105,0]];
    for(const l of list){
      const a=anchorsFor(l);if(a[0]<-27||a[0]>68||a[1]<25||a[1]>75)continue;
      const raw=transform.apply(projection(a));
      if(raw[0]<345||raw[0]>1780||raw[1]<28||raw[1]>1022)continue;
      const sz=(l.mapSize||localSizes[l.id]||(important.includes(l.id)?25:20))*labelScale;
      const text=l.word,roman=reading(l),native=nativeWords[l.id],romanSize=Math.max(9.5,sz*.51),romanOffset=Math.max(native?16:12,sz*(native ? .95 : .61)),weight=important.includes(l.id)?600:400;
      const wordWidth=native?native.width*sz/native.unitsPerEm:textWidth(text,sz,weight);
      const estimated=Math.max(23,wordWidth,roman?textWidth(`(${roman})`,romanSize,400,'Arial'):0),height=sz*1.05;
      const base=offsets[l.id]||[0,0];
      let placed=null;
      for(const [dx,dy]of candidates){const x=raw[0]+base[0]+dx,y=raw[1]+base[1]+dy;
        const box=[x-estimated/2-4,y-height*.85-3,x+estimated/2+4,y+(roman?romanOffset+romanSize*.25:height*.25)+3];
        if(box[0]<350||box[2]>1775||box[1]<25||box[3]>1030)continue;
        if(occupied.some(b=>b[0]<box[2]&&b[2]>box[0]&&b[1]<box[3]&&b[3]>box[1]))continue;
        occupied.push(box);placed={x,y,raw,sz};break;
      }
      if(!placed)continue;
      const {x,y,sz:size}=placed;
      labelPoints.set(l.id,{x,y});
      const g=node(labelsLayer,'g',{'class':'word-mark','data-language':l.id,role:'button',tabindex:0,'aria-label':`${l.name}: ${l.word}`});
      const distance=Math.hypot(x-raw[0],y-raw[1]);
      if(distance>15||l.mapPoint){if(distance>15)node(g,'line',{x1:raw[0],y1:raw[1],x2:x,y2:y-5,stroke:'#516b6d','stroke-width':.7,opacity:.65,'class':'label-leader'});node(g,'circle',{cx:raw[0],cy:raw[1],r:l.mapPoint?3.2:1.5,fill:l.mapPoint?color(l):'#536a68',stroke:l.mapPoint?'#fbfaf4':'none','stroke-width':.8,'class':l.mapPoint?'reference-location':'anchor-dot'});}
      if(native){
        const scale=size/native.unitsPerEm;
        node(g,'path',{'class':'word-label native-word-label','aria-label':text,'data-word':text,d:native.path,transform:`translate(${x-native.width*scale/2},${y}) scale(${scale})`,fill:'#203b40','paint-order':'stroke',stroke:'#faf9f2','stroke-width':2.1,'stroke-linejoin':'round','vector-effect':'non-scaling-stroke'});
      }else addText(g,text,x,y,size,{'class':'word-label','text-anchor':'middle',direction:'ltr',style:`font-weight:${important.includes(l.id)?600:400}`,'paint-order':'stroke','stroke':'#faf9f2','stroke-width':2.1,'stroke-linejoin':'round'});
      if(mixedOrigins(l))node(g,'rect',{'class':'word-origin-key',x:x-wordWidth/2,y:y+3,width:wordWidth,height:2.4,fill:color(l)});
      if(roman)addText(g,`(${roman})`,x,y+romanOffset,romanSize,{'class':'reading-label','font-family':'Arial, sans-serif','text-anchor':'middle',direction:'ltr','font-weight':400,'paint-order':'stroke',stroke:'#faf9f2','stroke-width':1.4,'stroke-linejoin':'round',fill:'#38555b'});
      g.on('click',()=>showWord(l.id)).on('keydown',e=>{if(e.key==='Enter')showWord(l.id);});
      if((focused&&key(l)!==focused)||(search&&!matches(l)))g.attr('opacity',.22);
    }
  }
  function matches(l){return `${l.name} ${l.native||''} ${l.word} ${l.romanization||''} ${l.id}`.toLowerCase().includes(search);}
  function paint(){
    basePaths.attr('fill',f=>areaFill(byId.get(idOf(f)))).attr('stroke',f=>color(byId.get(idOf(f))));
    areaPaths.attr('fill',f=>areaFill(byId.get(idOf(f)))).attr('fill-opacity',f=>{
      const l=byId.get(idOf(f));return !areaMatches(l)||(search&&!wordGroup(l).some(matches))?.12:$('overlap-toggle').checked?opacity:1;
    });
    if(focused||search)basePaths.attr('fill-opacity',f=>{const l=byId.get(idOf(f));return !areaMatches(l)||(search&&!wordGroup(l).some(matches))?.25:1;});else basePaths.attr('fill-opacity',1);
    countryLines.attr('display',$('borders-toggle').checked?null:'none');labelLayout();
  }
  function showWord(id){
    const l=byId.get(id);if(!l)return;selected=id;
    const r=root(l),fs=featureById.get(id)||featureById.get(l.variantOf)||[],isMapped=fs.length>0,caveats=[...new Set(fs.map(f=>f.properties.caveat).filter(Boolean))];
    $('inspector').innerHTML=`<p class="inspector-kicker">${esc(l.name)}${l.native&&l.native!==l.name?` · ${esc(l.native)}`:''}</p><h2 class="inspector-word" dir="auto">${esc(l.word)}</h2>${l.romanization?`<p class="inspector-roman">${esc(l.romanization)}</p>`:''}<p class="inspector-family">${esc(l.family)} · ${esc(l.branch||'')}</p><p class="inspector-note">${esc(r.description)}</p><div class="etymology-chain">${(l.chain||[]).map(s=>`<div class="chain-step"><span class="chain-label">${esc(s.label)}</span><strong class="chain-form" dir="auto">${esc(s.form)}</strong></div>`).join('')}</div>${l.notes?`<p class="inspector-note">${esc(l.notes)}</p>`:''}<p class="geometry-note">${fs.some(f=>f.properties.coverageType==='historical island reference fill')?'Historical island reference coastline; no surviving language-area boundary is asserted.':isMapped?'Published language-area geometry, over a continuous country reference layer.':'Word label at a representative location; no separate language-area polygon is asserted.'} ${caveats.map(esc).join(' ')}</p><div class="source-links">${(l.sources||[]).map(s=>`<a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.title)} ↗</a>`).join('')}</div>`;
    const related=wordGroup(l).filter(w=>w.id!==l.id);
    if(related.length){
      const box=document.createElement('p');box.className='inspector-note';box.append('Other mapped forms: ');
      related.forEach((w,i)=>{if(i)box.append(' · ');const button=document.createElement('button');button.type='button';button.className='secondary-button';button.textContent=`${w.word}${w.romanization?` (${w.romanization})`:''}`;button.addEventListener('click',()=>showWord(w.id));box.append(button);});
      $('inspector').querySelector('.inspector-family').after(box);
    }
    $('language-select').value=id;$('word-dialog').showModal();
  }
  function populateLanguages(){const list=languages.filter(l=>!search||matches(l));$('language-select').innerHTML='<option value="">Inspect a word…</option>'+list.map(l=>`<option value="${esc(l.id)}">${esc(l.name)} · ${esc(l.word)}</option>`).join('');}
  function showSources(){
    $('sources-content').innerHTML=`<h3>A poster map, with continuous land coverage</h3><p>The main image uses a flat cylindrical projection and words-only labels. Its colours follow word origins by default: colours group shared lexical ancestry, including borrowings. The PIE horse noun *h₁éḱwos heads separate Scottish Gaelic, Iranian and Greek colour rows. Greek, Russian and Kazakh have multiple selected words: stripes show coexisting origins, with small colour bars beneath the labels. Stripe widths do not encode usage frequency. The caballus / *kaballos family has its own shared heading with separate Romance, Celtic and Albanian colours. The Celtic row does not settle disputed early borrowing directions. English horse has another history.</p><p>All land is coloured. Published minority-language polygons sit above complete Natural Earth land/country geometry. Gaps between speaker footprints use a selected country reference word; this is an explicit cartographic completion, not a new ethnic-boundary estimate or a claim of uniform language use. Thus northern Russia, Sinai, the Zagros and sparsely populated deserts are not left blank.</p><p>Some small varieties have a word label but no separate polygon. Leader lines connect crowded labels to their anchor. Asterisks mark reconstructed forms. Reconstructions and uncertain deeper histories are explained in individual entries.</p><h3>Geographic sources</h3><p>Asher & Moseley (2007), <em>Atlas of the World's Languages</em>, digitized by <a href="https://github.com/Glottography/asher2007world" target="_blank" rel="noopener">Glottography</a> (CC BY 4.0). Traditional-area supplements: <a href="https://github.com/Glottography/carling2025diacl" target="_blank" rel="noopener">DiACL/TITUS, Carling & Gippert 2025</a>, and <a href="https://github.com/Glottography/rantanen2021uralic" target="_blank" rel="noopener">Rantanen et al., Uralic database 2021</a> (CC BY 4.0). Specific supplements retain their source-epoch notes. Background: <a href="https://www.naturalearthdata.com/about/terms-of-use/" target="_blank" rel="noopener">Natural Earth, public domain</a>.</p><p>${languages.length} selected lexical entries; ${featureById.size} lexical joins to source polygons. The Romanian Hungarian supplement uses the 2021 mother-tongue census, selecting administrative units above 50% of known responses; the Székely enclave is separate from smaller border communities. French Flanders uses the French reference background with a Flemish minority point; its former solid Dutch/Flemish footprint is removed inside France. Khanty ԓов shares the Ugric origin colour of Hungarian ló; the source combines Khanty varieties. Other footprints retain their published source epochs. Where a source combines varieties, a representative form is used with notes.</p><p>Romanian supplement: <a href="https://www.ispmn.gov.ro/maps2022" target="_blank" rel="noopener">INS RPL 2021 / ISPMN</a>; the exact selection and source terms are in the <a href="./data/romanian-hungarian-2021.json" target="_blank">supplement record</a>.</p><h3>Download and edit</h3><p><a href="./data/lexicon.json" download>Lexicon and etymologies</a> · <a href="./data/territories.geojson" download>Language footprints</a> · <a href="./data/land-reference.geojson" download>Continuous land references</a> · <a href="./data/map-coverage.json" target="_blank">Coverage method and checks</a> · <a href="./data/geometry-sources.json" target="_blank">Geometry provenance</a></p><p>Lexical facts are primarily cross-checked against Wiktionary, plus the linked dictionaries named in each entry. Wiktionary is a community-edited resource under CC BY-SA 4.0. Unresolved histories are kept separate. All exports include brief attribution; full source links stay in the editable data.</p><p>PNG exports are ${$('export-size').value} pixels wide; SVG retains editable vector geometry and text. The controls and dialogs are excluded from the artwork.</p>`;
    $('sources-dialog').showModal();
  }
  const exportStyle=`.word-label{font-family:Georgia,'Times New Roman',serif;font-weight:400;fill:#203b40;paint-order:stroke;stroke:#faf9f2;stroke-width:2.1;stroke-linejoin:round;dominant-baseline:alphabetic;letter-spacing:0;stroke-opacity:1}.reading-label{font-family:Arial,sans-serif;font-weight:400;fill:#38555b;paint-order:stroke;stroke:#faf9f2;stroke-width:1.4;stroke-linejoin:round;dominant-baseline:alphabetic}.sea-name{fill:#748e91;font-family:Georgia,serif;font-style:italic;letter-spacing:2px}.poster-legend-row{cursor:default}.graticule{fill:none;stroke:#b5c7c4;stroke-width:.5;opacity:.35}.country-line{fill:none;stroke:#405d61;stroke-width:.55;stroke-opacity:.43;stroke-dasharray:2 2}.source-note{font-family:Arial,sans-serif;fill:#74807a}.language-area{stroke:#fffef8;stroke-width:.65;stroke-linejoin:round}.land-reference{stroke-width:.5;stroke-linejoin:round}`;
  function serializedSvg(){
    const clone=$('map').cloneNode(true);clone.setAttribute('xmlns',NS);clone.setAttribute('width',W);clone.setAttribute('height',H);clone.setAttribute('viewBox',`0 0 ${W} ${H}`);clone.removeAttribute('role');clone.removeAttribute('aria-label');
    const s=document.createElementNS(NS,'style');s.textContent=exportStyle;clone.prepend(s);
    // Search and legend hover/focus are editor aids, never pale gaps in the exported map.
    clone.querySelectorAll('.land-reference,.word-mark').forEach(e=>{e.setAttribute('fill-opacity','1');e.setAttribute('opacity','1');});
    clone.querySelectorAll('.language-area').forEach(e=>e.setAttribute('fill-opacity',$('overlap-toggle').checked?String(opacity):'1'));
    clone.querySelectorAll('.poster-legend-row > rect:first-child').forEach(e=>e.setAttribute('fill','transparent'));
    clone.querySelectorAll('[tabindex],[role]').forEach(e=>{e.removeAttribute('tabindex');e.removeAttribute('role');});
    return new XMLSerializer().serializeToString(clone);
  }
  function saveBlob(blob,name){const url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(url),2000);}
  async function exportPng(){
    if(exportBusy)return;exportBusy=true;$('download-png').disabled=true;
    const original=$('download-png').innerHTML;$('download-png').textContent='Rendering…';
    try{
      await document.fonts.ready;
      const width=Number($('export-size').value),height=Math.round(width*H/W),canvas=document.createElement('canvas');canvas.width=width;canvas.height=height;
      const ctx=canvas.getContext('2d');if(!ctx)throw new Error('Canvas export is unavailable.');
      const source=new Blob([serializedSvg()],{type:'image/svg+xml;charset=utf-8'}),url=URL.createObjectURL(source),img=new Image();
      try{await new Promise((resolve,reject)=>{img.onload=resolve;img.onerror=()=>reject(new Error('Could not rasterize the map.'));img.src=url;});ctx.fillStyle='#f7f7ee';ctx.fillRect(0,0,width,height);ctx.drawImage(img,0,0,width,height);}finally{URL.revokeObjectURL(url);}
      const png=await new Promise(resolve=>canvas.toBlob(resolve,'image/png'));if(!png)throw new Error('PNG export was too large for this browser. Try a smaller size.');
      saveBlob(png,`horse-map-${width}px.png`);$('status').textContent=`Saved PNG · ${width} × ${height} pixels`;
    }catch(e){$('status').textContent=e.message;console.error(e);}finally{exportBusy=false;$('download-png').disabled=false;$('download-png').innerHTML=original;}
  }
  function status(){return `${languages.length} words · flat landscape · continuous land colour · PNG or editable SVG`;}
  async function init(){
    if(!window.d3)throw new Error('Local map library missing.');
    [lex,metadata,coverage,lands,features,legendTitles,nativeWords]=await Promise.all(['data/lexicon.json','data/geometry-sources.json','data/map-coverage.json','data/land-reference.geojson','data/territories.geojson','vendor/legend-font.json','vendor/native-word-outlines.json'].map(async name=>{const r=await fetch(`./${name}`,{cache:'no-cache'});if(!r.ok)throw new Error(`Cannot load ${name}`);return r.json();}));
    languages=lex.languages;byId=new Map(languages.map(l=>[l.id,l]));byRoot=new Map(lex.roots.map(r=>[r.id,r]));
    variants=new Map();for(const l of languages){const id=l.variantOf||l.id;if(!variants.has(id))variants.set(id,[]);variants.get(id).push(l);}
    lands=lands.features.map(normalize);features=features.features.filter(f=>byId.has(idOf(f))).map(normalize);
    features.forEach(f=>{const id=idOf(f);if(!featureById.has(id))featureById.set(id,[]);featureById.get(id).push(f);});
    // Linear meridians and parallels: no curved frame or curved southern edge.
    const raw=(lambda,phi)=>[lambda,phi*1.325];raw.invert=(x,y)=>[x,y/1.325];
    projection=d3.geoProjection(raw).center([20.5,49.5]).scale(882).translate([1037,540]).precision(.15);
    path=d3.geoPath(projection);transform=d3.zoomIdentity;
    svg=d3.select('#map').attr('viewBox',`0 0 ${W} ${H}`);
    svg.selectAll('*').remove();
    svg.append('style').text(exportStyle);
    node(svg,'rect',{width:W,height:H,fill:'#edf3f0'});
    const defs=svg.append('defs');wordPatterns(defs);
    const clip=defs.append('clipPath').attr('id','land-clip');clip.selectAll('path').data(lands).join('path').attr('d',path);
    const frame=defs.append('clipPath').attr('id','map-frame');frame.append('rect').attr('x',0).attr('y',17).attr('width',W).attr('height',1022);
    world=svg.append('g').attr('class','geography').attr('clip-path','url(#map-frame)');
    const graticule=d3.geoGraticule().step([10,10]).extent([[-60,10],[90,85]])();
    world.append('path').datum(graticule).attr('class','graticule').attr('d',path).attr('fill','none').attr('stroke','#b5c7c4').attr('stroke-width',.5).attr('opacity',.35);
    basePaths=world.append('g').selectAll('path').data(lands).join('path').attr('class','land-reference').attr('data-language',idOf).attr('d',path).attr('stroke-width',.5).on('click',(e,f)=>showWord(idOf(f)));
    features.sort((a,b)=>path.area(b)-path.area(a));
    areaPaths=world.append('g').attr('clip-path','url(#land-clip)').selectAll('path').data(features).join('path').attr('class','language-area').attr('data-language',idOf).attr('d',path).attr('stroke','#fffef8').attr('stroke-width',.65).attr('vector-effect','non-scaling-stroke')
      .on('pointerenter',(e,f)=>{const l=byId.get(idOf(f));$('tooltip').textContent=`${l.word} · ${l.name}`;$('tooltip').hidden=false;})
      .on('pointermove',e=>{const b=$('map-stage').getBoundingClientRect();$('tooltip').style.left=Math.min(e.clientX-b.left+12,b.width-190)+'px';$('tooltip').style.top=Math.max(8,e.clientY-b.top-40)+'px';})
      .on('pointerleave',()=>{$('tooltip').hidden=true;}).on('click',(e,f)=>{e.stopPropagation();$('tooltip').hidden=true;showWord(idOf(f));});
    countryLines=world.append('g').attr('pointer-events','none');countryLines.selectAll('path').data(lands).join('path').attr('class','country-line').attr('d',path).attr('fill','none').attr('stroke','#405d61').attr('stroke-width',.55).attr('stroke-opacity',.43).attr('stroke-dasharray','2 2').attr('vector-effect','non-scaling-stroke');
    const seas=[{p:[-16,45.6],text:'ATLANTIC OCEAN'},{p:[19,34.8],text:'MEDITERRANEAN SEA'}];
    seas.forEach(s=>{const p=projection(s.p);addText(world,s.text,p[0],p[1],12.5,{'class':'sea-name','text-anchor':'middle',fill:'#748e91','font-style':'italic','letter-spacing':2});});
    labelsLayer=svg.append('g').attr('class','word-layer');
    legendLayer=svg.append('g').attr('class','poster-legend');
    const title=svg.append('g').attr('class','poster-title');
    addText(title,'HORSE',36,75,64,{'letter-spacing':2,'font-weight':400});
    addText(title,'EUROPE & ITS NEIGHBOURS',41,108,9.5,{'font-family':'Arial, sans-serif','letter-spacing':2,fill:'#77877d'});
    const footer=svg.append('g');node(footer,'rect',{x:0,y:1042,width:W,height:58,fill:'#f8f8f0'});
    addText(footer,'Parentheses: romanized readings. * Reconstructed. “loan ?”: possible borrowing. Stripes: coexisting word origins; bars below words identify each. Dots: reference locations. Areas are generalized; census selection in Romania: 2021.',31,1064,11,{'class':'source-note','font-family':'Arial, sans-serif',fill:'#74807a'});
    addText(footer,'Areas: Asher & Moseley / DiACL / Rantanen via Glottography (CC BY 4.0); Romanian Hungarian supplement: INS RPL 2021 / ISPMN. Land: Natural Earth. Full sources: atlas data.',31,1084,9.5,{'class':'source-note','font-family':'Arial, sans-serif',fill:'#74807a'});
    zoom=d3.zoom().scaleExtent([1,7]).extent([[0,0],[W,H]]).on('zoom',e=>{transform=e.transform;world.attr('transform',transform);labelLayout();$('tooltip').hidden=true;});svg.call(zoom).on('dblclick.zoom',null);
    $('zoom-in').addEventListener('click',()=>svg.transition().duration(200).call(zoom.scaleBy,1.3));$('zoom-out').addEventListener('click',()=>svg.transition().duration(200).call(zoom.scaleBy,1/1.3));$('zoom-reset').addEventListener('click',()=>{search='';focused=null;$('search').value='';populateLanguages();drawLegend();paint();svg.transition().duration(300).call(zoom.transform,d3.zoomIdentity);});
    $('color-mode').addEventListener('change',e=>{mode=e.target.value;focused=null;drawLegend();paint();});
    ['labels-toggle','borders-toggle','overlap-toggle'].forEach(id=>$(id).addEventListener('change',paint));
    $('opacity').addEventListener('input',e=>{opacity=+e.target.value;paint();});$('label-size').addEventListener('input',e=>{labelScale=+e.target.value;labelLayout();});
    $('search').addEventListener('input',e=>{search=e.target.value.trim().toLowerCase();populateLanguages();paint();});$('search').addEventListener('keydown',e=>{if(e.key==='Enter'){const l=languages.find(matches);if(l)showWord(l.id);}});
    $('language-select').addEventListener('change',e=>{if(e.target.value)showWord(e.target.value);});
    $('close-word').addEventListener('click',()=>$('word-dialog').close());$('sources-button').addEventListener('click',showSources);$('close-sources').addEventListener('click',()=>$('sources-dialog').close());
    ['word-dialog','sources-dialog'].forEach(id=>$(id).addEventListener('click',e=>{if(e.target===$(id))$(id).close();}));
    $('download-svg').addEventListener('click',()=>saveBlob(new Blob([serializedSvg()],{type:'image/svg+xml;charset=utf-8'}),'horse-map-landscape.svg'));
    $('download-png').addEventListener('click',exportPng);$('export-size').addEventListener('change',()=>{const s=$('download-png').querySelector('span');if(s)s.textContent=`PNG · ${Number($('export-size').value).toLocaleString()} px`;});
    populateLanguages();drawLegend();paint();$('status').textContent=status();
  }
  init().catch(e=>{console.error(e);$('status').textContent=`Map could not load: ${e.message}. Use the local launcher or hosted page.`;});
})();
