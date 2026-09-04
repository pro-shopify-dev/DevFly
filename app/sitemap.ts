import type { MetadataRoute } from 'next'
import { projects } from './portfolio/projects'
import { siteUrl } from '@/lib/site'
import { posts } from '@/lib/posts'

const staticRoutes = [
  '/',
  '/about',
  '/services',
  '/process',
  '/portfolio',
  '/contact',
  '/blog',
  '/partner',
  '/partner/apply',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
    changeFrequency: route === '/' ? 'weekly' : 'monthly',
    priority: route === '/' ? 1 : route === '/contact' || route === '/services' ? 0.9 : 0.8,
  }))

  const projectEntries: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${siteUrl}/portfolio/demo/${project.slug}`,
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  const postEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date) > new Date() ? new Date() : new Date(post.date),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [...staticEntries, ...postEntries, ...projectEntries]
}
