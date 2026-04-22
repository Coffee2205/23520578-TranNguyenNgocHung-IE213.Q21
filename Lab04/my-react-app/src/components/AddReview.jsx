import { Button, Card, Form } from 'react-bootstrap'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function AddReview({ onSubmit }) {
  const [review, setReview] = useState('')
  const { id } = useParams()

  const handleSubmit = (event) => {
    event.preventDefault()
    if (onSubmit) {
      onSubmit(review)
    }
    setReview('')
  }

  return (
    <Card className="form-panel">
      <Card.Body>
        <p className="eyebrow mb-1">Review</p>
        <h2 className="mb-3">Viết nhận xét cho phim #{id}</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Nội dung review</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              value={review}
              onChange={(event) => setReview(event.target.value)}
              placeholder="Chia sẻ cảm nhận của bạn..."
            />
          </Form.Group>
          <div className="detail-actions">
            <Button type="submit" variant="warning">
              Gửi review
            </Button>
            <Button as={Link} to={`/movies/${id}`} variant="outline-light">
              Hủy
            </Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  )
}

export default AddReview