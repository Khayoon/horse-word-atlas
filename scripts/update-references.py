"""Build the horse map's source catalog, on-page references and README."""
from pathlib import Path
import json,html,re
ROOT=Path(__file__).resolve().parents[1];DATA=ROOT/'dist/data'
lex=json.loads((DATA/'lexicon.json').read_text(encoding='utf-8'))
catalog=json.loads((DATA/'source-catalog.json').read_text(encoding='utf-8'))
records={}
for kind,items in [('rootUses',lex['roots']),('languageUses',lex['languages'])]:
 for item in items:
  for source in item.get('sources',[]):
   url=source['url']
   if url not in records:records[url]={'id':f'L{len(records)+1:03}','url':url,'title':source['title'],'rootUses':[],'languageUses':[]}
   ref={'id':item['id'],'name':item.get('name',item.get('label',item['id']))}
   if ref not in records[url][kind]:records[url][kind].append(ref)
catalog['lexical']=list(records.values())
catalog['title']='Horse map source catalog';catalog['generatedFrom']='Horse lexicon and reused, attributed snow-atlas geometry'
catalog['publicationDate']='2026-10-18'
catalog['provenanceNotes']=[lex['methodology']['comparison'],lex['methodology']['sources'],lex['methodology']['uncertainty'],'Language-area geography is reused from the snow atlas with its original source epochs and provenance; lexical research was performed separately for horse on 2026-10-18.']
catalog['counts']={'languages':len(lex['languages']),'wordOriginSets':len(lex['roots']),'lexicalCanonicalSources':len(records),'languageAreaFeatures':180,'documentedLexicalJoins':89}
catalog['counts']['displayedOriginGroups']=len(lex['roots'])+sum(len(r['routes'])-1 for r in lex['roots'] if r.get('routes'))
catalog['typographySoftwareLicense']=[x for x in catalog['typographySoftwareLicense'] if x.get('category')!='license']
for x in catalog['typographySoftwareLicense']:
 if 'Noto' in x.get('title',''):x['title']='Noto Sans Syriac, Noto Sans Mandaic and Noto Sans Tifinagh'
