import React from "react"
import { Link } from "gatsby"
/*
const PostsList = ({ postEdges }) => {
  return postEdges.map(({ node }) => {
    return <PostsListCard key={node.fields.slug} {...node} />
  })
}
*/
const Posts = ({ postEdges }) => {
  return postEdges.map(({ node }) => {
    return  <div key={node.fields.slug}>
        <h2 className="card-title">{node.frontmatter.title || node.fields.slug}</h2>
        <div
          dangerouslySetInnerHTML={{
            __html: node.frontmatter.description,
          }}
        />
        <Link to={`/${node.fields.slug}/`} className="btn btn-primary">
          Read More &rarr;
        </Link>
        Posted on {node.frontmatter.date}
    </div>
  })
}

export default Posts