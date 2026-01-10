
const baseUrl = process.env.WORDPRESS_URL;

export async function getCategories() {
    const response = await fetch(`${baseUrl}/wp-json/wp/v2/categories`)
    const data = await response.json()
    return data;
}

export async function getHero() {
    const response = await fetch(`${baseUrl}/wp-json/wp/v2/homehero`)
    const data = await response.json()
    return data;
}



export async function getServices(page = 1, perPage = 10, search = '') {
    const params = new URLSearchParams();

    params.set('per_page', perPage);
    params.set('page', page);
    if (search) params.set('search', search);

    const url = `${baseUrl}/wp-json/wp/v2/posts?_embed&${params}`;

    const res = await fetch(url);
    if (!res.ok) throw new Error('Failed to fetch WP services');

    const posts = await res.json();
    const totalPages = Number(res.headers.get('X-WP-TotalPages') ?? 1);

    return { posts, totalPages };
}

