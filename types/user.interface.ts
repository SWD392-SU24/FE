export interface IUser {
  name: string
  email: string
}

export interface IUserDashboard {
  id: string
  firstName: string
  lastName?: string
  email: string
  password: string
  phoneNumber?: string
  dateOfBirth?: Date
  address?: string
  sex: number
  role: string
}

export type AddUserRequest = IUserDashboard

export type UpdateUserRequest = Omit<IUserDashboard, "password">
