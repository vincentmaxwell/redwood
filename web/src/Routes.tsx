import { Router, Route, PrivateSet, Set } from '@redwoodjs/router'

import { useAuth } from './auth'
import LoggedInLayout from './layouts/LoggedInLayout/LoggedInLayout'
import LoggedOutLayout from './layouts/LoggedOutLayout/LoggedOutLayout'

const Routes = () => {
  return (
    <Router useAuth={useAuth}>
      <Set wrap={LoggedOutLayout}>
        <Route path="/login" page={LoginPage} name="login" />
        <Route path="/signup" page={SignupPage} name="signup" />
        <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
        <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
      </Set>
      <PrivateSet unauthenticated="login">
        <Set wrap={LoggedInLayout}>
          <Route path="/terms" page={TermsPage} name="terms" />
          <Route path="/" page={ArticlesPage} name="articles" />
        </Set>
      </PrivateSet>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
