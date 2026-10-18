from pathlib import Path
import json,re,sys
ROOT=Path(__file__).resolve().parents[1]
import uharfbuzz as hb
from fontTools.ttLib import TTFont
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
from fontTools.pens.boundsPen import BoundsPen
site=ROOT;vendor=site/'dist/vendor'
lex=json.loads((site/'dist/data/lexicon.json').read_text(encoding='utf-8'))
source=(site/'dist/app.js').read_text(encoding='utf-8')
strings={'Etymology','Language branches','*h₁éḱwos','Proto-Indo-European · “horse”','Scottish Gaelic & Iranian descendants','Shared colour includes borrowed words'}
strings.update(r['legend'] for r in lex['roots'] if 'legend' in r)
branches=re.findall(r"(\w+):'[^']+'",source.split('const branchColors={')[1].split('};')[0])
strings.update(branches)
for l in lex['languages']:strings.update([l.get('branch',''),l.get('family','')])
strings.discard('')
out={'font':'Gentium Plus','unitsPerEm':2048,'source':'https://github.com/google/fonts/tree/main/ofl/gentiumplus','texts':{}}
def shape(path,text,y_down=False):
 data=path.read_bytes();tt=TTFont(path);gs=tt.getGlyphSet();order=tt.getGlyphOrder();face=hb.Face(data);font=hb.Font(face);font.scale=(face.upem,face.upem);hb.ot_font_set_funcs(font)
 buf=hb.Buffer();buf.add_str(text);buf.guess_segment_properties();hb.shape(font,buf)
 pen=SVGPathPen(gs);bounds=BoundsPen(gs);x=y=0
 for info,pos in zip(buf.glyph_infos,buf.glyph_positions):
  assert info.codepoint!=0,(text,path.name)
  tr=(1,0,0,-1 if y_down else 1,x+pos.x_offset,(-1 if y_down else 1)*(y+pos.y_offset))
  gs[order[info.codepoint]].draw(TransformPen(pen,tr));gs[order[info.codepoint]].draw(TransformPen(bounds,tr));x+=pos.x_advance;y+=pos.y_advance
 return {'path':pen.getCommands(),'width':x,'bounds':bounds.bounds,'unitsPerEm':face.upem,'direction':buf.direction,'font':tt['name'].getDebugName(1)}
for weight in ['regular','bold']:
 for text in sorted(strings):
  s=shape(vendor/f'GentiumPlus-{weight.capitalize()}.ttf',text)
  out['texts'].setdefault(text,{})[weight]={'path':s['path'],'width':s['width']}
(vendor/'legend-font.json').write_text(json.dumps(out,ensure_ascii=False,separators=(',',':'))+'\n',encoding='utf-8')
native={}
for ident,font in {'aii':'NotoSansSyriac','tru':'NotoSansSyriac','myz':'NotoSansMandaic','tzm':'NotoSansTifinagh'}.items():
 word=next(l['word'] for l in lex['languages'] if l['id']==ident)
 native[ident]=shape(vendor/(font+'-Regular.ttf'),word,True);native[ident]['word']=word;native[ident]['coordinateSystem']='SVG y-down; baseline y=0'
(vendor/'native-word-outlines.json').write_text(json.dumps(native,ensure_ascii=False,separators=(',',':'))+'\n',encoding='utf-8')
print('Shaped',len(strings),'legend strings and',len(native),'native labels; all glyphs present')
for r in lex['roots']:
 if 'legend' in r:
  w=out['texts'][r['legend']]['regular']['width']*12/2048
  if w>253:print('Legend size',r['id'],round(12*253/w,2),'px')
