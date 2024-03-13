import { User } from './user.type'
import { ResponseApi } from './utils.type'
//Type AuthResponse
export type AuthResponse = ResponseApi<{
  access_token: string
  expires: string
  user: User
}>
