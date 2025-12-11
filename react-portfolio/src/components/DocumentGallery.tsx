import { marketingDocuments } from '../data/marketing'

const openPdf = (pdf: string) => {
  window.open(pdf, '_blank', 'noopener')
}

const DocumentGallery = () => (
  <section className="gallery">
    <div className="gallery-header" data-fade>
      <h2>Apresentações e Materiais</h2>
      <p>
        Pitch decks, guias de marca e materiais visuais apresentados em eventos e sessões estratégicas das organizações estudantis.
      </p>
    </div>
    <div className="gallery-grid">
      {marketingDocuments.map(({ title, description, badge, meta, pdf }) => (
        <article key={title} className="gallery-card" data-fade>
          <div
            className="document-thumbnail"
            role="link"
            tabIndex={0}
            aria-label={`Abrir ${title} em PDF`}
            onClick={() => openPdf(pdf)}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault()
                openPdf(pdf)
              }
            }}
          >
            <iframe src={`${pdf}#toolbar=0&navpanes=0&scrollbar=0`} title={`Prévia ${title}`} loading="lazy" />
            <span className="thumbnail-overlay">Abrir PDF</span>
          </div>
          <h3>{title}</h3>
          <p>{description}</p>
          <div className="gallery-meta">
            <span className="badge">{badge}</span>
            <span>{meta}</span>
          </div>
          <div className="resource-links">
            <button
              type="button"
              className="resource-link"
              onClick={() => openPdf(pdf)}
            >
              Abrir PDF
            </button>
          </div>
        </article>
      ))}
    </div>
  </section>
)

export default DocumentGallery
