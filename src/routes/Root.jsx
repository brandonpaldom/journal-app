import { Route, Routes } from 'react-router-dom'
import AuthRoutes from '../auth/routes/AuthRoutes'
import JournalRoutes from '../journal/routes/JournalRoutes'

export default function Root() {
  return (
    <Routes>
      <Route path="auth/*" element={<AuthRoutes />} />
      <Route path="/*" element={<JournalRoutes />} />
    </Routes>
  )
}
