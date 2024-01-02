
interface Category {
    category: string,
    description: string
}

interface CategoryDetail {
    category: string,
    description: string,
    entries: {
        count: number,
        websites: Resource[]
    }
}

interface Resource {
    name: string,
    link: string,
    description: string
}