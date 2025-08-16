import { Routes, Route, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar.jsx'
import Layout from './components/Layout.jsx'
import Register from './pages/Register.jsx'
import Login from './pages/Login.jsx'
import Home from './pages/Home.jsx'
import Chat from './pages/Chat.jsx'
import Conversation from './pages/Conversation.jsx'
import CreatePost from './pages/CreatePost.jsx'
import Profile from './pages/Profile.jsx'
import UserSearch from './pages/UserSearch.jsx'

export default function App() {
  return (
    <div className="app">
      <div className="content">
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route element={<Layout />}>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/conversation" element={<Conversation />} />
            <Route path="/create-post" element={<CreatePost />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/user-search" element={<UserSearch />} />
          </Route>
          <Route path="*" element={<h2 style={{ padding: 16 }}>404 - Not Found</h2>} />
        </Routes>
      </div>
    </div>
  )
}
