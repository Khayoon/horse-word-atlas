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
catalog['publicationDate']='2026-10-19'
catalog['provenanceNotes']=[lex['methodology']['comparison'],lex['methodology']['sources'],lex['methodology']['uncertainty'],'Most language-area geography is reused from the snow atlas. The Hungarian footprint inside Romania is replaced by an explicitly selected 2021 mother-tongue census supplement, Algeria has a country-specific vernacular lexical join, French Flanders uses the French reference background with a Flemish minority point, and existing Mansi, Khanty and Caspian Iranian aggregates have documented lexical joins. North African Arabic and Berber word histories are reviewed separately. Community corrections and their sources were checked on 2026-10-19.']
catalog['counts']={'languages':len(lex['languages']),'wordOriginSets':len(lex['roots']),'lexicalCanonicalSources':len(records),'languageAreaFeatures':len(json.loads((DATA/'territories.geojson').read_text(encoding='utf-8'))['features']),'documentedLexicalJoins':len({f['properties']['id'] for f in json.loads((DATA/'territories.geojson').read_text(encoding='utf-8'))['features']})}
source_ids={f['properties']['id'] for f in json.loads((DATA/'territories.geojson').read_text(encoding='utf-8'))['features']}
app=(ROOT/'dist/app.js').read_text(encoding='utf-8')
aliases=dict(re.findall(r"(\w+):'([^']+)'",app.split('const aliases={')[1].split('};')[0]))
catalog['counts']['documentedLexicalJoins']=len({aliases.get(i,i) for i in source_ids if aliases.get(i,i) in {l['id'] for l in lex['languages']}})
catalog['counts']['displayedOriginGroups']=len(lex['roots'])+sum(len(r['routes'])-1 for r in lex['roots'] if r.get('routes'))
catalog['typographySoftwareLicense']=[x for x in catalog['typographySoftwareLicense'] if x.get('category')!='license']
for x in catalog['typographySoftwareLicense']:
 if 'Noto' in x.get('title',''):x['title']='Noto Sans Syriac, Noto Sans Mandaic and Noto Sans Tifinagh'
