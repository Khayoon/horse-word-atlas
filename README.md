# Horse — A Word Map

[Live map](https://khayoon.github.io/horse-word-atlas/) · [Sources](https://khayoon.github.io/horse-word-atlas/#sources) · [6,000px PNG](dist/downloads/horse-map-landscape-6000px.png) · [SVG](dist/downloads/horse-map-landscape.svg) · [Snow version](https://khayoon.github.io/snow-word-atlas/)

![Horse word map](dist/assets/horse-map-preview.png)

A flat landscape linguistic map of words for **horse** across Europe and its neighbours: **128 selected language/variety entries** and **38 word-origin sets**. It reuses the snow atlas’s language geography, compact Gentium Plus legend and high-resolution export layout.

## Reading the map

- The PIE horse noun *h₁éḱwos has separate Scottish Gaelic, Iranian and Greek route colours. Greek learned ίππος (Ancient ἵππος, híppos) is displayed alongside everyday άλογο. These are selected surviving lineages, not an exhaustive list: Latin equus is another.
- The caballus / *kaballos family has a shared heading and three separate route colours: Romance, Celtic and Albanian. Romance words continue Latin caballus; Albanian kalë is a Latin loan. The related Celtic terms retain their individual histories and disputed early borrowing directions in the entry notes.
- Published overlapping footprints remain above a complete Natural Earth reference fill. Inside Romania, the old Hungarian atlas area is replaced by INS RPL 2021 data mapped by ISPMN: administrative units above 50% Hungarian mother tongue among known responses. This separates the Székely enclave from smaller western pockets, and does not claim speakers below that threshold are absent. The exact selection is in data/romanian-hungarian-2021.json. Other features retain their original source epochs, including the Kurdish 1750 supplements.
- Greece, Russia and Kazakhstan show coexisting words with different origins using diagonal stripes and colour bars beneath the words. Stripe widths are decorative, not population or usage proportions. Russian конь is displayed alongside лошадь; Sardinian cuaddu supplements Nuorese cabaddu; Flemish peerd / peird supplements standard Dutch paard. Algeria now uses عود (ʿūd, Arabizi 3oud) rather than the standard-Arabic ḥiṣān reference.
- French Flanders uses the French reference background. Its former solid Dutch/Flemish footprint is removed inside France; French Flemish peerd survives as a minority reference point at Quaëdypre. This acknowledges minority use without inventing a modern majority-speaking boundary or treating older speaker counts as current. The exact display revision is documented in data/french-flanders-revision.json.
- Hungarian ló (stem lov-), Khanty ԓов (Kazym łow, often simplified lov) and Northern Mansi лув (luw) share the Ugric horse-word set and colour. The Khanty source footprint combines varieties: the Kazym citation form is a reference, not a claim of uniform spelling or a dialect boundary. The remote origin before Ugric is unresolved.
- Gilaki, Iranian Talyshi and Mazandarani have separate اسب (asb) labels using their published atlas areas. These are documented regional forms with normalized Persian-script displays, not uniform orthographies for every included dialect. Iranian-internal borrowing histories remain qualified.
- North Africa is lexically diverse: Moroccan عود shares the Algerian ʿawd origin, including Arabic-derived Kabyle aɛudiw. Tunisian and Benghazi Libyan حصان belong to the ḥiṣān set. Rif yis continues the ayis set; Nafusi agmár and Ghadames aǧmar form a separate Berber set. Guellala Djerba leḥṣan is an Arabic loan. Hassaniya written فرس has a separate faras colour; its (frs) label is consonant-only transliteration, with exact local vocalization unverified. The detailed regional audit is in data/north-africa-review.json.
- Romanian Romani grast (Turda and Kalderaš references) and German Sinti graj (Hameln reference) are cognate Armenian loans and share one origin colour. The 58 small Romanian markers use INS RPL 2021 mother-tongue data, selecting UATs above 20% among known responses. Equal-size markers are a cartographic selection, not ethnic territories, complete speaker coverage, population proportions or a claim that all communities use one dialect. Full selection and source limits: data/romani-domari-review.json.
- Domari is distinct from Romani. Aleppo agōra belongs to an inherited Indo-Aryan ghōṭa set; Matras and Kelzi (2024) transcribe it agorà. The Aleppo point is a source-community reference and does not map current population after wartime dispersal. A Damascus/Sayyida Zainab marker records older community evidence, with no independently verified modern local horse form. No modern Iraqi Kawliya horse lexeme was verified. Historical Duman asp from an Altun Kupri informant in Newbold (1856) is documented in the audit, without equating that record with modern Kawliya speech.
- Kazakh жылқы is a general species / livestock term and occurs in жылқы еті, horse meat. Ат is especially a riding or working horse, traditionally male / gelded. These are usage tendencies, not a strict meat-versus-riding opposition.
- Romanizations under non-Latin words are reading aids, not IPA. Maaloula shows ܣܘܣܬ̤ܐ with (sūsča), an editorial Syriac rendering of Arnold’s attested transcription using the documented ܬ̤ = č convention. This is a script choice, not a directly quoted native spelling or a universal Maaloula standard; Mandaic susia is a literary/liturgical reference near Basra. Points indicate reference locations where suitable polygons were not verified.
- No reliable indigenous Canarian horse term was verified. The earlier snow word tener? is not reused: this version retains the modern Spanish reference on the islands.
- Northern Luri asp is supported by a local speaker comparison rather than a critical dictionary. The Iraqi Arabic reading ḥiṣān also appears in a Baghdadi Arabic plant-name study; regional vowels vary. Entry notes retain these source limitations.
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

- **Asher, R. E. & Christopher J. Moseley (eds.) 2007. Atlas of the World's Languages. 2nd edn. Routledge.** — Contemporary speaker-area polygons; source atlas published in 2007, digitized dataset version 2.0. [Dataset repository](https://github.com/Glottography/asher2007world) · [Dataset DOI](https://doi.org/10.5281/zenodo.18613195) · [Exact source GeoJSON](https://raw.githubusercontent.com/Glottography/asher2007world/5590fcc8870d8883a323ff0defd5a1a6a03e9611/cldf/contemporary/features.geojson)
- **Carling, Gerd & Jost Gippert (eds.) 2025. DiACL/TITUS Polygon Archive. Frankfurt am Main: Goethe University.** — Traditional areas for Catalan, Occitan, Cornish, Crimean Tatar, Northern Kurdish and Central Kurdish; reference year 1750, with source timeframes usually 1750–2000. [Dataset repository](https://github.com/Glottography/carling2025diacl) · [Primary resource](https://diacl.uni-frankfurt.de/GeographicalPresence/Index) · [Derived dataset DOI](https://doi.org/10.5281/zenodo.18614010)
- **Rantanen, T., Vesakoski, O., Ylikoski, J., & Tolvanen, H. (2021). Geographical database of the Uralic languages (v1.0). Zenodo.** — Traditional Northern Sámi and Veps areas, approximately the widest known at the beginning of the 20th century. [Dataset repository](https://github.com/Glottography/rantanen2021uralic) · [Original dataset DOI](https://doi.org/10.5281/zenodo.4784188) · [Derived dataset DOI](https://doi.org/10.5281/zenodo.18643660) · [Methods paper](https://doi.org/10.1371/journal.pone.0269648)
- **Natural Earth 1:50m Admin 0 – Countries** — Complete reference-language land fill underneath language polygons; country boundaries are not linguistic boundaries. [Source download](https://www.naturalearthdata.com/downloads/50m-cultural-vectors/50m-admin-0-countries-2/) · [Terms of use](https://www.naturalearthdata.com/about/terms-of-use/)
- **Glottolog 5.3: language reference locations** — Reference points for Maaloula Western Neo-Aramaic and Assyrian Neo-Aramaic; locations do not define speaker-area boundaries. [Western Neo-Aramaic](https://glottolog.org/resource/languoid/id/west2763) · [Assyrian Neo-Aramaic](https://glottolog.org/resource/languoid/id/assy1241)
- **Romanian INS RPL 2021 mother-tongue data, table 2.03.2, mapped by ISPMN** — Replacement Hungarian footprint within Romania: 202 administrative units with >50% Hungarian mother tongue among known responses; Székely enclave and smaller western pockets. [ISPMN census map and methodology](https://www.ispmn.gov.ro/maps2022) · [Exact map geometry and census attributes](https://ispmn.gov.ro/maps_2022/data/uat_merged_simp02.json) · [Romanian census definitive results](https://www.recensamantromania.ro/rezultate-rpl-2021/rezultate-definitive/)
- **French Ministry of Culture; CNRS MoDyCo Entrelangues; ANVT–ILRF** — Removed the atlas Dutch/Flemish solid footprint only inside the Natural Earth France boundary. The existing French reference background is visible there. A French Flemish peerd point at Quaëdypre preserves minority-language presence without inventing a modern majority-speaking boundary. Dutch/Flemish areas outside France are unchanged. This is an editorial display choice, not a new census or an assertion that Flemish has disappeared. [CNRS MoDyCo, Entrelangues: West Flemish, minority use and French dominance](https://entrelangues.modyco.fr/index.php/Flamand_occidental) · [French Ministry of Culture: regional languages, including West Flemish](https://www.culture.gouv.fr/thematiques/langue-francaise-et-langues-de-france/agir-pour-les-langues/promouvoir-les-langues-de-france/langues-regionales) · [ANVT–ILRF: French Flemish peerd in local usage (Quaëdypre)](https://anvt.org/vl/nieuws/55-nieuws-van-de-anvt?start=50)
- **Romanian Romani mother-tongue community markers, INS RPL 2021 / ISPMN** — 58 representative interior points of census administrative units above 20% Romani mother tongue among known responses. Equal marker size; no commune-wide territory or uniform local dialect is inferred. Ethnic Roma counts are not substituted for language data. [Census map and method](https://www.ispmn.gov.ro/maps2022) · [Exact census geometry and attributes](https://www.ispmn.gov.ro/maps_2022/data/uat_merged_simp02.json) · [Selection audit](dist/data/romani-domari-review.json)
- **Domari and Iraqi Kawliya community-reference review** — Aleppo word and source-community reference; older Sayyida Zainab/Damascus presence. Historical Duman asp from Altun Kupri is not assigned to modern Kawliya. No contemporary Iraqi community-specific horse word was verified. [Newbold (1856), The Gypsies of Egypt, pp. 303–304: historical Duman informant from Altun Kupri, asp, horse](https://domari.org/wp-content/uploads/2024/06/newbold_1856_the_gypsies_of_egypt.pdf) · [Minority Rights Group (2017), Iraqi Kawliyah communities, including Al-Qadissiya and Baghdad/Basra/Mosul surroundings](https://www.refworld.org/reference/countryrep/mrgi/2017/en/107422) · [Edgcumbe (2024), MERI Policy Paper 6(2), pp. 5–6: heterogeneous Iraqi community identities](https://www.meri-k.org/wp-content/uploads/2024/01/MERI-Policy-Paper-vol.6-no.2-1.pdf) · [Herin 2012, Aleppo and Damascus references](https://journals.dartmouth.edu/journals/xmlpage/1/article/412?htmlOnce=yes) · [Groome historical Damascus source](https://domari.org/wp-content/uploads/2024/09/groome_1891_persian_and_syrian_gypsies.pdf)

### Lexical and historical references

<details>
<summary>All 174 references</summary>

- [Wiktionary: Reconstruction:Proto-Indo-European/h₁éḱwos](https://en.wiktionary.org/wiki/Reconstruction%3AProto-Indo-European%2Fh%E2%82%81%C3%A9%E1%B8%B1wos) — PIE horse word.
- [Encyclopaedia Iranica: ASB i., Iranian horse terminology](https://www.iranicaonline.org/articles/asb-pre-islamic-iran/) — PIE horse word.
- [Wiktionary: Scottish Gaelic each, via Old Irish ech and Proto-Celtic *ekʷos](https://en.wiktionary.org/wiki/each#Scottish_Gaelic) — Scottish Gaelic; PIE horse word.
- [Wiktionary: Greek ίππος, another surviving PIE horse-word reflex](https://en.wiktionary.org/wiki/%CE%AF%CF%80%CF%80%CE%BF%CF%82#Greek) — Greek (learned ίππος); PIE horse word.
- [Wiktionary: Latin equus, inherited PIE horse noun](https://en.wiktionary.org/wiki/equus#Latin) — PIE horse word.
- [Ivanov (1999), Comparative Notes, PDF p. 36: Talysh, Gilyan and Mazandarani horse forms](https://urkesh.org/attach/Ivanov1999a.pdf#page=36) — Gilaki; Talyshi (Iranian word reference); Mazandarani; PIE horse word.
- [Cathcart (2015), Iranian Dialectology and Dialectometry, p. 135: Mazandarani asb](https://escholarship.org/content/qt77w684h2/qt77w684h2.pdf) — Mazandarani; PIE horse word.
- [Wiktionary: caballus](https://en.wiktionary.org/wiki/caballus) — Caballus word-family.
- [Wiktionary: capall (Irish)](https://en.wiktionary.org/wiki/capall#Irish) — Irish; Caballus word-family.
- [Wiktionary: ceffyl (Welsh)](https://en.wiktionary.org/wiki/ceffyl#Welsh) — Welsh; Caballus word-family.
- [Lewis & Short, A Latin Dictionary: caballus](https://www.perseus.tufts.edu/hopper/text?doc=Perseus:text:1999.04.0059:entry=caballus) — Caballus word-family.
- [Wiktionary: Reconstruction:Proto-Germanic/hrussą](https://en.wiktionary.org/wiki/Reconstruction%3AProto-Germanic%2Fhruss%C4%85) — Germanic.
- [Wiktionary: horse (English)](https://en.wiktionary.org/wiki/horse#English) — English; Syrian Arabic; Uzbek; Germanic.
- [Wiktionary: paraveredus](https://en.wiktionary.org/wiki/paraveredus) — Late Latin.
- [Wiktionary: Pferd (German)](https://en.wiktionary.org/wiki/Pferd#German) — German; Late Latin.
- [Wiktionary: paard (Dutch)](https://en.wiktionary.org/wiki/paard#Dutch) — Dutch; Late Latin.
- [Wiktionary: Reconstruction:Proto-Germanic/hangistaz](https://en.wiktionary.org/wiki/Reconstruction%3AProto-Germanic%2Fhangistaz) — Germanic.
- [Wiktionary: hynder (West Frisian)](https://en.wiktionary.org/wiki/hynder#West_Frisian) — West Frisian; Germanic.
- [Wiktionary: hiisti (Greenlandic)](https://en.wiktionary.org/wiki/hiisti#Greenlandic) — Greenlandic; Germanic.
- [Matsumoto Ryo, Horse in Uralic, Linguistic Atlas of Asia and Africa, p.147](https://geolinguistics.sakura.ne.jp/Monograph/SiG-mono3-LAAA-1-ebook.pdf) — Northern Sámi; Germanic; Mari; Turkic → Samoyedic.
- [Wiktionary: Reconstruction:Proto-Slavic/koňь](https://en.wiktionary.org/wiki/Reconstruction%3AProto-Slavic%2Fko%C5%88%D1%8C) — Slavic.
- [Wiktionary: konj (Serbo-Croatian)](https://en.wiktionary.org/wiki/konj#Serbo-Croatian) — Serbian–Croatian–Bosnian; Slavic.
- [Wiktionary: кінь (Ukrainian)](https://en.wiktionary.org/wiki/%D0%BA%D1%96%D0%BD%D1%8C#Ukrainian) — Ukrainian; Slavic.
- [Wiktionary: лошадь (Russian)](https://en.wiktionary.org/wiki/%D0%BB%D0%BE%D1%88%D0%B0%D0%B4%D1%8C#Russian) — Russian; Turkic → Russian.
- [Wiktionary: arklys (Lithuanian)](https://en.wiktionary.org/wiki/arklys#Lithuanian) — Lithuanian; Lithuanian.
- [Wiktionary: zirgs (Latvian)](https://en.wiktionary.org/wiki/zirgs#Latvian) — Latvian; Baltic.
- [Wiktionary: Reconstruction:Proto-Celtic/markos](https://en.wiktionary.org/wiki/Reconstruction%3AProto-Celtic%2Fmarkos) — Celtic.
- [Wiktionary: άλογο (Greek)](https://en.wiktionary.org/wiki/%CE%AC%CE%BB%CE%BF%CE%B3%CE%BF#Greek) — Greek; Greek.
- [Wiktionary: ձի (Old Armenian)](https://en.wiktionary.org/wiki/%D5%B1%D5%AB#Old_Armenian) — Armenian.
- [Wiktionary: Reconstruction:Proto-Indo-European/ǵʰéyos](https://en.wiktionary.org/wiki/Reconstruction%3AProto-Indo-European%2F%C7%B5%CA%B0%C3%A9yos) — Armenian.
- [Halwachs, Klinge and Schrammel-Leber (2013), RomIdent Paper 3, p. 10 table 2: Romani horse cognates and Armenian loan origin](https://www.kratylos.org/~raphael/romani/virtuallibrary/librarydb/web/files/pdfs/356/Paper3.pdf#page=11) — Romani (Romania; Turda and Kalderaš references); Sinti Romani (Hameln, Germany); Armenian loan into Romani.
- [Manchester Romani Project: Early Romani, Armenian loan grast](https://www.kratylos.org/~raphael/romani/whatis/language/earlyromani.html) — Romani (Romania; Turda and Kalderaš references); Sinti Romani (Hameln, Germany); Armenian loan into Romani.
- [ArmDict English–Armenian dictionary: beast of burden, գրաստ](https://www.armdict.com/dictionary/english-armenian/beast) — Armenian loan into Romani.
- [Wiktionary: бӕх (Ossetian)](https://en.wiktionary.org/wiki/%D0%B1%D3%95%D1%85#Ossetian) — Ossetian; Ossetian.
- [Wiktionary: Reconstruction:Proto-Finnic/hëpo](https://en.wiktionary.org/wiki/Reconstruction%3AProto-Finnic%2Fh%C3%ABpo) — Finnic.
- [Wiktionary: hevonen (Finnish)](https://en.wiktionary.org/wiki/hevonen#Finnish) — Finnish; Finnic.
- [Wiktionary: ló (Hungarian)](https://en.wiktionary.org/wiki/l%C3%B3#Hungarian) — Hungarian; Ugric.
- [Wiktionary: Reconstruction:Proto-Ugric/luɣǝ](https://en.wiktionary.org/wiki/Reconstruction%3AProto-Ugric%2Flu%C9%A3%C7%9D) — Ugric.
- [HUN-REN, Új magyar etimológiai szótár: ló, Ugric inheritance and Khanty/Mansi cognates](https://uesz.nytud.hu/index.html?uuid=c14ded34-7c44-1014-a8d2-ae24c20aeb7e) — Hungarian; Hungarian (Romania, Székely area); Khanty (Kazym word reference); Northern Mansi; Ugric.
- [V. N. Solovar 2014, Khanty–Russian Dictionary (Kazym dialect), p. 154: ԓов, horse](https://ouipiir.ru/sites/default/files/docs/635-1402.pdf) — Khanty (Kazym word reference); Ugric.
- [Ob-Ugric Institute, short Mansi–Russian dictionary: лув, horse](https://mansy-audio-dic.ouipiir.ru/) — Northern Mansi; Ugric.
- [Wiktionary: вал (Udmurt)](https://en.wiktionary.org/wiki/%D0%B2%D0%B0%D0%BB#Udmurt) — Udmurt; Permic.
- [Wiktionary: вӧв (Komi-Zyrian)](https://en.wiktionary.org/wiki/%D0%B2%D3%A7%D0%B2#Komi-Zyrian) — Komi-Zyrian; Permic.
- [Wiktionary: имне (Eastern Mari)](https://en.wiktionary.org/wiki/%D0%B8%D0%BC%D0%BD%D0%B5#Eastern_Mari) — Meadow Mari; Mari.
- [COPIUS, Samoyedic historical phonology: *juntå → Tundra Nenets juna/juno](https://copius.univie.ac.at/etymology/slides_13_samo.pdf) — Tundra Nenets; Turkic → Samoyedic.
- [Wiktionary: zaldi (Basque)](https://en.wiktionary.org/wiki/zaldi#Basque) — Basque; Basque.
- [Wiktionary: حصان (Arabic)](https://en.wiktionary.org/wiki/%D8%AD%D8%B5%D8%A7%D9%86#Arabic) — Arabic (standard reference); Mesopotamian Arabic; Arabic.
- [Lameen Souag (2002), The Algerian Arabic of Dellys: ʕud / ʕwad, horse, appendix p. 33](https://journals.uco.es/index.php/edna/article/download/8302/7778) — Algerian Arabic; Arabic ʕawd horse word.
- [Wiktionary: Algerian Arabic عود, from Arabic ʕawd, a camel trained for riding](https://en.wiktionary.org/wiki/%D8%B9%D9%88%D8%AF#Algerian_Arabic) — Algerian Arabic; Arabic ʕawd horse word.
- [Kossmann (2013), The Arabic Influence on Northern Berber, pp. 149–150: horse words and Arabic loans](https://amyaz.fr/uploads/66db4e13ca98e.pdf) — Kabyle; Moroccan Arabic; Tarifiyt / Rif (inherited word); Nafusi; Ghadames Berber; Arabic ʕawd horse word; Berber; Berber agmar set.
- [Darija Dictionary: عود, horse, with native audio](https://darijadictionary.com/en/index/horse-in-moroccan-arabic-darija/) — Moroccan Arabic; Arabic ʕawd horse word.
- [Peace Corps (1979), Hassaniya Arabic handbook, p. 249: written فرس, horse](https://files.eric.ed.gov/fulltext/ED294423.pdf#page=269) — Hassaniya (written-word reference); Arabic faras set.
- [Wiktionary: סוס (Hebrew)](https://en.wiktionary.org/wiki/%D7%A1%D7%95%D7%A1#Hebrew) — Hebrew; Hebrew & Aramaic.
- [Wiktionary: ܣܘܣܝܐ (Classical Syriac)](https://en.wiktionary.org/wiki/%DC%A3%DC%98%DC%A3%DC%9D%DC%90#Classical_Syriac) — Hebrew & Aramaic.
- [Comprehensive Aramaic Lexicon, swsy horse](https://cal.huc.edu/oneentry.php?lemma=swsy%20N&cits=all) — Hebrew & Aramaic.
- [Wiktionary: żiemel (Maltese)](https://en.wiktionary.org/wiki/%C5%BCiemel#Maltese) — Maltese; Arabic → Maltese.
- [Wiktionary: ⴰⵢⵉⵙ (Central Atlas Tamazight)](https://en.wiktionary.org/wiki/%E2%B4%B0%E2%B5%A2%E2%B5%89%E2%B5%99#Central_Atlas_Tamazight) — Central Atlas Tamazight; Berber.
- [Wiktionary: ayyis (Tashelhit)](https://en.wiktionary.org/wiki/ayyis#Tashelhit) — Tachelhit; Berber.
- [Tamazight–English Dictionary, horse: ayyis](https://www.temehu.com/imazighen/dictionaries/Amawals/tamazight-english-dictionary-acf.pdf) — Berber.
- [Kossmann, WOLD Tarifiyt: yis, horse, Common Berber; no evidence of borrowing](https://wold.clld.org/word/7212058936344482) — Tarifiyt / Rif (inherited word); Berber.
- [Marijn van Putten, Nefusa Text: The story of the wild animals, agmár, horse, analysing Beguinot 1942](https://orientalberber.wordpress.com/category/nefusa/) — Nafusi; Berber agmar set.
- [Wiktionary: Reconstruction:Proto-Turkic/at](https://en.wiktionary.org/wiki/Reconstruction%3AProto-Turkic%2Fat) — Uzbek; Turkic.
- [Wiktionary: at (Turkish)](https://en.wiktionary.org/wiki/at#Turkish) — Turkish; Turkic.
- [Wiktionary: жылқы (Kazakh)](https://en.wiktionary.org/wiki/%D0%B6%D1%8B%D0%BB%D2%9B%D1%8B#Kazakh) — Kazakh; Turkic.
- [Wiktionary: ცხენი (Georgian)](https://en.wiktionary.org/wiki/%E1%83%AA%E1%83%AE%E1%83%94%E1%83%9C%E1%83%98#Georgian) — Georgian; Kartvelian.
- [Wiktionary: говр (Chechen)](https://en.wiktionary.org/wiki/%D0%B3%D0%BE%D0%B2%D1%80#Chechen) — Chechen; Nakh.
- [Wiktionary: говр (Ingush)](https://en.wiktionary.org/wiki/%D0%B3%D0%BE%D0%B2%D1%80#Ingush) — Ingush; Nakh.
- [Wiktionary: шы (East Circassian)](https://en.wiktionary.org/wiki/%D1%88%D1%8B#East_Circassian) — Kabardian; Circassian.
- [Wiktionary: шы (West Circassian)](https://en.wiktionary.org/wiki/%D1%88%D1%8B#West_Circassian) — Adyghe; Circassian.
- [Wiktionary: чу (Avar)](https://en.wiktionary.org/wiki/%D1%87%D1%83#Avar) — Avar; Avar.
- [Wiktionary: урчи (Dargwa)](https://en.wiktionary.org/wiki/%D1%83%D1%80%D1%87%D0%B8#Dargwa) — Dargwa; Dargwa.
- [Wiktionary: шив (Lezgi)](https://en.wiktionary.org/wiki/%D1%88%D0%B8%D0%B2#Lezgi) — Lezgian; Lezgian.
- [Wiktionary: чву (Lak)](https://en.wiktionary.org/wiki/%D1%87%D0%B2%D1%83#Lak) — Lak; Lak.
- [Wiktionary: мөрн (Kalmyk)](https://en.wiktionary.org/wiki/%D0%BC%D3%A9%D1%80%D0%BD#Kalmyk) — Kalmyk; Mongolic.
- [Herin (2012), The Domari Language of Aleppo, p. 17: agor-es / agor-en from Indo-Aryan ghota; p. 2: Damascus community](https://journals.dartmouth.edu/journals/xmlpage/1/article/412?htmlOnce=yes) — Domari (Aleppo word; Damascus community reference); Indo-Aryan ghota set.
- [Herin (2016), Elements of Domari Dialectology, p. 46 table 7: northern (a)gora, southern gori](https://domari.org/wp-content/uploads/2026/08/bruno_herin_2016_elements_of_domari_dialectology_mediterranean_language_review_23.pdf) — Domari (Aleppo word; Damascus community reference); Indo-Aryan ghota set.
- [Matras and Kelzi (2024), The Dom language of Aleppo, pp. 9–10: agora in the authors transcription; pp. 4–5: diaspora and source-speaker limits](https://domari.org/wp-content/uploads/2024/10/matras-kelzi-2024-dom-language-of-aleppo-preliminary-sketch.pdf) — Domari (Aleppo word; Damascus community reference); Indo-Aryan ghota set.
- [Wiktionary: horse (Scots)](https://en.wiktionary.org/wiki/horse#Scots) — Scots.
- [Vlaams Woordenboek: peerd, with peird and regional pronunciation variants](https://www.vlaamswoordenboek.be/woordenboek-artikel/10184) — Dutch; Flemish Dutch regional forms.
- [Vlaams Woordenboek: peird, with Antwerp, Hageland and other regional forms](https://www.vlaamswoordenboek.be/woordenboek-artikel/4021) — Dutch; Flemish Dutch regional forms.
- [Devos and Vandekerckhove, West-Vlaams: regional peerd forms](https://dev.dialectloket.be/wp-content/uploads/2014/05/devo007west01_01.pdf) — Dutch; Flemish Dutch regional forms.
- [CNRS MoDyCo, Entrelangues: West Flemish, minority use and French dominance](https://entrelangues.modyco.fr/index.php/Flamand_occidental) — Dutch; Flemish Dutch regional forms; French Flemish (minority reference).
- [Wiktionary: Päerd (Luxembourgish)](https://en.wiktionary.org/wiki/P%C3%A4erd#Luxembourgish) — Luxembourgish.
- [Wiktionary: hest (Danish)](https://en.wiktionary.org/wiki/hest#Danish) — Danish.
- [Wiktionary: häst (Swedish)](https://en.wiktionary.org/wiki/h%C3%A4st#Swedish) — Swedish.
- [Wiktionary: hest (Norwegian Bokmål)](https://en.wiktionary.org/wiki/hest#Norwegian_Bokmål) — Norwegian.
- [Wiktionary: hestur (Icelandic)](https://en.wiktionary.org/wiki/hestur#Icelandic) — Icelandic.
- [Wiktionary: hestur (Faroese)](https://en.wiktionary.org/wiki/hestur#Faroese) — Faroese.
- [Wiktionary: caballo (Spanish)](https://en.wiktionary.org/wiki/caballo#Spanish) — Spanish.
- [Wiktionary: cavalo (Portuguese)](https://en.wiktionary.org/wiki/cavalo#Portuguese) — Portuguese.
- [Wiktionary: cabalo (Galician)](https://en.wiktionary.org/wiki/cabalo#Galician) — Galician.
- [Wiktionary: cavall (Catalan)](https://en.wiktionary.org/wiki/cavall#Catalan) — Catalan.
- [Wiktionary: caval (Occitan)](https://en.wiktionary.org/wiki/caval#Occitan) — Occitan.
- [Wiktionary: cavallo (Italian)](https://en.wiktionary.org/wiki/cavallo#Italian) — Italian.
- [Wiktionary: cavaddu (Sicilian)](https://en.wiktionary.org/wiki/cavaddu#Sicilian) — Sicilian.
- [Wiktionary: cabaddu, Nuorese form; Campidanese cuaddu and other regional variants](https://en.wiktionary.org/wiki/cabaddu) — Sardinian (Nuorese reference); Sardinian (Campidanese reference).
- [Sardinian regional cultural portal: cuaddu in Quartu Sant’Elena usage](https://www.sardegnacultura.it/sc/articulu/celebrazioni-in-onore-di-sant-elena-a-quartu-sant-elena) — Sardinian (Nuorese reference); Sardinian (Campidanese reference).
- [Wiktionary: cavało (Venetan)](https://en.wiktionary.org/wiki/cava%C5%82o#Venetan) — Venetian.
- [Wiktionary: cjaval (Friulian)](https://en.wiktionary.org/wiki/cjaval#Friulian) — Friulian.
- [Wiktionary: chaval (Romansh)](https://en.wiktionary.org/wiki/chaval#Romansh) — Romansh.
- [Wiktionary: caballu (Asturian)](https://en.wiktionary.org/wiki/caballu#Asturian) — Asturian.
- [Wiktionary: caballo (Aragonese)](https://en.wiktionary.org/wiki/caballo#Aragonese) — Aragonese.
- [Wiktionary: cheval (French)](https://en.wiktionary.org/wiki/cheval#French) — French.
- [Wiktionary: cal (Romanian)](https://en.wiktionary.org/wiki/cal#Romanian) — Romanian.
- [Gramota: конь, riding horse, male horse and poetic/specialist uses](https://gramota.ru/poisk?dicts%5B0%5D=48&mode=slovari&query=%D0%BA%D0%BE%D0%BD%D1%8C&simple=0) — Russian; Russian (конь).
- [Wiktionary: конь (Belarusian)](https://en.wiktionary.org/wiki/%D0%BA%D0%BE%D0%BD%D1%8C#Belarusian) — Belarusian.
- [Wiktionary: koń (Polish)](https://en.wiktionary.org/wiki/ko%C5%84#Polish) — Polish.
- [Wiktionary: kůň (Czech)](https://en.wiktionary.org/wiki/k%C5%AF%C5%88#Czech) — Czech.
- [Wiktionary: kôň (Slovak)](https://en.wiktionary.org/wiki/k%C3%B4%C5%88#Slovak) — Slovak.
- [Wiktionary: konj (Slovene)](https://en.wiktionary.org/wiki/konj#Slovene) — Slovenian.
- [Wiktionary: кон (Bulgarian)](https://en.wiktionary.org/wiki/%D0%BA%D0%BE%D0%BD#Bulgarian) — Bulgarian.
- [Wiktionary: коњ (Macedonian)](https://en.wiktionary.org/wiki/%D0%BA%D0%BE%D1%9A#Macedonian) — Macedonian.
- [Wiktionary: kóń (Upper Sorbian)](https://en.wiktionary.org/wiki/k%C3%B3%C5%84#Upper_Sorbian) — Upper Sorbian.
- [Wiktionary: kóń (Lower Sorbian)](https://en.wiktionary.org/wiki/k%C3%B3%C5%84#Lower_Sorbian) — Lower Sorbian.
- [Wiktionary: kóń (Kashubian)](https://en.wiktionary.org/wiki/k%C3%B3%C5%84#Kashubian) — Kashubian.
- [Wiktionary: cabbyl (Manx)](https://en.wiktionary.org/wiki/cabbyl#Manx) — Manx.
- [Wiktionary: marc’h (Breton)](https://en.wiktionary.org/wiki/marc%27h#Breton) — Breton.
- [Wiktionary: margh (Cornish)](https://en.wiktionary.org/wiki/margh#Cornish) — Cornish.
- [Centre for the Greek Language: Triantafyllidis, ιππο- and learned compounds](https://www.greek-language.gr/greekLang/modern_greek/tools/lexica/search.html?lq=%CE%B9%CF%80%CF%80%CE%BF) — Greek; Greek (learned ίππος).
- [Wiktionary: ձի (Armenian)](https://en.wiktionary.org/wiki/%D5%B1%D5%AB#Armenian) — Armenian.
- [Wiktionary: kalë (Albanian)](https://en.wiktionary.org/wiki/kal%C3%AB#Albanian) — Albanian.
- [Wiktionary: اسب (Persian)](https://en.wiktionary.org/wiki/%D8%A7%D8%B3%D8%A8#Persian) — Persian.
- [Wiktionary: hesp (Northern Kurdish)](https://en.wiktionary.org/wiki/hesp#Northern_Kurdish) — Northern Kurdish.
- [Wiktionary: hobune (Estonian)](https://en.wiktionary.org/wiki/hobune#Estonian) — Estonian.
- [Wiktionary: hebo (Karelian)](https://en.wiktionary.org/wiki/hebo#Karelian) — Karelian.
- [Wiktionary: hebo (Veps)](https://en.wiktionary.org/wiki/hebo#Veps) — Veps.
- [Wiktionary: حصان (Tunisian Arabic)](https://en.wiktionary.org/wiki/%D8%AD%D8%B5%D8%A7%D9%86#Tunisian_Arabic) — Tunisian Arabic.
- [Čéplö et al. (2016), Mutual intelligibility of spoken Maltese, Libyan Arabic and Tunisian Arabic, Appendix A W002C01](https://doi.org/10.1515/flin-2016-0021) — Tunisian Arabic; Libyan Arabic (Benghazi reference).
- [Adam Benkato, author publication list linking the full Tunisia/Libya study, item 26](https://www.ocf.berkeley.edu/~abenkato/publications.html) — Tunisian Arabic; Libyan Arabic (Benghazi reference).
- [Wiktionary: حصان (Egyptian Arabic)](https://en.wiktionary.org/wiki/%D8%AD%D8%B5%D8%A7%D9%86#Egyptian_Arabic) — Egyptian Arabic.
- [AIDA16 Booklet of Abstracts (2026), Baghdadi Arabic plant names: il-ḥiṣān in horse-tail, p.60](https://aidacatania.unict.it/AIDA16_Booklet_of_Abstracts_09_06_2026_DEF.pdf) — Mesopotamian Arabic.
- [Wiktionary: at (Azerbaijani)](https://en.wiktionary.org/wiki/at#Azerbaijani) — Azerbaijani.
- [Sozdikqor / Қазақ әдеби тілінің сөздігі: ат, a male riding or working horse](https://sozdikqor.kz/soz?a=AT1&id=114416) — Kazakh; Kazakh (riding / working ат).
- [Sozdikqor / Қазақ әдеби тілінің сөздігі: жылқы еті, horse meat](https://sozdikqor.kz/soz?a=Jylqy+eti&id=405726) — Kazakh; Kazakh (riding / working ат).
- [Berdibek, Kazakh toponymic lexicon: жылқы as an equine livestock species](https://atau.kz/docs/3003.pdf) — Kazakh; Kazakh (riding / working ат).
- [Wiktionary: ат (Tatar)](https://en.wiktionary.org/wiki/%D0%B0%D1%82#Tatar) — Tatar.
- [Wiktionary: ат (Bashkir)](https://en.wiktionary.org/wiki/%D0%B0%D1%82#Bashkir) — Bashkir.
- [Wiktionary: at (Crimean Tatar)](https://en.wiktionary.org/wiki/at#Crimean_Tatar) — Crimean Tatar.
- [Wiktionary: ат (Kyrgyz)](https://en.wiktionary.org/wiki/%D0%B0%D1%82#Kyrgyz) — Kyrgyz.
- [Centre de Recherche Berbère, Aures: comparison of Chaoui yis and Kabyle aɛudiw](https://centrederechercheberbere.fr/aures.html) — Kabyle.
- [Amawal, Kabyle dictionary: aɛawdiw / aɛudiw](https://amawal.numidya.net/amawal/a/Goi4tKpe/a%C9%9Bawdiw) — Kabyle.
- [Wiktionary: at (Turkmen)](https://en.wiktionary.org/wiki/at#Turkmen) — Turkmen.
- [Wiktionary (Russian), ат: Karachay-Balkar horse noun](https://ru.wiktionary.org/wiki/%D0%B0%D1%82#%D0%9A%D0%B0%D1%80%D0%B0%D1%87%D0%B0%D0%B5%D0%B2%D0%BE-%D0%B1%D0%B0%D0%BB%D0%BA%D0%B0%D1%80%D1%81%D0%BA%D0%B8%D0%B9) — Karachay-Balkar.
- [Ethnocultural study of ат, horse, in Karachay-Balkar phraseology](https://www.elbrusoid.net/articles/poznat/393388/) — Karachay-Balkar.
- [Wiktionary: ат (Kumyk)](https://en.wiktionary.org/wiki/%D0%B0%D1%82#Kumyk) — Kumyk.
- [Wiktionary: اسپ (Baluchi)](https://en.wiktionary.org/wiki/%D8%A7%D8%B3%D9%BE#Baluchi) — Balochi.
- [Northern Luri/Feyli speaker word comparison: اسپ = horse](https://lori-shomali.blogfa.com/post/36) — Northern Luri.
- [Wiktionary: 𐎠𐎿𐎱 (Old Persian)](https://en.wiktionary.org/wiki/%F0%90%8E%A0%F0%90%8E%BF%F0%90%8E%B1#Old_Persian) — Southern Luri.
- [Vajehyab, Bakhtiari dictionary: اسب /asb/](https://vajehyab.com/bakhtiari/%D8%A7%D8%B3%D8%A8) — Bakhtiari.
- [Wiktionary: ئەسپ (Central Kurdish)](https://en.wiktionary.org/wiki/%D8%A6%DB%95%D8%B3%D9%BE#Central_Kurdish) — Central Kurdish.
- [Werner Arnold (2025), Animals in the Western Neo-Aramaic Proverbs of Maʿlūla, appendix: horse (sūsča)](https://books.openbookpublishers.com/10.11647/obp.0464.31.pdf) — Western Neo-Aramaic (Maaloula).
- [Western Neo-Aramaic writing systems: Syriac alphabet and ܬ̤ / č correspondence](https://en.wikipedia.org/wiki/Western_Neo-Aramaic#Syriac_and_Arabic_alphabet) — Western Neo-Aramaic (Maaloula).
- [Wiktionary: Western Neo-Aramaic ܒܪܬ̤ܐ (berča), parallel use of ܬ̤ for č](https://en.wiktionary.org/wiki/%DC%92%DC%AA%DC%AC%CC%A4%DC%90) — Western Neo-Aramaic (Maaloula).
- [Ma’luli New Testament (2018), Syriac and Arabic scripts; Revelation 6:2, printed p. 1274 (PDF p. 1282)](https://scriptureearth.org/data/amw/PDF/amwMaLuliNT-web.pdf#page=1282) — Western Neo-Aramaic (Maaloula).
- [Wiktionary: ܣܘܣܐ (Assyrian Neo-Aramaic)](https://en.wiktionary.org/wiki/%DC%A3%DC%98%DC%A3%DC%90#Assyrian_Neo-Aramaic) — Assyrian Neo-Aramaic.
- [Barsky, Kalinin & Loesov (2018), The Basic Lexicon of Mlaḥsô: A Comparative Study, p.228, Turoyo susyo](https://www.ub.edu/ipoa/wp-content/uploads/2021/07/20182AuOrBarsky.pdf) — Turoyo / Surayt.
- [Sfar Mele, Turoyo learning vocabulary: Horse (Pferd), Susyo](https://sfarmele.de/?page=lernen) — Turoyo / Surayt.
- [Qais Al-Saadi (2012), Nhura dictionary, printed p.91: Horse [susia]](https://qadaha.wordpress.com/wp-content/uploads/2021/03/nhura-dictionary-mandaic-english-mandaic.pdf#page=92) — Mandaic (Mandaean liturgical reference).
- [Glosbe, Mandaic Professional entry: ࡎࡅࡎࡉࡀ](https://glosbe.com/en/mid/horse) — Mandaic (Mandaean liturgical reference).
- [Centre for the Greek Language: Liddell–Scott, Ancient Greek ἵππος](https://www.greek-language.gr/digitalResources/ancient_greek/tools/liddell-scott/search.html?lq=%E1%BC%B5%CF%80%CF%80%CE%BF%CF%82) — Greek (learned ίππος).
- [Wiktionary: конь, inherited Slavic horse word](https://en.wiktionary.org/wiki/%D0%BA%D0%BE%D0%BD%D1%8C#Russian) — Russian (конь).
- [ISPMN / Romanian INS: 2021 census mother-tongue map by administrative unit](https://www.ispmn.gov.ro/maps2022) — Hungarian (Romania, Székely area); Romani (Romania; Turda and Kalderaš references).
- [ANVT–ILRF: French Flemish peerd in local usage (Quaëdypre)](https://anvt.org/vl/nieuws/55-nieuws-van-de-anvt?start=50) — French Flemish (minority reference).
- [French Ministry of Culture: regional languages, including West Flemish](https://www.culture.gouv.fr/thematiques/langue-francaise-et-langues-de-france/agir-pour-les-langues/promouvoir-les-langues-de-france/langues-regionales) — French Flemish (minority reference).
- [Shabani and Taghipour (2023), Nominal linkers in Gilaki, pp. 2 and 5: Eshkevarat asb](https://twpl.library.utoronto.ca/index.php/twpl/article/download/41689/31976/112601) — Gilaki.
- [Mohammadreza Pourjafari, original Gilaki linguistic discussion: اَسب](https://baru.wiki/mohammadreza.pourjafari/neshane-ha-ye-masdari/) — Gilaki.
- [Taghipour and Nabati (2023), Nominal linkers in Taleshi, p. 9 example 29c: Pareh Sar asb](https://twpl.library.utoronto.ca/index.php/twpl/article/download/41688/31980/112605) — Talyshi (Iranian word reference).
- [Ali-Asghar Rostamnezhad Nashali, original Mazandarani proverbs using اسب](https://neshele.blogfa.com/post/20) — Mazandarani.
- [Kossmann, WOLD Tarifiyt: akiđā, horse, coexisting Moroccan Arabic loan](https://wold.clld.org/word/7212059950182598) — Tarifiyt / Rif (inherited word).
- [Brugnatelli (2010), Guellala Djerba Berber dictionary manuscript, p. 28: leḥṣan](https://fr.scribd.com/document/369483266/Dictionnaire-Brugnatelli-Djerba-Berbere) — Djerba Berber (Guellala reference).
- [Sumi (2017), The influence of the Romanian language on the Romani idiom of Turda, p. 94: grast, horse](https://www.diacronia.ro/ro/indexing/details/A26086/pdf#page=10) — Romani (Romania; Turda and Kalderaš references).
- [Manchester Romani Project, Sinti dialect sampler: Hameln, Germany, Holzinger 1993](https://www.kratylos.org/~raphael/romani/interactive/sampler/d901.html) — Sinti Romani (Hameln, Germany).
- [Elšík and Matras, Modals in Romani, p. 20 example 28: Hameln Sinti grajes, horse.ACC, citing Holzinger 1993:325](https://www.kratylos.org/~raphael/romani/downloads/2/Elsik-Matras_Modals%20in%20Romani.pdf#page=20) — Sinti Romani (Hameln, Germany).
- [Groome (1891), Persian and Syrian Gypsies, p. 25: historical Damascus horse phrases collected in 1881](https://domari.org/wp-content/uploads/2024/09/groome_1891_persian_and_syrian_gypsies.pdf) — Domari (Aleppo word; Damascus community reference).

</details>

### Typography, software and attribution

- [Gentium Plus Regular and Bold](https://github.com/google/fonts/tree/main/ofl/gentiumplus) — SIL Open Font License 1.1.
- [D3 7.9.0](https://d3js.org) — ISC.
- [SIL International](http://www.sil.org/) — Copyright holder named in GentiumPlus-OFL.txt, copyright 2003–2022 SIL International..
- [Noto Sans Syriac, Noto Sans Mandaic and Noto Sans Tifinagh](https://github.com/notofonts/noto-fonts) — SIL Open Font License 1.1.

Wiktionary material is identified as CC BY-SA 4.0. Geography attributed by Glottography is CC BY 4.0; the Romanian INS/ISPMN supplement is separately attributed with its source terms in the supplement record. Natural Earth is public domain. Dictionaries, fieldwork and other publications retain their own terms. Original explanatory summaries and brief lexical facts are attributed individually. D3 and font notices remain in `dist/vendor/`. No blanket license is asserted over mixed third-party data.
