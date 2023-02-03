export interface IClient {
    id: string
    name: string
    email: string
    tel: string
    createdAt: string
    contacts: IClient[]
}

export interface IClientCreate {
    name: string
    email: string
    tel: string
}

export interface IClientLogin {
    email: string
}
