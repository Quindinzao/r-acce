// Contexts
import { AuthData } from '../contexts/Auth'

const SignIn = async (email: string, password: string): Promise<AuthData> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (password === 'johndoepass' && email === 'johndoe@email.com') {
        resolve({
          token: 'fake-token',
          email,
          username: 'John Doe',
        })
      } else if (password === '' && email === '') {
        reject(new Error('Password and email cannot be null!'))
      } else {
        reject(new Error('Invalid password and/or e-mail!'))
      }
    }, 500)
  })
}

export const authService = { SignIn }
