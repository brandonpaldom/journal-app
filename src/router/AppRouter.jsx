import { Navigate, Route, Routes } from 'react-router-dom'

import AuthRoutes from '../auth/routes/AuthRoutes'
import { useCheckAuth } from '../hooks'
import JournalRoutes from '../journal/routes/JournalRoutes'
import { CheckingAuth } from '../ui/components'

const AppRouter = () => {
  const { status } = useCheckAuth()

  if (status === 'checking') {
    return <CheckingAuth />
  }

  let content
  if (status === 'authenticated') {
    content = <Route path="*" element={<JournalRoutes />} />
  } else {
    content = <Route path="auth/*" element={<AuthRoutes />} />
  }

  return (
    <Routes>
      {content}
      <Route path="*" element={<Navigate to="/auth/login" />} />
    </Routes>
  )
}

export default AppRouter
