import { Badge, Button, Card } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'

function Movie({ movie = {} }) {
  return (
    <Card className="detail-panel">
      <Card.Body>
        <div className="detail-topline">
          <p className="eyebrow mb-1">Thông tin phim</p>
          <Badge bg="warning" text="dark">
            {movie.status ?? 'Now showing'}
          </Badge>
        </div>
        <h2 className="detail-title">{movie.title ?? 'Untitled Movie'}</h2>
        <p className="detail-copy">{movie.description ?? 'No description available.'}</p>
        <div className="detail-metrics">
          <span className="rating-pill">★ {movie.rating ?? 'N/A'}</span>
          <span className="movie-meta">ID: {movie.id ?? 'Unknown'}</span>
        </div>
        <div className="detail-actions">
          <Button as={Link} to={`/movies/${movie.id}/review`} variant="warning">
            Viết review
          </Button>
          <Button as={Link} to="/" variant="outline-light">
            Quay lại
          </Button>
        </div>
      </Card.Body>
    </Card>
  )
}

export default Movie