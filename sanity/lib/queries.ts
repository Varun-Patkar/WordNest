import { defineQuery } from "next-sanity";

export const POSTS_QUERY = defineQuery(`*[_type=="post" && defined(slug.current) && !defined($search) || title match $search || category match $search || author->name match $search ] | order(_createdAt desc){
    _id,
    title,
    slug,
    _createdAt,
    author->{
      _id,id,name,image,bio
    },
    views,
    description,
    category,
    image
}`)

export const POST_BY_ID_QUERY =
  defineQuery(`*[_type == "post" && _id == $id][0]{
  _id, 
  title, 
  slug,
  _createdAt,
  author -> {
    _id,id, name, username, image, bio
  }, 
  views,
  description,
  category,
  image,
  blogText
}`);

export const POST_VIEWS_QUERY = defineQuery(`*[_type == "post" && _id == $id][0]{
  _id,views
  }`);

export const AUTHOR_BY_GITHUB_ID_QUERY = defineQuery(`*[_type == "author" && id == $id][0]{
  _id
  ,id
  ,name
  ,username
  ,email
  ,image
  ,bio
} `);

export const POSTS_BY_AUTHOR_QUERY = defineQuery(`*[_type=="post" && author->id==$id] | order(_createdAt desc){
    _id,
    title,
    slug,
    _createdAt,
    author->{
      _id,id,name,image,bio
    },
    views,
    description,
    category,
    image
}`)
export const PLAYLIST_BY_SLUG_QUERY = defineQuery(`*[_type == "playlist" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  select[]->{
    _id,
    _createdAt,
    title,
    slug,
    author->{
      _id,
      name,
      slug,
      image,
      bio
    },
    views,
    description,
    category,
    image,
    blogText
  }
}`);