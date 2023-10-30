import Image from "next/image";
import styles from "../styles/Home.module.css"
import { Welcome } from "@/components/Welcome";
import { Plans } from "@/components/Plans";
import { Button } from "@/components/Button";


async function getBlogPosts() {
  const res = await fetch(`https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/entries?access_token=${process.env.CONTENTFUL_ACCESS_KEY}&content_type=post&order=-sys.createdAt`);
  
  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Home() {
  
  const blogs = await getBlogPosts();


  // Verifica se há itens no array
  if (blogs.items.length === 0) {
    return <div>Nenhum post disponível.</div>;
  }

  const latestPost = blogs.items[0];

  // Encontra a imagem associada ao último post
  const latestPostImage = blogs.includes.Asset.find(
    (a: any) => a.sys.id === latestPost.fields.coverImage.sys.id
  );

  const author = blogs.includes.Entry.find(
    (entry: any) => entry.sys.id === latestPost.fields.author.sys.id
  );

  return (
    <main>
      <Welcome/>
      <div className={styles.sectionBlack}>
      <h2 className={styles.titleH2}>Última publicação</h2>
        <div key={latestPost.sys.id} className={styles.containerBlog}>
          <div className={styles.containerImage}>
            {latestPostImage && (
              <Image
                src={"https:" + latestPostImage.fields.file.url}
                alt="image.."
                width={400}
                height={300}
              />
            )}
          </div>
          <div className={styles.containerInfo}>
            <h4>{latestPost.fields.title}</h4>
            <p className={styles.except}>{latestPost.fields.except}</p>
            <p>Autor: {author.fields.name}</p>
            <Button link={`/blog/$slug`} label="mais.."/>
          </div>
        </div>
      </div>
      <Plans/>
    </main>
  )
}
