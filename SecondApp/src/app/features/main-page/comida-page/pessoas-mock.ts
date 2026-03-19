export interface IPessoa {
    name: string,
    document?: string,
    email: string,
    telefone?: string
}

const MockPessoas: IPessoa[] = [
    {
        name: "Joyce Vasco",
        email: "joyjoy@gmail.com",
        document: "6346634"
    },
    {
        name: "Fialho",
        email: "fehfito@gmail.com",
        document: "6462346"
    }
]

export default MockPessoas