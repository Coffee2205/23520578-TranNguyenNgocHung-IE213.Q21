import { Button, Card, Form } from 'react-bootstrap'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    if (onLogin) {
      onLogin({ email, password })
    }
  }

  return (
    <Card className="form-panel auth-panel">
      <Card.Body>
        <p className="eyebrow mb-1">Tài khoản</p>
        <h2 className="mb-3">Đăng nhập để lưu review</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="your@email.com"
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Mật khẩu</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="••••••••"
            />
          </Form.Group>
          <div className="detail-actions">
            <Button type="submit" variant="warning">
              Login
            </Button>
            <Button as={Link} to="/" variant="outline-light">
              Về trang chủ
            </Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  )
}

export default Login