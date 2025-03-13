import React, { useState, useEffect } from 'react';
import { auth, db } from '../lib/firebase';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

export function Admin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [about, setAbout] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        setIsAuthenticated(true);
        // Fetch current data from Firestore
        const docRef = doc(db, 'profile', 'main');
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          setName(data.name || '');
          setAbout(data.about || '');
        }
      } else {
        setIsAuthenticated(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setError('');
    } catch (err) {
      setError('Invalid credentials');
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/');
    } catch (err) {
      setError('Error logging out');
    }
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const docRef = doc(db, 'profile', 'main');
      await updateDoc(docRef, { 
        name,
        about 
      });
      alert('Profile updated successfully!');
    } catch (err) {
      setError('Error updating profile');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="w-full max-w-md p-8">
          <h2 className="text-4xl font-bold text-white mb-12">ADMIN LOGIN</h2>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="w-full bg-transparent border-b border-white text-white placeholder-gray-400 py-3 focus:outline-none focus:border-cyan-500"
              />
            </div>
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full bg-transparent border-b border-white text-white placeholder-gray-400 py-3 focus:outline-none focus:border-cyan-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-white text-black py-4 font-bold hover:bg-gray-100 transition-colors"
            >
              LOGIN
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-bold">EDIT PROFILE</h2>
          <button
            onClick={handleLogout}
            className="px-8 py-3 border border-white hover:bg-white hover:text-black transition-colors"
          >
            LOGOUT
          </button>
        </div>
        
        {error && <p className="text-red-500 mb-6">{error}</p>}
        
        <form onSubmit={handleUpdate} className="space-y-8">
          <div>
            <label className="block text-sm mb-2">NAME</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className="w-full bg-transparent border-b border-white text-white p-4 focus:outline-none focus:border-cyan-500"
            />
          </div>

          <div>
            <label className="block text-sm mb-2">ABOUT TEXT (Use Enter key for paragraphs)</label>
            <textarea
              value={about}
              onChange={(e) => setAbout(e.target.value)}
              rows={12}
              placeholder="Enter your about text here..."
              className="w-full bg-transparent border border-white text-white p-4 focus:outline-none focus:border-cyan-500 font-mono"
            />
          </div>

          <div className="bg-neutral-900 p-4 rounded-lg">
            <h3 className="text-sm text-neutral-400 mb-4">PREVIEW</h3>
            <div className="space-y-4">
              {about.split('\n\n').map((paragraph, index) => (
                paragraph.trim() && (
                  <p key={index} className="text-neutral-300">{paragraph}</p>
                )
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="px-12 py-4 bg-white text-black font-bold hover:bg-gray-100 transition-colors"
          >
            UPDATE
          </button>
        </form>
      </div>
    </div>
  );
}