import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Hero } from './components/Hero';
import { RecipeCarousel } from './components/RecipeCarousel';
import { Footer } from './components/Footer';
import { Login } from './pages/Login';
import { SignUp } from './pages/SignUp';
import { AuthCallback } from './pages/AuthCallback';
import { AuthProvider } from './components/AuthProvider';

function Home() {
  return (
    <>
      <Hero />
      <RecipeCarousel />
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/auth/callback" element={<AuthCallback />} />
          </Routes>
        </Layout>
      </AuthProvider>
    </Router>
  );
}