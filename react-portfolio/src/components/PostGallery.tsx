import { postFeeds } from '../data/marketing'

const PostGallery = () => (
  <section className="gallery">
    <div className="gallery-header" data-fade>
      <h2>Galeria de Posts</h2>
      <p>
        Feeds atualizados com campanhas e conteúdos que fortalecem a marca, ampliam alcance e engajam a comunidade acadêmica e
        parceira.
      </p>
    </div>
    <div className="gallery-grid">
      {postFeeds.map(({ title, description, badge, meta, iframeSrc, link }) => (
        <article key={title} className="gallery-card" data-fade>
          <div className="instagram-embed">
            <iframe src={iframeSrc} title={`Feed do Instagram para ${title}`} loading="lazy" />
          </div>
          <h3>{title}</h3>
          <p>{description}</p>
          <div className="gallery-meta">
            <span className="badge">{badge}</span>
            <span>{meta}</span>
          </div>
          <div className="resource-links">
            <a className="resource-link" href={link} target="_blank" rel="noopener">
              Ver publicação
            </a>
          </div>
        </article>
      ))}
    </div>
  </section>
)

export default PostGallery
