import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    console.error('App Crash caught by ErrorBoundary:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '30px', fontFamily: 'sans-serif', maxWidth: '600px', margin: '40px auto', background: '#fff1f2', borderRadius: '16px', border: '1px solid #fecdd3', color: '#9f1239' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold' }}>Terjadi Kesalahan pada Aplikasi</h2>
          <p style={{ marginTop: '10px', fontSize: '14px' }}>{this.state.error?.message || 'Error tidak diketahui'}</p>
          <button
            onClick={() => { localStorage.clear(); window.location.reload() }}
            style={{ marginTop: '15px', padding: '10px 16px', background: '#0d9488', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}
          >
            Bersihkan Cache & Muat Ulang
          </button>
        </div>
      )
    }
    return this.props.children
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
)