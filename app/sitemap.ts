import type { MetadataRoute } from 'next'
import { projects } from './portfolio/projects'
import { siteUrl } from '@/lib/site'

const staticRoutes = [
  '/',
  '/about',
  '/services',
  '/process',
  '/portfolio',
  '/contact',
  '/privacy',
  '/terms',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: now,
    changeFrequency: route === '/' ? 'weekly' : 'monthly',
    priority: route === '/' ? 1 : route === '/contact' || route === '/services' ? 0.9 : 0.8,
  }))

  const projectEntries: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${siteUrl}/portfolio/demo/${project.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [...staticEntries, ...projectEntries]
}
