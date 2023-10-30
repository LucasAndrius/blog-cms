interface Props {
    params: {
        slug: string
    }
}

export default function Post({params}:Props){
    return(
        <div>
            teste: {params.slug}
        </div>
    )
}

