import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { MoveUpRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export type ExpertiseItemProps = {
  id: number
  title: string
  icon: string
  description: string
  ctaText?: string
  className?: string
  alt?: string
}

export default function ExpertiseItem({ title, icon, alt, description, ctaText = 'View projects', className }: ExpertiseItemProps) {
  return (
    <div className={
      cn('flex flex-1 border border-[#4172f92d] flex-col space-y-6 rounded-2xl p-10', className)
    }>
      <Image src={icon} width={64} height={64} alt={alt || icon} />
      <p>{title}</p>
      <p>{description}</p>
      <Button variant={'outline'} className='w-fit rounded-full'>
        {ctaText} <MoveUpRight className='w-4 h-4' />
      </Button>
    </div>
  )
}