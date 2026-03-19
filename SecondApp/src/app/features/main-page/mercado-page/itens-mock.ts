export interface IMercadoItem {
    id: number;
    name: string;
    description?: string;
    stock: number;
    price: number;
    imageUrl?: string;
}

const MockMercadoItem: IMercadoItem[] = [
    {
        id: 1,
        name: "Geladeira Frost Free 400L",
        description: "Geladeira com freezer, baixo consumo de energia",
        stock: 12,
        price: 3200,
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYB83SnGIZR338wWfwfGwo34oXasBJ_uE9CQ&s"
    },
    {
        id: 2,
        name: "Máquina de Lavar 12kg",
        description: "Lavadora automática com 12 programas",
        stock: 8,
        price: 2100,
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpwbDUVJowS8S41tiJqTIs0o7uMguvDasuSw&s"
    },
    {
        id: 3,
        name: "Micro-ondas 30L",
        description: "Micro-ondas com painel digital e grill",
        stock: 20,
        price: 650
    },
    {
        id: 4,
        name: "Air Fryer 5L",
        description: "Fritadeira sem óleo com controle de temperatura",
        stock: 15,
        price: 480,
        imageUrl: "https://preview.redd.it/petals-please-explain-this-v0-ys9w74vi2k6b1.jpg?auto=webp&s=e6c702cd05090e66b75bcdfb96939f0ef9a450c9"
    },
    {
        id: 5,
        name: "Liquidificador 1000W",
        description: "Liquidificador potente com 5 velocidades",
        stock: 25,
        price: 220
    }
];

export default MockMercadoItem;