(DATA/'source-catalog.json').write_text(json.dumps(catalog,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
def e(v):return html.escape(str(v),quote=True)
def a(url,title):return f'<a href="{e(url)}" target="_blank" rel="noopener">{e(title)}</a>'

def mdurl(url):return 'dist/'+url[2:] if url.startswith('./') else url
def uses(item):return '; '.join(x['name'] for x in item['languageUses']+item['rootUses'])
geo=[];geomd=[]
for item in catalog['geography']:
 title=item.get('citation',item['title']);refs=' · '.join(a(x['url'],x['label']) for x in item['urls'])
 geo.append(f'<li><strong>{e(title)}</strong><p>{e(item["usedFor"])} {e(item.get("license",""))}</p><p>{refs}</p></li>')
 geomd.append(f'- **{title}** — {item["usedFor"]} '+ ' · '.join(f'[{x["label"]}]({mdurl(x["url"])})' for x in item['urls']))
notes=[
'The PIE horse noun *h₁éḱwos has separate Scottish Gaelic, Iranian and Greek route colours. Greek learned ίππος (Ancient ἵππος, híppos) is displayed alongside everyday άλογο. These are selected surviving lineages, not an exhaustive list: Latin equus is another.',
'The caballus / *kaballos family has a shared heading and three separate route colours: Romance, Celtic and Albanian. Romance words continue Latin caballus; Albanian kalë is a Latin loan. The related Celtic terms retain their individual histories and disputed early borrowing directions in the entry notes.',
'Published overlapping footprints remain above a complete Natural Earth reference fill. Inside Romania, the old Hungarian atlas area is replaced by INS RPL 2021 data mapped by ISPMN: administrative units above 50% Hungarian mother tongue among known responses. This separates the Székely enclave from smaller western pockets, and does not claim speakers below that threshold are absent. The exact selection is in data/romanian-hungarian-2021.json. Other features retain their original source epochs, including the Kurdish 1750 supplements.',
'Greece, Russia and Kazakhstan show coexisting words with different origins using diagonal stripes and colour bars beneath the words. Stripe widths are decorative, not population or usage proportions. Russian конь is displayed alongside лошадь; Sardinian cuaddu supplements Nuorese cabaddu; Flemish peerd / peird supplements standard Dutch paard. Algeria now uses عود (ʿūd, Arabizi 3oud) rather than the standard-Arabic ḥiṣān reference.',
'French Flanders uses the French reference background. Its former solid Dutch/Flemish footprint is removed inside France; French Flemish peerd survives as a minority reference point at Quaëdypre. This acknowledges minority use without inventing a modern majority-speaking boundary or treating older speaker counts as current. The exact display revision is documented in data/french-flanders-revision.json.',
'Hungarian ló (stem lov-), Khanty ԓов (Kazym łow, often simplified lov) and Northern Mansi лув (luw) share the Ugric horse-word set and colour. The Khanty source footprint combines varieties: the Kazym citation form is a reference, not a claim of uniform spelling or a dialect boundary. The remote origin before Ugric is unresolved.',
'Gilaki, Iranian Talyshi and Mazandarani have separate اسب (asb) labels using their published atlas areas. These are documented regional forms with normalized Persian-script displays, not uniform orthographies for every included dialect. Iranian-internal borrowing histories remain qualified.',
'North Africa is lexically diverse: Moroccan عود shares the Algerian ʿawd origin, including Arabic-derived Kabyle aɛudiw. Tunisian and Benghazi Libyan حصان belong to the ḥiṣān set. Rif yis continues the ayis set; Nafusi agmár and Ghadames aǧmar form a separate Berber set. Guellala Djerba leḥṣan is an Arabic loan. Hassaniya written فرس has a separate faras colour; its (frs) label is consonant-only transliteration, with exact local vocalization unverified. The detailed regional audit is in data/north-africa-review.json.',
'Romanian Romani grast (Turda and Kalderaš references) and German Sinti graj (Hameln reference) are cognate Armenian loans and share one origin colour. The 58 small Romanian markers use INS RPL 2021 mother-tongue data, selecting UATs above 20% among known responses. Equal-size markers are a cartographic selection, not ethnic territories, complete speaker coverage, population proportions or a claim that all communities use one dialect. Full selection and source limits: data/romani-domari-review.json.',
'Domari is distinct from Romani. Aleppo agōra belongs to an inherited Indo-Aryan ghōṭa set; Matras and Kelzi (2024) transcribe it agorà. The Aleppo point is a source-community reference and does not map current population after wartime dispersal. A Damascus/Sayyida Zainab marker records older community evidence, with no independently verified modern local horse form. No modern Iraqi Kawliya horse lexeme was verified. Historical Duman asp from an Altun Kupri informant in Newbold (1856) is documented in the audit, without equating that record with modern Kawliya speech.',
'Kazakh жылқы is a general species / livestock term and occurs in жылқы еті, horse meat. Ат is especially a riding or working horse, traditionally male / gelded. These are usage tendencies, not a strict meat-versus-riding opposition.',
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
<h3>Typography and software</h3><ul>{typehtml}</ul><p>Glottography geometry is CC BY 4.0; the Romanian INS/ISPMN supplement is separately attributed with its source terms in the supplement record. Natural Earth is public domain. Wiktionary is CC BY-SA 4.0. Other works retain their own terms; lexical facts and original explanatory summaries are used with attribution. Font and D3 license notices are bundled.</p>
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
- Common nouns and important alternatives are selected. Both Russian лошадь and конь are now displayed, with their different word origins. Irish capall and Scottish Gaelic each intentionally illustrate different histories.
- Colour groups follow the ancestry and routes shown in the legend, including loans; shared colour is not proof of direct inheritance. The PIE horse noun has separate Scottish Gaelic, Iranian and Greek route colours; *ekʷos is the reconstructed Proto-Celtic ancestor of Gaelic each. English horse, German Pferd, Scandinavian hest and Romance caballo/cheval are separate sets. An asterisk marks a reconstructed form; “loan ?” marks a possible borrowing. Other unresolved histories are explained in the entry notes.
- The caballus/*kaballos group has separate Romance, Celtic and Albanian route colours without making every Celtic word a direct Latin loan. Finnic and Caucasian proposed Indo-European links remain unresolved. Some origin sets stop at an attested local word.
- The Syriac, Mandaic and Tifinagh labels and the full legend are shaped to vector outlines for reliable PNG/SVG export. Other words remain editable SVG text. Non-Latin words retain parenthesized romanized readings.

## Run and export

With Node.js installed, run `node local-server.mjs`, or double-click `Open Horse Atlas.cmd` on Windows. Open the loopback URL printed in the terminal. All runtime assets are bundled; linked references require internet access.

Export PNG at 6,000, 9,000 or 12,000 pixels wide or save SVG. Default composition: 1800 × 1100; the 6,000px download is 6000 × 3667. Controls and dialogs are excluded from the artwork.

## Data

- `dist/data/lexicon.json`: selected nouns, romanizations, origin sets, schematic chains, references and uncertainty notes.
- `dist/data/territories.geojson`: the generalized geometry features and the explicitly attributed Romanian census supplement. The historical La Palma reference fill from the snow map is omitted.
- `dist/data/land-reference.geojson`: complete country-reference layer below the language footprints.
- `dist/data/geometry-sources.json` and `map-coverage.json`: source epochs, geography and inherited continuous-coverage method. Geography comes from the attributed snow-atlas build; it is not new fieldwork.
- `dist/data/source-catalog.json`: complete linked source list.
- `dist/data/romani-domari-review.json`: minority-reference words, census selection and language distinctions.
- `dist/data/north-africa-review.json`: regional words, sources, origin groups and the Hassaniya pronunciation limit.
- `dist/data/french-flanders-revision.json`: French Flanders display method, sources and minority reference point.
- `dist/data/romanian-hungarian-2021.json`: selected census units, language shares, denominator, threshold and source attribution.
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

Wiktionary material is identified as CC BY-SA 4.0. Geography attributed by Glottography is CC BY 4.0; the Romanian INS/ISPMN supplement is separately attributed with its source terms in the supplement record. Natural Earth is public domain. Dictionaries, fieldwork and other publications retain their own terms. Original explanatory summaries and brief lexical facts are attributed individually. D3 and font notices remain in `dist/vendor/`. No blanket license is asserted over mixed third-party data.
'''
(ROOT/'README.md').write_text(readme,encoding='utf-8')
(ROOT/'READ ME.txt').write_text(f'HORSE — A WORD MAP\n\nOpen Horse Atlas.cmd launches a local server. The poster has {len(lex["languages"])} selected word entries and {len(lex["roots"])} word-origin sets, with linked references in README.md and on the page. Exports retain the compact legend. See entry notes for unresolved etymologies and local source limitations.\n',encoding='utf-8')
print('References rebuilt:',len(records))
