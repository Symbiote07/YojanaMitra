import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';

// Example App component demonstrating the styling system
function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Skip to main content link for accessibility */}
      <a href="#main-content" className="skip-to-main">
        Skip to main content
      </a>

      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container-custom">
          <div className="flex items-center justify-between h-16">
            <h1 className="text-2xl font-bold gradient-text">
              YojanaMitra
            </h1>
            <nav>
              <button className="btn btn-primary">
                Get Started
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main id="main-content" className="section">
        <div className="container-custom">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h2 className="heading-1 mb-4">
              Welcome to YojanaMitra
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Your AI-powered assistant for discovering and applying to government schemes
            </p>
          </div>

          {/* Alert Examples */}
          <div className="grid gap-4 mb-12 max-w-4xl mx-auto">
            <div className="alert alert-info">
              <p>New schemes have been added this month. Check them out!</p>
            </div>
            <div className="alert alert-success">
              <p>Your application has been approved successfully!</p>
            </div>
          </div>

          {/* Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="card card-hover">
              <div className="card-header">
                <h3 className="heading-4">Education Schemes</h3>
                <span className="badge badge-primary">Active</span>
              </div>
              <div className="card-body">
                <p className="text-gray-600">
                  Discover scholarships and educational support programs for students.
                </p>
              </div>
              <div className="card-footer">
                <button className="btn btn-primary w-full">
                  Explore Schemes
                </button>
              </div>
            </div>

            <div className="card card-hover">
              <div className="card-header">
                <h3 className="heading-4">Healthcare Benefits</h3>
                <span className="badge badge-success">Popular</span>
              </div>
              <div className="card-body">
                <p className="text-gray-600">
                  Access health insurance and medical assistance programs.
                </p>
              </div>
              <div className="card-footer">
                <button className="btn btn-secondary w-full">
                  View Details
                </button>
              </div>
            </div>

            <div className="card card-hover">
              <div className="card-header">
                <h3 className="heading-4">Financial Aid</h3>
                <span className="badge badge-warning">New</span>
              </div>
              <div className="card-body">
                <p className="text-gray-600">
                  Find loans, subsidies, and financial support schemes.
                </p>
              </div>
              <div className="card-footer">
                <button className="btn btn-outline w-full">
                  Learn More
                </button>
              </div>
            </div>
          </div>

          {/* Form Example */}
          <div className="max-w-md mx-auto">
            <div className="card">
              <div className="card-header">
                <h3 className="heading-4">Get Started</h3>
              </div>
              <div className="card-body">
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="input-label">
                      Full Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      className="input"
                      placeholder="Enter your name"
                    />
                    <p className="input-helper">
                      This will be used for your profile
                    </p>
                  </div>

                  <div>
                    <label htmlFor="email" className="input-label">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="input"
                      placeholder="you@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="category" className="input-label">
                      Category of Interest
                    </label>
                    <select id="category" className="input">
                      <option>Select a category</option>
                      <option>Education</option>
                      <option>Healthcare</option>
                      <option>Financial Aid</option>
                      <option>Agriculture</option>
                    </select>
                  </div>

                  <button type="submit" className="btn btn-primary w-full">
                    Create Account
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="container-custom">
          <p className="text-center text-gray-400">
            © 2024 YojanaMitra. Made with ❤️ for the people of India
          </p>
        </div>
      </footer>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
