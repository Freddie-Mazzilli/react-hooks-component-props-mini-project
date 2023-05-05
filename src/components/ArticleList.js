import React from "react";
import Article from "./Article";

function ArticleList({posts}) {
    console.log(posts)
    return (
        <main>
            {posts.map((one) => {
                console.log(one)
                return <Article key={one.id} title={one.title} date={one.date} preview={one.preview}/>
            })}
        </main>
    )
}

export default ArticleList