import Image from "next/image";

async function getBlogPosts() {
    const res = await fetch(`https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/entries?access_token=${process.env.CONTENTFUL_ACCESS_KEY}&content_type=post&order=-sys.createdAt`);

    // Recommendation: handle errors
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data');
    }

    return res.json();
}

interface Asset {
    sys: {
        id: string;
        type: string;
    };
    fields: {
        title: string;
        description: string;
        file: {
        url: string;
        details: {
            size: number;
            image: {
            width: number;
            height: number;
        };
            fileName: string;
            contentType: string;
        };
    };
    };
}

export default async function Blog() {

    const blogPosts = await getBlogPosts();



    return (
        <div>
            <div>
                {blogPosts.items.map((post: any)=>(
                    <div key={post.sys.id}>
                        {post.fields.coverImage && (
                            <Image
                            src={`https:${blogPosts.includes.Asset.find(
                                (asset: Asset) => asset.sys.id === post.fields.coverImage.sys.id
                            ).fields.file.url}`}
                            alt={
                                blogPosts.includes.Asset.find(
                                    (asset: Asset) => asset.sys.id === post.fields.coverImage.sys.id
                                ).fields.description
                            }
                                width={400}
                                height={300}
                            />
                        )}
                        
                        <h4>{post.fields.title}</h4>
                    </div>
                ))}
            </div>
        </div>
    )
}