(DATA/'source-catalog.json').write_text(json.dumps(catalog,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
def e(v):return html.escape(str(v),quote=True)
def a(url,title):return f'<a href="{e(url)}" target="_blank" rel="noopener">{e(title)}</a>'
def uses(item):return '; '.join(x['name'] for x in item['languageUses']+item['rootUses'])
geo=[];geomd=[]
for item in catalog['geography']:
 title=item.get('citation',item['title']);refs=' · '.join(a(x['url'],x['label']) for x in item['urls'])
 geo.append(f'<li><strong>{e(title)}</strong><p>{e(item["usedFor"])} {e(item.get("license",""))}</p><p>{refs}</p></li>')
 geomd.append(f'- **{title}** — {item["usedFor"]} '+ ' · '.join(f'[{x["label"]}]({x["url"]})' for x in item['urls']))
notes=[
'The PIE horse noun *h₁éḱwos heads two separate colour rows: Scottish Gaelic each via Proto-Celtic *ekʷos, and Iranian *Hácwah → asb/asp/hesp. They share an earlier ancestor but follow separate branches. These are the two lineages represented by the selected labels, not the only surviving descendants: Greek ίππος also continues that noun, while this map selects everyday άλογο. Other colours follow word ancestry, including borrowings; uncertain deep links remain separate.',
'The caballus / *kaballos family has a shared heading and three separate route colours: Romance, Celtic and Albanian. Romance words continue Latin caballus; Albanian kalë is a Latin loan. The related Celtic terms retain their individual histories and disputed early borrowing directions in the entry notes.',
'The same generalized, overlapping language footprints as the snow atlas are retained. A complete Natural Earth country reference layer fills the land beneath them; this is not a census or a claim of exclusive language use. Kurdish supplements retain their published 1750 reference epoch.',
'Romanizations under non-Latin words are reading aids, not IPA. Maaloula shows ܣܘܣܬ̤ܐ with (sūsča), an editorial Syriac rendering of Arnold’s attested transcription using the documented ܬ̤ = č convention. This is a script choice, not a directly quoted native spelling or a universal Maaloula standard; Mandaic susia is a literary/liturgical reference near Basra. Points indicate reference locations where suitable polygons were not verified.',
'No reliable indigenous Canarian horse term was verified. The earlier snow word tener? is not reused: this version retains the modern Spanish reference on the islands.',
'Northern Luri asp is supported by a local speaker comparison rather than a critical dictionary. The Iraqi Arabic reading ḥiṣān also appears in a Baghdadi Arabic plant-name study; regional vowels vary. Entry notes retain these source limitations.'
]
lexhtml=''.join(f'<li id="source-{r["id"].lower()}">{a(r["url"],r["title"])}<small>{e(uses(r))}</small></li>' for r in records.values())
typehtml=''.join(f'<li>{a(x["url"],x["title"])} — {e(x.get("license",x.get("usedFor","")))}</li>' for x in catalog['typographySoftwareLicense'])
section=f'''<section id="sources" class="source-section" aria-labelledby="source-list-title">
<div class="source-section-heading"><div><h2 id="source-list-title">Sources</h2><p>Geography, dictionaries and the references behind the map.</p></div><button class="secondary-button" id="sources-button" type="button">Map notes</button></div>
{''.join(f'<p class="source-intro">{e(n)}</p>' for n in notes)}
<div class="source-columns"><div><h3>Geography</h3><ol class="geographic-references">{''.join(geo)}</ol></div><div><h3>Words and etymologies</h3><p>{len(lex['languages'])} selected entries; {len(records)} linked lexical and historical references. Wiktionary is community edited; primary dictionaries and field studies are identified individually.</p>
<details class="reference-details"><summary>All {len(records)} dictionary, reconstruction and historical references</summary><ol class="lexical-references">{lexhtml}</ol></details>
<h3>Typography and software</h3><ul>{typehtml}</ul><p>Geometry is attributed under CC BY 4.0; Natural Earth is public domain. Wiktionary is CC BY-SA 4.0. Other works retain their own terms; lexical facts and original explanatory summaries are used with attribution. Font and D3 license notices are bundled.</p>
<p>{a('./data/source-catalog.json','Source catalog (JSON)')} · {a('./data/geometry-sources.json','Geographic provenance')} · {a('./data/lexicon.json','Lexicon')} · {a('https://github.com/Khayoon/horse-word-atlas#readme','README')}</p></div></div>
<p>Poster downloads: <a href="./downloads/horse-map-landscape-6000px.png" download>6,000px PNG</a> · <a href="./downloads/horse-map-landscape.svg" download>SVG</a>. The controls above export the current composition.</p>
</section>'''
p=ROOT/'dist/index.html';s=p.read_text(encoding='utf-8');s=re.sub(r'<section id="sources".*?</section>',section,s,flags=re.S);p.write_text(s,encoding='utf-8')
readme=f'''# Horse — A Word Map

[Live map](https://khayoon.github.io/horse-word-atlas/) · [Sources](https://khayoon.github.io/horse-word-atlas/#sources) · [6,000px PNG](dist/downloads/horse-map-landscape-6000px.png) · [SVG](dist/downloads/horse-map-landscape.svg) · [Snow version](https://khayoon.github.io/snow-word-atlas/)

![Horse word map](dist/assets/horse-map-preview.png)

A flat landscape linguistic map of words for **horse** across Europe and its neighbours: **{len(lex['languages'])} selected language/variety entries** and **{len(lex['roots'])} word-origin sets**. It reuses the snow atlas’s language geography, compact Gentium Plus legend and high-resolution export layout.

## Reading the map

{chr(10).join('- '+n for n in notes)}
- Common representative nouns are selected. Russian лошадь is used alongside neighbouring Slavic konj/koń forms; Russian конь remains a noted alternative. Irish capall and Scottish Gaelic each intentionally illustrate different histories.
- Colour groups follow the ancestry and routes shown in the legend, including loans; shared colour is not proof of direct inheritance. The PIE horse noun has separate Scottish Gaelic and Iranian route colours; *ekʷos is the reconstructed Proto-Celtic ancestor of Gaelic each. English horse, German Pferd, Scandinavian hest and Romance caballo/cheval are separate sets. An asterisk marks a reconstructed form; “loan ?” marks a possible borrowing. Other unresolved histories are explained in the entry notes.
- The caballus/*kaballos group has separate Romance, Celtic and Albanian route colours without making every Celtic word a direct Latin loan. Finnic and Caucasian proposed Indo-European links remain unresolved. Some origin sets stop at an attested local word.
- The Syriac, Mandaic and Tifinagh labels and the full legend are shaped to vector outlines for reliable PNG/SVG export. Other words remain editable SVG text. Non-Latin words retain parenthesized romanized readings.

## Run and export

With Node.js installed, run `node local-server.mjs`, or double-click `Open Horse Atlas.cmd` on Windows. Open the loopback URL printed in the terminal. All runtime assets are bundled; linked references require internet access.

Export PNG at 6,000, 9,000 or 12,000 pixels wide or save SVG. Default composition: 1800 × 1100; the 6,000px download is 6000 × 3667. Controls and dialogs are excluded from the artwork.

## Data

- `dist/data/lexicon.json`: selected nouns, romanizations, origin sets, schematic chains, references and uncertainty notes.
- `dist/data/territories.geojson`: 180 generalized geometry features with provenance. The historical La Palma reference fill from the snow map is omitted.
- `dist/data/land-reference.geojson`: complete country-reference layer below the language footprints.
- `dist/data/geometry-sources.json` and `map-coverage.json`: source epochs, geography and inherited continuous-coverage method. Geography comes from the attributed snow-atlas build; it is not new fieldwork.
- `dist/data/source-catalog.json`: complete linked source list.
- `dist/vendor/`: D3, Gentium Plus and Noto fonts, vector typography and licenses.

## GitHub Pages

The workflow in `.github/workflows/pages.yml` deploys `dist/` when `main` changes. Relative paths support the `/horse-word-atlas/` project URL. No server, API key or sign-in is required on GitHub Pages.

## Sources

### Geography

{chr(10).join(geomd)}

### Lexical and historical references

<details>
<summary>All {len(records)} references</summary>

{chr(10).join(f'- [{r["title"]}]({r["url"]}) — {uses(r)}.' for r in records.values())}

</details>

### Typography, software and attribution

{chr(10).join(f'- [{x["title"]}]({x["url"]}) — {x.get("license",x.get("usedFor",""))}.' for x in catalog['typographySoftwareLicense'])}

Wiktionary material is identified as CC BY-SA 4.0. Geography attributed by Glottography is CC BY 4.0; Natural Earth is public domain. Dictionaries, fieldwork and other publications retain their own terms. Original explanatory summaries and brief lexical facts are attributed individually. D3 and font notices remain in `dist/vendor/`. No blanket license is asserted over mixed third-party data.
'''
(ROOT/'README.md').write_text(readme,encoding='utf-8')
(ROOT/'READ ME.txt').write_text('HORSE — A WORD MAP\n\nOpen Horse Atlas.cmd launches a local server. The poster has 105 selected words and 34 word-origin sets, with linked references in README.md and on the page. Exports retain the compact legend. See entry notes for unresolved etymologies and local source limitations.\n',encoding='utf-8')
print('References rebuilt:',len(records))
