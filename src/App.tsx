import { useEffect, useState } from 'react'
import './App.css'
import { siteContent, type StoryBlock } from './data/siteContent'

const assetUrl = (path: string) => import.meta.env.BASE_URL + path.replace(/^\/+/, '')

function Opening({ onFinish }: { onFinish: () => void }) {
  useEffect(() => { const timer = window.setTimeout(onFinish, 6500); return () => window.clearTimeout(timer) }, [onFinish])
  return <div className="opening" role="dialog" aria-label="Abertura do site" aria-modal="true"><div className="opening-tiles" aria-hidden="true">{Array.from({ length: 384 }, (_, index) => { const tileNumber = ((index * 11) % 60) + 1; return <span key={index} style={{ '--tile-index': index, backgroundImage: 'url(' + assetUrl('/tiles/tile-' + String(tileNumber).padStart(2, '0') + '.png') + ')' } as React.CSSProperties} /> })}</div><div className="opening-content"><img className="opening-logo" src={assetUrl(siteContent.couple.logoSrc)} alt="" /><p className="eyebrow">{siteContent.home.openingLabel}</p><p className="opening-date">{siteContent.couple.date}</p><h1>{siteContent.home.headline}</h1><p>{siteContent.couple.names}</p></div><button className="opening-skip" type="button" onClick={onFinish}>Prosseguir para o site</button></div>
}
function StoryImageCarousel({ block }: { block: StoryBlock }) {
  const manualSources = block.images?.map((image) => image.src) ?? []
  const [folderSources, setFolderSources] = useState<string[]>([])
  const [activeImage, setActiveImage] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    setIsLoading(true)
    if (!block.imageFolder || manualSources.length > 0) return
    let cancelled = false
    const discover = async () => {
      const found: string[] = []
      let missingStreak = 0
      for (let index = 1; index <= 99; index += 1) {
        const number = String(index).padStart(2, '0')
        const candidates = ['.jpg', '.JPG', '.jpeg', '.HEIC']
        let foundSource = ''
        for (const extension of candidates) {
          const source = block.imageFolder + '/' + number + extension
          const loaded = await new Promise<boolean>((resolve) => {
            const image = new Image()
            image.onload = () => resolve(true)
            image.onerror = () => resolve(false)
            image.src = assetUrl(source)
          })
          if (loaded) { foundSource = source; break }
        }
        if (!foundSource) { missingStreak += 1; if (missingStreak >= 3) break; continue }
        missingStreak = 0
        found.push(foundSource)
      }
      if (!cancelled) { setFolderSources(found); if (found.length === 0) setIsLoading(false) }
    }
    void discover()
    return () => { cancelled = true }
  }, [block.id, block.imageFolder, manualSources.length])
  const imageSources = manualSources.length > 0 ? manualSources : folderSources
  useEffect(() => { setActiveImage(0); if (imageSources.length < 2) return; const timer = window.setInterval(() => setActiveImage((current) => (current + 1) % imageSources.length), 5000); return () => window.clearInterval(timer) }, [block.id, imageSources.length])
  const image = block.images?.[activeImage]
  return <div className="story-carousel"><div className="story-image__frame" style={{ '--tile-frame-image': 'url(' + assetUrl('/decor/arabesque-medallion.png') + ')' } as React.CSSProperties}>{imageSources.length > 0 ? <img key={imageSources[activeImage]} src={assetUrl(imageSources[activeImage])} alt={image?.alt ?? 'Foto do capítulo'} onLoad={() => setIsLoading(false)} onError={() => setIsLoading(false)} /> : null}{isLoading ? <span className="story-loading" role="status">Carregando fotos...</span> : imageSources.length === 0 ? <span className="story-image__placeholder">Fotos a adicionar</span> : null}</div>{image?.caption && <p className="story-caption">{image.caption}</p>}{imageSources.length > 1 && <div className="story-carousel__dots" aria-label="Fotos do capítulo">{imageSources.map((source, index) => <button key={source} className={index === activeImage ? 'is-active' : ''} type="button" aria-label={'Mostrar foto ' + (index + 1)} onClick={() => setActiveImage(index)} />)}</div>}</div>
}
function StoryChapterReader({ blocks }: { blocks: StoryBlock[] }) {
  const [activeChapter, setActiveChapter] = useState(0)
  const block = blocks[activeChapter]
  const goToChapter = (direction: number) => {
    setActiveChapter((current) => (current + direction + blocks.length) % blocks.length)
    window.requestAnimationFrame(() => document.getElementById('maeve')?.scrollIntoView({ behavior: 'smooth', block: 'start' }))
  }
  return <div className="chapter-reader"><article className="chapter-page" key={block.id}><div className="chapter-page__content"><div className="chapter-page__number">{block.eyebrow}</div><h3>{block.title}</h3>{block.text?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div><StoryImageCarousel block={block} /></article><div className="chapter-controls"><button type="button" onClick={() => goToChapter(-1)} aria-label="Capítulo anterior">&lt;</button><span>Página {activeChapter + 1} de {blocks.length}</span><button type="button" onClick={() => goToChapter(1)} aria-label="Próximo capítulo">&gt;</button></div></div>
}
function App() {
  const [showOpening, setShowOpening] = useState(true)
  const [pixCopied, setPixCopied] = useState(false)
  const { couple, story, wedding, gifts } = siteContent
  const navigateToSection = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const href = event.currentTarget.getAttribute('href')
    if (!href?.startsWith('#')) return
    const target = document.querySelector(href)
    if (!target) return
    event.preventDefault()
    window.history.replaceState(null, '', href)
    target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
  return <div className="site-shell">{showOpening && <Opening onFinish={() => setShowOpening(false)} />}<header className="site-header"><a className="brand-mark" href="#home" onClick={navigateToSection} aria-label="Voltar ao início"><img className="brand-mark__logo" src={assetUrl(couple.logoSrc)} alt={couple.brandName} /><span className="brand-mark__name">{couple.brandName}</span></a><nav className="site-nav" aria-label="Navegação principal">{siteContent.navigation.map((item) => <a key={item.href} href={item.href} onClick={navigateToSection}>{item.label}</a>)}</nav></header><main>
    <section className="hero-section tile-pattern" id="home" style={{ backgroundImage: "url(" + assetUrl("/home-tiles-background.png") + ")" }}><div className="hero-frame"><p className="eyebrow">{siteContent.home.openingLabel}</p><p className="hero-date">{couple.date}</p><h1>{siteContent.home.headline}</h1><p className="hero-place">{couple.location}</p><span className="ornament" aria-hidden="true">*</span><p className="hero-message">{couple.welcomeMessage}</p><a className="text-link" href="#maeve" onClick={navigateToSection}>{siteContent.home.subtitle} <span aria-hidden="true">-&gt;</span></a></div></section>
    <section className="section-band section-band--ornament" id="maeve"><img className="section-watermark" src={assetUrl('/decor/arabesque-generated.png')} alt="" aria-hidden="true" /><div className="section-inner"><p className="eyebrow">MAEVE</p><h2><span>{story.sectionTitle}</span><img className="section-ornament" src={assetUrl('/decor/arabesque-medallion.png')} alt="" aria-hidden="true" /></h2><div className="story-list"><StoryChapterReader blocks={story.blocks} /></div></div></section>
    <section className="section-band section-band--blue section-band--ornament" id="casamento"><img className="section-watermark section-watermark--blue" src={assetUrl('/decor/arabesque-generated.png')} alt="" aria-hidden="true" /><div className="section-inner"><p className="eyebrow">O grande dia</p><h2><span>{wedding.sectionTitle}</span><img className="section-ornament" src={assetUrl('/decor/arabesque-medallion.png')} alt="" aria-hidden="true" /></h2><div className="details-grid"><div className="detail-item"><span>Data</span><strong>{wedding.date}</strong></div><div className="detail-item"><span>Horário</span><strong>{wedding.time}</strong></div><div className="detail-item"><span>Local</span><strong>{wedding.venue}</strong></div></div><div className="wedding-layout"><div><p className="address-label">Onde estaremos</p><p className="wedding-address">{wedding.address}</p><div className="map-frame">{wedding.mapEmbedUrl ? <iframe src={wedding.mapEmbedUrl} title="Mapa da Casa Beijo do Sol" loading="lazy" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen /> : <span>Mapa a adicionar</span>}</div>{wedding.mapUrl ? <a className="text-link" href={wedding.mapUrl} target="_blank" rel="noreferrer">Abrir rota <span aria-hidden="true">-&gt;</span></a> : <p className="helper-text">O link para rota será adicionado em breve.</p>}</div><div className="wedding-notes"><p className="address-label">Informações importantes</p><ul>{wedding.notes.map((note) => <li key={note}>{note}</li>)}</ul></div></div><div className="confirmation-box" id="confirmacao"><div><p className="address-label">Presença</p><h3>{wedding.confirmation.label}</h3><p>{wedding.confirmation.helperText}</p></div><a className="button-link" href={wedding.confirmation.href || '#confirmacao'}>{wedding.confirmation.label}</a></div></div></section>
    <section className="section-band section-band--ornament" id="presentes"><img className="section-watermark section-watermark--right" src={assetUrl('/decor/arabesque-generated.png')} alt="" aria-hidden="true" /><div className="section-inner gift-section"><div><p className="eyebrow">MAEVE</p><h2><span>{gifts.sectionTitle}</span><img className="section-ornament" src={assetUrl('/decor/arabesque-medallion.png')} alt="" aria-hidden="true" /></h2><p className="section-lead">{gifts.message}</p><div className="pix-details"><p className="address-label">Chave Pix</p><strong>{gifts.pixKey}</strong><small>Recebedor: {gifts.pixReceiver}</small><button className="copy-button" type="button" onClick={() => { navigator.clipboard?.writeText(gifts.pixKey); setPixCopied(true); window.setTimeout(() => setPixCopied(false), 2200) }}>{pixCopied ? 'Copiado' : 'Copiar chave'}</button></div></div><div className="pix-visual">{gifts.qrCodeSrc ? <img src={assetUrl(gifts.qrCodeSrc)} alt="QR Code para contribuir via Pix" /> : <><span>PIX</span><small>QR Code opcional</small></>}</div></div></section>
  </main><footer className="site-footer"><span>{couple.names}</span><span>Feito com carinho</span></footer></div>
}
export default App






























