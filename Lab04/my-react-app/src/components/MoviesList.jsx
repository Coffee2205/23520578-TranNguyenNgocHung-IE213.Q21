import { Badge, Button, Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function MoviesList({ movies = [] }) {
  return (
    <div className="movie-list-page">
      <div className="section-heading">
        <p className="eyebrow">Phim đang chiếu</p>
        <h2>Danh sách phim nổi bật</h2>
      </div>
      <Row className="g-4">
        {movies.map((movie) => (
          <Col key={movie.id ?? movie.title} md={6} lg={4}>
            <Card className="movie-card h-100">
              <Card.Body className="d-flex flex-column">
                <div className="d-flex justify-content-between align-items-start gap-3 mb-3">
                  <div>
                    <p className="movie-meta mb-1">{movie.genre ?? 'Drama'}</p>
                    <Card.Title className="movie-card-title mb-0">
                      {movie.title}
                    </Card.Title>
                  </div>
                  <Badge bg={movie.status === 'Coming soon' ? 'secondary' : 'warning'} text="dark">
                    {movie.status ?? 'Now showing'}
                  </Badge>
                </div>
                <Card.Text className="movie-card-desc flex-grow-1">
                  {movie.description}
                </Card.Text>
                <div className="movie-card-footer">
                  <span className="rating-pill">★ {movie.rating ?? 'N/A'}</span>
                  <Button as={Link} to={`/movies/${movie.id}`} variant="light">
                    Chi tiết
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default MoviesList