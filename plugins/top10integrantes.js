let R = Math.random
let Fl = Math.floor
let toM = a => '@' + a.split('@')[0]
function handler(m, { groupMetadata }) {
    let ps = groupMetadata.participants.map(v => v.jid)
    let a = ps[Fl(R() * ps.length)]
    let b
    do b = ps[Fl(R() * ps.length)]
    while (b === a)
    let c
    do c = ps[Fl(R() * ps.length)]
    while (b === a)
    let d
    do d = ps[Fl(R() * ps.length)]
    while (b === a)
    let e
    do e = ps[Fl(R() * ps.length)]
    while (b === a)
    let f
    do f = ps[Fl(R() * ps.length)]
    while (b === a)
    let g
    do g = ps[Fl(R() * ps.length)]
    while (b === a)
    let h
    do h = ps[Fl(R() * ps.length)]
    while (b === a)
    let i
    do i = ps[Fl(R() * ps.length)]
    while (b === a)
    let j
    do j = ps[Fl(R() * ps.length)]
    while (b === a)
    m.reply(`*_πTOP 10 L@S MEJORES INTEGRANTESπ:_* 
    
 *_1.- π${toM(a)}π_* 
 *_2.- π${toM(b)}π_* 
 *_3.- π${toM(c)}π_* 
 *_4.- π${toM(d)}π_* 
 *_5.- π${toM(e)}π_* 
 *_6.- π${toM(f)}π_* 
 *_7.- π${toM(g)}π_*
 *_8.- π${toM(h)}π_* 
 *_9.- π${toM(i)}π_* 
 *_10.- π${toM(j)}π_*`, null, {
        contextInfo: {
            mentionedJid: [a, b, c, d, e, f, g, h, i, j]
        }
    })
}
handler.help = ['top10integrantes','top10mejores']
handler.tags = ['main']
handler.command = ['top10integrantes','top10mejores','top10mejor','top10integrante','top10mejore']
handler.group = true

module.exports = handler
