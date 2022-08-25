// Contexts
import { AuthData } from '../contexts/Auth'

// Services
import data from '../services/data.json'

const SignIn = async (email: string, password: string): Promise<AuthData> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const validation = data.users.find(value => {
        if (value.email === email && value.password === password) {
          return value
        }
      })

      if (password === validation?.password && email === validation?.email) {
        resolve({
          token: 'fake-token',
          email,
          username: validation.username,
        })
      } else if (password === '') {
        reject(new Error('Password cannot be null!'))
      } else {
        reject(new Error('Invalid password!'))
      }
    }, 500)
  })
}

export const authService = { SignIn }
