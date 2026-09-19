'use client'

import { useEffect, useState } from 'react'

export type Profile = { name: string; email: string; phone: string; address: string }

export const defaultProfile: Profile = { name: 'Akshay Kumar', email: 'akshay@example.com', phone: '+91 98765 43210', address: 'Patna, Bihar, India' }

export function useProfile(): Profile {
  const [profile, setProfile] = useState<Profile>(defaultProfile)
  useEffect(() => {
    let mounted = true
    const read = () => {
      try {
        const saved = window.localStorage.getItem('tensorik-profile')
        if (saved && mounted) setProfile(JSON.parse(saved))
      } catch {}
    }
    read()
    window.addEventListener('tensorik-profile-updated', read)
    window.addEventListener('storage', read)
    return () => {
      mounted = false
      window.removeEventListener('tensorik-profile-updated', read)
      window.removeEventListener('storage', read)
    }
  }, [])
  return profile
}

export function initials(name: string): string {
  return name.split(' ').filter(Boolean).slice(0, 2).map(part => part[0]).join('').toUpperCase() || 'AK'
}