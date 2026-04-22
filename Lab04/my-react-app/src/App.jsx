import { useState } from 'react'
import {
  Badge,
  Button,
  Card,
  Col,
  Container,
  Nav,
  Navbar,
  Row,
} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import {
  BrowserRouter,
  Link,
  Navigate,
  Route,
  Routes,
  useParams,
} from 'react-router-dom'

import MoviesList from './components/MoviesList.jsx'
import Movie from './components/Movie.jsx'
import AddReview from './components/AddReview.jsx'
import Login from './components/Login.jsx'

const movies = [
  {
    id: 1,
    title: 'Inception',
    description: 'A thief who steals corporate secrets through dream-sharing.',
    rating: 8.8,
    genre: 'Sci-Fi',
    status: 'Now showing',
  },
  {
    id: 2,
    title: 'Interstellar',
    description: 'A team travels through a wormhole to save humanity.',
    rating: 8.6,
    genre: 'Adventure',
    status: 'Now showing',
  },
  {
    id: 3,
    title: 'The Dark Knight',
    description: 'Batman faces the Joker in Gotham City.',
    rating: 9.0,
    genre: 'Action',
    status: 'Now showing',
  },
  {
    id: 4,
    title: 'Dune: Part Two',
    description: 'A mythic journey of power, survival, and destiny.',
    rating: 8.9,
    genre: 'Epic',
    status: 'Coming soon',
  },
]

const bookingSteps = ['Chọn rạp', 'Chọn phim', 'Chọn ngày', 'Chọn suất']

function BookingQuickAccess() {
  return (
    <section className="quick-booking">
      <Container>
        <div className="quick-booking__inner">
          <div>
            <p className="eyebrow">Đặt vé nhanh</p>
            <h2>Chọn phim, chọn suất và sẵn sàng vào rạp.</h2>
          </div>
          <div className="quick-booking__steps">
            {bookingSteps.map((step, index) => (
              <div key={step} className="quick-step">
                <span>{index + 1}</span>
                <strong>{step}</strong>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

function CinemaHero() {
  return (
    <section className="hero-banner">
      <Container>
        <Row className="align-items-center gy-4">
          <Col lg={7}>
            <div className="hero-copy">
              <Badge bg="warning" text="dark" className="hero-badge">
                Movie Reviews
              </Badge>
              <h1>Trải nghiệm điện ảnh theo phong cách rạp chiếu hiện đại.</h1>
              <p>
                Bố cục tập trung vào trải nghiệm xem phim, đặt vé nhanh, phim
                đang chiếu và phim sắp chiếu theo phong cách lấy cảm hứng từ
                Cinestar.
              </p>
              <div className="hero-actions">
                <Button as={Link} to="/" variant="warning" className="hero-btn">
                  Xem phim ngay
                </Button>
                <Button
                  as={Link}
                  to="/login"
                  variant="outline-light"
                  className="hero-btn"
                >
                  Đăng nhập
                </Button>
              </div>
            </div>
          </Col>
          <Col lg={5}>
            <Card className="feature-panel">
              <Card.Body>
                <p className="eyebrow">Phim nổi bật</p>
                <h3>Now Showing</h3>
                <div className="feature-list">
                  {movies.slice(0, 3).map((movie) => (
                    <Link
                      key={movie.id}
                      to={`/movies/${movie.id}`}
                      className="feature-item"
                    >
                      <div>
                        <strong>{movie.title}</strong>
                        <span>{movie.genre}</span>
                      </div>
                      <Badge bg="dark">{movie.rating}</Badge>
                    </Link>
                  ))}
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

function MoviesPage() {
  return <MoviesList movies={movies} />
}

function MoviePage() {
  const { id } = useParams()
  const movie = movies.find((item) => String(item.id) === id)

  return <Movie movie={movie} />
}

function AddReviewPage() {
  const { id } = useParams()

  return (
    <AddReview
      onSubmit={(review) => {
        console.log(`Review for movie ${id}:`, review)
      }}
    />
  )
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <BrowserRouter>
      <Navbar expand="lg" className="movie-navbar" variant="dark" sticky="top">
        <Container fluid="lg">
          <Navbar.Brand as={Link} to="/" className="movie-brand">
            Movie Reviews
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="main-navbar" />
          <Navbar.Collapse id="main-navbar">
            <Nav className="movie-nav mx-auto justify-content-center">
              <Nav.Link as={Link} to="/" className="movie-nav-link">
                Movies
              </Nav.Link>
            </Nav>
            <div className="movie-actions">
              <Button
                variant={isLoggedIn ? 'outline-light' : 'warning'}
                className="movie-auth-btn"
                onClick={() => setIsLoggedIn((current) => !current)}
              >
                {isLoggedIn ? 'Logout' : 'Login'}
              </Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <main className="app-shell">
        <CinemaHero />
        <BookingQuickAccess />
        <section className="content-section">
          <Container>
            <Routes>
              <Route path="/" element={<MoviesPage />} />
              <Route path="/movies/:id" element={<MoviePage />} />
              <Route path="/movies/:id/review" element={<AddReviewPage />} />
              <Route
                path="/login"
                element={
                  <Login
                    onLogin={() => {
                      setIsLoggedIn(true)
                    }}
                  />
                }
              />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Container>
        </section>
      </main>
    </BrowserRouter>
  )
}

export default App