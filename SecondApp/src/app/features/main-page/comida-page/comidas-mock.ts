export interface IComidaItem {
    id: number;
    name: string;
    description?: string;
    prepTime: string;
    price: number;
    imageUrl: string;
}

const MockItemComidas: IComidaItem[] = [
    {
        id: 1,
        name: "Sushi Frito",
        description: "Sushi empanado e crocante",
        prepTime: "20 min",
        price: 28.50,
        imageUrl: "https://via.placeholder.com/150?text=Sushi+Frito"
    },
    {
        id: 2,
        name: "Pitaya Cara",
        description: "Smoothie de pitaya com frutas tropicais",
        prepTime: "10 min",
        price: 22.00,
        imageUrl: "https://via.placeholder.com/150?text=Pitaya+Cara"
    },
    {
        id: 3,
        name: "Hamburguer de Siri",
        description: "Hamburguer artesanal de siri com molho especial",
        prepTime: "25 min",
        price: 35.00,
        imageUrl: "https://via.placeholder.com/150?text=Hamburguer+de+Siri"
    },
    {
        id: 4,
        name: "Café Superfaturado",
        description: "Café especial de grãos raros",
        prepTime: "5 min",
        price: 15.00,
        imageUrl: "https://via.placeholder.com/150?text=Cafe+Superfaturado"
    },
    {
        id: 5,
        name: "Churrasco de Sambiquira",
        description: "Churrasco suculento com tempero exótico",
        prepTime: "1h 30 min",
        price: 60.00,
        imageUrl: "https://via.placeholder.com/150?text=Churrasco+de+Sambiquira"
    }
];

export default MockItemComidas;
